---
paper_id: arxiv-2607.14852
summary_version: "0.3"
language: zh
status: ai-draft
---

# Towards Human-like Physical Intelligence: Lifelong Vision-Language-Action Learning for Robotic Manipulation

> 这项工作在其问题上提出明确增量：把 dual-timescale adapter composition 与 cache-efficient stochastic replay 专门用于 VLA 连续技能学习。

## 研究问题

把 dual-timescale adapter composition 与 cache-efficient stochastic replay 专门用于 VLA 连续技能学习。

## 核心方法

第 4 节用短/长时 LoRA pathway 与任务感知 gate 平衡 plasticity/stability，并缓存 prefix token、重采样 diffusion suffix 做随机 replay。

## 实验与结果

第 5 节仿真消融显示 latent replay 内存 167.62→95.70 MiB/任务；五任务 xArm 流中每任务 50 训练/50 评测，最终各任务成功率均高于 80%。

## 结论

第 6–7 节总结性能/遗忘/内存改善，并承认任务流短、对象与场景单一、缺少多顺序均值方差。

## 局限性与不确定性

1. 五任务规模不足以证明长期 lifelong learning
2. 未开放代码/权重
3. 任务顺序和多随机流统计不足

## 为什么值得关注

这项工作在其问题上提出明确增量：把 dual-timescale adapter composition 与 cache-efficient stochastic replay 专门用于 VLA 连续技能学习。 基线、内存/参数消融与真实机器人流支持主张，但实机只有五任务且未报告多任务顺序统计。 最近邻为 π0.6（从经验学习）；π0.6侧重 RL/experience，LifelongVLA专门测连续技能加入后的遗忘和 replay 成本。

与现有看板工作的关系：最近邻为 π0.6（从经验学习）；π0.6侧重 RL/experience，LifelongVLA专门测连续技能加入后的遗忘和 replay 成本。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
