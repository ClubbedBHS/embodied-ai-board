---
paper_id: arxiv-2607.14021
summary_version: "0.3"
language: zh
status: ai-draft
---

# Industrial Dexterity Benchmark: A Hardware-Software Benchmarking Platform for Industrial Dexterous Manipulation

> 这项工作在其问题上提出明确增量：把开放硬件板、ROS 数据流水线、多模态 diffusion policy 和系统部署组合为工业级可重复 benchmark。 量化覆盖六种感知配置和 48 次/配置，但只完整评测三块板中的第一块、一个主任务。 最近邻为 arxiv-2403.03954 3D Diffusion Policy；IDB 新增工业硬件基准、力/点云多模态与部署栈，但算法验证范围更窄。

## 研究问题

把开放硬件板、ROS 数据流水线、多模态 diffusion policy 和系统部署组合为工业级可重复 benchmark。

## 核心方法

第 III–VII 节给出三块工业灵巧基准板、DAG-ROS 数据基础设施、融合 RGB/点云/关节/腕力的 AG-iDP3 与部署控制。

## 实验与结果

第 VIII 节在数据中心线缆任务上每配置 48 次；双 RGB 最佳总分 78%，单 RGB baseline 36%，具备 3D 上下文的抓取为 88%–98%。

## 结论

第 IX 节总结硬件—软件基准，并明确策略会对背景物体移除和线缆走向变化失效。

## 局限性与不确定性

1. 只对 IDB Board #1 做完整 head-to-head
2. 背景微变即失效，泛化结论弱于摘要措辞

## 为什么值得关注

这项工作在其问题上提出明确增量：把开放硬件板、ROS 数据流水线、多模态 diffusion policy 和系统部署组合为工业级可重复 benchmark。 量化覆盖六种感知配置和 48 次/配置，但只完整评测三块板中的第一块、一个主任务。 最近邻为 arxiv-2403.03954 3D Diffusion Policy；IDB 新增工业硬件基准、力/点云多模态与部署栈，但算法验证范围更窄。

与现有看板工作的关系：最近邻为 arxiv-2403.03954 3D Diffusion Policy；IDB 新增工业硬件基准、力/点云多模态与部署栈，但算法验证范围更窄。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
