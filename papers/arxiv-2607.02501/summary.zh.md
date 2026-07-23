---
paper_id: arxiv-2607.02501
summary_version: "0.3"
language: zh
status: ai-draft
---

# Embodied.cpp: A Portable Inference Runtime of Embodied AI Models on Heterogeneous Robots

> 这项工作在其问题上提出明确增量：提供面向闭环、多速率、batch-1 和异构 edge 的统一 C++ embodied inference contract，而非通用 request-response serving。

## 研究问题

提供面向闭环、多速率、batch-1 和异构 edge 的统一 C++ embodied inference contract，而非通用 request-response serving。

## 核心方法

第 3 节将 VLA/WAM 执行路径分成输入适配、序列构建、backbone、head plugin、部署适配五层，并实现多速率 C++ runtime。

## 实验与结果

第 4 节在 HY-VLA、π0.5 和 LingBot-VA block 上评测；闭环成功率 100.0%/91.0%，WAM block 内存从 312.2 MiB 降到 88.1 MiB。

## 结论

第 5 节指出统一 runtime 在异构设备保持任务精度并降低延迟/内存，但 WAM 仍是 preliminary block benchmark。

## 局限性与不确定性

1. WAM 仅 block 级初步基准
2. 支持模型数量仍少，跨更多机器人/加速器的可移植性需验证

## 为什么值得关注

这项工作在其问题上提出明确增量：提供面向闭环、多速率、batch-1 和异构 edge 的统一 C++ embodied inference contract，而非通用 request-response serving。 两类 VLA 的闭环任务与一个 WAM block 的效率结果支撑部署主张；WAM 端到端覆盖仍不足。 最近邻为 arxiv-2602.22818 LeRobot；LeRobot侧重训练/数据生态，Embodied.cpp补充生产部署期的 C++ 多速率异构推理。

与现有看板工作的关系：最近邻为 arxiv-2602.22818 LeRobot；LeRobot侧重训练/数据生态，Embodied.cpp补充生产部署期的 C++ 多速率异构推理。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
