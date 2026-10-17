# NeRF / 3DGS 输入关系修正

日期：2026-10-17。按用户纠正，NeRF训练不能要求预先生成点云。只改输入、工程连接、UI与文档，不填写N/S算法答案。

## 实际输入

| 方法 | 输入 | 前端与后端约束 |
|---|---|---|
| NeRF | 原图+K/R/t | 可直接使用含poses的照片数据集，不需要SfM历史、不要求points；也可复用0点相机模型 |
| 本项目3DGS | 原图+K/R/t+初始点云 | 没有点云时先构建或加载模型，不能只用照片集启动 |

两者均不会猜测未知位姿。只有照片和K时，界面明确提示先估计/导入位姿。已有点云/相机模型缺照片关联时，用户显式指定`photo_dataset_id`，后端严格核对ID、名称、内参与尺寸。

## 工程改动

- `rendering.data.load_posed_dataset`读取world-to-camera poses，生成0点相机输入；0/1位姿可作为数据展示，训练仍要求至少2个。
- NeRF归一化一律来自相机中心中位数及最大相机中心距离，不再隐含依赖点云；重合相机使用单位尺度并保存来源。
- 3DGS继续使用点云归一化与初始化。旧checkpoint依然使用保存的center/scale，不按新规则重新解释旧参数。
- CLI的NeRF训练可以省略`--model`；`train(None,dataset,...)`冻结相机输入，不构建三维点。
- API接受`dataset_id`直接NeRF，或`source_run_id`复用模型；两者互斥。后者允许显式`photo_dataset_id`。
- 数据集返回pose_count；任务保存source_kind/source_dataset_id，刷新后恢复直接输入来源。
- 前端先选择方法，再展示对应数据源/门槛/参数；0点相机场景仍可旋转查看，不显示等待点云的遮罩。
- [开发指南](../../docs/13-NeRF与3DGS开发指南.md)、练习README、工作台说明已同步；[清单示例](../../examples/posed_dataset.example.json)仅示意结构，须替换真实K/R/t。

## 验证

全部工程、SfM与已完成练习回归：**363 passed、0 failed、0 skipped**；一项原有Starlette/httpx弃用警告。见`regression.xml`。

新增独立NeRF输入测试15项：0点数据准备、camera-only归一化不受点云变化影响、非单位旋转投影不变、重复/非法位姿拒绝、无点CLI、冻结与TODO边界。后端测试覆盖直接数据集、3DGS拒绝、显式照片关联、历史与CLI恢复。

真实无mock子进程：只有8张照片、K/R/t、0点、没有SfM任务历史的临时项目，直接NeRF到达TODO N4；归一化来源camera_centers，原模型/照片/清单SHA256不变，重启仍为8相机/0点。3DGS直接使用同一数据集被明确拒绝。见`worker-posed-input-smoke.json`。测试位姿复制自已有模型，未声称它们是外部真值。

前端19项单元测试与TypeScript/Vite构建通过。Edge接口合约分别验证NeRF无点入口、未知位姿提示、3DGS点云门槛、显式照片关联及刷新恢复；fixture不是学习算法的成功结果。

真实Edge无mock联调也通过：上传两张真实照片与K/R/t清单后立即显示2位姿，不导入模型、不构建点云，直接启动0点NeRF并到达N4；无位姿照片集在界面禁用并明确提示；同一个带位姿数据集对3DGS返回422。相机-only场景的适配视角和拖拽旋转通过，无pageError。见`browser-live.json`、`nerf-posed-input-todo.png`、`camera-only-scene.png`和`nerf-unposed-input-disabled.png`。这些照片/位姿用于输入通路验收，不是NeRF训练质量证明。

新增算法79项仍为待实现的独立练习；输入修正没有替你实现网络、体渲染或高斯渲染。

复现回归：

```powershell
.\.venv\Scripts\python.exe -m pytest tests exercises/adaptive_ransac exercises/initialization_pruning -q -p no:cacheprovider
```
