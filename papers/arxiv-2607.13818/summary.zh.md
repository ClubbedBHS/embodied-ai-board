---
paper_id: arxiv-2607.13818
summary_version: "0.3"
language: zh
status: ai-draft
---

# Learning Robust Execution in Robotic Manipulation with Agentic Reinforcement Learning

> 该工作在机器人操控执行鲁棒性上提出明确增量：将执行管理建模为agentic RL问题，高层agentic策略通过选择执行模式调控冻结的底层策略，而非修改或重训策略本身。LIBERO四子集×三种底层策略(OpenVLA/π0/Diffusion Policy)的实验证据坚实，标准设置+13.7%、扰动设置+39.2%的增益一致且有消融支持。相较看板中已有的执行恢复/监控工作(如batch-01的Foresight Residual RL…

## 研究问题

提出两个互补的运行时执行质量评估指标，以及将执行管理建模为agentic强化学习问题的新框架——高层agentic策略不生成控制命令，而是选择执行模式(Execute/Retry/Repair/Reset)来调控冻结的底层策略。区别于依赖VLM规划或重训练的方法。

## 核心方法

SIII: 局部执行质量指标(进步/回归/停滞)与全局执行质量指标(基于历史窗口的归一化执行分数)。SIV: 执行模式空间{Execute, Retry, Repair, Reset}，Agentic MDP状态=执行历史+质量指标，PPO训练。SV(Table II): 标准设置—OpenVLA平均+12.4%(90.2/88.7/92.4/74.5)，π0平均+13.7%，Diffusion Policy平均+10.7%。扰动设置—OpenVLA +39.2%，π0 +19.7%。SVE: 消融验证各模式贡献(Table III)、执行质量指标重要性(Table V)、基于质量信号的模式选择策略(Table VI)。

## 实验与结果

SIII: 局部执行质量指标(进步/回归/停滞)与全局执行质量指标(基于历史窗口的归一化执行分数)。SIV: 执行模式空间{Execute, Retry, Repair, Reset}，Agentic MDP状态=执行历史+质量指标，PPO训练。SV(Table II): 标准设置—OpenVLA平均+12.4%(90.2/88.7/92.4/74.5)，π0平均+13.7%，Diffusion Policy平均+10.7%。扰动设置—OpenVLA +39.2%，π0 +19.7%。SVE: 消融验证各模式贡献(Table III)、执行质量指标重要性(Table V)、基于质量信号的模式选择策略(Table VI)。

## 结论

SV: LIBERO四子集(Spatial/Object/Goal/Long)标准+扰动设置。Table II: OpenVLA/π0/Diffusion Policy三种底层策略在标准设置下最高13.7%提升，扰动设置下最高39.2%提升。消融实验(Table III/V/VI)和分析(Fig 5-7)。

## 局限性与不确定性

1. 代码/权重仓库未探测到HTTP 200可访问资产
2. 仅LIBERO仿真评估，无真实机器人实验(SVI明确列为未来工作)
3. 执行模式为预定义集合，无法处理模式外的新故障类型
4. 严重执行退化和OOD场景恢复能力有限(SVI自报)
5. 执行质量指标依赖专家演示参考轨迹，实际部署中可能不可得

## 为什么值得关注

该工作在机器人操控执行鲁棒性上提出明确增量：将执行管理建模为agentic RL问题，高层agentic策略通过选择执行模式调控冻结的底层策略，而非修改或重训策略本身。LIBERO四子集×三种底层策略(OpenVLA/π0/Diffusion Policy)的实验证据坚实，标准设置+13.7%、扰动设置+39.2%的增益一致且有消融支持。相较看板中已有的执行恢复/监控工作(如batch-01的Foresight Residual RL)，新增信息是模式化的agentic执行管理框架与双重执行质量指标的联合设计，且模型不可知(适配多种底层策略)。主要风险：仅仿真评估(LIBERO)，严重退化场景恢复能力有限(SVI明确讨论)；资产未公开验证。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
