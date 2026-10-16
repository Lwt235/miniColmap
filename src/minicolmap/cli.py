"""Small CLI; unfinished core tasks return exit code 2 with their TODO identifier."""
import argparse
import importlib
import json
import sys
from pathlib import Path


def main(argv=None):
    parser = argparse.ArgumentParser(description='Mini-COLMAP learning scaffold')
    sub = parser.add_subparsers(dest='command', required=True)
    sub.add_parser('doctor', help='Check actual dependency imports')
    ui = sub.add_parser('ui', help='Open the local reconstruction and 3D visualization workbench')
    ui.add_argument('--port', type=int, default=8765)
    ui.add_argument('--no-browser', action='store_true', help='Start without opening a browser tab')
    ui.add_argument('--project', type=Path, help='Project root containing data/ and outputs/')
    synthetic = sub.add_parser('synthetic', help='Generate a geometry fixture with known correspondences')
    synthetic.add_argument('--output', type=Path, default=Path('data/synthetic.npz'))
    synthetic.add_argument('--seed', type=int, default=0)
    synthetic.add_argument('--points', type=int, default=80)
    synthetic.add_argument('--cameras', type=int, default=4)
    synthetic.add_argument('--noise-px', type=float, default=0.0)
    synthetic.add_argument('--outlier-ratio', type=float, default=0.0)
    run = sub.add_parser('run', help='Run real-image SfM after completing core TODOs')
    run.add_argument('--dataset', type=Path, required=True)
    run.add_argument('--output', type=Path, required=True)
    run.add_argument('--config', type=Path)
    inspect = sub.add_parser('inspect', help='Inspect a saved reconstruction, without ground truth')
    inspect.add_argument('model', type=Path)
    export = sub.add_parser('export', help='Export a saved model to COLMAP text and PLY')
    export.add_argument('model', type=Path)
    export.add_argument('--output', type=Path, required=True)
    args = parser.parse_args(argv)
    try:
        if args.command == 'ui':
            if not 1 <= args.port <= 65535:
                raise ValueError('--port must be between 1 and 65535')
            from .ui import run as run_ui
            run_ui(port=args.port, open_browser=not args.no_browser, project_root=args.project)
            return 0
        if args.command == 'doctor':
            missing = []
            for name in ('numpy', 'cv2', 'scipy', 'pytest'):
                try:
                    module = importlib.import_module(name)
                    print(f'{name}: {module.__version__}')
                except ImportError:
                    missing.append(name)
                    print(f'{name}: MISSING')
            print('Core TODOs are intentionally unfinished; dependency checks do not certify SfM.')
            return 1 if missing else 0
        if args.command == 'synthetic':
            from .synthetic import generate_scene, save_scene
            if args.output.exists():
                raise ValueError('Fixture already exists; choose a different --output')
            scene = generate_scene(seed=args.seed, num_points=args.points, num_cameras=args.cameras,
                                   noise_px=args.noise_px, outlier_ratio=args.outlier_ratio)
            args.output.parent.mkdir(parents=True, exist_ok=True)
            save_scene(scene, args.output)
            print(f'Geometry fixture saved: {args.output.resolve()} (not a SIFT or SfM result)')
            return 0
        if args.command == 'run':
            from .config import load_config
            from .pipeline import reconstruct
            result = reconstruct(args.dataset, args.output, load_config(args.config))
        else:
            from .io import load_reconstruction
            from .metrics import reconstruction_summary
            model = load_reconstruction(args.model)
            if args.command == 'export':
                from .export import write_colmap_text, write_ply
                if args.output.exists() and any(args.output.iterdir()):
                    raise ValueError('Export output must be empty; choose a new directory')
                args.output.mkdir(parents=True, exist_ok=True)
                write_colmap_text(model, args.output / 'sparse' / '0')
                write_ply(model, args.output / 'points.ply')
            result = reconstruction_summary(model)
        print(json.dumps(result, ensure_ascii=False, indent=2, allow_nan=False))
        return 0
    except NotImplementedError as exc:
        print(f'Unfinished learner implementation: {exc}', file=sys.stderr)
        print('See docs/02-里程碑与开发步骤.md; fill that TODO before retrying.', file=sys.stderr)
        return 2
    except (ValueError, RuntimeError, OSError, KeyError, ImportError) as exc:
        print(f'Error: {exc}', file=sys.stderr)
        return 1


if __name__ == '__main__':
    raise SystemExit(main())
