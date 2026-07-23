---
paper_id: arxiv-2607.16506
summary_version: "0.3"
language: zh
status: ai-draft
---

# Foresight Residual RL for Long-Horizon Robot Manipulation with Vision-Language-Action Models

> 这项工作在其问题上提出明确增量：将离线估计的跨子任务完成价值引入冻结 VLA 上的 residual RL，直接优化 handoff quality。 受控多 seed 大样本和 predictor 分析支持因果链，但只有一个仿真装配任务。 最近邻为 arxiv-2210.12631 LEAGUE 与 π0.6；本工作新增显式跨阶段 handoff-value reward，验证 VLA residual RL 的终态质量问题。

## 研究问题

将离线估计的跨子任务完成价值引入冻结 VLA 上的 residual RL，直接优化 handoff quality。

## 核心方法

第 IV–V 节把下一子任务成功概率定义为 foresight value，以终态图像和 downstream rollout 标注训练 predictor，再反向训练 residual policy。

## 实验与结果

第 VI–VII 节在 Isaac Gym 三阶段扳手拧螺母任务上，每方法 4 seeds×512 episodes；完整成功率 85.6%，常数奖励 residual RL 54.5%，π0 54.9%。

## 结论

第 VIII 节强调要优化可交接的成功终态，而不是只优化每个子任务是否成功。

## 局限性与不确定性

1. 单一仿真任务
2. one-step foresight 在更深任务链上可能不足
3. 项目页可见但无已核验代码

## 为什么值得关注

这项工作在其问题上提出明确增量：将离线估计的跨子任务完成价值引入冻结 VLA 上的 residual RL，直接优化 handoff quality。 受控多 seed 大样本和 predictor 分析支持因果链，但只有一个仿真装配任务。 最近邻为 arxiv-2210.12631 LEAGUE 与 π0.6；本工作新增显式跨阶段 handoff-value reward，验证 VLA residual RL 的终态质量问题。

与现有看板工作的关系：最近邻为 arxiv-2210.12631 LEAGUE 与 π0.6；本工作新增显式跨阶段 handoff-value reward，验证 VLA residual RL 的终态质量问题。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
