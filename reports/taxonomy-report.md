# Taxonomy Report — 20 篇论文试运行汇总

> 生成日期: 2026-07-21 | 模型: deepseek-v4-pro | Schema v0.1

---

## 1. 正式标签使用次数

### sections (板块)
| 标签 | 次数 |
|------|:---:|
| algorithms | 13 |
| infrastructure | 2 |
| surveys | 2 |
| simulators | 2 |
| data | 2 |

> 注: arxiv-2108.03298 (robomimic) 同时标记了 algorithms + infrastructure，是唯一跨 sections 的论文。

### topics (算法主题)
| 标签 | 次数 |
|------|:---:|
| imitation-learning | 11 |
| planning | 11 |
| behavior-cloning | 10 |
| reinforcement-learning | 6 |
| representation-learning | 5 |
| sim-to-real | 4 |
| foundation-model | 3 |
| vla | 3 |
| world-model | 3 |
| diffusion-policy | 3 |
| control | 3 |

### tasks (任务)
| 标签 | 次数 |
|------|:---:|
| manipulation | 19 |
| mobile-manipulation | 4 |
| navigation | 2 |
| locomotion | 1 |
| humanoid-control | 1 |
| generalist-control | 1 |

> manipulation 占比 95%，主要因为 Danfei Xu 团队集中在操作方向。

### platforms (平台)
| 标签 | 次数 |
|------|:---:|
| robot-arm | 16 |
| humanoid | 7 |
| mobile-robot | 4 |
| dexterous-hand | 3 |
| platform-agnostic | 2 |
| quadruped | 2 |
| multi-robot | 2 |

### modalities (模态)
| 标签 | 次数 |
|------|:---:|
| vision | 17 |
| proprioception | 14 |
| action | 10 |
| language | 7 |
| depth | 5 |
| point-cloud | 2 |
| tactile | 1 |

### environments (实验环境)
| 标签 | 次数 |
|------|:---:|
| mixed | 13 |
| simulation | 4 |
| real-world | 4 |

### assets (发布资产)
| 标签 | 次数 |
|------|:---:|
| code | 7 |
| dataset | 3 |
| simulator | 1 |
| model-weights | 1 |
| benchmark | 1 |

### properties (特性)
| 标签 | 次数 |
|------|:---:|
| real-robot-evaluation | 17 |
| open-source | 8 |
| large-scale-data | 3 |
| zero-shot | 3 |
| few-shot | 2 |
| simulation-only | 2 |

---

## 2. paper_type 分布

| 类型 | 次数 | 占比 |
|------|:---:|:---:|
| method | 13 | 65% |
| analysis | 3 | 15% |
| survey | 2 | 10% |
| simulator | 2 | 10% |
| infrastructure | 1 | 5% |
| dataset | 1 | 5% |
| benchmark | 1 | 5% |

> 符合 pilot-plan.md 的采样要求：方法类最多，其他类型均有覆盖。

---

## 3. suggested_new_tags 汇总

| 建议标签 | 出现次数 | 来源论文 |
|----------|:---:|------|
| hierarchical-rl | 2 | NeuralTaskProg, LEAGUE |
| world-action-model | 2 | EgoWAM, VideoActionGap |
| meta-learning | 1 | NeuralTaskProg |
| program-induction | 1 | NeuralTaskProg |
| hierarchical-imitation-learning | 1 | MimicPlay |
| steerability | 1 | ReSteer |
| mutual-information | 1 | ReSteer |
| compositional-reasoning | 1 | PhD thesis |
| neural-program-induction | 1 | PhD thesis |
| task-planning | 1 | PhD thesis |

**建议纳入 v1.0 词表的候选**:
- `world-action-model` (2次) — 现有 `world-model` 无法区分是否直接预测动作
- `hierarchical-rl` 或 `hierarchical-imitation-learning` (共3次) — 分层方法是重要范式
- `steerability` (1次) — 多任务策略的可操控性是新兴研究方向

**可能合并/废弃**:
- `meta-learning`, `program-induction`, `neural-program-induction` 概念重叠，可用一个标签覆盖
- `task-planning` 与现有 `planning` 标签重复

---

## 4. venue 状态分布

| 状态 | 数量 |
|------|:---:|
| preprint | 14 |
| published | 6 |

已发表论文: ICRA 2018 (1), NeurIPS 2019 (1), CoRL 2021 (1), RA-L 2022 (1), Autonomous Robots/ICRA 2023 (1), CoRL 2023 (1)

> 注: arxiv-2209.11302 (ProgPrompt) 实际上已在 Autonomous Robots 2023 发表，但 AI 标记为 preprint，需要人工修正。

---

## 5. 论文年份分布

| 年份 | 数量 |
|------|:---:|
| 2017-2019 | 2 |
| 2021 | 2 |
| 2022 | 1 |
| 2023 | 2 |
| 2024 | 1 |
| 2025 | 1 |
| 2026 | 11 |

> 新旧混合满足要求，但 2026 年论文偏多 (55%)。这是 Danfei Xu 团队近期高产的结果。

---

## 6. 无法稳定获得的元数据字段

| 字段 | 缺失/空值占比 |
|------|:---:|
| model_url | 19/20 (95%) |
| dataset_url | 17/20 (85%) |
| video_url | 17/20 (85%) |
| code_url | 13/20 (65%) |
| project_url | 4/20 (20%) |

**结论**: `model_url`, `dataset_url`, `video_url` 大多数论文不适用或不公开，建议在 Schema v1.0 中考虑 (a) 移除这些字段 (b) 改为不强制填写 (c) 或合并为 `links` 数组。

---

## 7. AI 摘要中容易发生的事实错误

基于各子 Agent 报告的 uncertainties 汇总：

| 错误类型 | 频率 | 说明 |
|----------|:---:|------|
| PDF 全文提取失败 | 高 | macOS 安全策略阻止 pdftotext/PyPDF2，部分 Agent 退化为 metadata-only |
| 代码/资源链接未确认 | 高 | 论文声称「即将开源」vs 实际已开源难以区分 |
| venue 状态误判 | 中 | 部分已发表论文未正确标记（如 ProgPrompt） |
| 作者机构归属 | 中 | 多机构作者（如 Danfei Xu = Georgia Tech + NVIDIA）的 primary 判定不一致 |
| 具体实验数字 | 中 | 未成功提取 PDF 全文时，成功率等数字来自模型训练知识而非论文原文 |
| abstract 原文 | 低 | 个别 Agent 生成而非提取论文 abstract |

**改进建议**:
1. 添加 PDF 全文提取的确定性流程（ar5iv HTML 作为备选，比 pdftotext 更稳定）
2. venue 状态需要交叉验证 Semantic Scholar / dblp
3. 要求 Agent 在 uncertainties 中记录所有无法从 PDF 直接确认的事实
4. abstract 字段必须来自 arXiv API 或 PDF 原文，禁止 AI 改写

---

## 8. 难以分类的论文

1. **arxiv-2108.03298 (robomimic)** — 既是 method 也是 infrastructure，跨 algorithms + infrastructure 两个 sections
2. **phd-danfei-xu-2021** — 博士论文归为 survey，但本质是个人研究的系统性总结，与综述论文性质不同
3. **arxiv-2604.07607 (EgoVerse)** — 作为 dataset paper，section 归为 data 是合理的，但它同时提出了训练方法论
4. **arxiv-2607.08436 (EgoWAM)** — 核心概念 WAM (World Action Model) 在当前词表中只能用 `world-model`，无法精准表达

---

## 9. 对 Schema v1.0 的修改建议

### 字段层面
1. **`model_url` / `dataset_url` / `video_url`** — 95%/85%/85% 为空，建议改为可选或合并
2. **`venue.status`** — 增加 `published` 自动判断的辅助规则（如检查 dblp / Semantic Scholar）
3. **`abstract`** — 增加校验规则：必须来自 arXiv API 或 PDF，不得 AI 改写
4. **`organizations.role`** — 需要更明确的 primary 判定规则（第一作者机构？通讯作者机构？）

### 词表层面
1. 新增 `world-action-model` 到 topics（2次建议 + 有明确定义差异）
2. 新增 `hierarchical-learning` 到 topics（合并 hierarchical-rl + hierarchical-imitation-learning）
3. 考虑新增 `steerability` 到 properties 或 topics
4. `generalist-control` 和 `locomotion` 在本轮仅使用 1 次，继续观察

### 模板层面
1. 摘要模板的「数据与训练」部分常因论文不披露而留空，可增加「如论文未披露，说明"论文未披露"」的提示
2. 「局限性」部分 Agent 有时过于笼统，应要求每条局限都标注页码

---

## 10. AI 初稿典型案例

### 质量较高
- **EgoVerse** (arxiv-2604.07607) — 成功提取 PDF 全文，40 位作者完整列出，数据规模精确
- **EgoWAM** (arxiv-2607.08436) — 完整中文摘要，核心方法描述清晰，实验结果有表号引用
- **Isaac Lab** (arxiv-2511.04831) — 详细记录了框架架构和多领域应用，性能数据标注来源

### 需要人工修正
- **ProgPrompt** (arxiv-2209.11302) — venue 应为 published (Autonomous Robots 2023) 而非 preprint
- **MimicPlay** (arxiv-2302.12422) — abstract 疑似 AI 生成而非原文，需对照 PDF
- **SimFoundry** — 文件写入了错误的目录路径 (已修复)

---

## 总结

20 篇试运行证明 Schema v0.1 和标签词表基本可用，但发现以下核心问题需要在 v1.0 中解决：

1. **PDF 提取是最大瓶颈** — 需要在规范中明确 ar5iv HTML 作为备选方案
2. **4 个 URL 字段使用率极低** — 考虑简化为 links 数组
3. **WAM 概念需要正式标签** — 已出现 2 次 suggested，且有明确学术定义
4. **venue 自动判定不准确** — 需要引入 dblp/Semantic Scholar 交叉验证
5. **摘要质量高度依赖 PDF 提取成功与否** — 需要更稳定的文本提取 pipeline
