# Agent 执行任务说明

以下内容可以直接交给负责试运行的 Agent。

```text
请选取 20 篇具有代表性的 Embodied AI 论文，用于测试论文内容系统的 Schema、标签词表和 AI 中文摘要模板。

开始前完整阅读：

- README.md
- docs/content-spec.md
- docs/taxonomy.md
- docs/summary-template.md
- docs/pilot-plan.md
- docs/workspace-layout.md
- docs/metadata-verification.md

严格遵守以下要求：

1. 论文需要覆盖算法、数据、仿真器、基础设施和综述。
2. 按 docs/pilot-plan.md 的采样数量和覆盖要求选取论文。
3. 对 arXiv 论文，先读取 arXiv 摘要页 HTML 获取元数据，再读取 ar5iv HTML 全文：
   - 元数据：https://arxiv.org/abs/<arxiv-id>
   - 全文：https://ar5iv.labs.arxiv.org/html/<arxiv-id>
4. ar5iv HTML 是默认全文源。必须实际阅读方法、实验、结论和局限性相关章节，不能只基于 abstract 生成内容。
5. ar5iv 不可访问或正文缺失时，先尝试 arXiv 官方 HTML/LaTeXML 全文；仍不可用或需要核验公式、表格、图片时才下载 PDF。不要因为 PDF 下载超时而跳过 HTML 全文。
6. 为每条内容填写顶层 content_type：paper、technical-report、official-blog、thesis 或 survey。
7. 如果只能读取摘要页，将顶层 source_scope 标为 abstract-and-metadata，停止生成完整长摘要，并在 uncertainties 中说明原因。
8. 只有检测到至少三个主要章节且实际读取方法、实验和结论后，才能把顶层 source_scope 标为 full-source；同时填写 source_access。
9. 完整阅读官方博客可标记为 content_type=official-blog、source_scope=full-source，但必须把实验结论写成“官方博客报告”，不得表述为同行评审结论。
10. ar5iv 不包含或无法可靠呈现的图片不视为已读取。依赖图片才能确认的结论需要通过 PDF 核验，否则写入 uncertainties。
11. 不允许自由创建正式标签。现有词表不足时写入 suggested_new_tags。
12. 无法核实的字段填写 null、空数组或 unknown，不允许猜测。
13. 区分首次公开日期、修订日期和会议发表状态。
14. 区分真实机器人实验、仿真实验和混合实验。
15. 严格执行 docs/metadata-verification.md：读取论文后继续扫描 arXiv 外部链接、HTML 的 href 与锚文本，以及官方项目主页中的 Code、GitHub、Dataset、Model、Weights 和 Documentation 按钮。
16. 对裸域名和 ar5iv 错误相对链接进行规范化；GitHub 优先使用 API 验证。HTTP 超时、连接重置、403 或 HEAD 失败标为 verification-error，不得表述成“未开源”。
17. 只有实际公开且验证可访问的代码、数据和权重才能加入 assets 标签；但发现的未验证 URL 和错误原因必须保存在 asset_checks，不能直接丢弃。
18. 关键实验数字在 Markdown 中注明 HTML 章节、表格或图编号；通过 PDF 核验时可补充页码。
19. 团队优先从论文 affiliation 和官方项目页的作者机构映射提取。机构的 primary 角色必须有明确来源，不得根据作者知名度推断；无法确认实验室时仍要保存已确认的大学或公司。
20. 每篇论文输出：
    papers/<paper-id>/metadata.json
    papers/<paper-id>/summary.zh.md
    只有候选已被人工批准进入内容生产时，才允许写入 papers/。
    原始 HTML、PDF、TXT、LaTeX source 和图片必须写入 workbench/downloads/<paper-id>/，不得放进 papers/。
    临时提取结果、失败日志和推理笔记写入 workbench/notes/<run-id>/。
    发现与筛选结果写入 candidates/<run-date>/，不得直接进入网页数据。
21. 所有论文的 editorial.status 和摘要 status 均保持 ai-draft。
22. 不修改现有 Schema 或正式词表；改进建议统一写入最终报告。
23. 最后输出 reports/taxonomy-report.md，汇总：
    - 每个正式标签的使用次数；
    - 所有 suggested_new_tags 及出现次数；
    - 难以分类的论文；
    - 字段定义不清或无法稳定获取的地方；
    - AI 摘要中容易发生的事实错误；
    - 对 Schema、标签词表和摘要模板的修改建议。

本轮目标是测试格式与可靠性，不是追求论文数量或自动发布。遇到证据不足时保留不确定性，不要自行补全。
```
