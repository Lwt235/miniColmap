"""Independent, full-frame evaluation of saved NeRF weights and simple baselines."""
import csv
import json
import math
from pathlib import Path

import cv2
import numpy as np
import torch

from minicolmap.io import load_reconstruction
from minicolmap.rendering.algorithms import build_nerf
from minicolmap.rendering.data import load_training_scene
from minicolmap.rendering.pipeline import _frame_record, _render, render_checkpoint
from minicolmap.ui.runtime import configure_worker_runtime


def psnr(mse):
    return -10 * math.log10(max(float(mse), 1e-12))


def read(path):
    return json.loads(path.read_text(encoding='utf-8'))


def main():
    configure_worker_runtime()
    torch.set_num_threads(1)  # Only this diagnostic process; avoid tiny CPU GEMM oversubscription.
    root = Path(__file__).resolve().parents[2]
    report = Path(__file__).resolve().parent
    old = root / 'outputs/ui_nerf_20261017_214716_4f8437'
    new = root / 'outputs/review_nerf_20261017_3000'
    config = read(old / 'config.json')
    scene = load_training_scene(old / 'source_model.json', read(old / 'run_status.json')['dataset'], config)
    mean_image = np.mean([scene.frames[i].rgb for i in scene.train_ids], axis=0)
    mean_rgb = mean_image.mean(axis=(0, 1))
    rows = []
    for image_id, frame in scene.frames.items():
        rows.append(dict(image_id=image_id, split='validation' if image_id in scene.validation_ids else 'train',
                         mean_rgb_mse=float(np.mean((frame.rgb - mean_rgb) ** 2)),
                         mean_image_mse=float(np.mean((frame.rgb - mean_image) ** 2))))
    comparisons = {}
    predictions = {}
    for steps, output in ((1000, old), (3000, new)):
        checkpoint = torch.load(output / 'checkpoint.pt', map_location='cpu', weights_only=True)
        nc = checkpoint['config']['nerf']
        network = build_nerf(nc['levels_xyz'], nc['levels_dir'], nc['hidden_dim'])
        network.load_state_dict(checkpoint['state'])
        network.to('cuda').eval()
        by_id = {}
        with torch.no_grad():
            for frame in scene.frames.values():
                rgb = _render(network, None, _frame_record(frame), checkpoint['config'], torch, 'cuda')
                values = rgb.cpu().numpy()
                assert np.isfinite(values).all()
                by_id[frame.image_id] = values
                rows[frame.image_id - 1][f'nerf_{steps}_mse'] = float(np.mean((values - frame.rgb) ** 2))
        train_mse = float(np.mean([rows[i - 1][f'nerf_{steps}_mse'] for i in scene.train_ids]))
        val_mse = float(np.mean([rows[i - 1][f'nerf_{steps}_mse'] for i in scene.validation_ids]))
        saved_val_mse = read(output / 'summary.json')['metrics']['validation_mse']
        assert abs(val_mse - saved_val_mse) < 1e-6, (val_mse, saved_val_mse)
        # State restored from disk must also work on a CPU, independently of training device.
        network.to('cpu')
        frame = scene.frames[scene.validation_ids[0]]
        with torch.no_grad():
            cpu = _render(network, None, _frame_record(frame), checkpoint['config'], torch, 'cpu').numpy()
        max_difference = float(np.max(np.abs(cpu - by_id[frame.image_id])))
        np.testing.assert_allclose(cpu, by_id[frame.image_id], atol=1e-4, rtol=1e-4)
        comparisons[str(steps)] = dict(train_mse=train_mse, train_psnr=psnr(train_mse),
                                      validation_mse=val_mse, validation_psnr=psnr(val_mse),
                                      saved_summary_mse_difference=abs(val_mse - saved_val_mse),
                                      cpu_cuda_max_rgb_difference=max_difference,
                                      parameters=sum(p.numel() for p in network.parameters()),
                                      elapsed_seconds=read(output / 'summary.json')['elapsed_seconds'])
        predictions[steps] = by_id
        print(json.dumps({steps: comparisons[str(steps)]}), flush=True)
    baselines = {}
    for key in ('mean_rgb', 'mean_image'):
        mse = float(np.mean([rows[i - 1][key + '_mse'] for i in scene.validation_ids]))
        baselines[key] = dict(validation_mse=mse, validation_psnr=psnr(mse))
    with (report / 'per-view.csv').open('w', newline='', encoding='utf-8') as stream:
        writer = csv.DictWriter(stream, fieldnames=list(rows[0]))
        writer.writeheader()
        writer.writerows(rows)
    original_records = read(old / 'training.json')['metrics']
    new_records = read(new / 'training.json')['metrics']
    loss_difference = max(abs(a['loss'] - b['loss']) for a, b in zip(original_records, new_records))
    old_preview = cv2.imread(str(old / 'previews/step-001000.png'))
    new_preview = cv2.imread(str(new / 'previews/step-001000.png'))
    # Diagnostic coverage uses optional SfM points only after training; they are not NeRF inputs.
    model = load_reconstruction(old / 'source_model.json')
    distances = []
    for point in model.points.values():
        for image_id, _ in point.observations:
            distances.append(np.linalg.norm(point.xyz - model.poses[image_id].center) / scene.scale)
    distances = np.asarray(distances)
    coverage = dict(observations=len(distances), min=float(distances.min()), max=float(distances.max()),
                    inside_fraction=float(np.mean((distances >= config['near']) & (distances <= config['far']))))
    events = [json.loads(line) for line in (report / 'controlled-events.jsonl').read_text(encoding='utf-8').splitlines()]
    progress = [v['metrics'] for v in events if v.get('kind') == 'preview']
    # Labelled 3x enlargement preserves actual rendered pixels (nearest-neighbor).
    ids = [4, 16, 28, 36, 44]
    tile_w, tile_h, text_h = 240, 180, 28
    sheet = np.full((40 + len(ids) * (tile_h + text_h), 4 * tile_w, 3), 24, dtype=np.uint8)
    for column, title in enumerate(('Reference', 'Train mean image', 'NeRF 1000', 'NeRF 3000')):
        cv2.putText(sheet, title, (column * tile_w + 8, 26), cv2.FONT_HERSHEY_SIMPLEX, .6, (235, 235, 235), 1, cv2.LINE_AA)
    for row, image_id in enumerate(ids):
        frame = scene.frames[image_id]
        for column, rgb in enumerate((frame.rgb, mean_image, predictions[1000][image_id], predictions[3000][image_id])):
            pixels = np.round(np.clip(rgb, 0, 1) * 255).astype(np.uint8)[..., ::-1]
            image = cv2.resize(pixels, (tile_w, tile_h), interpolation=cv2.INTER_NEAREST)
            y, x = 40 + row * (tile_h + text_h), column * tile_w
            sheet[y:y + tile_h, x:x + tile_w] = image
            label = f'View {image_id}' if column == 0 else f'{psnr(np.mean((rgb - frame.rgb) ** 2)):.2f} dB'
            cv2.putText(sheet, label, (x + 8, y + tile_h + 20), cv2.FONT_HERSHEY_SIMPLEX, .5, (230, 230, 230), 1, cv2.LINE_AA)
    assert cv2.imwrite(str(report / 'comparison.png'), sheet)
    # Exercise the production arbitrary-camera path in original SfM units.
    pose = model.poses[4]
    original_camera = dict(width=scene.frames[4].width, height=scene.frames[4].height,
                           K=scene.frames[4].K.tolist(), R=pose.R.tolist(), t=pose.t.tolist())
    existing = render_checkpoint(new, image_id=4)
    custom = render_checkpoint(new, camera=original_camera)
    np.testing.assert_array_equal(cv2.imread(str(new / existing['path'])), cv2.imread(str(new / custom['path'])))
    from scipy.spatial.transform import Rotation, Slerp
    rotation = Slerp([0., 1.], Rotation.from_matrix(np.stack([model.poses[3].R, model.poses[5].R])))([.5]).as_matrix()[0]
    center = (model.poses[3].center + model.poses[5].center) / 2
    interpolated = render_checkpoint(new, camera=dict(original_camera, R=rotation.tolist(), t=(-rotation @ center).tolist()))
    interpolation_image = cv2.imread(str(new / interpolated['path']))
    assert interpolation_image.shape == (60, 80, 3)
    assert cv2.imwrite(str(report / 'interpolated-view.png'), interpolation_image)
    result = dict(config=config, width=frame.width, height=frame.height, train_count=len(scene.train_ids),
                  validation_count=len(scene.validation_ids), comparisons=comparisons, baselines=baselines,
                  first_1000_steps_max_loss_difference=loss_difference,
                  first_1000_preview_max_u8_difference=int(np.abs(old_preview.astype(int) - new_preview.astype(int)).max()),
                  sampling_coverage=coverage, preview_metrics=progress,
                  original_units_camera_roundtrip='pixel_identical',
                  interpolated_camera='midpoint of views 3 and 5; no ground truth',
                  loss_windows={str(start):float(np.mean([r['loss'] for r in new_records[start:start + 100]]))
                                for start in (0, 900, 1900, 2900)})
    (report / 'quality.json').write_text(json.dumps(result, indent=2), encoding='utf-8')
    print(json.dumps(result, indent=2), flush=True)


if __name__ == '__main__':
    main()
