"""Subprocess entry point; delegates every numerical operation to the existing pipeline."""
from __future__ import annotations

import json
import sys
import time
import traceback
from pathlib import Path


def atomic_json(path: Path, value) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temp = path.with_suffix(path.suffix + ".tmp")
    temp.write_text(json.dumps(value, ensure_ascii=False, allow_nan=False), encoding="utf-8")
    # Windows can briefly deny replacement while HTTP/SSE readers have the
    # previous file open. Only retry that transient sharing failure; preserve
    # atomic replacement and propagate persistent or unrelated I/O errors.
    for attempt in range(21):
        try:
            temp.replace(path)
            break
        except PermissionError:
            if attempt == 20:
                raise
            time.sleep(0.01)


def main(metadata: str) -> int:
    from .runtime import configure_worker_runtime
    runtime = configure_worker_runtime()
    cpu_started = time.process_time()
    from ..pipeline import reconstruct
    state_path = Path(metadata)
    run = json.loads(state_path.read_text(encoding="utf-8"))
    run['runtime'] = runtime
    output = Path(run["output_path"])
    ui_dir = output / "ui"
    started = time.monotonic()
    seq = 0

    def event(value):
        nonlocal seq
        record = dict(value)
        model = record.pop("model", None)
        ui_dir.mkdir(parents=True, exist_ok=True)
        if model is not None:
            snapshot_id = f"snapshot-{len(run['snapshots']) + 1:04d}"
            atomic_json(ui_dir / "snapshots" / f"{snapshot_id}.json", model)
            item = {"id": snapshot_id, "label": record.get("label", record.get("stage", "地图")),
                    "stage": record.get("stage", run["stage"])}
            run["snapshots"].append(item)
            run["registered_images"] = len(model.get("poses", []))
            run["image_count"] = len(model.get("images", []))
            run["point_count"] = len(model.get("points", []))
            record["snapshot_id"] = snapshot_id
        run["stage"] = record.get("stage", run["stage"])
        run["elapsed_seconds"] = time.monotonic() - started
        for key in ("completed", "total", "message"):
            if key in record:
                run[key] = record[key]
        if record.get("kind") == "warning" and record.get("message"):
            run.setdefault("warnings", []).append(record["message"])
        atomic_json(state_path, run)
        seq += 1
        record.update(seq=seq, time=time.time(), elapsed_seconds=run["elapsed_seconds"])
        with (ui_dir / "events.jsonl").open("a", encoding="utf-8") as stream:
            stream.write(json.dumps(record, ensure_ascii=False, allow_nan=False) + "\n")
            stream.flush()

    try:
        summary = reconstruct(run["dataset_path"], output, run["config"], on_event=event)
        run.update(status="completed", stage="done", **{
            key: summary[key] for key in ("registered_images", "image_count", "point_count")})
        # The final canonical file remains available even if an optional
        # progress observer was disabled after an I/O failure.
        run["snapshots"].append({"id": "final", "label": "最终结果", "stage": "done"})
        if summary.get("unregistered_image_ids"):
            run.setdefault("warnings", []).append("部分图像未注册：" + str(summary["unregistered_image_ids"]))
        ba_path = output / "ba.json"
        if ba_path.exists():
            ba = json.loads(ba_path.read_text(encoding="utf-8"))
            if ba.get("accepted") and not ba.get("solver_success"):
                run.setdefault("warnings", []).append("BA 候选已接受，但尚未收敛")
        event({"kind": "complete", "stage": "done", "status": "completed", "summary": summary})
        return 0
    except Exception as exc:
        run.update(status="failed", error=str(exc))
        event({"kind": "error", "stage": run["stage"], "status": "failed", "message": str(exc)})
        traceback.print_exc()
        return 1
    finally:
        run["elapsed_seconds"] = time.monotonic() - started
        runtime['process_cpu_seconds'] = time.process_time() - cpu_started
        if output.exists():
            atomic_json(output / 'runtime.json', runtime)
        atomic_json(state_path, run)


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1]))
