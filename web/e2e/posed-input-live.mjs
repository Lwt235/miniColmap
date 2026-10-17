/** Real UI/input-contract test. Copies two local photos and explicit known poses
 * into an independent manifest; sends no point cloud or source_run_id.
 * TODO is expected. This does not measure NeRF/3DGS reconstruction quality.
 */
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../../', import.meta.url));
const base = (process.env.WORKBENCH_URL || 'http://127.0.0.1:8765').replace(/\/$/, '');
assert(['127.0.0.1', 'localhost'].includes(new URL(base).hostname));
const output = path.join(root, 'reports/2026-10-17-nerf-input-separation');
const fixtureRoot = path.join(root, '.cache/posed-input-browser-fixture', String(Date.now()));
await mkdir(output, { recursive: true });
const sourceManifest = JSON.parse(
  await readFile(path.join(root, 'data/middlebury_temple_ring/dataset.json'), 'utf8'),
);
const knownModel = JSON.parse(
  await readFile(path.join(root, 'outputs/temple_ring_8_arc_no_ba_01/model.json'), 'utf8'),
);
const images = sourceManifest.images
  .filter((image) => knownModel.poses.some((pose) => pose.image_id === image.id))
  .slice(0, 2);
assert.equal(images.length, 2);
const posed = {
  pose_convention: 'world_to_camera',
  cameras: sourceManifest.cameras,
  images,
  poses: knownModel.poses.filter((pose) => images.some((image) => image.id === pose.image_id)),
};
for (const kind of ['posed', 'unposed']) {
  const dir = path.join(fixtureRoot, `${kind}-input-fixture`);
  await mkdir(path.join(dir, 'images'), { recursive: true });
  for (const image of images)
    await copyFile(
      path.join(root, 'data/middlebury_temple_ring', image.path),
      path.join(dir, image.path),
    );
  const manifest = kind === 'posed' ? posed : { cameras: posed.cameras, images: posed.images };
  assert(!('points' in manifest));
  await writeFile(path.join(dir, 'dataset.json'), JSON.stringify(manifest, null, 2));
}
const browser = await chromium.launch({
  channel: process.env.BROWSER_CHANNEL || 'msedge',
  headless: true,
  args: ['--use-angle=swiftshader'],
});
const page = await browser.newPage({ viewport: { width: 1680, height: 1100 } });
const errors = [];
page.on('pageerror', (error) => errors.push(String(error)));
const report = {
  fixtureOnly: false,
  inputContractTest: true,
  algorithmResultsVerified: false,
  poseProvenance:
    'Explicit calibrated poses copied from a local known model solely to prepare test inputs; no SfM run/model/points are sent to training.',
  imports: [],
  checks: [],
  errors,
};
async function importDirectory(kind) {
  await page.getByTestId('import-dataset').click();
  await page
    .locator('input[webkitdirectory]')
    .setInputFiles(path.join(fixtureRoot, `${kind}-input-fixture`));
  const response = page.waitForResponse(
    (r) => r.url().endsWith('/api/datasets/import') && r.request().method() === 'POST',
  );
  await page.getByRole('button', { name: '校验并导入', exact: true }).click();
  const result = await response;
  assert(result.ok(), await result.text());
  const dataset = await result.json();
  await page.getByRole('dialog', { name: '导入重建数据' }).waitFor({ state: 'hidden' });
  report.imports.push({
    kind,
    id: dataset.id,
    pose_count: dataset.pose_count,
    image_count: dataset.image_count,
  });
  return dataset;
}
try {
  const existing = await (await page.request.get(base + '/api/runs')).json();
  assert(
    !existing.some((run) => run.status === 'running'),
    'An existing task is running; leave it unchanged.',
  );
  await page.goto(base, { waitUntil: 'networkidle' });
  if ((await page.getByTestId('rendering-workspace').count()) === 0)
    await page.getByTestId('open-rendering').click();
  const dataset = await importDirectory('posed');
  assert.equal(dataset.pose_count, 2);
  await page.getByLabel('渲染训练方法', { exact: true }).selectOption('nerf');
  await page.getByLabel('NeRF 数据源类型', { exact: true }).selectOption('dataset');
  await page.getByLabel('NeRF 位姿照片数据集', { exact: true }).selectOption(dataset.id);
  assert.match(
    await page
      .getByLabel('NeRF 位姿照片数据集', { exact: true })
      .locator('option:checked')
      .innerText(),
    /2 位姿/,
  );
  assert(await page.getByTestId('start-training').isEnabled());
  await page.getByLabel('训练迭代数', { exact: true }).fill('1');
  await page.getByLabel('图像降采样', { exact: true }).fill('16');
  await page.getByLabel('每批光线数', { exact: true }).fill('8');
  await page.getByLabel('每条光线采样', { exact: true }).fill('8');
  const created = page.waitForResponse(
    (r) => r.url().endsWith('/api/rendering/runs') && r.request().method() === 'POST',
  );
  await page.getByTestId('start-training').click();
  const response = await created;
  assert(response.ok(), await response.text());
  const payload = response.request().postDataJSON();
  assert.equal(payload.dataset_id, dataset.id);
  assert.equal(payload.source_run_id, undefined);
  const run = await response.json();
  await page.getByTestId('rendering-todo').waitFor({ timeout: 90000 });
  assert.match(await page.getByTestId('rendering-todo').innerText(), /N4/);
  const current = await (await page.request.get(base + `/api/runs/${run.id}`)).json();
  assert.equal(current.source_kind, 'posed_dataset');
  assert.equal(current.point_count, 0);
  const scene = await (await page.request.get(base + `/api/runs/${run.id}/scene`)).json();
  assert.equal(scene.points.ids.length, 0);
  assert.equal(scene.summary.registered_images, 2);
  report.run = {
    id: run.id,
    source_kind: current.source_kind,
    source_dataset_id: current.source_dataset_id,
    point_count: current.point_count,
    status: current.status,
    error: current.error,
  };
  await page.screenshot({ path: path.join(output, 'nerf-posed-input-todo.png'), fullPage: true });
  await page.getByRole('button', { name: '相机位姿场景', exact: true }).click();
  const canvas = page.getByTestId('scene-canvas');
  await canvas.waitFor();
  assert.equal(await page.locator('.empty-scene').count(), 0);
  const hash = async () =>
    createHash('sha256')
      .update(await canvas.screenshot())
      .digest('hex');
  const before = await hash(),
    bounds = await canvas.boundingBox();
  await page.mouse.move(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
  await page.mouse.down();
  await page.mouse.move(bounds.x + bounds.width / 2 + 30, bounds.y + bounds.height / 2 + 12, {
    steps: 8,
  });
  await page.mouse.up();
  await page.waitForTimeout(400);
  assert.notEqual(await hash(), before);
  await page.getByRole('button', { name: '适配完整场景', exact: true }).click();
  await page.screenshot({ path: path.join(output, 'camera-only-scene.png'), fullPage: true });
  await page.getByRole('button', { name: '训练 / 渲染', exact: true }).click();
  const raw = await importDirectory('unposed');
  assert.equal(raw.pose_count, 0);
  await page.getByLabel('NeRF 数据源类型', { exact: true }).selectOption('dataset');
  await page.getByLabel('NeRF 位姿照片数据集', { exact: true }).selectOption(raw.id);
  assert(await page.getByTestId('start-training').isDisabled());
  assert.match(await page.getByTestId('rendering-source-help').innerText(), /真实相机位姿/);
  await page.screenshot({
    path: path.join(output, 'nerf-unposed-input-disabled.png'),
    fullPage: true,
  });
  await page.getByLabel('渲染训练方法', { exact: true }).selectOption('3dgs');
  assert.equal(await page.getByLabel('NeRF 位姿照片数据集', { exact: true }).count(), 0);
  assert.match(await page.locator('.rendering-settings').innerText(), /初始点云模型/);
  const invalidGs = await page.request.post(base + '/api/rendering/runs', {
    data: { dataset_id: dataset.id, config: { method: '3dgs' } },
  });
  assert.equal(invalidGs.status(), 422);
  report.checks.push(
    'upload preserves two explicit poses immediately without refresh',
    'NeRF starts directly from dataset_id without source_run_id or points',
    'real worker reaches TODO N4 with zero points',
    'camera-only scene fits and rotates without waiting-for-point-cloud overlay',
    'raw photos without poses stay disabled',
    '3DGS requires point cloud source and rejects posed-dataset-only API',
  );
  assert.deepEqual(errors, []);
  await writeFile(path.join(output, 'browser-live.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser.close();
}
