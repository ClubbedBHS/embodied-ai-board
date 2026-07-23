---
paper_id: arxiv-2607.07459
summary_version: "0.3"
language: zh
status: ai-draft
---

# EmbodiedGen V2: An Agentic, Simulation-Ready 3D World Engine for Embodied AI

> EmbodiedGen V2在仿真基础设施上提出系统级增量：从生成式3D内容工具升级为完整的sim-ready世界引擎，填补了从3D资产生成到策略训练环境之间的关键空白。实验证据全面：资产质量消融(96.5%/98.6%)、任务世界可用率(83.3%)、闭环RL验证(仿真9.7%→79.8%，sim-to-real 21.7%→75.0%)三项指标构成完整证据链。相较看板中的仿真器/场景生成工作(GPUSimBench batch-0…

## 研究问题

V2相较V1从生成工具升级为完整的仿真世界引擎：统一的sim-ready表示、可插拔资产管线(TRELLIS/SAM3D/Hunyuan3D)、affordance自动标注、任务驱动世界生成、多房间大场景、跨仿真器导出(URDF/MJCF/USD)、有状态Vibe Coding编辑、以及闭环策略验证。

## 核心方法

S2: 统一sim-ready表示，模块化资产管线(网格修复/凸分解/物理属性恢复/跨仿真器导出)，affordance自动标注(4K+资产)，任务驱动Scene Graph→空间约束+物理稳定性求解生成交互世界，多房间布局+可遍历连接，有状态Vibe Coding。S3.1: 200资产消融(Table 2)—全管线96.5%人工接受/98.6%碰撞成功/2.6min。S3.2: 83.3%任务驱动世界直接可用(Table 3)。S3.3: 在线RL—仿真9.7%→79.8%，sim-to-real 21.7%→75.0%(Table 4)。S3.4: 4K+资产集跨Mujoco/IsaacSim/SAPIEN格式。

## 实验与结果

S2: 统一sim-ready表示，模块化资产管线(网格修复/凸分解/物理属性恢复/跨仿真器导出)，affordance自动标注(4K+资产)，任务驱动Scene Graph→空间约束+物理稳定性求解生成交互世界，多房间布局+可遍历连接，有状态Vibe Coding。S3.1: 200资产消融(Table 2)—全管线96.5%人工接受/98.6%碰撞成功/2.6min。S3.2: 83.3%任务驱动世界直接可用(Table 3)。S3.3: 在线RL—仿真9.7%→79.8%，sim-to-real 21.7%→75.0%(Table 4)。S3.4: 4K+资产集跨Mujoco/IsaacSim/SAPIEN格式。

## 结论

S3.1: 200个资产消融实验(Table 2)，全管线96.5%人工接受率/98.6%碰撞成功率。S3.2: 83.3%任务世界直接可用。S3.3: RL训练仿真成功率9.7%→79.8%，真实机器人21.7%→75.0%(Table 4)。S3.4: 4K+跨仿真器资产集与affordance标注。

## 局限性与不确定性

1. 项目页(horizonrobotics.github.io/EmbodiedGen)声明开源但本轮未探测到可访问代码/资产仓库
2. 4K+资产集、多房间场景生成的规模和真实性需人工复核下载、许可和可用性
3. S3.3 RL实验中具体任务和基线VLA架构细节需进一步确认
4. Vibe Coding编辑的边界和语义理解准确性未量化评估

## 为什么值得关注

EmbodiedGen V2在仿真基础设施上提出系统级增量：从生成式3D内容工具升级为完整的sim-ready世界引擎，填补了从3D资产生成到策略训练环境之间的关键空白。实验证据全面：资产质量消融(96.5%/98.6%)、任务世界可用率(83.3%)、闭环RL验证(仿真9.7%→79.8%，sim-to-real 21.7%→75.0%)三项指标构成完整证据链。相较看板中的仿真器/场景生成工作(GPUSimBench batch-01、Image2Sim batch-01、RoboSnap batch-01、SPEAR batch-02)，新增信息是统一的sim-ready表示+affordance语义+可编辑世界状态+跨仿真器+闭环策略验证的端到端管线。主要风险：资产未公开验证(项目页声明但未探测到HTTP 200仓库)；大规模声明(4K+资产、多房间场景)需人工复核。

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
