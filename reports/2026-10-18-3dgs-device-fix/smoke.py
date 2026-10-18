"""Reproduce the failed real data/config with only a two-step diagnostic budget."""
import json
import argparse
from pathlib import Path

from minicolmap.rendering.pipeline import train

root = Path(__file__).resolve().parents[2]
parser = argparse.ArgumentParser()
parser.add_argument('--backend', choices=('reference', 'gsplat'), default='reference')
parser.add_argument('--suffix', default='')
args = parser.parse_args()
source = root / 'outputs/ui_3dgs_20261018_131818_7ee923'
status = json.loads((source / 'run_status.json').read_text(encoding='utf-8'))
config = json.loads((source / 'config.json').read_text(encoding='utf-8'))
config.update(iterations=2, preview_every=1)
config['gaussian']['backend'] = args.backend
output = root / f'outputs/3dgs_device_fix_{args.backend}_smoke_20261018{args.suffix}'


def progress(event):
    print(json.dumps({key: event[key] for key in ('stage', 'message', 'metrics') if key in event},
                     ensure_ascii=False), flush=True)


result = train(source / 'source_model.json', status['dataset'], output, config, on_event=progress)
print(json.dumps({'output': str(output), 'summary': result}, ensure_ascii=False), flush=True)
