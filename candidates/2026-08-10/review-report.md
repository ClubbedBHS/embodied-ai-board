# 近期具身智能论文复核（2026-08-10）

## 结论

本轮从 arXiv cs.RO 最近 292 条提交中筛出 93 条标题相关候选，60 条进入摘要队列；第一批完成 9 篇 HTML 全文优先复核。当前最值得关注的是 **GAUGE（90）**，其次是 **Action Chunk Scheduling（88）**、**ω-0（88）** 和 **XEWorld（88）**。

> 9 篇已完成论文首页团队核验、项目页与代码/数据/模型扫描，并生成中文 AI 初稿。未发现可计分的 `verified` 代码、数据或模型资产，因此可复现性分数和总分保持不变。

## 资产核验摘要

- GAUGE、Action Chunk Scheduling、ω-0、GeniWorld 与 ChainVLA 的官方项目页已验证可访问。
- ω-0 的 Code 和 Dataset 均标注 WIP；GeniWorld 的 Code 标注 Coming soon，按规则记录为 `announced`，不计开源分。
- XEWorld 正文声明 release 覆盖 25 个任务 × 5 种机器人，但没有提供直接下载地址；记录为 `announced`。
- Action Chunk Scheduling 项目页源码中的 VideoMimic GitHub 链接属于被注释的网页模板残留，不是 Armory 代码仓库。
- 其余论文在规定来源扫描后未发现官方代码、数据或模型直链；这表示“当前未发现”，不等同于作者明确闭源。

## 第一批全文复核

| 分数 | 决策 | 论文 | 主要新增信息 |
|---:|---|---|---|
| 90 | featured | [GAUGE](https://arxiv.org/abs/2608.05948) | 用真实测量统一诊断物理引擎和视频世界模型的物理真实性 |
| 88 | featured | [Action Chunk Scheduling](https://arxiv.org/abs/2608.00337) | 将多机器人共享 VLA 推理建模为闭环调度，10 台真实机器人验证 |
| 88 | featured | [ω-0](https://arxiv.org/abs/2608.06375) | 并发人形 loco-manipulation WAM 与 40+ 小时真实数据 |
| 88 | featured | [XEWorld](https://arxiv.org/abs/2608.05799) | 证明现有世界模型跨 embodiment 更像视觉匹配而非动力学迁移 |
| 86 | featured | [GeniWorld](https://arxiv.org/abs/2608.06332) | 视觉动作条件与 OOD 合成数据，策略总体成功率 40.8%→69.0% |
| 85 | featured | [How Should VLA Models Use Proprioceptive State?](https://arxiv.org/abs/2608.03052) | 受控比较 5 种状态接口和 1–96 帧历史 |
| 82 | featured | [AtlasVLA](https://arxiv.org/abs/2608.06729) | 4D 世界状态与任务进度双记忆 |
| 81 | featured | [ChainVLA](https://arxiv.org/abs/2608.02326) | 跨 action chunk 传递任务进度和 motion tail |
| 81 | featured | [In-Context VLA](https://arxiv.org/abs/2608.05738) | 从生成 CoT 转向消费 grounded language 与工具证据 |

## 观察名单

- 新增 **Heng Ji**（兼容别名 Ji Heng）与 **Yaqi Xie**，均绑定官方主页用于身份核验。
- 两位新作者在本轮 cs.RO 候选中没有命中。
- 原观察名单中的 **Danfei Xu** 命中 Action Chunk Scheduling；命中只提升复核优先级，没有进入质量评分。

## 下一步

1. 继续复核候选池中的 BridgeVLA++、RoboReact、Track4Action、R2S-EGO、TEMPO 等第二梯队。
2. 对本批 9 篇中文 AI 初稿进行编辑审核，并在作者发布资产后重新核验链接与可复现性分。
