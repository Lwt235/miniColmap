# GPU 环境与训练启动

目标环境：本项目 Windows `.venv`、Python3.12、RTX4060 Laptop约8GB显存。显卡驱动实测576.80；使用PyTorch2.7.1的CUDA12.8构建，以保持已经验证的PyTorch主版本不变。

2026-10-17已安装并验证：`torch=2.7.1+cu128`、CUDA12.8、cuDNN9.7.1、`cuda_available=True`。GPU矩阵乘法与CPU参考一致，矩阵反向传播梯度有限，通用网络Adam自检MSE从0.058289降至0.000569。真实NeRF/3DGS训练入口均通过CUDA前置检查并到达尚未实现的N4/S1。记录见[GPU验收报告](../reports/2026-10-17-gpu-environment/README.md)。

## 安装与复现

固定CUDA依赖位于 `requirements-render-gpu.txt`，来自[PyTorch官方安装源](https://pytorch.org/get-started/previous-versions/)。

```powershell
Set-Location -LiteralPath 'D:\yy_folder\miniColmap'
# 更换torch时先退出本项目训练进程与工作台；避免Windows占用DLL。
.\.venv\Scripts\python.exe -m pip install -r requirements-render-gpu.txt --cache-dir .cache/pip-render-gpu
.\.venv\Scripts\python.exe -m pip install -e ".[render,dev,ui,ui-test]"
.\.venv\Scripts\python.exe scripts/check_render_gpu.py --output reports/gpu-environment/latest.json
```

也可用 `scripts/setup_render_gpu.ps1` 执行这三步。安装完成后，`scripts/setup_render_gpu.ps1 -VerifyOnly` 只重新检查，不重新安装。

NeRF与3DGS reference使用PyTorch算子，安装CUDA wheel即可运行。可选gsplat后端还需要原生扩展；本机2026-10-18已用项目内CUDA12.8工具链编译并完成真实验证，日常运行无需nvcc/cl环境。Windows驱动与运行时兼容依据见[NVIDIA CUDA12.8发布说明](https://docs.nvidia.com/cuda/archive/12.8.0/cuda-toolkit-release-notes/index.html)。

## 自检内容

`check_render_gpu.py`会实际执行：

- 查询当前解释器、torch/CUDA/cuDNN版本、GPU型号与显存。
- 在GPU进行矩阵乘法并与CPU参考结果比较。
- 在GPU进行小矩阵求解与反向传播，检查梯度有限。
- 在GPU用Adam优化一个通用小网络，确认参数更新且MSE下降。

报告必须为`status: passed`。这比只看安装包名字或`cuda.is_available()`多验证了实际计算；它不代替N1–N4、S1–S5算法验收，也不证明新视图图像质量。

## 工作台使用

```powershell
.\.venv\Scripts\python.exe -m minicolmap ui
```

进入NeRF/3DGS工作区，选择数据源，然后：

1. 将“计算设备”切换成CUDA；或导入下面的完整GPU配置。
2. NeRF用 `configs/nerf_gpu.json`，3DGS用 `configs/3dgs_gpu.json`，其中均为`device: "cuda"`。
3. 开始训练。设备由训练子进程核验，算法未补完时仍准确停在对应TODO。

工作台启动时不在服务主进程初始化GPU，因此设备列表可能显示“CUDA · 启动时检查”。真实训练子进程会调用CUDA可用性检查。GPU安装成功后仍选择CPU，就会按CPU运行；`nerf_smoke.json`、`3dgs_smoke.json`保留CPU，用于跨机器的小规模衔接检查。

导入GPU配置会设置完整参数，并不只修改设备。NeRF默认1000步、每批256射线、每射线32样本、图像缩小8倍；3DGS默认1000步、图像缩小8倍、最多512个初始高斯，密度控制关闭。

当前47图TempleRing已经完成深层NeRF轮廓恢复，可直接打开历史 `ui_nerf_20261017_231626_22a05a`，或导入 `configs/nerf_temple_quality.json` 重新训练。它使用160×120、6000步、黑背景、随机分层采样、混合训练照片，实测全部11个验证视角平均24.17dB。near=0.55、far=1.25是当前场景归一化后的距离范围，换场景应重新设置；不要把它当作通用深度范围。详见[画质恢复报告](../reports/2026-10-17-nerf-quality-recovery/README.md)。

## 命令行使用

NeRF可直接读取已有K/R/t的照片集：

```powershell
.\.venv\Scripts\python.exe -m minicolmap train --method nerf --dataset data/my_posed_scene/dataset.json --output outputs/nerf_gpu01 --config configs/nerf_gpu.json
```

也可复用已有SfM模型中的位姿；3DGS则需点云模型：

```powershell
.\.venv\Scripts\python.exe -m minicolmap train --method 3dgs --model outputs/ui_20261017_143849_13015f/model.json --dataset data/middlebury_temple_ring/dataset.json --output outputs/3dgs_gpu01 --config configs/3dgs_gpu.json
```

NeRF不要求点云；两者均需要原图、内参与位姿。GPU配置不会补全算法TODO。开发顺序仍见 [开发指南](13-NeRF与3DGS开发指南.md)。

## 使用8GB显存

先保持上述小规模配置。3DGS参考实现的中间量可能随“高斯数×像素数”增长，CUDA设备不会自动把它变成原论文的实时tile光栅器。出现显存不足时，先增加`image_downscale`，再降低`max_gaussians`；NeRF则先降低`rays_per_batch`或`samples_per_ray`。

训练权重可保存并重新渲染；当前按需检查点渲染使用CPU，以保持可移植查看，训练设备由配置决定。查看权重的设备与训练是否使用GPU是两个独立选项。

不要按显存已占用多少单独判断程序是否正确运行，结合训练日志、迭代计数和实际预览检查。安装新环境后，使用项目`.venv/Scripts/python.exe`，避免误用base环境的CPU版torch。

## gsplat本机扩展

当前环境已完成兼容修复；工作台选择“gsplat”和“CUDA”即可使用。扩展与版本校验清单位于`.cache/torch_extensions`和`.cache/gsplat-runtime.json`，不会修改系统CUDA或已安装库源码。正常训练子进程直接加载已验证扩展。

```powershell
# 当前环境复验：真实前向、反向和两步Adam
.\.venv\Scripts\python.exe scripts/check_gsplat_backend.py
# 重新搭建环境时：需要MSVC C++工具，先下载并核验官方最小CUDA组件
.\.venv\Scripts\python.exe -m pip install -r requirements-gsplat.txt
.\.venv\Scripts\python.exe scripts/setup_gsplat_cuda.py
& .\scripts\with_gsplat_env.ps1 -PythonArgs @('scripts/build_gsplat_extension.py')
```

Python、PyTorch、CUDA或gsplat版本变化后应重新构建与自检，不复制旧二进制冒充新环境。构建只解决CUDA后端可用性；画质和连续实时浏览仍需独立验收。版本、像素约定、实测及画质优化顺序见[兼容修复与画质调研](../reports/2026-10-18-gsplat-compat-quality/README.md)。
