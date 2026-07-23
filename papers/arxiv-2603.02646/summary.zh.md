---
paper_id: arxiv-2603.02646
summary_version: "0.2"
language: zh
status: ai-draft
---

# 基于推理时扩散缩放的组合式视觉规划

> 利用因子图上的 Tweedie 估计一致性约束，将短视界视频扩散模型在推理时组合为长视界规划，无需额外训练即可泛化至未见起止目标。

## 研究问题

扩散模型在短视界机器人规划中表现优异，但将其扩展到长视界任务面临两大挑战：长视界扩散模型的计算开销过大，且长视界演示数据稀缺。现有的组合式方法（如 DiffCollage/GSC）将长序列切分为多个短片段，分别去噪后在重叠区域取平均，但这种在带噪数据空间中做因子分解的做法（Bethe 近似）会导致全局规划不一致（Section 3.1, Eq. 1-2）。本文提出并证明了 Noisy-Bethe Gap Theorem（Theorem 1, Section 4.2）：前向扩散过程破坏了因子间的独立性假设，导致 Bethe 近似在 t>0 时存在系统性偏差。

## 核心方法

本文提出将长视界规划建模为链式因子图上的推理问题。因子图的每个节点对应一个带有重叠的短视界视频块（每个 factor 包含 3 帧: x^i = [u^{2i-1}, u^{2i}, u^{2i+1}]），预训练的短视界视频扩散模型为每个节点提供局部先验（Section 4.1, Eq. 7）。核心创新在于推理时的消息传递机制：作者发现，稳定的组合式生成关键在于对 Tweedie 估计（即扩散模型预测的干净数据 x_{0|t}）而非带噪中间状态 x_t 施加边界一致性约束（Section 4.2, Eq. 9）。

消息传递分为同步和异步两种模式（Section 4.3）：
- **同步消息传递**（4.3.1）：将链式约束建模为高斯线性系统 Σ^{-1} x_{0|t}^{1:n} = η，通过并行更新驱动残差归零，保证全局一致性但可能数值不稳定（Eq. 10-11）。
- **异步消息传递**（4.3.2）：使用单侧 stop-gradient 目标和 TD 式前向/后向传播，收敛更快更稳定，代价是轻微的偏差（Eq. 12）。
- **扩散球面引导**（4.3.3）：在无条件采样方向和归一化损失下降方向之间插值，平衡对齐和多样性（Eq. 13, Algorithm 1）。

规划在 Cosmos tokenizer 编码的潜在空间中完成（Section 4.1），视频生成后通过 MLP 逆动力学模型提取可执行的机器人动作（Section 5）。

## 主要贡献

1. 提出了基于因子图的推理时扩散缩放框架，将短视界扩散模型组合为长视界规划（Section 4.1）。
2. 发现并证明了 Noisy-Bethe Gap Theorem：前向扩散破坏因子分解假设，因此必须在 Tweedie 估计而非带噪数据上施加约束（Theorem 1, Section 4.2）。
3. 设计了同步与异步相结合的消息传递机制，无需额外训练即可实现全局一致的规划（Section 4.3, Algorithm 1）。
4. 在 100 个任务（18 IND, 82 OOD）上验证了泛化能力，并在真实 Franka Emika Panda 机器人上展示了定量结果（Section 5.2, Table 2; Section 5.4, Table 3）。

## 数据与训练

方法本身是训练无关的——直接使用预训练的短视界视频扩散模型，在推理时通过消息传递实现组合（Section 4.4）。短视界扩散模型在 ManiSkill 仿真环境的随机短片段上训练，演示数据仅覆盖 N 个起始-目标对，测试时评估全部 N·N 对（Section 5）。逆动力学模型使用相同演示数据训练，基于相邻帧预测末端执行器位姿（Section 5）。

## 实验与结果

实验基于 ManiSkill 构建的组合规划基准，涵盖 4 个场景共 100 个任务（Section 5, Table 2）：

- **视频生成质量**（Section 5.1, Table 1）：使用 VBench++ 评估。在 Dynamic Quality（Motion Smoothness: Ours 0.94-0.97 vs DiffCollage 0.87-0.88; Background Consistency: Ours 0.90 vs DiffCollage 0.80-0.81）和 Static Quality（Imaging: Ours 0.69-0.70 vs DiffCollage 0.55-0.60）上均显著优于 DiffCollage。

- **组合规划成功率**（Section 5.2, Table 2）：跨 4 个场景（Tool-Use, Drawer, Cube, Puzzle），Ours IND 平均 59%，OOD 平均 54%；DiffCollage IND 0%，OOD 0%；GCDP IND 56% 但在 OOD 显著下降至 15%。方法在 IND 和 OOD 间表现稳定。

- **消融实验**（Section 5.3, Figure 4-5）：Sync+Async 联合优于单独使用；更多采样步数带来更高成功率（推理时计算扩展）。

- **真实机器人**（Section 5.4, Table 3）：Franka Emika Panda + Intel RealSense D435，Ours: IND Task1 9/10, Task2 7/10; OOD Task3 10/10, Task4 8/10。DiffCollage: 最高仅 1/10。

## 局限性

- 方法依赖于预训练短视界扩散模型的质量，若局部先验不可靠则全局规划也会失败。
- 消息传递引入额外推理开销，同步模式的计算代价随序列长度线性增长。
- 论文未包含显式 Limitations 或 Discussion 小节，以下为编辑推断。
- 视频扩散模型生成完整视频帧再通过逆动力学模型提取动作的范式，在推理效率上可能不如直接预测动作的模型。
- 真实机器人实验规模较小（每任务 10 次试验）。

## 为什么值得关注

本文触及了 Embodied AI 中的一个关键瓶颈：如何让短视界技能组合为长视界行为。与需要重新训练大模型的方法不同，本文的训练无关方案直接在推理时解决问题，具有更好的实用性和可部署性。将组合式规划建模为因子图推理，并首次从理论上分析带噪空间中因子分解失败的原因（Noisy-Bethe Gap Theorem），为未来的组合式规划方法提供了有价值的理论视角。

## 适合谁阅读

- 研究扩散策略和机器人规划的学者
- 关注长视界任务组合与技能链（skill chaining）的研究者
- 对推理时计算扩展（inference-time scaling）和训练无关引导方法感兴趣的工程师

## 关键资源

- 论文：https://arxiv.org/abs/2603.02646
- 项目主页：https://comp-visual-planning.github.io/
- 代码：未公开（论文承诺开源，见 Reproducibility Statement）
- 数据：未公开
- 模型：未公开

## 事实核验记录

- [x] 标题、作者和机构已核验（ar5iv HTML 全文）
- [x] 日期和发表状态已核验（arXiv: 2026-03-03, preprint）
- [x] 代码与项目链接已核验（项目主页存在，代码承诺开源但未确认）
- [x] 实验平台已核验（ManiSkill 仿真 + Franka Emika Panda + Intel RealSense D435）
- [x] 关键结果数字已核验（Table 1/2/3, VBench++ 指标, 成功率）
- [x] 真实机器人/仿真结论已核验（Table 3 定量结果）
