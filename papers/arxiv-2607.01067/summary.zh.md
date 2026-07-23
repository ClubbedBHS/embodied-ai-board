---
paper_id: arxiv-2607.01067
summary_version: "0.3"
language: zh
status: ai-draft
---

# Human-Centric Transferable Tactile Pre-Training for Dexterous Robotic Manipulation

> 这项工作在其问题上提出明确增量：把触觉纳入大规模人类 egocentric 预训练，并通过统一空间避免 pretrain/post-train dynamics mismatch。

## 研究问题

把触觉纳入大规模人类 egocentric 预训练，并通过统一空间避免 pretrain/post-train dynamics mismatch。

## 核心方法

第 3–4 节构建 H-Tac 并统一人/机器人 tactile-action space，以 action expert+future tactile expert 做 Transferable Tactile Pre-Training。

## 实验与结果

第 5 节覆盖仿真、真实机器人、ID/OOD 和设计/规模消融；H-Tac 为 160 小时、300+ 任务、135k episodes，正文另给 37.2h/947 与 17.8h/9,563 子集细节。

## 结论

第 6 节总结 tactile pretraining 对精细接触和人到机器人迁移的作用。

## 局限性与不确定性

1. 项目页本次网络探测失败
2. 数据与权重是否完整开放未核验
3. 跨不同触觉硬件的统一表示仍需更多外部验证

## 为什么值得关注

这项工作在其问题上提出明确增量：把触觉纳入大规模人类 egocentric 预训练，并通过统一空间避免 pretrain/post-train dynamics mismatch。 数据规模、仿真/实机、OOD 与 scaling ablation 证据完整；项目页本次未通且未确认数据/权重下载。 相对 EgoScale/EgoVerse 的视觉人类数据，H-Tac新增 160 小时 tactile-action 监督、future tactile expert 和跨 embodiment 统一触觉空间。

与现有看板工作的关系：相对 EgoScale/EgoVerse 的视觉人类数据，H-Tac新增 160 小时 tactile-action 监督、future tactile expert 和跨 embodiment 统一触觉空间。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
