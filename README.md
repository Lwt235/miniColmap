---
tags: [项目, SfM, 实习准备]
status: scaffold
created: 2026-10-14
---

# Mini-COLMAP

项目根目录：`D:\yy_folder\miniColmap`。代码、环境、数据与输出均以此目录为基准。

用 Python 实现一个可以解释、验证和展示的增量稀疏 SfM 项目。
输入已知内参、已去畸变的静态多视图照片，输出相机位姿、稀疏点云、误差报告和 COLMAP 文本模型。
目标是理解几何与系统组织，并形成实习项目证据。当前交付是开发框架：核心算法有意保留 TODO，真实 SfM 尚未完成。

本项目作为求职副线，配合正在进行的 DUSt3R/VGGT/NeRF/3DGS 学习。先做可验证的单场景闭环；预计 **40–55 小时有效开发与调试**，这是预算，不是完成承诺。

## 先读什么

1. [开发文档](docs/01-开发文档.md)：范围、架构、接口与数学约定。
2. [里程碑与开发步骤](docs/02-里程碑与开发步骤.md)：按顺序填 TODO、运行测试、记录成果。
3. [两视图几何实现指南](docs/03-两视图几何实现指南.md)：G1–G8 的推导与调试方法。
4. [增量建图与 BA](docs/04-增量建图与BA.md)：T1、M1–M3、B1 的数据管理与优化。
5. [数据与评估](docs/05-数据与评估.md)：采集要求、COLMAP 对比、导出与简历表述。
6. [开发看板](docs/06-开发看板.md)：勾选自己的进度，填入测试和实验事实。

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
3DGS 训练接入属于可选扩展，需要另行验证读入格式与去畸变图像。

## 哪些你写，哪些已经准备好

| 你实现并能够解释 | 已提供的工程或库能力 |
|---|---|
| 投影、Hartley 归一化、八点 F、Sampson、F-RANSAC | SIFT 提取、双向 ratio 匹配、匹配图 |
| E 约束、四解选位姿、DLT 三角化 | OpenCV PnP-RANSAC 与位姿细化 |
| 冲突 track、初始地图、新图注册、新点过滤 | 数据结构、JSON/PLY/COLMAP TXT、CLI |
| BA 重投影残差与地图更新理解 | SciPy 求解器包装、合成夹具、工程测试 |

共 **13 个学习 TODO：G1–G8、T1、M1–M3、B1**。不手写 SIFT 尺度空间、P3P 求根或大型稀疏求解器。
不要把调用库的能力描述成自己的算法实现，也不要把生成框架描述成已经完成重建。
