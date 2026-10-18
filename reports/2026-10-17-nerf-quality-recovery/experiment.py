"""Controlled real-data experiments, all using the supplied NeRF and pipeline."""
import argparse
import json
from pathlib import Path

import torch

from minicolmap.rendering.algorithms import build_nerf
from minicolmap.rendering.config import resolve_render_config
from minicolmap.rendering.pipeline import train
from minicolmap.ui.runtime import configure_worker_runtime


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--variants', nargs='+', default=['black', 'bounded', 'smooth', 'combined'])
    parser.add_argument('--steps', type=int, default=1500)
    parser.add_argument('--tag', default='screen')
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[2]
    source = root/'outputs/ui_nerf_20261017_223335_35d5f4'
    original = json.loads((source/'config.json').read_text())
    status = json.loads((source/'run_status.json').read_text())
    configure_worker_runtime()
    torch.set_num_threads(1)
    for variant in args.variants:
        config = resolve_render_config(original)
        config.update(learning_rate=1e-4, iterations=args.steps, preview_every=500)
        if variant in ('black','combined','lowfreq'):
            config['background']='black'
        if variant in ('bounded','combined','lowfreq'):
            config.update(near=.55, far=1.25)
        if variant in ('smooth','combined','lowfreq'):
            config['nerf']['levels_xyz']=6
        if variant in ('combined','lowfreq'):
            config.update(stratified_sampling=True,ray_sampling='all_images',rays_per_batch=512)
        if variant=='lowfreq':
            config['nerf'].update(levels_xyz=4,levels_dir=2)
        output = root/f'outputs/nerf_quality_{args.tag}_{variant}_{args.steps}'
        if (output/'summary.json').exists():
            print(f'SKIP completed {output}',flush=True)
            continue
        output.mkdir(parents=True,exist_ok=True)
        with (output/'experiment-events.jsonl').open('w',encoding='utf-8') as stream:
            def event(value):
                stream.write(json.dumps(value,ensure_ascii=False)+'\n');stream.flush()
                if value.get('kind')=='preview':
                    print(json.dumps(dict(variant=variant,**value['metrics'])),flush=True)
            summary=train(source/'source_model.json',status['dataset'],output,config,on_event=event)
        print(json.dumps(dict(variant=variant,final=summary['metrics'])),flush=True)


if __name__=='__main__':
    main()
