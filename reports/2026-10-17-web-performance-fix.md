# Web 重建耗时异常：原因与修复

## 主要原因及证据

本次用户运行：`ui_20261017_102109_14c560`，47 图，匹配与几何验证 285.303 秒，初始化 106.844 秒。106.844 秒是完整初始化阶段，包含位姿恢复、三角化、所有候选的两视图精化、筛选及快照，不只是精化函数本身。

与先前运行 `ui_20261017_093421_cb4035` 比较，`pairs.json`、`initialization.json`、`model.json` 均逐项一致，匹配 NPZ 也逐文件哈希一致。候选仍为218个，精化217次，nfev合计3213。因此耗时波动不能解释为输入变多或优化迭代变多。

**主要修复是为 Windows 重建子进程显式请求 HighQoS。** 在本机 i7-13700H / Windows 11 上，无窗口进程原先交给系统自动推断 QoS，导致计算执行速度出现明显差异。微软文档说明系统会依据窗口可见性等因素推断 QoS，并可据此选择处理器频率和更节能的核心；显式禁用执行速度节流即可请求 HighQoS。[调度说明](https://learn.microsoft.com/windows/win32/procthread/quality-of-service)、[SetProcessInformation](https://learn.microsoft.com/windows/win32/api/processthreadsapi/nf-processthreadsapi-setprocessinformation)。

为避免混用环境，本次首先在**与 Web 服务相同的宿主**执行缓存重放，不打开浏览器；然后只改变诊断进程的 QoS，其余算法、输入和 BLAS 线程相同：

| 47 图缓存初始化 | 系统自动推断 | 显式 HighQoS |
|---|---:|---:|
| 墙钟时间 / 秒 | 103.529 | 31.053 |
| 进程 CPU 时间 / 秒 | 97.422 | 29.781 |
| 相对位姿恢复 / 秒 | 21.690 | 6.119 |
| 两视图精化 / 秒 | 73.230 | 22.008 |
| LSMR 累计迭代 | 203092 | 203092 |
| 初始化模型哈希 | 完全相同 | 完全相同 |

CPU 时间与墙钟时间同步下降，且真实工作量相同，表明主要差异是计算执行速度，而不是等待前端、磁盘或多做优化。默认查询的 ControlMask/StateMask 为0/0，表示由系统推断，**不能据此声称已显式开启 EcoQoS，也没有采集逐核轨迹来断言之前全跑在 E 核**。

自动推断并非每次都慢：本次另一个独立8图宿主重放也能达到4.336秒，而HighQoS为3.189秒。显式请求的目的是减少后台任务被自动降档的机会，不承诺所有电脑或所有运行都有固定倍数加速。

此前专项报告约40秒的复测在沙箱内，不能直接与宿主Web进程对比；本次已修正这一比较口径，并在宿主重现约103秒。

## 实际修改

- `ui/runtime.py`：工作进程启动时通过 `SetProcessInformation` 请求HighQoS，保留其他电源机制位。不调整优先级等级、不绑核、不修改全局电源方案；不支持或调用失败时记录诊断并继续运行。
- `ui/worker.py`：在数值库导入前配置本子进程，保存 `runtime.json`，记录请求是否成功、Python trace状态和进程CPU时间。服务进程和普通CLI算法调用不受该请求影响。
- `App.tsx`：进度只刷新状态；真实快照才刷新场景，阶段检查点才刷新完整报告。同一视图最多一个场景请求在执行，连续快照合并为下一次最新读取，避免线程池堆积；状态轮询查询当前任务且不重叠。
- `Viewer.tsx`：静止时停止连续绘制，视图改变、快照改变和阻尼运动时按需绘制，保留旋转、平移、缩放和一键相机对齐。
- `store.py` / `app.py`：状态接口不再周期性扫描历史模型；显式历史刷新仍可发现外部CLI结果。缓存模型的图像ID/名称，仅在文件变化时重读；照片路径仍经过原有安全校验。单文件下载直接校验并读取目标，ZIP导出才枚举文件。
- 本地服务关闭逐请求访问日志，算法事件和诊断日志仍保留。

修改前，本项目17份历史运行每次发现过程读取约29.84 MB JSON；实际历史列表接口三次约1.52 / 1.45 / 1.44秒。修改后轻量状态列表约0.054 / 0.021 / 0.019秒。

本轮没有修改用户的几何、track、增量建图、优化实现或任何重建阈值。候选精化次数也保持原样，未通过减少优化预算换速度。

## 验收与运行方法

最终实际Web验收记录：[浏览器报告](web-performance/browser/report.json)。同数据、同完整配置通过真实Edge页面启动，任务 `e6910ea041774699`，输出 `ui_20261017_111907_e6910e`。

| 阶段 / 秒 | 用户本次修复前 | 最终Web复测 | 减少 |
|---|---:|---:|---:|
| 提特征 | 10.140 | 4.731 | 53.3% |
| 匹配与几何验证 | 285.303 | 110.479 | 61.3% |
| 初始化 | 106.844 | 32.395 | 69.7% |
| 增量建图 | 60.256 | 31.695 | 47.4% |
| 总计 | 467.754 | 181.768 | 61.1% |

最终仍为47/47台相机、6570点、27540观测，平均误差0.398156px、P95为1.556039px、正深度100%；`model.json`与修复前逐项完全一致。仍调用515次F-RANSAC，初始化仍精化217个候选。一次相邻完整Web复测为177.386秒；表中使用最后一轮实测，不把单次测量当固定加速保证。

最终真实重建期间，前端场景读取27次、完整报告7次；没有周期性扫描历史列表。场景读取按真实快照合并，而不是每条1081对进度都重取。只读复验等待最终47台相机加载稳定后，静止一秒WebGL绘制调用为0，拖拽后像素发生预期变化；`runtime.json`下载约0.029秒。截图见 [最终47图界面](web-performance/browser/completed.png)。

第一轮已完成主流程，但下载验收发现连续场景请求排队；已增加请求合并及直接下载，并重新运行完整重建。最终图形检查对同次已完成结果做只读复验，避免把仍在加载的中间快照当成静止画面；对应等待条件也已修正。诊断记录保存在 [第一次验收的队列问题](web-performance/browser/queue-before.json)。

260项Python测试通过，包含31项自适应RANSAC验收，以及新增的调度回退、历史轮询、缓存失效和下载安全检查；9项前端坐标/视角测试通过，TypeScript检查和生产构建通过。

相机对齐后的自由旋转、右键平移、缩放、再次对齐、窗口变化后选点、照片联动和重置视角均通过实际Edge回归：[交互记录](web-performance/camera-interaction.json)、[相机对齐截图](web-performance/camera-interaction.png)。测试改为从窄视场相机的可见模型范围分别检查移动，避免大幅旋转后用两张空白帧误判平移失效。

本地服务已经重启。浏览器按 **Ctrl+F5** 刷新即可使用新前端；正常启动方式仍是 `python -m minicolmap ui`。新运行可下载 `runtime.json`，Windows上应看到 `qos_policy: "high"` 和 `qos_applied: true`。

复测初始化时，应在同一个普通PowerShell环境分别启动独立进程：

```powershell
.venv/Scripts/python.exe scripts/profile_initialization.py outputs/ui_20261017_102109_14c560 --qos auto --output reports/init-auto.json
.venv/Scripts/python.exe scripts/profile_initialization.py outputs/ui_20261017_102109_14c560 --qos high --output reports/init-high.json
```

此脚本只读原始特征与匹配缓存，不覆盖原结果。不要同时执行两个性能测试，或把cProfile测量当作普通运行时间。

原始对照：[宿主自动调度47图](web-performance/elevated-replay-47.json)、[HighQoS 47图](web-performance/high-qos-47.json)、[自动调度8图](web-performance/auto-qos-8.json)、[HighQoS 8图](web-performance/high-qos-8.json)、[发现过程剖析](web-performance/discovery-before.json)、[轻量历史接口](web-performance/history-after.json)。
