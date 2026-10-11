import Section from "./Section";
import { profile, about } from "../data/content";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me" lead={profile.summary}>
      <div className="about-grid">
        <ul className="highlight-list">
          {about.highlights.map((h, i) => (
            <li key={i}>
              <span className="bullet" aria-hidden="true">✦</span>
              {h}
            </li>
          ))}
        </ul>

        <aside className="domains-card">
          <div className="domains-head">Industries I've shipped in</div>
          <div className="domains-list">
            {about.domains.map((d) => (
              <span className="pill" key={d}>{d}</span>
            ))}
          </div>
          <div className="domains-foot">
            Based in <strong>{profile.location}</strong>
          </div>
        </aside>
      </div>
    </Section>
  );
}
