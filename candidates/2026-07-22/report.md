# 第一批近期候选报告（2026-07-22）

## 结论

本轮最终保留 10 个真实候选：`featured` 5 篇、`include` 3 篇、`defer` 2 篇。2026-07-23 人工复核后，Agentic Real2Sim 调整为 `featured`（81），Closing the Loop in Humanoid VLA 调整为 `include`（75），FM-VLA 维持 `include`。

优先建议人工复核：

1. Masked Visual Actions（84）：统一视觉动作接口的世界模型，兼顾前向预测、规划和逆模型。
2. RoboInter1.5（82）：数据、VQA、VLA 与世界模型的中间表征套件，能补足数据和基建板块。
3. Agentic Real2Sim（81）：把真实交互录像转换为可运行 episode twin，具有数据、仿真和评测的基础设施价值。
4. Patch Policy（81）：不用完整 VLM，通过 dense visual patch token 获得轻量高频控制。
5. WorldScape Policy 2.0（80）：事件级记忆、ManipEvent-5M 与长程 WAM 控制。

常规收录候选：Closing the Loop in Humanoid VLA（75）、FM-VLA（73）、Reasoning as a Double-Edged Sword（79）。

暂缓：UniETP（61）和 MEVION（68）。两者方向都值得关注，但本轮官方 HTML 全文不可访问，按硬门槛不能正式推荐。

## 发现漏斗

| 阶段 | 数量 | 说明 |
|---|---:|---|
| arXiv cs.RO 官方 feed | 200 | 2026-07-22 抓取的最新条目 |
| 固定候选 | 10 | 按看板方向与板块覆盖人工缩小 |
| 去重后 | 10 | 均不在现有 26 条看板内容中 |
| 可读取官方 HTML 全文 | 8 | 实际核验方法、实验、结论/局限 |
| 全文暂不可读 | 2 | UniETP、MEVION，标记 `defer` |
| Featured / Include | 5 / 3 | 仍需编辑复核，不自动发布 |

## 来源覆盖

- 已使用：arXiv cs.RO 官方 API、arXiv 摘要 HTML、arXiv 官方 LaTeXML HTML。
- 本轮尚未稳定接入：Hugging Face Daily Papers、Semantic Scholar Recommendations、OpenReview、实验室 publication feed。
- 因此这是一轮“arXiv 单源基线”，不能代表完整发现覆盖率。

## 板块分布

- 算法：Masked Visual Actions、WorldScape Policy 2.0、RoboInter1.5、Patch Policy、FM-VLA、POT-VLA、VLA Robustness。
- 数据：RoboInter1.5、WorldScape Policy 2.0、MEVION。
- 仿真器/基建：Agentic Real2Sim、UniETP、MEVION、RoboInter1.5。
- 综述：本轮无。

当前候选仍偏算法，后续批次需要主动提高数据、仿真器、基础设施和综述的发现配额。

## Hermes 运行审计

Hermes 的第一次自由发现生成了 10 条候选，但其中大量 arXiv ID、作者与项目页无法在一手来源中验证，整批结果已丢弃，没有写入正式候选。

第二次采用 arXiv 官方 feed 的固定 URL 后，Hermes 网页工具仍出现组合工具缺失和只返回单次 fetch 原始响应的问题。因此本文件中的候选身份、作者、日期、全文可用性、实验线索和最终分数都经过独立的一手来源复核。这个结果说明：当前 Hermes 适合作为“基于固定 URL 的辅助阅读器”，还不适合无约束地生成候选列表。

下一版 Agent 流程应强制：

1. 发现阶段只接受 arXiv/OpenReview API 返回的 ID，不接受模型自由生成 ID。
2. 每个候选先做 HTTP 存在性校验，再交给模型阅读全文。
3. Agent 输出后必须由程序校验 URL、日期、总分加总、阈值和标签词表。
4. `featured/include` 若没有成功读取 HTML 方法、实验和结论/局限章节，自动降为 `defer`。

## 人工核验清单

- 检查五篇 `featured` 的代码、数据、模型权重是否已经公开，不能把“将发布”算作资产。
- 核验 RoboInter-Data 的来源、许可、自动标注误差和 23 万 episode 统计口径。
- 核验 ManipEvent-5M 的可访问性与 5M event segment 的构造/去重方式。
- 核验 Agentic Real2Sim 在 deformable 与 humanoid 域是否只有定性展示。
- 尝试通过 PDF 补读 UniETP 和 MEVION；完成前保持 `defer`。
- 检查 POT-VLA 与外部 Being-0 数字是否在完全一致的协议下比较。
- 对 VLA robustness 论文确认三个模型之间的 backbone、规模、数据与 action head 混杂是否影响结论。
