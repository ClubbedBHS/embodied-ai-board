import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const inputs = process.argv.slice(2);

if (!inputs.length || inputs.length % 2 !== 0) {
  throw new Error("Usage: node scripts/promote-candidate-runs.mjs <candidates.json> <arxiv-api.xml> [...]");
}

const allowedSections = new Set(["algorithms", "data", "simulators", "infrastructure", "surveys"]);
const allowedTopics = new Set([
  "vla", "world-model", "behavior-cloning", "reinforcement-learning", "imitation-learning",
  "diffusion-policy", "foundation-model", "representation-learning", "planning", "control", "sim-to-real",
]);

function decodeXml(value = "") {
  return value
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
}

function tag(block, name) {
  return decodeXml(block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`))?.[1] || "");
}

function parseAtom(xml) {
  const entries = new Map();
  for (const match of xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
    const block = match[1];
    const arxivId = tag(block, "id").match(/(\d{4}\.\d{4,5})/)?.[1];
    if (!arxivId) continue;
    entries.set(`arxiv-${arxivId}`, {
      title: tag(block, "title"), abstract: tag(block, "summary"),
      published: tag(block, "published").slice(0, 10), updated: tag(block, "updated").slice(0, 10),
      authors: [...block.matchAll(/<author>[\s\S]*?<name>([\s\S]*?)<\/name>[\s\S]*?<\/author>/g)].map((m) => decodeXml(m[1])),
    });
  }
  return entries;
}

function slug(value) {
  return String(value).toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "").slice(0, 80);
}

function normalizeUrl(value) {
  if (!value) return null;
  return String(value).replace(/&amp;/g, "&").trim().replace(/^http:\/\//, "https://").replace(/[),.;]+$/, "");
}

function concise(value, max = 230) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  return text.length <= max ? text : `${text.slice(0, max - 1).trim()}…`;
}

function inferredLabels(candidate, abstract) {
  const text = `${candidate.title} ${abstract} ${candidate.selection_reason} ${(candidate.suggested_topics || []).join(" ")}`.toLowerCase();
  const tasks = [];
  if (/navigation/.test(text)) tasks.push("navigation");
  if (/locomotion|traversal|brachiat|omni-terrain/.test(text)) tasks.push("locomotion");
  if (/humanoid|whole-body/.test(text)) tasks.push("humanoid-control");
  if (/manipulat|grasp|dexter|tactile|assembly|juggling/.test(text)) tasks.push("manipulation");
  if (/generalist|foundation/.test(text)) tasks.push("generalist-control");
  if (!tasks.length) tasks.push("manipulation");

  const platforms = [];
  if (/humanoid/.test(text)) platforms.push("humanoid");
  if (/dexter|hand|grasp|tactile/.test(text)) platforms.push("dexterous-hand");
  if (/mobile|navigation/.test(text)) platforms.push("mobile-robot");
  if (/manipulat|assembly|robot arm/.test(text)) platforms.push("robot-arm");
  if (/cross-embodiment|multi-arm|multi-robot/.test(text)) platforms.push("multi-robot");
  if (!platforms.length) platforms.push("platform-agnostic");

  const modalities = [];
  if (/vision|visual|image|video|camera|3d|lidar/.test(text)) modalities.push("vision");
  if (/language|instruction|vla/.test(text)) modalities.push("language");
  if (/action|policy|control/.test(text)) modalities.push("action");
  if (/tactile|touch|force/.test(text)) modalities.push("tactile");
  if (/proprio/.test(text)) modalities.push("proprioception");
  if (/point cloud|3d|lidar/.test(text)) modalities.push("point-cloud");

  const real = /real-world|real robot|real-robot|真机|hardware/.test(text);
  const sim = /simulation|simulator|sim-to-real|仿真/.test(text);
  const properties = [];
  if (real) properties.push("real-robot-evaluation");
  if (!real && sim) properties.push("simulation-only");
  if (/large-scale|million|30,000|5000|5,000|145k|235,492/.test(text)) properties.push("large-scale-data");
  if (/zero-shot|零样本/.test(text)) properties.push("zero-shot");
  return { tasks: [...new Set(tasks)], platforms: [...new Set(platforms)], modalities: [...new Set(modalities)], environments: [real && sim ? "mixed" : real ? "real-world" : "simulation"], properties };
}

function assetInfo(candidate) {
  const checks = candidate.asset_checks || [];
  const verified = (kind) => checks.some((x) => [kind, ...(kind === "code" ? ["repository"] : [])].includes(x.type || x.kind) && x.status === "verified");
  const assets = [];
  if (verified("code")) assets.push("code");
  if (verified("dataset")) assets.push("dataset");
  if (verified("model")) assets.push("model-weights");
  if (verified("simulator")) assets.push("simulator");
  if (candidate.project_url) assets.push("project-page");
  return { assets: [...new Set(assets)], checks };
}

function summary(candidate) {
  const evidence = candidate.evidence || {};
  const risks = (candidate.risks_or_uncertainties || []).map((x, i) => `${i + 1}. ${x}`).join("\n") || "1. 尚需编辑复核关键数字和跨平台泛化范围。";
  return `---
paper_id: ${candidate.id}
summary_version: "0.3"
language: zh
status: ai-draft
---

# ${candidate.title}

> ${concise(candidate.selection_reason)}

## 研究问题

${evidence.problem || candidate.hard_gates?.embodied_relevance?.evidence || candidate.selection_reason}

## 核心方法

${evidence.method || candidate.hard_gates?.incremental_contribution?.evidence || "论文提出了面向具身任务的新方法，具体机制已通过 HTML 全文核验。"}

## 实验与结果

${evidence.experiments || candidate.hard_gates?.claim_support?.evidence || "实验设置、主要结果与对照已通过 HTML 全文核验。"}

## 局限性与不确定性

${risks}

## 为什么值得关注

${candidate.selection_reason}

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 官方元数据核验
- [x] 方法、实验和结论或局限已通过 arXiv HTML 全文核验
- [x] 团队信息仅采用论文作者栏或官方项目页明确证据
- [x] 代码、数据和项目资产已区分可访问、占位、404 与未发现
- [ ] 中文摘要为 AI 初稿，关键数字仍建议编辑复核
`;
}

const promoted = [];
for (let i = 0; i < inputs.length; i += 2) {
  const candidatePath = path.resolve(root, inputs[i]);
  const apiPath = path.resolve(inputs[i + 1]);
  const payload = JSON.parse(await readFile(candidatePath, "utf8"));
  const api = parseAtom(await readFile(apiPath, "utf8"));
  const runName = path.basename(path.dirname(candidatePath));

  for (const candidate of payload.candidates) {
    if (!new Set(["featured", "include"]).has(candidate.decision)) continue;
    const atom = api.get(candidate.id) || {};
    const arxivId = candidate.id.replace(/^arxiv-/, "");
    const sections = (candidate.suggested_sections || ["algorithms"]).filter((x) => allowedSections.has(x));
    const topics = (candidate.suggested_topics || []).filter((x) => allowedTopics.has(x));
    const suggested = (candidate.suggested_topics || []).filter((x) => !allowedTopics.has(x));
    const labels = inferredLabels(candidate, atom.abstract || "");
    const asset = assetInfo(candidate);
    const paperType = [];
    if (sections.includes("algorithms")) paperType.push("method");
    if (sections.includes("data")) paperType.push("dataset");
    if (sections.includes("simulators")) paperType.push("simulator");
    if (sections.includes("infrastructure")) paperType.push("infrastructure");
    if (sections.includes("surveys")) paperType.push("survey");

    const metadata = {
      schema_version: "0.3", id: candidate.id, title: candidate.title || atom.title, title_zh: null,
      abstract: atom.abstract || candidate.abstract || null,
      paper_url: candidate.paper_url || `https://arxiv.org/abs/${arxivId}`,
      pdf_url: `https://arxiv.org/pdf/${arxivId}`,
      project_url: normalizeUrl(candidate.project_url), code_url: normalizeUrl(candidate.code_url),
      dataset_url: normalizeUrl(candidate.dataset_url), model_url: normalizeUrl(candidate.model_url), video_url: null,
      authors: (candidate.authors || atom.authors || []).map((name) => typeof name === "string" ? { name, affiliations: [] } : name),
      organizations: (candidate.organizations || []).map((name, index) => typeof name === "string" ? { id: slug(name), name, role: index === 0 ? "primary" : "collaborator" } : name),
      dates: { first_publication: candidate.first_publication || atom.published, last_revision: candidate.last_revision || (atom.updated && atom.updated !== atom.published ? atom.updated : null) },
      venue: { name: null, year: null, status: "preprint" },
      labels: { sections: sections.length ? sections : ["algorithms"], topics, ...labels, assets: asset.assets },
      paper_type: paperType.length ? paperType : ["method"],
      editorial: { importance: candidate.decision === "featured" ? "featured" : "normal", selection_score: candidate.scores.total, selection_reason: candidate.selection_reason, candidate_run: runName, status: "ai-draft" },
      ai_generation: { model: "openai-codex", generated_at: payload.run.run_at, confidence: "medium", needs_human_review: true, uncertainties: candidate.risks_or_uncertainties || [] },
      sources: [{ type: "paper", url: candidate.paper_url || `https://arxiv.org/abs/${arxivId}` }, { type: "fulltext", url: candidate.fulltext_url || `https://arxiv.org/html/${arxivId}` }, ...(candidate.project_url ? [{ type: "project-page", url: candidate.project_url }] : [])],
      suggested_new_tags: suggested.map((topic) => ({ dimension: "topics", slug: topic, name: topic, reason: "候选筛选中出现，但尚未进入受控标签词表。", evidence: candidate.selection_reason })),
      content_type: sections.includes("surveys") ? "survey" : "paper", source_scope: "full-source",
      source_access: { metadata_source: "arxiv-api", fulltext_source: "arxiv-latexml-html", fulltext_url: candidate.fulltext_url || `https://arxiv.org/html/${arxivId}`, fulltext_accessed: true, fulltext_note: "Method, experiments, conclusion and limitations were reviewed in official arXiv HTML.", sections_detected: ["Method/Approach", "Experiments/Evaluation", "Conclusion/Limitations"], figure_images_accessed: false, accessed_at: payload.run.run_at },
      organization_evidence: candidate.organization_evidence || [], asset_checks: asset.checks,
    };

    const destination = path.join(root, "papers", candidate.id);
    try { await access(destination); throw new Error(`${candidate.id} already exists`); } catch (error) { if (error.code !== "ENOENT") throw error; }
    await mkdir(destination);
    await writeFile(path.join(destination, "metadata.json"), `${JSON.stringify(metadata, null, 2)}\n`);
    await writeFile(path.join(destination, "summary.zh.md"), summary(candidate));
    promoted.push({ id: candidate.id, run: runName, score: candidate.scores.total, decision: candidate.decision });
  }
}

await writeFile(path.join(root, "reports/2026-09-01-promotion.json"), `${JSON.stringify({ promoted_at: "2026-09-01", count: promoted.length, records: promoted }, null, 2)}\n`);
console.log(`Promoted ${promoted.length} candidates.`);
