# NeRF / 3DGS GPU 环境验收

日期：2026-10-17。项目虚拟环境已从CPU版PyTorch替换为同版本CUDA构建，学生算法函数保持未实现。

| 项目 | 实测 |
|---|---|
| 解释器 | `D:\yy_folder\miniColmap\.venv\Scripts\python.exe`，Python3.12.7 |
| PyTorch | `2.7.1+cu128` |
| CUDA运行时 | 12.8 |
| cuDNN | 9.7.1 |
| GPU | NVIDIA GeForce RTX4060 Laptop GPU，约8GB |
| 驱动 | 576.80 |
| 计算能力 | 8.9 |
| `torch.cuda.is_available()` | True |

## 安装

来源：[PyTorch官方2.7.1安装说明](https://pytorch.org/get-started/previous-versions/)，采用cu128索引的Windows/Python3.12 wheel。

下载3273024349字节的官方wheel后，确认没有活动任务并暂停工作台，在项目.venv中替换torch。使用`--no-deps`保留其余已验证依赖，随后`pip check`显示无依赖冲突。现有驱动无需升级。

复现安装见`requirements-render-gpu.txt`及`scripts/setup_render_gpu.ps1`。GPU配置为`configs/nerf_gpu.json`、`configs/3dgs_gpu.json`，包含完整配置，可直接从工作台导入。原CPU smoke文件继续保留。

## 实际CUDA计算

运行：

```powershell
.\.venv\Scripts\python.exe scripts/check_render_gpu.py --output reports/2026-10-17-gpu-environment/verification.json
```

`verification.json`记录：

- GPU矩阵乘法与CPU参考在`rtol=1e-4, atol=1e-4`内一致。
- GPU矩阵求解的反向传播梯度有限。
- 通用网络在GPU上用Adam执行40步，MSE从0.0582893193降至0.0005693822。
- 自检张量峰值约18MB；这不是NeRF/3DGS训练显存需求的估计。

上述是环境与通用张量/优化器验收，不是学生NeRF/3DGS算法验收。

## 真实训练入口

`pipeline-entries.json`记录未mock的CLI子进程：

- NeRF：带K/R/t的照片集、无点云模型、device=cuda，正确到达TODO N4。
- 3DGS：现有真实8图模型与原图、device=cuda，正确到达TODO S1；输入点/RGB已按配置转为CUDA张量后进入初始化函数。
- 两者都返回表示待实现的exit code2，未生成虚构checkpoint，原始模型SHA256保持不变。

GPU依赖检查通过与算法尚未补完是独立事实。完整渲染质量、速度和CUDA算法梯度仍需学生完成TODO后验收。

## 回归与工作台

更换PyTorch后运行原有SfM、已完成练习及训练工程/API测试：**363 passed、0 failed、0 skipped**，16.20秒；仅一项已有Starlette/httpx弃用警告。见`regression.xml`。

工作台已恢复在`http://127.0.0.1:8765`。界面选择CUDA或导入GPU配置后，新训练子进程使用GPU；默认CPU配置不会因安装CUDA wheel自动改成GPU。现有检查点按需查看仍使用可移植CPU路径，说明见[GPU指南](../../docs/15-GPU环境与训练启动.md)。

本次只配置虚拟环境、GPU启动配置和诊断工具，并更新文档；未修改SfM算法或填写N/S数学函数。
