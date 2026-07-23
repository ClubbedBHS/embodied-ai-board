---
paper_id: arxiv-2607.06052
summary_version: "0.3"
language: zh
status: ai-draft
---

# ThorArena: Benchmarking Humanoid Physical Interaction with Human Motion-Force Demonstrations

> 这项工作在其问题上提出明确增量：把同步人类 motion-force demonstration 和外力重放纳入 humanoid benchmark，而非只测 kinematic tracking。

## 研究问题

把同步人类 motion-force demonstration 和外力重放纳入 humanoid benchmark，而非只测 kinematic tracking。

## 核心方法

第 III 节同步采集全身运动与双手力，定义 FATS、控制 effort、存活率等 force-aware 指标，并用统一 force replay protocol 评测策略。

## 实验与结果

第 IV 节在六类接触任务上比较有/无外力条件和代表性 whole-body controllers，显示常规无力评测会掩盖明显差异。

## 结论

第 V 节把 ThorArena 定位为 contact-rich humanoid interaction 的可复现实验协议。

## 局限性与不确定性

1. 仅六类任务
2. 仿真 force replay 与真实接触的 sim-to-real 偏差
3. 未核验数据/代码入口

## 为什么值得关注

这项工作在其问题上提出明确增量：把同步人类 motion-force demonstration 和外力重放纳入 humanoid benchmark，而非只测 kinematic tracking。 有力/无力对照和多诊断指标直接支持主张；数据释放入口在论文中声称但本次未找到可访问仓库。 当前看板缺少 humanoid force-aware benchmark；最近邻 KinDER 是物理推理基准，ThorArena补充动态接触力与 whole-body control 评测。

与现有看板工作的关系：当前看板缺少 humanoid force-aware benchmark；最近邻 KinDER 是物理推理基准，ThorArena补充动态接触力与 whole-body control 评测。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
