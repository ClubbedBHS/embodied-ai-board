---
paper_id: arxiv-2607.07287
summary_version: "0.3"
language: zh
status: ai-draft
---

# TouchWorld: A Predictive and Reactive Tactile Foundation Model for Dexterous Manipulation

> TouchWorld在灵巧操控的触觉基础模型上提出范式级增量：首次将预测性触觉世界模型与反应性触觉修正统一为分层操控策略，显式分离语义规划、预测性子目标生成、名义动作生成和快速触觉修正四个时间尺度。6个真实机器人任务+人类扰动变体提供坚实证据(65.0%/53.7%，最强基线+15.7/18.5pp)，消融实验清晰定位各组件贡献。相较看板中的触觉工作(TactiDex batch-01、batch-02的SoftVTBench)，新增…

## 研究问题

首个将触觉预测(世界模型)与触觉反馈修正统一为分层操控策略的工作，将语义规划、预测性子目标生成、名义动作生成和快速触觉修正分离到不同时间尺度。区别于已有的将触觉仅作为低频输入附加到单块模型的做法。

## 核心方法

S2: 分层架构—Subt task Planner(Qwen3-VL-4B)产生可执行子任务，Tactile World Model(Wan2.2-TI2V-5B)预测视觉-触觉子目标，Visuo-Tactile Goal-Conditioned Policy生成名义动作块，Tactile-Conditioned Refinement Policy在线修正残差。S3: 四阶段训练(子任务规划器→触觉世界模型→目标条件策略→VLA-Refinement联合)。S4: 6真实机器人任务(Water Flower/Tabletop Clearing/Cup Insertion/Power Plug Insertion/Pot Wiping/Tissue Pulling)，clean平均65.0%，扰动53.7%，最强基线+15.7/18.5pp。S4.3消融验证各组件贡献。EgoTouch人类触觉数据预训练世界模型。

## 实验与结果

S2: 分层架构—Subt task Planner(Qwen3-VL-4B)产生可执行子任务，Tactile World Model(Wan2.2-TI2V-5B)预测视觉-触觉子目标，Visuo-Tactile Goal-Conditioned Policy生成名义动作块，Tactile-Conditioned Refinement Policy在线修正残差。S3: 四阶段训练(子任务规划器→触觉世界模型→目标条件策略→VLA-Refinement联合)。S4: 6真实机器人任务(Water Flower/Tabletop Clearing/Cup Insertion/Power Plug Insertion/Pot Wiping/Tissue Pulling)，clean平均65.0%，扰动53.7%，最强基线+15.7/18.5pp。S4.3消融验证各组件贡献。EgoTouch人类触觉数据预训练世界模型。

## 结论

第4节提供6个真实机器人任务+人类扰动变体的评估，与多个基线比较(TouchWorld 65.0% clean/53.7% perturbed，vs 最强基线+15.7pp/+18.5pp)；包含消融实验(Table 1/2/3)。

## 局限性与不确定性

1. 代码/数据/权重仓库未探测到HTTP 200可访问资产
2. 6个真实机器人任务覆盖面有限，未穷尽家居操控多样性(S5明确讨论)
3. 触觉世界模型仅预测短时程子目标，长时程预测仍困难
4. 系统与特定传感器布局和手部形态绑定，迁移需要校准和适配数据
5. 调度超参数为固定配置，未自适应

## 为什么值得关注

TouchWorld在灵巧操控的触觉基础模型上提出范式级增量：首次将预测性触觉世界模型与反应性触觉修正统一为分层操控策略，显式分离语义规划、预测性子目标生成、名义动作生成和快速触觉修正四个时间尺度。6个真实机器人任务+人类扰动变体提供坚实证据(65.0%/53.7%，最强基线+15.7/18.5pp)，消融实验清晰定位各组件贡献。相较看板中的触觉工作(TactiDex batch-01、batch-02的SoftVTBench)，新增信息是预测性触觉子目标+在线修正的分层架构，以及人类触觉数据预训练的迁移策略。主要风险：资产未公开验证；任务限于6个，依赖特定传感器/手部形态；调度参数需手工设定。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
