# 安装与使用

## 基础环境

推荐 Python 3.12。已验证的本地 GPU 环境为 Windows、RTX 4060 Laptop 8 GB、PyTorch 2.7.1+cu128 和 gsplat 1.5.3。CPU 可以运行 SfM、界面和小规模参考渲染；连续高斯实时渲染需要 CUDA 与可用的 gsplat 扩展。

在项目根目录执行：

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -e ".[dev,ui,ui-test]"
.\.venv\Scripts\python.exe -m minicolmap doctor
```

仅运行 SfM CLI 可安装 `.[dev]`，无需 UI 或 PyTorch。推荐直接调用 `.venv` 中的解释器，避免误用其他 Python 环境。

## 准备照片

### TempleRing 示例

```powershell
.\.venv\Scripts\python.exe scripts/prepare_middlebury.py
```

脚本下载 Middlebury TempleRing，核对固定归档 SHA256、图像尺寸与标定，生成 `data/middlebury_temple_ring/`。目标目录已有内容时拒绝覆盖；准备过的数据直接使用。

| 清单 | 图数 | 用途 |
| --- | ---: | --- |
| `dataset.json` | 8 | 连续拍摄弧段，默认演示入口 |
| `dataset_5.json` | 5 | 小规模测试 |
| `dataset_first8.json` | 8 | 文件序前 8 图，区别于默认连续弧段 |
| `dataset_20.json` | 20 | 扩大实验 |
| `dataset_all.json` | 47 | 完整 TempleRing |

SfM 清单只使用照片和官方 K；参考 R/t 存放在 `reference/`，不会作为 SfM 的估计结果输入。照片已由发布方去除径向畸变。数据来源与原始说明保存在脚本的 `SOURCE_PAGE`、数据 `provenance.json` 和官方归档 README 中。

### 自己的数据

将 [示例清单](../examples/dataset.example.json) 复制为 `data/my_scene/dataset.json`，照片放在同目录的 `images/` 中。填写实际尺寸和去畸变后对应的 K，不沿用示例焦距。输入为静态场景、具有足够重叠与视差的多视图照片。所有图像路径相对清单所在目录，不允许越出该目录。

界面支持导入含清单的目录，也支持选择照片/目录并填写共享 K。缩放、裁剪或旋转图像后必须同步更新内参和位姿，详细字段见 [数据格式](configuration.md#输入清单)。

### Dino 363 图

完整 Dino 与另外发布的 DinoRing 是不同数据集。将下载的 363 张 PNG 和标定放成以下结构，再执行准备脚本：

```text
data/dino/
├─ images/dino0001.png ... dino0363.png
└─ reference/dino_par.txt、dino_ang.txt、README.txt
```

```powershell
.\.venv\Scripts\python.exe scripts/prepare_dino.py
```

| 生成清单 | 图数 | 位姿来源 |
| --- | ---: | --- |
| `dataset.json` / `dataset_20.json` | 8 / 20 | 不提供，供 SfM 估计 |
| `dataset_band49.json` / `dataset_all.json` | 49 / 363 | 不提供，供 SfM 估计 |
| `dataset_posed_band49.json` / `dataset_posed_all.json` | 49 / 363 | 官方标定派生，可直接训练 NeRF |

图像保持原始 640×480，不重复去畸变；部分图像倒置是采集姿态的一部分。K 使用 Dino 的官方标定，不沿用 Temple。脚本将原始 R 投影到最近合法旋转，并保持原始相机中心生成 t；原始标定不改写，派生过程与文件指纹写入 `provenance.json`。`band49` 是完整 Dino 的首个采集带，不是独立 DinoRing。

建议先运行 8/20/49 图。当前匹配穷举图像对，363 图有 65,703 对，且部分注册是可能结果。带官方位姿的清单没有点云，不能单独作为当前 3DGS 的初始化输入。

Dino SfM 推荐在参数页导入 `configs/dino_sfm.json`：使用较低的图像对准入门槛和一致子轨迹策略，初始化与 PnP 仍保留原质量要求。新增“图像对最少内点”“初始化最少点数”和“轨迹冲突策略”可在界面分别调整；检查 `matching_graph.json` 可区分匹配断连与注册失败。

本机已保存修复后的缓存建图结果 `dino363_repaired_cached_52058b`（321/363 相机、3,036 点），刷新历史即可查看或用于后续训练。它复用已有特征与 F-RANSAC 缓存，全部初始化和增量建图重新计算。CLI 从照片完整运行使用：

```powershell
.\.venv\Scripts\python.exe -m minicolmap run --dataset data/dino/dataset_all.json --output outputs/dino_repaired --config configs/dino_sfm.json
```

### Temple 312 图（Temple of the Dioskouroi）

完整 Temple 与 47 图 TempleRing 是独立发布的数据集。将下载的照片放在 `data/temple/images/`，将 `temple_par.txt`、`temple_ang.txt` 和 `README.txt` 放在 `data/temple/reference/`，执行：

```powershell
.\.venv\Scripts\python.exe scripts/prepare_temple.py
```

脚本逐张检查 312 张原始 640×480 PNG、官方 K/R/t 与照片对应关系，并保存文件指纹；不缩放、裁剪、旋转或重复去畸变。派生文件已存在且内容相同时可重复执行，内容不同时拒绝覆盖。原始照片和标定保持不变。

| 清单（均在 `data/temple/` 下） | 图数 | 用途 |
| --- | ---: | --- |
| `dataset.json` | 8 | 连续弧段 0040–0047，SfM 调试入口 |
| `dataset_arc19.json` | 19 | 连续弧段 0040–0058，SfM 小规模实验 |
| `dataset_band27.json` | 27 | 完整集首个采集带，包含拍摄间隔；不是 TempleRing |
| `dataset_all.json` | 312 | 完整半球照片，供 SfM 重建 |
| `dataset_posed_arc19.json` / `dataset_posed_band27.json` | 19 / 27 | 官方位姿，可直接训练 NeRF |
| `dataset_posed_all.json` | 312 | 完整官方位姿，可直接训练 NeRF |

刷新工作台后会自动发现这些清单。**NeRF** 在“含位姿的照片集”入口选择 `temple / dataset_posed_all` 即可，无需先建点云。**3DGS** 先在 SfM 中选择 `temple / dataset_all` 完成重建，再在训练页选择该重建结果及原图。带位姿清单没有点云，不能直接作为当前 3DGS 的初始化模型。

本组 K 为 `fx=1520.4、fy=1525.9、cx=302.32、cy=246.87`，单位为原图像素；直接使用生成清单即可。官方投影约定为 `K[R|t]`，倒置照片对应真实相机姿态，应保留原样。完整集有 48,516 个穷举图像对，建议先通过 8/19 图检查流程，再启动完整重建。上述准备只验证输入可加载，不代表已完成重建或训练画质验收。

```powershell
# 直接训练 NeRF；通用配置用于检查流程，训练预算与画质参数在界面继续调整
.\.venv\Scripts\python.exe -m minicolmap train --method nerf --dataset data/temple/dataset_posed_all.json --output outputs/temple312_nerf --config configs/nerf_gpu.json
```

官方数据格式与预处理说明见 [Middlebury 数据页](https://vision.middlebury.edu/mview/data/)。`configs/nerf_temple_quality.json` 的近远裁剪范围源自此前 TempleRing 的相机归一化，不能未经检查套用于本组官方位姿输入。

## 工作台

```powershell
.\.venv\Scripts\python.exe -m minicolmap ui
# 自定义端口、关闭自动打开浏览器
.\.venv\Scripts\python.exe -m minicolmap ui --port 8766 --no-browser
```

默认打开 `http://127.0.0.1:8765`，仅监听本机。前端构建资源随项目提供，日常使用不需要 Node 或 CDN。默认从当前项目的 `data/` 发现清单、从 `outputs/` 发现结果；可用 `--project <项目目录>` 指定根目录。

### 稀疏重建与检查

1. 选择或导入照片数据集，在参数页设置特征、几何、建图和 BA 参数。
2. 启动 SfM，查看各阶段真实进度、耗时与日志；每次创建独立输出目录。
3. 左键旋转、右键平移、滚轮缩放；可适配全部内容、聚焦点云、重置或全屏。
4. 点选相机或照片，查看 K/R/t、相机中心和观测。点选三维点，检查轨迹及照片上的实际关键点与重投影标记。
5. 点击“对齐至此相机”，通过约 0.75 s 的平移和旋转动画进入该视角；之后仍可自由操作，动画中也可通过鼠标接管。
6. 切换初始化、逐相机注册、增量完成和 BA 前后快照，或按 RGB、误差、轨迹长度着色。筛选只影响显示，导出仍保留模型数据。
7. 从导出菜单下载 JSON、PLY、COLMAP TXT 与原始诊断文件。

打开已有运行结果或单独导入 `model.json` 后，也可只检查点云与位姿。缺少原图时不能预览照片；不伪造缺失位姿，不为未注册照片生成相机。

### NeRF 与 3DGS

进入顶部的“NeRF / 3DGS”工作区，先选择方法：

- **NeRF**：选择含位姿的照片集，或关联已有 SfM 结果及原图。已知 K/R/t 时无需先运行 SfM、无需点云。
- **3DGS**：选择已有点云模型及原图。当前不会从没有点的相机清单中自动生成初始化点云。

导入配置、设置设备与预算，然后训练。界面显示真实 loss、验证 PSNR、预览和历史结果；可对已有相机或自定义相机进行按需渲染。完成的 3DGS 历史提供“开启实时渲染”，支持自由旋转、平移、缩放、相机对齐、输出分辨率与重新连接。

NeRF 的自定义视角渲染为按需计算，未提供与 3DGS 相同的连续 CUDA 实时会话。3DGS 的普通“渲染此相机”与自由视角实时链路是两个入口；前者为兼容查看使用 CPU 参考渲染，后者使用 GPU/gsplat。

当前同时执行一个重建/训练任务。取消会终止计算进程并保留已有诊断与最后有效快照，不提供训练暂停续跑。刷新页面可重新连接已有任务。历史刷新会清除输出目录已删除的索引；保留仍存在的失败或未完成结果，不删除模型和照片。

3DGS 的优化状态、分组学习率、密度策略和损失可在参数面板分别设置；建议从“保留 Adam 动量”开始。受控实验的配置、结果和复现脚本见 [3DGS 优化与消融](3dgs-optimization-ablation.md)。离线消融脚本持有 GPU 实验预约期间，工作台拒绝启动新的渲染训练或实时会话；实验进程结束后自动解除，普通照片/点云查看仍可使用。

## 命令行

### SfM、检查与导出

```powershell
.\.venv\Scripts\python.exe -m minicolmap run --dataset data/middlebury_temple_ring/dataset_all.json --output outputs/temple47 --config configs/temple_ring_no_ba.json
.\.venv\Scripts\python.exe -m minicolmap inspect outputs/temple47/model.json
.\.venv\Scripts\python.exe -m minicolmap export outputs/temple47/model.json --output outputs/temple47_export
```

### 训练与渲染

```powershell
# NeRF：直接使用带位姿的照片
.\.venv\Scripts\python.exe -m minicolmap train --method nerf --dataset data/dino/dataset_posed_band49.json --output outputs/dino_nerf --config configs/nerf_gpu.json

# NeRF：复用 SfM 位姿；Temple 专用配置不能直接套给其他场景
.\.venv\Scripts\python.exe -m minicolmap train --method nerf --model outputs/temple47/model.json --dataset data/middlebury_temple_ring/dataset_all.json --output outputs/temple_nerf --config configs/nerf_temple_quality.json

# 3DGS：从 SfM 点云初始化
.\.venv\Scripts\python.exe -m minicolmap train --method 3dgs --model outputs/temple47/model.json --dataset data/middlebury_temple_ring/dataset_all.json --output outputs/temple_gs --config configs/3dgs_gsplat.json
.\.venv\Scripts\python.exe -m minicolmap render --run outputs/temple_gs --image-id 4
```

训练与重建的输出目录必须为新目录。配置模板是起点，示例命令不代表与 [实验记录](evaluation.md) 的所有训练超参数完全相同；记录中的完整参数见 [benchmarks.json](assets/benchmarks.json)。

## GPU 环境

### PyTorch

`requirements-render-gpu.txt` 固定的是已验证的 Windows Python 3.12 / CUDA 12.8 构建，其他平台应选择匹配的 PyTorch 环境。以下安装不在运行中的训练/工作台进程内执行：

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements-render-gpu.txt
.\.venv\Scripts\python.exe -m pip install -e ".[render,dev,ui,ui-test]"
.\.venv\Scripts\python.exe scripts/check_render_gpu.py --output .cache/render-gpu-check.json
```

也可使用 `scripts/setup_render_gpu.ps1`；`-VerifyOnly` 只检查。自检包含真实矩阵计算、反向传播和小网络参数更新，报告应为 `status: passed`。工作台能力查询不初始化 CUDA，真实训练子进程会检查设备。

### gsplat

NeRF 和 PyTorch 高斯参考后端不需要 gsplat。CUDA 高斯后端及连续实时浏览还需兼容的原生扩展。本项目使用 `requirements-gsplat.txt` 中的 1.5.3；Windows 本地编译需要 MSVC C++ 工具和兼容 CUDA Toolkit：

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements-gsplat.txt
.\.venv\Scripts\python.exe scripts/setup_gsplat_cuda.py
& .\scripts\with_gsplat_env.ps1 -PythonArgs @('scripts/build_gsplat_extension.py')
.\.venv\Scripts\python.exe scripts/check_gsplat_backend.py
```

工具链下载与扩展保存在项目 `.cache/`，已构建且通过校验后，日常运行无需重复编译。更换 Python、PyTorch、CUDA 或 gsplat 版本后重新构建和自检。前端选择 `device=cuda` 和 `gaussian.backend=gsplat`；只把设备改成 CUDA 不会自动切换光栅后端。

## 前端开发

Python UI 服务保持运行，在另一个终端执行：

```powershell
cd web
npm ci
npm run dev
npm test
npm run build
```

Vite 将 `/api` 代理到本机 8765 服务；生产界面使用同源接口。`build` 先检查 TypeScript，再写入 `src/minicolmap/ui/static/`，提交前端代码时应一并更新生产资源。`typings/einx-stubs/` 是 Pylance 的项目级 partial stubs，不参加 Python 运行时导入；补全异常时先检查项目解释器并重启语言服务器。

## 常见问题

| 现象 | 检查方式 |
| --- | --- |
| 初始化失败 / 部分注册 | 检查真实匹配、内点、视差及图像重叠；先用连续小子集，不通过修改 K 来凑结果 |
| BA 候选已接受、尚未收敛 | 候选有效且改善误差，但达到求解预算；检查 `ba.json`，不要当作求解器已收敛 |
| 训练黑图或轮廓模糊 | 检查位姿轴向、归一化 near/far、背景、射线采样、密度与学习率；单元测试不代替真实图像验证 |
| 显存不足 | NeRF 减少射线/采样数；3DGS 使用 gsplat，降低数量预算或图像尺寸 |
| 高斯数未达到上限 | 上限只是预算；需启用增密且满足梯度条件，增长才会发生 |
| 删除结果后历史仍在 | 在历史页刷新或重新打开页面；真实产物在 `outputs/`，索引在 `.cache/mini-colmap-ui/runs/` |
| 找不到 GPU / 扩展不兼容 | 用项目解释器运行 GPU 与 gsplat 自检，核对实际版本、原生扩展和训练设备 |
| 匹配耗时随图数急增 | 当前穷举 `N(N−1)/2` 图像对；大场景匹配检索与更大规模优化仍未实现 |
