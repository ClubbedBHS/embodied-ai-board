---
paper_id: arxiv-2607.14635
summary_version: "0.3"
language: zh
status: ai-draft
---

# Action QFormer: Structured Representation Shaping under Action Supervision in Vision-Language-Action Models

> Action QFormer studies how action supervision shapes inherited multimodal representations in VLA, proposing a query-based action-facing interface that preserves language-side processing and object grounding while enabli…

## 研究问题

Novel perspective: studies action supervision as a representation-shaping force rather than just a downstream objective. Proposes Action QFormer query-based action-facing interface that preserves language grounding while enabling action-compatible representations. Distinct from prior VLA work that treats action prediction as purely downstream.

## 核心方法

Novel perspective: studies action supervision as a representation-shaping force rather than just a downstream objective. Proposes Action QFormer query-based action-facing interface that preserves language grounding while enabling action-compatible representations. Distinct from prior VLA work that treats action prediction as purely downstream.

## 实验与结果

Zero-shot sim-to-real navigation: 18.8%→56.3% success rate. Fixed-instruction action generation: 22.5%→75.5%. Mechanistic analysis (Sec.V): gradient routing experiments, attention stability analysis, token rewriting metrics (drift energy, active-dimension fraction).

## 结论

Zero-shot sim-to-real navigation: 18.8%→56.3% success rate. Fixed-instruction action generation: 22.5%→75.5%. Mechanistic analysis (Sec.V): gradient routing experiments, attention stability analysis, token rewriting metrics (drift energy, active-dimension fraction).

## 局限性与不确定性

1. Navigation-only evaluation (not manipulation)
2. Single-frame setting may not capture temporal dependencies
3. No code or project page URL found; reproducibility unclear
4. Limited to navigation domain; extension to manipulation untested

## 为什么值得关注

Action QFormer studies how action supervision shapes inherited multimodal representations in VLA, proposing a query-based action-facing interface that preserves language-side processing and object grounding while enabling action-compatible representations. Demonstrates 3x improvement in zero-shot sim-to-real navigation (18.8%→56.3%) with extensive mechanistic analysis of representation stability and targeted adaptation.

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
