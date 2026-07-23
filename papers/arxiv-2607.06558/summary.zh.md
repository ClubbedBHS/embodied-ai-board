---
paper_id: arxiv-2607.06558
summary_version: "0.3"
language: zh
status: ai-draft
---

# RynnWorld-Teleop: An Action-Conditioned World Model for Digital Teleoperation

> 提出 digital teleoperation：操作员驱动 action-conditioned world model 生成可迁移的机器人中心视频/动作轨迹，解耦硬件采集。

## 研究问题

提出 digital teleoperation：操作员驱动 action-conditioned world model 生成可迁移的机器人中心视频/动作轨迹，解耦硬件采集。

## 核心方法

第3–4节给出深度骨架条件、progressive cross-domain training、单步autoregressive distillation和数据引擎；第5节评测40+FPS、世界模型、消融、纯生成数据的zero-shot Sim2Real及混合数据增益。

## 实验与结果

第3–4节给出深度骨架条件、progressive cross-domain training、单步autoregressive distillation和数据引擎；第5节评测40+FPS、世界模型、消融、纯生成数据的zero-shot Sim2Real及混合数据增益。

## 结论

第3–4节给出深度骨架条件、progressive cross-domain training、单步autoregressive distillation和数据引擎；第5节评测40+FPS、世界模型、消融、纯生成数据的zero-shot Sim2Real及混合数据增益。

## 局限性与不确定性

1. 40+FPS依赖单张H100
2. 项目/模型入口本次网络探测失败
3. 生成偏差的安全性与长期闭环未充分验证

## 为什么值得关注

提出 digital teleoperation：操作员驱动 action-conditioned world model 生成可迁移的机器人中心视频/动作轨迹，解耦硬件采集。 第3–4节给出深度骨架条件、progressive cross-domain training、单步autoregressive distillation和数据引擎；第5节评测40+FPS、世界模型、消融、纯生成数据的zero-shot Sim2Real及混合数据增益。 相对 SimFoundry/RoboSnap，RynnWorld-Teleop新增人在生成世界中实时遥操作并产出 embodiment-agnostic action labels。

与现有看板工作的关系：相对 SimFoundry/RoboSnap，RynnWorld-Teleop新增人在生成世界中实时遥操作并产出 embodiment-agnostic action labels。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
