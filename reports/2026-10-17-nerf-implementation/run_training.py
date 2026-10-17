"""Reproduce this review's controlled GPU experiment (new output only)."""
import argparse
import json
from pathlib import Path

import torch

from minicolmap.io import load_reconstruction, save_reconstruction
from minicolmap.models import Reconstruction
from minicolmap.rendering.pipeline import train
from minicolmap.ui.runtime import configure_worker_runtime


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--steps', type=int, default=3000)
    parser.add_argument('--output', type=Path)
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[2]
    report = Path(__file__).resolve().parent
    source = root / 'outputs/ui_nerf_20261017_214716_4f8437'
    output = args.output or root / 'outputs/review_nerf_20261017_3000'
    if any((output / name).exists() for name in ('checkpoint.pt', 'summary.json', 'training.json')):
        raise SystemExit('Output exists. Supply --output with a new directory; preserve the recorded experiment.')
    output.mkdir(parents=True, exist_ok=True)
    runtime = configure_worker_runtime()
    original = load_reconstruction(source / 'source_model.json')
    camera_only = output / 'camera_only_input.json'
    save_reconstruction(Reconstruction(original.cameras, original.images, original.poses, {}), camera_only)
    config = json.loads((source / 'config.json').read_text(encoding='utf-8'))
    config['iterations'] = args.steps
    status = json.loads((source / 'run_status.json').read_text(encoding='utf-8'))
    torch.cuda.reset_peak_memory_stats()
    with (output / 'review_events.jsonl').open('w', encoding='utf-8') as stream:
        def event(value):
            stream.write(json.dumps(value, ensure_ascii=False) + '\n')
            stream.flush()
            if value.get('kind') == 'preview' or value.get('kind') in ('error', 'complete'):
                print(json.dumps(value.get('metrics', {'stage': value['stage']})), flush=True)
        summary = train(camera_only, status['dataset'], output, config, on_event=event)
    runtime.update(gpu=torch.cuda.get_device_name(),
                   peak_allocated_bytes=torch.cuda.max_memory_allocated(),
                   peak_reserved_bytes=torch.cuda.max_memory_reserved())
    (output / 'review_runtime.json').write_text(json.dumps(runtime, indent=2), encoding='utf-8')
    print(json.dumps(summary['metrics']), flush=True)


if __name__ == '__main__':
    main()
