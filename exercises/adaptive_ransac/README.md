# 自适应RANSAC练习测试

算法已由用户完成，位置为 `src/minicolmap/geometry.py` 的 `ransac_fundamental`；此目录保留独立验收测试。
签名、停止约定、测试分组和计时对照方法见 [开发指导](../../docs/11-自适应RANSAC与流水线计时.md)。

从项目根目录运行：

```powershell
.\.venv\Scripts\python.exe -m pytest exercises/adaptive_ransac -q
```

共31项验收；提供测试时的固定预算实现基线为30失败、1通过，用户于2026-10-17实现后已全部通过。
练习集不在默认的 `tests/` 回归目录中，不会替你实现算法，也没有skip/xfail。
