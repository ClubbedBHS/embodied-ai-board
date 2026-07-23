import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.argv[2];
const applyChanges = process.argv.includes("--apply");
if (!projectRoot) throw new Error("Usage: node migrate-schema-v03.mjs <project-root> [--apply]");

const papersRoot = path.join(projectRoot, "papers");
const entries = (await readdir(papersRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .sort((a, b) => a.name.localeCompare(b.name));

function contentType(metadata) {
  if (metadata.id.startsWith("pi0") || metadata.id.startsWith("pi05") || metadata.id.startsWith("pi06")) return "official-blog";
  if (metadata.id.startsWith("phd-")) return "thesis";
  return "paper";
}

function sourceScope(metadata) {
  const access = metadata.source_access;
  const hasFullSourceEvidence = Boolean(
    access?.fulltext_accessed === true &&
      typeof access?.fulltext_url === "string" &&
      Array.isArray(access?.sections_detected) &&
      access.sections_detected.length >= 3,
  );
  if (hasFullSourceEvidence) return "full-source";
  if (metadata.ai_generation?.source_scope === "metadata-only") return "metadata-only";
  if (metadata.ai_generation?.source_scope === "abstract-and-metadata") return "abstract-and-metadata";
  return "partial-source";
}

const results = [];
for (const entry of entries) {
  const file = path.join(papersRoot, entry.name, "metadata.json");
  const metadata = JSON.parse(await readFile(file, "utf8"));
  const previousSchema = metadata.schema_version ?? "unknown";
  const type = contentType(metadata);
  const scope = sourceScope(metadata);

  metadata.schema_version = "0.3";
  metadata.content_type = type;
  metadata.source_scope = scope;
  if (metadata.ai_generation) delete metadata.ai_generation.source_scope;

  if (type === "official-blog") {
    metadata.authors = [];
  }
  if (metadata.id === "pi0-2024") {
    metadata.labels.assets = metadata.labels.assets.filter((asset) => asset !== "model-weights");
    metadata.model_url = null;
  }

  let note;
  if (scope === "full-source") {
    note = `从 v${previousSchema} 迁移；source_access 可证明已读取完整${type === "official-blog" ? "官方博客" : type === "thesis" ? "学位论文" : "论文"}来源。`;
  } else if (scope === "partial-source") {
    note = `从 v${previousSchema} 迁移；旧记录声称读取全文，但缺少可审计的 source_access，保守降级为 partial-source。`;
  } else {
    note = `从 v${previousSchema} 迁移；沿用已有来源范围，需补充完整来源后再升级。`;
  }
  metadata.migration = {
    from_schema_version: previousSchema,
    migrated_at: "2026-07-22",
    note,
  };

  if (applyChanges) await writeFile(file, `${JSON.stringify(metadata, null, 2)}\n`);
  results.push({ id: metadata.id, contentType: type, sourceScope: scope, previousSchema, note });
}

const counts = (key) => Object.entries(results.reduce((acc, item) => {
  const value = item[key];
  acc[value] = (acc[value] || 0) + 1;
  return acc;
}, {})).sort((a, b) => a[0].localeCompare(b[0]));

const rows = results.map((item) => `| ${item.id} | ${item.contentType} | ${item.sourceScope} | ${item.previousSchema} |`).join("\n");
const rework = results.filter((item) => item.sourceScope !== "full-source");
const report = `# Schema v0.3 迁移报告

> 生成日期：2026-07-22
> 模式：${applyChanges ? "已应用" : "预览"}
> 论文总数：${results.length}

## 迁移规则

- 有完整 \`source_access\`、全文 URL、至少三个章节且 \`fulltext_accessed=true\`：\`full-source\`。
- 旧记录声称读取全文但没有可审计证据：保守降级为 \`partial-source\`。
- 明确只读取摘要或元数据：保留为 \`abstract-and-metadata\` 或 \`metadata-only\`。
- Physical Intelligence 的三篇机构内容：\`official-blog\`；博士论文：\`thesis\`；其余：\`paper\`。

## 汇总

### content_type

${counts("contentType").map(([name, count]) => `- \`${name}\`: ${count}`).join("\n")}

### source_scope

${counts("sourceScope").map(([name, count]) => `- \`${name}\`: ${count}`).join("\n")}

## 逐篇结果

| ID | content_type | source_scope | 原 Schema |
|---|---|---|---|
${rows}

## 需要重新读取或复核的条目

${rework.map((item) => `- \`${item.id}\` — ${item.sourceScope}`).join("\n") || "无"}

这些条目在补齐 ar5iv/PDF/原始来源的 \`source_access\` 前，不应以已核验全文摘要发布。
`;

const reportPath = path.join(projectRoot, "reports", "schema-migration-report.md");
if (applyChanges) {
  await mkdir(path.dirname(reportPath), { recursive: true });
  await writeFile(reportPath, report);
}
console.log(report);
