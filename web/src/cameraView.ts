import * as THREE from 'three';
import type { Camera } from './types';

/** Align the free viewer to a saved pose, using its vertical field of view. */
export function alignedView(source: Camera, aspect: number, near: number, far: number) {
  if (!source.registered || !source.R || !source.t) return null;
  const { R, t, K, height } = source;
  const camera = new THREE.PerspectiveCamera();
  const center = [0, 1, 2].map((i) => -R.reduce((sum, row, j) => sum + row[i] * t[j], 0));
  // OpenCV +Y down/+Z forward -> Three +Y up/-Z forward. Columns are world axes.
  const world = new THREE.Matrix4().set(
    R[0][0],
    -R[1][0],
    -R[2][0],
    center[0],
    R[0][1],
    -R[1][1],
    -R[2][1],
    center[1],
    R[0][2],
    -R[1][2],
    -R[2][2],
    center[2],
    0,
    0,
    0,
    1,
  );
  camera.position.fromArray(center);
  camera.quaternion.setFromRotationMatrix(world);
  camera.up.set(-R[1][0], -R[1][1], -R[1][2]);
  camera.near = near;
  camera.far = far;
  camera.aspect = aspect;
  camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan((height * K[2][2]) / (2 * K[1][1])));
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld(true);
  return camera;
}
