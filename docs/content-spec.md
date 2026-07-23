# 论文内容与元数据规范 v0.3

## 1. 设计原则

- 结构化事实放入 `metadata.json`，阅读型内容放入 `summary.zh.md`。
- 对 arXiv 论文，默认以 ar5iv HTML 全文为主要内容源，以 arXiv 摘要页获取标题、作者、摘要和日期等元数据。
- ar5iv 不可用或正文缺失时才尝试下载 PDF；项目主页和官方仓库用于补充资源链接。
- 无法核实的信息使用 `null`、空数组或 `unknown`，禁止猜测。
- AI 可以推荐标签，但只能使用受控词表；新概念进入 `suggested_new_tags`。
- 所有 AI 结果必须经过人工审核后才能发布。

## 2. 文件结构

```text
papers/
  arxiv-2405.12345/
    metadata.json
    summary.zh.md
```

`papers/` 仅保存正式内容文件。Agent 下载的 HTML、PDF、TXT、LaTeX source、图片与中间提取结果必须分别保存到：

```text
workbench/
  downloads/<paper-id>/
  notes/<run-id>/
```

候选阶段只写入 `candidates/<run-date>/`。只有人工批准进入内容生产后，才创建 `papers/<paper-id>/`。

论文 ID 的优先级：

1. arXiv ID，例如 `arxiv-2405.12345`
2. OpenReview ID，例如 `openreview-xxxx`
3. DOI，例如 `doi-10.xxxx-xxxx`
4. 无稳定标识时使用标准化英文标题 slug

## 3. metadata.json 示例

```json
{
  "schema_version": "0.3",
  "id": "arxiv-2405.12345",
  "content_type": "paper",
  "source_scope": "full-source",
  "title": "Paper Title",
  "title_zh": "论文中文标题",
  "abstract": "Original abstract from the paper.",
  "paper_url": "https://arxiv.org/abs/2405.12345",
  "pdf_url": "https://arxiv.org/pdf/2405.12345",
  "project_url": null,
  "code_url": null,
  "dataset_url": null,
  "model_url": null,
  "video_url": null,
  "authors": [
    {
      "name": "Author Name",
      "affiliations": ["example-lab"]
    }
  ],
  "organizations": [
    {
      "id": "example-lab",
      "name": "Example Lab",
      "role": "primary"
    }
  ],
  "dates": {
    "first_publication": "2026-07-01",
    "last_revision": "2026-07-10"
  },
  "venue": {
    "name": null,
    "year": null,
    "status": "preprint"
  },
  "labels": {
    "sections": ["algorithms"],
    "topics": ["vla", "behavior-cloning"],
    "tasks": ["manipulation"],
    "platforms": ["robot-arm"],
    "modalities": ["vision", "language", "proprioception"],
    "environments": ["real-world"],
    "assets": ["code"],
    "properties": ["open-source", "real-robot-evaluation"]
  },
  "paper_type": ["method"],
  "editorial": {
    "importance": "normal",
    "selection_reason": "为什么值得收录，1—2 句话。",
    "status": "ai-draft"
  },
  "ai_generation": {
    "model": "model-name",
    "generated_at": "2026-07-21",
    "confidence": "medium",
    "needs_human_review": true,
    "uncertainties": ["无法从论文中确认主要贡献机构"]
  },
  "source_access": {
    "metadata_source": "arxiv-abstract-html",
    "fulltext_source": "ar5iv-html",
    "fulltext_url": "https://ar5iv.labs.arxiv.org/html/2405.12345",
    "fulltext_accessed": true,
    "sections_detected": ["Introduction", "Method", "Experiments", "Conclusion"],
    "figure_images_accessed": false,
    "accessed_at": "2026-07-21"
  },
  "sources": [
    {
      "type": "paper",
      "url": "https://arxiv.org/abs/2405.12345"
    }
  ],
  "suggested_new_tags": []
}
```

## 4. 枚举字段

### content_type

内容载体类型，只允许：

- `paper`
- `technical-report`
- `official-blog`
- `thesis`
- `survey`

`content_type` 描述“这是什么内容”，与论文的算法、数据、系统等 `paper_type` 分开。

### source_scope

实际读取范围，只允许：

- `full-source`：完整读取了当前内容载体，并有 `source_access` 证据
- `partial-source`：读取了部分正文，但无法证明覆盖完整内容
- `abstract-and-metadata`：只读取摘要和元数据
- `metadata-only`：只有标题、作者、日期等信息

`content_type` 与 `source_scope` 必须组合解释。例如：

```json
{
  "content_type": "official-blog",
  "source_scope": "full-source"
}
```

表示完整阅读了官方博客，而不是阅读了对应论文全文。

### venue.status

只允许：

- `preprint`
- `submitted`
- `accepted`
- `published`
- `unknown`

不得仅凭论文出现在 arXiv 上推断其已被会议接收。

### organizations.role

只允许：

- `primary`
- `collaborator`
- `unknown`

`primary` 必须有作者 affiliation、论文或项目主页等明确依据，不能根据作者知名度推断。

### paper_type

允许多选：

- `method`
- `dataset`
- `benchmark`
- `simulator`
- `infrastructure`
- `survey`
- `position`
- `analysis`
- `system`

### editorial.importance

- `featured`
- `normal`
- `brief`

试运行阶段由人工决定，AI 不自行评定。

### editorial.status

- `ai-draft`
- `in-review`
- `reviewed`
- `published`
- `needs-update`

## 5. 新标签提议

Agent 不得把词表以外的值直接写入 `labels`，而应使用：

```json
{
  "suggested_new_tags": [
    {
      "dimension": "topics",
      "slug": "world-action-model",
      "name": "World Action Model",
      "reason": "现有 world-model 标签无法区分直接预测动作的模型。",
      "evidence": "论文第 3 节明确将方法定义为 World Action Model。"
    }
  ]
}
```

完成 20 篇试运行后统一审核新标签，避免词表无序增长。

## 6. 信息来源优先级

1. ar5iv HTML 全文：方法、实验、结论和局限性的默认来源
2. arXiv 摘要页 HTML：标题、作者、摘要、版本和日期等元数据的默认来源
3. 论文 PDF 全文：ar5iv 不可用、公式/表格缺失或需要核验版式时使用
4. 会议或期刊官方页面
5. 作者或机构的项目主页
6. 官方代码仓库、数据集或模型页面
7. 第三方论文整理平台仅用于发现线索，不作为关键事实的唯一依据

## 7. HTML 全文读取规则

对 arXiv 论文，Agent 必须访问：

```text
元数据：https://arxiv.org/abs/<arxiv-id>
全文：https://ar5iv.labs.arxiv.org/html/<arxiv-id>
```

首选 `ar5iv-html`。如果 ar5iv 返回重定向、错误或没有正文，可以改用 arXiv 官方提供的 HTML/LaTeXML 全文。允许的 HTML 全文来源值为：

- `ar5iv-html`
- `arxiv-htmlv2`
- `arxiv-latexml-html`

PDF 仍是公式、表格和图片核验的后备来源；仅凭 PDF 读取暂不自动升级为 `full-source`，需要人工确认提取完整性。

只有同时满足以下条件，才允许将 `source_scope` 标为 `full-source`：

- 上述任一允许的 HTML 全文页面成功打开；
- 页面包含论文标题；
- 至少检测到 Introduction、Method/Approach、Experiments/Evaluation、Conclusion 中的三个部分；
- Agent 实际读取了方法、实验和结论部分；
- `source_access.fulltext_accessed` 为 `true`，并记录全文 URL 和访问时间。

如果只成功读取 arXiv 摘要页，必须将 `source_scope` 标为 `abstract-and-metadata`，不得生成完整长摘要。HTML 不包含或无法可靠呈现的图片内容不视为已读取；依赖图像才能确认的结论必须加入 `uncertainties`，或通过 PDF 再核验。

官方博客、技术报告和学位论文同样使用 `source_access` 记录实际读取来源。完整阅读官方博客可以标记为 `official-blog + full-source`，但正文必须明确写成“官方博客报告”，不得暗示其经过同行评审。
