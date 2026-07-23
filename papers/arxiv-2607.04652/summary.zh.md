---
paper_id: arxiv-2607.04652
summary_version: "0.3"
language: zh
status: ai-draft
---

# KAM-WM: Kinematic Affordance Maps from Latent World Models for Robot Manipulation

> KAM-WM extracts a task-conditioned Kinematic Affordance Map from a frozen Flow Matching video backbone in a single forward pass (no future-frame rollout) and uses it to condition a diffusion policy.

## 研究问题

Novel use of frozen Flow Matching video backbone's single-step latent velocity as Kinematic Affordance Map (KAM) for manipulation policy conditioning. Unlike prior work that generates future frames or fine-tunes video models, KAM-WM queries once with no rollout. Lightweight Perceiver compresses KAM into dynamic tokens.

## 核心方法

Novel use of frozen Flow Matching video backbone's single-step latent velocity as Kinematic Affordance Map (KAM) for manipulation policy conditioning. Unlike prior work that generates future frames or fine-tunes video models, KAM-WM queries once with no rollout. Lightweight Perceiver compresses KAM into dynamic tokens.

## 实验与结果

Sec.4.2: LIBERO results (90.6% avg across 4 suites). Sec.4.3: RoboTwin 2.0 results (65.7% Easy, 22.4% Hard). Sec.4.4: Ablations on prior type (mask vs KAM), extraction timestep, low-data regime. Sec.4.5: Efficiency analysis (inference and parameter). Controlled comparison vs zero-order mask prior.

## 结论

Sec.4.2: LIBERO results (90.6% avg across 4 suites). Sec.4.3: RoboTwin 2.0 results (65.7% Easy, 22.4% Hard). Sec.4.4: Ablations on prior type (mask vs KAM), extraction timestep, low-data regime. Sec.4.5: Efficiency analysis (inference and parameter). Controlled comparison vs zero-order mask prior.

## 局限性与不确定性

1. Simulation-only evaluation; no real-world validation (only qualitative sanity check)
2. Single-run success rates without confidence intervals
3. KAM extracted once per episode from first frame; goes stale under long horizons or scene changes
4. No code or project page URL found
5. KAM tied to Flow Matching parameterization; unclear if generalizable to other video model families

## 为什么值得关注

KAM-WM extracts a task-conditioned Kinematic Affordance Map from a frozen Flow Matching video backbone in a single forward pass (no future-frame rollout) and uses it to condition a diffusion policy. Achieves 90.6% avg on LIBERO and 65.7% on RoboTwin 2.0 Easy. Provides an efficient alternative to video-model fine-tuning for manipulation priors.

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
