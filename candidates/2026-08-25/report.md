# 最新具身智能论文扫描（截至 2026-08-25）

## 结论

本轮覆盖 **2026-08-21 至 2026-08-25**。arXiv cs.RO 官方列表实际包含 8 月 21、24、25 日公告，共 166 条；宽松标题初筛命中 54 条，首批完成 12 篇 HTML 全文复核。

最强信号是四篇：**LD4WAM（94）**、**Pointing-VLA（93）**、**TOWN-VLA（92）**、**HiTac-WAM（91）**。其中前三篇分别代表大规模人类视频到动作的潜在动力学、可解释的VLA空间接口，以及冻结VLA的选择性慢思考权限控制。

## 漏斗

| 阶段 | 数量 |
|---|---:|
| arXiv cs.RO 官方条目 | 166 |
| 标题级宽松命中 | 54 |
| 第一批全文复核 | 12 |
| featured | 10 |
| include | 2 |

## 全文复核结果

| 分数 | 论文 | 决策 | 判断 |
|---:|---|---|---|
| 94 | [LD4WAM: Learning Latent Dynamics from Human Videos for World Action Models](https://arxiv.org/abs/2608.22403) | featured | LD4WAM用与真实运动对齐的潜在动力学连接人类视频和机器人动作；5,000小时、2.7亿帧预训练，RoboTwin与两类真机本体形成较完整证据链，完整模型真机平均成功率63.7%，较40.0%基线提高23.7个百分点。 |
| 93 | [Pointing-VLA: Typed Spatial Grounding Interfaces for Vision-Language-Action Manipulation](https://arxiv.org/abs/2608.23138) | featured | Pointing-VLA把点、功能区域和轨迹做成不同的机器人接口，而非文本坐标；Bridge/WidowX四任务平均72.9%，真机150次试验中把π0.5成功率从52.7%提高到80.7%，速度和失败阶段证据都较清晰。 |
| 92 | [Think Only When Needed: Prompt-Authority Control for Selective Slow-Path Intervention in Vision-Language-Action Manipulation](https://arxiv.org/abs/2608.23224) | featured | TOWN-VLA发现检索文本直接追加会让成功率从92.47%跌到3.00%，并用“提示权限”决定是否允许慢路径改写指令；10,030回合/方法的LIBERO-Plus和150次/方法的PiPER真机均显示增益。 |
| 91 | [HiTac-WAM: A Hierarchical Tactile World Action Model for Contact-Rich Robot Manipulation](https://arxiv.org/abs/2608.19574) | featured | HiTac-WAM把接触、3D形变和滑移风险组织成有向触觉层级，并让预测同时参与候选动作选择和在线复核；三项真机任务中选择机制把平均成功率从31.1%提高到61.1%，完整系统达到72.2%。 |
| 89 | [DECOWAM: Decoupled Whole-Body World-Action Model for Legged Mobile Manipulation](https://arxiv.org/abs/2608.20114) | featured | DECOWAM显式拆分腿式移动操作中的基座、机械臂与相机自运动，并配套ARMDOG真机数据；1,487个清洗回合、34万帧和每方法79次闭环试验支持全身协调与扰动鲁棒性判断。 |
| 89 | [Koala Gripper: Co-designing Robotic Grippers and Data-Capture Devices for Scaling Dexterous Manipulation Learning](https://arxiv.org/abs/2608.20546) | featured | Koala Gripper把手持采集器与机器人执行夹爪共同设计，在保留便携采集的同时增加双拇指、三自由度、低反射质量和工具使用能力；250条手持与100条遥操作示范验证了数据到扩散策略的完整链路。 |
| 89 | [InstructMove: A Text-Indispensable Benchmark for Instruction-Following Manipulation](https://arxiv.org/abs/2608.22990) | featured | InstructMove强制同一场景存在多个可行目标，让语言成为动作选择的必要变量；1,757个验证资产、四类任务、逐阶段指标和反事实指令诊断揭示视觉捷径，混合2,000条仿真与200条真机示范取得最佳真机结果。 |
| 88 | [The Missing Touch: Spatially Distributed Tactile Feedback Brings Teleoperation Closer to Human Dexterity](https://arxiv.org/abs/2608.19372) | featured | The Missing Touch用32自由度触觉显示器把机器人指尖的空间形变回传给操作者；两项受试者实验各48次试验，分布式触觉使遥操作轨迹与自然动作的偏差降低29%–79%，并收紧多操作员数据分布。 |
| 88 | [ForeTime-VLA: Causal Future-Token Distillation from a World Action Model for Conveyor-Belt Manipulation](https://arxiv.org/abs/2608.20735) | featured | ForeTime-VLA把离线WAM未来信息蒸馏成部署时因果的未来、阶段与转移时间token；真机跨三种传送带速度完成44/90次抓取，而π0.5为23/90，额外延迟低于3%。 |
| 87 | [VT-MUSE: Multimodal Unified Sequential Visuotactile Representation Learning for Manipulation](https://arxiv.org/abs/2608.21290) | featured | VT-MUSE用跨模态时序对齐、遮蔽视觉重建和触觉深度变化预测学习统一视觉触觉记忆；四项仿真任务平均领先最强对照11个百分点，四项真机任务80次试验成功76次。 |
| 79 | [GOAG: Generative and Object-Agnostic Grasp Planner for Dexterous Robotic Manipulation](https://arxiv.org/abs/2608.19759) | include | GOAG只从夹爪自身几何与运动学学习接触分布，在测试时才引入物体；MultiDex平均成功率86.93%，并跨五个基准比较。真机只展示11个YCB物体且缺少重复试验统计，暂不升为featured。 |
| 79 | [CounterAlign: Counterfactual Supervision for Vision-Language-Action Models](https://arxiv.org/abs/2608.21740) | include | CounterAlign从成功示范构造指令错配反事实样本，学习语言—动作奖励并进行离线RL；LIBERO-PRO在位置和任务扰动上改善，但真机只有10次试验且训练参数从3.4B增至约12.7B，因此先常规收录。 |

## 资产核验

- InstructMove 的 [RoboOrchardSim](https://github.com/HorizonRobotics/RoboOrchardSim) 与 GOAG 的 [代码仓库](https://github.com/CEA-LIST/GOAG) 已通过 GitHub API 验证。
- Koala Gripper、CounterAlign、GOAG 项目页可访问。
- CounterAlign 项目页写明 **Code Coming Soon**，不计作已开源。
- VT-MUSE 论文给出的项目页当前返回 GitHub Pages 404，不能计作可用资产。
- 其余候选没有从论文或官方页面确认到代码直链，不把第三方同名仓库当作官方资产。

## 观察名单

本轮 54 条标题候选没有命中当前作者观察名单；没有因作者或机构声誉加分。

## 后续

当前仍有 42 条未进入首批全文复核。第二批应优先检查 WAM-OPD、Logic-VLA、DreamMimic、Action-JND、SCVC 和 GuardianBench，但它们的摘要证据或任务覆盖弱于本批前列，不应仅凭标题发布。
