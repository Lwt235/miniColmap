# NeRF 与 3DGS 算法填空验收

NeRF从原始RGB照片、内参和位姿出发，**不要求预先构建点云**；本项目3DGS另使用稀疏点云初始化。主线提供数据适配、训练循环、进度、检查点、结果导出和前端入口；由你补全 [algorithms.py](../../src/minicolmap/rendering/algorithms.py) 中的算法。原有G1–G8、M1–M3、B1不需要改写。

**仅靠彩色点云也不能完成照片监督训练。**两条路线均需照片和K/R/t。NeRF可直接读取含poses的dataset.json，或0点相机模型；其归一化仅用相机中心。3DGS要求点云模型。加载model.json后可显式关联原照片数据集，通过身份/内参/尺寸校验后才训练；不自动猜位姿或照片关联。

这里提供可在CPU检查的数学参考：NeRF为位置/方向编码、MLP和体渲染；3DGS为各向异性协方差、透视投影、可微alpha splatting及必修实球谐颜色。2026-10-18按新要求，颜色状态改为SH系数，新增S6。最终包括实时渲染，允许接入成熟CUDA后端；当前gsplat接口已提供，扩展与连续实时界面仍待验收。见[文档16](../../docs/16-3DGS球谐与实时渲染.md)。S5仍为选修。

## 安装与运行

在项目根目录执行，PowerShell 中应明确使用项目的 Python：

```powershell
.\.venv\Scripts\python.exe -m pip install -e ".[render,dev]"
.\.venv\Scripts\python.exe -m pytest exercises/novel_view -q
```

当前工作环境已配置PyTorch2.7.1+cu128，可使用RTX4060进行CUDA计算，同时兼容本练习的CPU测试。重新建立本机GPU环境时先安装`requirements-render-gpu.txt`，再安装本项目；操作和自检见 [GPU指南](../../docs/15-GPU环境与训练启动.md)。算法练习测试本身只要求CPU，可微路径需按契约保持输入的device，不能在函数内部强制搬回CPU。

默认的 `pytest` 仍只收集 `tests/`，不会把尚未填写的算法练习计入原有 SfM 回归。单独运行本目录是主动验收新阶段；不使用 `skip` 或 `xfail` 掩盖未完成算法。缺少 PyTorch 时应先安装依赖，不应将整组测试标为跳过。

## 建议顺序

| 编号 | 待补函数 | 必须掌握的内容 | 测试数 |
|---|---|---|---:|
| N1 | `generate_rays` | 世界射线、相机中心、单位方向、像素坐标 | 10 |
| N2 | `positional_encoding` | 频率排列、梯度、最后一维编码 | 8 |
| N3 | `volume_render` | 有限末段、透射率、背景与累积深度 | 13 |
| N4 | `build_nerf` | 可训练 MLP、密度与方向解耦、状态保存、深层密度初始化 | 9 |
| S1 | `initialize_gaussians` | 稀疏点初值、SH DC、log尺度/logit透明度、可训练叶张量 | 15 |
| S6（必修） | `evaluate_sh` | 实球谐0至3阶、世界方向、梯度、Adam拟合与留出方向 | 24 |
| S2 | `gaussian_covariance` | wxyz 四元数、各向异性协方差 | 4 |
| S3 | `project_gaussians` | 透视 Jacobian、旋转后的协方差、正深度 | 9 |
| S4 | `splat_gaussians` | 椭圆覆盖、深度排序、前向alpha合成、SH辐射值 | 13 |
| S5（选修） | `densify_and_prune` | 确定性复制/剪枝与优化器重建 | 8 |

当前共 **113项测试**，其中 **105项基础必修、8项S5选修**。NeRF40项、3DGS73项（65基础+8选修）；新增球谐文件33项中含8项S1、1项S4、24项S6。最初79项未填空基线保留，NeRF随后增加1项密度回归。2026-10-18两条路线均已实现并通过公开测试；3DGS另通过10项真实CUDA数值/设备回归，见[设备修复报告](../../reports/2026-10-18-3dgs-device-fix/README.md)。

真实47图的轮廓恢复、背景与随机采样说明见[画质恢复报告](../../reports/2026-10-17-nerf-quality-recovery/README.md)。数学通过不能代替真实多视角画质检查。

逐项检查：

```powershell
.\.venv\Scripts\python.exe -m pytest exercises/novel_view/test_nerf.py -k n1 -q
.\.venv\Scripts\python.exe -m pytest exercises/novel_view/test_nerf.py -q
.\.venv\Scripts\python.exe -m pytest exercises/novel_view/test_gaussians.py -k "not s5" -q
.\.venv\Scripts\python.exe -m pytest exercises/novel_view/test_spherical_harmonics.py -q
.\.venv\Scripts\python.exe -m pytest exercises/novel_view/test_gaussians.py -k s5 -q
```

## 必须统一的接口

### 坐标与张量

- 沿用 `Xc = R @ Xw + t`，相机中心 `C = -R.T @ t`；相机坐标右为 +x、下为 +y、前为 +z。
- 像素始终是 `(u,v)`，图像张量始终是 `(H,W,3)`；整数坐标表示该整数像素位置，不额外加 `0.5`。
- N1 返回世界坐标**单位**射线方向。因此 NeRF 的采样 `t` 是沿射线的距离，而非所有射线共用的相机 z 深度。
- 浮点输入/输出保持 dtype/device；不要在可微路径中用 NumPy、`.detach()`、重新 `torch.tensor(existing_tensor)` 或 Python 数值复制计算结果。S1/S5 创建独立可训练叶张量是明确的初始化/拓扑边界。
- 输入错误抛出 `ValueError`，空批次返回正确形状；不修改输入与原始 SfM 模型。

### NeRF

N2 使用逐频率展开顺序：`[x, sin(pi*x), cos(pi*x), sin(2*pi*x), cos(2*pi*x), ...]`。`levels=0` 是合法输入。

N3 输入 RGB `(N,S,3)`、非负密度 `(N,S)`、非递减采样距离 `(N,S)`、标量或 `(N,)` 的 `far`、背景 `(3,)`。末段长度严格为 `far-last_t`；用无限长末段会破坏透明场景和背景验收。输出字典固定为 `rgb/depth/opacity/weights`。`depth` 为 `sum(weights*t)`，不再除以 opacity。

N4 返回真正的 `torch.nn.Module`，前向接受 `xyz/directions` 两个 `(N,3)` 张量，返回 RGB `(N,3)` 和 density `(N,)`。密度只依赖位置，方向进入颜色头。注册参数和子模块，确保 Adam、`.to()` 和 `.state_dict()` 生效。

### 高斯

高斯状态固定五个键：`means (G,3)`、`log_scales (G,3)`、`quaternions (G,4)`、`sh_coeffs (G,(L+1)^2,3)`、`opacity_logits (G,)`。尺度通过exp、透明度通过sigmoid解码；四元数采用wxyz。S6对`means-C`世界方向归一化，实球谐求和后加0.5并仅截断下界，RGB不使用sigmoid。

S3 输出 `means2d/cov2d/depths/visible`。二维协方差增加 `min_variance*I`，其单位是像素平方。正深度即可 `visible=True`，不在这一步按图像边界删除中心位于画外的高斯；其椭圆仍可能覆盖图像。非正深度返回有限占位值，不能投影到镜像位置。

S4 按正深度从近到远逐像素合成。`alpha = clamp(opacity * exp(-0.5 * Mahalanobis), 0, 0.99)`；输出 `rgb (H,W,3)`、`depth/opacity (H,W)`。累积深度同样不除 opacity。未命中处为背景、深度零、不透明度零。

S5 使用已解码 opacity 决定保留，先保留原始项，再按原索引复制梯度严格大于阈值的项，受上限约束。只有真正产生子项的源才缩小尺度。子项沿旋转后的局部 x 轴移动原最小尺度；原项中心不移动。函数文档包含确切顺序与边界，便于测试且不依赖随机数。这个策略是教学规则，不等同于原论文的完整 clone/split 策略。更改高斯数量后，主线重建 Adam；S5 自身不维护旧动量。

## 测试为什么不只是检查形状

测试包含手算的常密度介质、两层遮挡、带斜切内参的非单位旋转、独立 NumPy 有限差分 Jacobian，以及 PyTorch `gradcheck`。还有两项实际 Adam 迭代，分别通过你写的体渲染与 splatting 降低像素损失；输出看起来正确但切断计算图也不能通过。

N4 验收同一位置的不同方向必须产生一致密度，同时颜色确实消费方向。S2 用有非零非对角项的旋转各向异性椭球，不能用球形或对角近似替代。

这些是数学和接口的公开验收，不是重建质量的完整证明。完成后仍需用训练集/留出视角检查 PSNR、实际新视角、背景和遮挡；低训练误差不能独立证明未见视角重建良好。前端应显示真实训练和评估结果，未完成 TODO 时明确报出对应编号。
