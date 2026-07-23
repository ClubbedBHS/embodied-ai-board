---
paper_id: arxiv-2607.03693
summary_version: "0.3"
language: zh
status: ai-draft
---

# CoRE-VLA: Towards Scalable and Robust Vision-Language-Action Modeling via Conditional Routing of Experts

> 用传感器可用性和任务意图条件化稀疏 experts，使同一 VLA 能利用辅助深度并在传感器缺失时降级。

## 研究问题

用传感器可用性和任务意图条件化稀疏 experts，使同一 VLA 能利用辅助深度并在传感器缺失时降级。

## 核心方法

第3节给出 modality/intent routing 与 dropout；第4节覆盖 LIBERO、RoboCasa GR1 和双臂实机，并比较 dense ablation、预训练 VLA 和缺深度部署。

## 实验与结果

第3节给出 modality/intent routing 与 dropout；第4节覆盖 LIBERO、RoboCasa GR1 和双臂实机，并比较 dense ablation、预训练 VLA 和缺深度部署。

## 结论

第3节给出 modality/intent routing 与 dropout；第4节覆盖 LIBERO、RoboCasa GR1 和双臂实机，并比较 dense ablation、预训练 VLA 和缺深度部署。

## 局限性与不确定性

1. 实验只用 depth 代表异构辅助传感器
2. 未发现作者代码/权重公开

## 为什么值得关注

用传感器可用性和任务意图条件化稀疏 experts，使同一 VLA 能利用辅助深度并在传感器缺失时降级。 第3节给出 modality/intent routing 与 dropout；第4节覆盖 LIBERO、RoboCasa GR1 和双臂实机，并比较 dense ablation、预训练 VLA 和缺深度部署。 相对 ReSteer 的多任务可控性，CoRE-VLA新增传感器缺失鲁棒性与 sparse conditional compute。

与现有看板工作的关系：相对 ReSteer 的多任务可控性，CoRE-VLA新增传感器缺失鲁棒性与 sparse conditional compute。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
