---
paper_id: arxiv-2607.03461
summary_version: "0.3"
language: zh
status: ai-draft
---

# WorldBagel: Uncovering the Power of Unified Multimodal Models for Vision-Language-Action-World Modeling

> 这项工作在其问题上提出明确增量：系统研究 unified multimodal generation backbone 对 VLA+world modeling 联合训练的作用，并提出 Fourier action 表示。

## 研究问题

系统研究 unified multimodal generation backbone 对 VLA+world modeling 联合训练的作用，并提出 Fourier action 表示。

## 核心方法

第 3 节把 BAGEL 扩展为双塔 VLAW，提出 Fourier Feature Action Decoder/Tokenizer、interleaved sequence plan 和多模态采样。

## 实验与结果

第 4 节在 LIBERO、Language Table、Franka 上比较多任务性能、world modeling、action representation 消融与 distribution shift。

## 结论

第 5 节认为统一多模态建模带来更结构化、语义对齐的动作表示。

## 局限性与不确定性

1. 核心资产尚未发布
2. 真实机器人覆盖和重复次数需人工复核
3. 统一模型的计算成本未充分讨论

## 为什么值得关注

这项工作在其问题上提出明确增量：系统研究 unified multimodal generation backbone 对 VLA+world modeling 联合训练的作用，并提出 Fourier action 表示。 多数据域和 action-representation 消融支撑结论，但代码和 checkpoint 明确写为 upon acceptance，当前不可计入。 最近邻为 EgoWAM；WorldBagel新增统一 multimodal generation backbone 和 Fourier action 编码，而非比较人类视频 world targets。

与现有看板工作的关系：最近邻为 EgoWAM；WorldBagel新增统一 multimodal generation backbone 和 Fourier action 编码，而非比较人类视频 world targets。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
