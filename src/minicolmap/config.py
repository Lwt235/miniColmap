"""Small, validated JSON configuration; thresholds are dataset-dependent starting values."""
import copy
import json
import math
from pathlib import Path

DEFAULT = {
    'seed': 0,
    'features': {'max_features': 4000, 'ratio': 0.75},
    'geometry': {'threshold_px': 1.5, 'max_trials': 2000, 'min_inliers': 30},
    'mapping': {'min_pnp_points': 15, 'pnp_threshold_px': 3.0, 'min_angle_deg': 1.5,
                'max_reprojection_px': 3.0},
    'bundle_adjustment': {'enabled': False, 'max_nfev': 50, 'loss': 'huber', 'f_scale': 1.0},
}


def load_config(path=None):
    result = copy.deepcopy(DEFAULT)
    if path is not None:
        supplied = json.loads(Path(path).read_text(encoding='utf-8'))
        if not isinstance(supplied, dict):
            raise ValueError('Config must be a JSON object')
        for key, value in supplied.items():
            if key not in result:
                raise ValueError(f'Unknown config section: {key}')
            if isinstance(result[key], dict):
                if not isinstance(value, dict) or set(value) - set(result[key]):
                    raise ValueError(f'Invalid keys in config section: {key}')
                result[key].update(value)
            else:
                result[key] = value
    def number(section, key, lower, upper=None, integer=False):
        value = result[section][key]
        if isinstance(value, bool) or not isinstance(value, (int, float)) or not math.isfinite(value):
            raise ValueError(f'{section}.{key} must be a finite number')
        if value < lower or (upper is not None and value >= upper) or (integer and not isinstance(value, int)):
            raise ValueError(f'Invalid value for {section}.{key}')
    if not isinstance(result['seed'], int) or isinstance(result['seed'], bool) or result['seed'] < 0:
        raise ValueError('seed must be a nonnegative integer')
    number('features', 'max_features', 2, integer=True)
    number('features', 'ratio', 1e-12, 1)
    number('geometry', 'threshold_px', 1e-12)
    number('geometry', 'max_trials', 1, integer=True)
    number('geometry', 'min_inliers', 8, integer=True)
    number('mapping', 'min_pnp_points', 6, integer=True)
    number('mapping', 'pnp_threshold_px', 1e-12)
    number('mapping', 'min_angle_deg', 1e-12, 180)
    number('mapping', 'max_reprojection_px', 1e-12)
    number('bundle_adjustment', 'max_nfev', 1, integer=True)
    number('bundle_adjustment', 'f_scale', 1e-12)
    if type(result['bundle_adjustment']['enabled']) is not bool:
        raise ValueError('bundle_adjustment.enabled must be a bool')
    if result['bundle_adjustment']['loss'] not in ('linear', 'huber', 'soft_l1'):
        raise ValueError('Unsupported bundle-adjustment loss')
    return result

