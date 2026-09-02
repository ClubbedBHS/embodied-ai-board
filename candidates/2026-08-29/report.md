# 最新具身智能论文扫描（截至 2026-08-29）

## 结论

本轮补扫 **2026-08-26 至 2026-08-29** 的 arXiv cs.RO 公告，并承接上一批尚未全文复核的高潜条目。官方列表包含 8 月 26、27、28 日共 **139** 条；宽松标题初筛命中 **43** 条，完成其中 **12** 篇 HTML 全文复核。

最值得优先审阅的是 **CLAP（95）**、**Zero-WAM（90）**、**Robot Juggling（90）** 和 **WorldEcho/WorldSync（90）**。它们分别覆盖跨本体世界模型、人类视频上下文任务泛化、分钟级真机持续学习，以及世界模型是否真正服从动作的诊断与改进。

## 漏斗

| 阶段 | 数量 |
|---|---:|
| arXiv cs.RO 官方条目 | 139 |
| 标题级宽松命中 | 43 |
| 全文复核 | 12 |
| featured | 12 |
| include / watch | 0 |

> `featured` 表示建议优先人工审核，不等于已经收录或发布。月度首页仍只展示人工确认后且达到 90 分的论文。

## 全文复核结果

| 分数 | 论文 | 关键判断 |
|---:|---|---|
| 95 | [CLAP](https://arxiv.org/abs/2608.27406) | 统一端执行器、语言和潜在动作来训练跨本体视频世界模型，覆盖零样本真机规划、策略改进和少样本本体适配；代码已公开。 |
| 90 | [Zero-WAM](https://arxiv.org/abs/2608.26103) | 以人类视频作为部署时任务上下文，HumanGen含74.2K对、8.6K任务；七个未见RoboTwin任务较最强视频动作基线提升29.50个百分点。 |
| 90 | [Rapid On-Robot Learning for Dynamic Manipulation Skills: Robot Juggling](https://arxiv.org/abs/2608.26800) | 双臂多指机器人用不到5分钟真机交互学会五种三球杂耍，验证“全局差先验+安全局部在线修正”。 |
| 90 | [Do Robotic World Models Really Follow Actions?](https://arxiv.org/abs/2608.24885) | WorldEcho揭示世界模型在专家轨迹外会忽略动作或生成失真视频，WorldSync再围绕这一诊断改善策略学习。 |
| 89 | [GaussianDream++](https://arxiv.org/abs/2608.25659) | 用20个策略内token承载3D高斯状态与未来预测，部署时删除训练期几何路径；真机29.2%升至52.5%。 |
| 89 | [MA-VLA](https://arxiv.org/abs/2608.25864) | 以臂级原子指令和Arm Shuffle处理未见多臂组合，官方代码已公开，但未见组合的绝对成功率仍偏低。 |
| 88 | [DreamLedger](https://arxiv.org/abs/2608.23863) | 把世界模型可靠性变成跨episode持久信用账本；门控使“烧掉的想象”降低62%，1,062次真机消费可审计回放。 |
| 88 | [Learning to Act While Waiting](https://arxiv.org/abs/2608.23831) | ARLI把VLA延迟转化为RL状态定义问题，在标准RL因延迟失效的设置中恢复学习。 |
| 88 | [TrapVLA](https://arxiv.org/abs/2608.26578) | 将VLA后门推进到可精确配置的失败模式，给出两个基准和四类故障，安全信息增益很高。 |
| 88 | [SOLO](https://arxiv.org/abs/2608.26583) | 仿真压力测试97.5%，单深度相机零样本真机连续行走1.5公里，且局限披露完整。 |
| 85 | [Riemann-1.0](https://arxiv.org/abs/2608.27033) | 20万小时数据训练统一策略/模拟器，三个仿真基准和长时程真机结果强，但资产未公开、复核成本很高。 |
| 80 | [TemporalFlow-VLA](https://arxiv.org/abs/2608.26821) | 用训练期机器人表面时序流监督紧凑执行历史，在LIBERO与RoboTwin表现强，公开资产仍缺失。 |

## 资产核验

- **CLAP** 的[代码仓库](https://github.com/omni-CLAP/clap)已确认包含安装、训练、评测和策略闭环部署说明。
- **Zero-WAM** 的[仓库](https://github.com/robbyant-research/Zero-WAM)目前是论文与项目材料，代码、模型、数据写明计划在 9 月 15 日前发布；本轮不按已开源计分。
- **GaussianDream++** 指向的[仓库](https://github.com/TuojingAI/GaussianDream)目前明确提供 GaussianDream 实现，但 README 尚未确认 ++ 版本，因此只记为部分资产。
- **MA-VLA** 的[仓库](https://github.com/zhangzaibin/future-robots)包含多臂训练、数据处理与部署代码，不过仍有占位克隆地址和未完成引用信息。
- **SOLO** 项目页可访问，但未发现代码入口。
- 其他候选没有从论文或官方页面确认到可用代码直链；连接失败的项目页记录为 `verification-error`，不当作 `not-found`。

## 团队与观察名单

所有 12 篇都从论文作者区或官方项目页提取了至少一级机构，不再把“未确认具体实验室”写成整个团队待确认。本轮没有命中 Heng Ji、Yaqi Xie 等当前作者观察名单，评分未使用作者或机构声誉。

## 人工审核建议

1. 先审 **CLAP、Zero-WAM、Robot Juggling、WorldEcho/WorldSync** 四篇。
2. 对首页近30天精选，只有人工确认且总分达到90的工作进入；本批初步符合的是上述四篇。
3. Zero-WAM 在 9 月中旬后复查代码、模型与 HumanGen 是否按计划发布；若真正公开，可提高可复现性分数。
4. GaussianDream++ 应等待仓库明确标注对应实现后再把“已有代码”展示给用户。
