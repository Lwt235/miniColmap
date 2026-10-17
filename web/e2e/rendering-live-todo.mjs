/** Scaffold-only live acceptance: expects student algorithms to remain TODO.
 * Creates two real, isolated output runs through the UI. Does not mock APIs,
 * train a reference model, or alter source SfM files. After implementing the
 * algorithms, use numerical exercise tests and real training acceptance instead.
 */
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../../', import.meta.url));
const base = (process.env.WORKBENCH_URL || 'http://127.0.0.1:8765').replace(/\/$/, '');
assert(['127.0.0.1', 'localhost'].includes(new URL(base).hostname));
const output = path.join(root, 'reports/2026-10-17-novel-view-scaffold');
await mkdir(output, { recursive: true });
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
  algorithmResultsVerified: false,
  expectedAlgorithmState: 'todo',
  checks: [],
  runs: [],
  errors,
};
try {
  const capsResponse = await page.request.get(base + '/api/rendering/capabilities');
  assert(capsResponse.ok(), 'Restart the UI server to load the new rendering API.');
  const capabilities = await capsResponse.json();
  assert(
    capabilities.torch_available,
    'Install optional rendering dependencies before live TODO validation.',
  );
  const runsResponse = await page.request.get(base + '/api/runs');
  const runs = await runsResponse.json();
  assert(
    !runs.some((run) => run.status === 'running'),
    'An existing task is active; leave it unchanged.',
  );
  const source =
    runs.find((run) => run.name === 'temple_ring_8_arc_no_ba_01') ??
    runs.find(
      (run) =>
        (!run.pipeline || run.pipeline === 'sfm') &&
        run.status === 'completed' &&
        run.images_available &&
        run.registered_images === 8 &&
        run.point_count > 0,
    );
  assert(source, 'Prepare a real calibrated eight-image SfM source first.');
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: '历史', exact: true }).click();
  await page.locator('.run-row').filter({ hasText: source.name }).click();
  await page.getByTestId('open-rendering').click();
  await page.getByLabel('渲染来源结果', { exact: true }).selectOption(source.id);
  for (const method of ['nerf', '3dgs']) {
    await page.getByLabel('渲染训练方法', { exact: true }).selectOption(method);
    await page.getByLabel('训练迭代数', { exact: true }).fill('1');
    await page.getByLabel('图像降采样', { exact: true }).fill('16');
    if (method === 'nerf') {
      await page.getByLabel('每批光线数', { exact: true }).fill('8');
      await page.getByLabel('每条光线采样', { exact: true }).fill('8');
    }
    await page.getByLabel('预览输出间隔', { exact: true }).fill('1');
    if (method === '3dgs') await page.getByLabel('最大高斯数', { exact: true }).fill('128');
    const created = page.waitForResponse(
      (response) =>
        response.url().endsWith('/api/rendering/runs') && response.request().method() === 'POST',
    );
    await page.getByTestId('start-training').click();
    const response = await created;
    assert(response.ok(), await response.text());
    const run = await response.json();
    await page.getByTestId('rendering-todo').waitFor({ timeout: 90000 });
    assert.match(
      await page.getByTestId('rendering-todo').innerText(),
      /TODO|NotImplemented|待实现/i,
    );
    assert.equal(
      await page.getByAltText('实际渲染输出').count(),
      0,
      'TODO must not fabricate a rendered image.',
    );
    const finishedResponse = await page.request.get(base + '/api/runs/' + run.id);
    const finished = await finishedResponse.json();
    assert.equal(finished.status, 'todo');
    const resultResponse = await page.request.get(
      base + '/api/rendering/runs/' + run.id + '/result',
    );
    const result = await resultResponse.json();
    assert.deepEqual(result.previews, []);
    assert(!result.checkpoint_url, 'Incomplete algorithms must not publish a trained checkpoint.');
    report.runs.push({
      id: run.id,
      pipeline: method,
      source_run_id: run.source_run_id,
      status: finished.status,
      error: finished.error,
      output_path: finished.output_path,
    });
    await page.screenshot({ path: path.join(output, `${method}-live-todo.png`), fullPage: true });
  }
  await page.reload({ waitUntil: 'networkidle' });
  await page.getByTestId('rendering-todo').waitFor();
  assert.match(await page.locator('.rendering-result-heading').innerText(), /3DGS/);
  assert.equal(await page.getByLabel('训练迭代数', { exact: true }).inputValue(), '1');
  report.checks.push(
    'real nerf worker TODO visible',
    'real 3dgs worker TODO visible',
    'no fabricated previews or checkpoint',
    'refresh restores selected run and exact saved config',
  );
  assert.deepEqual(errors, []);
  await writeFile(path.join(output, 'browser-live-todo.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser.close();
}
