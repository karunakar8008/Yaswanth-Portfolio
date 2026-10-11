import CodeWindow from "./CodeWindow";
import { projects, certifications, education } from "../data/content";
import { StarIcon, GitIcon, SparkleIcon } from "./Icons";

/* Projects as a GitHub README card; also folds in certs + education blocks below. */
export default function Projects() {
  return (
    <CodeWindow id="projects" filename="projects.ipynb" language="markdown">
      <div className="repos">
        {projects.map((p) => (
          <article className="repo" key={p.name}>
            <header className="repo-head">
              <div className="repo-title">
                <GitIcon width={16} height={16} />
                <span className="repo-name">
                  <span className="muted">ycdaruvuri /</span> <strong>{p.name}</strong>
                </span>
                <span className="repo-badge">Public</span>
              </div>
              <div className="repo-meta">
                <span><StarIcon width={14} height={14} /> {p.stars}</span>
                <span>⑂ {p.forks}</span>
              </div>
            </header>
            <p className="repo-tagline">{p.tagline}</p>
            <p className="repo-desc">{p.description}</p>
            <ul className="repo-highlights">
              {p.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="repo-tags">
              {p.tech.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <footer className="repo-foot">
              <span className="lang-dot" /> {p.language}
            </footer>
          </article>
        ))}
      </div>

      <h3 className="subhead"># certifications</h3>
      <div className="pills">
        {certifications.map((c) => (
          <div className="pill" key={c.name}>
            <span className="pill-badge">{c.icon}</span>
            <div>
              <div className="pill-name">{c.name}</div>
              <div className="pill-issuer">{c.issuer}</div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="subhead"># education</h3>
      <div className="pills">
        {education.map((e, i) => (
          <div className="pill" key={i}>
            <span className="pill-badge">
              <SparkleIcon width={14} height={14} />
            </span>
            <div>
              <div className="pill-name">{e.degree}</div>
              <div className="pill-issuer">
                {e.school} · {e.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </CodeWindow>
  );
}
