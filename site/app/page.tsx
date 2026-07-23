"use client";

import { useMemo, useState } from "react";
import papers from "./papers.generated.json";

type Paper = (typeof papers)[number];

const sectionLabels: Record<string, string> = {
  all: "全部",
  algorithms: "算法",
  data: "数据",
  simulators: "仿真器",
  infrastructure: "基础设施",
  surveys: "综述",
};

const topicLabels: Record<string, string> = {
  vla: "VLA",
  "world-model": "世界模型",
  "behavior-cloning": "行为克隆",
  "reinforcement-learning": "强化学习",
  "imitation-learning": "模仿学习",
  "diffusion-policy": "扩散策略",
  "foundation-model": "基础模型",
  "representation-learning": "表征学习",
  planning: "规划",
  control: "控制",
  "sim-to-real": "Sim-to-Real",
};

const contentTypeLabels: Record<string, string> = {
  paper: "论文",
  "technical-report": "技术报告",
  "official-blog": "官方博客",
  thesis: "学位论文",
  survey: "综述",
};

const sourceScopeLabels: Record<string, string> = {
  "full-source": "完整来源",
  "partial-source": "来源待复核",
  "abstract-and-metadata": "仅摘要与元数据",
  "metadata-only": "仅元数据",
};

function formatDate(value: string | null | undefined) {
  if (!value) return "日期待确认";
  return value.replaceAll("-", ".");
}

function formatMonth(value: string) {
  const [year, month] = value.split("-");
  return `${year} 年 ${Number(month)} 月`;
}

export default function Home() {
  const [section, setSection] = useState("all");
  const [topic, setTopic] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Paper | null>(null);

  const topics = useMemo(() => {
    const counts = new Map<string, number>();
    papers.forEach((paper) => paper.topics.forEach((item) => counts.set(item, (counts.get(item) || 0) + 1)));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return papers.filter((paper) => {
      const inSection = section === "all" || paper.sections.includes(section);
      const inTopic = topic === "all" || paper.topics.includes(topic);
      const haystack = [paper.title, paper.titleZh, paper.oneLiner, ...paper.authors, ...paper.organizations, ...paper.topics]
        .join(" ")
        .toLowerCase();
      return inSection && inTopic && (!needle || haystack.includes(needle));
    });
  }, [query, section, topic]);

  const latestMonth = papers
    .map((paper) => paper.date?.slice(0, 7) || "")
    .sort((a, b) => b.localeCompare(a))[0];

  const monthlyHighlights = papers
    .filter((paper) =>
      paper.date?.startsWith(latestMonth) &&
      (paper.selectionScore || 0) >= 90
    )
    .sort((a, b) => (b.selectionScore || 0) - (a.selectionScore || 0))
    .slice(0, 5);

  const monthlyLead = monthlyHighlights[0];
  const monthlyRest = monthlyHighlights.slice(1);
  const weeklyHighlights = papers
    .filter((paper) => paper.importance === "featured")
    .sort((a, b) => {
      const dateOrder = (b.date || "").localeCompare(a.date || "");
      return dateOrder || (b.selectionScore || 0) - (a.selectionScore || 0);
    })
    .slice(0, 3);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Embodied AI Board 首页">
          <span className="brand-mark">E/AI</span>
          <span>Embodied AI Board</span>
        </a>
        <nav aria-label="主导航">
          <a href="#top">本月关注</a>
          <a href="#latest">论文库</a>
          <a href="#topics">研究方向</a>
          <span className="update-pill"><i /> 上次更新：2026.07.23</span>
        </nav>
      </header>

      <section className="monthly-focus" id="top" aria-labelledby="monthly-title">
        <div className="monthly-heading">
          <div>
            <span className="eyebrow">MONTHLY SIGNAL · {latestMonth.replace("-", ".")}</span>
            <h1 id="monthly-title">{formatMonth(latestMonth)}<br /><em>值得关注的工作</em></h1>
          </div>
        </div>

        {monthlyLead && (
          <button className="monthly-lead" onClick={() => setSelected(monthlyLead)}>
            <div className="monthly-rank"><span>01</span><b>本月首选</b></div>
            <div className="monthly-lead-copy">
              <div className="feature-meta"><span>{sectionLabels[monthlyLead.sections[0]] || monthlyLead.sections[0]}</span><span>{formatDate(monthlyLead.date)}</span></div>
              <h2>{monthlyLead.titleZh || monthlyLead.title}</h2>
              <p>{monthlyLead.oneLiner}</p>
              <span className="read-more">查看重点解读 <b>↗</b></span>
            </div>
          </button>
        )}

        <div className="monthly-list">
          {monthlyRest.map((paper, index) => (
            <button className="monthly-item" key={paper.id} onClick={() => setSelected(paper)}>
              <span className="feature-index">0{index + 2}</span>
              <div>
                <div className="feature-meta"><span>{sectionLabels[paper.sections[0]] || paper.sections[0]}</span><span>{formatDate(paper.date)}</span></div>
                <h3>{paper.titleZh || paper.title}</h3>
                <p>{paper.oneLiner}</p>
              </div>
              <span className="monthly-arrow">↗</span>
            </button>
          ))}
        </div>
      </section>

      <section className="weekly-focus" aria-labelledby="weekly-title">
        <div className="weekly-heading">
          <div><span className="eyebrow">EDITOR’S RADAR</span><h2 id="weekly-title">本周值得关注</h2></div>
          <p>关注刚刚出现的新信号；按公开时间优先，再结合研究增量与证据质量选出。</p>
        </div>
        <div className="weekly-grid">
          {weeklyHighlights.map((paper, index) => (
            <button className="weekly-card" key={paper.id} onClick={() => setSelected(paper)}>
              <span className="weekly-index">0{index + 1}</span>
              <div className="weekly-meta"><span>{sectionLabels[paper.sections[0]] || paper.sections[0]}</span><span>{formatDate(paper.date)}</span></div>
              <h3>{paper.titleZh || paper.title}</h3>
              <p>{paper.oneLiner}</p>
              <span className="weekly-link">阅读全文 <b>↗</b></span>
            </button>
          ))}
        </div>
      </section>

      <section className="library" id="latest">
        <aside id="topics">
          <p className="eyebrow">EXPLORE BY TOPIC</p>
          <h2>研究方向</h2>
          <div className="topic-list">
            <button className={topic === "all" ? "active" : ""} onClick={() => setTopic("all")}><span>全部主题</span><b>{papers.length}</b></button>
            {topics.map(([item, count]) => (
              <button className={topic === item ? "active" : ""} key={item} onClick={() => setTopic(item)}>
                <span>{topicLabels[item] || item}</span><b>{count}</b>
              </button>
            ))}
          </div>
          <div className="draft-note"><span>AI DRAFT</span><p>当前摘要均为 AI 初稿，关键事实与实验数字仍需人工审核。</p></div>
        </aside>

        <div className="paper-feed">
          <div className="feed-top">
            <div><p className="eyebrow">PAPER LIBRARY</p><h2>论文库 <sup>{filtered.length}</sup></h2></div>
            <label className="search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索论文、作者、团队或标签" /></label>
          </div>

          <div className="section-tabs" role="group" aria-label="按板块筛选">
            {Object.entries(sectionLabels).map(([key, label]) => (
              <button key={key} className={section === key ? "active" : ""} onClick={() => setSection(key)}>{label}</button>
            ))}
          </div>

          <div className="paper-list">
            {filtered.map((paper) => (
              <article className="paper-card" key={paper.id}>
                <div className="paper-card-top">
                  <div className="tag-row">
                    <span className="content-tag">{contentTypeLabels[paper.contentType] || paper.contentType}</span>
                    {(paper.selectionScore || 0) >= 90
                      ? <span className="featured-tag">本月精选</span>
                      : paper.importance === "featured" && <span className="featured-tag">重点推荐</span>}
                    {paper.sections.slice(0, 2).map((item) => <span className="section-tag" key={item}>{sectionLabels[item] || item}</span>)}
                    {paper.topics.slice(0, 2).map((item) => <span key={item}>{topicLabels[item] || item}</span>)}
                  </div>
                  <time>{formatDate(paper.date)}</time>
                </div>
                <button className="paper-title" onClick={() => setSelected(paper)}>{paper.titleZh || paper.title}</button>
                {paper.titleZh && <p className="paper-en-title">{paper.title}</p>}
                <p className="paper-summary">{paper.oneLiner}</p>
                <div className="paper-footer">
                  <span>{paper.organizations.slice(0, 2).join(" · ") || paper.authors.slice(0, 2).join(" · ")}</span>
                  <button onClick={() => setSelected(paper)} aria-label={`查看 ${paper.title} 详情`}>→</button>
                </div>
              </article>
            ))}
            {filtered.length === 0 && <div className="empty-state">没有找到符合条件的论文，试试减少筛选条件。</div>}
          </div>
        </div>
      </section>

      <footer><span>Embodied AI Board · Content prototype</span><span>{papers.length} 篇 AI 辅助整理内容</span></footer>

      {selected && (
        <div className="drawer-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
          <section className="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="drawer-close" onClick={() => setSelected(null)} aria-label="关闭详情">×</button>
            <div className="tag-row">
              <span className="content-tag">{contentTypeLabels[selected.contentType] || selected.contentType}</span>
              <span className={selected.sourceScope === "full-source" ? "source-ok" : "source-pending"}>{sourceScopeLabels[selected.sourceScope] || selected.sourceScope}</span>
              {selected.sections.map((item) => <span className="section-tag" key={item}>{sectionLabels[item] || item}</span>)}
              <span>{selected.status}</span>
            </div>
            <h2 id="drawer-title">{selected.titleZh || selected.title}</h2>
            {selected.titleZh && <p className="drawer-en">{selected.title}</p>}
            <p className="drawer-lead">{selected.oneLiner}</p>
            {selected.selectionScore !== null && (
              <div className="score-panel" aria-label={`编辑评分 ${selected.selectionScore} 分`}>
                <div className="score-number"><strong>{selected.selectionScore}</strong><span>/ 100</span></div>
                <div className="score-copy">
                  <span>EDITORIAL SCORE · 编辑参考分</span>
                  <p>{selected.selectionReason || "依据研究增量、证据质量、潜在影响和看板信息价值综合评定。"}</p>
                </div>
              </div>
            )}
            {selected.sourceScope !== "full-source" && <div className="source-warning">这条内容尚未完成全文来源复核，当前摘要仅作为 AI 初稿展示。</div>}
            <dl>
              <div><dt>公开日期</dt><dd>{formatDate(selected.date)}</dd></div>
              <div><dt>团队</dt><dd>{selected.organizations.join(" · ") || "待确认"}</dd></div>
              <div><dt>作者</dt><dd>{selected.authors.slice(0, 8).join("、")}{selected.authors.length > 8 ? " 等" : ""}</dd></div>
            </dl>
            <h3>研究问题</h3><p>{selected.researchQuestion || selected.abstract}</p>
            <h3>为什么值得关注</h3><p>{selected.contribution || "等待编辑补充。"}</p>
            <div className="drawer-links">
              <a href={selected.paperUrl} target="_blank" rel="noreferrer">阅读论文 ↗</a>
              {selected.projectUrl && <a href={selected.projectUrl} target="_blank" rel="noreferrer">项目主页 ↗</a>}
              {selected.codeUrl && <a href={selected.codeUrl} target="_blank" rel="noreferrer">代码仓库 ↗</a>}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
