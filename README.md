# Embodied AI Board

Embodied AI Board 是一个以论文内容为核心的具身智能知识看板，计划持续收录并整理算法、数据、仿真器、基础设施和综述等方向的研究成果。

项目当前处于内容规范验证与持续更新阶段。本目录定义论文发现、原始材料下载、候选筛选、AI 中文摘要、人工审核和网页发布的完整边界。

## 当前文档

- [内容与元数据规范](docs/content-spec.md)
- [受控标签词表](docs/taxonomy.md)
- [AI 摘要模板](docs/summary-template.md)
- [20 篇论文试运行计划](docs/pilot-plan.md)
- [Agent 执行任务说明](docs/agent-prompt.md)
- [论文发现规范](docs/discovery-spec.md)
- [候选筛选量表](docs/selection-rubric.md)
- [Agent 工作目录规范](docs/workspace-layout.md)

## 项目目录

```text
config/
  watchlist.json              # 发现源、实验室和作者观察名单
candidates/
  YYYY-MM-DD/                 # 每次发现与筛选运行结果
docs/
papers/
  <paper-id>/                 # 已批准进入内容生产的正式记录
    metadata.json
    summary.zh.md
reports/                      # 迁移、词表和质量报告
scripts/                      # 内容迁移与校验脚本
site/                         # 网页应用；不存放 Agent 原始下载
workbench/
  downloads/<paper-id>/       # HTML、PDF、TXT 等原始材料
  notes/<run-id>/             # 临时提取结果和工作笔记
```

## 工作流

```text
从 config/watchlist.json 与官方 API 发现候选
→ 去重与相关性判断
→ 下载原始材料到 workbench/downloads/<paper-id>/
→ 输出候选到 candidates/<run-date>/
→ 人工批准收录
→ AI 提取字段、推荐标签并生成摘要
→ 只将正式内容写入 papers/<paper-id>/
→ 人工核验事实与标签
→ site/scripts/sync-content.mjs 同步
→ 发布
→ 定期检查论文版本及开源状态
```

`papers/` 只放发布型结构化内容；PDF、HTML、TXT、抓取缓存和 Agent 临时文件不得写入该目录。
