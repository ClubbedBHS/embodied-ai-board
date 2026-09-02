---
paper_id: arxiv-2608.25659
summary_version: "0.3"
language: zh
status: ai-draft
---

# GaussianDream++: Efficient 3D Gaussian World Modeling for Robotic Manipulation

> GaussianDream++把训练期3D高斯世界监督压缩为20个策略内token，部署时移除重建与渲染路径；LIBERO 98.6%、LIBERO-Plus 87.8%，真机平均成功率从复现的π0.5的29.2%升至52.5%。

## 研究问题

3D world supervision for closed-loop robot manipulation.

## 核心方法

Compresses Gaussian state and future prediction into 20 policy-native tokens and removes training-only geometry heads at inference.

## 实验与结果

LIBERO, LIBERO-Plus, shift robustness, latency and real-robot experiments reviewed.

## 局限性与不确定性

1. 现有仓库明确覆盖GaussianDream，但尚未确认++版本核心实现
2. 真机任务仍是桌面操作，跨平台结论有限

## 为什么值得关注

GaussianDream++把训练期3D高斯世界监督压缩为20个策略内token，部署时移除重建与渲染路径；LIBERO 98.6%、LIBERO-Plus 87.8%，真机平均成功率从复现的π0.5的29.2%升至52.5%。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 官方元数据核验
- [x] 方法、实验和结论或局限已通过 arXiv HTML 全文核验
- [x] 团队信息仅采用论文作者栏或官方项目页明确证据
- [x] 代码、数据和项目资产已区分可访问、占位、404 与未发现
- [ ] 中文摘要为 AI 初稿，关键数字仍建议编辑复核
