# 团队与资产核验规则 v0.1

## 1. 目标

本规则用于补充论文发现与内容生产流程中的团队归属、项目主页、代码仓库、数据集和模型权重核验。目标是把“没有发现”“网络验证失败”和“作者尚未公开”严格区分，避免把抓取失败误写成论文未开源。

## 2. 团队核验

团队信息按以下顺序提取：

1. 论文 HTML/PDF 首页的作者 affiliation；
2. 官方项目主页明确列出的机构、实验室和公司；
3. 会议或期刊官方论文页；
4. 官方仓库 README 中明确列出的作者和机构。

不得根据知名作者当前任职、邮箱域名猜测整篇论文的贡献团队。项目主页明确写出的作者编号与机构映射属于可接受的一手证据。

候选记录必须同时保存：

```json
{
  "organizations": ["Horizon Robotics", "WuwenAI"],
  "organization_evidence": [
    {
      "organization": "Horizon Robotics",
      "source": "project-page",
      "url": "https://example.org/project/",
      "location": "author affiliation block"
    }
  ]
}
```

无法确认具体实验室时，可以填写已确认的大学或公司；不要因为实验室名称未知而把整个团队留空。

## 3. 项目页与资产发现

每篇进入全文评分的论文必须依次检查：

1. arXiv 摘要页的 Comments、Journal reference 和外部链接；
2. ar5iv/arXiv HTML 中所有链接的 `href` 和可见锚文本；
3. 官方项目主页中所有链接，特别是文本或按钮包含 `Code`、`GitHub`、`Repository`、`Dataset`、`Data`、`Model`、`Weights`、`Checkpoint`、`Documentation` 的链接；
4. 论文摘要或正文中直接写出的裸域名；
5. GitHub、Hugging Face 等官方 API。

链接规范化必须同时处理：

- `github.com/org/repo` → `https://github.com/org/repo`
- `huggingface.co/org/repo` → `https://huggingface.co/org/repo`
- ar5iv 误解析的相对链接，例如  
  `2607.07459v2/github.com/HorizonRobotics/EmbodiedGen`  
  → `https://github.com/HorizonRobotics/EmbodiedGen`
- `http` 跳转到 `https`
- URL 末尾的句号、逗号、右括号和 LaTeX 转义字符

不能只读取 `href`；当 `href` 异常时，必须尝试从锚文本恢复裸域名。

## 4. 验证状态

每个发现的资产链接必须保存一种状态：

- `verified`：通过官方 API，或跟随重定向后的 HTTP GET 成功访问；
- `announced`：作者明确承诺公开，但当前没有可访问地址；
- `project-page-only`：只有项目主页，没有具体资产链接；
- `verification-error`：超时、DNS、TLS、连接重置、反爬或权限环境导致无法完成验证；
- `not-found`：在完成规定来源扫描后仍没有发现地址，或官方地址明确返回不存在。

`HEAD` 请求失败不能单独作为 `not-found` 证据。应回退到 GET 或平台 API：

- GitHub：`GET /repos/{owner}/{repo}`
- Hugging Face：对应模型或数据集 API

网络超时、连接重置和 403 只能标记为 `verification-error`，不得写成“未开源”或“仓库不存在”。

候选记录示例：

```json
{
  "asset_checks": [
    {
      "kind": "code",
      "url": "https://github.com/org/repo",
      "status": "verified",
      "accessible": true,
      "verification_method": "github-api",
      "evidence_source": "project-page",
      "checked_at": "YYYY-MM-DD"
    }
  ]
}
```

## 5. 评分与展示

- 只有 `verified` 资产可以进入 `labels.assets`，并计入可复现性评分。
- `announced` 不计开源分。
- `verification-error` 保留 URL 和错误，不计开源分，但也不得表述为未开源。
- `project_url` 可以在官方归属明确时保存；代码、数据和模型字段只保存已验证的直接地址。
- 同一论文允许记录多个代码仓库；`code_url` 使用主仓库，其他仓库保存在 `asset_checks` 和 `sources` 中。

## 6. 已知反例

EmbodiedGen V2 的论文 HTML 可见文本包含 `github.com/HorizonRobotics/EmbodiedGen`，但 ar5iv 将其 `href` 解析为站内相对路径。官方项目页同时明确列出 Horizon Robotics、WuwenAI 和 Code 按钮。此类情况必须通过锚文本恢复 URL、扫描项目页并用 GitHub API 验证，不能记录为“未探测到 HTTP 200 仓库”。
