# 从 Mini-COLMAP 到 NeRF / 3DGS

这是继 G1–G8、T1、M1–M3、B1 后的下一轮实现任务。你填写渲染数学与表示；数据适配、训练循环、保存、任务接口和前端已经提供。进一步的 SfM 性能优化移入 [开发看板](06-开发看板.md) 待办，不作为本轮前置条件。

## 目标与实际范围

两条路线的输入前提不同：**NeRF只需要原图、内参K和相机位姿R/t，不需要预先构建点云。**本项目的点云初始化3DGS另需稀疏点/RGB。源模型与照片始终只读，训练生成独立输出。

| 路线 | 可直接训练的输入 | 未满足时的前置步骤 |
|---|---|---|
| NeRF | 带K/R/t的照片数据集；或已有相机模型+照片，points可为空 | 只有照片但没有位姿时，先导入/估计位姿；不把点云作为训练门槛 |
| 3DGS | 带点云和位姿的模型+对应原图 | 先构建或加载点云模型，缺照片时显式关联原数据集 |

NeRF的“直接训练”指输入已有相机位姿；当前固定位姿教学NeRF不会从无位姿照片中自动猜出R/t，也不包含相机联合优化算法。已有SfM可以提供位姿，但不是必经流程。

带位姿数据集沿用原有 `cameras`、`images`，增加 `pose_convention: "world_to_camera"` 与 `poses: [{image_id,R,t}, ...]`。示例见 [位姿数据集结构](../examples/posed_dataset.example.json)。示例中的K/R/t仅是结构占位，必须替换成照片的真实标定/位姿；不要将单位姿态当作未知位姿的默认值。上传含 `dataset.json` 与原图的目录后即可选择，文件里无需points字段。

本轮先完成可解释的教学基线，再逐步扩展论文功能：

| 路线 | 这一版待你实现 | 后续待办，当前没有冒充实现 |
|---|---|---|
| NeRF | 位置/方向编码、小型 MLP、沿单位射线采样、可微体渲染 | coarse/fine 层次重要性采样、论文网络规模与训练调度、NDC/背景模型、加速编码 |
| 3DGS | 点云初始化、各向异性高斯、透视协方差投影、可微深度排序与 alpha 合成 | 球谐视角颜色、论文完整 clone/split 与 opacity reset、tile/binning CUDA 光栅器、L1+SSIM 论文损失 |
| 密度控制 | S5 提供独立的确定性复制/剪枝练习，默认关闭 | 原论文完整策略和优化器动量迁移 |

参考原始工作：[NeRF 项目与论文](https://www.matthewtancik.com/nerf)、[3D Gaussian Splatting 项目与论文](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/)。这里复用论文的表示思想与基本可微渲染关系，**不宣称论文指标、实时速度或完整复现**。

## 代码分工与顺序

只需填写 `src/minicolmap/rendering/algorithms.py`，按编号逐项推进：

| 阶段 | 函数 | 先验收什么 |
|---|---|---|
| N1 | `generate_rays` | 单位姿态、非单位旋转、相机中心、含 skew 的 K、梯度 |
| N2 | `positional_encoding` | 频率顺序、任意前导维度、零层数、梯度 |
| N3 | `volume_render` | 常密度介质、透明背景、遮挡、有限末段、可微优化 |
| N4 | `build_nerf` | 注册的网络参数、密度只依赖位置、方向颜色、state_dict |
| S1 | `initialize_gaussians` | 点/RGB 独立副本、log/logit、wxyz 四元数 |
| S2 | `gaussian_covariance` | 旋转各向异性、正定、q/-q 一致、梯度 |
| S3 | `project_gaussians` | 透视 Jacobian、非单位旋转、skew、正深度 |
| S4 | `splat_gaussians` | 椭圆覆盖、前后遮挡、背景、空场景、梯度 |
| S5 选修 | `densify_and_prune` | 可复现的拓扑变化、数量上限、不修改输入 |

每个函数的 docstring 是精确接口契约。详细公式与排错顺序见 [数学与调试](14-新视图渲染数学与调试.md)，公开测试说明见 [练习目录](../exercises/novel_view/README.md)。无需修改已完成的 SfM 几何代码或自行编写前端。

已经提供：

| 位置 | 内容 |
|---|---|
| `rendering/config.py` | 独立渲染配置及严格验证，不混入 SfM 配置 |
| `rendering/data.py` | 源身份验证、读图、缩放、归一化、训练/验证视角 |
| `rendering/pipeline.py` | Adam/MSE、随机批次、训练通知、真实预览、评估与权重保存 |
| `ui/store.py`、`ui/worker.py` | 单任务子进程、历史、SSE、取消、TODO 状态 |
| `web/src/RenderingPanel.tsx` | 数据源/参数/训练/图片对照/结果下载 |
| `tests/support/test_rendering_support.py`、`tests/ui/test_rendering.py` | 工程与 API 回归 |

训练循环使用库优化器，与你之前调用 SciPy BA 一样，不算你手写的优化器。你的成果应准确表述为自己实现的射线、表示、渲染和可选密度控制。

## 环境

原有 SfM/工作台仍可不安装 PyTorch。新阶段依赖放在可选项 `render`：

```powershell
Set-Location -LiteralPath 'D:\yy_folder\miniColmap'
# 本机GPU版本固定在CUDA12.8构建；重新建环境时先安装这一项
.\.venv\Scripts\python.exe -m pip install -r requirements-render-gpu.txt
.\.venv\Scripts\python.exe -m pip install -e ".[render,dev,ui,ui-test]"
```

本机已配置 **PyTorch 2.7.1+cu128 / CUDA12.8 / cuDNN9.7.1**，RTX4060 Laptop约8GB显存，驱动576.80。GPU矩阵运算、线性代数反向传播和Adam更新均已实测通过；`torch.cuda.is_available()`为True。公开算法测试仍可在CPU运行，GPU wheel同时支持CPU。

工作台选择CUDA，或导入完整的`configs/nerf_gpu.json`、`configs/3dgs_gpu.json`即可设置GPU训练；原smoke配置保留CPU。自检命令、复现安装、显存起步与报告见 [GPU环境与训练启动](15-GPU环境与训练启动.md)。算法未补完时，GPU训练入口仍准确停在N4/S1，不代表算法已完成。

这里不需要 `torchvision`、COLMAP 外部程序或原版3DGS的CUDA扩展。NeRF可以直接用带位姿的多视图数据集；现有TempleRing 8图模型也能作为位姿来源。3DGS则可以复用其点云。

## 第一轮：逐个填空

```powershell
.\.venv\Scripts\python.exe -m pytest exercises/novel_view/test_nerf.py -k n1 -q
.\.venv\Scripts\python.exe -m pytest exercises/novel_view/test_nerf.py -k n2 -q
.\.venv\Scripts\python.exe -m pytest exercises/novel_view/test_nerf.py -k n3 -q
.\.venv\Scripts\python.exe -m pytest exercises/novel_view/test_nerf.py -k n4 -q
```

然后按 `-k s1` 到 `-k s4` 验收 `test_gaussians.py`。不要删失败测试、改成 skip/xfail 或把参考图片当成模型输出。共 **79 项公开验收：71 项基础、8 项 S5 选修**。交付起点全部因具体 TODO 失败，工程回归另行通过。

两种常用验收：

```powershell
# 必修闭环
.\.venv\Scripts\python.exe -m pytest exercises/novel_view -k "not s5" -q
# 包括密度控制
.\.venv\Scripts\python.exe -m pytest exercises/novel_view -q
```

79 项不是图像质量认证。公式、梯度和边界通过后，还需下面的真实图片实验。

## 第二轮：NeRF 最小训练

先完成N1–N4。若照片清单已经有K/R/t，直接训练，不传`--model`：

```powershell
.\.venv\Scripts\python.exe -m minicolmap train --method nerf --dataset data/my_posed_scene/dataset.json --output outputs/nerf_direct01 --config configs/nerf_smoke.json
```

若已有8图模型，也可以复用其中的相机位姿。这是另一种输入方式，模型中的点云不是NeRF前提：

```powershell
.\.venv\Scripts\python.exe -m minicolmap train --method nerf --model outputs/ui_20261017_143849_13015f/model.json --dataset data/middlebury_temple_ring/dataset.json --output outputs/nerf_smoke01 --config configs/nerf_smoke.json
```

`nerf_smoke.json` 只运行 2 步、降采样 16 倍、每批 32 射线、每射线 8 点。它检查训练/保存/预览能衔接，**不应得到好图像**。应检查：loss 有限；生成 `checkpoint.pt` 和真实预览；CLI 返回 0；`summary.json` 有实际验证误差；源模型文件未改动。

随后导出一份新配置，将迭代数提高到 1000，逐步提高采样/图像分辨率。先观察同一训练视图能否拟合，再检查留出视图；没有固定保证的 PSNR 门槛。每次使用新输出目录，保存种子、图像划分和配置。

## 第三轮：3DGS 最小训练

完成 S1–S4，默认不启用 S5：

```powershell
.\.venv\Scripts\python.exe -m minicolmap train --method 3dgs --model outputs/ui_20261017_143849_13015f/model.json --dataset data/middlebury_temple_ring/dataset.json --output outputs/3dgs_smoke01 --config configs/3dgs_smoke.json
```

这里同样只跑 2 步，并显式限制最多 128 个高斯。若稀疏点多于上限，按稳定点序均匀选取初值；这会影响质量，并非全部点都参与。逐步增加 `max_gaussians`、分辨率和迭代数时分别记录变化。

参考 splatting 复杂度接近 **高斯数 × 像素数**。先用小图验证，不要在第一轮直接对 47 张全分辨率图片和全部高斯长时间训练。CUDA 张量设备也不会自动把朴素参考实现变成原论文的 tile 光栅器。

完整默认配置也采用保守起点：图像降采样8倍、最多512个初始高斯。需要全部稀疏点时显式提高上限，并记录内存和质量变化。若训练相机暂时没有正深度高斯，训练器会报告并选择其他训练相机；全部训练相机都没有支撑时明确失败，不使用验证视图补位。

S5 测试通过后，才将 `gaussian.densify_every` 从 0 改为正整数。当前训练器按固定阈值 `gradient_norm > 1e-3` 复制、opacity `<0.005` 剪枝；拓扑变化后重建 Adam，旧动量不保留。它是可解释的学习策略，后续再与论文策略对照。

## 数据、坐标和评估约定

1. 仅有已知位姿的相机进入外观训练。两条路线均要求至少两台有效位姿及对应原图，身份/内参/尺寸不符时拒绝。NeRF允许0点；3DGS拒绝缺失初始化点云。
2. 世界到相机仍为 `Xc=R X+t`。世界相机中心为 `-R.T@t`，相机 +x 向右、+y 向下、+z 向前。
3. NeRF一律用相机中心中位数`c`和最大相机中心距离`s`归一化，与可选点云完全无关；相机中心重合时保留单位尺度`s=1`。3DGS仍用稀疏点中位数和最大点距离，退化时以相机距离回退。两者都用`Xn=(X-c)/s`、`tn=(R c+t)/s`，R不变；归一化来源保存到`training_scene.json`与checkpoint。
4. 训练 RGB 为 `[0,1]`，沿用 sRGB 数值，第一版不加入响应函数或线性颜色模型。
5. OpenCV 缩放按半像素映射同步变换 K；N1 对输入像素不再添加 0.5。具体公式见数学文档。
6. `near/far` 是归一化世界中沿单位射线的距离。默认 0.1/4 只是起点，必须检查是否覆盖场景；不自动假定所有相机都在单位球外固定距离。
7. 按排序后的图像ID每`holdout_every`张留一张；数量不足时留最后一张。训练射线不取验证图像。**如果位姿来自使用全部照片的SfM，这是外观留出实验，不能直接当严格的全流程未见视角基准。**使用其他已知位姿数据集时记录其位姿来源。
8. 训练中 PSNR 来自第一张留出视图；最终 PSNR 为各留出视图 MSE 平均后转换，定义保存在 `psnr_scope`。单位 dB，数值越大误差越小。

## 输出与前端

```text
outputs/<独立训练目录>/
  source_model.json       冻结的相机/可选点云输入，原始世界坐标；NeRF可0点
  config.json             本次完整渲染配置
  training_scene.json     归一化、相机、训练/验证 ID
  training.json           已完成迭代记录及预览索引
  checkpoint.pt           可重新渲染的真实参数，坐标已归一化
  gaussians.npz           仅3DGS：均值/完整协方差已还原到原始SfM单位
  previews/               模型输出与同分辨率参考图片
  summary.json            成功后最终指标
  run_status.json         running/completed/todo/failed/cancelled
```

`checkpoint.pt` 按预览周期和最后一步保存；取消保留上一次完整 checkpoint，不保证包含取消前最后一个未保存步骤。第一版不恢复训练/优化器状态，只支持用权重渲染。模型权重通过 `weights_only=True` 读取。

启动工作台：

```powershell
.\.venv\Scripts\python.exe -m minicolmap ui
```

在工作区先选方法：NeRF可选择带位姿照片数据集直接训练，或复用已有相机模型；3DGS必须选择初始点云，尚无点云时先构建或加载模型。导入模型缺照片关联时，显式选择原始照片数据集，后端核对ID、名称、K与尺寸。导入smoke配置后训练，补完算法无需再接前端。

可查看迭代、loss、验证PSNR及真实输出/原图；按原相机或自由视角渲染并下载参数。相机输入视图可以只有相机而没有点，不能把“尚无点云”错误地当成NeRF输入失败。

补完前启动是一次正常的边界检查：任务结束为 `todo`，提示 N4 或 S1 等具体位置；不能显示“训练完成”。失败、取消、尚无预览与成功有独立状态。详情见 [工作台指南](10-可视化工作台.md)。

CLI 重渲染示例：

```powershell
.\.venv\Scripts\python.exe -m minicolmap render --run outputs/nerf_smoke01 --image-id 20
```

原相机 ID 必须存在于该 checkpoint 的数据中。自由视角接口接受原始 SfM 世界系的 K/R/t；后端再转换到训练归一化系。教学手动预览每边限制 512 像素。

## 验收与记录

- [ ] N1–N4 共39项通过（包含体渲染优化闭环），不是用参考图代替渲染。
- [ ] S1–S4 共32项通过（包含 splatting 优化闭环）。
- [ ] NeRF / 3DGS 两步 smoke 各完成并保留真实权重、指标和输出。
- [ ] 增加训练预算后，记录训练与留出视图误差、时间、内存/显存和代表性图像。
- [ ] 在工作台查看原图对照、原相机渲染、自由视角、刷新恢复、取消及失败提示。
- [ ] 仍通过旧 SfM/已完成练习回归，源模型和位姿不变。
- [ ] S5 选修8项通过后再启用，单独比较密度变化与验证误差。
- [ ] 清楚区分教学基线、论文复现和后续 CUDA 性能工作，不把框架交付算作算法完成。

建议记录：本次 TODO、手算预期、测试通过数、训练/验证 ID、配置、loss/PSNR、代表性输出、最明显失败现象、下一次只解决的问题。
