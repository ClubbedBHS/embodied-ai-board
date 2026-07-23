---
paper_id: arxiv-2607.14739
summary_version: "0.3"
language: zh
status: ai-draft
---

# FoMoVLA: Bridging Visual Foresight and Motion Guidance for Vision-Language-Action Models

> FoMoVLA augments VLA representations with explicit spatio-temporal supervision by jointly learning future feature prediction (where to go) and sparse 2D point tracking (how to get there), coupled via future-conditioned…

## 研究问题

First to jointly learn future feature prediction and sparse 2D point tracking as auxiliary training-time supervision for VLA. Introduces Future-Conditioned Cross-Attention (FCCA) to couple foresight and motion guidance. Training-only, no inference overhead.

## 核心方法

First to jointly learn future feature prediction and sparse 2D point tracking as auxiliary training-time supervision for VLA. Introduces Future-Conditioned Cross-Attention (FCCA) to couple foresight and motion guidance. Training-only, no inference overhead.

## 实验与结果

Main experiments (Sec.4.2) on LIBERO 4 suites and RoboCasa GR-1 vs strong baselines (GR00T-N1.5, π0, WorldVLA, DreamVLA, FlowVLA, etc.). Ablation (Sec.4.3) on future conditioning, sparse supervision design, auxiliary task coupling. Scalability across frameworks (Sec.4.4).

## 结论

Main experiments (Sec.4.2) on LIBERO 4 suites and RoboCasa GR-1 vs strong baselines (GR00T-N1.5, π0, WorldVLA, DreamVLA, FlowVLA, etc.). Ablation (Sec.4.3) on future conditioning, sparse supervision design, auxiliary task coupling. Scalability across frameworks (Sec.4.4).

## 局限性与不确定性

1. Project page (liauto-research.github.io/FoMoVLA) exists but no verified code release
2. 2D point tracking may not capture 3D geometry (acknowledged limitation)
3. Built on StarVLA-GR00T backbone; gains may be backbone-specific

## 为什么值得关注

FoMoVLA augments VLA representations with explicit spatio-temporal supervision by jointly learning future feature prediction (where to go) and sparse 2D point tracking (how to get there), coupled via future-conditioned cross-attention. Training-only auxiliary losses add zero inference overhead. Strong results across LIBERO, RoboCasa, and LIBERO-Plus with thorough ablation studies.

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
