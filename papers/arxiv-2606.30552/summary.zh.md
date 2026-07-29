---
paper_id: arxiv-2606.30552
summary_version: "0.2"
language: zh
status: ai-draft
---

# Training Vision-Language-Action Models with Dense Embodied Chain-of-Thought Supervision

> 提出2.6B参数VLA模型ZR-0，通过96.8%帧覆盖率的具身思维链（ECoT）密集监督实现跨embodiment表示对齐，训练时强制System 2推理，推理时零成本跳过，LIBERO平均97.8%超越多数SOTA。

## 研究问题

跨embodiment VLA迁移的核心挑战：不同机器人的低层状态和动作空间差异巨大（关节数、控制接口、传感器配置不同），现有方法仅在格式层面做零填充或维度归一化，未能解决语义对齐问题。但高层认知过程（场景感知、目标识别、任务规划、子任务分解）跨embodiment共享——如何利用这个共享认知层实现表示对齐？

## 核心方法

ZR-0采用双流架构（System 1/System 2）。System 2为预训练VLM（基于Qwen3-VL-2B-Instruct，2.1B参数），接收视觉观察和任务指令，在训练时生成结构化ECoT推理（场景描述→进度评估→未来计划→原子子任务→目标边界框→离散化动作token）。System 1为DiT动作专家（500M参数），通过流匹配生成连续动作块。

关键设计：System 2与System 1通过交叉注意力连接，但施加注意力掩码使动作专家仅关注VLM的输入提示特征——因此推理时完全跳过ECoT文本生成，不增加任何推理开销。ECoT密集监督仅在预训练阶段使用（96.8%帧覆盖率），后训练阶段仅用标准行为克隆数据。

## 主要贡献

1. 提出Embodied Chain-of-Thought（ECoT），作为跨embodiment VLA表示对齐的密集监督信号。
2. 构建ProcCorpus-60M：约60M帧/1000小时/400K+轨迹的大规模ECoT增强数据集。
3. 设计双流架构使ECoT推理在训练时发挥作用、推理时零成本跳过。
4. 在单臂（LIBERO）、双臂（RoboTwin 2.0）、人形（RoboCasa GR-1 Tabletop）和真实xArm上验证跨embodiment有效性。

## 数据与训练

预训练：ProcCorpus-60M（整合Open X-Embodiment、DROID等开源数据集），每帧标注结构化ECoT（VLM自动生成+人工审核）。预训练配置：全局batch size 1024，action chunk length H=32，loss weight α=5，AdamW优化器，cosine学习率调度（峰值3e-5），bfloat16混合精度，DeepSpeed ZeRO+Flash-Attention 2。

后训练：各benchmark仅使用公开训练数据，无ECoT监督或VL数据cotraining。LIBERO使用1,693条轨迹（40任务），RoboTwin 2.0使用27,500条（50任务，含域随机化），batch size 64，action chunk H=10-16。

## 实验与结果

LIBERO（Section 4.1, Table 1）：ZR-0平均97.8%，超过π0（94.2%）、π0.5（96.9%）、GR00T-N1.7（97.0%）、DeepThinkVLA（97.0%）和MolmoAct2（97.2%）。LIBERO-10子集96.4%接近DeepThinkVLA的96.2%。RoboCasa GR-1 Tabletop（Table 2）：共24项任务，ZR-0在所有任务上表现强劲。真实xArm实验（Section 4.1）：2,000+遥操作轨迹、4任务、50+物体，任务进度评分。

## 局限性

1. ProcCorpus-60M数据集未确认公开。
2. ECoT标注由VLM自动生成，质量受VLM能力约束。
3. 真实机器人评估仅4项xArm任务，规模有限。
4. 2.6B总参数量对某些部署场景可能偏大。

## 为什么值得关注

ZR-0提出了一个优雅的跨embodiment迁移方案：用ECoT密集监督在训练时强制VLM学习共享的具身认知表示，通过交叉注意力掩码实现推理时完全无额外开销。这种"训练时注入、推理时隐式"的设计理念，相比运行时显式推理（如DeepThinkVLA）在效率上具有明显优势。96.8%帧覆盖率的ECoT标注规模也是目前已知最高。

## 适合谁阅读

VLA模型开发者、跨embodiment迁移研究者、对Chain-of-Thought推理在机器人领域应用感兴趣的研究者。

## 关键资源

- 论文：https://arxiv.org/abs/2606.30552
- 项目主页：未公开
- 代码：https://github.com/RUCKBReasoning/ZR-0
- 数据：未公开
- 模型：https://github.com/RUCKBReasoning/ZR-0（含checkpoints）

## 事实核验记录

- [ ] 标题、作者和机构已核验
- [ ] 日期和发表状态已核验
- [ ] 代码与项目链接已核验
- [ ] 实验平台已核验
- [ ] 关键结果数字已核验
- [ ] 真实机器人/仿真结论已核验
