---
paper_id: arxiv-2608.27550
summary_version: "0.3"
language: zh
status: ai-draft
---

# Beyond Data Scaling: Representation-Centric Continued Pre-training for Vision-Language-Action Models

> VLAct强调VLA提升不只来自数据量，而来自保持视觉语言能力并引入多动作头监督的表示中心继续预训练；它在LIBERO、RoboTwin和未见RoboCasa GR1上都给出强结果，且训练只用公开数据和16张GPU。

## 研究问题

VLA继续预训练如何在跨本体扩展动作能力时保留原有视觉语言表征。

## 核心方法

使用公开机器人数据进行表示中心的继续预训练，以多种动作头监督共享骨干，同时约束VLM能力不退化。

## 实验与结果

报告LIBERO 82.6、RoboTwin 92.5，并在未见RoboCasa GR1上以20%数据超过使用全量数据的GR00T N1.6。

## 局限性与不确定性

1. 当前只验证4B级骨干，规模规律尚不明确
2. 未找到官方代码或训练权重
3. 论文HTML未提供可可靠规范化的机构信息，因此团队暂不猜测

## 为什么值得关注

VLAct强调VLA提升不只来自数据量，而来自保持视觉语言能力并引入多动作头监督的表示中心继续预训练；它在LIBERO、RoboTwin和未见RoboCasa GR1上都给出强结果，且训练只用公开数据和16张GPU。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 官方元数据核验
- [x] 方法、实验和结论或局限已通过 arXiv HTML 全文核验
- [x] 团队信息仅采用论文作者栏或官方项目页明确证据
- [x] 代码、数据和项目资产已区分可访问、占位、404 与未发现
- [ ] 中文摘要为 AI 初稿，关键数字仍建议编辑复核
