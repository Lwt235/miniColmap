/** Read-only checks against the real local API; never starts a training job. */
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const base = process.env.WORKBENCH_URL || 'http://127.0.0.1:8765';
assert(['127.0.0.1', 'localhost'].includes(new URL(base).hostname));
const root = fileURLToPath(new URL('../../', import.meta.url));
const artifacts = path.join(
  root,
  '.cache/gaussian-sh-config',
  new Date().toISOString().replaceAll(':', '-'),
);
await mkdir(artifacts, { recursive: true });
const browser = await chromium.launch({
  channel: 'msedge',
  headless: true,
  args: ['--use-angle=swiftshader'],
});
const page = await browser.newPage({ viewport: { width: 1680, height: 1100 } });
const errors = [],
  report = {};
page.on('pageerror', (e) => errors.push(String(e)));
try {
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'NeRF / 3DGS', exact: true }).click();
  const panel = page.getByLabel('NeRF 与 3DGS 工作区');
  await panel.getByLabel('渲染训练方法').selectOption('3dgs');
  const capabilities = await (await page.request.get(base + '/api/rendering/capabilities')).json();
  if (capabilities.gsplat_native_available) {
    await panel
      .getByText('检测到已编译且通过自检的本机 gsplat 扩展；训练时检查 CUDA 设备。')
      .waitFor();
    report.nativeExtensionStatus = true;
  }
  const degree = panel.getByLabel('球谐阶数'),
    interval = panel.getByLabel('球谐升阶间隔');
  assert.equal(await degree.inputValue(), '3');
  assert.equal(await interval.inputValue(), '0');
  assert.equal(await panel.getByLabel('高斯光栅后端').inputValue(), 'reference');
  await degree.selectOption('2');
  await interval.fill('1000');
  const downloading = page.waitForEvent('download');
  await panel.getByRole('button', { name: '导出配置', exact: true }).click();
  const download = await downloading;
  const exported = JSON.parse(await readFile(await download.path(), 'utf8'));
  assert.equal(exported.gaussian.sh_degree, 2);
  assert.equal(exported.gaussian.sh_degree_interval, 1000);
  const validated = await page.request.post(base + '/api/rendering/config/validate', {
    data: exported,
  });
  assert(validated.ok());
  assert.equal((await validated.json()).gaussian.sh_degree, 2);
  for (const gaussian of [
    { sh_degree: 4 },
    { sh_degree: true },
    { sh_degree_interval: -1 },
    { backend: 'gsplat' },
  ]) {
    const invalid = await page.request.post(base + '/api/rendering/config/validate', {
      data: { method: '3dgs', device: 'cpu', gaussian },
    });
    assert.equal(invalid.status(), 422);
  }
  await panel.getByLabel('高斯光栅后端').selectOption('gsplat');
  assert((await panel.innerText()).includes('gsplat 光栅后端需要 CUDA 设备'));
  const cuda = await page.request.post(base + '/api/rendering/config/validate', {
    data: { ...exported, device: 'cuda', gaussian: { ...exported.gaussian, backend: 'gsplat' } },
  });
  assert(cuda.ok());
  report.defaultsAndEditing = true;
  report.exportAndServerValidation = true;
  report.invalidSettingsRejected = true;
  report.backendRequiresCuda = true;
  await panel.getByRole('button', { name: '默认', exact: true }).click();
  await panel.getByLabel('渲染训练方法').selectOption('3dgs');
  assert.equal(await degree.inputValue(), '3');
  assert.equal(await interval.inputValue(), '0');
  report.resetRestoresDefaults = true;
  assert.deepEqual(errors, []);
  await degree.scrollIntoViewIfNeeded();
  await page.screenshot({ path: path.join(artifacts, 'sh-settings.png'), fullPage: true });
  report.pageErrors = errors;
  report.status = 'passed';
} catch (error) {
  report.status = 'failed';
  report.error = String(error);
  process.exitCode = 1;
  await page
    .screenshot({ path: path.join(artifacts, 'failure.png'), fullPage: true })
    .catch(() => {});
} finally {
  await writeFile(path.join(artifacts, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  console.log(artifacts);
  await browser.close();
}
