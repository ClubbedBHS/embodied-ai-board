---
paper_id: arxiv-2607.17454
summary_version: "0.3"
language: zh
status: ai-draft
---

# Test-Time Scaling for World Action Models via Zero-Shot Geometric Evaluation

> 用冻结几何模型的跨视角深度重投影做WAM rollout selector，并以action-future一致性gate只在必要时增加采样。

## 研究问题

用冻结几何模型的跨视角深度重投影做WAM rollout selector，并以action-future一致性gate只在必要时增加采样。

## 核心方法

第3节给出GeoBoN/gate；第4节在RoboCasa、LIBERO Long、RoboTwin 2.0的5个benchmark-backbone设置均提高N=8成功，gate仅26.2%决策点触发且保留74.8%增益，并分析N增大退化。

## 实验与结果

第3节给出GeoBoN/gate；第4节在RoboCasa、LIBERO Long、RoboTwin 2.0的5个benchmark-backbone设置均提高N=8成功，gate仅26.2%决策点触发且保留74.8%增益，并分析N增大退化。

## 结论

第3节给出GeoBoN/gate；第4节在RoboCasa、LIBERO Long、RoboTwin 2.0的5个benchmark-backbone设置均提高N=8成功，gate仅26.2%决策点触发且保留74.8%增益，并分析N增大退化。

## 局限性与不确定性

1. 绝对成功增益约1.7–2.1点，计算成本仍高
2. 依赖多视角深度与冻结几何模型
3. 无核验代码

## 为什么值得关注

用冻结几何模型的跨视角深度重投影做WAM rollout selector，并以action-future一致性gate只在必要时增加采样。 第3节给出GeoBoN/gate；第4节在RoboCasa、LIBERO Long、RoboTwin 2.0的5个benchmark-backbone设置均提高N=8成功，gate仅26.2%决策点触发且保留74.8%增益，并分析N增大退化。 相对EgoWAM/FlowWAM的训练贡献，该工作提供training-free selective test-time scaling和失败分析。

与现有看板工作的关系：相对EgoWAM/FlowWAM的训练贡献，该工作提供training-free selective test-time scaling和失败分析。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
