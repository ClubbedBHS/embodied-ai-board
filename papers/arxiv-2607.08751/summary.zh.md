---
paper_id: arxiv-2607.08751
summary_version: "0.3"
language: zh
status: ai-draft
---

# DexVerse: A Modular Benchmark for Multi-Task, Multi-Embodiment Dexterous Manipulation

> 这项工作在其问题上提出明确增量：同时扩展任务覆盖、hand/arm embodiment 和可控视觉 variation 的 dexterous benchmark。

## 研究问题

同时扩展任务覆盖、hand/arm embodiment 和可控视觉 variation 的 dexterous benchmark。

## 核心方法

第 3–4 节构建模块化任务/资产/视觉变化，支持 3 机械臂、6 灵巧手、RGB/depth/point-cloud/state 和 VR teleoperation。

## 实验与结果

正文提供 100 任务、3,180 demonstrations，并在 19 任务上评测 Diffusion Policy、DP3、OpenVLA、π0.5，分析 task/embodiment/视觉泛化。

## 结论

第 5 节指出现有方法在跨任务和视觉鲁棒性上仍显著不足。

## 局限性与不确定性

1. 主要是仿真 benchmark
2. 项目页本次网络探测失败
3. 数据规模相对 100 任务仍稀疏

## 为什么值得关注

这项工作在其问题上提出明确增量：同时扩展任务覆盖、hand/arm embodiment 和可控视觉 variation 的 dexterous benchmark。 代表性 BC、3D policy 与 VLA 基线共同暴露 generalization gap；项目页本次未通，但仿真资产 HF 入口出现在全文。 最近邻为 Isaac Lab 和 KinDER；DexVerse新增大规模多 embodiment 灵巧操控任务与 VLA/DP 基线。

与现有看板工作的关系：最近邻为 Isaac Lab 和 KinDER；DexVerse新增大规模多 embodiment 灵巧操控任务与 VLA/DP 基线。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
