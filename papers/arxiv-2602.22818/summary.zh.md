---
paper_id: arxiv-2602.22818
summary_version: "0.2"
language: zh
status: ai-draft
---

# LeRobot：面向端到端机器人学习的开源库

> LeRobot 是 HuggingFace 推出的开源机器人学习库，垂直整合了从底层电机控制到大规模数据采集、多算法训练与异步推理部署的完整技术栈。

## 背景与动机

机器人学习领域正经历从"显式模型"（手工设计感知-规划-控制模块化流水线）向"隐式模型"（端到端数据驱动策略）的范式转变（第2.1节）。然而，当前机器人学习生态系统高度碎片化（第2.3节）：

- **中间件割裂**：不同机器人平台有各自专属的底层控制接口，迫使团队重复开发适配层
- **数据集格式混乱**：TFDS、ROS bag、JSON 等格式互不兼容，无法无缝聚合
- **学习框架差异**：算法的实现细节、数据处理和评估管线的微小差异导致结果不可复现

LeRobot 旨在通过提供一个统一、开源、可扩展的端到端技术栈来解决上述问题。

## 核心贡献

### 1. 统一的机器人中间件（第3.1节）
- 支持 8 款机器人平台：SO-100 / SO-101（关节式双臂）、Koch-v1.1、ALOHA-2、Hope-JR 仿人臂、Stretch-3 移动操作平台、LeKiwi 移动操作平台、Reachy-2 仿人机器人（Table 1(a)）
- 共享的 Python API 同时支持遥操作（leader-follower）和策略直接控制
- 可扩展的模块化架构，可直接对接 FeeTech 和 Dynamixel 等主流舵机

### 2. 标准化数据集 LeRobotDataset（第3.2节）
- 统一的多模态数据集格式，支持高频传感器数据、多摄像头、遥操作信号等
- 自描述格式：包含文本任务描述、机器人配置、采集帧率等元数据
- 截至 2025 年 9 月：**16,000+ 数据集**，来自 **2,200+ 位独立贡献者**
- 原生流式访问（StreamingLeRobotDataset）：无需下载完整数据集即可开始训练（附录 C.1）
- 数据集下载量超过百万次，其中 Franka Panda、xArm 等研究级平台贡献了最大规模的公开数据

### 3. 高效的算法实现（第3.3节）
纯 PyTorch 实现的 SOTA 机器人学习算法：

| 范式 | 算法 |
|------|------|
| 行为克隆（单任务） | ACT (52M)、Diffusion Policy (263M)、VQ-BET |
| 行为克隆（多任务） | π₀ (3.5B)、SmolVLA (450M) |
| 强化学习 | HIL-SERL、TD-MPC |

参数规模来自 Table 2。所有模型以纯 PyTorch 实现，**训练一把模型不到 100 行代码**，部署推理不到 40 行代码（附录 D）。
ACT 因其轻量（52M 参数）且仅需 **~50 条真实世界轨迹**即可训练出有效策略（第3.3节），成为社区上传和使用最多的策略（Figure 7）。
SmolVLA 支持语言条件控制，实现更广泛的任务泛化。

### 4. 优化的异步推理栈（第3.4节）
- **物理解耦**：推理可在远程高性能机器上运行，通过网络向机器人控制器发送动作序列
- **逻辑解耦**：异步生产者-消费者模式，推理进程与底层控制循环并行运行
- 支持动作块（action chunks）预测，通过可定制的聚合函数合并重叠预测
- 防止机器人空闲等待推理结果，保证控制频率稳定（Figure 8）
- 附录 E 报告了异步推理相对于同步推理的性能提升（SmolVLA 在三项真实世界任务上成功率达到相当水平但周期时间显著缩短，Table 5）

### 5. 仿真评估支持（第4节）
- 原生集成 LIBERO（终身学习与操作基准）和 Meta-World（50 个操作任务）
- 主要面向算法系统性评估，而非仿真训练（库的核心理念是尽可能基于真实世界数据训练）

## 社区影响

作为 HuggingFace 生态的一部分，LeRobot 充分利用了 HuggingFace Hub 的社区分发能力。论文展示了社区增长的量化数据：

- 数据集下载量随时间持续增长，SO-10X 平台贡献了最大份额的数据集数量（得益于低成本的去中心化社区贡献）
- Franka Panda 和 xArm 在总下载量和总 episode 数上领先（得益于集中式大规模研究项目如 Open X-Embodiment、DROID）
- ACT 在上传和下载量上均占主导地位（Figure 7）

## 局限性与未来方向（第5节）

1. **机器人覆盖面有限**：当前仅支持 8 款平台，持续扩展仍是关键
2. **算法覆盖不全面**：未来需要纳入更多算法
3. **推理优化不足**：尚未整合量化、图编译等低层优化技术，大型模型（如 π₀）在低端设备上难以部署

## 关键信息

| 项目 | 信息 |
|------|------|
| 论文标题 | LeRobot: An Open-Source Library for End-to-End Robot Learning |
| arXiv | [2602.22818](https://arxiv.org/abs/2602.22818) |
| 发布日期 | 2026-02-26 |
| 作者 | Remi Cadene 等 17 人（HuggingFace，Francesco Capuano 同时在牛津大学） |
| 代码 | [github.com/huggingface/lerobot](https://github.com/huggingface/lerobot) |
| 数据集/模型 | [huggingface.co/lerobot](https://huggingface.co/lerobot) |
| 许可证 | CC BY 4.0 |

## 事实核验记录

- [x] 标题、作者和机构已核验（ar5iv HTML + arXiv abs page）
- [x] 日期和发表状态已核验（arXiv: 2026-02-26, v1, preprint, CC BY 4.0）
- [x] 代码与项目链接已核验（github.com/huggingface/lerobot, huggingface.co/lerobot）
- [x] 实验平台已核验（Table 1(a)：8 款机器人平台；Section 4：LIBERO + Meta-World）
- [x] 关键结果数字已核验（Table 2：ACT 52M/DP 263M/SmolVLA 450M/π₀ 3.5B；Section 3.2：16K+ datasets, 2.2K+ contributors；Section 3.3：<100 LOC training, <40 LOC inference, ~50 real-world trajectories for ACT）
- [x] 真实机器人/仿真结论已核验（Section 3.3：ACT 仅需 ~50 条真实世界轨迹；Table 5：异步推理性能）
