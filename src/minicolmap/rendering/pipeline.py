"""Training/I/O plumbing. All learned rendering mathematics stays in learner TODOs.

The reference renderer is intentionally small: one coarse NeRF and RGB-only
anisotropic Gaussian splats. It is neither an original-paper reproduction nor a
CUDA rasterizer. Original SfM model, images, poses and calibration are read-only.
"""
from __future__ import annotations

import json
import math
import shutil
import time
import uuid
from pathlib import Path

import cv2
import numpy as np

from . import algorithms as learner
from .config import resolve_render_config
from .data import load_training_scene, load_posed_dataset


def _torch(device='cpu'):
    try:
        import torch
    except ImportError as exc:
        raise ImportError('NeRF/3DGS 需要可选依赖：pip install -e ".[render]"') from exc
    if device == 'cuda' and not torch.cuda.is_available():
        raise ValueError('当前 PyTorch 无可用 CUDA；请选择 cpu 或按官方说明安装匹配的 CUDA 版本')
    return torch


def _write_json(path, value):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2, allow_nan=False), encoding='utf-8')
    _replace(temporary, path)


def _replace(temporary, target):
    # Readers of previews/checkpoints can briefly hold Windows sharing locks.
    for attempt in range(21):
        try:
            temporary.replace(target)
            return
        except PermissionError:
            if attempt == 20:
                raise
            time.sleep(.01)


def _write_image(path, rgb):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    values = np.asarray(rgb)
    if values.ndim != 3 or values.shape[-1] != 3 or not np.isfinite(values).all():
        raise ValueError('渲染图像必须是有限 H×W×3 RGB')
    bgr = cv2.cvtColor(np.round(np.clip(values, 0, 1) * 255).astype(np.uint8), cv2.COLOR_RGB2BGR)
    ok, encoded = cv2.imencode('.png', bgr)
    if not ok:
        raise OSError('无法编码训练预览')
    temporary = path.with_suffix('.tmp')
    temporary.write_bytes(encoded.tobytes())
    _replace(temporary, path)


def _tensor(value, torch, device):
    return torch.as_tensor(value, dtype=torch.float32, device=device)


def _pixels(width, height, torch, device):
    y, x = torch.meshgrid(torch.arange(height, device=device),
                          torch.arange(width, device=device), indexing='ij')
    return torch.stack([x, y], dim=-1).reshape(-1, 2).float()


def _nerf_rays(network, K, R, t, pixels, config, torch):
    origins, directions = learner.generate_rays(K, R, t, pixels)
    count = config['samples_per_ray']
    # Left-edge samples cover [near, far] with equal finite intervals. No infinite
    # terminal delta or hierarchical sampling is hidden in the learner contract.
    positions = config['near'] + torch.arange(count, device=K.device, dtype=K.dtype) * (
        config['far'] - config['near']) / count
    positions = positions.expand(len(pixels), -1)
    xyz = origins[:, None, :] + directions[:, None, :] * positions[..., None]
    dirs = directions[:, None, :].expand_as(xyz)
    rgb, sigma = network(xyz.reshape(-1, 3), dirs.reshape(-1, 3))
    return learner.volume_render(rgb.reshape(-1, count, 3), sigma.reshape(-1, count),
                                 positions, config['far'], torch.ones(3, device=K.device))


def _render(network, state, frame, config, torch, device):
    K, R, t = [_tensor(frame[key], torch, device) for key in ('K', 'R', 't')]
    width, height = frame['width'], frame['height']
    if config['method'] == 'nerf':
        pixels = _pixels(width, height, torch, device)
        chunks = []
        for chunk in pixels.split(config['rays_per_batch']):
            chunks.append(_nerf_rays(network, K, R, t, chunk, config, torch)['rgb'])
        return torch.cat(chunks).reshape(height, width, 3)
    covariance = learner.gaussian_covariance(state['log_scales'], state['quaternions'])
    projected = learner.project_gaussians(state['means'], covariance, K, R, t)
    visible = projected['visible']
    return learner.splat_gaussians(
        projected['means2d'][visible], projected['cov2d'][visible], projected['depths'][visible],
        state['color_logits'].sigmoid()[visible], state['opacity_logits'].sigmoid().reshape(-1)[visible],
        width, height, torch.ones(3, device=device))['rgb']


def _frame_record(frame):
    return {'image_id': frame.image_id, 'K': frame.K.tolist(), 'R': frame.R.tolist(),
            't': frame.t.tolist(), 'width': frame.width, 'height': frame.height}


def _save_checkpoint(output, config, scene, network, state, step, torch):
    checkpoint = {'schema_version': 1, 'pipeline': config['method'], 'config': config, 'step': step,
                  'normalization': {'center': scene.center.tolist(), 'scale': scene.scale,
                                    'source': scene.normalization_source},
                  'frames': [_frame_record(f) for f in scene.frames.values()],
                  'train_ids': scene.train_ids, 'validation_ids': scene.validation_ids,
                  'state': {k: v.detach().cpu() for k, v in (
                      network.state_dict() if network is not None else state).items()}}
    temporary = output / 'checkpoint.pt.tmp'
    torch.save(checkpoint, temporary)
    _replace(temporary, output / 'checkpoint.pt')
    if state is not None:
        # Coordinates in this archive are ORIGINAL SfM world units; the tensor
        # checkpoint remains normalized. The manifest makes both conventions explicit.
        means = state['means'].detach().cpu().numpy() * scene.scale + scene.center
        covariance = learner.gaussian_covariance(state['log_scales'], state['quaternions']).detach().cpu().numpy()
        temporary = output / 'gaussians.npz.tmp'
        with temporary.open('wb') as stream:
            np.savez_compressed(stream, means=means, covariances=covariance * scene.scale ** 2,
                                colors=state['color_logits'].sigmoid().detach().cpu().numpy(),
                                opacities=state['opacity_logits'].sigmoid().detach().cpu().numpy())
        _replace(temporary, output / 'gaussians.npz')


def train(source_model_path, dataset_path, output, config=None, *, on_event=None):
    """Run the supplied trainer after the learner completes N1-N4 or S1-S4.

    Loss, Adam, deterministic batches, evaluation, persistence and notifications
    are provided engineering. The renderer/network implementations are not.
    """
    config = resolve_render_config(config)
    if source_model_path is None and config['method'] == '3dgs':
        raise ValueError('3DGS 需要已有点云模型，请先构建或加载 model.json')
    torch = _torch(config['device'])
    output = Path(output)
    output.mkdir(parents=True, exist_ok=True)
    if any((output / name).exists() for name in ('checkpoint.pt', 'summary.json', 'training.json')):
        raise ValueError('训练输出已存在；请选择独立的新目录')
    started = time.monotonic()
    records, previews = [], []
    metrics = {}
    status = {'status': 'running', 'stage': 'preparing', 'pipeline': config['method'],
              'source_model': str(Path(source_model_path).resolve()) if source_model_path is not None else None,
              'source_kind': 'posed_dataset' if source_model_path is None else 'model',
              'dataset': str(Path(dataset_path).resolve())}

    def event(stage, **value):
        status['stage'] = stage
        status['elapsed_seconds'] = time.monotonic() - started
        _write_json(output / 'run_status.json', status)
        if on_event:
            on_event(dict(stage=stage, **value))

    _write_json(output / 'config.json', config)
    try:
        event('preparing', kind='stage', message='读取照片、内参与相机位姿' if config['method'] == 'nerf'
              else '读取照片、相机位姿与初始化点云')
        frozen = output / 'source_model.json'
        if source_model_path is None:
            from ..io import save_reconstruction
            save_reconstruction(load_posed_dataset(dataset_path), frozen)
        elif Path(source_model_path).resolve() != frozen.resolve():
            shutil.copy2(source_model_path, frozen)
        source_model_path = frozen
        status['source_model'] = str(frozen.resolve())
        scene = load_training_scene(source_model_path, dataset_path, config)
        prepared = {'normalization': {'center': scene.center.tolist(), 'scale': scene.scale,
                                     'source': scene.normalization_source},
                    'pose_convention': 'world_to_camera', 'pixel_convention': 'integer pixel centers',
                    'train_ids': scene.train_ids, 'validation_ids': scene.validation_ids,
                    'source_points': len(scene.points), 'frames': [_frame_record(f) for f in scene.frames.values()],
                    'notes': '验证视图只留出外观，位姿由输入提供；若来自全图 SfM，不是严格全流程未见视角。RGB 沿用 sRGB。'}
        _write_json(output / 'training_scene.json', prepared)
        torch.manual_seed(config['seed'])
        if config['device'] == 'cuda':
            torch.cuda.manual_seed_all(config['seed'])
        rng = np.random.default_rng(config['seed'])
        device = config['device']
        network, state = None, None
        if config['method'] == 'nerf':
            network = learner.build_nerf(config['nerf']['levels_xyz'], config['nerf']['levels_dir'],
                                         config['nerf']['hidden_dim']).to(device)
            parameters = list(network.parameters())
        else:
            count = min(len(scene.points), config['gaussian']['max_gaussians'])
            indices = np.linspace(0, len(scene.points) - 1, count, dtype=int)
            initial = learner.initialize_gaussians(_tensor(scene.points[indices], torch, device),
                _tensor(scene.colors[indices], torch, device),
                config['gaussian']['initial_scale'], config['gaussian']['initial_opacity'])
            state = {k: torch.nn.Parameter(v.detach().clone()) for k, v in initial.items()}
            parameters = list(state.values())
        optimizer = torch.optim.Adam(parameters, lr=config['learning_rate'])
        warned_empty_views = set()
        for step in range(1, config['iterations'] + 1):
            if state is None:
                frame = scene.frames[int(rng.choice(scene.train_ids))]
            else:
                # A legal empty splat returns a constant background, so there
                # is no parameter graph to backpropagate. Select a supported
                # training view instead; never substitute a validation view.
                frame = None
                for image_id in rng.permutation(scene.train_ids):
                    candidate = scene.frames[int(image_id)]
                    with torch.no_grad():
                        camera_points = state['means'] @ _tensor(candidate.R.T, torch, device) + _tensor(candidate.t, torch, device)
                        supported = bool(torch.any(camera_points[:, 2] > 0))
                    if supported:
                        frame = candidate
                        break
                    if candidate.image_id not in warned_empty_views:
                        warned_empty_views.add(candidate.image_id)
                        event('training', kind='warning', message=f'训练相机 #{candidate.image_id} 没有正深度高斯，本轮跳过')
                if frame is None:
                    raise ValueError('所有训练视角都没有正深度高斯；检查位姿、点云与初始化')
            target = _tensor(frame.rgb, torch, device)
            optimizer.zero_grad(set_to_none=True)
            if network is not None:
                indices = torch.as_tensor(rng.integers(0, frame.width * frame.height,
                    size=config['rays_per_batch']), device=device)
                pixels = torch.stack([indices % frame.width, indices // frame.width], dim=-1).float()
                prediction = _nerf_rays(network, _tensor(frame.K, torch, device),
                    _tensor(frame.R, torch, device), _tensor(frame.t, torch, device), pixels, config, torch)['rgb']
                loss = (prediction - target.reshape(-1, 3)[indices]).square().mean()
            else:
                prediction = _render(None, state, _frame_record(frame), config, torch, device)
                loss = (prediction - target).square().mean()
            if not torch.isfinite(loss):
                raise ValueError('训练损失不是有限数；检查 TODO 数值稳定性')
            loss.backward()
            if not any(p.grad is not None for p in parameters):
                raise ValueError('渲染计算图未连接到可训练参数')
            if any(p.grad is not None and not torch.isfinite(p.grad).all() for p in parameters):
                raise ValueError('训练梯度出现 NaN/Inf')
            optimizer.step()
            if state is not None and config['gaussian']['densify_every'] and step % config['gaussian']['densify_every'] == 0:
                gradients = state['means'].grad.norm(dim=-1) if state['means'].grad is not None else torch.zeros(len(state['means']), device=device)
                revised = learner.densify_and_prune(state, gradients, 1e-3, .005, config['gaussian']['max_gaussians'])
                if not len(revised['means']):
                    raise ValueError('密度控制移除了全部高斯')
                state = {k: torch.nn.Parameter(v.detach().clone()) for k, v in revised.items()}
                parameters = list(state.values())
                optimizer = torch.optim.Adam(parameters, lr=config['learning_rate'])
            metrics.update(step=step, total=config['iterations'], loss=float(loss.detach()))
            records.append(dict(metrics))
            event('training', kind='progress', completed=step, total=config['iterations'], metrics=dict(metrics),
                  message=f"训练 {step}/{config['iterations']}，MSE {metrics['loss']:.6g}")
            if step % config['preview_every'] == 0 or step == config['iterations']:
                validation = scene.frames[scene.validation_ids[0]]
                with torch.no_grad():
                    rgb = _render(network, state, _frame_record(validation), config, torch, device)
                    mse = float((rgb - _tensor(validation.rgb, torch, device)).square().mean())
                if not math.isfinite(mse):
                    raise ValueError('验证图像含 NaN/Inf')
                metrics.update(validation_mse=mse, psnr=-10 * math.log10(max(mse, 1e-12)),
                               psnr_scope='first_validation_view')
                relative = f'previews/step-{step:06d}.png'
                reference = f'previews/reference-{validation.image_id}.png'
                _write_image(output / relative, rgb.detach().cpu().numpy())
                _write_image(output / reference, validation.rgb)
                preview = {'path': relative, 'reference_path': reference, 'image_id': validation.image_id, 'step': step}
                previews.append(preview)
                _save_checkpoint(output, config, scene, network, state, step, torch)
                _write_json(output / 'training.json', {'metrics': records, 'previews': previews})
                event('validation', kind='preview', metrics=dict(metrics), preview=preview,
                      message='保存真实验证视图与权重')
        errors = []
        with torch.no_grad():
            for image_id in scene.validation_ids:
                frame = scene.frames[image_id]
                result = _render(network, state, _frame_record(frame), config, torch, device)
                errors.append(float((result - _tensor(frame.rgb, torch, device)).square().mean()))
        validation_mse = float(np.mean(errors))
        if not math.isfinite(validation_mse):
            raise ValueError('最终验证误差不是有限数')
        metrics.update(validation_mse=validation_mse, psnr=-10 * math.log10(max(validation_mse, 1e-12)),
                       psnr_scope='mean_validation_view_mse')
        summary = {'pipeline': config['method'], 'step': config['iterations'],
                   'image_count': len(scene.frames), 'registered_images': len(scene.frames),
                   'point_count': len(state['means']) if state is not None else len(scene.points),
                   'metrics': metrics, 'previews': previews, 'checkpoint': 'checkpoint.pt',
                   'elapsed_seconds': time.monotonic() - started,
                   'train_ids': scene.train_ids, 'validation_ids': scene.validation_ids}
        _write_json(output / 'summary.json', summary)
        status['status'] = 'completed'
        event('done', kind='complete', summary=summary)
        return summary
    except Exception as exc:
        status.update(status='todo' if isinstance(exc, NotImplementedError) else 'failed', error=str(exc))
        event(status['stage'], kind='error', message=str(exc))
        raise


def render_checkpoint(output, *, camera=None, image_id=None):
    """Render a saved learner checkpoint; camera extrinsics use ORIGINAL SfM units."""
    output = Path(output)
    torch = _torch()
    checkpoint = torch.load(output / 'checkpoint.pt', map_location='cpu', weights_only=True)
    if checkpoint.get('schema_version') != 1:
        raise ValueError('不支持的训练权重格式')
    config = resolve_render_config(checkpoint['config'])
    config['device'] = 'cpu'  # portable inspection; training can still use CUDA
    if (camera is None) == (image_id is None):
        raise ValueError('请只提供 image_id 或 camera 之一')
    if camera is not None:
        from ..models import Camera, Pose
        if not isinstance(camera, dict):
            raise ValueError('camera 必须是对象')
        c = Camera(1, camera['width'], camera['height'], camera['K'])
        pose = Pose(camera['R'], camera['t'])
        if c.width > 512 or c.height > 512:
            raise ValueError('教学渲染预览每边最多 512 像素')
        normalization = checkpoint['normalization']
        frame = {'K': c.K.tolist(), 'R': pose.R.tolist(),
                 't': ((pose.R @ np.array(normalization['center']) + pose.t) / normalization['scale']).tolist(),
                 'width': c.width, 'height': c.height}
    else:
        if isinstance(image_id, bool) or not isinstance(image_id, int):
            raise ValueError('image_id 必须是整数')
        frame = next((f for f in checkpoint['frames'] if f['image_id'] == image_id), None)
        if frame is None:
            raise ValueError('该相机没有参与本次训练/验证数据准备')
        if frame['width'] > 512 or frame['height'] > 512:
            raise ValueError('训练图像过大，请提高 image_downscale 后重新训练以生成预览')
    network, state = None, None
    if config['method'] == 'nerf':
        network = learner.build_nerf(config['nerf']['levels_xyz'], config['nerf']['levels_dir'], config['nerf']['hidden_dim'])
        network.load_state_dict(checkpoint['state'])
        network.eval()
    else:
        state = checkpoint['state']
    with torch.no_grad():
        rgb = _render(network, state, frame, config, torch, 'cpu')
    relative = f'previews/render-{uuid.uuid4().hex[:12]}.png'
    _write_image(output / relative, rgb.cpu().numpy())
    preview = {'path': relative, 'step': checkpoint['step']}
    if image_id is not None:
        preview['image_id'] = image_id
        reference = f'previews/reference-{image_id}.png'
        if not (output / reference).exists():
            # A manual camera can be a training view, whereas periodic previews
            # only saved the first validation reference. Recover its actual
            # resized photo when source data is still available. A portable
            # checkpoint remains renderable after the source photos are moved.
            try:
                status = json.loads((output / 'run_status.json').read_text(encoding='utf-8'))
                scene = load_training_scene(output / 'source_model.json', status['dataset'], config)
                _write_image(output / reference, scene.frames[image_id].rgb)
            except (OSError, ValueError, KeyError):
                pass
        if (output / reference).exists():
            preview['reference_path'] = reference
    return preview
