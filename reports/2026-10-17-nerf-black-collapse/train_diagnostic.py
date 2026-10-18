"""Validate one change: learning_rate 1e-3 -> 1e-4 in the current deep NeRF."""
import json
from pathlib import Path

from minicolmap.rendering.pipeline import train
from minicolmap.ui.runtime import configure_worker_runtime


def main():
    root = Path(__file__).resolve().parents[2]
    source = root / 'outputs/ui_nerf_20261017_223335_35d5f4'
    output = root / 'outputs/review_nerf_deep_lr1e4_20261017'
    if any((output / name).exists() for name in ('checkpoint.pt', 'training.json', 'summary.json')):
        raise SystemExit('Existing result; choose a new output directory before repeating.')
    configure_worker_runtime()
    config = json.loads((root / 'configs/nerf_deep_diagnostic.json').read_text())
    before = json.loads((source / 'config.json').read_text())
    assert {k for k in config if config[k] != before[k]} == {'learning_rate'}
    status = json.loads((source / 'run_status.json').read_text())
    output.mkdir(parents=True, exist_ok=True)
    with (output / 'review_events.jsonl').open('w', encoding='utf-8') as stream:
        def event(value):
            stream.write(json.dumps(value, ensure_ascii=False) + '\n')
            stream.flush()
            if value.get('kind') == 'preview':
                print(json.dumps(value['metrics']), flush=True)
        summary = train(source / 'source_model.json', status['dataset'], output, config, on_event=event)
    print(json.dumps(summary['metrics']), flush=True)


if __name__ == '__main__':
    main()
