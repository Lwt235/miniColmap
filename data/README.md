# 输入数据

已配置真实照片数据：`middlebury_temple_ring/dataset.json`，默认8张连续视角，完整47张图像均已下载。
内参来自官方标定，发布者已去径向畸变。运行方法、子集和实测结果见
[Middlebury快速开始](../docs/09-Middlebury数据集快速开始.md)。

合成几何夹具：`python -m minicolmap synthetic --output data/synthetic.npz`。
它有真实相机和点，以及已知对应的二维观测；只验证几何，不能验证 SIFT。

真实数据放 `data/my_scene/images/`，将 `examples/dataset.example.json` 复制为
`data/my_scene/dataset.json` 后填写实际内参、尺寸和图片路径。
示例中的 800 只是教学数值，不能直接用于你的照片。
MVP 输入为已去畸变照片与对应的新内参；所有 path 相对 dataset.json，禁止越出该目录。

