# Embodied AI Board 论文发现规范 v0.1

## 1. 目标与边界

本流程用于发现“近期且可能值得收录”的 Embodied AI 工作。发现结果先进入候选队列，不直接进入正式论文库，也不直接生成发布版摘要。

观察名单、机构声誉、作者知名度、社交媒体热度只帮助发现候选，不能替代论文证据，也不进入 100 分质量评分。

## 2. 运行频率与时间窗

- 每日执行轻量抓取与去重。
- 每周二、周五执行完整候选筛选，与网站更新节奏对齐。
- 默认检查最近 14 天首次公开或有实质修订的工作。
- 若通过硬门槛的候选少于 10 篇，回溯到最近 30 天。
- “近期”按首次公开日期判断；旧论文仅更新代码或项目页时，记录为资产更新，不伪装成新论文。

## 3. 发现源优先级

1. 原始论文源：arXiv、OpenReview、会议正式论文页。
2. 机构与项目源：实验室 publication/project 页面、作者主页。
3. 资产源：GitHub release、Hugging Face model/dataset 页面、官方数据或仿真器站点。
4. 推荐源：Hugging Face Daily Papers、Semantic Scholar Recommendations。
5. 社交与聚合信息只作为线索，最终必须回到一手来源核验。

具体来源、实验室和作者见 `config/watchlist.json`。

## 4. 每次运行流程

### 4.1 拉取

- 从所有 priority 1 来源和至少两个 priority 2 来源拉取时间窗内条目。
- 使用受控关键词与观察名单交叉发现。
- 保存发现时间、发现来源、原始 URL 和观察名单命中项。

### 4.2 规范化与去重

- arXiv 论文以规范化 arXiv ID 去重，去掉版本后缀。
- 其他论文优先用 DOI、OpenReview forum ID；仍无稳定 ID 时用规范化标题 + 第一作者 + 年份。
- 项目页、论文页、代码仓库属于同一工作时合并为一个候选。
- 与 `papers/*/metadata.json` 比较，标记 `already_on_board`，不重复进入新收录队列。
- 同一工作的修订版记录 `update_type: revision`，说明新增证据，不重复计数。

### 4.3 快速相关性过滤

候选必须直接涉及具身智能、机器人学习、机器人系统、机器人数据/仿真/评测，或对这些方向有明确可验证的基础设施贡献。

以下内容默认排除：

- 仅有“agent”措辞、没有物理环境或机器人证据的软件智能体；
- 纯自动驾驶、纯医学、纯生成视觉工作，除非明确提供可迁移到机器人且被实验验证的核心贡献；
- 只有宣传稿、没有论文或技术报告的一般产品发布；
- 重复发布、无实质新内容的版本。

### 4.4 一手来源与全文读取

- 元数据先读取 arXiv 摘要页或同等一手页面。
- 全文默认顺序：ar5iv HTML → arXiv 官方 HTML/LaTeXML → OpenReview HTML/PDF → PDF。
- 只有检测并阅读方法、实验、结论/局限等至少三个主要章节，才可标记 `full-source`。
- 只有摘要和元数据时，候选可保留，但 `source_scope` 必须是 `abstract-and-metadata`，不得进入“正式推荐”或生成完整长摘要。
- 关键实验数字必须能追溯到正文章节、表格、图或附录。

### 4.5 硬门槛

任一项不满足即停止评分，并给出拒绝或暂缓原因：

1. 与 Embodied AI/机器人直接相关；
2. 存在可访问的一手来源；
3. 能说明相对已有工作的明确增量贡献；
4. 核心主张有实验、数据、系统结果或严谨分析支持；
5. 正式推荐必须能读取全文；摘要级来源只能进入待观察队列。

### 4.6 评分与分流

通过硬门槛后，严格按 `selection-rubric.md` 打分：

- 80–100：`featured`，建议重点收录，必须人工确认；
- 65–79：`include`，建议常规收录；
- 50–64：`watch`，进入简讯或持续观察；
- 0–49：`reject`，记录原因，不进入内容生产。

最终是否发布由编辑人工确认。分数相同时优先选择：信息增益更高、证据更完整、板块覆盖更均衡的论文。

## 5. 每批候选输出

保存到 `candidates/YYYY-MM-DD/`：

```text
candidates/YYYY-MM-DD/
├── candidates.json
└── report.md
```

`candidates.json` 顶层结构：

```json
{
  "run": {
    "run_at": "YYYY-MM-DD",
    "window_start": "YYYY-MM-DD",
    "window_end": "YYYY-MM-DD",
    "sources_checked": [],
    "rubric_version": "0.1",
    "watchlist_version": "0.1"
  },
  "candidates": []
}
```

每个候选至少包含：

```json
{
  "id": "arxiv-YYMM.NNNNN",
  "title": "...",
  "paper_url": "https://...",
  "first_publication": "YYYY-MM-DD",
  "last_revision": "YYYY-MM-DD or null",
  "authors": ["..."],
  "organizations": ["..."],
  "discovered_via": ["..."],
  "watchlist_matches": ["..."],
  "already_on_board": false,
  "source_scope": "full-source | abstract-and-metadata | inaccessible",
  "fulltext_url": "https://... or null",
  "hard_gates": {
    "embodied_relevance": {"pass": true, "evidence": "..."},
    "primary_source": {"pass": true, "evidence": "..."},
    "incremental_contribution": {"pass": true, "evidence": "..."},
    "claim_support": {"pass": true, "evidence": "..."},
    "fulltext_for_recommendation": {"pass": true, "evidence": "..."}
  },
  "scores": {
    "relevance": 0,
    "novelty": 0,
    "evidence_quality": 0,
    "potential_impact": 0,
    "board_information_gain": 0,
    "reproducibility": 0,
    "timeliness": 0,
    "total": 0
  },
  "decision": "featured | include | watch | reject | defer",
  "selection_reason": "...",
  "risks_or_uncertainties": ["..."],
  "suggested_sections": ["algorithms"],
  "suggested_topics": ["vla"]
}
```

`report.md` 应汇总来源覆盖、漏斗数量、推荐名单、板块分布、被拒原因和需要人工核验的问题。

## 6. 人工编辑规则

- 每批人工复核所有 `featured`，并抽查至少 30% 的 `include`。
- 每批随机抽查至少 5% 的 `reject`，监测系统性漏选。
- 同一团队连续多篇相似工作要比较其增量，避免因关注名单导致版面垄断。
- 每月复盘一次阈值、来源覆盖和误判案例；修改规范时升级版本号。

## 7. 与内容生产的衔接

人工确认收录后，才按照 `docs/content-spec.md`、`docs/taxonomy.md` 和 `docs/summary-template.md` 创建正式 `papers/<paper-id>/` 内容。候选评分是编辑决策记录，不应被包装成客观或永久性的论文排名。
