---
paper_id: arxiv-2607.04554
summary_version: "0.3"
language: zh
status: ai-draft
---

# HUGS: Guiding Unified Dexterous Grasp Synthesis Across Modes and Scales via Learned Human Priors

> 这项工作在灵巧抓取合成（dexterous grasp synthesis）问题上提出 HUGS 框架，通过从紧凑的自采集人类抓取数据集（304物体/1.8K抓取）学习对象条件的人类先验（接触模式和手腕姿态），引导下游力封闭优化。合成了 3.2M 跨尺度（2cm-30cm 物体半对角线）和跨模式（从双指到双手）的机器人抓取数据，并在 LEAP 真手上展示从螺丝到大箱子的自主模式选择抓取。与启发式方法相比，显著提升了接触模式覆盖率和合成…

## 研究问题

Novel human-prior-guided grasp synthesis framework that learns object-conditioned contact mode and wrist pose priors from a compact self-collected human grasp dataset (HUGS-Human, 1.8K grasps), instead of direct retargeting or heuristic initialization.

## 核心方法

Novel human-prior-guided grasp synthesis framework that learns object-conditioned contact mode and wrist pose priors from a compact self-collected human grasp dataset (HUGS-Human, 1.8K grasps), instead of direct retargeting or heuristic initialization.

## 实验与结果

Experiments include contact-mode prediction (Fig 4), synthesis success rate across scales (Fig 5), grasp generator distillation (Fig 6), real-world 24-object cross-scale grasping (Fig 7), ablation of bimanual FC objective, and LEAP Hand supplementary results.

## 结论

Experiments include contact-mode prediction (Fig 4), synthesis success rate across scales (Fig 5), grasp generator distillation (Fig 6), real-world 24-object cross-scale grasping (Fig 7), ablation of bimanual FC objective, and LEAP Hand supplementary results.

## 局限性与不确定性

1. 人类数据集仅304个对象/1.8K抓取，远超出分布的对象可能效果下降
2. 在线抓取生成仍为初步阶段，对不规则几何物体可靠性不足
3. 仅覆盖4种接触模式，无法穷尽人类抓取行为谱系
4. 真机部署对校准、分割和深度重建误差敏感

## 为什么值得关注

这项工作在灵巧抓取合成（dexterous grasp synthesis）问题上提出 HUGS 框架，通过从紧凑的自采集人类抓取数据集（304物体/1.8K抓取）学习对象条件的人类先验（接触模式和手腕姿态），引导下游力封闭优化。合成了 3.2M 跨尺度（2cm-30cm 物体半对角线）和跨模式（从双指到双手）的机器人抓取数据，并在 LEAP 真手上展示从螺丝到大箱子的自主模式选择抓取。与启发式方法相比，显著提升了接触模式覆盖率和合成成功率。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
