---
paper_id: arxiv-2607.06699
summary_version: "0.3"
language: zh
status: ai-draft
---

# RoboSnap: One-Shot Real-to-Sim Scene Generation for Generalizable Robot Learning and Evaluation

> 这项工作在其问题上提出明确增量：单图 real-to-sim 同时针对视觉背景和接触前景分层优化，并把恢复场景用于数据生成与 policy ranking。

## 研究问题

单图 real-to-sim 同时针对视觉背景和接触前景分层优化，并把恢复场景用于数据生成与 policy ranking。

## 核心方法

第 3 节从单张 RGB 分离 physics-critical foreground 与 Gaussian background，通过 scene graph、SDF-physics alternating optimization 生成稳定资产。

## 实验与结果

第 4 节覆盖视觉/物理稳定、trajectory replay、合成训练、randomization、生成式评测，并构建来自 DROID 564 场景的 DROID-Sim。

## 结论

第 5–6 节总结一次性 real-to-sim 的训练/评测价值，并承认单视图遮挡、可动物体重建和动力学参数限制。

## 局限性与不确定性

1. 单视图不可见几何与材质参数不可辨识
2. 项目页本次网络探测失败
3. policy ranking 的泛化需外部复核

## 为什么值得关注

这项工作在其问题上提出明确增量：单图 real-to-sim 同时针对视觉背景和接触前景分层优化，并把恢复场景用于数据生成与 policy ranking。 DROID 场景与真实任务上的 replay、training、sim-real correlation 支撑主张；项目页本次未通，未确认代码。 最近邻 SimFoundry；RoboSnap新增单图 real-to-sim、分层视觉/物理表示和 DROID 564 场景 companion dataset。

与现有看板工作的关系：最近邻 SimFoundry；RoboSnap新增单图 real-to-sim、分层视觉/物理表示和 DROID 564 场景 companion dataset。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
