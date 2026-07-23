---
paper_id: arxiv-2607.12571
summary_version: "0.3"
language: zh
status: ai-draft
---

# TrustVLA: Mechanism-Guided Inference-Time Defense Against Vision-Language-Action Backdoors

> 工作在 VLA 模型后门攻击防御这一新兴安全问题上提出 TrustVLA，首次系统性地揭示了被攻击 VLA 中的紧凑因果足迹（compact causal footprint）机制，并基于 Dirichlet 证据框架设计了推理时防御：通过逐令牌逐层不确定性监测检测异常、反事实机制分数下降定位视觉触发器、局部修复恢复观察。在两个独立提出的攻击（BadVLA 和 INFUSE）上跨 OpenVLA/LIBERO 和 π0.5 验证，降低…

## 研究问题

First mechanism-guided inference-time defense for VLA backdoors; identifies compact causal footprint mechanism in poisoned VLAs; uses Dirichlet evidence framework adapted for per-token per-layer epistemic uncertainty monitoring in continuous action policies.

## 核心方法

First mechanism-guided inference-time defense for VLA backdoors; identifies compact causal footprint mechanism in poisoned VLAs; uses Dirichlet evidence framework adapted for per-token per-layer epistemic uncertainty monitoring in continuous action policies.

## 实验与结果

Experiments include main defense results (Sec 4.2) against BadVLA and INFUSE attacks, robustness and transfer evaluation (4.3), ablations and baselines (4.4), cross-attack verification in Appendix F, and physical-robot setup in Appendix B.

## 结论

Experiments include main defense results (Sec 4.2) against BadVLA and INFUSE attacks, robustness and transfer evaluation (4.3), ablations and baselines (4.4), cross-attack verification in Appendix F, and physical-robot setup in Appendix B.

## 局限性与不确定性

1. 防御仅针对视觉触发的后门攻击，对抗自适应攻击者的鲁棒性有限
2. 实际部署中的运行开销（per-token per-layer 监控）未充分量化
3. 校准集的质量和规模对防御效果的影响需进一步研究
4. VLA 安全领域仍处于早期阶段，攻击和防御的军备竞赛可能持续演化

## 为什么值得关注

工作在 VLA 模型后门攻击防御这一新兴安全问题上提出 TrustVLA，首次系统性地揭示了被攻击 VLA 中的紧凑因果足迹（compact causal footprint）机制，并基于 Dirichlet 证据框架设计了推理时防御：通过逐令牌逐层不确定性监测检测异常、反事实机制分数下降定位视觉触发器、局部修复恢复观察。在两个独立提出的攻击（BadVLA 和 INFUSE）上跨 OpenVLA/LIBERO 和 π0.5 验证，降低攻击成功率同时保持干净任务性能，提供免重训练的机制引导防御方案。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
