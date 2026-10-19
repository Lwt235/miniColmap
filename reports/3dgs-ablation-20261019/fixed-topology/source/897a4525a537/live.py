"""Persistent CUDA inference worker. This module imports torch only in the child."""
from __future__ import annotations

import time
from pathlib import Path

import numpy as np


def normalize_camera(camera, normalization):
    """Convert ORIGINAL SfM world-to-camera extrinsics to checkpoint coordinates."""
    center = np.asarray(normalization['center'], dtype=np.float64)
    scale = float(normalization['scale'])
    if center.shape != (3,) or not np.isfinite(center).all() or not np.isfinite(scale) or scale <= 0:
        raise ValueError('checkpoint 的场景归一化无效')
    R = np.asarray(camera['R'], dtype=np.float64)
    with np.errstate(over='ignore', invalid='ignore', divide='ignore'):
        t = (R @ center + np.asarray(camera['t'], dtype=np.float64)) / scale
    if not np.isfinite(t).all() or np.abs(t).max() > 1e10:
        raise ValueError('相机归一化后的平移超出实时渲染范围（绝对值须小于等于 1e10）')
    return {**camera, 't': t.tolist()}


class CudaRenderer:
    """Load one checkpoint once; retain learner covariance/SH and CUDA splatting."""
    def __init__(self, output):
        import torch
        from . import algorithms as learner
        from .config import resolve_render_config, validate_gaussian_count
        from .gsplat_runtime import load_project_extension
        if not torch.cuda.is_available():
            raise ValueError('实时高斯渲染需要可用 CUDA GPU')
        load_project_extension()
        import importlib.util
        import gsplat
        if getattr(gsplat, 'csrc', None) is None and importlib.util.find_spec('gsplat.csrc') is None:
            # A live connection must never trigger JIT compiler subprocesses.
            # Build/verify explicitly first, then open the interactive session.
            raise ValueError('实时渲染需要预先编译的 gsplat 扩展，请先运行 scripts/check_gsplat_backend.py')
        from gsplat.cuda._backend import _C
        if _C is None:
            raise ValueError('gsplat CUDA 扩展未加载，请先完成后端自检')
        checkpoint = torch.load(Path(output) / 'checkpoint.pt', map_location='cpu', weights_only=True)
        if checkpoint.get('schema_version') != 2 or checkpoint.get('pipeline') != '3dgs':
            raise ValueError('实时渲染仅支持带球谐颜色的 3DGS checkpoint')
        self.config = resolve_render_config(checkpoint['config'])
        self.normalization = checkpoint['normalization']
        normalize_camera({'R': np.eye(3).tolist(), 't': [0, 0, 0]}, self.normalization)
        state = checkpoint['state']
        count = len(state['means'])
        degree = checkpoint.get('active_sh_degree', self.config['gaussian']['sh_degree'])
        if isinstance(degree, bool) or not isinstance(degree, int) or not 0 <= degree <= 3:
            raise ValueError('checkpoint 球谐阶数无效')
        if degree > self.config['gaussian']['sh_degree']:
            raise ValueError('checkpoint 活跃球谐阶数超过已保存系数')
        expected = {'means': (count, 3), 'log_scales': (count, 3), 'quaternions': (count, 4),
                    'opacity_logits': (count,), 'sh_coeffs': (count, (self.config['gaussian']['sh_degree'] + 1) ** 2, 3)}
        validate_gaussian_count(count)
        for key, shape in expected.items():
            value = state.get(key)
            if not isinstance(value, torch.Tensor) or tuple(value.shape) != shape or not torch.isfinite(value).all():
                raise ValueError(f'checkpoint 张量无效：{key}')
        self.torch, self.learner = torch, learner
        self.degree, self.step = degree, checkpoint['step']
        self.state = {key: state[key].detach().to(device='cuda', dtype=torch.float32) for key in expected}
        if any(not torch.isfinite(value).all() for value in self.state.values()):
            raise ValueError('checkpoint 参数转换为 CUDA float32 后超出有效范围')
        with torch.inference_mode():
            self.covariance = learner.gaussian_covariance(self.state['log_scales'], self.state['quaternions'])
            self.opacities = self.state['opacity_logits'].sigmoid()
            self.background = torch.full((3,), 0. if self.config['background'] == 'black' else 1., device='cuda')
            if not torch.isfinite(self.covariance).all():
                raise ValueError('checkpoint 高斯协方差含非有限值')
        torch.cuda.synchronize()
        self.ready = {'type': 'ready', 'backend': 'gsplat', 'device': 'cuda:0',
                      'gpu_name': str(torch.cuda.get_device_name()),
                      'gaussian_count': count, 'sh_degree': degree, 'step': self.step,
                      'coordinate_system': 'sfm_world', 'max_width': 1920, 'max_height': 1080,
                      'max_pixels': 2073600, 'jpeg_quality': 85}

    def render(self, camera):
        import cv2
        from .gaussian_backend import rasterize_gsplat
        torch, learner = self.torch, self.learner
        frame = normalize_camera(camera, self.normalization)
        K, R, t = [torch.as_tensor(frame[key], device='cuda', dtype=torch.float32) for key in ('K', 'R', 't')]
        start, end = torch.cuda.Event(enable_timing=True), torch.cuda.Event(enable_timing=True)
        began = time.perf_counter()
        with torch.inference_mode():
            start.record()
            means = self.state['means']
            front = ((means @ R.T + t)[:, 2] > 0)
            visible_means = means[front]
            colors = learner.evaluate_sh(self.state['sh_coeffs'][front], visible_means + R.T @ t, self.degree)
            rgb = rasterize_gsplat(visible_means, self.covariance[front], colors, self.opacities[front],
                                  K, R, t, frame['width'], frame['height'], self.background)
            end.record()
            end.synchronize()
            render_ms = start.elapsed_time(end)
            render_wall_ms = (time.perf_counter() - began) * 1000
            began = time.perf_counter()
            pixels = torch.round(rgb.clamp(0, 1) * 255).to(torch.uint8).cpu().numpy()
            readback_ms = (time.perf_counter() - began) * 1000
        began = time.perf_counter()
        ok, encoded = cv2.imencode('.jpg', cv2.cvtColor(pixels, cv2.COLOR_RGB2BGR),
                                   [cv2.IMWRITE_JPEG_QUALITY, 85])
        if not ok:
            raise OSError('实时帧 JPEG 编码失败')
        return {'width': frame['width'], 'height': frame['height'], 'render_ms': render_ms,
                'render_wall_ms': render_wall_ms, 'readback_ms': readback_ms,
                'encode_ms': (time.perf_counter() - began) * 1000,
                'encoding': 'jpeg', 'bytes': int(encoded.nbytes)}, encoded.tobytes()


def worker_main(connection, output):
    """Only this spawned process owns CUDA; process termination releases its context."""
    try:
        from ..ui.runtime import configure_worker_runtime
        runtime = configure_worker_runtime()
        renderer = CudaRenderer(output)
        renderer.ready['runtime'] = runtime
        connection.send(renderer.ready)
        while True:
            request = connection.recv()
            if request is None:
                break
            metadata, jpeg = renderer.render(request['camera'])
            connection.send(({'type': 'frame', 'seq': request['seq'], **metadata}, jpeg))
    except (EOFError, BrokenPipeError):
        pass
    except Exception as exc:
        try:
            connection.send({'type': 'error', 'message': f'{type(exc).__name__}: {exc}'})
        except (EOFError, BrokenPipeError, OSError):
            pass
    finally:
        connection.close()
