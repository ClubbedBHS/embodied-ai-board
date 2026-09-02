---
paper_id: arxiv-2608.23831
summary_version: "0.3"
language: zh
status: ai-draft
---

# Learning to Act While Waiting: RL Finetuning of Generalist Robot Policies Under Inference Latency

> ARLI把VLA推理延迟视为RL状态定义问题，通过已承诺动作和推理中途观测恢复近似Markov结构；在标准RL因延迟完全失效的设置中仍能学习，并覆盖仿真与真机操作。

## 研究问题

RL finetuning of large robot policies under real inference latency.

## 核心方法

ARLI restores near-Markovian state using committed actions and a mid-inference observation during asynchronous policy execution.

## 实验与结果

Theory, simulated latency sweeps, real manipulation and ablations reviewed.

## 局限性与不确定性

1. 依赖可拆分VLM骨干与动作专家的策略结构
2. 沿用的DSRL在部分任务上本身可能难以学习
3. 未确认公开实现

## 为什么值得关注

ARLI把VLA推理延迟视为RL状态定义问题，通过已承诺动作和推理中途观测恢复近似Markov结构；在标准RL因延迟完全失效的设置中仍能学习，并覆盖仿真与真机操作。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 官方元数据核验
- [x] 方法、实验和结论或局限已通过 arXiv HTML 全文核验
- [x] 团队信息仅采用论文作者栏或官方项目页明确证据
- [x] 代码、数据和项目资产已区分可访问、占位、404 与未发现
- [ ] 中文摘要为 AI 初稿，关键数字仍建议编辑复核
