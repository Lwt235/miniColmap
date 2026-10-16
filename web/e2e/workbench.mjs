/** Real local-browser acceptance. Run a local server before npm run test:e2e.
 * Creates isolated output runs/import copies; never rewrites source data/models.
 */
import { chromium } from 'playwright';
import * as THREE from 'three';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../../', import.meta.url));
const base = (process.env.WORKBENCH_URL || 'http://127.0.0.1:8765').replace(/\/$/, '');
assert(['127.0.0.1', 'localhost'].includes(new URL(base).hostname), 'Only test a local server');
const artifacts = path.join(
  root,
  '.cache',
  'workbench-e2e',
  new Date().toISOString().replaceAll(':', '-'),
);
await mkdir(artifacts, { recursive: true });
const report = {};
const browser = await chromium.launch({
  channel: process.env.BROWSER_CHANNEL || (process.platform === 'win32' ? 'msedge' : undefined),
  headless: !process.argv.includes('--headed'),
  args: ['--use-angle=swiftshader'],
});
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors = [];
const ownedRuns = [];
page.on('pageerror', (error) => errors.push(String(error)));

async function get(apiPath) {
  const response = await page.request.get(base + apiPath);
  assert(response.ok(), `${apiPath}: HTTP ${response.status()}`);
  return response.json();
}
async function screenshot(name) {
  await page.screenshot({ path: path.join(artifacts, name + '.png'), fullPage: true });
}
async function waitForRun(id) {
  const deadline = Date.now() + 180000;
  while (Date.now() < deadline) {
    const run = await get('/api/runs/' + id);
    if (run.status !== 'running') {
      assert.equal(run.status, 'completed', JSON.stringify(run));
      return run;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Reconstruction ${id} did not finish within 180 seconds`);
}
async function selectHistory(name) {
  await page.getByRole('button', { name: '历史', exact: true }).click();
  await page.locator('.run-row').filter({ hasText: name }).click();
  await page.waitForFunction(() => !!document.querySelector('.scene-stats'));
}

try {
  await page.goto(base, { waitUntil: 'networkidle' });
  const canvas = page.getByTestId('scene-canvas');
  await canvas.waitFor();
  const bootstrap = await get('/api/bootstrap');
  assert(
    !bootstrap.runs.some((run) => run.status === 'running'),
    'Another reconstruction is active',
  );
  const baseline = bootstrap.runs.find((run) => run.name === 'temple_ring_8_arc_no_ba_01');
  const dataset = bootstrap.datasets.find((item) =>
    item.path.replaceAll('\\', '/').endsWith('middlebury_temple_ring/dataset.json'),
  );
  assert(baseline && dataset, 'Prepare and run the documented Middlebury 8-view dataset first');
  await selectHistory(baseline.name);
  await page.waitForTimeout(400);
  const box = await canvas.boundingBox();
  const hash = async () =>
    createHash('sha256')
      .update(await canvas.screenshot())
      .digest('hex');
  let previous = await hash();
  await page.mouse.move(box.x + box.width * 0.5, box.y + box.height * 0.5);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width * 0.65, box.y + box.height * 0.6, { steps: 15 });
  await page.mouse.up();
  await page.waitForTimeout(700);
  assert.notEqual(await hash(), previous, 'Rotation must change the rendered scene');
  previous = await hash();
  await page.mouse.down({ button: 'right' });
  await page.mouse.move(box.x + box.width * 0.56, box.y + box.height * 0.53, { steps: 10 });
  await page.mouse.up({ button: 'right' });
  await page.waitForTimeout(500);
  assert.notEqual(await hash(), previous, 'Panning must change the rendered scene');
  previous = await hash();
  await page.mouse.wheel(0, -500);
  await page.waitForTimeout(700);
  assert.notEqual(await hash(), previous, 'Zooming must change the rendered scene');
  await page.getByLabel('重置视角', { exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: '照片', exact: true }).click();
  await page.getByTestId('image-13').click();
  await page.locator('.inspector .photo-preview img').waitFor();
  assert((await page.locator('.inspector').innerText()).includes('相机中心'));
  await screenshot('camera-inspector');

  // Compute screen coordinates from the real model and calibrated viewer pose.
  const scene = await get(`/api/runs/${baseline.id}/scene`);
  const bounds = new THREE.Box3();
  for (let i = 0; i < scene.points.positions.length; i += 3)
    bounds.expandByPoint(new THREE.Vector3(...scene.points.positions.slice(i, i + 3)));
  for (const camera of scene.cameras)
    if (camera.registered) bounds.expandByPoint(new THREE.Vector3(...camera.center));
  const center = bounds.getCenter(new THREE.Vector3());
  const radius = bounds.getSize(new THREE.Vector3()).length() / 2;
  const observer = new THREE.PerspectiveCamera(45, box.width / box.height, 0.001, 1e6);
  observer.up.set(0, -1, 0);
  observer.position
    .copy(center)
    .addScaledVector(new THREE.Vector3(-0.5, -0.35, -1).normalize(), radius * 3.1);
  observer.lookAt(center);
  observer.updateMatrixWorld();
  let pointPicked = false;
  for (const i of [0, 60, 150, 300, 600, 900]) {
    const point = new THREE.Vector3(...scene.points.positions.slice(i * 3, i * 3 + 3)).project(
      observer,
    );
    await page.mouse.click(
      box.x + ((point.x + 1) * box.width) / 2,
      box.y + ((1 - point.y) * box.height) / 2,
    );
    await page.waitForTimeout(300);
    if ((await page.locator('.inspector').innerText()).includes('三维点 #')) {
      pointPicked = true;
      break;
    }
  }
  assert(pointPicked, 'Real point picking must populate the inspector');
  await page.getByLabel('观测点和重投影点', { exact: true }).waitFor();
  await screenshot('point-inspector');
  await page.getByLabel('显示设置', { exact: true }).click();
  await page.getByLabel('点云着色', { exact: true }).selectOption('error');
  await page.getByLabel('点云着色', { exact: true }).selectOption('rgb');
  const filter = page.locator('.view-settings').getByLabel(/最大误差/);
  await filter.fill('0.01');
  await page.waitForTimeout(200);
  const displayed = Number(
    (await page.locator('.scene-stats strong').first().innerText()).replaceAll(',', ''),
  );
  assert(displayed > 0 && displayed < 1283);
  await filter.fill('0');
  await page.getByLabel('显示设置', { exact: true }).click();
  await page.getByLabel('全屏显示', { exact: true }).click();
  assert(await page.evaluate(() => !!document.fullscreenElement));
  // Headless browser keyboard events do not consistently exit native fullscreen.
  await page.getByLabel('全屏显示', { exact: true }).click();
  await page.waitForFunction(() => !document.fullscreenElement);
  report.threeDimensionalInteraction = {
    rotation: true,
    pan: true,
    zoom: true,
    cameraInspection: true,
    pointPicking: true,
    observationOverlay: true,
    filter: true,
    fullscreen: true,
  };

  // Select even the already-selected input to catch a stale-data state regression.
  await page.getByLabel('选择输入数据集', { exact: true }).selectOption(dataset.id);
  await page.getByTestId('image-13').click();
  await page.locator('.inspector .photo-preview img').waitFor();
  assert((await page.locator('.inspector').innerText()).includes('未注册'));
  report.inputPreview = true;
  await page.getByRole('button', { name: '参数', exact: true }).click();
  await page.locator('.seed-field input').fill('-1');
  await page.getByRole('button', { name: '检查参数配置', exact: true }).click();
  await page.getByRole('alert').filter({ hasText: 'seed' }).waitFor();
  await page.locator('.seed-field input').fill('0');
  await page.getByRole('button', { name: '检查参数配置', exact: true }).click();
  await page.getByRole('alert').filter({ hasText: '配置检查通过' }).waitFor();
  report.configValidation = true;
  const started = page.waitForResponse(
    (response) => response.url().endsWith('/api/runs') && response.request().method() === 'POST',
  );
  await page.getByTestId('start-run').click();
  const run = await (await started).json();
  ownedRuns.push(run.id);
  assert.equal(run.status, 'running');
  await page.getByTestId('cancel-run').waitFor();
  await page.waitForTimeout(1500);
  await page.reload({ waitUntil: 'networkidle' });
  await page.getByTestId('cancel-run').waitFor();
  assert((await page.locator('.scene-breadcrumb').innerText()).includes(run.name));
  report.refreshReconnect = true;
  await screenshot('running');
  const finished = await waitForRun(run.id);
  await page.locator('.scene-breadcrumb .run-state.completed').waitFor({ timeout: 15000 });
  await page.waitForFunction(
    () => document.querySelector('.scene-stats')?.textContent.includes('1,283'),
    null,
    { timeout: 15000 },
  );
  assert.equal(finished.registered_images, 8);
  assert.equal(finished.point_count, 1283);
  assert(finished.snapshots.length >= 9);
  const reconstructed = await get('/api/runs/' + run.id + '/scene');
  assert(Math.abs(reconstructed.summary.mean_reprojection_error_px - 0.2629256569539256) < 1e-10);
  report.realReconstruction = {
    id: run.id,
    output: finished.output_path,
    snapshots: finished.snapshots.length,
    summary: reconstructed.summary,
  };
  await page.getByLabel('选择场景快照', { exact: true }).selectOption(finished.snapshots[0].id);
  await page.waitForFunction(() =>
    document.querySelector('.scene-stats')?.textContent.includes('2 / 8'),
  );
  await page.getByLabel('选择场景快照', { exact: true }).selectOption('latest');
  await page.waitForFunction(() =>
    document.querySelector('.scene-stats')?.textContent.includes('1,283'),
  );
  report.snapshotSwitch = true;
  await page.getByLabel('聚焦点云', { exact: true }).click();
  await page.waitForTimeout(500);
  await screenshot('reconstructed');
  // Run the same real algorithm again with BA enabled, including its two snapshots.
  await page.getByRole('button', { name: '参数', exact: true }).click();
  await page.getByLabel('启用最终 BA', { exact: true }).check();
  await page.getByLabel(/函数评估预算/).fill('100');
  const baStarted = page.waitForResponse(
    (response) => response.url().endsWith('/api/runs') && response.request().method() === 'POST',
  );
  await page.getByTestId('start-run').click();
  const baRun = await (await baStarted).json();
  ownedRuns.push(baRun.id);
  const baFinished = await waitForRun(baRun.id);
  await page.locator('.scene-breadcrumb .run-state.completed').waitFor({ timeout: 15000 });
  const beforeBA = baFinished.snapshots.find((item) => item.label === 'before_ba');
  const afterBA = baFinished.snapshots.find((item) => item.label === 'after_ba');
  assert(beforeBA && afterBA, 'Real BA must produce before/after snapshots');
  const baReports = await get('/api/runs/' + baRun.id + '/reports');
  assert.equal(baReports.ba.accepted, true);
  assert.equal(baReports.ba.solver_success, false);
  assert(baReports.ba.candidate_mean_px < baReports.ba.before_mean_px);
  await page.getByLabel('选择场景快照', { exact: true }).selectOption(beforeBA.id);
  await page.waitForFunction(() =>
    document.querySelector('.scene-stats')?.textContent.includes('0.263'),
  );
  await page.getByLabel('选择场景快照', { exact: true }).selectOption(afterBA.id);
  await page.waitForFunction(() =>
    document.querySelector('.scene-stats')?.textContent.includes('0.174'),
  );
  report.realBARun = { id: baRun.id, output: baFinished.output_path, ba: baReports.ba };
  await page.getByRole('button', { name: '质量与诊断', exact: true }).click();
  await page.getByTestId('ba-status').waitFor();
  assert((await page.getByTestId('ba-status').innerText()).includes('尚未收敛'));
  await screenshot('ba-diagnostics');
  await selectHistory('temple_ring_8_arc_ba_01');
  await page.getByRole('button', { name: '质量与诊断', exact: true }).click();
  await page.getByTestId('ba-status').waitFor();
  assert((await page.getByTestId('ba-status').innerText()).includes('尚未收敛'));
  report.baStatus = true;
  const secondStart = page.waitForResponse(
    (response) => response.url().endsWith('/api/runs') && response.request().method() === 'POST',
  );
  await page.getByTestId('start-run').click();
  const cancellable = await (await secondStart).json();
  ownedRuns.push(cancellable.id);
  await page.getByTestId('cancel-run').click();
  await page.locator('.scene-breadcrumb .run-state.cancelled').waitFor();
  const cancelled = await get('/api/runs/' + cancellable.id);
  assert.equal(cancelled.status, 'cancelled');
  assert(!String(cancelled.error ?? '').includes('意外'));
  report.cancellation = true;

  await page
    .locator('input[type="file"][accept=".json"]')
    .first()
    .setInputFiles(path.join(root, 'outputs/temple_ring_8_arc_no_ba_01/model.json'));
  await page.locator('.scene-breadcrumb .run-state.imported').waitFor();
  await page.waitForFunction(() =>
    document.querySelector('.scene-stats')?.textContent.includes('1,283'),
  );
  assert((await page.locator('.image-warning').innerText()).includes('未关联原始照片'));
  report.modelImportWithoutPhotos = true;
  await page.getByTestId('import-dataset').click();
  const dialog = page.getByRole('dialog', { name: '导入重建数据' });
  await dialog.getByRole('button', { name: '照片 + 相机内参', exact: true }).click();
  await dialog
    .locator('input[type="file"][accept="image/*"]')
    .setInputFiles(
      [13, 14].map((id) =>
        path.join(
          root,
          `data/middlebury_temple_ring/images/templeR${String(id).padStart(4, '0')}.png`,
        ),
      ),
    );
  for (const [key, value] of Object.entries({ fx: 1520.4, fy: 1525.9, cx: 302.32, cy: 246.87 }))
    await dialog.getByLabel(key, { exact: true }).fill(String(value));
  await dialog.getByRole('button', { name: '校验并导入', exact: true }).click();
  await dialog.waitFor({ state: 'hidden' });
  await page.getByTestId('image-1').click();
  await page.locator('.inspector .photo-preview img').waitFor();
  assert((await page.locator('.inspector').innerText()).includes('未注册'));
  report.photoImport = true;
  assert.equal(errors.length, 0, errors.join('\n'));
  report.pageErrors = errors;
  report.status = 'passed';
  console.log(JSON.stringify(report, null, 2));
} catch (error) {
  report.status = 'failed';
  report.error = String(error);
  console.error(error);
  await screenshot('failure').catch(() => {});
  process.exitCode = 1;
} finally {
  for (const id of ownedRuns) {
    try {
      if ((await get('/api/runs/' + id)).status === 'running')
        await page.request.post(base + '/api/runs/' + id + '/cancel');
    } catch {
      // Cleanup only jobs created by this test; never touch another job.
    }
  }
  await writeFile(path.join(artifacts, 'report.json'), JSON.stringify(report, null, 2));
  await browser.close();
  console.log('Browser acceptance artifacts:', artifacts);
}
