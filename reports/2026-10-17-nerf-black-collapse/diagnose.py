"""Controlled diagnosis, using the learner network without modifying its source."""
import argparse
import json
from pathlib import Path

import cv2
import numpy as np
import torch

from minicolmap.rendering.algorithms import build_nerf
from minicolmap.rendering.data import load_training_scene
from minicolmap.rendering.pipeline import _frame_record, _nerf_rays, _render, _tensor
from minicolmap.ui.runtime import configure_worker_runtime


def stats(value):
    value = value.detach()
    return dict(min=float(value.min()), mean=float(value.mean()), max=float(value.max()),
                zero_fraction=float((value == 0).float().mean()))


def run(scene, config, variant, output, steps):
    torch.manual_seed(config['seed'])
    torch.cuda.manual_seed_all(config['seed'])
    rng = np.random.default_rng(config['seed'])
    nc = config['nerf']
    network = build_nerf(nc['levels_xyz'], nc['levels_dir'], nc['hidden_dim']).cuda()
    if variant in ('positive_density_bias', 'bias_lr5e-4'):
        torch.nn.init.constant_(network.density_head.bias, 1.)
    if variant == 'softplus_lr5e-4':
        network.density_head = torch.nn.Sequential(network.density_head, torch.nn.Softplus())
    if variant == 'xavier':
        for layer in network.modules():
            if isinstance(layer, torch.nn.Linear):
                torch.nn.init.xavier_uniform_(layer.weight)
                torch.nn.init.zeros_(layer.bias)
    lr = {'lr_5e-4': 5e-4, 'lr_1e-4': 1e-4, 'lr_3e-4': 3e-4,
          'bias_lr5e-4': 5e-4, 'softplus_lr5e-4': 5e-4}.get(variant, config['learning_rate'])
    optimizer = torch.optim.Adam(network.parameters(), lr=lr)
    captured = {}
    def hook(key):
        def save(module, inputs, result):
            captured[key] = result.detach()
        return save
    density_linear = network.density_head[0] if variant == 'softplus_lr5e-4' else network.density_head
    hooks = [density_linear.register_forward_hook(hook('raw_density')),
             network.color_output.register_forward_hook(hook('color_logits'))]
    records = []
    selected_steps = set(range(1, 21)) | {30, 50, 100, 200, 300}
    for step in range(1, steps + 1):
        frame = scene.frames[int(rng.choice(scene.train_ids))]
        indices = torch.as_tensor(rng.integers(0, frame.width * frame.height, size=config['rays_per_batch']), device='cuda')
        pixels = torch.stack([indices % frame.width, indices // frame.width], dim=-1).float()
        optimizer.zero_grad(set_to_none=True)
        rendered = _nerf_rays(network, *[_tensor(getattr(frame, k), torch, 'cuda') for k in ('K', 'R', 't')], pixels, config, torch)
        target = _tensor(frame.rgb, torch, 'cuda').reshape(-1, 3)[indices]
        loss = (rendered['rgb'] - target).square().mean()
        loss.backward()
        if step in selected_steps:
            record = dict(step=step, image_id=frame.image_id, loss=float(loss.detach()),
                          black_baseline_mse=float(target.square().mean()),
                          raw_density=stats(captured['raw_density']), color_logits=stats(captured['color_logits']),
                          rendered_rgb=stats(rendered['rgb']), opacity=stats(rendered['opacity']),
                          color_output_grad_norm=float(network.color_output.weight.grad.norm()),
                          density_head_grad_norm=float(density_linear.weight.grad.norm()))
            records.append(record)
            if step in (1, 10, 20, 100, steps):
                print(json.dumps(dict(variant=variant, **record)), flush=True)
        optimizer.step()
    for handle in hooks:
        handle.remove()
    frame = scene.frames[scene.validation_ids[0]]
    with torch.no_grad():
        image = _render(network, None, _frame_record(frame), config, torch, 'cuda').cpu().numpy()
    mse = float(np.mean((image - frame.rgb) ** 2))
    result = dict(variant=variant, steps=steps, learning_rate=lr, records=records,
                  first_validation_mse=mse, first_validation_psnr=float(-10*np.log10(max(mse, 1e-12))),
                  final_image=stats(torch.from_numpy(image)))
    (output / f'{variant}.json').write_text(json.dumps(result, indent=2), encoding='utf-8')
    assert cv2.imwrite(str(output / f'{variant}.png'), np.round(np.clip(image[..., ::-1], 0, 1)*255).astype(np.uint8))
    return {k: v for k, v in result.items() if k != 'records'}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--steps', type=int, default=300)
    parser.add_argument('--variants', nargs='+', default=['original', 'lr_5e-4', 'lr_1e-4', 'positive_density_bias', 'xavier'])
    args = parser.parse_args()
    configure_worker_runtime()
    torch.set_num_threads(1)
    root = Path(__file__).resolve().parents[2]
    source = root / 'outputs/ui_nerf_20261017_223335_35d5f4'
    report = Path(__file__).resolve().parent
    config = json.loads((source / 'config.json').read_text())
    status = json.loads((source / 'run_status.json').read_text())
    scene = load_training_scene(source / 'source_model.json', status['dataset'], config)
    nc = config['nerf']
    saved = build_nerf(nc['levels_xyz'], nc['levels_dir'], nc['hidden_dim']).cuda()
    saved.load_state_dict(torch.load(source / 'checkpoint.pt', map_location='cuda', weights_only=True)['state'])
    probe = {}
    def capture(key):
        def save(module, inputs, output):
            probe[key] = stats(output)
        return save
    h1 = saved.density_head.register_forward_hook(capture('raw_density'))
    h2 = saved.color_output.register_forward_hook(capture('color_logits'))
    frame = scene.frames[scene.validation_ids[0]]
    pixels = torch.tensor([[40., 30.], [30., 20.], [0., 0.]], device='cuda')
    result = _nerf_rays(saved, *[_tensor(getattr(frame, k), torch, 'cuda') for k in ('K', 'R', 't')], pixels, config, torch)
    result['rgb'].sum().backward()
    probe.update(rendered_rgb=stats(result['rgb']), opacity=stats(result['opacity']),
                 color_output_grad_norm=float(saved.color_output.weight.grad.norm()),
                 density_head_grad_norm=float(saved.density_head.weight.grad.norm()))
    h1.remove(); h2.remove()
    (report / 'failed-checkpoint.json').write_text(json.dumps(probe, indent=2), encoding='utf-8')
    print('SAVED_CHECKPOINT', json.dumps(probe), flush=True)
    summaries = [run(scene, config, variant, report, args.steps) for variant in args.variants]
    summary_file = report / 'ablations.json'
    existing = json.loads(summary_file.read_text()) if summary_file.exists() else []
    by_name = {v['variant']: v for v in existing + summaries}
    summary_file.write_text(json.dumps(list(by_name.values()), indent=2), encoding='utf-8')


if __name__ == '__main__':
    main()
