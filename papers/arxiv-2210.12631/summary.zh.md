---
paper_id: arxiv-2210.12631
summary_version: "0.2"
language: zh
status: ai-draft
---

# LEAGUE：面向长序列操控的引导式技能学习与抽象

> 将TAMP（Task and Motion Planning）的符号推理与DRL（Deep Reinforcement Learning）的技能学习有机结合，通过任务规划器引导RL智能体逐步学习可组合、可复用的操控技能，在仿真和真实机器人上验证了长序列任务求解与跨域泛化能力。

## 研究问题

机器人要完成日常生活中的复杂任务，面临两大核心挑战：(1) 真实任务往往是长序列的（long-horizon），动作空间随任务长度指数级膨胀，DRL难以有效探索；(2) 家用机器人需要执行多样化的任务并在不同场景间泛化。TAMP方法借助符号化的状态与动作抽象，在长序列任务上表现出色且泛化能力强，但要求预先准备好完整的技能库——这不仅难以覆盖所有可能任务，而且对接触密集型（contact-rich）操作（如插入），手工设计技能极为困难（Section I）。

## 核心方法

LEAGUE（**LE**arning and **A**bstraction with **GU**idanc**E**）是一个**集成任务规划与技能学习**的框架，核心思想是让任务规划器和技能学习器形成良性循环（Section III）：

1. **符号操作符引导技能学习（Operator-Guided Skill Learning, Section III-B）**：TAMP系统已有的符号操作符（包含前置条件 precondition 和效果 effect）为每个技能定义了目标状态空间，RL智能体以此为目标学习技能的底层控制策略。任务规划器生成的任务计划中的子目标被转化为RL的奖励函数，形成自动化的课程学习（curriculum）。

2. **状态抽象实现技能复用（State Abstraction, Section III-B）**：借鉴feudal learning中的"信息隐藏"（information hiding）概念，利用操作符定义剔除与当前技能无关的环境特征，使学到的策略模块化、可复用。例如，学习Pick技能时，只需关注目标物体的位姿，而不必理会其他无关物体。

3. **集成式渐进学习（Integrated Progressive Learning, Section III-C）**：系统从少量易于实现的技能（如Reaching）出发，在任务执行过程中识别失败的技能，将其加入训练队列。任务规划器充当"反馈课程"：只有当前置技能足够熟练、能到达新技能的前置条件时，新技能才开始学习。随着技能库增长，系统能解决的任务集合也不断扩大。

算法分为两个核心循环：(a) **技能学习循环**（Alg.1 SkillCurriculum, Section III-C）：规划器生成任务计划→执行→收集失败技能的初始状态→针对性训练；(b) **任务执行循环**（Alg.2 TrySolveTask, Section III-C）：给定目标，规划器搜索技能序列→逐技能执行→若某技能失败则收集数据用于后续训练。

## 主要贡献

1. 首次将TAMP的符号状态/动作抽象用于引导RL技能学习，实现了可复用技能的自动获取。
2. 提出了集成式任务规划与技能学习框架，形成了"规划引导学习、学习扩展规划能力"的良性循环。
3. 在四个具有挑战性的仿真长序列操控任务上显著超越分层强化学习（HRL）基线（Section IV-C, Fig.4）。
4. 验证了学到的技能可组合泛化到新任务目标，以及跨域迁移加速新任务学习（Section IV-D, Table I, Fig.6）。
5. 在真实Franka Emika Panda机器人上展示了仿真训练系统的sim-to-real迁移（Section IV-E, Fig.5）。

## 数据与训练

LEAGUE的技能学习器基于SAC（Soft Actor-Critic）算法，在Robosuite仿真框架中训练。每个技能使用独立的状态抽象（基于操作符定义筛选相关特征）和奖励函数（由操作符效果定义）。训练过程完全自动——系统根据任务规划器反馈自动生成课程，无需人工设计子任务序列（Section III-B, Section III-C）。

四个仿真任务域（Section IV-A, Fig.3）：
- **StackAtTarget**：按顺序将两个立方体堆叠到目标区域（涉及Pick、Place）
- **StowHammer**：将两个锤子分别放入不同柜子（涉及Pick、Place、Pull、Push）
- **PegInHole**：拾取并插入两个销钉到两个水平孔中（涉及Pick、Insert）
- **MakeCoffee**：从柜中取出咖啡胶囊、插入咖啡机、关闭盖子和柜门（涉及Pick、Pull、Push、CloseLid、InsertHolder）

## 实验与结果

**仿真实验**（Section IV-C, Fig.4）：使用Franka Emika Panda机械臂（OSC控制器，5自由度：末端位置+yaw+夹爪，20Hz），对比SAC、Curriculum RL（CRL）、Hierarchical RL（HRL/MAPLE）、Symb+MP（开环TAMP）、Symb+RL（消融：去除状态抽象）。评估指标为task progress（归一化至[0,1]）。5个随机种子。

- **StackAtTarget**（Fig.4左）：LEAGUE与Symb+MP、Symb+RL表现接近，均显著优于所有RL基线，证明高层推理对长序列任务至关重要。
- **StowHammer**（Fig.4中）：LEAGUE大幅领先所有基线，多数基线无法突破"打开柜子"阶段。
- **PegInHole**（Fig.4右）：LEAGUE显著领先，状态抽象（vs Symb+RL）优势明显——环境中有多个无关物体时，naive skill reuse会产生虚假相关性。
- **MakeCoffee**（Section IV-D, Fig.6）：从StowHammer迁移Pick/Pull/Push技能后，LEAGUE能快速学会完整任务，而从零学习则难以完成。

**泛化实验**（Section IV-D）：
- 新任务目标（Table I）：StowHammer模型在训练目标上达0.94±0.21，交换锤子-柜子映射后为0.90±0.12（Test Goal1），换为不同目标后为0.73±0.31（Test Goal2）。PegInHole模型训练0.87±0.23，换映射后0.53±0.05（Test Goal1），仅插入单钉新目标达1.00±0.00（Test Goal2）。整体表现出强组合泛化能力。
- 跨域迁移（Section IV-D, Fig.6）：用StowHammer域学到的Pick/Pull/Push技能初始化MakeCoffee学习，显著加速训练并成功完成完整任务。

**真实机器人实验**（Section IV-E, Fig.5）：Franka Emika Panda + Intel RealSense D435 + AprilTag。采用开环控制执行仿真策略（每步技能执行前做状态估计同步到仿真环境）。
- StackThreeAtTarget（堆叠三个立方体）：8/10成功率。失败原因：AprilTag被遮挡。
- StowObject（收纳两个物体）：6/10成功率。失败原因：策略有时生成无效动作、物体从夹爪滑落。

## 局限性（Section V）

1. **依赖预定义操作符库**：假设已有技能操作符（precondition/effect），实际中可能难以获取。作者建议未来通过学习稀疏转移动态模型自动获取操作符。
2. **需要稠密奖励**：技能学习依赖环境提供的稠密奖励函数，稀疏奖励下效果未知。
3. **状态抽象的假设未必普遍成立**：在某些情况下（如探索过程中的意外后果），基于操作符的状态抽象可能失效。
4. **真实机器人受感知限制**：依赖AprilTag等外部感知系统，遮挡和检测失败会影响任务执行；未来计划探索visual-motor control以减少对感知系统的依赖。

## 为什么值得关注

LEAGUE在"符号规划+学习"这一交叉方向上做出了扎实的贡献。相比于纯端到端RL方法在长序列任务上的挣扎，以及纯TAMP方法对人工设计技能的依赖，LEAGUE展示了一条中间道路：保留符号抽象的强泛化能力，同时用RL自动获取难以手工设计的技能。其"规划引导学习、学习反哺规划"的良性循环设计理念清晰优雅，技能的状态抽象机制也具备良好的理论基础（feudal learning / information hiding）。该方法为具身AI中技能学习与任务规划的结合提供了可参考的范式。

## 适合谁阅读

- 研究任务与运动规划（TAMP）与强化学习结合的研究者
- 关注技能学习（Skill Learning）、分层强化学习（HRL）的工程师
- 对长序列操控任务（long-horizon manipulation）感兴趣的研究者
- 需要理解符号抽象与神经网络结合方法的读者

## 关键资源

- 论文：https://arxiv.org/abs/2210.12631
- 代码：未公开
- 数据：未公开
- 模型：未公开

## 事实核验记录

- [x] 标题、作者和机构已核验（arXiv abs page + ar5iv full text）
- [x] 日期和发表状态已核验（arXiv: submitted 2022-10-23, RA-L accepted 2023-08-07）
- [x] 代码与项目链接已核验（均未公开）
- [x] 实验平台已核验（Franka Panda + Robosuite + Intel RealSense D435 + AprilTag）
- [x] 关键结果数字已核验（Fig.4, Table I, Section IV-E）
- [x] 真实机器人/仿真结论已核验（Section IV-E, Fig.5）
