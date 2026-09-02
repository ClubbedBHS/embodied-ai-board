---
paper_id: arxiv-2608.25864
summary_version: "0.3"
language: zh
status: ai-draft
---

# MA-VLA: Multi-Arm Vision-Language-Action Model for Collaboration and Compositional Generalization

> MA-VLA用臂级原子指令和Arm Shuffle显式建模多臂协作的组合泛化，并开放2–4臂训练与部署代码；它补充了看板中单臂VLA占主导的结构性空白。

## 研究问题

VLA policy for coordinated multi-arm manipulation.

## 核心方法

Explicit arm-specific atomic prompt assignment plus role shuffling targets unseen compositions of known skills.

## 实验与结果

RoboFactory, RoboTwin, ablations and real dual-SO101 evaluation reviewed.

## 局限性与不确定性

1. 未见组合任务上的绝对成功率仍不高，论文表中MA-VLA为15.3%
2. 仓库README仍有占位克隆地址和未完成引用信息
3. 高层VLM分解错误会传递给执行器

## 为什么值得关注

MA-VLA用臂级原子指令和Arm Shuffle显式建模多臂协作的组合泛化，并开放2–4臂训练与部署代码；它补充了看板中单臂VLA占主导的结构性空白。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 官方元数据核验
- [x] 方法、实验和结论或局限已通过 arXiv HTML 全文核验
- [x] 团队信息仅采用论文作者栏或官方项目页明确证据
- [x] 代码、数据和项目资产已区分可访问、占位、404 与未发现
- [ ] 中文摘要为 AI 初稿，关键数字仍建议编辑复核
