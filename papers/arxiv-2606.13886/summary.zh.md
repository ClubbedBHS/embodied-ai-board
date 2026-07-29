---
paper_id: arxiv-2606.13886
summary_version: "0.2"
language: zh
status: ai-draft
---

# PhysVLA: Towards Physically-Grounded VLA for Embodied Robotic Manipulation

> 提出训练无关的即插即用物理校正框架PhysVLA，以<1ms推理开销对任意冻结VLA进行选择性物理约束注入，跨4种VLA骨干成功率最高+17%、稳定性最高+19%，真实Agilex Piper臂验证+50%。

## 研究问题

VLA模型纯从行为演示数据拟合，不显式编码刚体动力学或接触约束。chunked inference（如OpenVLA-OFT 92%）虽比单步（OpenVLA 36%）大幅改善，但仍缺乏全局任务级物理一致性——多阶段接触密集操作中的物理不可行动作导致残余失败。如何在保留冻结VLA权重的条件下，以最小开销注入物理约束？

## 核心方法

PhysVLA是模块化、即插即用的推理时框架，拦截VLA预测的动作向量并施加双层校正：

（1）阶段感知有限状态机（FSM）：将操作序列结构化为接近（approach）→抓取（grasp）→运输（transport）→放置（place）四个离散阶段，每个阶段有特定运动约束（如接近阶段限制速度方向朝目标）。

（2）选择性Euler-Lagrange门：仅在动力学oracle检测到运动不一致（如违反能量守恒或接触约束）时激活，计算闭式残差校正动作。关键设计：不是均匀施加约束，而是在物理不可行时才触发——保留VLA的多模态推理能力，仅修正物理不合理部分。总开销<1ms/步。

## 主要贡献

1. 对VLA模型中"物理差距"（physics gap）的实证分析：单步vs. chunked VLA在物理一致性上的结构局限。
2. 提出PhysVLA：首个训练无关、即插即用的物理感知VLA推理框架（作者称）。
3. 跨4种VLA范式一致验证：单步OpenVLA、chunked OpenVLA-OFT、力条件Force-VLA、通用Generalist-VLA，成功率+17%、稳定性+19%、轨迹效率+15%，零任务退化。

## 数据与训练

PhysVLA无需任何训练数据或微调。仅需访问仿真器或系统状态（关节位置、速度）、机器人运动学模型和目标物体位姿。Euler-Lagrange门使用标准刚体动力学方程。

## 实验与结果

LIBERO-Spatial（Section 4.2）：7-DoF Franka Panda，4种VLA骨干×4种推理模式统一PyTorch评测。关键结果：PhysVLA使单步OpenVLA成功率从36%显著提升，chunked OpenVLA-OFT获得额外增益。Robosuite Lift跨仿真器扫描（Section 4.2.1）：轨迹抖动鲁棒性10×改善。真实世界（Section 4.3）：Agilex Piper臂pick-and-place任务，仿真匹配协议下基线35%→PhysVLA 95%，成功率提升50个百分点。

## 局限性

1. 代码未公开确认。
2. FSM阶段定义依赖专家知识，新任务需手动设计阶段结构。
3. Euler-Lagrange门依赖已知动力学参数，对未知或复杂机器人平台需额外系统辨识。
4. 真实机器人仅单任务验证。
5. 夹爪开合动作不受物理校正影响。

## 为什么值得关注

PhysVLA提出了一个实用性极强的范式：物理感知作为可组合的运行时模块，而非训练约束或控制器重设计。这种设计使任何已有VLA模型无需任何修改即可获得物理一致性改进，对工业部署场景（已有大量冻结VLA模型）具有直接应用价值。选择性校正（仅在需要时激活）而非均匀约束的设计理念也值得借鉴。

## 适合谁阅读

VLA模型部署工程师、关注sim-to-real transfer的研究者、对物理感知AI和机器人控制交叉领域感兴趣的研究者。

## 关键资源

- 论文：https://arxiv.org/abs/2606.13886
- 项目主页：未公开
- 代码：未公开
- 数据：未公开
- 模型：未公开

## 事实核验记录

- [ ] 标题、作者和机构已核验
- [ ] 日期和发表状态已核验
- [ ] 代码与项目链接已核验
- [ ] 实验平台已核验
- [ ] 关键结果数字已核验
- [ ] 真实机器人/仿真结论已核验
