"""Feature-track assembly exercise T1; input edges must already be inliers."""

from __future__ import annotations

import numpy as np
from numpy.typing import NDArray

Observation = tuple[int, int]  # (image_id, feature_index)
Track = tuple[Observation, ...]


def build_tracks(pair_matches: dict[tuple[int, int], NDArray]) -> list[Track]:
    """T1: Join verified pair matches into deterministic multi-view tracks.

    A key (i, j) identifies two distinct nonnegative image IDs. Its
    integer array (M, 2) contains [feature_in_i, feature_in_j], also
    nonnegative. Return connected components with >= 2 observations,
    each tuple lexicographically sorted; sort the list lexicographically.
    Duplicate/reversed edges have no effect. If a component contains
    two distinct features from one image, reject the *whole component*.
    This deliberately conservative conflict policy avoids order-dependent
    merging. No descriptor matching or epipolar verification happens here.

    Checkpoint: why can a single false match corrupt several images' tracks?
    """
    if not isinstance(pair_matches, dict):
        raise ValueError("pair_matches must be a dict")
    for pair, matches in pair_matches.items():
        if not isinstance(pair, tuple) or len(pair) != 2:
            raise ValueError("each key must be (image_id_1, image_id_2)")
        if any(isinstance(v, (bool, np.bool_)) or not isinstance(v, (int, np.integer)) or v < 0 for v in pair):
            raise ValueError("image IDs must be nonnegative integers")
        if pair[0] == pair[1]:
            raise ValueError("a pair must contain two distinct images")
        matches = np.asarray(matches)
        if matches.ndim != 2 or matches.shape[1] != 2:
            raise ValueError("each match array must have shape (M, 2)")
        if not np.issubdtype(matches.dtype, np.integer) or np.any(matches < 0):
            raise ValueError("feature indices must be nonnegative integers")
    # TODO T1: graph/union-find components -> detect conflict -> sort tracks.
    raise NotImplementedError("TODO T1: implement conflict-aware feature tracks")
