---
paper_id: arxiv-2607.04816
summary_version: "0.3"
language: zh
status: ai-draft
---

# CAC-VLA: Context-Gated Action Conditioning for Vision-Language-Action Models

> 这项工作在 VLA 模型的动作条件化问题上提出 CAC-VLA 框架，通过在 VLM 内部引入潜在动作查询令牌（latent query tokens）预测粗到细的潜在动作，并使用上下文门控（context gate）自适应地将潜在动作信息注入到动作专家中。在 LIBERO（98.3%）和 LIBERO-Plus（89.5%）上取得强结果，真机 UR7e 实验（Full SR 64% vs π0.5 的 16%）验证了实际部署可行性。…

## 研究问题

Novel context-gated latent-action conditioning framework: trains VLM to predict coarse-to-fine latent actions (via ordered action tokenizer) and uses context-gated cross-attention to adaptively condition the action expert, distinct from standard VLA or action-reasoning methods.

## 核心方法

Novel context-gated latent-action conditioning framework: trains VLM to predict coarse-to-fine latent actions (via ordered action tokenizer) and uses context-gated cross-attention to adaptively condition the action expert, distinct from standard VLA or action-reasoning methods.

## 实验与结果

Table 1: LIBERO 98.3% avg SR; Table 2: LIBERO-Plus 89.5%; Table 3: ablation on latent-action horizon; Table 4: ablation on conditioning and gating; real-world UR7e pick-and-place (72% Task Score, 64% Full SR vs π0.5 baseline 48%/16%).

## 结论

Table 1: LIBERO 98.3% avg SR; Table 2: LIBERO-Plus 89.5%; Table 3: ablation on latent-action horizon; Table 4: ablation on conditioning and gating; real-world UR7e pick-and-place (72% Task Score, 64% Full SR vs π0.5 baseline 48%/16%).

## 局限性与不确定性

1. 真机评估仅限单一桌面 pick-and-place 任务和单一机器人（UR7e）
2. 少量演示数据（small number of demonstrations）
3. 潜在动作预测不准确或固定视野不匹配当前任务阶段时可能失败
4. 未在更长期或更多样化的操作场景中验证

## 为什么值得关注

这项工作在 VLA 模型的动作条件化问题上提出 CAC-VLA 框架，通过在 VLM 内部引入潜在动作查询令牌（latent query tokens）预测粗到细的潜在动作，并使用上下文门控（context gate）自适应地将潜在动作信息注入到动作专家中。在 LIBERO（98.3%）和 LIBERO-Plus（89.5%）上取得强结果，真机 UR7e 实验（Full SR 64% vs π0.5 的 16%）验证了实际部署可行性。消融实验证实了潜在动作视野和上下文门控的重要性。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
