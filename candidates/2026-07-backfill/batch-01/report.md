# 2026 年 7 月回扫全文筛选：batch-01

## 运行范围

- 输入：`candidates/2026-07-backfill/candidate-pool.json`
- 固定样本：按原顺序取前 25 条 `review_status=pending-fulltext`，未替换、未扩张
- 元数据：25/25 已读取 arXiv 摘要页
- 正文：25/25 成功读取 arXiv 官方 HTML；23/25 满足方法、实验、结论/局限三类覆盖并标为 `full-source`
- 暂缓：2 篇 HTML 可读但缺实验/结论等强制章节，标为 `partial-source/defer`
- 去重：与 `papers/*/metadata.json` 和 `candidates/2026-07-22/candidates.json` 比较，25/25 均非重复

## 漏斗

| 阶段 | 数量 |
|---|---:|
| 固定输入 | 25 |
| 摘要元数据成功 | 25 |
| HTML 正文成功 | 25 |
| 三类章节覆盖成功 | 23 |
| 五项硬门槛全部通过 | 23 |
| featured | 14 |
| include | 8 |
| watch | 1 |
| reject | 0 |
| defer | 2 |

全文成功率按“可读取 HTML”计为 100%；按正式推荐三类章节规则计为 92%（23/25）。

## Featured

- **Open-AoE: An Open Egocentric Manipulation Dataset and Toolchain for Embodied Learning**（arxiv-2607.14183，94）
- **Embodied.cpp: A Portable Inference Runtime of Embodied AI Models on Heterogeneous Robots**（arxiv-2607.02501，88）
- **ABot-M0.5: Unified Mobility-and-Manipulation World Action Model**（arxiv-2607.00678，83）
- **FlowWAM: Optical Flow as a Unified Action Representation for World Action Models**（arxiv-2607.13017，84）
- **VLAFlow: A Unified Training Framework for Vision-Language-Action Models via Co-training and Future Latent Alignment**（arxiv-2607.01586，85）
- **DexVerse: A Modular Benchmark for Multi-Task, Multi-Embodiment Dexterous Manipulation**（arxiv-2607.08751，89）
- **TactiDex: A Real-World Tactile-Guided Benchmark for Human-Like Dexterous Manipulation**（arxiv-2607.09190，83）
- **Human-Centric Transferable Tactile Pre-Training for Dexterous Robotic Manipulation**（arxiv-2607.01067，87）
- **RoboDojo: A Unified Sim-and-Real Benchmark for Comprehensive Evaluation of Generalist Robot Manipulation Policies**（arxiv-2607.04434，96）
- **GPUSimBench: Towards Scalable and Reliable GPU-Accelerated Simulators in Embodied AI**（arxiv-2607.13059，87）
- **Image2Sim: Scaling Embodied Navigation via Generative Neural Simulator**（arxiv-2607.05765，94）
- **RoboSnap: One-Shot Real-to-Sim Scene Generation for Generalizable Robot Learning and Evaluation**（arxiv-2607.06699，88）
- **On the Efficiency of LoRA Fine-Tuning for Vision-Language-Action Models in Industrial Robotic Manipulation**（arxiv-2607.10172，80）
- **FurnitureVLA: Learning Long-Horizon Bimanual Furniture Assembly with Vision-Language-Action Model**（arxiv-2607.01212，81）

## Include

- **Industrial Dexterity Benchmark: A Hardware-Software Benchmarking Platform for Industrial Dexterous Manipulation**（arxiv-2607.14021，77）
- **Dual Latent Memory in Vision-Language-Action Models for Robotic Manipulation**（arxiv-2607.07608，74）
- **Towards Human-like Physical Intelligence: Lifelong Vision-Language-Action Learning for Robotic Manipulation**（arxiv-2607.14852，75）
- **Foresight Residual RL for Long-Horizon Robot Manipulation with Vision-Language-Action Models**（arxiv-2607.16506，79）
- **WorldBagel: Uncovering the Power of Unified Multimodal Models for Vision-Language-Action-World Modeling**（arxiv-2607.03461，72）
- **DSWAM: A Dual-System World Action Foundation Model for Fine-Grained Robot Manipulation**（arxiv-2607.04927，73）
- **ThorArena: Benchmarking Humanoid Physical Interaction with Human Motion-Force Demonstrations**（arxiv-2607.06052，79）
- **Handroid: Bridging Dexterous Hand and Humanoid**（arxiv-2607.16187，76）

## Watch / Defer

- **Simple-to-Complex Structured Demonstrations for Vision-Language-Action Learning**（arxiv-2607.04591，watch，59）：这项工作在其问题上提出明确增量：把数据示范组织本身作为 VLA 学习变量，而不是继续改模型。 两个刚体/柔性双臂任务提供初步支持，但任务数、基线和统计不足以支撑广泛可推广主张。 最近邻为 arxiv-2108.03298 人类示范分析；本工作新增 simple-to-complex VLA 收集流程，但证据范围更窄。
- **From World Action Models to Embodied Brains: A Roadmap for Open-World Physical Intelligence**（arxiv-2607.11689，defer）：暂缓：全文没有实验或评测章节，无法按本批“方法、实验、结论/局限”三部分规则完成正式推荐。
- **From World Models to World Action Models: A Concise Tutorial for Robotics**（arxiv-2607.00836，defer）：暂缓：没有作者实验、评测或系统性综述方法章节，且全文缺少明确 Conclusion/Limitations。

## 板块分布（多标签计数）

- surveys: 2
- infrastructure: 12
- data: 11
- algorithms: 15
- simulators: 5

## 需要人工重点审核

1. **高分集中**：本批是候选池按 triage 排序后的前 25 条，天然偏向近期 WAM/VLA、数据和 benchmark。请人工复核所有 featured，避免同题材版面垄断。
2. **资产口径**：仅 HTTP 200 的仓库/页面计入“可访问”；若项目页探测失败或论文只写 “will release”，均未给高复现分。Hugging Face 与多个 GitHub Pages 本轮出现网络超时，建议在浏览器人工复核。
3. **组织字段**：摘要元数据未提供稳定 affiliation，结果保留空数组并解释原因，没有凭作者身份推断团队。
4. **结论外推**：LifelongVLA 仅五任务流；Foresight Residual RL 仅一个仿真装配任务；Industrial Dexterity Benchmark 完整实验集中于第一块板；Handroid 多数能力是定性演示。
5. **极高分基础设施**：RoboDojo、Open-AoE、Image2Sim、DexVerse 的规模与资产声明很强，但仍需人工检查实际下载、许可证、训练脚本和远程硬件服务是否可用。
6. **暂缓条目**：Roadmap 和 Concise Tutorial 的 HTML 完整可读，但不满足本批强制实验章节要求；若未来为 survey/position 单独设立非实验评审量表，可重新评估。

## 校验

- JSON 可解析。
- 所有 23 篇正式评分条目的 `scores.total` 均由七项分数程序加总。
- 两篇硬门槛失败条目停止评分，七项与 total 均为 0。
- 未创建或修改 `papers/`、`site/`。
