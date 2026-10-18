"""Read-only cross-resolution evaluation of the two actual 3,000-step runs.

Uses the learner's covariance/SH and the same gsplat arguments as training.
No optimizer is constructed; no checkpoint or user output is modified.
"""
from __future__ import annotations

import json
import math
from pathlib import Path

import cv2
import numpy as np
import torch

from minicolmap.rendering import algorithms as learner
from minicolmap.rendering.config import resolve_render_config
from minicolmap.rendering.data import load_training_scene
from minicolmap.rendering.gaussian_backend import gsplat_arguments
from minicolmap.rendering.gsplat_runtime import load_project_extension
from minicolmap.rendering.pipeline import _write_image

ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent
RUNS = {"train_d4": "ui_3dgs_20261018_141937_54cd7b",
        "train_d1": "ui_3dgs_20261018_142133_695361"}
load_project_extension()
from gsplat import rasterization


def quantiles(value):
    return torch.quantile(value.detach().float().flatten(),
                          value.new_tensor([0., .1, .5, .9, 1.])).cpu().tolist()


def render(state, frame, degree):
    K, R, t = [torch.as_tensor(getattr(frame, key), device="cuda", dtype=torch.float32)
               for key in ("K", "R", "t")]
    front = ((state["means"] @ R.T + t)[:, 2] > 0)
    means = state["means"][front]
    cov = learner.gaussian_covariance(state["log_scales"][front], state["quaternions"][front])
    colors = learner.evaluate_sh(state["sh_coeffs"][front], means + R.T @ t, degree)
    args = gsplat_arguments(means, cov, colors,
        state["opacity_logits"].sigmoid().reshape(-1)[front], K, R, t,
        frame.width, frame.height, means.new_zeros(3))
    rgb, alpha, _ = rasterization(**args)
    return rgb[0], alpha[0, ..., 0]


def aggregate(rows):
    mse = float(np.mean([row["mse"] for row in rows]))
    return {"views": len(rows), "mse": mse, "psnr": -10 * math.log10(mse),
            "mean_view_psnr": float(np.mean([row["psnr"] for row in rows])),
            "brightness_proxy_alpha_gt_05_mean": float(np.mean(
                [row["brightness_proxy_alpha_gt_05"] for row in rows])),
            "brightness_proxy_alpha_median_mean": float(np.mean(
                [row["brightness_proxy_alpha_median"] for row in rows]))}


def geometry_statistics(state, scene):
    """Reference projected footprint statistics, using final full-size frames."""
    cpu = {key: value.detach().cpu() for key, value in state.items()}
    covariance = learner.gaussian_covariance(cpu["log_scales"], cpu["quaternions"])
    footprints = []
    for image_id in scene.validation_ids:
        frame = scene.frames[image_id]
        K, R, t = [torch.as_tensor(getattr(frame, key), dtype=torch.float32)
                   for key in ("K", "R", "t")]
        projection = learner.project_gaussians(cpu["means"], covariance, K, R, t)
        uv = projection["means2d"]
        visible = (projection["visible"] & (uv[:, 0] >= 0) & (uv[:, 0] < frame.width)
                   & (uv[:, 1] >= 0) & (uv[:, 1] < frame.height))
        eigenvalues = torch.linalg.eigvalsh(projection["cov2d"][visible])
        footprints.append(eigenvalues.clamp_min(0).sqrt().numpy())
    scales = cpu["log_scales"].exp().numpy()
    probabilities = [0., .1, .5, .9, 1.]
    return {
        "projected_std_pixels_d1_quantiles_minor_major": np.quantile(
            np.concatenate(footprints), probabilities, axis=0).tolist(),
        "anisotropy_ratio_quantiles": np.quantile(
            scales.max(-1) / scales.min(-1), probabilities).tolist(),
        "mean_displacement_quantiles": np.quantile(np.linalg.norm(
            cpu["means"].numpy() - scene.points, axis=-1), probabilities).tolist()}


report = {"note": "PSNR = -10log10(mean MSE over equal-size views). Brightness > .15 is only a proxy, not a segmentation.",
          "runs": {}}
for label, name in RUNS.items():
    run = ROOT / "outputs" / name
    ckpt = torch.load(run / "checkpoint.pt", map_location="cuda", weights_only=True)
    status = json.loads((run / "run_status.json").read_text(encoding="utf-8"))
    logs = json.loads((run / "training.json").read_text(encoding="utf-8"))["metrics"]
    cfg = resolve_render_config(ckpt["config"])
    state = ckpt["state"]
    summary = json.loads((run / "summary.json").read_text(encoding="utf-8"))
    data = {"run": name, "config": cfg, "summary": summary,
            "gaussians": len(state["means"]),
            "scale_quantiles_min_p10_p50_p90_max": quantiles(state["log_scales"].exp()),
            "opacity_quantiles_min_p10_p50_p90_max": quantiles(state["opacity_logits"].sigmoid()),
            "training_loss_windows": {str(start): float(np.mean(
                [r["loss"] for r in logs if start <= r["step"] < start + 100]))
                for start in (1, 501, 1001, 2001, 2901)},
            "eval": {}}
    for downscale in (4, 1):
        eval_cfg = resolve_render_config({**cfg, "image_downscale": downscale})
        scene = load_training_scene(run / "source_model.json", status["dataset"], eval_cfg)
        rows = []
        with torch.no_grad():
            for image_id, frame in scene.frames.items():
                rgb, alpha = render(state, frame, ckpt["active_sh_degree"])
                target = torch.as_tensor(frame.rgb, device="cuda")
                mse = float((rgb - target).square().mean())
                mask = target.max(dim=-1).values > .15
                rows.append({"image_id": image_id,
                    "split": "validation" if image_id in scene.validation_ids else "train",
                    "mse": mse, "psnr": -10 * math.log10(mse),
                    "brightness_proxy_alpha_gt_05": float((alpha[mask] > .5).float().mean()),
                    "brightness_proxy_alpha_median": float(alpha[mask].median())})
                if image_id in (4, 40):
                    _write_image(OUT / f"{label}-eval_d{downscale}-view{image_id}.png", rgb.cpu().numpy())
                    _write_image(OUT / f"{label}-alpha_d{downscale}-view{image_id}.png",
                                 alpha[..., None].expand(-1, -1, 3).cpu().numpy())
                    _write_image(OUT / f"target-d{downscale}-view{image_id}.png", frame.rgb)
        data["eval"][f"downscale_{downscale}"] = {
            "width": frame.width, "height": frame.height,
            "validation": aggregate([r for r in rows if r["split"] == "validation"]),
            "train": aggregate([r for r in rows if r["split"] == "train"]),
            "views": rows}
        print(label, downscale, data["eval"][f"downscale_{downscale}"]["validation"], flush=True)
    data.update(geometry_statistics(state, scene))
    report["runs"][label] = data
(OUT / "resolution-comparison.json").write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8")
print("GPU read-only evaluation completed", flush=True)
