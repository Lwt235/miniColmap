"""Verify a real two-step gsplat task through the running local workbench."""
import json
import time
import urllib.request
from pathlib import Path

root = Path(__file__).resolve().parents[2]
base = 'http://127.0.0.1:8765'


def request(path, body=None):
    payload = None if body is None else json.dumps(body).encode('utf-8')
    req = urllib.request.Request(base + path, payload, headers={'Content-Type': 'application/json'})
    with urllib.request.urlopen(req, timeout=20) as response:
        return json.load(response)


bootstrap = request('/api/bootstrap')
if any(run['status'] == 'running' for run in bootstrap['runs']):
    raise RuntimeError('An existing task is running; do not interrupt it')
baseline = next(run for run in bootstrap['runs'] if run['name'] == 'ui_3dgs_20261018_134016_acf89b')
config = json.loads((root / 'outputs' / baseline['name'] / 'config.json').read_text(encoding='utf-8'))
config.update(iterations=2, preview_every=1)
config['gaussian']['backend'] = 'gsplat'
run = request('/api/rendering/runs', dict(source_run_id=baseline['source_run_id'],
                                        photo_dataset_id=baseline['dataset_id'], config=config))
print(json.dumps({'id': run['id'], 'name': run['name']}, indent=2), flush=True)
for _ in range(60):
    run = request(f'/api/runs/{run["id"]}')
    if run['status'] not in ('running', 'pending'):
        break
    time.sleep(1)
result = request(f'/api/rendering/runs/{run["id"]}/result')
report = dict(id=run['id'], name=run['name'], status=run['status'], backend=config['gaussian']['backend'],
              iterations=2, metrics=result['metrics'], previews=result['previews'], error=run.get('error'))
(Path(__file__).parent / 'worker-verification.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
print(json.dumps(report, indent=2), flush=True)
assert run['status'] == 'completed', run.get('error')
assert result['checkpoint_url'] and result['gaussians_url'] and len(result['previews']) == 2
