---
paper_id: arxiv-2607.04434
summary_version: "0.3"
language: zh
status: ai-draft
---

# RoboDojo: A Unified Sim-and-Real Benchmark for Comprehensive Evaluation of Generalist Robot Manipulation Policies

> 这项工作在其问题上提出明确增量：把广覆盖 simulation feedback 与可远程复现实机评测真正接到同一 policy adapter/leaderboard。

## 研究问题

把广覆盖 simulation feedback 与可远程复现实机评测真正接到同一 policy adapter/leaderboard。

## 核心方法

第 3–5 节定义 42 仿真+18 实机任务、五类能力维度、anti-gaming protocol、RealEval 远程硬件和 XPolicyLab 统一接入。

## 实验与结果

第 6 节和 leaderboard 集成并评测 30 个 policies，分析仿真/真实性能、效率、重复稳定性与跨域差异。

## 结论

第 8 节将可复现 sim-real 统一评测、标准硬件 reset/deployment 和公共 leaderboard 作为核心基础设施。

## 局限性与不确定性

1. 大型作者团队自身集成的 30 个 policy 版本/配置公平性需抽查
2. 远程实机服务长期可用性与排队成本未知

## 为什么值得关注

这项工作在其问题上提出明确增量：把广覆盖 simulation feedback 与可远程复现实机评测真正接到同一 policy adapter/leaderboard。 任务、方法、效率与稳定性覆盖极广，且代码仓库当前可访问；仍需人工检查远程硬件服务可用性。 最近邻 KinDER 是物理推理 benchmark、Isaac Lab 是 simulator；RoboDojo新增 42+18 任务的 sim-real 统一 policy evaluation 与远程实机系统。

与现有看板工作的关系：最近邻 KinDER 是物理推理 benchmark、Isaac Lab 是 simulator；RoboDojo新增 42+18 任务的 sim-real 统一 policy evaluation 与远程实机系统。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
