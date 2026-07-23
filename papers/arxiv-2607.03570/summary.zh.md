---
paper_id: arxiv-2607.03570
summary_version: "0.3"
language: zh
status: ai-draft
---

# Cross-Embodiment Robot Manipulation via a Unified Hand Action Space

> 这项工作在跨具身灵巧操作（cross-embodiment dexterous manipulation）问题上提出了一种基于球面几何的统一手部动作空间 UHAS，通过球面变形参数化和级联逆运动学（CIK）算法，将共享的动作表示映射到不同机器人手的关节配置。在 Allegro、LEAP、Shadow 和 MANO 四种手上通过强化学习训练灵巧的立方体重新定向策略，实验覆盖多手训练、零样本迁移、微调和真机部署（LEAP Hand）四个维…

## 研究问题

Novel sphere-based Unified Hand Action Space (UHAS) and Cascade Inverse Kinematics (CIK) algorithm for cross-embodiment dexterous manipulation, distinct from prior keypoint-based or joint-space methods.

## 核心方法

Novel sphere-based Unified Hand Action Space (UHAS) and Cascade Inverse Kinematics (CIK) algorithm for cross-embodiment dexterous manipulation, distinct from prior keypoint-based or joint-space methods.

## 实验与结果

Simulation results on 4 hands (Tables 1-3), multi-hand training, zero-shot transfer, finetuning, ablation studies, and real-world LEAP Hand deployment.

## 结论

Simulation results on 4 hands (Tables 1-3), multi-hand training, zero-shot transfer, finetuning, ablation studies, and real-world LEAP Hand deployment.

## 局限性与不确定性

1. 仅测试了正方体重新定向这一种任务，泛化到更多灵巧操作任务未验证
2. 4指到5指手的跨形态迁移存在性能退化
3. 对PD控制器参数和强化学习奖励设计敏感，调参成本高

## 为什么值得关注

这项工作在跨具身灵巧操作（cross-embodiment dexterous manipulation）问题上提出了一种基于球面几何的统一手部动作空间 UHAS，通过球面变形参数化和级联逆运动学（CIK）算法，将共享的动作表示映射到不同机器人手的关节配置。在 Allegro、LEAP、Shadow 和 MANO 四种手上通过强化学习训练灵巧的立方体重新定向策略，实验覆盖多手训练、零样本迁移、微调和真机部署（LEAP Hand）四个维度，证明了提出的统一表示能够实现跨具身的策略迁移。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
