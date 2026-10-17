# 自适应 RANSAC 练习与 Pipeline 计时

2026-10-17更新：用户已实现并通过31项练习测试，8图和47图均全部注册。
confidence/min_trials现已接入配置和前端，默认值0.99/20；详见 [日志分析](../reports/2026-10-17-adaptive-ransac-analysis.md)。
下文保留练习设计与实现前基线，其中“尚未实现”描述的是提供测试时的历史状态。

这次只提供测试、接口约定和计时工具，`geometry.py` 的 G5 算法没有替你实现。

## 先明确这次要改什么

当前G5对每个可估计的图像对都抽样 `max_trials` 次。你的目标是：
高内点比例时减少抽样；内点支持弱、退化样本多时仍保留足够预算；任何情况都不超过硬上限。
八点估计、Sampson误差、最终重估F和重新计算mask沿用现有代码。

建议只在原有签名末尾增加两个关键字参数，前五个位置参数及 `(F, mask)` 返回方式保持兼容：

```python
def ransac_fundamental(
    x1, x2, threshold_px=1.5, max_trials=2000, seed=0,
    *, confidence=0.99, min_trials=20,
):
    ...  # 由你完成自适应停止逻辑
```

`confidence` 必须是有限数，严格处于0和1之间；`min_trials` 必须是正整数，两者都拒绝bool。
`min_trials > max_trials` 时按硬上限截断，保留原有 `max_trials=1` 等调用的行为。
现有Pipeline通过 `geometry.confidence` 和 `geometry.min_trials` 显式传入这两个关键字参数；旧配置会补默认值。

## 数学与停止约定

令最好一致集的内点比例为 `w = best_count / N`，每次最小抽样数为8，目标置信度为 `p`。
均匀抽样的常用预算估计为：

\[
N_{required}=\left\lceil\frac{\log(1-p)}{\log(1-w^8)}\right\rceil.
\]

参考 [scikit-image RANSAC官方文档](https://scikit-image.org/docs/stable/api/skimage.measure.html#skimage.measure.ransac)。
这里采用标准的 `w**8` 估计，不要求实现无放回组合概率版本；概率模型也不等于真实重建成功率保证。
公式需要的次数超过硬上限时，实际运行也无法达到该模型下的目标置信度，不能把 `confidence` 当作无条件保证。

实现时自己处理这些边界：

- 尚未发现至少8个内点的模型时，保留 `max_trials`，不能按最少次数直接停止。
- `w=1` 时不要计算 `log(0)`；仍遵守最少抽样数和硬上限。
- 对一般情况考虑 `log1p` 的数值稳定性；预算向上取整，使用8次方。
- 预算基于最好一致集更新，并只收紧，不被之后的差模型放大。
- 抽样总数包括退化后跳过的抽样；不是“有效模型数”。
- 最好模型在第30次才改善，而公式给出9次时，应在第30次停止，不是重新再抽9次。
- 停止后仍用最好一致集重估F，再用返回的F重算mask；不把旧mask直接返回。

最少抽样数是工程保护，不是额外加在公式预算之后的次数。例如内点80%、p=0.99、最少3次时应抽26次；
全部内点、最少20次时抽20次；硬上限只有4次时最多抽4次。

## 测试怎么运行

练习测试位于 `exercises/adaptive_ransac/test_adaptive_ransac.py`，共31项展开后的测试。
它在默认 `tests/` 回归集之外，不包含skip或xfail；显式运行就会真正执行断言。

```powershell
.\.venv\Scripts\python.exe -m pytest exercises/adaptive_ransac -q -p no:cacheprovider --basetemp=.cache/pytest-adaptive-your-first-run
```

实现前的实测基线是 **30失败、1通过**：当时签名还不接受 `confidence`，通过的是旧位置参数兼容检查。
这是下一步练习的起点，不是原有几何算法突然失效。每次运行换一个 `--basetemp` 路径可避开旧临时目录的权限问题。

建议按顺序运行：

```powershell
# 1. 参数边界与硬上限
.\.venv\Scripts\python.exe -m pytest exercises/adaptive_ransac -q -k "invalid or all_inliers or no_valid"
# 2. 预算计算、更新、退化与最终refit
.\.venv\Scripts\python.exe -m pytest exercises/adaptive_ransac -q -k "not invalid and not real_geometry"
# 3. 真正调用你写的八点法和Sampson误差
.\.venv\Scripts\python.exe -m pytest exercises/adaptive_ransac -q -k real_geometry
# 4. 最后跑整个练习集及原有回归集
.\.venv\Scripts\python.exe -m pytest exercises/adaptive_ransac -q
.\.venv\Scripts\python.exe -m pytest tests -q -p no:cacheprovider --basetemp=.cache/pytest-after-adaptive-your-first-run
```

| 测试组 | 验证什么 |
|---|---|
| 全内点与小硬上限 | 提前结束、最少次数、上限优先、避免log(0) |
| 不同内点比例和置信度 | 八次方、ceil、confidence生效，不能写死固定小预算 |
| 弱一致集与无有效模型 | 保留硬预算，失败时明确抛ValueError |
| 中途/很晚改善一致集 | 动态收紧，按累计抽样数决定停止 |
| 退化抽样 | 失败抽样仍计入预算，不能无限重试 |
| 最终refit | 返回新F对应的新mask，保持原约定 |
| 带噪声与外点的真实几何夹具 | 3个seed下精度、重复性、输入不变和抽样减少 |
| 原有调用 | 位置参数和两个返回值兼容 |

停止策略测试用monkeypatch控制几何返回值，避免把“运气抽到好样本”误当成停止逻辑正确。
计数代理只观察 `np.random.default_rng(seed).choice(...)` 的抽样次数；真实几何组不替换八点法和Sampson误差。
真实夹具的投影由独立矩阵运算生成，不调用被测的 `project_points`。
测试不要求“某台电脑必须快X秒”，而是先验证实际抽样确实减少，再由计时实测性能。

## Pipeline 计时已经实现

新运行会生成 `timings.json`，同时在 `summary.json` 和CLI结果的 `timings` 字段保存相同内容。
界面“质量与诊断”里可以展开 **Pipeline计时**；导出菜单可以下载原始 `timings.json`。
旧结果没有计时文件时不显示该面板，不推测历史耗时。

数据结构如下（结构示意，数值不是实测）：

```json
{
  "status": "completed",
  "unit": "seconds",
  "total_seconds": 12.0,
  "stages_seconds": {
    "dataset_loading": 0.1,
    "features": 1.9,
    "pair_geometry": 8.0,
    "tracks": 0.1,
    "initialization": 0.5,
    "incremental_mapping": 1.0,
    "export": 0.4
  },
  "details": {
    "descriptor_matching": {"seconds": 1.0, "calls": 28},
    "fundamental_ransac": {"seconds": 6.5, "calls": 26}
  }
}
```

计时使用单调的 `perf_counter`，表示墙钟时间，不是CPU利用率或GPU时间。
阶段含该阶段的文件读写、诊断图和UI快照回调；匹配子项只包住对应函数调用。
子项已包含在 `pair_geometry` 中，**不能再和各阶段耗时相加**。
RANSAC调用失败也计入它的调用次数；不足8个描述子匹配而直接跳过的图对不计为RANSAC调用。
不启用BA就没有 `bundle_adjustment` 阶段，不把“未执行”记录成零耗时成功。

总时间从数据加载开始，到结果模型、PLY、COLMAP文本导出和最终指标计算结束。
它不包括最后几份计时/状态报告自己的落盘，也不包括等待用户操作的时间。
数据清单加载失败或输出目录校验失败仍沿用原有“不创建/覆盖输出”的行为，因此此时没有计时文件。
进入流水线之后失败，会保存 `status=failed` 和失败阶段已花费的时间。
运行时文件在阶段切换处更新；强制取消进程可能只留下上一阶段检查点，不能把它当成完整运行时间。

## 怎样比较优化效果

已保存一次未优化的实测基线：`outputs/timing_baseline_20261016_01/`。
连续8张照片、无BA，总时间24.663秒，匹配与几何验证20.359秒，其中描述子匹配0.105秒、F-RANSAC19.892秒（各28次调用）。
注册8/8、1283个点、4250个观测、mean误差0.262926px，与已有无BA结果一致。
这次计时是CLI运行，不含UI中间快照开销；它是本机单次测量，不是固定性能承诺。

1. 先用当前固定2000次的G5运行一次连续8张图，保存它的 `timings.json` 和质量指标。
2. 自行实现G5并通过练习测试及原有回归，保持数据、seed和其他配置一致，再开新输出目录运行。
3. 优先比较 `details.fundamental_ransac.seconds`、匹配阶段时间和总时间；同时看注册率、点数、误差及正深度比例。
4. 再试47张图。自适应不会减少1081个候选图对，也不会自动并行；低内点比例图对仍可能跑满硬预算。

优化后采样序列的长度改变，返回F、tracks和点数可能与旧版不同，不要求仍逐位相同或恰好1283点。
不要仅以计时下降就判定优化成功；也不要单凭某次墙钟时间下降判断提前停止已正确实现。
