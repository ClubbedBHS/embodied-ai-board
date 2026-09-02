---
paper_id: arxiv-2608.26821
summary_version: "0.3"
language: zh
status: ai-draft
---

# TemporalFlow-VLA: Learning Physically Grounded Execution History for Long-Horizon Robot Manipulation

> TemporalFlow-VLA不简单堆历史帧，而用训练期机器人表面时序流监督两个执行历史查询；LIBERO平均97.63%，RoboTwin 12任务为85.5/84.2%，且部署延迟维持单帧编码水平。

## 研究问题

Long-horizon VLA manipulation with execution-history supervision.

## 核心方法

Training-only robot-surface temporal flow supervises compact ordered-history queries without deployment-time geometry.

## 实验与结果

LIBERO, RoboTwin, temporal interventions, latency and real-robot sections reviewed.

## 局限性与不确定性

1. 未确认代码或项目页
2. 核心增益仍主要来自标准仿真基准，真机统计规模有限
3. 训练需要机器人几何和相机标定，数据管线成本较高

## 为什么值得关注

TemporalFlow-VLA不简单堆历史帧，而用训练期机器人表面时序流监督两个执行历史查询；LIBERO平均97.63%，RoboTwin 12任务为85.5/84.2%，且部署延迟维持单帧编码水平。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 官方元数据核验
- [x] 方法、实验和结论或局限已通过 arXiv HTML 全文核验
- [x] 团队信息仅采用论文作者栏或官方项目页明确证据
- [x] 代码、数据和项目资产已区分可访问、占位、404 与未发现
- [ ] 中文摘要为 AI 初稿，关键数字仍建议编辑复核
