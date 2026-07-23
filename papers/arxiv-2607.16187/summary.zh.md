---
paper_id: arxiv-2607.16187
summary_version: "0.3"
language: zh
status: ai-draft
---

# Handroid: Bridging Dexterous Hand and Humanoid

> 这项工作在其问题上提出明确增量：不是简单装配灵巧手，而是同一硬件在两种 morphology 间重构并共享学习/控制接口。 真实硬件证据多样，但定量主要集中于 10 物体抓取；其余 locomotion/切换多为定性演示。 当前看板缺少 morphology-reconfigurable 平台；相对 Isaac Lab 的通用仿真基础设施，Handroid提供真实双 embodiment 研究硬件。

## 研究问题

不是简单装配灵巧手，而是同一硬件在两种 morphology 间重构并共享学习/控制接口。

## 核心方法

第 3–4 节设计可重构 27-DoF、0.33 m/2.05 kg 平台及手/人形共享电气与控制栈，支持 teleoperation、IL、RL、keyframe。

## 实验与结果

第 5 节做 10 物体抓取（平均 72%）、实机 cube reorientation、humanoid motion 和切换 embodiment 的长程演示。

## 结论

第 6 节总结同一机电系统跨 dexterous hand/humanoid 的验证。

## 局限性与不确定性

1. 多数实验是定性 demo
2. 未确认硬件图纸/代码公开
3. 桌面尺度对全尺寸 humanoid 外推有限

## 为什么值得关注

这项工作在其问题上提出明确增量：不是简单装配灵巧手，而是同一硬件在两种 morphology 间重构并共享学习/控制接口。 真实硬件证据多样，但定量主要集中于 10 物体抓取；其余 locomotion/切换多为定性演示。 当前看板缺少 morphology-reconfigurable 平台；相对 Isaac Lab 的通用仿真基础设施，Handroid提供真实双 embodiment 研究硬件。

与现有看板工作的关系：当前看板缺少 morphology-reconfigurable 平台；相对 Isaac Lab 的通用仿真基础设施，Handroid提供真实双 embodiment 研究硬件。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
