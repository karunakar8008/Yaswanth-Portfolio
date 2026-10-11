import Section from "./Section";
import { certifications, education } from "../data/content";

/* Combines certifications + education in one tidy section. */
export default function Credentials() {
  return (
    <Section id="credentials" eyebrow="Credentials" title="Education & certifications">
      <div className="cred-grid">
        {education.map((e, i) => (
          <div className="cred-card edu-card" key={"edu" + i}>
            <div className="cred-tag">🎓 Education</div>
            <h3>{e.degree}</h3>
            <p className="cred-sub">{e.school}</p>
            <p className="cred-period">{e.period}</p>
          </div>
        ))}
        {certifications.map((c, i) => (
          <div className="cred-card cert-card" key={"cert" + i}>
            <div className="cred-tag">📜 Certification</div>
            <h3>{c.name}</h3>
            <p className="cred-sub">{c.issuer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
