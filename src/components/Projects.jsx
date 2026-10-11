import Section from "./Section";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Hand-built"
      lead="Projects I architected and shipped end-to-end — beyond client work."
    >
      <div className="project-list">
        {projects.map((p) => (
          <article className="project-card" key={p.name}>
            <header className="project-head">
              <h3>{p.tagline}</h3>
              <span className="project-badge">{p.language}</span>
            </header>
            <p className="project-desc">{p.description}</p>
            <ul className="project-highlights">
              {p.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="project-tags">
              {p.tech.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
