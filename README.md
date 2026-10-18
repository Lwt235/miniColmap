---
tags: [项目, SfM, 实习准备]
status: real-small-scene-validated
created: 2026-10-14
---

# Mini-COLMAP

项目根目录：`D:\yy_folder\miniColmap`。代码、环境、数据与输出均以此目录为基准。

用 Python 实现一个可以解释、验证和展示的增量稀疏 SfM 项目。
输入已知内参、已去畸变的静态多视图照片，输出相机位姿、稀疏点云、误差报告和 COLMAP 文本模型。
目标是理解几何与系统组织，并形成实习项目证据。2026-10-16核心填空及边界修复已完成，全套163项测试通过；
已知对应的8相机无噪声/0.05px/0.2px案例全部通过且BA收敛。
Middlebury TempleRing真实照片子集也已通过SIFT完整流程：8/8注册、1283点，
BA前平均误差0.263px；BA后0.174px，但当前预算下尚未数值收敛。
2026-10-17用户完成自适应RANSAC，31项练习验收通过；8图与47图均全部注册。
47图最新运行6570点、mean误差0.398px，总耗时约119秒；初始化剪枝前后完整模型一致，见 [剪枝验收分析](reports/2026-10-17-initialization-pruning-analysis.md)。此前较慢运行保留在 [自适应RANSAC日志分析](reports/2026-10-17-adaptive-ransac-analysis.md)。
数据与命令见 [真实照片快速开始](docs/09-Middlebury数据集快速开始.md)。
见 [含噪初始化修复与复现](reports/2026-10-16-含噪初始化修复.md)。

本项目作为求职副线，配合正在进行的 DUSt3R/VGGT/NeRF/3DGS 学习。先做可验证的单场景闭环；预计 **40–55 小时有效开发与调试**，这是预算，不是完成承诺。

## 本地三维可视化工作台

```powershell
.\.venv\Scripts\python.exe -m minicolmap ui
```

浏览器打开 `http://127.0.0.1:8765`，可导入照片和内参、设置参数、一键重建，
并拖拽检查真实点云、相机位姿、观测轨迹及阶段快照。前端资源已构建在项目中，日常使用不需要Node。
在新环境中先安装 `python -m pip install -e ".[ui]"`；仅使用算法CLI时无需安装UI依赖。
界面只调用原有重建代码，显示操作不改变估计结果。操作、状态含义与开发说明见
[可视化工作台指南](docs/10-可视化工作台.md)。

2026-10-17区分NeRF/3DGS输入后，工程及已完成练习回归通过363项Python测试、19项前端测试；新算法79项仍为待填写TODO，单独验收。工作台已完成本机Edge原SfM流程与新训练接口验证。
真实界面重建仍得到8/8相机、1283点；截图与复现说明见
[工作台验收记录](reports/2026-10-16-workbench/README.md)。

## 先读什么

1. [开发文档](docs/01-开发文档.md)：范围、架构、接口与数学约定。
2. [里程碑与开发步骤](docs/02-里程碑与开发步骤.md)：按顺序填 TODO、运行测试、记录成果。
3. [两视图几何实现指南](docs/03-两视图几何实现指南.md)：G1–G8 的推导与调试方法。
4. [增量建图与 BA](docs/04-增量建图与BA.md)：T1、M1–M3、B1 的数据管理与优化。
5. [数据与评估](docs/05-数据与评估.md)：采集要求、COLMAP 对比、导出与简历表述。
6. [开发看板](docs/06-开发看板.md)：勾选自己的进度，填入测试和实验事实。
7. [配置参数参考](docs/08-配置参数参考.md)：mapper的config结构、字段单位与各阶段门槛。
8. [Middlebury真实照片快速开始](docs/09-Middlebury数据集快速开始.md)：已下载的数据、运行命令与实测结果。
9. [可视化工作台](docs/10-可视化工作台.md)：浏览器界面、数据导入、参数、实时重建与三维检查。
10. [自适应RANSAC与流水线计时](docs/11-自适应RANSAC与流水线计时.md)：下一步优化的31项练习验收、接口约定和阶段计时对照。
11. [初始化上界剪枝练习](docs/12-初始化上界剪枝练习.md)：25项独立测试、安全剪枝证明、可选排序与8/47图验收方法。
12. [NeRF与3DGS开发指南](docs/13-NeRF与3DGS开发指南.md)：10个算法填空、113项公开验收、真实照片训练与前端入口。
13. [新视图渲染数学与调试](docs/14-新视图渲染数学与调试.md)：射线、体渲染、协方差投影、splatting的公式及排错。
14. [GPU环境与训练启动](docs/15-GPU环境与训练启动.md)：CUDA PyTorch安装、自检、GPU配置文件和8GB显存起步。
15. [3DGS球谐与实时渲染](docs/16-3DGS球谐与实时渲染.md)：必修S6、SH初始化/梯度、gsplat适配及最终实时验收目标。

## 下一阶段：NeRF / 3DGS

进一步的SfM性能优化暂存待办。新的学习框架位于 `src/minicolmap/rendering/algorithms.py`，
N1–N4已由你实现并通过40项验收及6项CUDA检查；S1–S6也已完成并通过全部73项公开验收。CUDA reference真实训练已通过，S1的透明度设备遗漏已修复，见[设备修复报告](reports/2026-10-18-3dgs-device-fix/README.md)。
3DGS支持3阶球谐与训练后的自由视角GPU渲染；允许接入成熟CUDA后端。gsplat1.5.3已用项目内CUDA12.8工具链编译，通过真实CUDA前向/反向、reference数值对照及普通工作台训练。打开完成的3DGS历史，在“3DGS自由视角”点击“开启实时渲染”，可旋转、平移、缩放并对齐已有相机；模型在独立进程中常驻GPU，关闭会话释放资源。两轮3000步训练的公平分辨率比较、清晰度瓶颈及实时验收见[最新分析与验收](reports/2026-10-18-3dgs-resolution-live/README.md)。此前编译细节见[兼容修复报告](reports/2026-10-18-gsplat-compat-quality/README.md)。NeRF进一步细化与SfM提速继续暂存。

```powershell
# 原有SfM不需要这个可选依赖；本机已配置CUDA版PyTorch
.\.venv\Scripts\python.exe -m pip install -e ".[render,dev,ui,ui-test]"
# NeRF和3DGS填空均已完成，运行公开算法验收
.\.venv\Scripts\python.exe -m pytest exercises/novel_view -q
```

完成相应填空后，在工作台先选方法：NeRF可直接选择带K/R/t的照片集（无需点云），3DGS需先构建或加载点云模型；也可复用已有相机结果。设置参数、训练，
查看真实渲染/原图和验证PSNR；支持已有相机与自由视角渲染。只有照片、缺位姿时先导入/估计位姿；缺照片或未完成填空会明确报错，
不会把源点云冒充训练结果。先按[开发指南](docs/13-NeRF与3DGS开发指南.md)运行两步smoke，再增加预算。

GPU训练可在工作台选择CUDA，或导入`configs/nerf_gpu.json` / `configs/3dgs_gpu.json`。
本机RTX4060已验证PyTorch2.7.1+cu128；复现安装与实际GPU自检见[GPU指南](docs/15-GPU环境与训练启动.md)。

NeRF最新验收：完整回归408项通过；47图验证PSNR从1000步17.75dB提高到3000步18.66dB，仍有明显模糊。
实测图像、基线对照及下一步实验见[NeRF验收报告](reports/2026-10-17-nerf-implementation/README.md)。
较新的8×256网络出现黑图，其数值饱和与泛化问题见[深层NeRF诊断](reports/2026-10-17-nerf-black-collapse/README.md)；`configs/nerf_deep_diagnostic.json`用于诊断起步，尚未恢复旧网络画质。
随后已完成轮廓恢复：当前47图TempleRing使用 `configs/nerf_temple_quality.json`，全部11个验证视角在160×120下24.17dB；数学/工程回归419项、前端20项通过。直接打开工作台历史 `ui_nerf_20261017_231626_22a05a` 查看，见[完整恢复报告与图片](reports/2026-10-17-nerf-quality-recovery/README.md)。纹理细节仍有模糊。

## 环境与第一次运行

VS Code 的 einx 补全补丁位于 [typings](typings/README.md)，使用项目级 partial stubs。
打开项目后若 `einx.dot` 尚未出现在补全中，执行 `Python: Restart Language Server`。
补丁不修改安装库；Pyright已验证dot/sum签名、直接导入及backend/numpy子模块解析。

在本目录打开 PowerShell，推荐独立环境：

```powershell
Set-Location -LiteralPath 'D:\yy_folder\miniColmap'
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -e ".[dev]"
.\.venv\Scripts\python.exe -m minicolmap doctor
$pytestTemp = Join-Path $env:TEMP ("mini-colmap-" + [guid]::NewGuid().ToString("N"))
.\.venv\Scripts\python.exe -m pytest tests/support -q -p no:cacheprovider --basetemp $pytestTemp
.\.venv\Scripts\python.exe -m minicolmap synthetic --output data/synthetic.npz --seed 0
```

也可运行 `& .\scripts\setup.ps1`；如 PowerShell 阻止脚本执行，使用上面的命令即可。
无需激活环境，也不修改已有 SIFT/模型环境。核心 NumPy 测试可先开发；完整环境包括 OpenCV、SciPy、pytest。
`doctor` 检查依赖导入，`support` 检查已完成工程工具；两者通过不代表核心算法完成。

开始 G1–G8 后运行：

```powershell
.\.venv\Scripts\python.exe -m pytest tests/core/test_geometry.py -q
```

初始出现 `NotImplementedError: TODO G…` 是预期。不要删除失败测试，也不要将 TODO 标成 skip/xfail。
按开发步骤中的 `-k` 分组逐项完成。验证记录见 [框架验证记录](docs/07-框架验证记录.md)，与个人开发进度分开。

## 最终真实图像入口

```powershell
# 将 example 的结构复制到 data/my_scene/dataset.json，填写你的真实数据与内参
.\.venv\Scripts\python.exe -m minicolmap run --dataset data/my_scene/dataset.json --output outputs/run01 --config configs/default.json
.\.venv\Scripts\python.exe -m minicolmap inspect outputs/run01/model.json
```

此命令在核心完成之前会明确停在对应 TODO。`--output` 必须是新目录，避免与旧结果混合。
合成 `*.npz` 是已知对应的几何测试夹具，不能直接当成真实图片 `run` 输入。

成功后包含 `model.json`、`summary.json`、`points.ply`、`sparse/0/cameras.txt`、
`images.txt`、`points3D.txt`、特征/匹配诊断与 `run_status.json`。
NeRF/3DGS 使用独立的可选训练入口；算法填空完成后可直接复用这些位姿与原始去畸变照片。

## 哪些你写，哪些已经准备好

| 你实现并能够解释 | 已提供的工程或库能力 |
|---|---|
| 投影、Hartley 归一化、八点 F、Sampson、F-RANSAC | SIFT 提取、双向 ratio 匹配、匹配图 |
| E 约束、四解选位姿、DLT 三角化 | OpenCV PnP-RANSAC 与位姿细化 |
| 冲突 track、初始地图、新图注册、新点过滤 | 数据结构、JSON/PLY/COLMAP TXT、CLI |
| BA 重投影残差与地图更新理解 | SciPy 求解器包装、合成夹具、工程测试 |

原始SfM共 **13 个学习 TODO：G1–G8、T1、M1–M3、B1**，均已完成。新视图阶段另有 **9个TODO：N1–N4、S1–S5**，其中N1–N4已完成，S1–S5待实现。不手写 SIFT 尺度空间、P3P 求根或大型稀疏求解器。
不要把调用库的能力描述成自己的算法实现，也不要把生成框架描述成已经完成重建。
