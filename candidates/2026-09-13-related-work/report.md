# Related Work 专题补扫（失败恢复、搜索与神经符号规划）

- 扫描日期：2026-09-13
- 输入：用户提供的 Related Work 核验稿
- 文中带 arXiv 编号的工作：18 篇
- 已在正式论文库：3 篇（UniPred、RePO-VLA、CoorDex）
- 本轮新增核验：15 篇（14 篇全文级；Go-Explore 仅作背景引用，不进入推荐评分）
- 另有一批神经符号/双层规划工作已在 `2026-08-26-symbolic-planning` 扫描，不重复生成候选
- 本批尚未转入正式 `papers/`，网页内容未改变

## 编辑结论

这里的 `featured` 沿用候选量表的 80 分线；网站“近 30 天值得关注”仍只展示 90 分以上且处于时间窗内的论文。专题回扫中的旧论文不会因为高分自动进入首页。

| 分数 | 决策 | 工作 | 核心判断 |
|---:|---|---|---|
| 94 | featured | SymSkill | 同时学习符号、算子和技能，真实机器人与 RoboCasa 证据完整；官方实现可用，是本批最完整的长程神经符号系统。 |
| 92 | featured | GSWorld | 3DGS 与物理引擎结合，覆盖 3 种机器人、40+ 物体及 DAgger、评测、遥操作、VRL 等闭环用途；代码与资产均可访问。 |
| 91 | featured | ReSYNC | 从失败中联合学习恢复技能与新关系谓词，四个仿真域加 sim-to-real，补齐“恢复后更新抽象模型”的关键环节。 |
| 91 | featured | FailSafe | 自动产生失败—恢复数据并训练外部恢复 VLM；三类 VLA 最高平均提升 22.6%，且官方代码已核验。 |
| 90 | featured | RaC | 用真人干预明确拆出 rewind 与 correction，四项长程任务显示恢复数据远比继续堆干净示范有效。 |
| 89 | featured | MOSAIC | 在物理仿真中按技能胜率构建多方向规划图，真实与仿真长程任务都有效；没有状态回滚、训练数据输出或公开实现。 |
| 89 | featured | Embodied Tree of Thoughts | 在 Real2Sim2Real 数字孪生中进行带反思分支的搜索，仓库已覆盖仿真、规划、真机与场景重建；并非恢复物理快照。 |
| 85 | featured | Rewind-IL | 零训练故障检测和物理回退很实用，但只是运行时 wrapper，重复失败能力不变；代码仍标注 coming soon。 |
| 85 | featured | LODGE | 通过环境交互修正 LLM 生成的层级域模型，对“自动获得 PDDL 世界”很有价值；验证域与资产开放度仍有限。 |
| 84 | featured | IntervenGen | 以少量真人干预合成大量纠错轨迹，最高报告 39 倍鲁棒性提升；修复受已有干预轨迹约束且无官方代码。 |
| 84 | featured | STORM | 把生成式 VLA、视频世界模型和 MCTS 组合成搜索式操作规划；只有仿真证据，且未找到代码。 |
| 78 | include | Kalithasan et al. | 神经符号错误定位、重规划和 anytime resume-point selection 脉络清楚，但只在仿真验证，资产不足。 |
| 75 | include | Backjumping | 学习 culprit 直接跳回更早选择点，属于重要 TAMP 搜索优化背景；没有真实执行与恢复数据学习。 |
| 73 | include | Damage-Avoiding Manipulation | 早期“离线物理树搜索→无搜索预测器”的直接先例；范围小、年代久，但对 Related Work 的优先权判断重要。 |
| — | reject/background | Go-Explore | “返回存档状态再探索”是重要概念来源，但主体是 Atari 探索，仅有边缘机器人示例，不适合作为具身看板独立条目。 |

## 最值得优先收录的五篇

1. [SymSkill](https://arxiv.org/abs/2510.01661) — 94
2. [GSWorld](https://arxiv.org/abs/2510.20813) — 92
3. [ReSYNC](https://arxiv.org/abs/2606.18328) — 91
4. [FailSafe](https://arxiv.org/abs/2510.01642) — 91
5. [RaC](https://arxiv.org/abs/2509.07953) — 90

这五篇分别代表：符号与技能共学习、照片级闭环仿真基础设施、从失败更新技能与概念、自动失败—恢复数据生成、真实机器人恢复数据扩展。它们放在一起比单独看某篇更能构成完整专题。

## 代码与项目页核验

- **可运行官方实现**：[GSWorld](https://github.com/luccachiang/GSWorld)、[SymSkill](https://github.com/shaoyifei96/Symskill)、[FailSafe](https://github.com/Jimntu/FailSafe_code)、[Embodied Tree of Thoughts](https://github.com/HEA1OR/Embodied-Tree-of-Thoughts)。
- **明确尚未发布实现**：Rewind-IL 项目页写有 `Code (Coming Soon)`。
- **只有网站源码，不是方法实现**：RaC 的公开 GitHub 仓库是项目网站源码。
- **项目页存在但未找到官方实现**：MOSAIC、ReSYNC、IntervenGen。
- **未找到可确认的项目实现**：Kalithasan et al.、STORM、LODGE、Backjumping、Damage-Avoiding Manipulation。

## 与现有候选的去重

- 正式库已有：UniPred、RePO-VLA、CoorDex；不重复创建内容。
- `candidates/2026-08-26-symbolic-planning/` 已评过：UniDomain、IVNTR、VisualPredicator、Predicate Invention、NSRT、Learning Neuro-Symbolic Skills、ExoPredicator、BISON、SLAP、ILP Task Rules、UniPlan。
- Guo et al. 的 Atari 离线 MCTS 蒸馏、IW、EXPO、OBSERVER、PDDLStream 等作为方法谱系引用保留，不单独生成具身看板候选。

## 人工审核建议

- 先读 SymSkill、ReSYNC、FailSafe，确认专题的三条核心路线是否符合看板口味。
- GSWorld 应归入“仿真器/基建”，同时打 `recovery-data` 标签；不要只归入算法。
- RaC 与 IntervenGen 的核心价值在数据分布，不应仅标为 failure recovery。
- MOSAIC、EToT、STORM 都属于搜索式规划，但三者的状态、世界模型和输出完全不同，详情页需要明确区分。
- 若准备正式收录，建议先生成上述五篇 90+ 工作的中文长摘要，再补 84–89 分的专题脉络论文。
