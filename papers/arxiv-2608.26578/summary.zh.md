---
paper_id: arxiv-2608.26578
summary_version: "0.3"
language: zh
status: ai-draft
---

# TrapVLA: Trapping Vision-Language-Action Models in Configured Failure Modes

> TrapVLA把VLA后门从“让任务失败”推进到“精确控制如何失败”，并给出四类故障、两个基准和自动评测；对实际部署安全而言，这比普通触发式攻击更难察觉也更有警示价值。

## 研究问题

Backdoor safety evaluation for robot VLA policies.

## 核心方法

Defines controllable configured-failure attacks rather than arbitrary failure, with two benchmarks and an automated fidelity metric.

## 实验与结果

Trap-LIBERO, Trap-RoboTwin, clean-performance, detection and real-robot demonstrations reviewed.

## 局限性与不确定性

1. 论文展示的是攻击能力而非防御方案
2. 尚未确认代码和基准资产公开
3. 真机部分以演示为主，统计强度低于仿真

## 为什么值得关注

TrapVLA把VLA后门从“让任务失败”推进到“精确控制如何失败”，并给出四类故障、两个基准和自动评测；对实际部署安全而言，这比普通触发式攻击更难察觉也更有警示价值。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 官方元数据核验
- [x] 方法、实验和结论或局限已通过 arXiv HTML 全文核验
- [x] 团队信息仅采用论文作者栏或官方项目页明确证据
- [x] 代码、数据和项目资产已区分可访问、占位、404 与未发现
- [ ] 中文摘要为 AI 初稿，关键数字仍建议编辑复核
