---
paper_id: arxiv-2608.26103
summary_version: "0.3"
language: zh
status: ai-draft
---

# Zero-WAM: In-Context World-Action Modeling from Human Videos for Open-Ended Task Generalization

> Zero-WAM把人类视频变成部署时的任务上下文，而不是只作为预训练数据；七个未见任务平均成功率46.95%，较最强视频动作基线高29.50个百分点，并以HumanGen扩展到8.6K任务。

## 研究问题

Direct zero-shot robot manipulation from human video instructions.

## 核心方法

Introduces human-video in-context task specification, HumanGen with 74.2K pairs over 8.6K tasks, and an objective that forces use of the prompt.

## 实验与结果

Seven held-out RoboTwin tasks, task-level statistics, ablations and real-robot task families were checked.

## 局限性与不确定性

1. 代码、模型与HumanGen尚未真正发布
2. 真实实验集中在三个任务族，公开页面未给出与仿真同等完整的重复统计
3. 合成人类视频的语义与物理筛选依赖闭源生成模型

## 为什么值得关注

Zero-WAM把人类视频变成部署时的任务上下文，而不是只作为预训练数据；七个未见任务平均成功率46.95%，较最强视频动作基线高29.50个百分点，并以HumanGen扩展到8.6K任务。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 官方元数据核验
- [x] 方法、实验和结论或局限已通过 arXiv HTML 全文核验
- [x] 团队信息仅采用论文作者栏或官方项目页明确证据
- [x] 代码、数据和项目资产已区分可访问、占位、404 与未发现
- [ ] 中文摘要为 AI 初稿，关键数字仍建议编辑复核
