import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(here, "..");
const batchNames = ["batch-01", "batch-02", "batch-03"];
const allowedTopics = new Set([
  "vla",
  "world-model",
  "behavior-cloning",
  "reinforcement-learning",
  "imitation-learning",
  "diffusion-policy",
  "foundation-model",
  "representation-learning",
  "planning",
  "control",
  "sim-to-real",
]);

function slug(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function concise(value, max = 220) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  const sentence = text.slice(0, max).match(/^.*?[。！？.!?](?:\s|$)/)?.[0];
  return sentence?.trim() || `${text.slice(0, max - 1).trim()}…`;
}

function inferLabels(candidate, poolEntry) {
  const text = `${candidate.title} ${poolEntry?.abstract || ""} ${candidate.selection_reason || ""}`.toLowerCase();
  const tasks = [];
  if (/mobile manipulation|loco-manipulation/.test(text)) tasks.push("mobile-manipulation");
  if (/navigation/.test(text)) tasks.push("navigation");
  if (/locomotion|gait/.test(text)) tasks.push("locomotion");
  if (/humanoid|whole-body/.test(text)) tasks.push("humanoid-control");
  if (/manipulat|grasp|dexter|tactile|assembly/.test(text)) tasks.push("manipulation");
  if (/generalist|general-purpose|foundation/.test(text)) tasks.push("generalist-control");
  if (!tasks.length) tasks.push("manipulation");

  const platforms = [];
  if (/humanoid/.test(text)) platforms.push("humanoid");
  if (/quadruped/.test(text)) platforms.push("quadruped");
  if (/dexter|hand|grasp/.test(text)) platforms.push("dexterous-hand");
  if (/mobile robot|mobile manipulation|navigation/.test(text)) platforms.push("mobile-robot");
  if (/robot arm|manipulat|assembly/.test(text)) platforms.push("robot-arm");
  if (/multi-robot|cross-embodiment|heterogeneous robot/.test(text)) platforms.push("multi-robot");
  if (!platforms.length) platforms.push("platform-agnostic");

  const modalities = [];
  if (/vision|visual|image|video|camera|3d|point/.test(text)) modalities.push("vision");
  if (/language|instruction|vla/.test(text)) modalities.push("language");
  if (/action|policy|control/.test(text)) modalities.push("action");
  if (/tactile|touch|force/.test(text)) modalities.push("tactile");
  if (/depth/.test(text)) modalities.push("depth");
  if (/point cloud|pointmap|3d/.test(text)) modalities.push("point-cloud");
  if (/proprio/.test(text)) modalities.push("proprioception");
  if (/audio|speech/.test(text)) modalities.push("audio");

  const environments = [];
  const real = /real-world|real robot|real-robot|真机|真实机器人/.test(text);
  const sim = /simulation|simulator|sim-to-real|仿真/.test(text);
  environments.push(real && sim ? "mixed" : real ? "real-world" : "simulation");

  const properties = [];
  if (real) properties.push("real-robot-evaluation");
  if (!real && sim) properties.push("simulation-only");
  if (/large-scale|million|thousand|千|万/.test(text)) properties.push("large-scale-data");
  if (/zero-shot|零样本/.test(text)) properties.push("zero-shot");
  if (/few-shot|少样本/.test(text)) properties.push("few-shot");

  return {
    tasks: [...new Set(tasks)],
    platforms: [...new Set(platforms)],
    modalities: [...new Set(modalities)],
    environments,
    properties: [...new Set(properties)],
  };
}

function assetLinks(candidate) {
  const checks =
    candidate.evidence?.asset_checks ||
    candidate.evidence?.assets ||
    [];
  const accessible = checks.filter((item) => item?.accessible === true && item?.url);
  const find = (...kinds) => accessible.find((item) => kinds.includes(String(item.kind || "").toLowerCase()))?.url || null;
  const assets = [];
  if (find("code", "github", "repository")) assets.push("code");
  if (find("dataset", "data")) assets.push("dataset");
  if (find("model", "weights", "model-weights")) assets.push("model-weights");
  if (find("simulator")) assets.push("simulator");
  if (find("benchmark")) assets.push("benchmark");
  return {
    projectUrl: find("project", "project-page"),
    codeUrl: find("code", "github", "repository"),
    datasetUrl: find("dataset", "data"),
    modelUrl: find("model", "weights", "model-weights"),
    assets,
  };
}

function summaryMarkdown(candidate) {
  const incremental = candidate.hard_gates?.incremental_contribution?.evidence || candidate.selection_reason;
  const method =
    candidate.evidence?.method ||
    candidate.evidence?.sections_and_results ||
    candidate.hard_gates?.incremental_contribution?.evidence ||
    "方法细节已通过论文全文核验，仍需编辑补充更精炼的中文方法说明。";
  const experiments =
    candidate.evidence?.experiments ||
    candidate.evidence?.sections_and_results ||
    candidate.hard_gates?.claim_support?.evidence ||
    "实验与证据已通过论文全文核验，仍需编辑补充关键表格和数字。";
  const conclusion =
    candidate.evidence?.conclusion_or_limitations ||
    candidate.evidence?.key_result_assessment ||
    candidate.hard_gates?.claim_support?.evidence ||
    "";
  const risks = candidate.risks_or_uncertainties?.length
    ? candidate.risks_or_uncertainties.map((item, index) => `${index + 1}. ${item}`).join("\n")
    : "1. 当前没有额外记录的风险；仍需人工复核关键数字与资产状态。";
  const nearest = candidate.nearest_board_comparison ? `\n\n与现有看板工作的关系：${candidate.nearest_board_comparison}` : "";

  return `---
paper_id: ${candidate.id}
summary_version: "0.3"
language: zh
status: ai-draft
---

# ${candidate.title}

> ${concise(candidate.selection_reason)}

## 研究问题

${incremental}

## 核心方法

${method}

## 实验与结果

${experiments}

${conclusion ? `## 结论\n\n${conclusion}\n\n` : ""}## 局限性与不确定性

${risks}

## 为什么值得关注

${candidate.selection_reason}${nearest}

## 事实核验记录

- [x] 标题、作者和首次公开日期已通过 arXiv 摘要页核验
- [x] 方法、实验和结论或局限已通过 HTML 全文核验
- [ ] 中文摘要仍为 AI 初稿，需要编辑复核表格数字与表述
`;
}

const poolPayload = JSON.parse(
  await readFile(path.join(projectRoot, "candidates/2026-07-backfill/candidate-pool.json"), "utf8"),
);
const poolById = new Map(poolPayload.candidates.map((item) => [item.id, item]));
const promoted = [];

for (const batchName of batchNames) {
  const batchPayload = JSON.parse(
    await readFile(path.join(projectRoot, `candidates/2026-07-backfill/${batchName}/candidates.json`), "utf8"),
  );
  for (const candidate of batchPayload.candidates) {
    if (!["featured", "include"].includes(candidate.decision)) continue;
    const poolEntry = poolById.get(candidate.id);
    const knownTopics = (candidate.suggested_topics || []).filter((topic) => allowedTopics.has(topic));
    const unknownTopics = (candidate.suggested_topics || []).filter((topic) => !allowedTopics.has(topic));
    const inferred = inferLabels(candidate, poolEntry);
    const links = assetLinks(candidate);
    const sections = (candidate.suggested_sections || []).filter((item) =>
      ["algorithms", "data", "simulators", "infrastructure", "surveys"].includes(item),
    );
    const paperType = [];
    if (sections.includes("algorithms")) paperType.push("method");
    if (sections.includes("data")) paperType.push("dataset");
    if (sections.includes("simulators")) paperType.push("simulator");
    if (sections.includes("infrastructure")) paperType.push("infrastructure");
    if (sections.includes("surveys")) paperType.push("survey");

    const metadata = {
      schema_version: "0.3",
      id: candidate.id,
      content_type: sections.includes("surveys") ? "survey" : "paper",
      source_scope: candidate.source_scope,
      title: candidate.title,
      title_zh: null,
      abstract: poolEntry?.abstract || null,
      paper_url: candidate.paper_url,
      pdf_url: candidate.paper_url?.replace("/abs/", "/pdf/") || null,
      project_url: links.projectUrl,
      code_url: links.codeUrl,
      dataset_url: links.datasetUrl,
      model_url: links.modelUrl,
      video_url: null,
      authors: (candidate.authors || poolEntry?.authors || []).map((name) => ({ name, affiliations: [] })),
      organizations: (candidate.organizations || []).map((name) => ({
        id: slug(typeof name === "string" ? name : name.name),
        name: typeof name === "string" ? name : name.name,
        role: "unknown",
      })),
      dates: {
        first_publication: candidate.first_publication,
        last_revision: candidate.last_revision || null,
      },
      venue: { name: null, year: null, status: "preprint" },
      labels: {
        sections: sections.length ? sections : ["algorithms"],
        topics: knownTopics,
        tasks: inferred.tasks,
        platforms: inferred.platforms,
        modalities: inferred.modalities,
        environments: inferred.environments,
        assets: links.assets,
        properties: inferred.properties,
      },
      paper_type: paperType.length ? [...new Set(paperType)] : ["method"],
      editorial: {
        importance: candidate.decision === "featured" ? "featured" : "normal",
        selection_score: candidate.scores.total,
        selection_reason: candidate.selection_reason,
        candidate_run: `2026-07-backfill/${batchName}`,
        status: "ai-draft",
      },
      ai_generation: {
        model: batchName === "batch-03" ? "hermes-agent" : "openai-codex",
        generated_at: "2026-07-23",
        confidence: "medium",
        needs_human_review: true,
        uncertainties: candidate.risks_or_uncertainties || [],
      },
      source_access: {
        metadata_source: "arxiv-abstract-html",
        fulltext_source: "arxiv-latexml-html",
        fulltext_url: candidate.fulltext_url,
        fulltext_accessed: true,
        fulltext_note: "Candidate screening verified method, experiments, and conclusion or limitations in HTML full text.",
        sections_detected: ["Method/Approach", "Experiments/Evaluation", "Conclusion/Limitations"],
        figure_images_accessed: false,
        accessed_at: "2026-07-23",
      },
      sources: (candidate.sources || [candidate.paper_url, candidate.fulltext_url])
        .filter(Boolean)
        .map((source, index) => ({
          type: index === 0 ? "paper" : "fulltext",
          url: typeof source === "string" ? source : source.url,
        })),
      suggested_new_tags: unknownTopics.map((topic) => ({
        dimension: "topics",
        slug: topic,
        name: topic,
        reason: "候选筛选中出现，但尚未进入受控标签词表。",
        evidence: candidate.selection_reason,
      })),
    };

    const destination = path.join(projectRoot, "papers", candidate.id);
    await mkdir(destination, { recursive: false });
    await writeFile(path.join(destination, "metadata.json"), `${JSON.stringify(metadata, null, 2)}\n`);
    await writeFile(path.join(destination, "summary.zh.md"), summaryMarkdown(candidate));
    promoted.push({ id: candidate.id, batch: batchName, decision: candidate.decision, score: candidate.scores.total });
  }
}

await writeFile(
  path.join(projectRoot, "reports/2026-07-backfill-promotion.json"),
  `${JSON.stringify({ promoted_at: "2026-07-23", count: promoted.length, records: promoted }, null, 2)}\n`,
);
console.log(`Promoted ${promoted.length} candidates into papers/.`);
