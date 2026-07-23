---
paper_id: arxiv-2607.02604
summary_version: "0.3"
language: zh
status: ai-draft
---

# DynaWM: A Base-VLA-Guided World Foundation Model for Moving-Object Manipulation

> 不重训基础VLA，而把其action chunk作为条件，用多视图短历史和flow-DiT重生成移动物体拦截轨迹。

## 研究问题

不重训基础VLA，而把其action chunk作为条件，用多视图短历史和flow-DiT重生成移动物体拦截轨迹。

## 核心方法

第3节给出Mamba-3 action encoder、V-JEPA视觉和conditional flow；第4节构建DynaGrasp-32/1600，覆盖4种VLA，并做视觉/动作条件消融：去action condition下降45.44%。

## 实验与结果

第3节给出Mamba-3 action encoder、V-JEPA视觉和conditional flow；第4节构建DynaGrasp-32/1600，覆盖4种VLA，并做视觉/动作条件消融：去action condition下降45.44%。

## 结论

第3节给出Mamba-3 action encoder、V-JEPA视觉和conditional flow；第4节构建DynaGrasp-32/1600，覆盖4种VLA，并做视觉/动作条件消融：去action condition下降45.44%。

## 局限性与不确定性

1. 数据集仅1,600 demonstrations/32场景
2. 无代码或资产核验
3. 百分比改善需区分相对/绝对

## 为什么值得关注

不重训基础VLA，而把其action chunk作为条件，用多视图短历史和flow-DiT重生成移动物体拦截轨迹。 第3节给出Mamba-3 action encoder、V-JEPA视觉和conditional flow；第4节构建DynaGrasp-32/1600，覆盖4种VLA，并做视觉/动作条件消融：去action condition下降45.44%。 相对EgoWAM/ABot，本工作专门把base-VLA action作为动态拦截world model的条件。

与现有看板工作的关系：相对EgoWAM/ABot，本工作专门把base-VLA action作为动态拦截world model的条件。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
