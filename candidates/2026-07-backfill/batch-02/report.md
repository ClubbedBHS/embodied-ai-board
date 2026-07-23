# 2026年7月回扫全文筛选：batch-02

## 范围与漏斗

- 固定输入：pending-fulltext 原顺序第26–50条，共25篇；未替换、未扩张。
- 摘要元数据成功：25/25。
- 可用HTML全文：22/25；官方HTML失败的 IMBench、LEEVLA、DriveTeach-VLA 经 ar5iv 回退仍只有摘要。
- 正式 full-source 并通过硬门槛：20/25；AnchorVLA 与 DriveTeach-VLA 为纯自动驾驶，按范围规则 reject。
- 去重：与 papers、2026-07-22、batch-01 比较，重复 0 篇。

| 分流 | 数量 |
|---|---:|
| featured | 7 |
| include | 14 |
| watch | 0 |
| reject | 2 |
| defer | 2 |

HTML全文成功率88%（22/25）；正式可评分率80%（20/25）。

## Featured

- **SoftVTBench: A Safety-Aware Visuo-Tactile Benchmark for Physically Constrained Robotic Manipulation of Deformable Objects**（arxiv-2607.04234，87）
- **Deform360: A Massive Multi-view Visuotactile Dataset for Deformable World Models**（arxiv-2607.05390，89）
- **RynnWorld-Teleop: An Action-Conditioned World Model for Digital Teleoperation**（arxiv-2607.06558，86）
- **Towards Human-level Dexterous Teleoperation**（arxiv-2607.11481，83）
- **See like a Robot: Robot-Centric Pointmaps for Vision-Language-Action Models**（arxiv-2607.11498，80）
- **AEGIS: Assay-Aware Protocol Validation and Runtime Monitoring for Open-Source Liquid Handling Robots**（arxiv-2607.15620，85）
- **Test-Time Scaling for World Action Models via Zero-Shot Geometric Evaluation**（arxiv-2607.17454，81）

## Include

- **CoRE-VLA: Towards Scalable and Robust Vision-Language-Action Modeling via Conditional Routing of Experts**（arxiv-2607.03693，74）
- **Diagnosing Semantic Handoff Failures in Agent-Orchestrated Vision-Language-Action Skill Composition**（arxiv-2607.06256，78）
- **Hilti-Trimble-Oxford Dataset: 360 Visual-Inertial Benchmark with Floor Plan Priors for SLAM and Localization**（arxiv-2607.06464，77）
- **TS-Mask VLA: 2D Temporal-Spatial Masking for Vision-Language-Action Model with Effective Bridging**（arxiv-2607.09818，70）
- **Reducing Temporal Redundancy for Efficient Vision-Language-Action Inference**（arxiv-2607.12287，71）
- **ExToken: Structured Exploration for Efficient Vision-Language-Action Reinforcement Fine-tuning**（arxiv-2607.12931，74）
- **Xiaomi-Robotics-1: Scaling Vision-Language-Action Models with over 100K Hours of Real-World Trajectories**（arxiv-2607.15330，77）
- **Neuro-Symbolic Safety Guidance for Vision-Language-Action Models via Constrained Flow Matching**（arxiv-2607.01378，79）
- **HEFT: Heavy-Payload Full-size Humanoid Teleoperation with Privileged Motion Guidance and Windowed Payload Curriculum**（arxiv-2607.02332，79）
- **SPEAR: A Simulator for Photorealistic Embodied AI Research**（arxiv-2607.06701，78）
- **UESF-Bench: Benchmarking and Probing for Unified Embodied Seeking and Following**（arxiv-2607.13621，74）
- **Apple-$π$: Benchmarking Thinking with Video Towards Law-Grounded Physical Intelligence**（arxiv-2607.16401，75）
- **DynaWM: A Base-VLA-Guided World Foundation Model for Moving-Object Manipulation**（arxiv-2607.02604，74）
- **Guided Action Flow: Q-Guided Inference for Flow-Matching Vision-Language-Action Policies**（arxiv-2607.02092，65）

## Watch

- 无

## Reject

- **AnchorVLA: Bridging Discrete Decisions and Continuous Trajectories for Vision-Language-Action Planning**（arxiv-2607.03182）
- **Teaching Vision-Language-Action Models What to See and Where to Look**（arxiv-2607.01658）

## Defer

- **IMBench: A Benchmark for Intuitive Robotic Manipulation**（arxiv-2607.15641）
- **LEEVLA: Seeing What Matters in Latent Environment Evolution for Vision-Language-Action**（arxiv-2607.08182）

## 板块分布（多标签）

- algorithms: 19
- simulators: 2
- infrastructure: 10
- data: 10

## 校准与人工审核风险

1. 本批featured比例已从batch-01的14/25降至7/25；Xiaomi-Robotics-1虽有100K小时声明，但数据/代码不可审计，维持include。
2. SoftVTBench、Deform360、RynnWorld-Teleop、TeleDexter、Robot-Centric Pointmaps、AEGIS、GeoBoN达到80+，理由分别来自新评测轴/新数据证据/新采集范式/动态接触实证/坐标系归纳偏置/双层安全实证/选择性推理，而非标题热度。
3. IMBench、LEEVLA缺HTML全文而defer；DriveTeach-VLA同时缺全文且纯自动驾驶，reject；AnchorVLA虽有全文但仍属纯自动驾驶，reject。
4. AEGIS属于液体处理机器人，信息增益高但领域较窄；编辑需决定医疗/实验室自动化是否纳入看板边界。
5. 多个GitHub Pages/Hugging Face/GitHub链接在本次网络环境返回超时；只有SoftVTBench仓库和Hilti数据站HTTP 200，其他均未计为已开放资产。
6. Deform360、Xiaomi-Robotics-1、RynnWorld-Teleop的大规模数据声明需人工复核实际下载、许可、去重和训练数据可审计性。

## 程序校验

- JSON可解析。
- 每篇total等于七项分数加总。
- featured/include/watch阈值一致；硬门槛失败者停止评分为0。
- batch_index严格为26–50且顺序与候选池一致。
- 未修改papers/或site/。
