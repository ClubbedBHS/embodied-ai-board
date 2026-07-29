#!/usr/bin/env python3
"""Build a title-level weekly triage pool from an official arXiv recent-list page."""

import argparse
import html
import json
import re
from datetime import datetime
from pathlib import Path


SIGNALS = {
    "vla": [
        "vision-language-action",
        "vision language action",
        "language-action",
        "language guided robot",
    ],
    "world-model": [
        "world model",
        "world-model",
        "world action model",
        "world-action model",
        "world-anchor action",
    ],
    "robot-learning": [
        "robot learning",
        "robot policy",
        "robot policies",
        "policy learning",
        "imitation learning",
        "reinforcement learning",
        "visuomotor",
        "diffusion policy",
        "flow polic",
    ],
    "manipulation": [
        "manipulation",
        "grasp",
        "articulated object",
        "contact-rich",
        "teleoperation",
        "umi data",
    ],
    "humanoid": ["humanoid", "whole-body", "loco-manipulation", "locomotion"],
    "dexterous": ["dexterous", "tactile", "touch-augmented", "in-hand"],
    "navigation": [
        "robot navigation",
        "social navigation",
        "vision-language navigation",
        "semantic navigation",
        "mobile manipulation",
    ],
    "data": [
        "dataset",
        "data engine",
        "data pyramid",
        "robot data",
        "embodied data",
        "benchmark",
    ],
    "simulators": [
        "simulator",
        "simulation platform",
        "real2sim",
        "real-to-sim",
        "sim2real",
        "sim-to-real",
        "digital twin",
    ],
    "infrastructure": ["runtime", "toolchain", "framework", "platform", "robot co-design"],
    "surveys": ["survey", "review", "tutorial", "roadmap"],
}

TITLE_WEIGHTS = {
    "vision-language-action": 8,
    "world model": 7,
    "world-model": 7,
    "world action model": 8,
    "world-action model": 8,
    "data engine": 8,
    "data pyramid": 8,
    "embodied data": 7,
    "dataset": 6,
    "benchmark": 6,
    "simulation platform": 7,
    "real2sim": 8,
    "real-to-sim": 8,
    "humanoid": 4,
    "dexterous": 4,
    "tactile": 4,
    "imitation learning": 5,
    "robot learning": 5,
    "robot policy": 5,
    "robot policies": 5,
    "manipulation": 3,
    "navigation": 3,
    "teleoperation": 3,
    "co-design": 5,
}

LOWER_PRIORITY = [
    "autonomous driving",
    "self-driving",
    "vehicle",
    "uav",
    "drone",
    "aerial",
    "quadcopter",
    "medical",
    "surgical",
    "catheter",
    "ultrasound",
    "underwater",
    "auv",
]


def text_content(value):
    value = re.sub(r"<[^>]+>", " ", value or "")
    return " ".join(html.unescape(value).split())


def parse_date(value):
    return datetime.strptime(value.strip(), "%a, %d %b %Y").date().isoformat()


def parse_recent_page(source):
    entries = []
    date_blocks = re.split(r"<h3>(.*?)</h3>", source, flags=re.S)
    for index in range(1, len(date_blocks), 2):
        heading = text_content(date_blocks[index])
        date_match = re.match(r"([A-Z][a-z]{2}, \d{1,2} [A-Z][a-z]{2} \d{4})", heading)
        if not date_match:
            continue
        announced_at = parse_date(date_match.group(1))
        body = date_blocks[index + 1]
        for match in re.finditer(r"<dt>(.*?)</dt>\s*<dd>(.*?)</dd>", body, flags=re.S):
            dt, dd = match.groups()
            id_match = re.search(r"/abs/(\d{4}\.\d{4,5})", dt)
            if not id_match:
                continue
            arxiv_id = id_match.group(1)
            title_match = re.search(
                r"<div class=['\"]list-title mathjax['\"]>(.*?)</div>", dd, flags=re.S
            )
            authors_match = re.search(
                r"<div class=['\"]list-authors['\"]>(.*?)</div>", dd, flags=re.S
            )
            comments_match = re.search(
                r"<div class=['\"]list-comments mathjax['\"]>(.*?)</div>", dd, flags=re.S
            )
            subjects_match = re.search(
                r"<div class=['\"]list-subjects['\"]>(.*?)</div>", dd, flags=re.S
            )
            title = text_content(title_match.group(1) if title_match else "")
            title = re.sub(r"^Title:\s*", "", title)
            authors_html = authors_match.group(1) if authors_match else ""
            authors = [
                text_content(item)
                for item in re.findall(r"<a [^>]*>(.*?)</a>", authors_html, flags=re.S)
            ]
            comments = text_content(comments_match.group(1) if comments_match else "")
            comments = re.sub(r"^Comments:\s*", "", comments)
            subjects = text_content(subjects_match.group(1) if subjects_match else "")
            subjects = re.sub(r"^Subjects:\s*", "", subjects)
            entries.append(
                {
                    "id": f"arxiv-{arxiv_id}",
                    "arxiv_id": arxiv_id,
                    "title": title,
                    "paper_url": f"https://arxiv.org/abs/{arxiv_id}",
                    "fulltext_url": f"https://arxiv.org/html/{arxiv_id}",
                    "first_publication": announced_at,
                    "authors": authors,
                    "comments": comments or None,
                    "subjects": subjects,
                }
            )
    return entries


def classify(entry):
    title = entry["title"].lower()
    context = f'{title} {(entry["comments"] or "").lower()}'
    topics = [
        name for name, terms in SIGNALS.items() if any(term in context for term in terms)
    ]
    triage_score = sum(weight for term, weight in TITLE_WEIGHTS.items() if term in title)
    triage_score += min(5, len(topics))
    if any(term in title for term in ["unified", "scaling", "generalizable", "open"]):
        triage_score += 2
    if any(term in title for term in LOWER_PRIORITY):
        triage_score -= 9

    sections = []
    if any(
        topic in topics
        for topic in [
            "vla",
            "world-model",
            "robot-learning",
            "manipulation",
            "humanoid",
            "dexterous",
            "navigation",
        ]
    ):
        sections.append("algorithms")
    for topic, section in [
        ("data", "data"),
        ("simulators", "simulators"),
        ("infrastructure", "infrastructure"),
        ("surveys", "surveys"),
    ]:
        if topic in topics:
            sections.append(section)
    return triage_score, topics, sections


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-html", required=True)
    parser.add_argument("--project-root", required=True)
    parser.add_argument("--output-dir", required=True)
    parser.add_argument("--run-date", required=True)
    parser.add_argument("--window-start", required=True)
    parser.add_argument("--window-end", required=True)
    parser.add_argument("--limit", type=int, default=40)
    args = parser.parse_args()

    project = Path(args.project_root)
    output = Path(args.output_dir)
    output.mkdir(parents=True, exist_ok=True)
    existing = {path.parent.name for path in (project / "papers").glob("*/metadata.json")}

    entries = parse_recent_page(Path(args.source_html).read_text())
    entries = [
        item
        for item in entries
        if args.window_start <= item["first_publication"] <= args.window_end
    ]
    announcement_dates = sorted({item["first_publication"] for item in entries})

    pool = []
    for entry in entries:
        triage_score, topics, sections = classify(entry)
        if triage_score < 4 or not sections:
            continue
        entry.update(
            {
                "already_on_board": entry["id"] in existing,
                "discovered_via": ["arxiv-cs.RO-recent"],
                "watchlist_matches": [],
                "source_scope": "title-and-metadata",
                "triage_score": triage_score,
                "triage_topics": topics,
                "suggested_sections": sections,
                "review_status": (
                    "already-on-board" if entry["id"] in existing else "pending-abstract"
                ),
                "selection_decision": None,
            }
        )
        pool.append(entry)

    pool.sort(
        key=lambda item: (
            item["already_on_board"],
            -item["triage_score"],
            item["first_publication"],
            item["id"],
        )
    )
    pending = [item for item in pool if not item["already_on_board"]][: args.limit]
    payload = {
        "run": {
            "run_id": f"{args.run_date}-weekly-01",
            "stage": "discovery-triage",
            "run_at": args.run_date,
            "window_start": args.window_start,
            "window_end": args.window_end,
            "sources_checked": ["arXiv official cs.RO pastweek submissions page"],
            "source_entry_count": len(entries),
            "announcement_dates_observed": announcement_dates,
            "triage_match_count": len(pool),
            "queued_for_abstract_review": len(pending),
            "rubric_version": "0.1",
            "watchlist_version": "0.1",
            "note": (
                "triage_score 只用于安排摘要和全文阅读顺序，不是论文质量分；"
                "候选尚未通过硬门槛，不可直接发布。"
            ),
        },
        "candidates": pending,
    }
    (output / "candidate-pool.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n"
    )

    section_counts = {}
    for item in pending:
        for section in item["suggested_sections"]:
            section_counts[section] = section_counts.get(section, 0) + 1
    report = [
        f"# 本周最新论文初筛（{args.window_start}—{args.window_end}）",
        "",
        "> 当前只完成官方列表抓取、去重和标题级宽松初筛；尚未读取摘要/全文，也没有产生 selection-rubric 质量分。",
        "",
        "## 发现漏斗",
        "",
        f"- arXiv cs.RO 官方最近提交：{len(entries)} 条",
        f'- 页面实际覆盖公告日：{", ".join(announcement_dates)}',
        f"- 标题级相关性命中：{len(pool)} 条",
        f"- 进入摘要复核队列：{len(pending)} 条",
        f"- 与当前 {len(existing)} 篇论文库去重后：{len(pending)} 条待复核",
        "",
        "## 优先复核队列",
        "",
    ]
    for index, item in enumerate(pending, 1):
        report.append(
            f'{index}. [{item["title"]}]({item["paper_url"]})'
            f' — {item["first_publication"]}；初筛主题：{", ".join(item["triage_topics"])}'
        )
    report += [
        "",
        "## 板块覆盖（允许一稿多类）",
        "",
        *[f"- {key}: {value}" for key, value in sorted(section_counts.items())],
        "",
        "## 下一步",
        "",
        "1. 读取队列的 arXiv 摘要页，补全摘要、作者与项目页线索并进行第二轮相关性过滤。",
        "2. 对第二轮留下的 15–20 篇读取 HTML 全文的方法、实验、结论/局限章节。",
        "3. 按量表评分，并复核团队、代码、数据和模型资产；只把 featured/include 交给人工审核。",
        "4. 补充 OpenReview、Hugging Face Daily Papers 与观察名单实验室来源，检查 cs.RO 单源漏项。",
    ]
    (output / "report.md").write_text("\n".join(report) + "\n")


if __name__ == "__main__":
    main()
