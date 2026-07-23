---
paper_id: arxiv-2607.00678
summary_version: "0.3"
language: zh
status: ai-draft
---

# ABot-M0.5: Unified Mobility-and-Manipulation World Action Model

> 这项工作在其问题上提出明确增量：首次把视频时间粒度、异构动作空间和 autoregressive train-test gap 三个结构问题同时纳入移动操控 WAM。

## 研究问题

首次把视频时间粒度、异构动作空间和 autoregressive train-test gap 三个结构问题同时纳入移动操控 WAM。

## 核心方法

第 2–4 节提出中间 latent action、双层 Mixture-of-Transformers 解耦底盘/机械臂动作，以及用模型自生成视频对齐训练与推理的 Dream Forcing。

## 实验与结果

第 5 节覆盖 RoboCasa365、RoboTwin 2.0、LIBERO/Plus 和真实机器人；真实 Peg Cylinder 为 70%（π0.5 50%、FastWAM 30%），四个长程任务为 60%–80%。

## 结论

第 6 节总结移动+精细操控统一 WAM，并把更开放场景、更多 embodiment 和推理加速列为后续工作。

## 局限性与不确定性

1. 真实实验仍是受控实验室任务
2. 开放环境和跨 embodiment 泛化尚未验证

## 为什么值得关注

这项工作在其问题上提出明确增量：首次把视频时间粒度、异构动作空间和 autoregressive train-test gap 三个结构问题同时纳入移动操控 WAM。 多基准、消融和真实机器人共同支持主张；Dream Forcing 从 67.55% 升到 70.56%，action-decoupled MoT 从 0.34 升到 0.48。 最近邻为 arxiv-2607.08436 EgoWAM；EgoWAM聚焦人类视频迁移的世界目标，ABot-M0.5新增移动底盘—机械臂动作解耦和 rollout 对齐。

与现有看板工作的关系：最近邻为 arxiv-2607.08436 EgoWAM；EgoWAM聚焦人类视频迁移的世界目标，ABot-M0.5新增移动底盘—机械臂动作解耦和 rollout 对齐。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
