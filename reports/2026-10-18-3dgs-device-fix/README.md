# 3DGS首次CUDA训练：设备错误修复

## 原因与修改

用户的两个失败任务分别使用reference和gsplat：`ui_3dgs_20261018_131740_1c1b10`、`ui_3dgs_20261018_131818_7ee923`。
本次实际复现S1返回的设备为：means/log_scales/quaternions/sh_coeffs在cuda:0，opacity_logits在cpu。
`_render`用CUDA的正深度布尔索引筛选CPU透明度张量，触发用户报告的indices错误。

`algorithms.py`仅修复初始化透明度时漏写的`device=points.device`，不改其他S1–S6数学实现。
原CPU公开验收无法检测CUDA设备混用，新增实际GPU回归覆盖空/非空初始化、float32/64、参考管线前向/梯度/Adam、各阶SH和密度控制。

## 验证结果

- 修复前，4个CUDA初始化用例均稳定指出opacity_logits错误地位于CPU。
- 修复后，73项3DGS公开测试与10项真实CUDA回归全部通过。
- `pytest tests exercises`完整回归525项通过。
- 随后增加gsplat扩展不可用的明确报错和对应测试，相关31项回归通过。
- 原47图、512高斯、160×120照片、CUDA/reference真实训练2步完成，保存checkpoint、NPZ、预览和全部11张验证视图指标。

真实smoke输出：`outputs/3dgs_device_fix_reference_smoke_20261018/`。
仅把失败配置的预算改为2步、每步保存预览，后端显式改为reference；其余学习率、数据与初始化等保留。最终验证PSNR约12.87dB，只证明工程闭环，不是画质验收。
复现脚本为本目录的`smoke.py`，输出目录已存在时会拒绝覆盖，可用`--suffix _new`创建新目录。

## 另外发现的gsplat环境问题

gsplat 1.5.3的Python包已经安装，但普通工作台进程未找到CUDA编译环境，底层扩展为None，进一步触发`CameraModelType`属性错误。
适配层现会明确提示“CUDA光栅扩展未加载”及reference+CUDA替代路径，不自动切换后端。

系统实际存在CUDA Toolkit12.3和Visual Studio2022 Build Tools，但唯一安装的MSVC为14.40.33807。
在本次诊断子进程中补齐CUDA/MSVC环境后，真实编译仍被CUDA12.3的`host_config.h`拒绝：它要求`_MSC_VER < 1940`，本机MSVC14.40对应1940。
因此gsplat尚未编译成功，不能把当前结果当成CUDA光栅加速或实时渲染验收。

新增`scripts/with_gsplat_env.ps1`用于后续兼容工具链的启动与预检：只设置当前进程及子进程环境，不修改系统PATH；扩展缓存限定在项目内`.cache/torch_extensions`。当前版本不兼容时会提前拒绝，不跳过编译器版本检查。

当前可以在前端选**高斯光栅后端reference，计算设备CUDA**继续训练。gsplat需要另行配置兼容的Toolkit/MSVC组合并实测。
用户原失败记录、配置、源点云与照片均保留，本次所有试跑使用独立目录。
