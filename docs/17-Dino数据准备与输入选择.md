# Dino 363图：数据准备与输入选择

你的数据位于`D:\yy_folder\miniColmap\data\dino`。已检查全部363张PNG能正常解码，尺寸均为640×480，图像与官方标定一一对应；原图没有缩放、裁剪、旋转或重新编码。

数据为[Middlebury完整Dino数据集](https://vision.middlebury.edu/mview/data/)，不是另外发布的48图DinoRing。官方说明径向畸变已经去除，因此不再重复去畸变。部分照片倒置是采集姿态的一部分，不应手动旋转而继续使用原K/R/t。

## 现在选择哪个输入

| 文件（均在data/dino下） | 图像数 | 位姿 | 用途 |
| --- | ---: | --- | --- |
| `dataset.json` | 8 | 不提供 | 自己的SfM小规模起步 |
| `dataset_20.json` | 20 | 不提供 | 小规模扩大实验 |
| `dataset_band49.json` | 49 | 不提供 | 完整363图中第一个采集带；不是官方DinoRing |
| `dataset_all.json` | 363 | 不提供 | 全规模SfM，计算量较大 |
| `dataset_posed_band49.json` | 49 | 官方标定派生 | 直接训练NeRF的较小起点 |
| `dataset_posed_all.json` | 363 | 官方标定派生 | 直接训练NeRF，无需预先构建点云 |

默认8张为`dino0001.png`至`dino0008.png`。前20张的相邻官方采集角差均小于10°；这是输入子集选择依据，不是已经通过SfM注册的证明。陶瓷Dino纹理较少，特征匹配可能比Temple困难；初始化失败时应检查真实匹配日志，不猜测或替换K来凑成功结果。

刷新浏览器页面后，系统会自动发现这些项目内清单，数据列表显示`dino`或`dino / dataset_20`等名称。“刷新历史”只更新历史列表；新增数据集应刷新整页。

## SfM → 3DGS

1. 在数据集中选择`dino`（默认8张），运行SfM，检查注册数、点数和误差。
2. 逐步扩大到20张、49张，再考虑363张。当前匹配仍穷举图像对：8/20/49/363张分别需要28/190/1176/65703对；输入合规不等于大规模运行已经提速。
3. 成功后在3DGS工作区选择该次Dino SfM结果和对应原始照片，使用CUDA/gsplat训练。

带官方位姿的照片清单本身没有三维点，不能单凭它启动当前3DGS初始化。3DGS仍需有效点云；不要把NeRF可直接训练误解为3DGS也无需点云。

命令行等价入口，输出目录必须是新目录：

```powershell
.\.venv\Scripts\python.exe -m minicolmap run --dataset data/dino/dataset.json --output outputs/dino_8_01 --config configs/default.json
# 检查通过后逐步改用dataset_20.json、dataset_band49.json、dataset_all.json
```

## NeRF直接使用已知位姿

进入NeRF/3DGS工作区，训练方法选择NeRF，输入选择“含位姿的照片数据集”，再选择`dino / dataset_posed_band49`或`dino / dataset_posed_all`。这些位姿来自发布者，不是本项目估计的结果，实验记录中应区分。

选择CUDA、黑背景，先以图像降采样4（160×120）检查训练。near/far是归一化场景中的采样距离，不能把Temple专用的0.55/1.25当作所有场景通用值；更换场景后结合实际射线范围检查。

命令行入口：

```powershell
.\.venv\Scripts\python.exe -m minicolmap train --method nerf --dataset data/dino/dataset_posed_band49.json --output outputs/dino_nerf49_01 --config configs/nerf_gpu.json
```

此命令使用配置文件中的全部设置。通过界面改成黑背景后导出自己的配置，再用于CLI，可确保两种入口参数一致。

## 输入格式和本次转换

全部图像共用官方`dino_par.txt`内参，**不要沿用Temple的K**：

```text
K = [[3310.4,    0.0, 316.73],
     [   0.0, 3325.5, 200.55],
     [   0.0,    0.0,   1.0]]
```

SfM清单以此格式引用图像；图像ID在各子集中保持一致，路径相对清单所在目录：

```json
{
  "cameras": [{"id": 1, "width": 640, "height": 480,
    "K": [[3310.4, 0, 316.73], [0, 3325.5, 200.55], [0, 0, 1]]}],
  "images": [{"id": 1, "name": "dino0001.png", "camera_id": 1,
    "path": "images/dino0001.png"}]
}
```

该片段只解释一个条目的结构；实际清单已包含各自数量的照片。NeRF位姿版另加`pose_convention="world_to_camera"`及`poses:[{image_id,R,t},...]`。

原始`reference/dino_par.txt`每行是文件名、9个K、9个R、3个t，投影为`K[R|t]`，像素原点在左上、x向右、y向下，与项目约定一致。原始旋转的最大正交误差约`1.6583e-6`，略超项目`Pose`的`1e-6`校验。转换时对R取最近SO(3)旋转，并以原始`C=-solve(R,t)`保持相机中心，生成新`t=-R_new*C`。没有放宽系统旋转校验。

原始照片和标定文本均保留。上述微小修正仅进入派生位姿文件；按官方README包围盒8个角点、全部363视角检查，最大投影偏移约0.00224px。它不是SfM算法输出，也不是额外估计出的标定。

`provenance.json`保存文件指纹、选择规则和转换说明；SHA256是本地完整性指纹，不是官方签名。`reference/poses.json`保留派生参考位姿，不会被普通SfM清单读入。

重新生成/验证（保留原图，不覆盖不同内容的既有清单）：

```powershell
.\.venv\Scripts\python.exe scripts/prepare_dino.py
```

六份清单已通过现有`load_dataset`及位姿版`load_posed_dataset`校验。当前交付是输入准备，尚未运行Dino的SfM或训练，不宣称其重建成功。
