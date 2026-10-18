/** Browser/API contract fixture only. No fixture output is evidence of a trained NeRF/3DGS. */
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../../', import.meta.url));
const base = (process.env.WORKBENCH_URL || 'http://127.0.0.1:8765').replace(/\/$/, '');
assert(['127.0.0.1', 'localhost'].includes(new URL(base).hostname));
const output = path.join(root, '.cache/rendering-contract-e2e');
await mkdir(output, { recursive: true });
const config = {
  method: 'nerf',
  iterations: 20,
  learning_rate: 0.001,
  image_downscale: 8,
  rays_per_batch: 256,
  samples_per_ray: 32,
  near: 0.1,
  far: 4,
  holdout_every: 4,
  seed: 0,
  device: 'cpu',
  preview_every: 10,
  nerf: { levels_xyz: 6, levels_dir: 4, hidden_dim: 64 },
  gaussian: { initial_scale: 0.01, initial_opacity: 0.1, max_gaussians: 512, densify_every: 0 },
};
const sfm = {
  id: 'fixture-sfm',
  name: 'INTERFACE CONTRACT FIXTURE — source',
  status: 'completed',
  stage: 'done',
  snapshots: [],
  registered_images: 2,
  image_count: 2,
  point_count: 4,
  images_available: true,
};
const camera = {
  image_id: 1,
  camera_id: 1,
  name: 'fixture.png',
  registered: true,
  K: [
    [100, 0, 31.5],
    [0, 100, 31.5],
    [0, 0, 1],
  ],
  R: [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
  t: [0, 0, 0],
  center: [0, 0, 0],
  width: 64,
  height: 64,
  observations: 4,
  image_url: '/api/fixture/image.png',
};
const scene = {
  revision: 'fixture-v1',
  snapshot_id: 'latest',
  snapshots: [],
  summary: {
    image_count: 2,
    registered_images: 2,
    point_count: 4,
    observation_count: 8,
    mean_reprojection_error_px: 0.2,
    median_reprojection_error_px: 0.2,
    p95_reprojection_error_px: 0.3,
    positive_depth_ratio: 1,
  },
  points: {
    ids: [1, 2, 3, 4],
    positions: [-0.1, -0.1, 1, 0.1, -0.1, 1, 0.1, 0.1, 1, -0.1, 0.1, 1],
    colors: [255, 0, 0, 0, 255, 0, 0, 0, 255, 255, 255, 0],
    errors: [0.2, 0.2, 0.2, 0.2],
    track_lengths: [2, 2, 2, 2],
  },
  cameras: [camera, { ...camera, image_id: 2, t: [0.1, 0, 0], center: [-0.1, 0, 0] }],
};
const png = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl6H5sAAAAASUVORK5CYII=',
  'base64',
);
const poseOnly = {
  ...sfm,
  id: 'fixture-pose-only',
  name: 'INTERFACE CONTRACT FIXTURE — poses without points',
  point_count: 0,
};
const imported = {
  ...sfm,
  id: 'fixture-imported',
  name: 'INTERFACE CONTRACT FIXTURE — imported model without photos',
  status: 'imported',
  images_available: false,
};
const datasets = [
  {
    id: 'fixture-raw',
    name: 'INTERFACE CONTRACT FIXTURE — photos without poses',
    path: 'fixture/raw.json',
    image_count: 2,
    pose_count: 0,
  },
  {
    id: 'fixture-posed',
    name: 'INTERFACE CONTRACT FIXTURE — posed photos',
    path: 'fixture/posed.json',
    image_count: 2,
    pose_count: 2,
  },
];
const runs = [sfm, poseOnly, imported];
const results = new Map();
let starts = 0,
  freeCamera = null,
  cancelCount = 0,
  pointCloudSourcesAvailable = true;
const browser = await chromium.launch({
  channel: process.env.BROWSER_CHANNEL || 'msedge',
  headless: true,
  args: ['--use-angle=swiftshader'],
});
const page = await browser.newPage({ viewport: { width: 1680, height: 1100 } });
const errors = [];
page.on('pageerror', (error) => errors.push(String(error)));
const respond = (route, value) =>
  route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(value) });
await page.route('**/api/**', async (route) => {
  const url = new URL(route.request().url()),
    p = url.pathname,
    method = route.request().method();
  if (p.endsWith('.png'))
    return route.fulfill({ status: 200, contentType: 'image/png', body: png });
  if (p === '/api/bootstrap')
    return respond(route, {
      datasets,
      runs: pointCloudSourcesAvailable ? runs : [poseOnly],
      defaults: {
        seed: 0,
        features: { max_features: 2000, ratio: 0.75 },
        geometry: {
          threshold_px: 1,
          max_trials: 100,
          confidence: 0.99,
          min_trials: 10,
          min_inliers: 8,
        },
        mapping: {
          min_pnp_points: 6,
          pnp_threshold_px: 2,
          min_angle_deg: 1,
          max_reprojection_px: 2,
        },
        bundle_adjustment: { enabled: false, max_nfev: 10, loss: 'huber', f_scale: 1 },
      },
    });
  const datasetRoute = /^\/api\/datasets\/([^/]+)$/.exec(p);
  if (datasetRoute)
    return respond(route, {
      ...datasets.find((item) => item.id === datasetRoute[1]),
      images: [{ id: 1, name: 'fixture.png', width: 64, height: 64, camera_id: 1 }],
      cameras: [{ id: 1, width: 64, height: 64, K: camera.K }],
    });
  if (p === '/api/rendering/capabilities')
    return respond(route, {
      torch_available: true,
      cuda_available: null,
      defaults: config,
      methods: ['nerf', '3dgs'],
    });
  if (p === '/api/rendering/config/validate') return respond(route, route.request().postDataJSON());
  if (p === '/api/rendering/runs' && method === 'POST') {
    const body = route.request().postDataJSON();
    starts++;
    if (starts === 1) {
      assert.equal(body.dataset_id, 'fixture-posed');
      assert.equal(body.source_run_id, undefined);
      assert.equal(body.config.background, 'black');
      assert.equal(body.config.stratified_sampling, true);
      assert.equal(body.config.ray_sampling, 'all_images');
    }
    if (starts === 2) {
      assert.equal(body.source_run_id, sfm.id);
      assert.equal(body.dataset_id, undefined);
    }
    if (starts === 3) {
      assert.equal(body.source_run_id, imported.id);
      assert.equal(body.photo_dataset_id, 'fixture-raw');
    }
    const run = {
      ...sfm,
      id: `fixture-train-${starts}`,
      name: `INTERFACE CONTRACT FIXTURE — ${body.config.method} ${starts}`,
      source_run_id: body.source_run_id,
      source_kind: body.dataset_id ? 'posed_dataset' : 'sfm_result',
      source_dataset_id: body.dataset_id,
      dataset_id: body.dataset_id ?? body.photo_dataset_id,
      point_count: body.dataset_id ? 0 : sfm.point_count,
      pipeline: body.config.method,
      config: body.config,
      stage: 'training',
      status: 'running',
      completed: 0,
      total: 20,
      snapshots: [],
    };
    const initial = structuredClone(run);
    if (starts === 1) {
      run.status = 'todo';
      run.stage = 'todo';
      run.error = 'TODO N1 / G1: 教学算法待补全（接口测试 fixture）';
    }
    if (starts === 2) {
      run.status = 'completed';
      run.stage = 'done';
      run.training_metrics = { step: 20, total: 20, loss: 0.01, psnr: 20 };
      run.latest_preview = {
        url: '/api/fixture/preview-20.png',
        reference_url: '/api/fixture/reference.png',
        image_id: 1,
        step: 20,
      };
    }
    runs.unshift(run);
    results.set(run.id, {
      pipeline: run.pipeline,
      status: run.status,
      config: run.config,
      source_run_id: run.source_run_id,
      source_kind: run.source_kind,
      source_dataset_id: run.source_dataset_id,
      metrics: run.training_metrics ?? {},
      previews: run.latest_preview ? [run.latest_preview] : [],
      checkpoint_url: starts === 2 ? '/api/fixture/checkpoint.pt' : undefined,
      gaussians_url: starts === 2 ? '/api/fixture/gaussians.json' : undefined,
    });
    return respond(route, initial);
  }
  const result = /^\/api\/rendering\/runs\/([^/]+)\/result$/.exec(p);
  if (result) return respond(route, results.get(result[1]));
  const render = /^\/api\/rendering\/runs\/([^/]+)\/render$/.exec(p);
  if (render) {
    const body = route.request().postDataJSON();
    freeCamera = body.camera ?? freeCamera;
    const preview = { url: '/api/fixture/custom-view.png', image_id: body.image_id };
    const found = runs.find((run) => run.id === render[1]);
    found.latest_preview = preview;
    results.get(render[1]).previews.push(preview);
    return respond(route, preview);
  }
  const runRoute = /^\/api\/runs\/([^/]+)(?:\/(.*))?$/.exec(p);
  if (runRoute) {
    const run = runs.find((item) => item.id === runRoute[1]);
    if (!runRoute[2]) return respond(route, run);
    if (runRoute[2] === 'scene')
      return respond(
        route,
        run.point_count === 0
          ? {
              ...scene,
              summary: { ...scene.summary, point_count: 0, observation_count: 0 },
              points: { ids: [], positions: [], colors: [], errors: [], track_lengths: [] },
            }
          : scene,
      );
    if (runRoute[2] === 'reports')
      return respond(route, { pairs: null, initialization: null, ba: null, summary: null });
    if (runRoute[2] === 'artifacts') return respond(route, []);
    if (runRoute[2] === 'events')
      return route.fulfill({
        contentType: 'text/event-stream',
        body: `data: ${JSON.stringify({ kind: run.status === 'running' ? 'metrics' : run.status === 'todo' ? 'todo' : 'complete', stage: run.stage })}\n\n`,
      });
    if (runRoute[2] === 'cancel') {
      run.status = 'cancelled';
      cancelCount++;
      return respond(route, run);
    }
  }
  if (p === '/api/runs') return respond(route, runs);
  return route.fulfill({
    status: 404,
    contentType: 'application/json',
    body: JSON.stringify({ detail: `Unimplemented fixture route ${p}` }),
  });
});
try {
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.getByTestId('open-rendering').click();
  assert.equal(await page.getByText('3DGS 高斯参数', { exact: true }).count(), 0);
  await page.getByLabel('渲染来源结果', { exact: true }).selectOption(poseOnly.id);
  assert(await page.getByTestId('start-training').isEnabled());
  await page.getByLabel('渲染训练方法', { exact: true }).selectOption('3dgs');
  assert.equal(
    await page
      .getByLabel('渲染来源结果', { exact: true })
      .locator(`option[value="${poseOnly.id}"]`)
      .count(),
    0,
  );
  assert.equal(await page.getByText('NeRF 网络参数', { exact: true }).count(), 0);
  await page.getByLabel('渲染训练方法', { exact: true }).selectOption('nerf');
  await page.getByLabel('NeRF 数据源类型', { exact: true }).selectOption('dataset');
  await page.getByLabel('NeRF 位姿照片数据集', { exact: true }).selectOption('fixture-raw');
  assert(await page.getByTestId('start-training').isDisabled());
  assert.match(
    await page.getByTestId('rendering-source-help').innerText(),
    /先估计或导入位姿.*NeRF 不要求点云/,
  );
  await page.getByLabel('NeRF 位姿照片数据集', { exact: true }).selectOption('fixture-posed');
  assert(await page.getByTestId('start-training').isEnabled());
  await page.getByLabel('图像背景', { exact: true }).selectOption('black');
  await page.getByLabel('训练深度采样', { exact: true }).selectOption('random');
  await page.getByLabel('光线批次', { exact: true }).selectOption('all_images');
  await page.getByTestId('start-training').click();
  await page.getByTestId('rendering-todo').waitFor();
  assert.match(await page.getByTestId('rendering-todo').innerText(), /TODO N1/);
  assert.equal(await page.getByAltText('实际渲染输出').count(), 0);
  await page.reload({ waitUntil: 'networkidle' });
  await page.getByTestId('rendering-todo').waitFor();
  assert.equal(await page.getByLabel('NeRF 数据源类型', { exact: true }).inputValue(), 'dataset');
  assert.equal(await page.getByLabel('图像背景', { exact: true }).inputValue(), 'black');
  assert.equal(await page.getByLabel('训练深度采样', { exact: true }).inputValue(), 'random');
  assert.equal(await page.getByLabel('光线批次', { exact: true }).inputValue(), 'all_images');
  assert.equal(
    await page.getByLabel('NeRF 位姿照片数据集', { exact: true }).inputValue(),
    'fixture-posed',
  );
  await page.getByLabel('渲染训练方法', { exact: true }).selectOption('3dgs');
  await page.getByTestId('start-training').click();
  await page.getByAltText('实际渲染输出').waitFor();
  assert.equal(await page.getByAltText('对应参考原图').count(), 1);
  assert.match(await page.locator('.rendering-metrics').innerText(), /20 \/ 20/);
  assert.equal(
    await page.getByRole('link', { name: '模型 checkpoint' }).getAttribute('href'),
    '/api/fixture/checkpoint.pt',
  );
  await page.reload({ waitUntil: 'networkidle' });
  await page.getByAltText('实际渲染输出').waitFor();
  assert.match(await page.locator('.rendering-result-heading').innerText(), /3DGS/);
  await page.getByRole('button', { name: '源 SfM 场景', exact: true }).click();
  const canvas = page.getByTestId('scene-canvas');
  await canvas.waitFor();
  const bounds = await canvas.boundingBox();
  await page.mouse.move(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
  await page.mouse.down();
  await page.mouse.move(bounds.x + bounds.width / 2 + 23, bounds.y + bounds.height / 2 + 11, {
    steps: 8,
  });
  await page.mouse.up();
  await page.getByRole('button', { name: '渲染当前自由视角', exact: true }).click();
  await page.getByAltText('实际渲染输出').waitFor();
  assert(freeCamera && freeCamera.R.length === 3 && freeCamera.t.length === 3);
  assert(Math.max(freeCamera.width, freeCamera.height) <= 256);
  assert.equal(
    await page.getByAltText('实际渲染输出').getAttribute('src'),
    '/api/fixture/custom-view.png',
  );
  await page.getByLabel('渲染训练方法', { exact: true }).selectOption('nerf');
  await page.getByLabel('渲染来源结果', { exact: true }).selectOption(imported.id);
  assert(await page.getByTestId('start-training').isDisabled());
  await page.getByLabel('关联原始照片数据集', { exact: true }).selectOption('fixture-raw');
  assert(await page.getByTestId('start-training').isEnabled());
  await page.getByTestId('start-training').click();
  await page.getByTestId('cancel-run').waitFor();
  await page.getByTestId('cancel-run').click();
  await page.waitForFunction(() =>
    document.querySelector('.run-state')?.textContent.includes('已取消'),
  );
  assert.equal(cancelCount, 1);
  pointCloudSourcesAvailable = false;
  await page.reload({ waitUntil: 'networkidle' });
  await page.getByTestId('scene-canvas').waitFor();
  assert.equal(
    await page.locator('.empty-scene').count(),
    0,
    'Registered cameras remain visible without points.',
  );
  await page.getByTestId('open-rendering').click();
  await page.getByLabel('渲染训练方法', { exact: true }).selectOption('3dgs');
  assert(await page.getByTestId('start-training').isDisabled());
  assert.match(await page.getByTestId('rendering-source-help').innerText(), /先构建点云/);
  const chooser = page.waitForEvent('filechooser');
  await page.getByRole('button', { name: '加载已有模型', exact: true }).click();
  await (await chooser).setFiles([]);
  await page.getByRole('button', { name: '先构建点云', exact: true }).click();
  await page.getByTestId('scene-canvas').waitFor();
  assert(await page.getByTestId('start-run').isEnabled());
  assert.deepEqual(errors, []);
  await page.screenshot({ path: path.join(output, 'interface-contract.png'), fullPage: true });
  await writeFile(
    path.join(output, 'report.json'),
    JSON.stringify(
      {
        fixtureOnly: true,
        doesNotValidateLearningAlgorithms: true,
        checks: [
          'point-free NeRF source accepted; point-free 3dgs source excluded',
          'unposed photos require real poses, not point clouds',
          'posed dataset sends dataset_id without source_run_id and restores selection',
          'imported point cloud requires explicit matching photo_dataset_id',
          'method-specific network and Gaussian controls',
          'camera-only scene has no misleading point-cloud waiting overlay',
          '3dgs without a point cloud is disabled with working build/load entries',
          'nerf TODO remains non-successful',
          '3dgs interface result and reference preview',
          'checkpoint download',
          'history restored after refresh',
          'free orbit pose renders through camera API',
          'cancellation',
        ],
        capturedFreeCamera: freeCamera,
        errors,
      },
      null,
      2,
    ),
  );
  console.log(
    'Rendering interface contract passed; fixture does not validate NeRF/3DGS algorithms.',
  );
} finally {
  await browser.close();
}
