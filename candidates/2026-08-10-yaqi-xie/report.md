# Yaqi Xie 具身方向作者回扫

## 结论

这次不是按姓名把论文全部收进来，而是先用官方主页和论文 affiliation 做身份归一，再按现有五项硬门槛与 100 分量表全文复核。共形成 14 条可审计记录：

| 决策 | 数量 |
|---|---:|
| featured | 4 |
| include | 4 |
| watch | 2 |
| defer | 1 |
| reject | 3 |

最值得优先纳入的是 **UniPred（90）**、**Goal2Pixel（84）**、**pySpatial（83）** 和 **ShapeGrasp（83）**。其中 UniPred 是这批唯一达到当前月度精选 90 分线的工作；不过这是作者作品回扫，不应伪装成近期新论文。

## 身份核验

- 官方主页：[Yaqi Xie](https://yaqi-xie.me/)
- 可核验经历：NUS 博士、CMU Robotics Institute 博士后、UIUC ECE/CS incoming faculty。
- 研究主线：神经符号融合、机器人/感知、人机协作；同名条目通过共同作者、机构和官方论文链接交叉确认。
- 纯视觉、通用 MLLM 安全、多智能体通信等工作只作为作者作品发现，不因作者命中自动视为具身论文。

## 建议优先收录

| 论文 | 分数 | 决策 | 关键理由 | 主要限制 |
|---|---:|---|---|---|
| [UniPred](https://arxiv.org/abs/2512.17992) | 90 | featured | LLM 高层先验与示范数据中的神经谓词学习形成双层反馈；5 个仿真域 + 1 个真机域 | 固定控制器集合、确定性与完全可观测假设 |
| [Goal2Pixel](https://arxiv.org/abs/2606.01621) | 84 | featured | 以可导航像素作为 VLM 到运动的统一接口；R2R-CE 上更高 SR 且 VLM 调用约少 6 倍 | 代码/数据未发布；依赖深度；真机规模小 |
| [pySpatial](https://arxiv.org/abs/2603.00905) | 83 | featured | 生成可执行的 3D 视觉程序，MindCube 提升 12.94%，并部署 Unitree Go1 | 真机只有小规模定性任务，且速度目标人工转换 |
| [ShapeGrasp](https://arxiv.org/abs/2403.18062) | 83 | featured | 几何分解 + LLM 部件语义/任务推理；真机部件选择 92%、抓取 82% | 依赖凸分解和物体名，只覆盖 top-down grasp |

## 常规收录

| 论文 | 分数 | 价值判断 |
|---|---:|---|
| [NeSCA](https://doi.org/10.1109/LRA.2024.3421848) | 78 | 神经符号短上下文动作预测；补足 HRI/assistive robotics，代码可访问 |
| [Multi-Task Trust Transfer for HRI](https://arxiv.org/abs/1807.01866) | 77 | Fetch 家务任务 + VR 人因研究；对跨任务信任建模有长期参考价值 |
| [Translating Natural Language to Planning Goals](https://arxiv.org/abs/2302.05128) | 73 | 较早、系统地说明 LLM 更适合翻译 PDDL 目标而不是直接规划，并公开代码 |
| [Embedding Symbolic Temporal Knowledge](https://arxiv.org/abs/2101.11981) | 70 | 是其神经符号机器人路线的重要前序工作，但资产和实验规模有限 |

## 观察与暂缓

- **Robot Capability and Intention...（64，watch）**：400 人研究有意义，但为模拟 UAV 在线问卷，无实体机器人闭环。
- **InstructPart（64，watch）**：任务指令条件下的部件 affordance 分割数据与评测有用，但没有机器人执行，且本轮未核验到数据下载直链。
- **Toward General-Purpose Robots via Foundation Models（defer）**：高度相关，living repository 也可访问；但现行量表以原创方法的作者实验为硬门槛。与之前批次一致，等建立综述专用量表后再评分，避免把综述硬塞进实验型量表。

## 明确排除

- **HiKER-SGG**：核心是视觉场景图生成；只声称潜在机器人用途，没有机器人/物理任务验证。
- **Adaptively Coordinating with Novel Partners...**：Overcooked 与在线用户研究质量不错，但不满足现行规范的物理环境/机器人证据门槛。
- 作者主页上的 contextual safety、thought communication、LVLM hallucination、generic symbolic learning 等非具身工作统一保留为拒绝记录，不进入看板。

## 代码与团队核验

本轮通过 GitHub API 验证了 8 个仓库，均返回可访问：

- [UniPred](https://github.com/weiqianwang123/UniPred)
- [pySpatial](https://github.com/Zhanpeng1202/pySpatial)
- [ShapeGrasp](https://github.com/samwli/ShapeGrasp)
- [NeSCA](https://github.com/sarthak268/nesca-pytorch)
- [Human Trust Transfer](https://github.com/clear-nus/human-trust-transfer)
- [GPT-PDDL](https://github.com/clear-nus/gpt-pddl)
- [Foundation Models for Robotics living survey](https://github.com/JeffreyYH/Awesome-Generalist-Robots-via-Foundation-Models)
- [HiKER-SGG](https://github.com/zhangce01/HiKER-SGG)（代码可用，但论文仍因具身硬门槛失败而排除）

Goal2Pixel 项目页明确写着 **Code Coming Soon / Data Coming Soon**，因此只记录为“已声明、未发布”，不计入可复现性资产。团队信息优先取论文 affiliation，其次取官方项目页；没有把“实验室待确认”当成整个团队未知。

## 与现有看板的关系

- 这些论文目前均未进入 `papers/` 正式库。
- Goal2Pixel 已出现在 6 月候选池，但此前没有完成评分；本轮完成全文复核，不算正式发布。
- 本批最明显的信息增益是：神经符号谓词学习、显式 3D 视觉程序、HRI 信任建模。
- 建议人工首先复核 4 篇 featured；确认后再进入内容生产。不要一次性把作者作品全部发布，以免 watchlist 造成单一团队版面偏置。

## 校验

- JSON 可解析。
- 所有已评分条目的总分由七项加总得到。
- featured/include/watch 阈值与 `selection-rubric.md` 一致。
- 硬门槛失败或量表不适用的条目停止评分，分数保持 0。
- 本轮没有修改 `papers/` 和网页内容。
