import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = process.env.EMBODIED_SITE_ROOT || path.resolve(here, "..");
const papersRoot = path.resolve(siteRoot, "../papers");

function section(md, title) {
  const start = md.indexOf(`## ${title}`);
  if (start < 0) return "";
  const body = md.slice(start + title.length + 3);
  const end = body.search(/\n## /);
  return (end < 0 ? body : body.slice(0, end))
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^[-*]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/\*\*/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function oneLiner(md) {
  return (
    md
      .split("\n")
      .find((line) => line.startsWith("> "))
      ?.replace(/^>\s*/, "")
      .trim() || ""
  );
}

const folders = (await readdir(papersRoot, { withFileTypes: true })).filter((entry) => entry.isDirectory());
const papers = [];

for (const folder of folders) {
  const base = path.join(papersRoot, folder.name);
  const [metadataRaw, summary] = await Promise.all([
    readFile(path.join(base, "metadata.json"), "utf8"),
    readFile(path.join(base, "summary.zh.md"), "utf8"),
  ]);
  const metadata = JSON.parse(metadataRaw);

  papers.push({
    id: metadata.id,
    title: metadata.title,
    titleZh: metadata.title_zh,
    oneLiner: oneLiner(summary),
    researchQuestion: section(summary, "研究问题"),
    contribution: section(summary, "为什么值得关注"),
    abstract: metadata.abstract,
    paperUrl: metadata.paper_url,
    projectUrl: metadata.project_url,
    codeUrl: metadata.code_url,
    authors: metadata.authors?.map((author) => author.name) ?? [],
    organizations: metadata.organizations?.map((organization) => organization.name) ?? [],
    date: metadata.dates?.first_publication,
    venue: metadata.venue?.name,
    venueStatus: metadata.venue?.status,
    sections: metadata.labels?.sections ?? [],
    topics: metadata.labels?.topics ?? [],
    tasks: metadata.labels?.tasks ?? [],
    properties: metadata.labels?.properties ?? [],
    assets: metadata.labels?.assets ?? [],
    contentType: metadata.content_type ?? "paper",
    sourceScope: metadata.source_scope ?? metadata.ai_generation?.source_scope ?? "metadata-only",
    confidence: metadata.ai_generation?.confidence,
    importance: metadata.editorial?.importance ?? "normal",
    selectionScore: metadata.editorial?.selection_score ?? null,
    selectionReason: metadata.editorial?.selection_reason ?? "",
    status: metadata.editorial?.status,
  });
}

papers.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
await writeFile(path.join(siteRoot, "app/papers.generated.json"), `${JSON.stringify(papers, null, 2)}\n`);
console.log(`Synced ${papers.length} papers.`);
