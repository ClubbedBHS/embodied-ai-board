---
paper_id: arxiv-2608.24885
summary_version: "0.3"
language: zh
status: ai-draft
---

# Do Robotic World Models Really Follow Actions? Diagnosing and Aligning Action-Conditioned Generation for Policy Learning

> WorldEcho指出现有机器人世界模型在专家轨迹外会忽略动作或生成失真视频，WorldSync再针对这一诊断改进训练；它补上了WAM作为策略模拟器时长期缺失的动作服从评测。

## 研究问题

Evaluates whether robot world models obey commanded actions and whether that affects policy learning.

## 核心方法

WorldEcho exposes off-expert action-following failures; WorldSync targets coverage, representation grounding and intervention effects.

## 实验与结果

RoboTwin diagnosis, controlled ablations, iterative policy improvement and real-robot results reviewed.

## 局限性与不确定性

1. 未确认公开代码或评测套件
2. 开放世界、长时程和更多本体仍未覆盖
3. 部分提升依赖作者构造的完整性门控指标

## 为什么值得关注

WorldEcho指出现有机器人世界模型在专家轨迹外会忽略动作或生成失真视频，WorldSync再针对这一诊断改进训练；它补上了WAM作为策略模拟器时长期缺失的动作服从评测。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 官方元数据核验
- [x] 方法、实验和结论或局限已通过 arXiv HTML 全文核验
- [x] 团队信息仅采用论文作者栏或官方项目页明确证据
- [x] 代码、数据和项目资产已区分可访问、占位、404 与未发现
- [ ] 中文摘要为 AI 初稿，关键数字仍建议编辑复核
