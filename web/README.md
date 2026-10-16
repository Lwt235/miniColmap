# Mini-COLMAP 工作台前端

React + TypeScript + Three.js 构建的中文本地工作台。只展示 Python 算法产生的点、相机与统计；显示筛选和视图操作不会写回模型。

日常使用：在项目根目录运行 `python -m minicolmap ui`。静态资源随 Python 包提供，不需要 Node 或在线 CDN。

前端开发：

```powershell
cd web
npm ci
npm run dev
```

开发服务器把 `/api` 代理至 `http://127.0.0.1:8765`，需要另行启动 Python UI 服务。生产构建使用同源接口。

```powershell
npm test
npm run build
npm run format
```

复用浏览器验收：先在项目根目录启动 `python -m minicolmap ui --no-browser`，确保已下载项目中的 Middlebury TempleRing 数据，且保留 8 张图像的无 BA 与带 BA 两份基线结果，然后在此目录运行 `npm run test:e2e`。测试使用本机 Edge，实际验证三维交互和完整重建流程；会创建独立的测试运行与导入副本，不会改写原始数据。该测试不包含在默认的 `npm test` 中。

`build` 首先进行 TypeScript 检查，再把资源写入 `src/minicolmap/ui/static`。提交前端修改时应一并更新生产资源。

`npm run test:e2e:camera` 只读验证一键对齐相机后立即旋转、平移、缩放、再次对齐、窗口变化和选点，不启动或取消重建任务。
`cameraView.ts` 把保存的R/t转换成自由观察相机，并参考K的垂直视场角。对齐后使用整个三维面板，保持自由控制。

主要组件：`App` 管理任务、SSE、数据和场景状态；`Viewer` 批量绘制点与相机；`Inspector` 按需读取完整轨迹并叠加像素观测；`ConfigPanel` 与 `ImportDialog` 连接现有配置校验和导入接口。相机几何与显示筛选位于 `math.ts`，测试覆盖非单位旋转、去标定和原始索引保留。

相机位姿采用世界到相机的 `R,t`，相机中心为 `−Rᵀt`，相机局部坐标为 `+Z` 朝前、`+Y` 朝下。Three.js 视锥直接由这些量构造，不用其默认相机朝向推断结果。RGB 字节先从 sRGB 转成线性色值，再交给输出为 sRGB 的渲染器。
