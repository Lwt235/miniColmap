export type Config = {
  seed: number;
  features: { max_features: number; ratio: number };
  geometry: { threshold_px: number; max_trials: number; min_inliers: number };
  mapping: {
    min_pnp_points: number;
    pnp_threshold_px: number;
    min_angle_deg: number;
    max_reprojection_px: number;
  };
  bundle_adjustment: {
    enabled: boolean;
    max_nfev: number;
    loss: 'linear' | 'huber' | 'soft_l1';
    f_scale: number;
  };
};
export type DatasetSummary = { id: string; name: string; path: string; image_count: number };
export type Dataset = DatasetSummary & {
  images: {
    id: number;
    name: string;
    width: number;
    height: number;
    camera_id: number;
    image_url?: string;
  }[];
  cameras: { id: number; width: number; height: number; K: number[][] }[];
};
export type Snapshot = { id: string; label: string; stage: string };
export type Run = {
  id: string;
  name: string;
  status: 'running' | 'completed' | 'failed' | 'cancelled' | 'interrupted' | 'imported';
  stage: string;
  dataset_id?: string;
  registered_images?: number;
  image_count?: number;
  point_count?: number;
  elapsed_seconds?: number;
  completed?: number;
  total?: number;
  message?: string;
  error?: string;
  warnings?: string[];
  snapshots: Snapshot[];
  images_available: boolean;
  output_path?: string;
};
export type Summary = {
  image_count: number;
  registered_images: number;
  point_count: number;
  observation_count: number;
  mean_reprojection_error_px: number | null;
  median_reprojection_error_px: number | null;
  p95_reprojection_error_px: number | null;
  positive_depth_ratio: number | null;
};
export type Camera = {
  image_id: number;
  name: string;
  camera_id: number;
  width: number;
  height: number;
  K: number[][];
  registered: boolean;
  R?: number[][];
  t?: number[];
  center?: number[];
  frustum?: number[][];
  observations: number;
  image_url?: string;
};
export type Scene = {
  revision: string;
  snapshot_id: string;
  summary: Summary;
  points: {
    ids: number[];
    positions: number[];
    colors: number[];
    errors: (number | null)[];
    track_lengths: number[];
  };
  cameras: Camera[];
  snapshots: Snapshot[];
};
export type PointDetail = {
  id: number;
  xyz: number[];
  color: number[];
  track_length: number;
  mean_error: number | null;
  observations: {
    image_id: number;
    keypoint_index: number;
    xy: number[];
    projected_xy: number[];
    error: number | null;
    image_url?: string;
  }[];
};
export type Selection = { kind: 'camera' | 'point'; id: number } | null;
export type DisplayOptions = {
  points: boolean;
  cameras: boolean;
  axes: boolean;
  pointSize: number;
  cameraScale: number;
  color: 'rgb' | 'error' | 'track';
  maxError: number;
  minTrack: number;
};
export type Artifact = { name: string; url: string };
export type Reports = {
  pairs: unknown;
  initialization: unknown;
  ba: {
    accepted: boolean;
    solver_success: boolean;
    nfev: number;
    before_mean_px: number;
    candidate_mean_px: number;
    message: string;
    rejection_reason: string | null;
  } | null;
  summary: unknown;
};
export type LogEntry = { time: string; kind: string; text: string };
