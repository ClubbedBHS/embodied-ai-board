---
paper_id: arxiv-2607.13033
summary_version: "0.3"
language: zh
status: ai-draft
---

# DenseReward: Dense Reward Learning via Failure Synthesis for Robotic Manipulation

> DenseReward addresses the critical gap of dense reward signals for robotic RL by synthesizing failure trajectories via phase-decomposed perturbations and training a VLM-based dense reward model.

## 研究问题

Introduces (1) automated failure data generation via phase decomposition and targeted perturbations, (2) dense frame-level reward prediction from VLM, unlike prior sparse trajectory-level models (RoboReward, Robometer).

## 核心方法

Introduces (1) automated failure data generation via phase decomposition and targeted perturbations, (2) dense frame-level reward prediction from VLM, unlike prior sparse trajectory-level models (RoboReward, Robometer).

## 实验与结果

Table 1: MAE comparison vs 7 baselines across 4 data sources. Table 2: MPC evaluation. Fig.5: PPO RL on LIBERO (3 suites). Fig.6: Real-world DSRL on 2 tasks (stack cups: 40%→80%, put ball: 30%→70%). Ablations (Tables 3-4) on failure data and history frames.

## 结论

Table 1: MAE comparison vs 7 baselines across 4 data sources. Table 2: MPC evaluation. Fig.5: PPO RL on LIBERO (3 suites). Fig.6: Real-world DSRL on 2 tasks (stack cups: 40%→80%, put ball: 30%→70%). Ablations (Tables 3-4) on failure data and history frames.

## 局限性与不确定性

1. Single-run results without confidence intervals
2. Reward model may not generalize to novel manipulation tasks beyond training distribution
3. Project page (dense-reward.github.io) exists but HTTP 200 not verified; code release status pending

## 为什么值得关注

DenseReward addresses the critical gap of dense reward signals for robotic RL by synthesizing failure trajectories via phase-decomposed perturbations and training a VLM-based dense reward model. Compared to sparse trajectory-level reward models, it provides per-timestep progress feedback. Demonstrated effective in MPC and RL (PPO+π0 on LIBERO, DSRL+π0 on real-world Franka: 40%→80% and 30%→70%).

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
