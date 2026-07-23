---
paper_id: arxiv-2607.13059
summary_version: "0.3"
language: zh
status: ai-draft
---

# GPUSimBench: Towards Scalable and Reliable GPU-Accelerated Simulators in Embodied AI

> 这项工作在其问题上提出明确增量：把吞吐、物理一致性和 GPU batched non-determinism 放进同一基准，而非只比 FPS。

## 研究问题

把吞吐、物理一致性和 GPU batched non-determinism 放进同一基准，而非只比 FPS。

## 核心方法

第 III–IV 节用 free-fall cube、随机动作 Franka 和斜面滚珠，测 throughput、显存、intra/inter-run distribution 与 real-world alignment。

## 实验与结果

第 V–VI 节比较 Isaac Lab、Genesis 等 GPU simulator，发现并归纳四种 stochasticity regime，说明并行规模会改变可重复性。

## 结论

第 VII 节给出 sim-to-real、极大并行、有限显存等场景的 simulator 选择建议并明确实验任务有限。

## 局限性与不确定性

1. 基准物理任务较少
2. 不同版本/硬件/驱动对结论敏感
3. 未核验基准代码公开

## 为什么值得关注

这项工作在其问题上提出明确增量：把吞吐、物理一致性和 GPU batched non-determinism 放进同一基准，而非只比 FPS。 受控物理任务、跨规模分布和真实对齐支撑发现；尚未发现 GPUSimBench 自身公开仓库。 最近邻 arxiv-2511.04831 Isaac Lab；GPUSimBench不是新 simulator，而是横向暴露 GPU simulator 的 determinism/physics/scaling trade-off。

与现有看板工作的关系：最近邻 arxiv-2511.04831 Isaac Lab；GPUSimBench不是新 simulator，而是横向暴露 GPU simulator 的 determinism/physics/scaling trade-off。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
