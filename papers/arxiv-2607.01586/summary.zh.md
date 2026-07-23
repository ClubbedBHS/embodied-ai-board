---
paper_id: arxiv-2607.01586
summary_version: "0.3"
language: zh
status: ai-draft
---

# VLAFlow: A Unified Training Framework for Vision-Language-Action Models via Co-training and Future Latent Alignment

> 这项工作在其问题上提出明确增量：用受控架构/数据/动作空间分离此前被模型差异混淆的 VLA 预训练目标效果。 跨三个 benchmark、明确负迁移定义、checkpoint 选择规则和消融，证据设计强；主要缺口是真实机器人验证。 最近邻为 π0/π0.5 与 EgoWAM；VLAFlow新增同构受控比较，分离语言共训和未来 latent alignment 的作用。

## 研究问题

用受控架构/数据/动作空间分离此前被模型差异混淆的 VLA 预训练目标效果。

## 核心方法

第 3 节在同一 π0-style 架构、VLM backbone、action expert 和 14D action space 下控制比较 action-only、语言共训、future latent alignment 及二者组合。

## 实验与结果

第 4 节用约 5,000 小时 OXEMix，在 LIBERO、LIBERO-Plus、SimplerEnv 上做统一 protocol、public baseline、negative transfer 和多项消融。

## 结论

第 5 节结论是语言监督与未来 latent 形成互补 meta-action constraints，使异构动作监督更平滑可迁移。

## 局限性与不确定性

1. 仅仿真 benchmark
2. OXEMix 数据混合及公开数据偏差可能限制外推

## 为什么值得关注

这项工作在其问题上提出明确增量：用受控架构/数据/动作空间分离此前被模型差异混淆的 VLA 预训练目标效果。 跨三个 benchmark、明确负迁移定义、checkpoint 选择规则和消融，证据设计强；主要缺口是真实机器人验证。 最近邻为 π0/π0.5 与 EgoWAM；VLAFlow新增同构受控比较，分离语言共训和未来 latent alignment 的作用。

与现有看板工作的关系：最近邻为 π0/π0.5 与 EgoWAM；VLAFlow新增同构受控比较，分离语言共训和未来 latent alignment 的作用。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
