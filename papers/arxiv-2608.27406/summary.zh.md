---
paper_id: arxiv-2608.27406
summary_version: "0.3"
language: zh
status: ai-draft
---

# CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators

> CLAP把跨本体视频世界模型从表示问题推进到可部署的统一动作接口，并覆盖零样本真机规划、策略微调与少样本本体适配；代码和模型体系已经公开，是本批最完整的系统工作。

## 研究问题

Cross-embodiment action-conditioned video models are evaluated as robot simulators and policy-improvement environments.

## 核心方法

Unifies end-effector, language and latent action representations to train and adapt video world models across human and multiple robot embodiments.

## 实验与结果

DROID/Bridge/OXE evaluations, real-robot planning and policy-improvement experiments, and controlled baselines were checked.

## 局限性与不确定性

1. 核心训练需要8张80GB级GPU和大规模底层视频数据
2. 部分单本体基线由作者重新训练，跨论文绝对数值仍需谨慎比较

## 为什么值得关注

CLAP把跨本体视频世界模型从表示问题推进到可部署的统一动作接口，并覆盖零样本真机规划、策略微调与少样本本体适配；代码和模型体系已经公开，是本批最完整的系统工作。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 官方元数据核验
- [x] 方法、实验和结论或局限已通过 arXiv HTML 全文核验
- [x] 团队信息仅采用论文作者栏或官方项目页明确证据
- [x] 代码、数据和项目资产已区分可访问、占位、404 与未发现
- [ ] 中文摘要为 AI 初稿，关键数字仍建议编辑复核
