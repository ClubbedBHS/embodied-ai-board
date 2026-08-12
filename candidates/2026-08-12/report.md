# 最新具身智能论文扫描（2026-08-12）

## 结论

本轮扫描 arXiv cs.RO 在 **2026-08-11 至 2026-08-12** 公告的 156 条提交，宽松标题初筛命中 47 条；优先读取 13 篇 HTML 全文，并额外记录 1 篇高度相关综述。当前最值得关注的是：

1. **XPolicyLab（92）**：统一机器人策略接入、服务、仿真评测和真机部署，公共基础设施价值最高。
2. **WorldSimProbe（90）**：从“视频看起来像不像”转向检查世界模型是否真正履行动作与物理交互契约。
3. **Flex-pi（89）**：同一 WAM checkpoint 可切换 RGB、3D、语义输入/预测流，在部署时选择速度—成功率运行点。
4. **SLIM-0.5B（87）**：用紧凑 action-grounded latent 同时取得较强策略性能与显著效率优势。
5. **VIScore（87）**：诊断潜在世界模型的编码、预测与规划质量，开放代码和数据。

## 漏斗

| 阶段 | 数量 |
|---|---:|
| arXiv cs.RO 官方条目 | 156 |
| 标题级宽松命中 | 47 |
| 第一批全文复核 | 13 |
| featured | 9 |
| include | 4 |
| defer | 1 |

本批没有直接发布或修改正式论文库。其余 34 条仍保留在 `candidate-pool.json`，后续可继续复核。

## 第一优先级

| 分数 | 论文 | 判断 |
|---:|---|---|
| 92 | [XPolicyLab](https://arxiv.org/abs/2608.09892) | 公共基础设施；50 个 RoboTwin、42 个 RoboDojo、18 个真机任务，代码已验证 |
| 90 | [WorldSimProbe](https://arxiv.org/abs/2608.09298) | 世界模型物理忠实度诊断；6 模型 × 3 平台，代码和数据已验证 |
| 89 | [Flex-pi](https://arxiv.org/abs/2608.10860) | RGB/3D/语义多流 WAM；单 checkpoint 支持可变部署算力，代码已验证 |
| 87 | [SLIM-0.5B](https://arxiv.org/abs/2608.09771) | 0.5B 紧凑策略；同时报告成功率、延迟、显存和 FLOPs，代码已验证 |
| 87 | [VIScore](https://arxiv.org/abs/2608.11174) | 规划相关世界模型诊断指标；代码和数据已验证 |

只有 XPolicyLab 与 WorldSimProbe 达到当前 **90 分月度精选线**。这两篇都不是“再做一个 WAM”，而是改善研究如何被运行、比较和诊断。

## 其他 Featured

| 分数 | 论文 | 主要价值 | 主要风险 |
|---:|---|---|---|
| 86 | [JEPA-WAM: Learning VLA Policies...](https://arxiv.org/abs/2608.09381) | 联合当前—未来 JEPA target；LIBERO-Plus、RoboTwin 与真机证据完整 | 团队机构仍待 PDF 人工复核 |
| 85 | [Vid2WAM](https://arxiv.org/abs/2608.08558) | 将视频扩散未来与伪动作蒸馏到低延迟 WAM | 依赖 teacher 与 inverse dynamics 质量 |
| 83 | [4D-WAM](https://arxiv.org/abs/2608.08023) | trajectory field 监督动态 3D，推理零额外模块 | 未找到官方代码，机构待确认 |
| 81 | [AdaDexGrasp](https://arxiv.org/abs/2608.07600) | 3D 视觉—触觉表示贯通抓取生成与接触后修正 | 无项目/代码，真机规模需人工复核 |

严格按量表是 9 篇 featured；其中 81–89 分不会进入 90 分月度精选，但可作为本周候选。

## Include

- **GWM-VLA（79）**：多视角几何 latent world model，真实 SO-101 和 LIBERO-Plus 有效；但依赖同步多视角且无资产。
- **LUCID（78）**：通过 imagined macro-dynamics 组合人形全身技能；当前只有 privileged-state 仿真，没有真机。
- **另一篇 JEPA-WAM（77）**：预测下一任务阶段 latent，RoboTwin 规模大但真机只有两个任务、无代码。
- **RoboSeg（68）**：单手眼相机在线构建功能部件 3D 图；24 次真机是可行性证据，不足以支持广泛鲁棒性。

## 同名冲突：两篇 JEPA-WAM

本轮出现两篇不同作者、不同贡献、不同 arXiv ID 的同名工作，不能去重合并：

| arXiv ID | 副标题/核心机制 | 分数 |
|---|---|---:|
| [2608.09381](https://arxiv.org/abs/2608.09381) | 联合编码 current–future transition，并让预测监督塑造动作 backbone | 86 |
| [2608.10780](https://arxiv.org/abs/2608.10780) | 预测下一任务阶段的 semantic latent，再注入 Motus WAM | 77 |

正式建库时必须以 arXiv ID 为主键，并在展示标题附近提供作者/项目标识。

## 资产核验

GitHub API 已验证以下仓库可访问：

- [XPolicyLab](https://github.com/XPolicyLab/XPolicyLab)
- [WorldSimProbe](https://github.com/pxxq25/WorldSimProbe)
- [Flex-pi](https://github.com/geyan21/flex-pi)
- [SLIM](https://github.com/kzz1031/SLIM)
- [VIScore](https://github.com/HaiyuWu/viscore)
- [JEPA-WAM 2608.09381](https://github.com/SpriteWithoutIce/JEPA_WAM)
- [Vid2WAM](https://github.com/qch-FA/Vid2WAM)

Hugging Face API 已验证 [WorldSimProbe 数据](https://huggingface.co/datasets/petersonco/worldsimprobe_robotwin) 与 [VIScore 数据](https://huggingface.co/datasets/BooBooWu/viscore)。VIScore 模型页面 GET 为 200，但模型 API 返回 404，因此只记录页面可访问，不把它作为独立、已验证权重计分。

## 需要人工审核

1. **XPolicyLab**：核对仓库中主要策略适配器是否都可实际运行，而不只是接口占位；若成立，92 分合理。
2. **WorldSimProbe 与 GAUGE 的重叠**：两者都诊断世界模型物理真实性。WorldSimProbe 更强调 action realization/interaction contract，GAUGE 更强调真实测量统一标尺；建议保留两篇但在摘要中明确差异。
3. **Featured 比例仍高**：第一批是按信息增益和全文可读性挑选的优先样本，不代表 47 篇整体质量。后续批次预计明显下降。
4. **团队信息**：4D-WAM、GWM-VLA、LUCID 以及两篇 JEPA-WAM 的 HTML affiliation 排版不完整；代码和作者已核验，但正式发布前需从 PDF 首页补齐机构。
5. **综述量表**：`Learning Physical Interaction` 主题很重要，但继续按既有规则 defer，等待综述专用量表。

## 校验

- `candidates.json` 可解析。
- 所有评分项均由七个维度加总。
- 决策阈值符合 `selection-rubric.md`。
- 代码、数据和模型分别核验，不把 Coming Soon 或模糊项目声明计为资产。
- 未修改 `papers/` 和网页内容。
