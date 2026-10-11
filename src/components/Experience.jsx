import { useState } from "react";
import Section from "./Section";
import { experience } from "../data/content";

function Role({ job, open, onToggle }) {
  return (
    <article className={`role ${open ? "open" : ""}`}>
      <button className="role-head" onClick={onToggle} aria-expanded={open}>
        <div className="role-main">
          <div className="role-row">
            <h3 className="role-title">{job.role}</h3>
            <span className="role-period">{job.period}</span>
          </div>
          <div className="role-row">
            <span className="role-company">{job.company}</span>
            <span className="role-location">{job.location}</span>
          </div>
          <p className="role-summary">
            {/* Short two-line teaser from the first bullet */}
            {job.bullets[0]}
          </p>
        </div>
        <span className="role-toggle" aria-hidden="true">{open ? "–" : "+"}</span>
      </button>

      {open && (
        <div className="role-body">
          <ul>
            {job.bullets.slice(1).map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <div className="role-tags">
            {job.tech.map((t) => (
              <span className="tag tag-ghost" key={t}>{t}</span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      lead="6+ years across three companies. Click any role to see the full story."
    >
      <div className="roles">
        {experience.map((job, i) => (
          <Role
            key={job.company + i}
            job={job}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </Section>
  );
}
