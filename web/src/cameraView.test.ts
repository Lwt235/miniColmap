import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import type { Camera } from './types';
import { alignedView } from './cameraView';

const source: Camera = {
  image_id: 13,
  camera_id: 1,
  name: 'frame.png',
  width: 640,
  height: 480,
  registered: true,
  observations: 20,
  K: [
    [730, 17, 287],
    [0, 810, 253],
    [0, 0, 1],
  ],
  R: [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
  t: [0, 0, 0],
};

describe('camera alignment for a free viewpoint', () => {
  it.each([
    source,
    {
      ...source,
      R: [
        [0, 0, 1],
        [0, 1, 0],
        [-1, 0, 0],
      ],
      t: [-3, -2, 1],
    },
    {
      ...source,
      R: [
        [1, 0, 0],
        [0, 0, -1],
        [0, 1, 0],
      ],
      t: [2, -1, 3],
      K: source.K.map((row) => row.map((x) => x * 2)),
    },
  ])('preserves the saved position, direction and roll for R=$R', (model) => {
    const view = alignedView(model, 16 / 9, 0.001, 1000)!;
    for (const p of [
      [-0.3, 0.2, 3],
      [0.4, -0.1, 4],
      [0, 0, 2],
    ]) {
      // Start from a known point in camera coordinates and transform into world coordinates.
      const world = [0, 1, 2].map((i) =>
        model.R!.reduce((sum, row, j) => sum + row[i] * (p[j] - model.t![j]), 0),
      );
      const local = new THREE.Vector3(...world).applyMatrix4(view.matrixWorldInverse);
      [local.x, local.y, local.z].forEach((value, i) =>
        expect(value).toBeCloseTo(p[i] * (i === 0 ? 1 : -1), 8),
      );
      const ndc = new THREE.Vector3(...world).project(view);
      expect(ndc.z).toBeGreaterThan(-1);
      expect(ndc.z).toBeLessThan(1);
    }
    const centerInCamera = model.R!.map((row, i) =>
      row.reduce((sum, value, j) => sum + value * view.position.getComponent(j), model.t![i]),
    );
    centerInCamera.forEach((x) => expect(x).toBeCloseTo(0));
  });
  it('does not invent a viewpoint for an unregistered photo', () => {
    expect(
      alignedView(
        { ...source, registered: false, R: undefined, t: undefined },
        16 / 9,
        0.001,
        1000,
      ),
    ).toBeNull();
  });
  it('uses a responsive full-panel perspective without changing the aligned pose on resize', () => {
    const view = alignedView(source, 16 / 9, 0.001, 1000)!;
    const position = view.position.clone(),
      rotation = view.quaternion.clone();
    expect(view.aspect).toBe(16 / 9);
    view.aspect = 4 / 3;
    view.updateProjectionMatrix();
    expect(view.position.equals(position)).toBe(true);
    expect(view.quaternion.equals(rotation)).toBe(true);
    const pixelAspect = view.projectionMatrix.elements[5] / view.projectionMatrix.elements[0];
    expect(pixelAspect).toBeCloseTo(4 / 3);
  });
});
