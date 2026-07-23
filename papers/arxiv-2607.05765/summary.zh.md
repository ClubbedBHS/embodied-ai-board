---
paper_id: arxiv-2607.05765
summary_version: "0.3"
language: zh
status: ai-draft
---

# Image2Sim: Scaling Embodied Navigation via Generative Neural Simulator

> 这项工作在其问题上提出明确增量：把真实扫描的视觉真实性与 synthetic simulator 的规模结合成从图像到实时交互/数据生成的一体化 neural simulator。

## 研究问题

把真实扫描的视觉真实性与 synthetic simulator 的规模结合成从图像到实时交互/数据生成的一体化 neural simulator。

## 核心方法

第 3 节从 posed RGB-D 一次构建 feature Gaussians，用 geometry-aware one-step pixel-flow renderer 生成可交互全景 RGB-D，并自动生成动作/指令。

## 实验与结果

第 4 节测 novel-view rendering、cross-simulator zero-shot、数据 scaling、消融和真实导航；构建近 20K 场景、超过 10M 训练样本。

## 结论

第 5 节总结 neural simulator 作为大规模导航训练 substrate，并列出场景动态性等限制。

## 局限性与不确定性

1. 以导航为主，操控/接触物理未验证
2. 静态场景和渲染误差可能限制动态交互

## 为什么值得关注

这项工作在其问题上提出明确增量：把真实扫描的视觉真实性与 synthetic simulator 的规模结合成从图像到实时交互/数据生成的一体化 neural simulator。 渲染、跨 simulator、scaling 和真实 zero-shot 形成强证据链；代码仓库当前可访问。 最近邻 SimFoundry；SimFoundry自动生成模块化场景，Image2Sim从真实 RGB-D 生成 neural interactive scenes 并给出 10M 导航样本与实机迁移。

与现有看板工作的关系：最近邻 SimFoundry；SimFoundry自动生成模块化场景，Image2Sim从真实 RGB-D 生成 neural interactive scenes 并给出 10M 导航样本与实机迁移。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
