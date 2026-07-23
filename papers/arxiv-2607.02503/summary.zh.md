---
paper_id: arxiv-2607.02503
summary_version: "0.3"
language: zh
status: ai-draft
---

# VT-WAM: Visual-Tactile World Action Model for Contact-Rich Manipulation

> VT-WAM extends World Action Models to tactile domain by jointly learning future visual prediction, tactile deformation prediction, and action prediction in a unified flow matching framework.

## 研究问题

First World Action Model to jointly model tactile deformation dynamics alongside visual and action prediction. Introduces Asymmetric MoT Attention (visual anchor + temporal tactile) and contact-gated AVTAG hinge ranking loss. Extends WAM paradigm to tactile domain.

## 核心方法

First World Action Model to jointly model tactile deformation dynamics alongside visual and action prediction. Introduces Asymmetric MoT Attention (visual anchor + temporal tactile) and contact-gated AVTAG hinge ranking loss. Extends WAM paradigm to tactile domain.

## 实验与结果

Table/Results: 71.67% avg success across 6 real-world tasks, +26.67% over Fast-WAM, +35.84% over OmniVTLA. Comparisons vs 6 baselines (DP+Tactile, RDP, π0.5, OmniVTLA, Fast-WAM). Ablation studies on tactile dynamics modeling and AVTAG. Visual-tactile prediction visualization (Fig.5).

## 结论

Table/Results: 71.67% avg success across 6 real-world tasks, +26.67% over Fast-WAM, +35.84% over OmniVTLA. Comparisons vs 6 baselines (DP+Tactile, RDP, π0.5, OmniVTLA, Fast-WAM). Ablation studies on tactile dynamics modeling and AVTAG. Visual-tactile prediction visualization (Fig.5).

## 局限性与不确定性

1. 100 demos per task is limited data
2. Requires specialized Xense tactile sensors
3. Project page exists (vt-wam.github.io) but code not verified; HTTP verification timed out
4. Single real-world platform (xArm7) may limit generality claims

## 为什么值得关注

VT-WAM extends World Action Models to tactile domain by jointly learning future visual prediction, tactile deformation prediction, and action prediction in a unified flow matching framework. Asymmetric MoT Attention bridges visual anchor with temporal tactile dynamics; contact-gated AVTAG reduces visual-dominance bias. Achieves 71.67% on 6 real-world contact-rich tasks, +26.67% over Fast-WAM.

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
