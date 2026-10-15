# einx 补全与类型声明补丁

本目录为 VS Code/Pylance 提供项目级类型声明，不参加 Python 运行时导入。
`.vscode/settings.json` 已将 `python.analysis.stubPath` 指向 `typings`。

`einx-stubs/__init__.pyi` 对 einx 0.4.3 的顶层接口做显式 re-export，包含 dot、sum、mean 等函数，
并保留 backend/numpy 等子模块；函数签名继续从安装库的实现读取。
`einx-stubs/py.typed` 内容为 `partial`，允许未提供 stub 的内部模块/子模块回退到实际安装库。
不要只写一个 dot 声明并把其余接口丢掉。

添加后在 VS Code 执行 `Python: Restart Language Server`，或 `Developer: Reload Window`。
项目打开目录应为 `D:\yy_folder\miniColmap`，解释器应为 `.venv\Scripts\python.exe`。
可将本目录和 `.vscode/settings.json` 一起提交到 Git；重建虚拟环境后仍可使用。

此补丁按0.4.3的接口整理。升级 einx 后检查上游是否已正确显式导出；若已修复，可以移除此包专用补丁。
若新增公开函数，更新这里的 re-export。不要通过修改 site-packages、关闭整个项目的类型检查或永久固定旧版本修补补全。

依据：[Pylance stubPath 与 partial stubs](https://github.com/microsoft/pylance-release/blob/main/docs/settings/python_analysis_stubPath.md)。
