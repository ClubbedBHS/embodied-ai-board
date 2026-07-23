---
paper_id: arxiv-2607.07608
summary_version: "0.3"
language: zh
status: ai-draft
---

# Dual Latent Memory in Vision-Language-Action Models for Robotic Manipulation

> 这项工作在其问题上提出明确增量：记忆不再作为外部图像/文本附件，而是以同一连续 latent space 参与 VLA 推理与动作形成。 两个仿真套件和模块消融支撑增益，但没有真实机器人、跨 embodiment 或长期部署证据。 最近邻为 arxiv-2603.17300 ReSteer 和 π0 系列；LaMem-VLA补充历史依赖 latent memory，而非多任务 steerability 或基础行为克隆。

## 研究问题

记忆不再作为外部图像/文本附件，而是以同一连续 latent space 参与 VLA 推理与动作形成。

## 核心方法

第 3 节将历史组织为短/长时 vault，经 curator、seeker、condenser 变成固定长度 latent memory token，再与当前多模态上下文交织。

## 实验与结果

第 4 节在 SimplerEnv-Bridge、LIBERO 及消融中比较无记忆、观测窗口和检索式记忆；覆盖长程、遮挡与历史依赖任务。

## 结论

第 5 节总结 latent-native 双尺度记忆在固定上下文预算内改善历史依赖操控。

## 局限性与不确定性

1. 仅仿真验证
2. 摘要与正文未给出跨长期真实任务的鲁棒性证据

## 为什么值得关注

这项工作在其问题上提出明确增量：记忆不再作为外部图像/文本附件，而是以同一连续 latent space 参与 VLA 推理与动作形成。 两个仿真套件和模块消融支撑增益，但没有真实机器人、跨 embodiment 或长期部署证据。 最近邻为 arxiv-2603.17300 ReSteer 和 π0 系列；LaMem-VLA补充历史依赖 latent memory，而非多任务 steerability 或基础行为克隆。

与现有看板工作的关系：最近邻为 arxiv-2603.17300 ReSteer 和 π0 系列；LaMem-VLA补充历史依赖 latent memory，而非多任务 steerability 或基础行为克隆。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
