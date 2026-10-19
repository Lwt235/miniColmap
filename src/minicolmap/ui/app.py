"""FastAPI routes for the local-only Mini-COLMAP workbench."""
from __future__ import annotations

import asyncio
import io
import json
import time
import uuid
import zipfile
from contextlib import asynccontextmanager
from pathlib import Path, PureWindowsPath
from urllib.parse import quote

import cv2
import numpy as np
from fastapi import FastAPI, HTTPException, Request, WebSocket
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse, Response, StreamingResponse
from fastapi.staticfiles import StaticFiles
from starlette.middleware.trustedhost import TrustedHostMiddleware

from ..config import resolve_config
from ..export import write_colmap_text, write_ply
from ..io import load_dataset, load_reconstruction, save_reconstruction
from ..metrics import reconstruction_summary
from ..models import Camera
from .scene import make_scene, point_details
from .store import Store, read_json, stable_id
from .worker import atomic_json


def safe_relative(raw: str) -> Path:
    """Uploaded relative paths use either Windows or browser POSIX separators."""
    windows = PureWindowsPath(raw)
    path = Path(raw.replace("\\", "/"))
    if (not raw or "\x00" in raw or windows.drive or windows.root or path.is_absolute()
            or any(part in ("..", ".") for part in path.parts) or not path.parts):
        raise ValueError("文件路径必须是目录内的相对路径")
    return path


def validate_dimensions(manifest: Path):
    dataset = load_dataset(manifest)
    if len(dataset["images"]) < 2:
        raise ValueError("重建至少需要两张图像")
    for image_id, path in dataset["image_paths"].items():
        pixels = cv2.imdecode(np.fromfile(path, dtype=np.uint8), cv2.IMREAD_COLOR | cv2.IMREAD_IGNORE_ORIENTATION)
        if pixels is None:
            raise ValueError(f"图像无法解码：{path.name}")
        camera = dataset["cameras"][dataset["images"][image_id].camera_id]
        if pixels.shape[:2] != (camera.height, camera.width):
            raise ValueError(f"图像尺寸与内参不匹配：{path.name}，应为 {camera.width}×{camera.height}")
    return dataset


def artifact_paths(output: Path):
    allowed = {".json", ".ply", ".txt", ".png", ".npz", ".pt", ".log"}
    if not output.exists():
        return {}
    return {path.relative_to(output).as_posix(): path for path in output.rglob("*")
            if path.is_file() and path.suffix.lower() in allowed
            and "ui" not in path.relative_to(output).parts
            and path.resolve().is_relative_to(output.resolve())}


def create_app(project_root: Path | None = None):
    root = Path(project_root).resolve() if project_root is not None else Path.cwd().resolve()
    store = Store(root)
    from .live import LiveSessions
    live = LiveSessions(store)

    @asynccontextmanager
    async def lifespan(app):
        yield
        live.close()
        store.close()

    app = FastAPI(title="Mini-COLMAP 本地工作台", lifespan=lifespan)
    app.state.store = store
    app.state.live = live
    app.add_middleware(TrustedHostMiddleware, allowed_hosts=["127.0.0.1", "localhost", "testserver"])

    @app.middleware("http")
    async def local_origin(request: Request, call_next):
        origin = request.headers.get("origin")
        if origin and origin != str(request.base_url).rstrip("/"):
            # Reject cross-origin POSTs, including simple multipart requests.
            return JSONResponse({"detail": "只允许工作台同源请求"}, status_code=403)
        return await call_next(request)

    @app.exception_handler(ValueError)
    async def invalid(request, exc):
        return JSONResponse({"detail": str(exc)}, status_code=422)

    @app.exception_handler(KeyError)
    async def missing(request, exc):
        return JSONResponse({"detail": str(exc).strip("'\"")}, status_code=404)

    @app.exception_handler(OSError)
    async def unavailable(request, exc):
        return JSONResponse({"detail": str(exc)}, status_code=422)

    @app.get("/api/bootstrap")
    def bootstrap():
        return store.bootstrap()

    @app.get("/api/datasets/{dataset_id}")
    def dataset(dataset_id: str):
        return store.dataset_info(dataset_id)

    @app.get("/api/datasets/{dataset_id}/images/{image_id}")
    def dataset_image(dataset_id: str, image_id: int):
        _, dataset = store.dataset(dataset_id)
        return FileResponse(dataset["image_paths"][image_id])

    @app.post("/api/config/validate")
    async def config_validate(request: Request):
        return resolve_config(await request.json())

    @app.post("/api/datasets/import")
    async def import_dataset(request: Request):
        form = await request.form()
        mode = form.get("mode", "manifest")
        if mode not in ("manifest", "photos"):
            raise ValueError("mode 必须是 manifest 或 photos")
        files = form.getlist("files")
        paths = form.getlist("paths")
        if not files or any(not hasattr(file, "read") for file in files):
            raise ValueError("请选择数据文件")
        if paths and len(paths) != len(files):
            raise ValueError("paths 必须与 files 一一对应")
        incoming = root / "data" / "ui_imports" / uuid.uuid4().hex[:16]
        incoming.mkdir(parents=True, exist_ok=False)
        received = []
        total_bytes = 0
        seen = set()
        try:
            for index, file in enumerate(files):
                relative = safe_relative(str(paths[index] if paths else file.filename))
                target = incoming / relative
                if relative.as_posix().casefold() in seen:
                    raise ValueError("上传文件路径重复")
                seen.add(relative.as_posix().casefold())
                target.parent.mkdir(parents=True, exist_ok=True)
                with target.open("xb") as stream:
                    while chunk := await file.read(1024 * 1024):
                        total_bytes += len(chunk)
                        if total_bytes > 1024 * 1024 * 1024:
                            raise ValueError("单次导入不得超过 1 GB")
                        stream.write(chunk)
                received.append(target)
            if mode == "manifest":
                selected = form.get("manifest_path")
                if selected:
                    manifest = incoming / safe_relative(str(selected))
                else:
                    candidates = [p for p in received if p.name.lower() == "dataset.json"]
                    if len(candidates) != 1:
                        raise ValueError("请选择唯一的 dataset.json，或指定 manifest_path")
                    manifest = candidates[0]
                if manifest not in received:
                    raise ValueError("指定的清单不在上传文件中")
            else:
                raw_camera = form.get("camera")
                if not isinstance(raw_camera, str):
                    raise ValueError("请填写共享内参 fx、fy、cx、cy")
                camera = json.loads(raw_camera)
                if not isinstance(camera, dict):
                    raise ValueError("camera 必须是 JSON 对象")
                photo_paths = [p for p in received if p.suffix.lower() in (".jpg", ".jpeg", ".png", ".bmp", ".tif", ".tiff", ".webp")]
                if len(photo_paths) < 2:
                    raise ValueError("请选择至少两张照片")
                first = cv2.imdecode(np.fromfile(photo_paths[0], dtype=np.uint8), cv2.IMREAD_COLOR | cv2.IMREAD_IGNORE_ORIENTATION)
                if first is None:
                    raise ValueError("照片无法解码")
                height, width = first.shape[:2]
                for dimension, actual in (("width", width), ("height", height)):
                    if dimension in camera and camera[dimension] != actual:
                        raise ValueError("填写的图像尺寸与照片不匹配")
                try:
                    calibrated = Camera(1, width, height, [[camera["fx"], 0, camera["cx"]],
                                                         [0, camera["fy"], camera["cy"]], [0, 0, 1]])
                except KeyError as exc:
                    raise ValueError("缺少内参 fx、fy、cx 或 cy") from exc
                manifest = incoming / "dataset.json"
                if manifest.exists():
                    raise ValueError("照片导入不能包含已有 dataset.json，请选择清单导入")
                atomic_json(manifest, {"cameras": [{"id": 1, "width": width, "height": height,
                                                    "K": calibrated.K.tolist()}],
                                       "images": [{"id": i + 1, "name": path.relative_to(incoming).as_posix(),
                                                   "camera_id": 1, "path": path.relative_to(incoming).as_posix()}
                                                  for i, path in enumerate(photo_paths)]})
            validate_dimensions(manifest)
            dataset_id = stable_id("dataset-", manifest)
            store.datasets[dataset_id] = manifest
            return store.dataset_info(dataset_id)
        except Exception:
            # Preserve failed imports for inspection, but never discover them as usable datasets.
            (incoming / ".invalid-import").write_text("Import validation failed", encoding="utf-8")
            if (incoming / "dataset.json").exists():
                (incoming / "dataset.json").rename(incoming / "dataset.invalid")
            for path in received:
                if path.name.lower() == "dataset.json" and path.exists():
                    path.rename(path.with_suffix(".invalid"))
            raise

    @app.get("/api/runs")
    def runs(discover: bool = False):
        # Live status reads must not rescan every historical model and dataset.
        # Bootstrap and the explicit history refresh discover external results.
        if discover:
            store.discover()
        return store.list_runs()

    @app.post("/api/runs")
    async def start_run(request: Request):
        body = await request.json()
        if not isinstance(body, dict) or not isinstance(body.get("dataset_id"), str):
            raise ValueError("请先选择数据集")
        settings = resolve_config(body.get("config"))
        try:
            with store.lock:
                live.ensure_idle()
                return store.start(body["dataset_id"], settings)
        except RuntimeError as exc:
            raise HTTPException(409, str(exc)) from exc

    @app.get("/api/runs/{run_id}")
    def run_info(run_id: str):
        return store.public(store.get(run_id))

    @app.get("/api/rendering/capabilities")
    def rendering_capabilities():
        from .rendering import capabilities
        return capabilities()

    @app.post("/api/rendering/config/validate")
    async def rendering_config_validate(request: Request):
        from ..rendering.config import resolve_render_config
        return resolve_render_config(await request.json())

    @app.post("/api/rendering/runs")
    async def start_rendering(request: Request):
        from ..rendering.config import resolve_render_config
        body = await request.json()
        if not isinstance(body, dict):
            raise ValueError("请选择位姿数据集或已有 SfM 结果")
        sources = [key for key in ("source_run_id", "dataset_id") if key in body]
        if len(sources) != 1 or not isinstance(body[sources[0]], str):
            raise ValueError("source_run_id 和 dataset_id 必须且只能指定一项")
        if "photo_dataset_id" in body and not isinstance(body["photo_dataset_id"], str):
            raise ValueError("photo_dataset_id 必须是已导入照片数据集 ID")
        settings = resolve_render_config(body.get("config"))
        try:
            with store.lock:
                live.ensure_idle()
                return store.start_rendering(body.get("source_run_id"), settings,
                                             dataset_id=body.get("dataset_id"), photo_dataset_id=body.get("photo_dataset_id"))
        except RuntimeError as exc:
            raise HTTPException(409, str(exc)) from exc

    @app.get("/api/rendering/runs/{run_id}/result")
    def rendering_result(run_id: str):
        from .rendering import result
        return result(store, run_id)

    @app.websocket("/api/rendering/runs/{run_id}/live")
    async def live_rendering(websocket: WebSocket, run_id: str):
        await live.handle(websocket, run_id)

    @app.post("/api/rendering/runs/{run_id}/render")
    async def rendering_preview(run_id: str, request: Request):
        from ..rendering.pipeline import render_checkpoint
        from .rendering import public_preview
        run = store.get(run_id)
        if run.get("pipeline") not in ("nerf", "3dgs"):
            raise ValueError("该任务不是 NeRF 或 3DGS 训练")
        if run["status"] == "running" or any(item["status"] == "running" for item in store.list_runs()):
            raise HTTPException(409, "请先等待训练结束或取消当前任务，再渲染新视图")
        if live.active is not None:
            raise HTTPException(409, "请先关闭实时渲染，再生成离线预览")
        body = await request.json()
        if (not isinstance(body, dict) or set(body) - {"camera", "image_id"}
                or (("camera" in body) == ("image_id" in body))):
            raise ValueError("请提供 image_id 或 camera 中的一项")
        output = Path(run["output_path"])
        if not (output / "checkpoint.pt").is_file():
            raise ValueError("该任务尚未产生真实训练 checkpoint")
        # The renderer owns numerical/camera validation. Running in a thread
        # keeps status, SSE, and cancellation endpoints responsive.
        try:
            preview = await asyncio.to_thread(render_checkpoint, output,
                                             camera=body.get("camera"), image_id=body.get("image_id"))
        except NotImplementedError as exc:
            raise HTTPException(422, {"status": "todo", "message": str(exc)}) from exc
        except ImportError as exc:
            raise ValueError(str(exc)) from exc
        public = public_preview(run_id, output, preview)
        if public is None:
            raise ValueError("渲染器未生成有效预览文件")
        with store.lock:
            run["latest_preview_record"] = preview
            run["latest_preview"] = public
            atomic_json(store.state / "runs" / f"{run_id}.json", run)
        return public

    @app.post("/api/runs/{run_id}/cancel")
    def cancel(run_id: str):
        return store.cancel(run_id)

    @app.get("/api/runs/{run_id}/events")
    async def events(run_id: str, request: Request):
        store.get(run_id)
        try:
            after = int(request.headers.get("last-event-id", request.query_params.get("after", "0")))
        except ValueError as exc:
            raise ValueError("事件 ID 必须是整数") from exc

        async def stream():
            cursor = after
            last_ping = time.monotonic()
            while not await request.is_disconnected():
                for item in store.events(run_id):
                    if item["seq"] > cursor:
                        cursor = item["seq"]
                        yield f"id: {cursor}\ndata: {json.dumps(item, ensure_ascii=False)}\n\n"
                run = store.get(run_id)
                if run["status"] != "running":
                    yield "data: " + json.dumps({"kind": "terminal", "status": run["status"],
                                                 "stage": run["stage"]}, ensure_ascii=False) + "\n\n"
                    break
                if time.monotonic() - last_ping > 10:
                    yield ": keepalive\n\n"
                    last_ping = time.monotonic()
                await asyncio.sleep(0.25)
        return StreamingResponse(stream(), media_type="text/event-stream",
                                 headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"})

    def run_image_urls(run):
        available = store.image_paths(run)
        return (lambda image_id: f"/api/runs/{run['id']}/images/{image_id}" if image_id in available else None)

    @app.get("/api/runs/{run_id}/scene")
    def scene(run_id: str, snapshot: str = "latest"):
        model, run, snapshot_id = store.model(run_id, snapshot)
        return make_scene(model, f"{run_id}:{snapshot_id}", snapshot_id, run["snapshots"], run_image_urls(run))

    @app.get("/api/runs/{run_id}/points/{point_id}")
    def point(run_id: str, point_id: int, snapshot: str = "latest"):
        model, run, _ = store.model(run_id, snapshot)
        return point_details(model, point_id, run_image_urls(run))

    @app.get("/api/runs/{run_id}/images/{image_id}")
    def run_image(run_id: str, image_id: int):
        return FileResponse(store.image_paths(store.get(run_id))[image_id])

    @app.post("/api/results/import")
    async def import_model(request: Request):
        form = await request.form()
        file = form.get("file")
        if not hasattr(file, "read"):
            raise ValueError("请选择 model.json")
        raw = await file.read(200 * 1024 * 1024 + 1)
        if len(raw) > 200 * 1024 * 1024:
            raise ValueError("模型文件不得超过 200 MB")
        # Parse before creating an output, then use the project's model validator.
        json.loads(raw)
        run_id = uuid.uuid4().hex[:16]
        output = root / "outputs" / ("imported_" + run_id)
        output.mkdir(parents=True)
        model_path = output / "model.json"
        model_path.write_bytes(raw)
        try:
            model = load_reconstruction(model_path)
            summary = reconstruction_summary(model)
            save_reconstruction(model, model_path)
            write_ply(model, output / "points.ply")
            write_colmap_text(model, output / "sparse" / "0")
        except (KeyError, TypeError) as exc:
            model_path.rename(output / "invalid-model.txt")
            raise ValueError(f"模型格式无效：{exc}") from exc
        except ValueError:
            model_path.rename(output / "invalid-model.txt")
            raise
        atomic_json(output / "summary.json", summary)
        run = {"id": run_id, "name": str(file.filename or "model.json"), "status": "imported", "stage": "done",
               "output_path": str(output), "images_available": False,
               "warnings": ["导入模型不含原始照片，照片预览不可用"],
               "snapshots": [{"id": "final", "label": "导入模型", "stage": "done"}],
               **{key: summary[key] for key in ("registered_images", "image_count", "point_count")}}
        store.runs[run_id] = run
        atomic_json(store.state / "runs" / f"{run_id}.json", run)
        return store.public(run)

    @app.get("/api/runs/{run_id}/reports")
    def reports(run_id: str):
        output = Path(store.get(run_id)["output_path"])
        result = {name: read_json(output / f"{name}.json") for name in ("pairs", "initialization", "ba", "summary", "timings")}
        result["log"] = None
        log_path = store.state / "logs" / f"{run_id}.log"
        if log_path.exists():
            result["log"] = log_path.read_text(encoding="utf-8", errors="replace")[-20000:]
        return result

    @app.get("/api/runs/{run_id}/artifacts")
    def artifacts(run_id: str):
        output = Path(store.get(run_id)["output_path"])
        names = list(artifact_paths(output))
        if any(name.startswith("sparse/") for name in names):
            names.append("sparse.zip")
        if names:
            names.append("results.zip")
        return [{"name": name, "url": f"/api/runs/{run_id}/artifacts/{name}"} for name in names]

    @app.get("/api/runs/{run_id}/artifacts/{filename:path}")
    def artifact(run_id: str, filename: str):
        output = Path(store.get(run_id)["output_path"])
        if filename in ("sparse.zip", "results.zip"):
            paths = artifact_paths(output)
            archive = io.BytesIO()
            with zipfile.ZipFile(archive, "w", zipfile.ZIP_DEFLATED) as zipped:
                for name, path in paths.items():
                    if filename != "sparse.zip" or name.startswith("sparse/"):
                        zipped.write(path, name)
            return Response(archive.getvalue(), media_type="application/zip",
                            headers={"Content-Disposition": f'attachment; filename="{filename}"'})
        try:
            relative = safe_relative(filename)
        except ValueError as exc:
            raise KeyError("结果文件不存在") from exc
        candidate = (output / relative).resolve()
        if (not candidate.is_relative_to(output.resolve()) or 'ui' in relative.parts
                or candidate.suffix.lower() not in {'.json', '.ply', '.txt', '.png', '.npz', '.pt', '.log'}
                or not candidate.is_file()):
            raise KeyError("结果文件不存在")
        if candidate.suffix.lower() == '.png':
            # Close the file before sending to a potentially slow HTTP reader.
            # FileResponse can otherwise hold a Windows delete-sharing lock for
            # the lifetime of the response while the worker publishes a preview.
            return Response(candidate.read_bytes(), media_type='image/png', headers={
                'Content-Disposition': f"attachment; filename*=utf-8''{quote(candidate.name)}"})
        return FileResponse(candidate, filename=candidate.name)

    static = Path(__file__).parent / "static"
    if (static / "index.html").exists():
        app.mount("/", StaticFiles(directory=static, html=True), name="workbench")
    else:
        @app.get("/")
        def missing_frontend():
            return HTMLResponse("<h1>Mini-COLMAP</h1><p>前端资源尚未构建，请按开发说明运行前端构建。</p>", status_code=503)
    return app
