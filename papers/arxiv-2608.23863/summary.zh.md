---
paper_id: arxiv-2608.23863
summary_version: "0.3"
language: zh
status: ai-draft
---

# DreamLedger: Where to Refuse World-Model Imagination Using Execution-Settled Credit

> DreamLedger让世界模型的失败经验跨episode持久化，并在再次消费相似预测前定价；跨三种接口与模型的门控把“烧掉的想象”降低62%，且1,062次真机消费均可审计回放。

## 研究问题

Deployment-time trust and gating for robot world-model predictions.

## 核心方法

Treats reliability as a persistent execution-settled ledger rather than an instantaneous model confidence score.

## 实验与结果

Three simulated domains, three model families, Franka hardware logs, calibration and sensitivity analyses reviewed.

## 局限性与不确定性

1. 硬件实验仅限Franka推物且门控与盲用试验不是随机并行对照
2. 空账本保守且依赖部署期积累，不能零样本跨站点迁移
3. 未确认公开实现

## 为什么值得关注

DreamLedger让世界模型的失败经验跨episode持久化，并在再次消费相似预测前定价；跨三种接口与模型的门控把“烧掉的想象”降低62%，且1,062次真机消费均可审计回放。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 官方元数据核验
- [x] 方法、实验和结论或局限已通过 arXiv HTML 全文核验
- [x] 团队信息仅采用论文作者栏或官方项目页明确证据
- [x] 代码、数据和项目资产已区分可访问、占位、404 与未发现
- [ ] 中文摘要为 AI 初稿，关键数字仍建议编辑复核
