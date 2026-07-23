---
paper_id: arxiv-2607.10172
summary_version: "0.3"
language: zh
status: ai-draft
---

# On the Efficiency of LoRA Fine-Tuning for Vision-Language-Action Models in Industrial Robotic Manipulation

> 这项工作在其问题上提出明确增量：不是提出新 VLA，而是对 π0 embodiment adaptation 的 rank、模块分配和 FFT 对照做系统实证。 四任务、rank sweep、冻结消融与显著性检验匹配主张；配套 UR5e 代码仓库当前可访问。 最近邻 π0 与 LeRobot；本工作新增 π0 工业适配的统计性 PEFT 指南和真实硬件资源账本。

## 研究问题

不是提出新 VLA，而是对 π0 embodiment adaptation 的 rank、模块分配和 FFT 对照做系统实证。

## 核心方法

第 3–4 节在 UR5e 四个精密装配任务上系统扫描 LoRA rank 8–256、分配策略、冻结组件和 FFT intrinsic rank。

## 实验与结果

第 5 节做统计比较：某些 LoRA 与 FFT 无显著差异，性能在 r=32 饱和；静态参数+优化器 VRAM 36.2→10.8 GiB（不含 activation）。

## 结论

第 6–7 节指出 VLM 与 vision encoder 都需 plasticity，并明确样本/任务/显存口径限制。

## 局限性与不确定性

1. 只研究 π0 和 UR5e 四任务
2. 显存数字排除 activation，不能等同训练总峰值
3. LoRA 结论可能不泛化到其他 VLA

## 为什么值得关注

这项工作在其问题上提出明确增量：不是提出新 VLA，而是对 π0 embodiment adaptation 的 rank、模块分配和 FFT 对照做系统实证。 四任务、rank sweep、冻结消融与显著性检验匹配主张；配套 UR5e 代码仓库当前可访问。 最近邻 π0 与 LeRobot；本工作新增 π0 工业适配的统计性 PEFT 指南和真实硬件资源账本。

与现有看板工作的关系：最近邻 π0 与 LeRobot；本工作新增 π0 工业适配的统计性 PEFT 指南和真实硬件资源账本。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
