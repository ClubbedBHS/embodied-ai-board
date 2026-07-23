---
paper_id: arxiv-2607.13017
summary_version: "0.3"
language: zh
status: ai-draft
---

# FlowWAM: Optical Flow as a Unified Action Representation for World Action Models

> 这项工作在其问题上提出明确增量：光流既与视频生成器格式对齐，又保留跨帧稠密运动，可从无动作视频提取，统一 forward/inverse 用途。 仿真、世界模型指标、消融和单/双臂真实任务形成多层证据；项目页可见但本次未验证代码仓库。 最近邻为 EgoWAM；EgoWAM比较 pixel/DINO/3D flow 的人到机器人迁移，FlowWAM把 optical flow 变成同一 WAM 的可生成动作接口并评测双模式。

## 研究问题

光流既与视频生成器格式对齐，又保留跨帧稠密运动，可从无动作视频提取，统一 forward/inverse 用途。

## 核心方法

第 3 节用 RGB/光流双流 diffusion，把光流同时作为视频原生动作表示、policy mode 的动作中介和 world-model mode 的条件。

## 实验与结果

第 4 节覆盖 RoboTwin、WorldArena 和 7 个真实任务；RoboTwin Clean/Random 为 92.94%/92.14%，WorldArena EWMScore 63.71，轨迹准确率相对提升 18.4%。

## 结论

第 5 节总结 action-free video 可预训练的光流接口及双模式 WAM。

## 局限性与不确定性

1. 项目页本次网络探测失败
2. 光流对遮挡、相机运动和接触力不可观测性的敏感性需进一步核验

## 为什么值得关注

这项工作在其问题上提出明确增量：光流既与视频生成器格式对齐，又保留跨帧稠密运动，可从无动作视频提取，统一 forward/inverse 用途。 仿真、世界模型指标、消融和单/双臂真实任务形成多层证据；项目页可见但本次未验证代码仓库。 最近邻为 EgoWAM；EgoWAM比较 pixel/DINO/3D flow 的人到机器人迁移，FlowWAM把 optical flow 变成同一 WAM 的可生成动作接口并评测双模式。

与现有看板工作的关系：最近邻为 EgoWAM；EgoWAM比较 pixel/DINO/3D flow 的人到机器人迁移，FlowWAM把 optical flow 变成同一 WAM 的可生成动作接口并评测双模式。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
