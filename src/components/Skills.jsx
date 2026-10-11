import Section from "./Section";
import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      lead="A grounded toolkit I reach for across the stack — plus the AI tooling I've been exploring lately."
    >
      <div className="skills-grid">
        {skillGroups.map((g) => (
          <div className="skill-card" key={g.category}>
            <h3>{g.category}</h3>
            <div className="skill-tags">
              {g.items.map((item) => (
                <span className="tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
