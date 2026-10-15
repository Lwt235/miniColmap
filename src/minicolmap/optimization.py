"""Ready solver wrapper. B1 residuals and map management remain learner implementations."""
import numpy as np

from .ba import bundle_residuals
from .metrics import reconstruction_summary
from .models import Pose, validate_reconstruction


def refine_model(model, anchor_image_ids, settings):
    """Teaching BA: freeze two initial poses, optimize other poses and all points, fixed K.

    Freezing both poses is an extra constraint, not merely a full BA gauge fix.
    Requires all cameras to share K. A sparse numerical Jacobian connects each
    observation only to its variable camera and its point.
    Reject a candidate if any stored observation has non-positive depth or nonfinite projection.
    Accept only finite, non-worsening mean pixel error; retain the original model otherwise.
    """
    from scipy.optimize import least_squares
    from scipy.sparse import lil_matrix
    from scipy.spatial.transform import Rotation
    import copy

    validate_reconstruction(model)
    ids, point_ids = sorted(model.poses), sorted(model.points)
    anchors = set(anchor_image_ids)
    if len(anchors) != 2 or not anchors <= set(ids) or not point_ids:
        raise ValueError("Teaching BA needs two anchor images and nonempty points")
    if any(len(model.points[i].observations) < 2 for i in point_ids):
        raise ValueError("BA input points need at least two registered observations")
    before = reconstruction_summary(model)
    if before['positive_depth_ratio'] != 1.0:
        raise ValueError("BA input must contain only positive-depth observations")
    matrices = [model.cameras[model.images[i].camera_id].K for i in ids]
    K = matrices[0]
    if not all(np.allclose(k, K) for k in matrices):
        raise ValueError("Teaching BA currently requires shared intrinsics")
    camera_lookup = {image_id: idx for idx, image_id in enumerate(ids)}
    rotvecs = Rotation.from_matrix(np.stack([model.poses[i].R for i in ids])).as_rotvec()
    translations = np.stack([model.poses[i].t for i in ids])
    points = np.stack([model.points[i].xyz for i in point_ids])
    variable = np.asarray([j for j, i in enumerate(ids) if i not in anchors], dtype=int)
    camera_indices, point_indices, pixels = [], [], []
    for pidx, point_id in enumerate(point_ids):
        for image_id, keypoint_idx in model.points[point_id].observations:
            camera_indices.append(camera_lookup[image_id])
            point_indices.append(pidx)
            pixels.append(model.images[image_id].keypoints[keypoint_idx])
    camera_indices = np.asarray(camera_indices, dtype=np.int64)
    point_indices = np.asarray(point_indices, dtype=np.int64)
    pixels = np.asarray(pixels)
    x0 = np.concatenate([np.column_stack([rotvecs[variable], translations[variable]]).ravel(), points.ravel()])
    pose_size = 6 * len(variable)
    # Frozen cameras have no columns. Each du/dv pair depends on one point
    # (three columns), and possibly one variable camera (six columns).
    sparsity = lil_matrix((2 * len(pixels), len(x0)), dtype=np.int8)
    camera_offsets = {int(camera_idx): 6 * idx for idx, camera_idx in enumerate(variable)}
    for obs_idx, (camera_idx, point_idx) in enumerate(zip(camera_indices, point_indices)):
        rows = slice(2 * obs_idx, 2 * obs_idx + 2)
        camera_offset = camera_offsets.get(int(camera_idx))
        if camera_offset is not None:
            sparsity[rows, camera_offset:camera_offset + 6] = 1
        point_offset = pose_size + 3 * int(point_idx)
        sparsity[rows, point_offset:point_offset + 3] = 1
    sparsity = sparsity.tocsr()

    def unpack(x):
        r, t = rotvecs.copy(), translations.copy()
        poses = x[:pose_size].reshape(-1, 6)
        r[variable], t[variable] = poses[:, :3], poses[:, 3:]
        return r, t, x[pose_size:].reshape(-1, 3)

    def residual(x):
        r, t, p = unpack(x)
        values = np.asarray(bundle_residuals(r, t, p, K, camera_indices, point_indices, pixels),
                            dtype=np.float64)
        if values.shape != (2 * len(pixels),) or not np.isfinite(values).all():
            raise ValueError("B1 must return a finite vector with exactly two residuals per observation")
        return values

    def report(result, accepted=False, candidate_mean=None, rejection_reason=None):
        return {'accepted': bool(accepted),
                'solver_success': bool(result.success) if result is not None else False,
                'nfev': int(result.nfev) if result is not None else 0,
                'before_mean_px': before['mean_reprojection_error_px'],
                'candidate_mean_px': candidate_mean,
                'message': str(result.message) if result is not None else str(rejection_reason),
                'rejection_reason': rejection_reason}

    try:
        result = least_squares(residual, x0, method='trf', jac_sparsity=sparsity,
                               loss=settings['loss'], f_scale=settings['f_scale'],
                               max_nfev=settings['max_nfev'])
    except (ValueError, FloatingPointError, OverflowError) as exc:
        # B1 may reject a zero-depth trial point. No caller model was mutated.
        # Preserve NotImplementedError so unfinished B1 still has TODO status.
        return report(None, rejection_reason=f'Optimization rejected a trial: {exc}')
    try:
        solution = np.asarray(result.x, dtype=np.float64)
    except (TypeError, ValueError) as exc:
        return report(result, rejection_reason=f'Optimizer returned invalid parameters: {exc}')
    if solution.shape != x0.shape or not np.isfinite(solution).all():
        return report(result, rejection_reason='Optimizer returned invalid or nonfinite parameters')
    try:
        candidate = copy.deepcopy(model)
        r, t, p = unpack(solution)
        for j in variable:
            image_id = ids[j]
            candidate.poses[image_id] = Pose(Rotation.from_rotvec(r[j]).as_matrix(), t[j])
        for j, point_id in enumerate(point_ids):
            candidate.points[point_id].xyz = p[j].copy()
        validate_reconstruction(candidate)
        after = reconstruction_summary(candidate)
    except (ValueError, FloatingPointError, OverflowError) as exc:
        return report(result, rejection_reason=f'Invalid optimized candidate: {exc}')
    if after['positive_depth_ratio'] != 1.0:
        return report(result, candidate_mean=after['mean_reprojection_error_px'],
                      rejection_reason='Optimized candidate has nonpositive-depth observations')
    accepted = after['mean_reprojection_error_px'] <= before['mean_reprojection_error_px'] + 1e-9
    if accepted:
        model.poses, model.points = candidate.poses, candidate.points
    return report(result, accepted, after['mean_reprojection_error_px'],
                  None if accepted else 'Optimized candidate worsened mean pixel error')
