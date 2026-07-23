---
paper_id: arxiv-2607.04927
summary_version: "0.3"
language: zh
status: ai-draft
---

# DSWAM: A Dual-System World Action Foundation Model for Fine-Grained Robot Manipulation

> 这项工作在其问题上提出明确增量：在严格匹配条件下比较 WAM/VLA，并只在任务需要时启用语言 planner，避免所有控制都走慢推理。 仿真、匹配实机和部署性能均覆盖，但只有项目页，当前未核验代码/权重。 最近邻为 EgoWAM 和 ReSteer；DSWAM新增 matched WAM-VLA 实机对照及可选双系统分解。

## 研究问题

在严格匹配条件下比较 WAM/VLA，并只在任务需要时启用语言 planner，避免所有控制都走慢推理。

## 核心方法

第 3 节设计可选 System-2 VLM 子任务规划器与默认 System-1 WAM executor，并用 TensorRT、异步执行和 RTC 做实时部署。

## 实验与结果

第 4 节覆盖 RoboTwin 2.0、匹配 DeMaVLA 真实折叠、System-2 sorting 与效率测量；WAM/VLA 使用匹配平台、预训练/后训练数据和评测协议。

## 结论

第 5 节总结细粒度执行与按需语言分解的双系统权衡。

## 局限性与不确定性

1. 项目页本次探测失败
2. 真实对比集中于 deformable folding
3. System-2 收益对任务分解标注依赖较强

## 为什么值得关注

这项工作在其问题上提出明确增量：在严格匹配条件下比较 WAM/VLA，并只在任务需要时启用语言 planner，避免所有控制都走慢推理。 仿真、匹配实机和部署性能均覆盖，但只有项目页，当前未核验代码/权重。 最近邻为 EgoWAM 和 ReSteer；DSWAM新增 matched WAM-VLA 实机对照及可选双系统分解。

与现有看板工作的关系：最近邻为 EgoWAM 和 ReSteer；DSWAM新增 matched WAM-VLA 实机对照及可选双系统分解。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
