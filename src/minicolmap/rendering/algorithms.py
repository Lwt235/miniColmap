"""Student implementation points for the CPU teaching NeRF / 3DGS pipelines.

This module intentionally imports without PyTorch.  Install the optional
``render`` dependencies before implementing or running these functions.  Do not
convert differentiable tensors to NumPy or detach them inside rendering code.
Camera poses use the existing SfM convention ``Xc = R @ Xw + t``.

The TODOs are deliberate: the application must report an unfinished exercise,
not substitute a reference renderer or display a fabricated reconstruction.
"""
from __future__ import annotations

from typing import TYPE_CHECKING, TypedDict

if TYPE_CHECKING:
    import torch
    from torch import Tensor
    from torch.nn import Module


class RayRender(TypedDict):
    rgb: Tensor
    depth: Tensor
    opacity: Tensor
    weights: Tensor


class GaussianState(TypedDict):
    means: Tensor
    log_scales: Tensor
    quaternions: Tensor
    color_logits: Tensor
    opacity_logits: Tensor


class ProjectedGaussians(TypedDict):
    means2d: Tensor
    cov2d: Tensor
    depths: Tensor
    visible: Tensor


class GaussianRender(TypedDict):
    rgb: Tensor
    depth: Tensor
    opacity: Tensor


def require_torch():
    """Import the optional tensor backend only when rendering is requested."""
    try:
        import torch
    except ImportError as exc:
        raise RuntimeError(
            'NeRF / 3DGS requires PyTorch; install with python -m pip install -e ".[render]"'
        ) from exc
    return torch


def _tensor(
    value: Tensor,
    name: str,
    shape: tuple[int | None, ...] | None = None,
    *,
    reference: Tensor | None = None,
    check_finite: bool = True,
) -> Tensor:
    torch = require_torch()
    if not isinstance(value, torch.Tensor):
        raise ValueError(f"{name} must be a torch.Tensor")
    if not value.is_floating_point():
        raise ValueError(f"{name} must be floating point")
    if shape is not None:
        if value.ndim != len(shape) or any(
            expected is not None and actual != expected
            for actual, expected in zip(value.shape, shape)
        ):
            raise ValueError(f"{name} must have shape {shape}; got {tuple(value.shape)}")
    if reference is not None:
        if value.dtype != reference.dtype:
            raise ValueError(f"{name} must have dtype {reference.dtype}")
        if value.device != reference.device:
            raise ValueError(f"{name} must be on device {reference.device}")
    if check_finite and not torch.isfinite(value).all().item():
        raise ValueError(f"{name} must contain only finite values")
    return value


def generate_rays(K: Tensor, R: Tensor, t: Tensor, pixels: Tensor) -> tuple[Tensor, Tensor]:
    """N1: return world ray origins / unit directions, each shaped ``(N, 3)``.

    Inputs are floating tensors on one device with one dtype: K/R (3,3), t (3,),
    pixels (N,2), ordered (u,v). Integer pixel locations mean their exact stored
    coordinates; do not add 0.5. Each origin is ``-R.T @ t``. Use the inverse of
    K, including skew, then rotate into world coordinates and normalize. Keep
    autograd, dtype and device; support N=0 without changing the input tensors.
    Invalid shapes, nonfinite values, nonpositive focal lengths, a singular K
    or an improper rotation raise ValueError.
    """
    torch = require_torch()

    K = _tensor(K, "K", (3, 3))
    R = _tensor(R, "R", (3, 3), reference=K)
    t = _tensor(t, "t", (3,), reference=K)
    pixels = _tensor(pixels, "pixels", (None, 2), reference=K)

    if (K[0, 0] <= 0).item() or (K[1, 1] <= 0).item():
        raise ValueError("Focal lengths must be positive")
    if torch.linalg.matrix_rank(K).item() < 3:
        raise ValueError("Camera intrinsics are singular")
    I = torch.eye(3, dtype=R.dtype, device=R.device)
    if not torch.allclose(R @ R.T, I, atol=1e-6, rtol=0):
        raise ValueError("R must be orthogonal")
    if not torch.isclose(torch.linalg.det(R), R.new_tensor(1.0), atol=1e-6, rtol=0):
        raise ValueError("R must be a proper rotation")

    N, _ = pixels.shape
    pixels_h = torch.cat([
        pixels,
        torch.ones(
            (N, 1),
            dtype=pixels.dtype,
            device=pixels.device
        ),
    ], dim=1)

    directions_camera = torch.linalg.solve(K, pixels_h.T).T
    directions_world = directions_camera @ R
    directions_world = torch.nn.functional.normalize(directions_world, p=2, dim=-1)

    origin = -(R.T @ t)
    origins = origin.unsqueeze(0).expand(N, 3)
    return origins, directions_world


def positional_encoding(x: Tensor, levels: int, include_input: bool = True) -> Tensor:
    """N2: encode the last dimension while retaining all leading dimensions.

    Output order is ``[x, sin(pi*x), cos(pi*x), sin(2*pi*x), cos(2*pi*x), ...]``.
    Omit x only when include_input=False. Levels is a nonnegative integer; zero
    levels returns x (or an empty last dimension). Preserve dtype/device and
    gradients. Reject a negative/noninteger level count and nonfinite input.
    """
    torch = require_torch()

    x = _tensor(x, "x")

    if isinstance(levels, (bool, torch.Tensor)) or not isinstance(levels, int) or levels < 0:
        raise ValueError("levels must be a nonnegative integer")

    encoded = [x] if include_input else []
    for k in range(levels):
        frequency = (2 ** k) * torch.pi
        encoded.append(torch.sin(frequency * x))
        encoded.append(torch.cos(frequency * x))

    if not encoded:
        return x[..., :0]

    return torch.cat(encoded, dim=-1)


def volume_render(rgb: Tensor, sigma: Tensor, t_values: Tensor,
                  far: float | Tensor, background: Tensor) -> RayRender:
    """N3: differentiable emission-absorption compositing on unit-length rays.

    rgb is (N,S,3) in [0,1], sigma (N,S) >= 0, t_values (N,S) nondecreasing
    and >=0, S>=1. Far is a scalar or (N,) and must be >= each final sample.
    Last interval is far-last_t; it is never an artificial infinite interval.
    alpha_i=1-exp(-sigma_i*delta_i), weight_i=alpha_i*prod_{j<i}(1-alpha_j).
    Return rgb=(sum weight*color)+(1-sum weight)*background, unnormalized
    depth=sum weight*t, opacity=sum weight, and the original sample weights.
    Shapes: (N,3), (N,), (N,), (N,S). Background is (3,) in [0,1].
    Support an empty ray batch; validate shapes/finiteness and physical bounds
    with ValueError. Do not mutate inputs or sever autograd.
    """
    torch = require_torch()

    N, S, _ = rgb.shape
    if S < 1:
        raise ValueError("S must be >= 1")

    rgb = _tensor(rgb, "rgb", (None, None, 3))
    sigma = _tensor(sigma, "sigma", (N, S), reference=rgb)
    t_values = _tensor(t_values, "t_values", (N, S), reference=rgb)
    background = _tensor(background, "background", (3,), reference=rgb)
    if isinstance(far, torch.Tensor):
        far_tensor = _tensor(far, "far", () if far.ndim == 0 else (N,), reference=rgb)
    else:
        try:
            far_tensor = torch.as_tensor(far, dtype=rgb.dtype, device=rgb.device)
        except (TypeError, ValueError, RuntimeError) as exc:
            raise ValueError("Invalid far") from exc
        if far_tensor.ndim != 0:
            raise ValueError("Non-tensor far must be scalar")
    if far_tensor.ndim == 0:
        far_tensor = far_tensor.expand(N)

    if not torch.isfinite(far_tensor).all().item():
        raise ValueError("far must be finite")
    if torch.any((rgb < 0) | (rgb > 1)).item():
        raise ValueError("RGB must be in [0, 1]")
    if torch.any((background < 0) | (background > 1)).item():
        raise ValueError("background must be in [0, 1]")
    if torch.any(sigma < 0).item():
        raise ValueError("sigma must be nonnegative")
    if torch.any(t_values < 0).item():
        raise ValueError("t_values must be nonnegative")
    if torch.any(t_values[:, 1:] < t_values[:, :-1]).item():
        raise ValueError("t_values must be non-decreasing")
    if torch.any(far_tensor < t_values[:, -1]).item():
        raise ValueError("far must be >= the last sample")

    delta = torch.cat([
        t_values[:, 1:] - t_values[:, :-1],
        far_tensor[:, None] - t_values[:, -1:],
    ], dim=1)

    alpha = -torch.expm1(-sigma * delta)
    transmittance = torch.cumprod(
        torch.cat([
            torch.ones_like(alpha[:, :1]),
            1.0 - alpha[:, :-1],
        ], dim=1),
        dim=1,
    )
    weights = transmittance * alpha
    opacity = weights.sum(dim=1)
    rendered_rgb = (
        (weights[..., None] * rgb).sum(dim=1)
        + (1.0 - opacity)[:, None] * background
    )
    depth = (weights * t_values).sum(dim=1)

    return {
        "rgb": rendered_rgb,
        "depth": depth,
        "opacity": opacity,
        "weights": weights,
    }


def build_nerf(xyz_levels: int, dir_levels: int, hidden_dim: int) -> Module:
    """N4: construct a trainable torch.nn.Module; import torch inside this body.

    forward(xyz,directions) accepts (N,3) floating tensors and returns rgb
    (N,3) in [0,1] and nonnegative density (N,). Position drives the shared
    features/density; direction affects only the color head. Use N2 encodings.
    All trainable tensors must be registered Parameters/submodules so .to(),
    .state_dict(), and Adam work. A small MLP with at least two hidden layers
    suffices; the exercise does not prescribe exact parameter names or widths
    for the heads. Levels >=0 and hidden_dim >=4; invalid arguments raise
    ValueError. Preserve batched autograd in both inputs and parameters.
    """
    torch = require_torch()
    nn = torch.nn

    for name, value, minimum in (
        ("xyz_levels", xyz_levels, 0),
        ("dir_levels", dir_levels, 0),
        ("hidden_dim", hidden_dim, 4),
    ):
        if isinstance(value, bool) or not isinstance(value, int) or value < minimum:
            raise ValueError(f"{name} must be an integer >= {minimum}")

    xyz_dim = 3 * (2 * xyz_levels + 1)
    dir_dim = 3 * (2 * dir_levels + 1)

    class NeRF(nn.Module):
        def __init__(self):
            super().__init__()

            self.position_mlp = nn.Sequential(
                nn.Linear(xyz_dim, hidden_dim),
                nn.ReLU(),
                nn.Linear(hidden_dim, hidden_dim),
                nn.ReLU(),
            )

            self.density_head = nn.Linear(hidden_dim, 1)
            self.color_head = nn.Sequential(
                nn.Linear(hidden_dim + dir_dim, hidden_dim),
                nn.ReLU(),
                nn.Linear(hidden_dim, 3),
                nn.Sigmoid(),
            )

        def forward(self, xyz: Tensor, directions: Tensor) -> tuple[Tensor, Tensor]:
            xyz = _tensor(xyz, "xyz", (None, 3))
            directions = _tensor(directions, "directions", (xyz.shape[0], 3), reference=xyz)

            parameter = next(self.parameters())
            if xyz.dtype != parameter.dtype or xyz.device != parameter.device:
                raise ValueError("Input dtype/device must match model")

            xyz_encoded = positional_encoding(xyz, xyz_levels)
            dir_encoded = positional_encoding(directions, dir_levels)
            features = self.position_mlp(xyz_encoded)
            color_features = torch.cat([features, dir_encoded], dim=-1)

            sigma = torch.nn.functional.softplus(self.density_head(features)).squeeze(-1)
            rgb = self.color_head(color_features)
            return rgb, sigma

    return NeRF()


def initialize_gaussians(points: Tensor, colors: Tensor, initial_scale: float = 0.01,
                         initial_opacity: float = 0.1) -> GaussianState:
    """S1: initialize one Gaussian per sparse SfM point without changing SfM.

    points/colors (G,3) float, colors in [0,1]. Return means=points.clone(),
    log_scales (G,3)=log(initial_scale), identity wxyz quaternions (G,4),
    color_logits=logit(clamp(colors,1e-6,1-1e-6)), opacity_logits (G,) equal
    logit(initial_opacity). Return independent leaf tensors with requires_grad
    so the runner can optimize/checkpoint all five fields. Initial scale must
    be finite >0; opacity finite and strictly between 0 and 1. Preserve dtype
    and device; support G=0; invalid input raises ValueError.
    """
    raise NotImplementedError("TODO S1: initialize trainable Gaussians from sparse points and RGB")


def gaussian_covariance(log_scales: Tensor, quaternions: Tensor) -> Tensor:
    """S2: return full world covariance (G,3,3) from (G,3)/(G,4) parameters.

    Normalize wxyz quaternions, convert to proper rotation Q, and form
    Q @ diag(exp(log_scales)**2) @ Q.T. q and -q encode the same covariance.
    Reject zero-norm quaternions, shape mismatch, and nonfinite inputs with
    ValueError. Preserve gradients/device/dtype and support G=0. No isotropic
    replacement or diagonal-only shortcut: rotated ellipsoids must remain
    anisotropic.
    """
    raise NotImplementedError("TODO S2: construct rotated anisotropic 3D covariance")


def project_gaussians(means: Tensor, covariances: Tensor, K: Tensor, R: Tensor,
                      t: Tensor, min_variance: float = 0.3) -> ProjectedGaussians:
    """S3: project centers / covariances using the pinhole projection Jacobian.

    Inputs means (G,3), covariances (G,3,3), K/R (3,3), t (3,). Transform
    covariance with R, then use the Jacobian of the full K pinhole projection,
    including skew. cov2d=J @ camera_cov @ J.T + min_variance*I; min_variance
    is a positive pixel-squared variance, not its standard deviation.
    Return means2d (G,2), cov2d (G,2,2), depths (G,) and boolean visible (G,).
    Visible means finite and z>0; image-bound clipping belongs to rasterization.
    For z<=0, return means2d=0 and cov2d=min_variance*I while retaining signed
    depth. This avoids divisions by zero and NaNs in unused branches. Support
    G=0, retain gradients of visible entries, never mutate the source model.
    Invalid shapes/nonfinite input, nonpositive min_variance, invalid camera
    or a non-symmetric/non-positive-definite covariance raises ValueError.
    """
    raise NotImplementedError("TODO S3: project Gaussian centers and screen-space covariances")


def splat_gaussians(means2d: Tensor, cov2d: Tensor, depths: Tensor,
                    colors: Tensor, opacities: Tensor, width: int, height: int,
                    background: Tensor) -> GaussianRender:
    """S4: differentiable CPU reference splatting with front-to-back blending.

    Inputs (G,2),(G,2,2),(G,),(G,3),(G,), positive integer dimensions, (3,)
    background. Positive-depth Gaussians are sorted by depth (stable for ties).
    On integer pixel centers (u,v), evaluate exp(-0.5*delta.T@inv(cov)@delta).
    alpha=clamp(opacity*footprint,0,0.99), exclusive transmittance as in N3.
    Return rgb (H,W,3) including remaining background, unnormalized alpha-
    weighted depth (H,W), opacity (H,W). Zero/negative-depth inputs contribute
    nothing; do not normalize accumulated depth. Preserve gradients/device/
    dtype. Support G=0. Validate finite inputs, shapes, positive-definite
    symmetric covariances, colors/opacities/background in [0,1] with ValueError.
    A slow broadcast/pixel implementation is intentional for small teaching
    crops; this is not the real-time CUDA renderer of the original 3DGS paper.
    """
    raise NotImplementedError("TODO S4: rasterize and composite projected Gaussians")


def densify_and_prune(state: GaussianState, gradient_norm: Tensor,
                      threshold: float, min_opacity: float,
                      max_gaussians: int) -> GaussianState:
    """S5 (optional): deterministic topology change, separate from Adam updates.

    gradient_norm (G,) finite >=0; threshold finite >=0, min_opacity in [0,1],
    max_gaussians positive integer. First retain sigmoid(opacity_logits) >=
    min_opacity in original order, capped to max_gaussians. In remaining slots,
    append one child for each retained source with gradient_norm>threshold,
    again in source order. Only sources actually receiving a child have all
    three scales halved (subtract log(2) from log_scales); children share those
    halved scales. Child center is source + Q[:,0]*min(original_scale), using
    its normalized wxyz rotation. Original means stay fixed. Copy all other
    fields unchanged; no randomness or hidden gradient-based displacement.
    Return independent detached leaf tensors requiring gradients. Do not
    mutate input state. The caller must rebuild its optimizer after topology
    changes; the default teaching trainer leaves this hook disabled.
    """
    raise NotImplementedError("TODO S5: deterministically densify and prune Gaussian state")
