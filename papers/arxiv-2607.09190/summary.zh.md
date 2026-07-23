---
paper_id: arxiv-2607.09190
summary_version: "0.3"
language: zh
status: ai-draft
---

# TactiDex: A Real-World Tactile-Guided Benchmark for Human-Like Dexterous Manipulation

> 这项工作在其问题上提出明确增量：把触觉作为 human-to-robot dexterous transfer 的结构化监督和标准评测目标，而非附加传感器输入。

## 研究问题

把触觉作为 human-to-robot dexterous transfer 的结构化监督和标准评测目标，而非附加传感器输入。

## 核心方法

第 3–4 节对齐全手触觉、多粒度手/物体状态，并以 guidance、human-like alignment、contact constraints 三部分 tactile reward 训练 TactiSkill。

## 实验与结果

第 5 节覆盖单手、双手任务、主结果、消融、定性接触分析与真实部署。

## 结论

第 6 节总结从 kinematic mimicry 到 contact-level human-likeness，并讨论数据与开环真实执行限制。

## 局限性与不确定性

1. 项目页本次网络探测失败
2. 真实部署采用开环 command mapping，闭环鲁棒性有限
3. 数据规模与跨传感器泛化需人工复核

## 为什么值得关注

这项工作在其问题上提出明确增量：把触觉作为 human-to-robot dexterous transfer 的结构化监督和标准评测目标，而非附加传感器输入。 多任务、消融和实机支撑 success/physical realism 主张，但项目页本次不可访问，无法计公开资产。 看板没有 tactile-guided benchmark；相对 EgoScale 的视觉人类数据迁移，TactiDex新增同步触觉与接触级 reward/metrics。

与现有看板工作的关系：看板没有 tactile-guided benchmark；相对 EgoScale 的视觉人类数据迁移，TactiDex新增同步触觉与接触级 reward/metrics。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
