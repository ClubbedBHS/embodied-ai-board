# 2026年7月回扫全文筛选：batch-03

## 运行范围

- 输入：`candidates/2026-07-backfill/candidate-pool.json`
- 固定样本：按原顺序取 `review_status=pending-fulltext` 第 51–75 条，共 25 篇，未替换、未扩张
- 元数据：25/25 已读取 arXiv 摘要页
- 正文：24/25 成功读取 HTML 全文（arXiv 官方 HTML 或 ar5iv）；1 篇（GraspIT）arXiv 无 HTML 版且 ar5iv 回退失败
- full-source：24/25 满足方法、实验、结论/局限三类覆盖
- 暂缓：3 篇 defer（1 篇无 HTML 全文，2 篇 survey/综述无实验）
- 去重：与 `papers/`、`candidates/2026-07-22/`、batch-01、batch-02 比较，25/25 均非重复

## 漏斗

| 阶段 | 数量 |
|---|---:|
| 固定输入 | 25 |
| 摘要元数据成功 | 25 |
| HTML 正文成功 | 24 |
| 三类章节覆盖成功 | 24 |
| 五项硬门槛全部通过 | 21 |
| featured | 3 |
| include | 15 |
| watch | 3 |
| reject | 1 |
| defer | 3 |

全文成功率按"可读取 HTML"计为 96%（24/25）；按正式推荐三类章节规则计为 96%（24/25）。

## Featured

- **GigaWorld-1: A Roadmap to Build World Models for Robot Policy Evaluation**（arxiv-2607.02642，83）：系统性研究世界模型作为策略评测器，提出 WMBench（324K rollout、7 模型、4 动作编码），填补看板中"世界模型评测基础设施"的明确空白。实验覆盖 Isaac Sim、ManiSkill2 和 MetaWorld，提供 FVD、PSNR 与 rollout 成功率相关性分析。主要风险：纯仿真，代码未开放。
- **TouchWorld: A Predictive and Reactive Tactile Foundation Model for Dexterous Manipulation**（arxiv-2607.07287，80）：提出预测+反应双层触觉基础模型架构，在 6 个真实机器人灵巧操作任务上验证，含扰动实验。相较最强基线提升 +15.7/18.2 个百分点。主要风险：触觉数据规模有限（单传感器），资产未验证可访问。
- **EmbodiedGen V2: An Agentic, Simulation-Ready 3D World Engine for Embodied AI**（arxiv-2607.07459，85）：资产质量→任务世界可用性→闭环 RL 验证的完整证据链。支持 agentic 场景生成、仿真就绪 3D 资产、策略训练评估的集成流水线。信息增益极高，看板此前缺少此方向覆盖。主要风险：代码未公开，3D 资产库许可不明。

## Include

- **Cross-Embodiment Robot Manipulation via a Unified Hand Action Space**（arxiv-2607.03570，73）
- **HUGS: Guiding Unified Dexterous Grasp Synthesis Across Modes and Scales via Learned Human Priors**（arxiv-2607.04554，76）
- **CAC-VLA: Context-Gated Action Conditioning for Vision-Language-Action Models**（arxiv-2607.04816，73）
- **Training-Free Acceleration for Vision-Language-Action Models with Action Caching and Refinement**（arxiv-2607.06370，66）
- **TrustVLA: Mechanism-Guided Inference-Time Defense Against Vision-Language-Action Backdoors**（arxiv-2607.12571，74）
- **DenseReward: Dense Reward Learning via Failure Synthesis for Robotic Manipulation**（arxiv-2607.13033，79）
- **Action QFormer: Structured Representation Shaping under Action Supervision in Vision-Language-Action Models**（arxiv-2607.14635，74）
- **FoMoVLA: Bridging Visual Foresight and Motion Guidance for Vision-Language-Action Models**（arxiv-2607.14739，75）
- **VT-WAM: Visual-Tactile World Action Model for Contact-Rich Manipulation**（arxiv-2607.02503，77）
- **HiMe: Hierarchical Embodied Memory for Long-Horizon Vision-Language-Action Control**（arxiv-2607.03449，74）
- **KAM-WM: Kinematic Affordance Maps from Latent World Models for Robot Manipulation**（arxiv-2607.04652，67）
- **PRISM: Personalized Robotic Dataset Generation via Image-based Scene and Motion Synthesis**（arxiv-2607.04880，71）
- **From Fixed to Free Cameras: Calibration-Free View-Robust VLA**（arxiv-2607.05396，76）
- **VistaVLA: Geometry- and Semantic-Aware 3D Gaussian-Grounded VLA for Robotic Manipulation**（arxiv-2607.12356，75）
- **Learning Robust Execution in Robotic Manipulation with Agentic Reinforcement Learning**（arxiv-2607.13818，71）

## Watch

- **DexTele: A Dual-Arm Dexterous Teleoperation System**（arxiv-2607.05883，60）：双臂遥操作系统，方法以工程集成为主（运动重定向+自适应力控制），实验仅覆盖 2-3 任务，缺少强基线比较。实用价值存在但证据不够充分。
- **FabriVLA: A Lightweight Vision-Language-Action Model for Precise Multi-Task Manipulation**（arxiv-2607.08575，64）：轻量化 VLA，在 4 个操作任务上验证。方法增量有限（主要为架构精简），任务范围细粒度但数量较少。
- **AgenticFocus: Object-Preserving Mixed Reality Synthesis from Human FPV Video**（arxiv-2607.08857，59）：短论文（~4 页），MR 合成方法用于灵巧人形操作数据增强。初步结果有趣但实验规模小，缺少消融。

## Reject

- **Immersive Social Interaction with VR and LLM-Assisted Humanoids**（arxiv-2607.07430，44）：Workshop 论文（IEEE-RAS Humanoids Workshop），方法以已有组件（Deepgram/GPT-4/VisionPro/Pinocchio IK）工程集成为主，实验仅 2 任务且样本量小，缺少消融和强基线。证据质量不足以支持看板收录。

## Defer

- **GraspIT: A Dataset Bridging the Sim-to-Real gap and back for Validated Grasping SE(3) Pose Generation**（arxiv-2607.05869）：arXiv 无 HTML 版（仅 PDF/TeX Source），ar5iv 回退亦仅返回摘要页，无法获取 HTML 正文。待 HTML 可用后重试。
- **A Comprehensive Survey and Systematic Real-World Evaluation of Embodied Vision-and-Language Navigation**（arxiv-2607.09792）：综述论文，包含真实世界 VLN 系统评测。按 rubric 规则，survey 无作者实验 → defer。若未来为 survey 设立非实验评审量表可重新评估。
- **Casting Everything to Online API Services? A Survey of Integrating Localized Speech Recognition Models in Robotic Systems**（arxiv-2607.11792）：叙述性综述，无作者实验或方法论贡献。按 rubric 规则 defer。

## 板块分布（多标签计数）

- algorithms: 18
- data: 4
- simulators: 2
- infrastructure: 3
- surveys: 1

## 需要人工重点审核

1. **featured 比例回归正常**：本批 featured 3/25（12%），相比 batch-01（56%）和 batch-02（28%）大幅下降，反映候选池尾部质量的自然衰减。三篇 featured 均有明确看板信息增益（世界模型评测、触觉基础模型、3D 世界引擎）。
2. **GigaWorld-1（83）**：WMBench 的 324K rollout 规模声明需要人工复核；代码未开放，复现分自然受限。若人工确认评测基础设施实际可用可维持 featured；若仅为 "roadmap" 框架而无可运行代码，则降为 include。
3. **TouchWorld（80）**：刚好跨过 featured 门槛。触觉预测+反应分层架构确有新意，但资产全部未验证 HTTP 200。建议人工检查项目页和代码仓库后再确认 featured 等级。
4. **EmbodiedGen V2（85）**：本批最高分。证据链从资产质量到闭环 RL 验证较完整，但 3D 资产库许可和实际可下载性需人工核验。
5. **DenseReward（79）**：差 1 分到 featured。若人工认为失败合成生成稠密奖励的创新性与证据充分性值得 featured，可上调。
6. **TrustVLA（74）**：VLA 后门防御方向在看板中未覆盖，信息增益实际较高（board_information_gain=8），但新颖性（推理时防御机制）和证据仅中等。
7. **GraspIT 的 defer**：arXiv 无 HTML 版是一个已知问题（部分论文仅上传 PDF/TeX Source）。在后续回扫中可尝试直接下载 PDF 转 TXT 再评分，但本批按规范仅允许 HTML 标 full-source。
8. **综述论文处理**：09792 和 11792 均为综述，按现有 rubric 规则 defer。若看板需要增加 survey 板块覆盖，需先建立针对综述的非实验评审量表。

## 跨批次趋势

| 指标 | batch-01 | batch-02 | batch-03 |
|---|---|---|---:|
| featured | 14 (56%) | 7 (28%) | 3 (12%) |
| include | 8 (32%) | 14 (56%) | 15 (60%) |
| watch | 1 (4%) | 0 | 3 (12%) |
| reject | 0 | 2 (8%) | 1 (4%) |
| defer | 2 (8%) | 2 (8%) | 3 (12%) |
| HTML 成功率 | 100% | 88% | 96% |
| 可评分率 | 92% | 80% | 84% |

三批合共 75 篇，featured 24 篇（32%），include 37 篇（49%），整体收录率 81%。featured 比例随候选池深度增加而持续下降，符合预期。

## 校验

- JSON 可解析。
- 所有 21 篇正式评分条目的 `scores.total` 均由七项分数程序加总，无偏差。
- 3 篇硬门槛失败/defer 条目停止评分，七项与 total 均为 0。
- 决策阈值一致：featured ≥80，include 65-79，watch 50-64，reject <50，defer 硬门槛失败。
- batch_index 严格为 51–75，顺序与候选池 `pending-fulltext` 原始顺序一致。
- 未创建或修改 `papers/`、`site/`。
