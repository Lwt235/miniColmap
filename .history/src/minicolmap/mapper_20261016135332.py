"""Learner-owned map management; read docs/04-增量建图与BA.md before M1-M3.

All config arguments take the FULL PipelineConfig returned by load_config().
Read config['mapping'] for local thresholds, config['seed'] for PnP, and
config['geometry']['min_inliers'] for M1's minimum initial points.
Do not pass only config['mapping']. Full schema: docs/08-配置参数参考.md.
"""
from dataclasses import dataclass
from typing import TypeAlias

import numpy as np
import einx
from numpy.typing import NDArray

from .models import (
    Reconstruction,
    Pose, Point3D,
    validate_reconstruction
)
from .config import PipelineConfig
from .tracks import Observation, Track
from .geometry import (
    essential_from_fundamental,
    triangulate_points,
    recover_relative_pose
)


# Each array has shape (N_i, 3), uint8 RGB in [0,255]. Its row k corresponds
# exactly to model.images[image_id].keypoints[k]; image IDs need not be contiguous.
FeatureColors: TypeAlias = dict[int, NDArray[np.uint8]]


@dataclass
class VerifiedPair:
    """Verified pixel matches: indices(M,2) stores keypoint indices, not coordinates.

    Column 0 indexes image_id1.keypoints; column 1 indexes image_id2.keypoints.
    F is float64(3,3), with x2.T @ F @ x1 == 0 in pixel coordinates.
    """

    image_id1: int
    image_id2: int
    indices: NDArray[np.int64]  # inlier keypoint indices(M,2), NOT xy coordinates
    F: NDArray[np.float64]      # x2.T F x1 = 0, pixel coordinates


def initialize_map(
    model: Reconstruction,
    pairs: list[VerifiedPair],
    tracks: list[Track],
    config: PipelineConfig,
    feature_colors: FeatureColors,
) -> None:
    """M1: select a geometrically sound initial pair and populate two poses + Point3D objects.

    Inspect candidate pairs with G6/G8, fix the first pose to (I,0), use ||t2||=1.
    Retain positive-depth, sufficient-angle, low-reprojection-error tracks only.
    Evaluate enough candidates: most matches alone do not imply usable baseline.
    Every stored point needs >=2 observations from registered images and a unique track.
    Set model.poses in initial-pair order (the BA runner freezes these two anchors).
    tracks is a list of tuples of (image_id, zero-based keypoint_idx), one
    scene-point correspondence group per track, at most one entry per image.
    Track-list offsets are temporary track IDs, not model.points IDs.
    feature_colors[image_id] is uint8(N_i,3) RGB, sampled in keypoint order;
    feature_colors[image_id][keypoint_idx] is that observation's RGB triplet.
    Config: geometry.min_inliers is the minimum AFTER all initialization filters;
    mapping.min_angle_deg is in degrees; mapping.max_reprojection_px bounds each
    retained observation's Euclidean pixel error. F/E estimation is upstream.
    Return None; mutate model only after initialization passes all validity checks.
    """
    if model.poses or model.points:
        raise ValueError("Initialization requires an empty map")
    if not pairs or not tracks:
        raise ValueError("No verified pairs/tracks; check overlap and feature diagnostics")

    min_points = config["geometry"]["min_inliers"]
    min_angle = np.deg2rad(config["mapping"]["min_angle_deg"])
    max_error = config["mapping"]["max_reprojection_px"]

    track_lookup = {}
    for track_id, track in enumerate(tracks):
        obs = list(track)
        for a in range(len(obs)):
            for b in range(a + 1, len(obs)):
                key = frozenset((obs[a], obs[b]))
                track_lookup[key] = track_id

    P1 = np.column_stack([
        np.eye(3), np.zeros(3)
    ])
    best = None
    best_score = (-1, -np.inf)

    for pair in pairs:
        i, j = pair.image_id1, pair.image_id2

        image1 = model.images[i]
        image2 = model.images[j]

        K1 = model.cameras[image1.camera_id].K
        K2 = model.cameras[image2.camera_id].K

        indices = np.asarray(pair.indices)
        if len(indices) < 8:
            continue
        x1_px = image1.keypoints[indices[:, 0]]
        x2_px = image2.keypoints[indices[:, 1]]

        try:
            E = essential_from_fundamental(pair.F, K1, K2)
            R, t, pose_mask = recover_relative_pose(
                E, x1_px, x2_px, K1, K2
            )
        except ValueError:
            continue

        t = t / np.linalg.norm(t)

        # because P1 is [I 0] and P2 is [R t], use normalized position
        x1_h = np.c_[x1_px, np.ones(len(x1_px))]
        x2_h = np.c_[x2_px, np.ones(len(x2_px))]
        r1 = np.linalg.solve(K1, x1_h.T).T
        r2 = np.linalg.solve(K2, x2_h.T).T
        x1_norm = r1[:, :2] / r1[:, 2:3]
        x2_norm = r2[:, :2] / r2[:, 2:3]
        P2 = np.column_stack([R, t])
        X = triangulate_points(P1, P2, x1_norm, x2_norm)
        X2 = X @ R.T + t
        depth_ok = (
            np.all(np.isfinite(X), axis=1)
            & (X[:, 2] > 1e-12)
            & (X2[:, 2] > 1e-12)
        )

        # calculate angle
        d1 = r1 / np.linalg.norm(r1, axis=1, keepdims=True)
        d2 = r2 / np.linalg.norm(r2, axis=1, keepdims=True)
        d2_world = d2 @ R
        cos_angle = einx.dot("N [i], N [i] -> N", d1, d2_world)
        angles = np.arccos(np.clip(cos_angle, -1.0, 1.0))
        angle_ok = angles > min_angle

        # Reprojection in pixel coordinates
        proj1_h = X @ K1.T
        proj2_h = X2 @ K2.T
        with np.errstate(divide="ignore", invalid="ignore"):
            proj1 = proj1_h[:, :2] / proj1_h[:, 2:3]
            proj2 = proj2_h[:, :2] / proj2_h[:, 2:3]
            error1 = np.linalg.norm(proj1 - x1_px, axis=1)
            error2 = np.linalg.norm(proj2 - x2_px, axis=1)
        reproj_ok = (
            np.isfinite(error1)
            & np.isfinite(error2)
            & (error1 <= max_error)
            & (error2 <= max_error)
        )

        valid = (
            pose_mask
            & depth_ok
            & angle_ok
            & reproj_ok
        )

        accepted = {}
        for k in np.flatnonzero(valid):
            fi, fj = map(int, indices[k])
            obs1 = (i, fi)
            obs2 = (j, fj)
            key = frozenset((obs1, obs2))
            track_id = track_lookup.get(key)

            if track_id is None:
                continue

            candidate_error = error1[k] + error2[k]
            if (
                track_id not in accepted
                or candidate_error < accepted[track_id][4]
            ):
                accepted[track_id] = {
                    X[k].copy(),
                    obs1, obs2, k,
                    candidate_error,
                }

        count = len(accepted)
        if count < min_points:
            continue

        # Prefer more points; break ties by median angle
        chosen_rows = [v[3] for v in accepted.values()]
        median_angle = float(np.median(angles[chosen_rows]))
        score = (count, median_angle)
        if score > best_score:
            best_score = score
            best = (i, j, R.copy(), t.copy(), accepted)

    if best is None:
        raise ValueError("No suitable initial image pair found")

    # Build candidate records without mutating model
    i, j, R, t, accepted = best
    poses = {
        i: Pose(np.eye(3), np.zeros(3)),
        j: Pose(R, t),
    }
    points = {}

    for point_id, (_, (xyz, obs1, obs2, _)) in enumerate(
        sorted(accepted.items()), start=1
    ):
        img_id, feat_id = obs1
        color = feature_colors[img_id][feat_id]
        points[point_id] = Point3D(
            id=point_id,
            xyz=xyz,
            color=color,
            observations=(obs1, obs2),
        )

    # Validate everything before committing
    candidate = Reconstruction(
        cameras=model.cameras,
        images=model.images,
        poses=poses,
        points=points,
    )
    validate_reconstruction(candidate)
    model.poses.update(poses)
    model.points.update(points)


def register_next_image(
    model: Reconstruction,
    pairs: list[VerifiedPair],
    tracks: list[Track],
    config: PipelineConfig,
) -> bool:
    """M2: add exactly one camera via existing point-track correspondences, or return False.

    For each unregistered image, gather unique 2D-3D pairs using keypoint/track membership.
    Each Track contains (image_id, zero-based keypoint_idx) observations;
    pairs contains verified two-view matches, not 2D-3D correspondences.
    Try candidates in descending support order; use backends.solve_pnp (already provided).
    Require mapping.min_pnp_points unique pairs before PnP and at least that many
    retained positive-depth inliers afterwards. Pass mapping.pnp_threshold_px
    (pixels, NOT squared) and config['seed'] to backends.solve_pnp.
    Added observations must also satisfy mapping.max_reprojection_px; recheck
    min_pnp_points after this final filter. No inlier-ratio threshold is configured.
    A failed candidate must not corrupt model or prevent trying other candidates.
    On success add its Pose and valid observations to already triangulated points.
    Match reprojection thresholds with that image's Camera.K; IDs are not array indices.
    Return False only after all remaining candidates were tried without a valid registration.
    """
    if len(model.poses) < 2:
        raise ValueError("Register images only after two-view initialization")
    raise NotImplementedError("TODO M2: implement track-based 2D-3D registration")


def triangulate_new_tracks(
    model: Reconstruction,
    tracks: list[Track],
    config: PipelineConfig,
    feature_colors: FeatureColors,
) -> int:
    """M3: create valid new points from tracks with >=2 registered observations.

    Choose a pair with sufficient ray angle. Use G7 and check EVERY registered observation.
    Keep only finite points with positive depth, angle>=min_angle_deg and bounded pixel error.
    Never create a second Point3D for a track already associated with a point.
    Gather RGB from feature_colors[image_id][keypoint_idx], allocate an unused positive point ID.
    tracks: list of Track tuples, each containing (image_id, keypoint_idx).
    feature_colors: image-ID dictionary of uint8 RGB arrays (N_i,3), whose
    row indices exactly match that image's keypoints (not Point3D IDs).
    Config: mapping.min_angle_deg (degrees) and mapping.max_reprojection_px
    (Euclidean pixels per observation). geometry.min_inliers is NOT a minimum
    point batch size here: one valid new point is allowed.
    Return number of new points; existing point/observation links remain consistent.
    """
    if len(model.poses) < 2:
        raise ValueError("Triangulation requires registered cameras")
    raise NotImplementedError("TODO M3: implement track triangulation and geometric filtering")

