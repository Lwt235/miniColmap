# NeRF / 3DGS 学习框架交付记录

日期：2026-10-17。现有SfM几何算法未修改，进一步性能优化按用户要求转入待办。

后续修正：NeRF无需点云的输入条件已在数据、CLI、API和前端分开实现，最新记录见 [输入关系修正](../2026-10-17-nerf-input-separation/README.md)。本页333项/16项为首次交付时的历史验证结果。

## 交付范围

- [开发指南](../../docs/13-NeRF与3DGS开发指南.md)、[数学与调试](../../docs/14-新视图渲染数学与调试.md)。
- `rendering/algorithms.py`：N1–N4、S1–S5共9个明确的NotImplementedError填空；S5选修。
- [79项公开验收](../../exercises/novel_view/README.md)：71必修、8选修，含独立数值解、梯度检查和实际Adam像素优化闭环。
- 数据适配、独立配置、训练/验证划分、归一化、Adam/MSE训练循环、保存/渲染接口与CLI。
- 工作台完整接入：任务、取消、SSE、历史、真实指标/预览/下载、已有相机与自由视角渲染。
- 两份2步smoke配置；当前默认小图/512高斯，明确教学参考实现与论文完整复现的范围差别。

## 验证证据

| 验证 | 结果 | 文件 |
|---|---|---|
| 现有SfM、已完成练习与新增工程/API回归 | 333 passed，0 skipped，1项已有依赖弃用警告 | `regression.xml` |
| 前端单元测试 | 16 passed | `web/src/*test.ts` |
| TypeScript、Vite构建与Prettier | 通过，静态资源已打包 | `src/minicolmap/ui/static/` |
| 新算法未实现起点 | 79项均因对应TODO失败，无意外错误/skip/xfail | `baseline.json`、`baseline.xml` |
| 真实8图源的worker/Popen训练链路 | NeRF→N4、3DGS→S1，保留准确todo状态，无虚构模型 | `worker-smoke.json` |
| 源输入只读 | 原model、manifest及8张照片SHA256均不变 | `worker-smoke.json` |
| 真实取消与重启 | 保留源场景，恢复todo/todo/cancelled | `worker-smoke.json` |
| Edge界面接口合约 | 配置、真实文件协议、恢复、下载、自由视角、取消通过 | `browser-contract.json`（明确fixtureOnly） |
| Edge连接真实新后端 | 无mock；分别显示N4/S1、没有伪预览/checkpoint；刷新恢复参数 | `browser-live-todo.json` |
| 原SfM相机交互 | 对齐、旋转、平移、缩放、选点与照片联动通过，无pageError | `web/e2e/camera-view.mjs` |

工程测试使用的常量协议double不是学习算法参考解，不代表训练质量通过。真实TODO浏览器运行也不代表NeRF/3DGS算法已完成。

CPU验证环境：Python3.12.7、PyTorch2.7.1+cpu。没有验证CUDA训练或论文图像质量。原始SfM仍不需要torch；新可选依赖为`.[render]`。

最终补充验证：原相机手动渲染也会恢复其真实降采样参考图；修改后训练工程28项再次全部通过，见`rendering-support.xml`。最终源文件SHA256见`verification.json`。

## 复现

```powershell
.\.venv\Scripts\python.exe -m pytest tests exercises/adaptive_ransac exercises/initialization_pruning -q -p no:cacheprovider
# 主动检查新填空；初始79项TODO失败是预期
.\.venv\Scripts\python.exe -m pytest exercises/novel_view -q
Set-Location web
npm run test
npm run build
npm run test:e2e:rendering
# 仅适用于仍保留TODO的当前框架；会创建两个独立的真实TODO任务
npm run test:e2e:rendering:todo
```

最后两项浏览器测试需要先启动本地工作台；合约fixture与真实TODO测试分开记录。算法补完后不再用“应当TODO”的测试验收成功训练，而应按开发指南运行真实smoke/验证视图。

当前服务已在原 `http://127.0.0.1:8765` 更新；重启前确认无活动任务。浏览器真实联调产生的两项记录准确保留为“算法待实现”。
