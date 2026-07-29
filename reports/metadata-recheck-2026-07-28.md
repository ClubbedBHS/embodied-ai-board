# Metadata Recheck Report — 2026-07-28

## 结果

Hermes 已扫描 184 篇论文的团队与资产元数据。独立 QA 发现其最初的全文级机构正则把参考文献和 ar5iv 页脚中的 MIT、Google、Apple、TRI 等误当作者机构；现已移除这些无作用域证据，只保留论文作者 affiliation 区或官方项目页证据。

| 优先级 | 总数 | 团队已确认 | 团队缺失 | verified code | verified data | verified model | announced | project-only | verification-error | not-found |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| P0 | 95 | 63 | 32 | 21 | 0 | 0 | 0 | 40 | 12 | 254 |
| P1 | 52 | 49 | 3 | 10 | 2 | 1 | 0 | 22 | 0 | 143 |
| P2 | 37 | 31 | 6 | 9 | 0 | 0 | 0 | 21 | 0 | 103 |
| 全部 | 184 | 143 | 41 | 40 | 2 | 1 | 0 | 83 | 12 | 500 |

## 基线

- 用户给定基线：184 篇中 71 篇有机构证据、87 篇有 asset_checks。
- P1 基线：52 篇中 43 篇有机构证据、5 篇有 verified 资产。
- 本轮实际修改 metadata：10 篇；同步候选记录 782 条，涉及 2 个 JSON 文件。

## 重点抽查

- `arxiv-2606.26341`：UC Berkeley、ETH Zürich 的 author-block 证据保留；jaxipm 由 GitHub API 验证。
- `arxiv-2606.10244`（YUBI）：LeRobot 引用误报已移除；团队及官方资产仍需人工核验。
- `arxiv-2606.03682`（GN0）：GN0 GitHub 与 GN-BAE Hugging Face 已验证；全文引用区的机构误报已移除。
- `arxiv-2606.04968`（ForesightFlow）：未确认官方代码/项目页；全文引用区机构误报已移除。
- `arxiv-2607.07459`（EmbodiedGen V2）：项目页确认 Horizon Robotics、WuwenAI；相对 href 已恢复为 GitHub 仓库并验证。
- 另抽查旧版 robomimic、MimicPlay、Diffusion Policy、ALOHA、3D Diffusion Policy，官方仓库与项目页均保留。

## 仍需人工处理

- 41 篇没有可靠 author-block/project-page 机构证据；没有根据作者名或邮箱猜测。
- YUBI 与 ForesightFlow 尚未发现可确认的官方资产。
- 非 arXiv 内容无法使用 arXiv/ar5iv 核验，记录为 verification-error。
- HTML 图片内容未作为机构或资产证据。

## 校验

- 所有 184 个 metadata JSON 均可解析。
- 候选同步仅写入 organizations、organization_evidence、project_url、asset_checks、code_url、dataset_url、model_url。
- 没有修改摘要、评分、decision、网页或 site 生成数据。
