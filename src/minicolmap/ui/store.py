"""Local job registry. Models and original results are only read, never rewritten."""
from __future__ import annotations

import hashlib
import json
import os
import subprocess
import sys
import threading
import time
import uuid
from pathlib import Path

from ..config import load_config
from ..io import load_dataset, load_reconstruction
from ..metrics import reconstruction_summary
from .worker import atomic_json


def read_json(path: Path, default=None):
    try:
        return json.loads(path.read_text(encoding="utf-8-sig"))
    except (OSError, ValueError):
        return default


def stable_id(prefix: str, path: Path) -> str:
    return prefix + hashlib.sha256(str(path.resolve()).encode("utf-8")).hexdigest()[:16]


class Store:
    def __init__(self, root: Path):
        self.root = root.resolve()
        self.state = self.root / ".cache" / "mini-colmap-ui"
        self.datasets: dict[str, Path] = {}
        self.runs: dict[str, dict] = {}
        self.processes: dict[str, subprocess.Popen] = {}
        self.logs = {}
        # Cache only image identities, never paths used to serve files. Dataset
        # paths still go through load_dataset's containment/existence checks.
        self.image_identities = {}
        self.lock = threading.RLock()
        for metadata in (self.state / "runs").glob("*.json"):
            record = read_json(metadata)
            if record and record.get("id"):
                if record.get("status") == "running":
                    record.update(status="interrupted", error="上次界面服务已退出，任务中断")
                    atomic_json(metadata, record)
                self.runs[record["id"]] = record
        self.discover()

    def discover(self):
        with self.lock:
            data_root = self.root / "data"
            for manifest in data_root.rglob("*.json") if data_root.exists() else []:
                if any((parent / ".invalid-import").exists() for parent in manifest.parents if parent != data_root.parent):
                    continue
                document = read_json(manifest, {})
                if isinstance(document, dict) and "cameras" in document and "images" in document:
                    self.datasets[stable_id("dataset-", manifest)] = manifest.resolve()
            known_outputs = {str(Path(run["output_path"]).resolve()) for run in self.runs.values()}
            outputs = self.root / "outputs"
            for output in sorted(outputs.iterdir()) if outputs.exists() else []:
                if not output.is_dir() or str(output.resolve()) in known_outputs:
                    continue
                status = read_json(output / "run_status.json", {})
                if not status and not (output / "model.json").exists():
                    continue
                run_id = stable_id("result-", output)
                summary = read_json(output / "summary.json", {})
                run = {"id": run_id, "name": output.name,
                       "status": "interrupted" if status.get("status") == "running" else
                       ("failed" if status.get("status") in ("failed", "todo") else "completed"),
                       "stage": status.get("stage", "done"), "output_path": str(output.resolve()),
                       "snapshots": [], "images_available": False, "warnings": []}
                run.update({key: value for key, value in summary.items() if key in (
                    "registered_images", "image_count", "point_count", "elapsed_seconds")})
                if status.get("error"):
                    run["error"] = status["error"]
                if status.get("dataset"):
                    run["dataset_path"] = status["dataset"]
                if (output / "model.json").exists():
                    run["snapshots"] = [{"id": "final", "label": "最终结果", "stage": "done"}]
                ba = read_json(output / "ba.json", {})
                if ba.get("accepted") and not ba.get("solver_success"):
                    run["warnings"].append("BA 候选已接受，但尚未收敛")
                if summary.get("unregistered_image_ids"):
                    run["warnings"].append("部分图像未注册：" + str(summary["unregistered_image_ids"]))
                self.runs[run_id] = run
            for run in self.runs.values():
                matched = self.image_dataset(run)
                if matched is not None:
                    path, data = matched
                    dataset_id = stable_id("dataset-", path)
                    self.datasets[dataset_id] = path.resolve()
                    run["dataset_id"] = dataset_id
                    run["images_available"] = bool(data["image_paths"])
                else:
                    run["images_available"] = False
                    run.pop("dataset_id", None)

    def dataset(self, dataset_id):
        if dataset_id not in self.datasets:
            raise KeyError("数据集不存在")
        path = self.datasets[dataset_id]
        return path, load_dataset(path)

    def dataset_info(self, dataset_id):
        path, dataset = self.dataset(dataset_id)
        return {"id": dataset_id, "name": path.parent.name + (" / " + path.stem if path.stem != "dataset" else ""),
                "path": str(path), "image_count": len(dataset["images"]),
                "images": [{"id": image.id, "name": image.name, "camera_id": image.camera_id,
                            "width": dataset["cameras"][image.camera_id].width,
                            "height": dataset["cameras"][image.camera_id].height,
                            "image_url": f"/api/datasets/{dataset_id}/images/{image.id}"}
                           for image in dataset["images"].values()],
                "cameras": [{"id": c.id, "width": c.width, "height": c.height, "K": c.K.tolist()}
                            for c in dataset["cameras"].values()]}

    def bootstrap(self):
        self.discover()
        datasets = []
        for dataset_id in self.datasets:
            try:
                info = self.dataset_info(dataset_id)
                datasets.append({key: info[key] for key in ("id", "name", "path", "image_count")})
            except (OSError, ValueError, KeyError, TypeError):
                continue
        return {"datasets": datasets, "runs": self.list_runs(), "defaults": load_config()}

    def get(self, run_id):
        with self.lock:
            if run_id not in self.runs:
                raise KeyError("运行记录不存在")
            process = self.processes.get(run_id)
            metadata = self.state / "runs" / f"{run_id}.json"
            if metadata.exists():
                self.runs[run_id] = read_json(metadata, self.runs[run_id])
            run = self.runs[run_id]
            if process is not None and process.poll() is not None:
                if run["status"] == "running":
                    run.update(status="failed", error="重建进程意外结束；请查看诊断日志")
                    atomic_json(metadata, run)
                self.processes.pop(run_id, None)
                log = self.logs.pop(run_id, None)
                if log:
                    log.close()
            return run

    def public(self, run):
        return {key: value for key, value in run.items() if key not in ("config", "dataset_path")}

    def list_runs(self):
        return [self.public(self.get(run_id)) for run_id in reversed(list(self.runs))]

    def start(self, dataset_id, config):
        with self.lock:
            for run_id in list(self.runs):
                if self.get(run_id)["status"] == "running":
                    raise RuntimeError("已有重建任务正在运行，请等待或取消")
            path, dataset = self.dataset(dataset_id)
            run_id = uuid.uuid4().hex[:16]
            output = self.root / "outputs" / ("ui_" + time.strftime("%Y%m%d_%H%M%S_") + run_id[:6])
            run = {"id": run_id, "name": output.name, "status": "running", "stage": "starting",
                   "dataset_id": dataset_id, "dataset_path": str(path), "config": config,
                   "registered_images": 0, "point_count": 0, "image_count": len(dataset["images"]),
                   "elapsed_seconds": 0, "snapshots": [], "images_available": True,
                   "warnings": [], "output_path": str(output.resolve())}
            metadata = self.state / "runs" / f"{run_id}.json"
            atomic_json(metadata, run)
            logs_dir = self.state / "logs"
            logs_dir.mkdir(parents=True, exist_ok=True)
            log = (logs_dir / f"{run_id}.log").open("wb")
            env = dict(os.environ)
            source_root = str(Path(__file__).resolve().parents[2])
            env["PYTHONPATH"] = source_root + os.pathsep + env.get("PYTHONPATH", "")
            kwargs = {"creationflags": subprocess.CREATE_NO_WINDOW} if os.name == "nt" else {}
            try:
                process = subprocess.Popen([sys.executable, "-m", "minicolmap.ui.worker", str(metadata)],
                                           cwd=self.root, stdout=log, stderr=subprocess.STDOUT,
                                           env=env, **kwargs)
            except Exception:
                log.close()
                run.update(status="failed", error="无法启动重建子进程")
                atomic_json(metadata, run)
                raise
            self.runs[run_id] = run
            self.processes[run_id] = process
            self.logs[run_id] = log
            return self.public(run)

    def cancel(self, run_id, interrupted=False):
        with self.lock:
            run = self.get(run_id)
            if run["status"] != "running":
                return self.public(run)
            process = self.processes.get(run_id)
            if process is not None:
                process.terminate()
                try:
                    process.wait(timeout=5)
                except subprocess.TimeoutExpired:
                    process.kill()
                    process.wait(timeout=5)
            # Read the worker's final atomic metadata without treating our own
            # intentional process termination as an unexpected worker failure.
            metadata = self.state / "runs" / f"{run_id}.json"
            run = read_json(metadata, run)
            self.processes.pop(run_id, None)
            log = self.logs.pop(run_id, None)
            if log:
                log.close()
            run.update(status="interrupted" if interrupted else "cancelled", stage="cancelled")
            self.runs[run_id] = run
            atomic_json(metadata, run)
            output = Path(run["output_path"])
            ui_dir = output / "ui"
            ui_dir.mkdir(parents=True, exist_ok=True)
            status_path = output / "run_status.json"
            status = read_json(status_path, {})
            status.update(status=run["status"], stage="cancelled")
            atomic_json(status_path, status)
            events = self.events(run_id)
            seq = max((item.get("seq", 0) for item in events), default=0) + 1
            with (ui_dir / "events.jsonl").open("a", encoding="utf-8") as stream:
                stream.write(json.dumps({"kind": "cancelled", "status": run["status"],
                                         "stage": "cancelled", "seq": seq}, ensure_ascii=False) + "\n")
            return self.public(run)

    def close(self):
        for run_id in list(self.processes):
            self.cancel(run_id, interrupted=True)

    def events(self, run_id):
        run = self.get(run_id)
        path = Path(run["output_path"]) / "ui" / "events.jsonl"
        try:
            lines = path.read_text(encoding="utf-8").splitlines()
        except OSError:
            return []
        records = []
        for line in lines:
            try:
                records.append(json.loads(line))
            except ValueError:
                pass  # A concurrently written final line is replayed on the next poll.
        return records

    def model(self, run_id, snapshot="latest"):
        run = self.get(run_id)
        snapshots = run["snapshots"]
        if snapshot == "latest":
            if not snapshots:
                raise KeyError("还没有有效地图快照")
            snapshot = snapshots[-1]["id"]
        if snapshot not in {item["id"] for item in snapshots}:
            raise KeyError("地图快照不存在")
        output = Path(run["output_path"])
        path = output / "model.json" if snapshot == "final" else output / "ui" / "snapshots" / f"{snapshot}.json"
        return load_reconstruction(path), run, snapshot

    def image_dataset(self, run):
        preferred = run.get("dataset_path")
        if not preferred:
            return None
        output = Path(run["output_path"])
        model_path = output / "model.json"
        if not model_path.exists() and run.get("snapshots"):
            last_id = run["snapshots"][-1]["id"]
            if last_id != "final":
                model_path = output / "ui" / "snapshots" / f"{last_id}.json"
        try:
            stat = model_path.stat()
            signature = (stat.st_mtime_ns, stat.st_size)
        except OSError:
            signature = None
        cached = self.image_identities.get(model_path)
        if cached is not None and cached[0] == signature:
            expected = cached[1]
        else:
            model_data = read_json(model_path, {})
            expected = {item["id"]: item["name"] for item in model_data.get("images", [])}
            self.image_identities[model_path] = (signature, expected)
        candidates = [Path(preferred)] + [path for path in self.datasets.values() if path != Path(preferred)]
        for path in candidates:
            try:
                dataset = load_dataset(path)
                actual = {image_id: image.name for image_id, image in dataset["images"].items()}
                if expected and actual != expected:
                    continue
                return path, dataset
            except (ValueError, OSError, KeyError, TypeError):
                continue
        return None

    def image_paths(self, run):
        matched = self.image_dataset(run)
        return matched[1]["image_paths"] if matched is not None else {}
