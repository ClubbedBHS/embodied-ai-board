# Schema v0.3 迁移报告

> 生成日期：2026-07-22
> 最后更新：2026-07-22（批量补全 source_access）
> 论文总数：26

## 最终汇总

### content_type

- `official-blog`: 3
- `paper`: 22
- `thesis`: 1

### source_scope（处理后）

- `full-source`: 24（原6 + 新增18）
- `partial-source`: 1（arxiv-2607.08127，ar5iv 不可用）
- `metadata-only`: 1（phd-danfei-xu-2021，Stanford PDF 不可达）

## 逐篇处理结果

| ID | content_type | source_scope | 原 Scope | fulltext_source | sections | 备注 |
|---|---|---|---|---|---|---|
| arxiv-1710.01813 | paper | full-source | partial-source | ar5iv-html | 11 | ✓ 升级 |
| arxiv-1909.13072 | paper | full-source | partial-source | ar5iv-html | 8 | ✓ 升级 |
| arxiv-2108.03298 | paper | full-source | partial-source | ar5iv-html | 5 | ✓ 升级；修正 author affiliations |
| arxiv-2209.11302 | paper | full-source | partial-source | ar5iv-html | 6 | ✓ 升级；修正 text-davinci-003 时代错误 |
| arxiv-2210.12631 | paper | full-source | partial-source | ar5iv-html | 13 | ✓ 升级 |
| arxiv-2302.12422 | paper | full-source | partial-source | ar5iv-html | 9 | ✓ 升级；修正 author 机构（NVIDIA/Georgia Tech） |
| arxiv-2303.04137 | paper | full-source | full-source | - | - | 未修改（已有 v0.2 完整记录） |
| arxiv-2304.13705 | paper | full-source | full-source | - | - | 未修改 |
| arxiv-2403.03954 | paper | full-source | full-source | - | - | 未修改 |
| arxiv-2407.06886 | paper | full-source | partial-source | ar5iv-html | 9 | ✓ 升级；修正重大幻觉（ARIO/taxonomy/venue） |
| arxiv-2511.04831 | paper | full-source | partial-source | ar5iv-html | 8 | ✓ 升级；修正 AutoMate 数据 |
| arxiv-2602.16710 | paper | full-source | partial-source | ar5iv-html | 21 | ✓ 升级；Figure 4 图像数据无法独立核验 |
| arxiv-2602.22818 | paper | full-source | partial-source | ar5iv-html | 5 | ✓ 升级；补全 YAML frontmatter + 事实核验 |
| arxiv-2603.02646 | paper | full-source | partial-source | ar5iv-html | 9 | ✓ 升级；修正 real-robot 结果（定性→定量） |
| arxiv-2603.17300 | paper | full-source | partial-source | ar5iv-html | 19 | ✓ 升级 |
| arxiv-2604.07607 | paper | full-source | partial-source | ar5iv-html | 8 | ✓ 升级；修正 EgoVerse-I episode count |
| arxiv-2604.25788 | paper | full-source | partial-source | ar5iv-html | 8 | ✓ 升级；修正 source_access 结构 |
| arxiv-2606.28276 | paper | full-source | partial-source | ar5iv-html | 8 | ✓ 升级；补全 v0.2 summary |
| arxiv-2606.28813 | paper | full-source | partial-source | ar5iv-html | 7 | ✓ 升级 |
| arxiv-2607.00033 | paper | full-source | partial-source | arxiv-htmlv2 | 23 | ✓ 升级（ar5iv redirect，用 arXiv HTMLv2）|
| arxiv-2607.08127 | paper | partial-source | partial-source | arxiv-pdf | 7 | ar5iv 不可用（307 redirect），改用 PDF 读取全文 |
| arxiv-2607.08436 | paper | full-source | partial-source | arxiv-latexml-html | 12 | ✓ 升级（ar5iv redirect，用 arXiv LaTeXML HTML）|
| pi0-2024 | official-blog | full-source | full-source | - | - | 未修改 |
| pi05-2025 | official-blog | full-source | full-source | - | - | 未修改 |
| pi06-2025 | official-blog | full-source | full-source | - | - | 未修改 |
| phd-danfei-xu-2021 | thesis | metadata-only | metadata-only | - | 0 | Stanford stacks.stanford.edu 不可达，仅能访问 MODS 元数据 |

## 处理统计

- **升级到 full-source**：18 篇
- **保持 partial-source**：1 篇（ar5iv 不可用，PDF 可读但不满足 v0.3 full-source 条件）
- **保持 metadata-only**：1 篇（PDF 服务器不可达）
- **未修改（已有完整记录）**：6 篇（3 full-source paper + 3 official-blog）
- **migration 段已移除**：全部 20 篇
- **summary_version → 0.2**：全部 20 篇

## 关键发现与问题

### 事实错误修正

处理过程中发现并修正了以下重要错误：

1. **arxiv-2407.06886（Embodied AI Survey）**：v0.1 摘要中虚构了 ARIO 数据集（~3M episodes）、ABC 分类法（AI Brain/Body/Cross-modal）和 IEEE TMECH 发表信息。全部修正为 ar5iv 文本中实际存在的内容。
2. **arxiv-2209.11302（ProgPrompt）**：将 GPT-3 模型标注为 text-davinci-003，但该模型在论文提交后才发布。
3. **arxiv-2302.12422（MimicPlay）**：作者机构标注错误（Danfei Xu 实际在 NVIDIA/Georgia Tech，而非 Stanford）。
4. **arxiv-2108.03298（robomimic）**：Soroush Nasiriany 和 Yuke Zhu 机构修正（UT Austin 而非 Stanford）。
5. **arxiv-2604.07607（EgoVerse）**：EgoVerse-I episode count 从 78,000 修正为 76,121（Table II 精确值）。
6. **arxiv-2603.02646（DiffCollage）**：real-robot 结果从"定性结果"修正为定量（Table 3 评分）。

### 仍存在的问题

1. **ar5iv 可用性**：近期论文（2026年6-7月）ar5iv 经常返回 307 redirect。需考虑是否允许 arXiv LaTeXML HTML 或 PDF 替代 ar5iv 作为 full-source 的合法来源。
2. **phd-danfei-xu-2021**：Stanford Digital Repository 的文件服务器（stacks.stanford.edu）从 agent 环境不可达。需人工下载 PDF 后补充。
3. **arxiv-2607.08127（DROID-Grasp）**：ar5iv 不可用，通过 PDF 读取了全文但按 v0.3 规范不能标 full-source。
4. **图像依赖数据**：多数论文中 Figure 图表中的数据无法从 HTML 文本中独立核验，需人工对照 PDF。
5. **summary 格式不一致**：arxiv-2602.22818（LeRobot）的原 v0.1 摘要缺少 YAML frontmatter 和事实核验记录，使用的是非标准章节标题。

### v0.3 规范建议

1. `source_access.sections_detected` 格式不统一 — 有些使用罗马数字（I, II），有些使用阿拉伯数字（1, 2），建议规定标准格式。
2. 对于 ar5iv 不可用但通过 arXiv LaTeXML HTML 或 PDF 完整读取的论文，建议在 v0.3 中增加 alternative fulltext source 的认可路径。
3. `fulltext_source` 字段出现非标准值（arxiv-htmlv2, arxiv-latexml-html, arxiv-pdf），建议在规范中扩展允许值列表。

## Codex 复核记录

Hermes 完成后进行了独立结构校验，并做了以下修正：

- 将 4 个非标准机构角色 `secondary` / `contributor` 统一为受控值 `collaborator`。
- 将 `methods`、`experiments` 等非标准板块恢复为受控板块。
- 将 `bimanual-manipulation`、`pick-and-place` 归并到正式任务标签 `manipulation`。
- 移除正式标签中的 `real-to-sim`、`scene-generation`、`data-augmentation`、`policy-evaluation`、`digital-twin`；其中有明确独立价值的概念转入 `suggested_new_tags`。
- v0.3 规范已正式允许 `ar5iv-html`、`arxiv-htmlv2` 和 `arxiv-latexml-html` 三种 HTML 全文来源；PDF-only 条目仍需人工确认后才能升级。

复核后全部 26 个 JSON 均可解析，正式标签、机构角色、内容类型和来源状态均符合受控词表。
