import { useState } from "react";
import CodeWindow from "./CodeWindow";
import { experience } from "../data/content";
import { BranchIcon } from "./Icons";

/* Experience rendered as a `git log` style stream — each role is a commit. */
export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <CodeWindow id="experience" filename="experience.log" language="git">
      <div className="gitlog">
        <div className="gitlog-cmd">
          <span className="prompt">$</span> git log --author=&quot;yaswanth&quot; --pretty=full --stat
        </div>

        {experience.map((job, i) => {
          const isOpen = open === i;
          return (
            <article key={job.sha} className={`commit ${isOpen ? "open" : ""}`}>
              <header className="commit-head" onClick={() => setOpen(isOpen ? -1 : i)}>
                <div className="commit-line">
                  <span className="yellow">commit {job.sha}</span>
                  <span className="muted mono"> ({job.branch})</span>
                </div>
                <div className="commit-line muted">
                  <span>Author: </span>
                  <span className="green">{job.company} &lt;{job.location}&gt;</span>
                </div>
                <div className="commit-line muted">
                  <span>Date:&nbsp;&nbsp; </span>
                  <span>{job.period}</span>
                </div>
                <div className="commit-msg">
                  <BranchIcon width={14} height={14} className="commit-branch" />
                  {job.role}
                </div>
              </header>

              {isOpen && (
                <div className="commit-body">
                  <ul>
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                  <div className="commit-tech">
                    {job.tech.map((t) => (
                      <span className="chip chip-ghost" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </CodeWindow>
  );
}
