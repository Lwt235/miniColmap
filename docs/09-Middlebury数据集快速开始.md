# Middlebury TempleRing：真实照片练习

数据已下载并配置于 `D:\yy_folder\miniColmap\data\middlebury_temple_ring`。
这是 [Middlebury Multi-View Stereo](https://vision.middlebury.edu/mview/data/) 的 TempleRing 数据，
共47张640×480照片，附官方相机标定，发布者已去除径向畸变。
原始ZIP约11.7MB，47张PNG全部保留，没有缩放、裁剪、旋转或再次去畸变。

## 现在直接运行

在项目根目录、已激活的`.venv`中执行；这里使用新的`02`输出名，`01`是已完成的试跑结果：

```powershell
python -m minicolmap run --dataset data/middlebury_temple_ring/dataset.json --output outputs/temple_ring_8_arc_no_ba_02 --config configs/temple_ring_no_ba.json
python -m minicolmap run --dataset data/middlebury_temple_ring/dataset.json --output outputs/temple_ring_8_arc_ba_02 --config configs/temple_ring_ba.json
python -m minicolmap inspect outputs/temple_ring_8_arc_ba_02/model.json
```

以后每次使用一个空的/不存在的输出目录，避免混合不同实验。两份配置仅覆盖最终地图BA开关/预算，
其他阈值沿用项目默认；M1内部两视图精化始终执行。BA版预算为100次函数评估。

## 输入文件与子集

| 清单 | 图像 | 用途 |
|---|---|---|
| `dataset.json` | 0013–0020，共8张 | 默认入门子集，连续拍摄视角，已实测全部注册 |
| `dataset_5.json` | 0001–0005，共5张 | 更小的入门子集，已实测全部注册 |
| `dataset_first8.json` | 0001–0008，共8张 | 保留初次失败实验，存在较大视角间隔 |
| `dataset_20.json` | 文件名排序前20张 | 后续扩展实验，尚未验收，不保证全部注册 |
| `dataset_all.json` | 全部47张 | 完整环绕实验，尚未验收 |

官方`templeR_ang.txt`显示，0005→0006的拍摄角度相隔约46°，文件编号连续不等于视角连续。
默认改用0013–0020，其相邻拍摄角度约相隔7.66°，适合作为小规模起点。
拍摄角度仅用于挑选输入照片；重建过程不读取官方相机位姿。

目录结构：

```text
data/middlebury_temple_ring/
├── dataset.json / dataset_5.json / dataset_first8.json / dataset_20.json / dataset_all.json
├── images/                 原始47张PNG
├── provenance.json         来源、选择规则、压缩包及每张图像SHA256
└── reference/
    ├── templeR_par.txt      原始标定：K、R、t
    ├── templeR_ang.txt      原始拍摄角度
    ├── README.txt          原始说明
    └── poses.json          仅供未来评估的官方位姿
```

内参直接读取官方`templeR_par.txt`，所有图像共用：

```text
K = [[1520.4,    0.0, 302.32],
     [   0.0, 1525.9, 246.87],
     [   0.0,    0.0,   1.0]]
```

输入清单只提供图像路径、尺寸和K。官方R/t单独保存在reference中，没有填入估计模型。
这是相机位姿已知的MVS基准，但这里将位姿隐藏，仅用照片和K练习SfM。

## 已验证结果

默认8张、不启用最终地图BA的真实SIFT流水线：

- 注册：8/8；三维点：1283；观测：4250。
- 重投影误差：mean 0.26293px、median 0.11694px、P95 1.01592px。
- 正深度比例100%，耗时约24.83秒（本机本次运行）。
- 输出：`outputs/temple_ring_8_arc_no_ba_01`。

同一组8张开启最终地图BA（预算100）的输出是`outputs/temple_ring_8_arc_ba_01`：
同样8/8注册、1283点、4250条观测；mean由0.26293px降到0.17417px，P95降到0.54951px，
正深度100%，总耗时约26.05秒。`accepted=true`，但`solver_success=false`，评估预算耗尽，
因此只能说候选有效且误差改善，不能说已经收敛。另从原始无BA地图试了500次预算，
仍未达到数值终止条件，mean约0.17428px；增加预算不是这次数据配置的必要条件，
求解器收敛分析留作后续优化实验，默认100未改动。该探测报告位于`.cache/temple-ring-ba-budget-probe.json`。

5张入门子集：5/5注册、817点、mean 0.23593px，输出`outputs/temple_ring_5_no_ba_01`。
最初直接取前8张只注册5/8，未注册6/7/8；保留在`outputs/temple_ring_8_no_ba_01`，
其输入文件当时叫`dataset.json`，当前相同输入已保存为`dataset_first8.json`。
部分注册仍会输出`status=completed`，因此还需检查`registered_images`和`unregistered_image_ids`。

打开`matches/*.png`检查对应是否正确，查看`initialization.json`了解初始图对和质量筛选；
再比较`summary.json`和BA版的`ba.json`。点云文件为`points.ply`，COLMAP文本模型位于`sparse/0/`。
低重投影误差是内部一致性证据，完整几何形状和外参精度仍需可视化或对齐参考位姿后评估。

## 重新准备数据

下载与转换脚本是`scripts/prepare_middlebury.py`：

```powershell
python scripts/prepare_middlebury.py --destination data/middlebury_temple_ring_copy
```

本机已有`.cache/datasets/templeRing.zip`，可直接复用；没有缓存时从官方HTTPS地址下载。
脚本拒绝覆盖非空目标，校验本次固定版本的SHA256、ZIP CRC、47个标定条目、共享K、所有图像尺寸和输入清单。
SHA256是本次对官方服务器下载字节计算的版本指纹，不是发布者单独公布的签名。
已从缓存重新准备并验证全部5份清单与当前配置一致。

来源：<https://vision.middlebury.edu/mview/data/>；
原始压缩包：<https://vision.middlebury.edu/mview/data/data/templeRing.zip>。
论文：Seitz, Curless, Diebel, Scharstein, Szeliski,
*A Comparison and Evaluation of Multi-View Stereo Reconstruction Algorithms*, CVPR 2006。
