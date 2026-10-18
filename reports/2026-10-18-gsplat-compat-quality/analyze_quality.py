"""Read-only diagnostics of the user's actual 300-step Gaussian checkpoint."""
import json
import math
from pathlib import Path

import numpy as np
import torch
from scipy.spatial import cKDTree

from minicolmap.rendering import algorithms as learner
from minicolmap.rendering.config import resolve_render_config
from minicolmap.rendering.data import load_training_scene
from minicolmap.rendering.pipeline import _write_image

root = Path(__file__).resolve().parents[2]
run = root / 'outputs/ui_3dgs_20261018_134016_acf89b'
output = Path(__file__).resolve().parent
checkpoint = torch.load(run / 'checkpoint.pt', map_location='cuda', weights_only=True)
config = resolve_render_config(checkpoint['config'])
status = json.loads((run / 'run_status.json').read_text(encoding='utf-8'))
scene = load_training_scene(run / 'source_model.json', status['dataset'], config)
state = checkpoint['state']
rows = []
with torch.no_grad():
    for image_id in scene.validation_ids:
        frame = scene.frames[image_id]
        K, R, t = [torch.as_tensor(getattr(frame, key), dtype=torch.float32, device='cuda') for key in ('K', 'R', 't')]
        front = (state['means'] @ R.T + t)[:, 2] > 0
        means = state['means'][front]
        covariance = learner.gaussian_covariance(state['log_scales'][front], state['quaternions'][front])
        projection = learner.project_gaussians(means, covariance, K, R, t)
        colors = learner.evaluate_sh(state['sh_coeffs'][front], means + R.T @ t,
                                     checkpoint['active_sh_degree'])
        visible = projection['visible']
        result = learner.splat_gaussians(projection['means2d'][visible], projection['cov2d'][visible],
            projection['depths'][visible], colors[visible], state['opacity_logits'][front].sigmoid()[visible],
            frame.width, frame.height, torch.zeros(3, device='cuda'))
        if image_id == scene.validation_ids[0]:
            _write_image(output / 'trained-view.png', result['rgb'].cpu().numpy())
            _write_image(output / 'reference-view.png', frame.rgb)
            _write_image(output / 'opacity-view.png', result['opacity'][..., None].expand(-1, -1, 3).cpu().numpy())
        target = torch.as_tensor(frame.rgb, device='cuda')
        approximate_foreground = target.max(dim=-1).values > .15
        alpha = result['opacity']
        mse = (result['rgb']-target).square().mean().item()
        black_mse = target.square().mean().item()
        rows.append(dict(image_id=image_id, mse=mse, psnr=-10*math.log10(mse), black_mse=black_mse,
            black_psnr=-10*math.log10(black_mse),
            approximate_foreground_fraction=approximate_foreground.float().mean().item(),
            foreground_alpha_median=alpha[approximate_foreground].median().item(),
            foreground_alpha_gt_05=(alpha[approximate_foreground]>.5).float().mean().item(),
            foreground_alpha_gt_01=(alpha[approximate_foreground]>.1).float().mean().item()))

def quantiles(value):
    return value.flatten().quantile(torch.tensor([0., .5, .9, 1.], device=value.device)).cpu().tolist()

report = dict(run=run.name, iterations=checkpoint['step'], images=len(scene.frames),
    train_views=len(scene.train_ids), validation_views=len(scene.validation_ids),
    source_points=len(scene.points), trained_gaussians=len(state['means']),
    scale_quantiles=quantiles(state['log_scales'].exp()),
    opacity_quantiles=quantiles(state['opacity_logits'].sigmoid()),
    aggregate_psnr=-10*math.log10(np.mean([r['mse'] for r in rows])),
    black_baseline_psnr=-10*math.log10(np.mean([r['black_mse'] for r in rows])),
    note='Foreground is a brightness-threshold proxy, not a ground-truth object segmentation.', views=rows)
indices = np.linspace(0, len(scene.points)-1, len(state['means']), dtype=int)
for label, points in (('selected_512', scene.points[indices]), ('all_6570', scene.points)):
    distances, _ = cKDTree(points).query(points, k=4)
    neighbor_scale = np.sqrt(np.mean(distances[:, 1:]**2, axis=-1))
    report[f'{label}_knn_scale_quantiles'] = np.quantile(neighbor_scale, [0, .5, .9, 1]).tolist()
(output / 'quality-diagnostics.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
print(json.dumps({key: value for key, value in report.items() if key != 'views'}, indent=2), flush=True)
