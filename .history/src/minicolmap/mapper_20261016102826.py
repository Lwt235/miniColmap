"""Learner-owned map management; read docs/04-增量建图与BA.md before M1-M3.

All config arguments take the FULL PipelineConfig returned by load_config().
Read config['mapping'] for local thresholds, config['seed'] for PnP, and
config['geometry']['min_inliers'] for M1's minimum initial points.
Do not pass only config['mapping']. Full schema: docs/08-配置参数参考.md.
"""
from dataclasses import dataclass

import numpy as np

from .models import Reconstruction
from .config import PipelineConfig


@dataclass
class VerifiedPair:
    image_id1: int
    image_id2: int
    indices: np.ndarray  # inlier keypoint indices(M,2), NOT xy coordinates
    F: np.ndarray        # x2.T F x1 = 0, pixel coordinates


def initialize_map(model: Reconstruction, pairs: list[VerifiedPair], tracks, config: PipelineConfig, feature_colors) -> None:
    """M1: select a geometrically sound initial pair and populate two poses + Point3D objects.

    Inspect candidate pairs with G6/G8, fix the first pose to (I,0), use ||t2||=1.
    Retain positive-depth, sufficient-angle, low-reprojection-error tracks only.
    Evaluate enough candidates: most matches alone do not imply usable baseline.
    Every stored point needs >=2 observations from registered images and a unique track.
    Set model.poses in initial-pair order (the BA runner freezes these two anchors).
    feature_colors[image_id] is uint8(N,3), sampled at the original keypoint positions.
    Config: geometry.min_inliers is the minimum AFTER all initialization filters;
    mapping.min_angle_deg is in degrees; mapping.max_reprojection_px bounds each
    retained observation's Euclidean pixel error. F/E estimation is upstream.
    Return None; mutate model only after initialization passes all validity checks.
    """
    if model.poses or model.points:
        raise ValueError("Initialization requires an empty map")
    if not pairs or not tracks:
        raise ValueError("No verified pairs/tracks; check overlap and feature diagnostics")
    raise NotImplementedError("TODO M1: implement initial-pair selection and map initialization")


def register_next_image(model: Reconstruction, pairs, tracks, config: PipelineConfig) -> bool:
    """M2: add exactly one camera via existing point-track correspondences, or return False.

    For each unregistered image, gather unique 2D-3D pairs using keypoint/track membership.
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


def triangulate_new_tracks(model: Reconstruction, tracks, config: PipelineConfig, feature_colors) -> int:
    """M3: create valid new points from tracks with >=2 registered observations.

    Choose a pair with sufficient ray angle. Use G7 and check EVERY registered observation.
    Keep only finite points with positive depth, angle>=min_angle_deg and bounded pixel error.
    Never create a second Point3D for a track already associated with a point.
    Gather RGB from feature_colors[image_id][keypoint_idx], allocate an unused positive point ID.
    Config: mapping.min_angle_deg (degrees) and mapping.max_reprojection_px
    (Euclidean pixels per observation). geometry.min_inliers is NOT a minimum
    point batch size here: one valid new point is allowed.
    Return number of new points; existing point/observation links remain consistent.
    """
    if len(model.poses) < 2:
        raise ValueError("Triangulation requires registered cameras")
    raise NotImplementedError("TODO M3: implement track triangulation and geometric filtering")

