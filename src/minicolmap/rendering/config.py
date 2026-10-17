"""Independent, strict rendering configuration; SfM configuration is unchanged."""
from __future__ import annotations

import copy
import math


DEFAULT = {
    "method": "nerf", "iterations": 1000, "learning_rate": .001,
    "image_downscale": 8, "rays_per_batch": 256, "samples_per_ray": 32,
    "near": .1, "far": 4., "holdout_every": 4, "seed": 0,
    "device": "cpu", "preview_every": 100,
    "nerf": {"levels_xyz": 6, "levels_dir": 4, "hidden_dim": 64},
    "gaussian": {"initial_scale": .01, "initial_opacity": .1,
                 "max_gaussians": 512, "densify_every": 0},
}


def resolve_render_config(overrides: dict | None = None) -> dict:
    result = copy.deepcopy(DEFAULT)
    if overrides is not None:
        if not isinstance(overrides, dict):
            raise ValueError("渲染配置必须是 JSON 对象")
        for key, value in overrides.items():
            if key not in result:
                raise ValueError(f"未知渲染参数：{key}")
            if isinstance(result[key], dict):
                if not isinstance(value, dict) or value.keys() - result[key].keys():
                    raise ValueError(f"渲染参数分组无效：{key}")
                result[key].update(value)
            else:
                result[key] = value
    if result['method'] not in ('nerf', '3dgs'):
        raise ValueError("method 必须是 nerf 或 3dgs")
    if result['device'] not in ('cpu', 'cuda'):
        raise ValueError("device 必须是 cpu 或 cuda")

    def number(target, key, low, high, integer=False, open_low=False):
        value = target[key]
        if (isinstance(value, bool) or not isinstance(value, (int, float))
                or not math.isfinite(value) or value < low or value > high
                or (open_low and value == low) or (integer and not isinstance(value, int))):
            raise ValueError(f"渲染参数 {key} 超出有效范围 [{low}, {high}]")
    for key, low, high in (
        ('iterations', 1, 1000000), ('image_downscale', 1, 128),
        ('rays_per_batch', 1, 65536), ('samples_per_ray', 2, 1024),
        ('holdout_every', 2, 1000000), ('seed', 0, 2147483647),
        ('preview_every', 1, 1000000),
    ):
        number(result, key, low, high, True)
    number(result, 'learning_rate', 0, 1, open_low=True)
    number(result, 'near', 0, 1000000)
    number(result, 'far', 0, 1000000, open_low=True)
    if result['far'] <= result['near']:
        raise ValueError("far 必须大于 near；单位为归一化后的重建距离")
    for key in ('levels_xyz', 'levels_dir'):
        number(result['nerf'], key, 0, 16, True)
    number(result['nerf'], 'hidden_dim', 4, 1024, True)
    number(result['gaussian'], 'initial_scale', 0, 10, open_low=True)
    number(result['gaussian'], 'initial_opacity', 0, 1, open_low=True)
    if result['gaussian']['initial_opacity'] == 1:
        raise ValueError("initial_opacity 必须严格小于 1")
    number(result['gaussian'], 'max_gaussians', 1, 100000, True)
    number(result['gaussian'], 'densify_every', 0, 1000000, True)
    return result


def capabilities() -> dict:
    """Discover an optional dependency without loading CUDA into the web server."""
    import importlib.util
    available = importlib.util.find_spec('torch') is not None
    return {"torch_available": available, "cuda_available": None,
            "cuda_note": "CUDA 可用性在训练子进程中检查；此页不初始化 GPU",
            "methods": ['nerf', '3dgs'], "defaults": resolve_render_config()}
