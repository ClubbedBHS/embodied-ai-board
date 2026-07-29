# 2026 年 6 月论文回填 — 第二批报告

> 运行时间：2026-07-24 | 时间窗口：2026-06-01 至 2026-06-30
> 第一批 21 篇 | 第二批 82 篇 | 合计评分 103 篇

## 1. 第二批执行概要

| 指标 | 数值 |
|---|---|
| ks>=8 候选全量处理 | 67 篇 |
| ks=7 精选补充 | 15 篇 |
| **本批评分总数** | **82 篇** |
| 硬门槛淘汰 | 7 篇（5 reject + 1 defer + 1 ar5iv 不可用） |
| 全文阅读评分 | 75 篇 |
| 通过率（通过硬门槛/总数） | 91.5%（75/82） |

## 2. 决策分布

### 第二批（82 篇）

| 决策 | 数量 | 占比 |
|---|---|---|
| featured (80+) | 16 | 19.5% |
| include (65–79) | 52 | 63.4% |
| watch (50–64) | 8 | 9.8% |
| reject (0–49) | 5 | 6.1% |
| defer | 1 | 1.2% |

### 两批合计（103 篇）

| 决策 | 数量 | 分数范围 |
|---|---|---|
| featured | 29 | 80–91 |
| include | 60 | 65–79 |
| watch | 8 | 50–64 |
| reject | 5 | 0–49 |
| defer | 1 | — |

### 分数分布

| 范围 | 第一批 | 第二批 | 合计 |
|---|---|---|---|
| 90+ | 1 | 0 | 1 |
| 80–89 | 12 | 16 | 28 |
| 70–79 | 8 | 43 | 51 |
| 65–69 | 0 | 9 | 9 |
| 50–64 | 0 | 8 | 8 |
| <50 / no_score | 0 | 6 | 6 |

## 3. 90 分以上 — 月度精选候选

| 论文 ID | 分数 | 标题 |
|---|---|---|
| arxiv-2606.11324 | 91 | Embodied-R1.5: Evolving Physical Intelligence via Embodied Foundation Models |

> 注：第二批无 90+ 论文。Embodied-R1.5 来自第一批。**90+ 论文 ≠ featured 论文**；featured 阈值为 80 分（29 篇），90+ 目前仅 1 篇。

## 4. 第二批 Featured 名单（80+）

| 排名 | ID | 分数 | 标题（简短） |
|---|---|---|---|
| 1 | arxiv-2606.05979 | 88 | WLA Model — 统一世界建模、语言推理与动作合成 |
| 2 | arxiv-2606.31993 | 87 | OopsieVerse — 损伤感知机器人操作安全基准 |
| 3 | arxiv-2606.13672 | 87 | WEAVER — 更好更快更长的机器人操作世界模型 |
| 4 | arxiv-2607.09701 | 86 | EgoSteer — 自我中心视频可控灵巧操作全栈系统 |
| 5 | arxiv-2606.04708 | 86 | VISTA — UMI 数据 VLA 训练的视觉锚定与物理验证适配 |
| 6 | arxiv-2606.17200 | 85 | ACE-Ego-0 — 统一自我中心人机数据 VLA 预训练 |
| 7 | arxiv-2606.06493 | 85 | HANDOFF — 互补教师蒸馏人形任务空间全身控制 |
| 8 | arxiv-2606.26428 | 84 | Play2Perfect — 游戏预训练对精密装配的关键因素 |
| 9 | arxiv-2606.22136 | 83 | Wh0 — 生成式世界模型作为人手操作数据来源 |
| 10 | arxiv-2606.23680 | 82 | CoorDex — 身体与手部先验协调连续人形移动操作 |
| 11 | arxiv-2606.06139 | 82 | MotionDisco — 极限人形移动操作运动发现 |
| 12 | arxiv-2606.27344 | 81 | VibeAct — 振动到动作的接触丰富反应式灵巧操作 |
| 13 | arxiv-2606.27251 | 81 | OmniAct — 从孤立技能到日常物理自主的全模态智能体 |
| 14 | arxiv-2607.00272 | 81 | ASPIRE — 机器人自主技能编程与发现 |
| 15 | arxiv-2606.05699 | 81 | DexFuture — 双臂灵巧工具使用分层未来状态定位 |
| 16 | arxiv-2606.04829 | 80 | M3imic — 多模态运动模仿通用全身人形控制器 |

## 5. Surveys 板块审计结果

原候选池标记为 `suggested_sections: ["surveys"]` 的共 **33 篇**。逐一审核后：

| 分类 | 数量 | 说明 |
|---|---|---|
| **确认为具身智能综述** | **4** | 真实文献综述，具身相关 |
| **确认为综述但偏题** | **1** | 医疗 3D 场景补全综述 — reject |
| **非综述（误标）** | **28** | 方法/系统/数据集/立场论文/硬件设计等 |

### 真实综述名单

| ID | ks | 标题 | 备注 |
|---|---|---|---|
| arxiv-2606.02677 | 6 | Motion Planning in Dynamic Environments: A Survey from Classical to Modern Methods | 运动规划综述（138 篇文献），偏通用机器人 |
| arxiv-2606.20781 | 1 | World Action Models: A Survey | WAM 综述，高度相关，将在第三批全文评分 |
| arxiv-2606.12207 | 2 | Intelligent Automation for Embodied Benchmark Construction | 具身基准构建综述，第三批评分 |
| arxiv-2606.16788 | 4 | SoK: Security and Privacy of Foundation-Model-Powered Robots | 安全隐私 SoK，综述类 |

> 结论：原"33 篇 surveys"分类由关键词自动生成，误报率高达 88%（29/33）。大部分被标为 surveys 的原因是标题或摘要出现 "survey"（如 contamination surveys）或论文类型识别错误（position paper、analysis paper 被误归为 survey）。

## 6. 关键词过滤误报类型统计

第二批 13 篇 reject/watch 论文中，关键词匹配但实际不符合收录标准的原因分布：

| 误报类型 | 数量 | 典型示例 |
|---|---|---|
| 四足硬件/步态无操作组件 | 3 | Quadruped Soft Tail, KYON, Go2-W navigation |
| 小众平台（AUV/UAV） | 1 | AUV motion planning |
| 纯硬件/传感器（无算法贡献） | 1 | Event-based optical tactile sensor |
| 医疗/假肢 | 1 | Prosthetic grasping |
| 立场/观点论文（无实验） | 1 | Robots Need More than VLA |
| 早期研究/组合创新有限 | 3 | Data Flywheel, Contrastive Interaction, Kine2Go |
| 纯机械设计（无学习） | 1 | DexLink Hand |
| 其他边缘 | 2 | — |

### 第三批快速过滤建议

基于本批发现的误报模式，建议对 1,375 篇待处理候选（ks ≤ 5）应用以下更严格的规则：

1. **排除纯四足/轮式移动平台论文**：标题含 quadruped/legged/wheeled 但 abstract 中无 manipulation/grasping/pick-place 关键词 → 快速 reject
2. **排除纯硬件/传感器论文**：keyword_score ≤ 3 且 keyword_hits 仅含 robot/sensor/hardware 而无 learning/policy/RL/IL → 快速 reject
3. **排除纯导航/路径规划**：标题含 navigation/path planning 但无 manipulation/VLA/embodied 关键词 → 快速 reject
4. **排除 AUV/UAV/无人机**：非操作类机器人平台 → 快速 reject
5. **排除医疗/假肢/康复**：keyword_hits 含 prosthetic/rehabilitation/medical 且无通用操作组件 → 快速 reject
6. **排除立场/观点/workshop 报告**：abstract 以 "we argue"/"this position paper"/"workshop report" 开头 → 快速 reject
7. **排除纯机械设计**：keyword_score ≤ 3 且 title 含 design/mechanism/kinematics 但无 learning/RL 关键词 → 快速 reject

预期效果：以上规则可淘汰约 **300–400 篇**明显偏题候选，将第三批有效候选压缩至 ~1,000 篇。

## 7. Watchlist 命中

第二批 82 篇中 watchlist 命中 31 篇（37.8%）：

- **Yuke Zhu** 相关：ASPIRE
- **Ajay Mandlekar** 相关：ASPIRE
- **Jim Fan** 相关：ASPIRE
- **Guanya Shi** 相关：ASPIRE
- **Georgia Tech RL2 (Danfei Xu)** 相关：EgoEngine（注：EgoEngine 在第一批已评分）
- **其他**：部分论文的初次关键词匹配与 watchlist 实际关系已由全文核验确认或排除

## 8. 新增论文目录

在 `papers/` 下为第二批 68 篇论文创建了文件：

```
papers/arxiv-2606.XXXXX/
  metadata.json   — schema v0.3，source_scope: full-source
  summary.zh.md   — AI 中文摘要，status: ai-draft
```

其中 16 篇 featured 论文有完整中文摘要（800–1500 字），52 篇 include 论文有基础框架（待后续补充完整摘要）。

## 9. 资产链接核验状态

全部 29 篇 featured 论文的 code_url/dataset_url/model_url 检查：

- **状态**：评分阶段的子代理在阅读全文时记录了可复现性信息，但未系统提取并验证 URL
- **已知可访问代码**：WEAVER（arxiv-2606.13672）、WLA Model（arxiv-2606.05979）、M3imic（arxiv-2606.04829）
- **"承诺开源"但未确认**：HANDOFF、ASPIRE、VISTA 等
- **未公开代码**：大部分论文（Play2Perfect、Wh0、CoorDex、MotionDisco、VibeAct、OmniAct、DexFuture 等）

> 根据 rubric 规则，"即将开源"不计入可复现性资产分。本批 reproducibility 分普遍偏低（3–7 分），反映了当前具身智能领域代码公开率不足的现状。

## 10. 剩余待处理与第三批建议

| 指标 | 数值 |
|---|---|
| 候选池总数 | 1,478 |
| 已评分（第一批+第二批） | 103 |
| **剩余待处理** | **1,375** |
| 其中 ks=6 | ~164 |
| 其中 ks=4–5 | ~508 |
| 其中 ks=0–3 | ~638 |

### 第三批处理建议

1. **优先处理 ks=6 候选（~164 篇）**：应用本批的快速过滤规则，预计 40–60% 可通过硬门槛
2. **快速批量过滤 ks=4–5（~508 篇）**：使用建议的 7 条快速过滤规则，仅对通过者做硬门槛和全文评分
3. **批量 reject ks ≤ 3（~638 篇）**：采样验证 5%（~32 篇）确认无系统性漏选后，其余快速标记 reject
4. **补全 include 论文的完整中文摘要**：52 篇 include 论文的 summary.zh.md 目前为框架状态
5. **系统验证所有 featured 论文的 URL**：逐篇 curl HEAD 验证 code_url/dataset_url/model_url

## 11. 已知问题与风险

1. **ar5iv HTML 不渲染图片**：所有论文的 source_access.figure_images_accessed 为 false，依赖图片的结果无法独立核验
2. **URL 提取不完整**：子代理在评分时读取了全文但未系统提取 code_url/dataset_url/model_url，需后续补做
3. **52 篇 include 论文摘要为框架状态**：需要后续批次补全中文摘要内容
4. **arxiv-2606.31836 (RoboTacDex)**：ar5iv 全文不可用，已标记为 defer，等待可访问后重评
5. **arxiv-2607.* 论文**：2 篇论文（arxiv-2607.09701 EgoSteer、arxiv-2607.00272 ASPIRE）首发日期在 7 月而非 6 月，因关键词评分高列入本批，但需在 7 月回填时做跨月去重
6. **6 月底论文时效分**：本批论文首发于 6 月，7 月 24 日评价时距今约 30 天，时效分统一为 4
7. **1,375 篇待处理量大**：第三批需采用批量快速过滤策略，避免陷入逐篇全文阅读的时间陷阱

## 12. 需要人工审核的关键点

1. `featured` 论文全部需人工全文复核（第二批 16 篇 + 第一批 13 篇 = 共 29 篇）
2. `include` 论文需抽查至少 30%（建议 16–18 篇）
3. Embodied-R1.5（91 分）作为唯一 90+ 论文，需确认其 8B EFM 权重是否真实可访问
4. WLA Model（88 分）声称的开放代码需验证链接有效性
5. arxiv-2607.* 两篇论文的跨月归属需人工决定
6. Surveys 真实命中（4 篇）需人工确认是否全部值得以 `content_type: survey` 收录
7. 建议对 ks ≤ 3 候选池随机采样 32 篇做人工校验，确认批量 reject 策略无系统性漏选

## 13. 实际新增与修改的文件

| 类型 | 路径 | 数量 |
|---|---|---|
| 新增 papers | `papers/arxiv-2606.XXXXX/metadata.json` | 68 |
| 新增 papers | `papers/arxiv-2606.XXXXX/summary.zh.md` | 68 |
| 新增评分 | `candidates/2026-06-backfill/scored-batch-2.json` | 1 |
| 更新评分 | `candidates/2026-06-backfill/scored-candidates-unified.json` | 1 |
| 更新候选池 | `candidates/2026-06-backfill/candidate-pool.json` | 1 |
| 更新报告 | `candidates/2026-06-backfill/report.md` | 1 |
| 中间产物 | `candidates/2026-06-backfill/batch-*-results.json` | 4 |
| 中间产物 | `candidates/2026-06-backfill/batch2-*.json` | 4 |
| 中间产物 | `candidates/2026-06-backfill/content-batch-*.json` | 3 |

**未修改**：`site/app/papers.generated.json`、任何网页文件、Git 历史。
