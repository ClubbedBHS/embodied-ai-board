---
paper_id: arxiv-2608.26583
summary_version: "0.3"
language: zh
status: ai-draft
---

# SOLO: Stable Omni-terrain Long-Horizon Perceptive Humanoid Locomotion

> SOLO同时修复地形重建过度平滑和逐点蒸馏缺少时序信用两个问题；仿真压力测试97.5%，真机零样本连续行走1.5公里，并公开说明后视盲区与2.5D地形表示限制。

## 研究问题

Long-horizon perceptive humanoid locomotion on real terrain.

## 核心方法

Cell-query terrain reconstruction and trajectory-aware distillation target compounding perception/control errors.

## 实验与结果

Reconstruction baselines, curriculum ablations, stress tests and uninterrupted field deployments reviewed.

## 局限性与不确定性

1. 没有公开代码或训练资产
2. 仍由人提供平面速度指令，不是自主导航系统
3. 后向运动盲区、反光透明表面和多层地形仍受限制

## 为什么值得关注

SOLO同时修复地形重建过度平滑和逐点蒸馏缺少时序信用两个问题；仿真压力测试97.5%，真机零样本连续行走1.5公里，并公开说明后视盲区与2.5D地形表示限制。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 官方元数据核验
- [x] 方法、实验和结论或局限已通过 arXiv HTML 全文核验
- [x] 团队信息仅采用论文作者栏或官方项目页明确证据
- [x] 代码、数据和项目资产已区分可访问、占位、404 与未发现
- [ ] 中文摘要为 AI 初稿，关键数字仍建议编辑复核
