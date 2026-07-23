# Agent 工作目录规范 v0.1

本规范定义论文发现、下载、候选筛选、正式内容生产和网页同步的文件边界。Agent 开始任务前必须先确认当前阶段，并只写入对应目录。

## 目录职责

```text
config/
  watchlist.json

candidates/
  YYYY-MM-DD/
    candidates.json
    report.md

papers/
  <paper-id>/
    metadata.json
    summary.zh.md

workbench/
  downloads/
    <paper-id>/
      abstract.html
      fulltext.html
      paper.pdf
      paper.txt
      source.tar.gz
  notes/
    <run-id>/
      extraction.json
      validation.md
      failures.log

reports/
site/
scripts/
```

## 强制写入规则

| 工作阶段 | 允许写入 | 禁止写入 |
|---|---|---|
| 发现与去重 | `candidates/<run-date>/` | `papers/`、`site/app/` |
| 下载全文 | `workbench/downloads/<paper-id>/` | `papers/<paper-id>/` |
| 临时提取与调试 | `workbench/notes/<run-id>/` | 项目根目录、`site/` |
| 正式内容生产 | `papers/<paper-id>/metadata.json`、`summary.zh.md` | PDF、HTML、TXT、日志 |
| 报告 | `reports/` 或对应候选运行目录 | 项目根目录 |
| 网页同步 | 运行 `site/scripts/sync-content.mjs` | 手工编辑 `papers.generated.json` |

## Agent 输入参数

每次任务必须明确给出：

- `project_root`：项目绝对路径；
- `run_id`：例如 `2026-07-23-weekly-01`；
- `stage`：`discovery`、`download`、`content-production`、`validation` 或 `publish`；
- `candidate_input`：候选 JSON 路径；
- `approved_ids`：人工批准的论文 ID；
- `download_root`：固定为 `<project_root>/workbench/downloads`；
- `notes_root`：固定为 `<project_root>/workbench/notes/<run-id>`；
- `formal_output_root`：固定为 `<project_root>/papers`。

若未提供 `approved_ids`，Agent 不得创建或修改 `papers/` 内容。

## 文件命名

- arXiv：`arxiv-YYMM.NNNNN`
- OpenReview：`openreview-<forum-id>`
- 下载文件使用固定名称，不把标题作为文件名。
- 同一次运行的临时文件必须放进同一个 `notes/<run-id>/`。

## 清理与保留

- `papers/` 和 `candidates/` 是长期保留内容。
- `workbench/downloads/` 用于复核原始来源，可按存储策略归档。
- `workbench/notes/` 是可清理的中间产物，发布后只保留必要的验证记录。
- 网页只读取 `papers/`，不会读取 `workbench/` 或未批准候选。
