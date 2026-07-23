---
paper_id: arxiv-2607.12356
summary_version: "0.3"
language: zh
status: ai-draft
---

# VistaVLA: Geometry- and Semantic-Aware 3D Gaussian-Grounded VLA for Robotic Manipulation

> VistaVLA在VLA空间认知上提出明确增量：将3D语义高斯场作为VLA策略的空间认知接口，并通过MtQ实现99% token压缩以高效注入策略。7个真实任务+空间扰动测试+仿真实验提供多维度证据，显著超越VLA-Adapter基线(22.8%)和通用VLA(π0.5)。相较看板中已有的3D增强VLA(如batch-02的See like a Robot/Robot-Centric Pointmaps和GeoVLA相关方向)，新增信…

## 研究问题

首次将3D高斯语义场(geometry+semantics-aware Gaussian primitives)作为VLA策略的空间认知接口，并提出Merge-then-Query(MtQ)实现99% token压缩。区别于仅注入深度/点云的方法，提供多视图一致的语义-几何3D表示。

## 核心方法

S3.1: 两阶段高斯特征渲染—先用SigLIP2+DINOv2-Large构建压缩教师特征空间(2176→128维)，再通过RGB-D监督+特征蒸馏训练语义高斯场。S3.2: Merge-then-Query(MtQ)模块—先聚类合并空间相邻高斯原语，再用可学习查询交叉注意力提取紧凑场景token(99%压缩)。S4.1: 7真实任务(PlaceSponge/StackBoxes/StackBowls/PlacePlate/OrganizeSponge/ThrowTrash/Wand&Cup)，VistaVLA平均最佳(Fig 4)，VLA-Adapter+22.8%，Depth增强仅小幅改善。空间扰动测试(Table 1)。S4.2: SIMPLER仿真。S4.3: 消融验证GS认知表示和MtQ

## 实验与结果

S3.1: 两阶段高斯特征渲染—先用SigLIP2+DINOv2-Large构建压缩教师特征空间(2176→128维)，再通过RGB-D监督+特征蒸馏训练语义高斯场。S3.2: Merge-then-Query(MtQ)模块—先聚类合并空间相邻高斯原语，再用可学习查询交叉注意力提取紧凑场景token(99%压缩)。S4.1: 7真实任务(PlaceSponge/StackBoxes/StackBowls/PlacePlate/OrganizeSponge/ThrowTrash/Wand&Cup)，VistaVLA平均最佳(Fig 4)，VLA-Adapter+22.8%，Depth增强仅小幅改善。空间扰动测试(Table 1)。S4.2: SIMPLER仿真。S4.3: 消融验证GS认知表示和MtQ

## 结论

S4.1: 7个真实世界操控任务，VistaVLA vs VLA-Adapter/VLA-Adapter+Depth/π0.5/SmolVLA，22.8%平均提升(Fig 4)。S4.1(Table 1): 空间扰动稳健性。S4.2: 仿真实验(SIMPLER)。S4.3: 消融实验。

## 局限性与不确定性

1. 代码/数据/权重仓库未探测到HTTP 200可访问资产
2. 依赖标定多视图相机构建高斯场，无标定场景适用性未验证(S5明确讨论)
3. 7个任务均为桌面操控，未覆盖更大工作空间或动态遮挡
4. 与VLA-Adapter+Depth比较中，depth增强仅带来有限提升，但可能存在depth集成方式的优化空间
5. MtQ压缩的信息损失未在操控精度维度上充分量化

## 为什么值得关注

VistaVLA在VLA空间认知上提出明确增量：将3D语义高斯场作为VLA策略的空间认知接口，并通过MtQ实现99% token压缩以高效注入策略。7个真实任务+空间扰动测试+仿真实验提供多维度证据，显著超越VLA-Adapter基线(22.8%)和通用VLA(π0.5)。相较看板中已有的3D增强VLA(如batch-02的See like a Robot/Robot-Centric Pointmaps和GeoVLA相关方向)，新增信息是语义高斯原语+MtQ压缩的多视图一致3D语义-几何表示，而非仅点云/深度注入。主要风险：资产未公开验证；表1结果依赖标定多视图相机；7个任务均为桌面操控。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
