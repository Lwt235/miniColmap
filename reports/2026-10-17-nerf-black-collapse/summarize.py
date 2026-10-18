"""Full-view evaluation and compositing diagnostics for the learning-rate trial."""
import json
from pathlib import Path

import cv2
import numpy as np
import torch

from minicolmap.rendering.algorithms import build_nerf, generate_rays, volume_render
from minicolmap.rendering.data import load_training_scene
from minicolmap.rendering.pipeline import _frame_record, _render, _tensor


def main():
    torch.set_num_threads(1)
    root = Path(__file__).resolve().parents[2]
    report = Path(__file__).resolve().parent
    output = root / 'outputs/review_nerf_deep_lr1e4_20261017'
    config = json.loads((output / 'config.json').read_text())
    status = json.loads((output / 'run_status.json').read_text())
    scene = load_training_scene(output / 'source_model.json', status['dataset'], config)
    nc = config['nerf']
    network = build_nerf(nc['levels_xyz'], nc['levels_dir'], nc['hidden_dim']).cuda()
    network.load_state_dict(torch.load(output / 'checkpoint.pt', weights_only=True, map_location='cuda')['state'])
    records, images = [], {}
    with torch.no_grad():
        for image_id, frame in scene.frames.items():
            image = _render(network, None, _frame_record(frame), config, torch, 'cuda').cpu().numpy()
            records.append(dict(image_id=image_id, split='validation' if image_id in scene.validation_ids else 'train',
                                mse=float(np.mean((image-frame.rgb)**2)), min=float(image.min()),
                                max=float(image.max()), mean=float(image.mean())))
            if image_id in (3, 4, 16, 36, 44):
                images[image_id] = image
        probe = {}
        for image_id in (3, 4, 16):
            frame = scene.frames[image_id]
            K, R, t = [_tensor(getattr(frame, k), torch, 'cuda') for k in ('K','R','t')]
            rng = np.random.default_rng(9)
            indices = torch.as_tensor(rng.integers(0, frame.width*frame.height, size=256), device='cuda')
            pixels = torch.stack([indices%frame.width, indices//frame.width], -1).float()
            origins, directions = generate_rays(K,R,t,pixels)
            times = config['near'] + torch.arange(config['samples_per_ray'], device='cuda') * ((config['far']-config['near'])/config['samples_per_ray'])
            points = origins[:,None] + directions[:,None] * times[None,:,None]
            rgb, sigma = network(points.reshape(-1,3),directions[:,None].expand_as(points).reshape(-1,3))
            rendered = volume_render(rgb.reshape(256,-1,3), sigma.reshape(256,-1), times.expand(256,-1), config['far'],torch.ones(3,device='cuda'))
            probe[image_id] = dict(mean_opacity=float(rendered['opacity'].mean()),
                                   mean_weight_before_distance_05=float(rendered['weights'][:,times<.5].sum(-1).mean()),
                                   mean_weighted_depth=float(rendered['depth'].mean()))
    summary = {}
    for split in ('train','validation'):
        mse = float(np.mean([r['mse'] for r in records if r['split']==split]))
        summary[split] = dict(mse=mse,psnr=float(-10*np.log10(mse)))
    reference_mean = float(np.mean([np.mean(scene.frames[i].rgb**2) for i in scene.validation_ids]))
    summary['black_baseline_validation_mse'] = reference_mean
    summary['black_baseline_validation_psnr'] = float(-10*np.log10(reference_mean))
    summary['validation_views_with_all_pixels_below_half_quantization'] = sum(r['max']<.5/255 for r in records if r['split']=='validation')
    summary['opacity_probes'] = probe
    summary['per_view'] = records
    (report/'full-evaluation.json').write_text(json.dumps(summary,indent=2),encoding='utf-8')
    failed = build_nerf(nc['levels_xyz'], nc['levels_dir'], nc['hidden_dim']).cuda()
    failed.load_state_dict(torch.load(root/'outputs/ui_nerf_20261017_223335_35d5f4/checkpoint.pt',weights_only=True,map_location='cuda')['state'])
    failed_images = {}
    with torch.no_grad():
        for image_id in (4,16,36,44):
            failed_images[image_id] = _render(failed,None,_frame_record(scene.frames[image_id]),config,torch,'cuda').cpu().numpy()
    # One output row for each view: true photo, failed checkpoint, lower learning rate.
    chosen = (4,16,36,44)
    canvas = np.full((40+208*len(chosen),720,3),24,dtype=np.uint8)
    for column,label in enumerate(('Reference','LR 0.001 / 3000','LR 0.0001 / 3000')):
        cv2.putText(canvas,label,(column*240+5,26),cv2.FONT_HERSHEY_SIMPLEX,.51,(240,240,240),1,cv2.LINE_AA)
    for row,image_id in enumerate(chosen):
        for column,rgb in enumerate((scene.frames[image_id].rgb,failed_images[image_id],images[image_id])):
            y=40+208*row; x=240*column
            image=cv2.resize(np.round(np.clip(rgb,0,1)*255).astype(np.uint8)[...,::-1],(240,180),interpolation=cv2.INTER_NEAREST)
            canvas[y:y+180,x:x+240]=image
            cv2.putText(canvas,f'View {image_id}',(x+8,y+200),cv2.FONT_HERSHEY_SIMPLEX,.5,(230,230,230),1,cv2.LINE_AA)
    assert cv2.imwrite(str(report/'comparison.png'),canvas)
    # Include any completed one-off variants, even if a previous harness run was interrupted.
    variants=[]
    for path in report.glob('*.json'):
        value=json.loads(path.read_text())
        if isinstance(value,dict) and 'variant' in value:
            variants.append({k:v for k,v in value.items() if k!='records'})
    (report/'ablations.json').write_text(json.dumps(variants,indent=2),encoding='utf-8')
    print(json.dumps({k:v for k,v in summary.items() if k!='per_view'},indent=2),flush=True)


if __name__=='__main__':
    main()
