---
paper_id: arxiv-2607.04880
summary_version: "0.3"
language: zh
status: ai-draft
---

# PRISM: Personalized Robotic Dataset Generation via Image-based Scene and Motion Synthesis

> PRISM generates personalized robotic datasets from a single environment image and natural-language instruction by constructing digital cousin scenes and synthesizing executable demonstrations via TAMP.

## 研究问题

End-to-end pipeline generating personalized robotic datasets from a single image + instruction. Key innovations: (1) digital cousin scenes (semantically/geometrically aligned but diverse at instance level), (2) motion-aware grasp selection for executable demos, (3) trajectory-preserving visual randomization. Unlike RoboTwin 2.0 (exact digital twins) and X-Sim (RL-based trajectory generation).

## 核心方法

End-to-end pipeline generating personalized robotic datasets from a single image + instruction. Key innovations: (1) digital cousin scenes (semantically/geometrically aligned but diverse at instance level), (2) motion-aware grasp selection for executable demos, (3) trajectory-preserving visual randomization. Unlike RoboTwin 2.0 (exact digital twins) and X-Sim (RL-based trajectory generation).

## 实验与结果

Table 1: Sim-to-sim comparison (π0.5 and DP) vs RoboTwin 2.0 and X-Sim on LIBERO/LIBERO-Plus. Fig.4: Real-to-sim-to-real results. Sec.4.3-4.6: Ablations on digital cousin, motion-aware grasp, trajectory-preserving randomization, pipeline efficiency.

## 结论

Table 1: Sim-to-sim comparison (π0.5 and DP) vs RoboTwin 2.0 and X-Sim on LIBERO/LIBERO-Plus. Fig.4: Real-to-sim-to-real results. Sec.4.3-4.6: Ablations on digital cousin, motion-aware grasp, trajectory-preserving randomization, pipeline efficiency.

## 局限性与不确定性

1. No code or project page URL found
2. Pipeline requires VLM-based reasoning at multiple stages; quality depends on VLM reliability
3. Digital cousin approach may not capture all physical properties (e.g., friction, mass) of real objects
4. Evaluated on tabletop pick-and-place; complex dexterous tasks untested

## 为什么值得关注

PRISM generates personalized robotic datasets from a single environment image and natural-language instruction by constructing digital cousin scenes and synthesizing executable demonstrations via TAMP. Policies trained on PRISM datasets outperform those trained on RoboTwin 2.0 and X-Sim data on LIBERO and LIBERO-Plus, with successful real-to-sim-to-real transfer.

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
