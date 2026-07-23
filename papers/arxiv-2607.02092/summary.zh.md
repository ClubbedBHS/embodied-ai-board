---
paper_id: arxiv-2607.02092
summary_version: "0.3"
language: zh
status: ai-draft
---

# Guided Action Flow: Q-Guided Inference for Flow-Matching Vision-Language-Action Policies

> 冻结SmolVLA，仅训练action-chunk critic并在reverse-time flow采样中用动作梯度做test-time Q-guidance。

## 研究问题

冻结SmolVLA，仅训练action-chunk critic并在reverse-time flow采样中用动作梯度做test-time Q-guidance。

## 核心方法

第III节给出critic数据/任务条件与guidance；第IV节LIBERO单任务68→82、82→86，多family validation 46→56，但locked held-out只65→67.5；第V–VIII节坦率讨论泛化和不确定性。

## 实验与结果

第III节给出critic数据/任务条件与guidance；第IV节LIBERO单任务68→82、82→86，多family validation 46→56，但locked held-out只65→67.5；第V–VIII节坦率讨论泛化和不确定性。

## 结论

第III节给出critic数据/任务条件与guidance；第IV节LIBERO单任务68→82、82→86，多family validation 46→56，但locked held-out只65→67.5；第V–VIII节坦率讨论泛化和不确定性。

## 局限性与不确定性

1. 仅LIBERO仿真
2. held-out增益很小
3. critic需真实成败rollout且可能分布外误导

## 为什么值得关注

冻结SmolVLA，仅训练action-chunk critic并在reverse-time flow采样中用动作梯度做test-time Q-guidance。 第III节给出critic数据/任务条件与guidance；第IV节LIBERO单任务68→82、82→86，多family validation 46→56，但locked held-out只65→67.5；第V–VIII节坦率讨论泛化和不确定性。 相对π0.6的策略后训练，本工作是冻结flow policy的inference-time critic guidance，证据仍初步。

与现有看板工作的关系：相对π0.6的策略后训练，本工作是冻结flow policy的inference-time critic guidance，证据仍初步。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
