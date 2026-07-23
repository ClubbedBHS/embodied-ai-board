---
paper_id: arxiv-2607.06370
summary_version: "0.3"
language: zh
status: ai-draft
---

# Training-Free Acceleration for Vision-Language-Action Models with Action Caching and Refinement

> 这项工作在 VLA 推理加速问题上提出 ActionCache，一种免训练的即插即用外部缓存机制，通过存储和检索具有紧凑多模态键的中间动作来热启动流匹配去噪过程，在 π0.5 和 GR00T-N1.6 上分别实现 11.75× 和 34.43× 推理加速，同时保持高任务成功率。实验覆盖仿真（LIBERO）和真机，分析跨任务动作复用和检索质量影响，对 VLA 实时部署有明确的工程价值。

## 研究问题

Novel training-free plug-and-play ActionCache mechanism that opportunistically reuses past intermediate actions from similar multimodal contexts to warm-start flow-based VLA inference, achieving significant speedup.

## 核心方法

Novel training-free plug-and-play ActionCache mechanism that opportunistically reuses past intermediate actions from similar multimodal contexts to warm-start flow-based VLA inference, achieving significant speedup.

## 实验与结果

Multiple experiments: success rate vs latency evaluation (4.2), cross-task action reuse (4.3), retrieval quality impact (4.4), cache key source comparison (4.5), real-world evaluation (4.6), LIBERO benchmark results in Appendix B.

## 结论

Multiple experiments: success rate vs latency evaluation (4.2), cross-task action reuse (4.3), retrieval quality impact (4.4), cache key source comparison (4.5), real-world evaluation (4.6), LIBERO benchmark results in Appendix B.

## 局限性与不确定性

1. 缓存命中率直接影响性能，在全新未见场景下加速效果可能下降
2. 仅针对流匹配型 VLA（π0.5、GR00T-N1.6），对其他架构的通用性未验证
3. 方法的实用性取决于缓存管理策略，长期部署的缓存增长问题未深入讨论

## 为什么值得关注

这项工作在 VLA 推理加速问题上提出 ActionCache，一种免训练的即插即用外部缓存机制，通过存储和检索具有紧凑多模态键的中间动作来热启动流匹配去噪过程，在 π0.5 和 GR00T-N1.6 上分别实现 11.75× 和 34.43× 推理加速，同时保持高任务成功率。实验覆盖仿真（LIBERO）和真机，分析跨任务动作复用和检索质量影响，对 VLA 实时部署有明确的工程价值。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
