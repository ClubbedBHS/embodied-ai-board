---
paper_id: arxiv-2607.03449
summary_version: "0.3"
language: zh
status: ai-draft
---

# HiMe: Hierarchical Embodied Memory for Long-Horizon Vision-Language-Action Control

> HiMe proposes a hierarchical embodied memory framework that decouples VLA control into Executor (high-frequency), Sentry (progress monitoring), and Planner (strategic reasoning) to resolve the frequency-competence parad…

## 研究问题

Novel hierarchical memory framework (Executor-Sentry-Planner) that resolves frequency-competence paradox. Introduces dynamic knowledge system with cross-modal semantic schemas and active memory management (Add/Update/Delete operations). Decouples real-time execution from slow reasoning.

## 核心方法

Novel hierarchical memory framework (Executor-Sentry-Planner) that resolves frequency-competence paradox. Introduces dynamic knowledge system with cross-modal semantic schemas and active memory management (Add/Update/Delete operations). Decouples real-time execution from slow reasoning.

## 实验与结果

Sec.4: Main experiments on 3 custom long-horizon tasks (Object Search, Counting, Rearrangement) with 90% avg success rate. Sec.4.3-4.4: Analysis of Sentry mechanism and Planner memory management. Sec.5: Further analysis including memory representation type, dynamic management necessity, latency, and sentry behavior. Sec.9: Additional experiments on memory ablation, open-source planner, scalability, latency.

## 结论

Sec.4: Main experiments on 3 custom long-horizon tasks (Object Search, Counting, Rearrangement) with 90% avg success rate. Sec.4.3-4.4: Analysis of Sentry mechanism and Planner memory management. Sec.5: Further analysis including memory representation type, dynamic management necessity, latency, and sentry behavior. Sec.9: Additional experiments on memory ablation, open-source planner, scalability, latency.

## 局限性与不确定性

1. Only 3 custom-designed tasks evaluated; no standardized benchmark comparison (e.g., CALVIN, RLBench)
2. Heavy reliance on VLM-based Planner incurs API costs and latency
3. GitHub repo (HappyWaterXP/HiMe) exists but not HTTP-verified
4. Long-horizon task design may not reflect real deployment complexity

## 为什么值得关注

HiMe proposes a hierarchical embodied memory framework that decouples VLA control into Executor (high-frequency), Sentry (progress monitoring), and Planner (strategic reasoning) to resolve the frequency-competence paradox in long-horizon tasks. Introduces dynamic memory management (Add/Update/Delete) with cross-modal semantic schemas. Achieves 90% average success on custom long-horizon manipulation tasks.

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
