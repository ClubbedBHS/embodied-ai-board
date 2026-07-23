#!/usr/bin/env python3
import argparse
import html
import json
import re
import xml.etree.ElementTree as ET
from pathlib import Path

ATOM = {"a": "http://www.w3.org/2005/Atom", "o": "http://a9.com/-/spec/opensearch/1.1/"}

SIGNALS = {
    "vla": ["vision-language-action", "vision language action", " vla", "vla "],
    "world-model": ["world action model", "world model", "world modeling", "world modelling"],
    "robot-learning": ["robot learning", "robotic manipulation", "robot manipulation", "imitation learning", "diffusion policy"],
    "humanoid": ["humanoid", "whole-body control", "loco-manipulation", "locomotion"],
    "dexterous": ["dexterous", "tactile", "in-hand", "grasp"],
    "navigation": ["robot navigation", "visual navigation", "vision-language navigation", "mobile manipulation"],
    "data": ["dataset", "benchmark", "data engine", "demonstration", "teleoperation"],
    "simulators": ["simulator", "simulation-ready", "real-to-sim", "real2sim", "sim-to-real", "digital twin", "world engine"],
    "infrastructure": ["runtime", "operating system", "agent os", "toolchain", "framework", "platform"],
    "surveys": ["survey", "review", "tutorial", "roadmap"],
}

TITLE_BONUS = {
    "vision-language-action": 6, "world action model": 6, "robot foundation": 5,
    "robot manipulation": 4, "robotic manipulation": 4, "embodied ai": 5,
    "dataset": 5, "benchmark": 5, "simulator": 5, "real2sim": 6,
    "real-to-sim": 6, "runtime": 5, "toolchain": 4, "survey": 6,
    "review": 5, "tutorial": 5, "roadmap": 4, "humanoid": 3,
    "dexterous": 3, "diffusion policy": 4, "teleoperation": 3,
}

LOWER_PRIORITY = [
    "autonomous driving", "uav", "drone", "aerial", "medical", "surgical",
    "traffic", "vehicle", "harvesting", "underwater",
]


def clean(value):
    return " ".join(html.unescape(value or "").split())


def load_entries(paths):
    entries = {}
    totals = []
    for path in paths:
        root = ET.parse(path).getroot()
        totals.append(int(root.findtext("o:totalResults", default="0", namespaces=ATOM)))
        for node in root.findall("a:entry", ATOM):
            raw_id = node.findtext("a:id", default="", namespaces=ATOM).rsplit("/", 1)[-1]
            arxiv_id = re.sub(r"v\d+$", "", raw_id)
            categories = [item.attrib.get("term") for item in node.findall("a:category", ATOM)]
            entries[arxiv_id] = {
                "id": f"arxiv-{arxiv_id}",
                "arxiv_id": arxiv_id,
                "title": clean(node.findtext("a:title", default="", namespaces=ATOM)),
                "abstract": clean(node.findtext("a:summary", default="", namespaces=ATOM)),
                "paper_url": f"https://arxiv.org/abs/{arxiv_id}",
                "first_publication": node.findtext("a:published", default="", namespaces=ATOM)[:10],
                "authors": [clean(a.findtext("a:name", default="", namespaces=ATOM)) for a in node.findall("a:author", ATOM)],
                "categories": categories,
            }
    return entries, totals


def classify(entry):
    title = entry["title"].lower()
    text = f'{title} {entry["abstract"].lower()}'
    topics = [name for name, terms in SIGNALS.items() if any(term in text for term in terms)]
    score = sum(weight for term, weight in TITLE_BONUS.items() if term in title)
    score += min(8, sum(1 for terms in SIGNALS.values() for term in terms if term in text))
    if any(term in title for term in ["open", "scaling", "generalizable", "foundation", "unified"]):
        score += 2
    if any(term in title for term in LOWER_PRIORITY):
        score -= 7
    sections = []
    if any(topic in topics for topic in ["vla", "world-model", "robot-learning", "humanoid", "dexterous", "navigation"]):
        sections.append("algorithms")
    if "data" in topics:
        sections.append("data")
    if "simulators" in topics:
        sections.append("simulators")
    if "infrastructure" in topics:
        sections.append("infrastructure")
    if "surveys" in topics:
        sections.append("surveys")
    return score, topics, sections


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--csro", required=True)
    parser.add_argument("--keywords", required=True)
    parser.add_argument("--project-root", required=True)
    parser.add_argument("--output-dir", required=True)
    args = parser.parse_args()

    project = Path(args.project_root)
    output = Path(args.output_dir)
    output.mkdir(parents=True, exist_ok=True)
    existing = {path.parent.name for path in (project / "papers").glob("*/metadata.json")}
    entries, source_totals = load_entries([args.csro, args.keywords])

    queue = []
    keyword_matches = 0
    for entry in entries.values():
        triage_score, topics, sections = classify(entry)
        if topics:
            keyword_matches += 1
        if triage_score < 6 or not sections:
            continue
        entry.update({
            "already_on_board": entry["id"] in existing,
            "source_scope": "abstract-and-metadata",
            "fulltext_url": f'https://arxiv.org/html/{entry["arxiv_id"]}',
            "triage_score": triage_score,
            "triage_topics": topics,
            "suggested_sections": sections,
            "review_status": "already-on-board" if entry["id"] in existing else "pending-fulltext",
            "selection_decision": None,
        })
        queue.append(entry)

    queue.sort(key=lambda item: (item["already_on_board"], -item["triage_score"], item["first_publication"], item["id"]))
    pending = [item for item in queue if not item["already_on_board"]][:120]
    included_existing = [item for item in queue if item["already_on_board"]]
    final_queue = pending + included_existing

    section_counts = {}
    for entry in pending:
        for section in entry["suggested_sections"]:
            section_counts[section] = section_counts.get(section, 0) + 1

    payload = {
        "run": {
            "run_id": "2026-07-backfill-01",
            "run_at": "2026-07-23",
            "window_start": "2026-07-01",
            "window_end": "2026-07-23",
            "sources_checked": [
                "arXiv official API: cs.RO + submittedDate",
                "arXiv official API: controlled embodied/robotics keyword query + submittedDate",
            ],
            "source_result_counts": {"cs.RO": source_totals[0], "keyword_query": source_totals[1]},
            "deduplicated_entries": len(entries),
            "keyword_matched_entries": keyword_matches,
            "pending_fulltext_count": len(pending),
            "already_on_board_in_queue": len(included_existing),
            "note": "triage_score 仅用于安排全文阅读顺序，不是 selection-rubric 质量分，也不能直接决定 featured/include。",
        },
        "candidates": final_queue,
    }
    (output / "candidate-pool.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")

    top = pending[:25]
    report = [
        "# 2026 年 7 月候选回扫（第一阶段）",
        "",
        "> 本文件只完成官方元数据拉取、去重与宽松相关性初筛。候选仍需读取 HTML 全文，才能按 selection-rubric 评分。",
        "",
        "## 覆盖范围",
        "",
        "- 时间：2026-07-01 至 2026-07-23",
        f"- arXiv cs.RO：{source_totals[0]} 条",
        f"- 跨分类关键词查询：{source_totals[1]} 条",
        f"- 合并去重：{len(entries)} 条",
        f"- 命中宽松关键词：{keyword_matches} 条",
        f"- 待全文复核队列：{len(pending)} 条（另保留 {len(included_existing)} 条已上看板记录用于去重审计）",
        "",
        "## 当前缺口判断",
        "",
        "上一轮窗口是 2026-07-08 至 2026-07-22，且只从 cs.RO 最新 200 条中固定选了 10 条。本次回扫补入了 7 月上旬和跨分类发现结果。",
        "",
        "## 优先全文复核（前 25）",
        "",
    ]
    for index, item in enumerate(top, 1):
        report.append(f'{index}. [{item["title"]}]({item["paper_url"]}) — {item["first_publication"]}；初筛主题：{", ".join(item["triage_topics"])}')
    report += [
        "",
        "## 板块命中（允许一稿多类）",
        "",
        *[f"- {key}: {value}" for key, value in sorted(section_counts.items())],
        "",
        "## 下一步",
        "",
        "按候选池顺序分批读取官方 HTML 全文。每批建议 20–30 篇；通过硬门槛后才填写正式评分，并把 featured/include 交给人工审核。",
    ]
    (output / "report.md").write_text("\n".join(report) + "\n")


if __name__ == "__main__":
    main()
