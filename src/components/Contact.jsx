import CodeWindow from "./CodeWindow";
import { profile } from "../data/content";
import { MailIcon, GitHubIcon, SparkleIcon } from "./Icons";

/* Contact section as a shell session with a set of outbound commands. */
export default function Contact({ onOpenChat }) {
  return (
    <CodeWindow id="contact" filename="contact.sh" language="bash">
      <pre className="code shell">
        <div className="ln">
          <span className="c"># get in touch</span>
        </div>
        <div className="ln">
          <span className="k">echo</span> <span className="s">"👋 open to Python Full-Stack / Senior Backend / AI engineering roles"</span>
        </div>
        <div className="ln" />
        <div className="ln">
          <span className="k">curl</span> -X <span className="s">POST</span>{" "}
          <span className="s">mailto:{profile.email}</span>
        </div>
        <div className="ln">
          <span className="k">gh</span> auth login --web --user <span className="s">{profile.handle}</span>
        </div>
        <div className="ln">
          <span className="k">tel</span> <span className="s">{profile.phone}</span>
        </div>
      </pre>

      <div className="contact-row">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          <MailIcon /> email
        </a>
        <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
          <GitHubIcon /> github
        </a>
        <button className="btn btn-ghost" onClick={onOpenChat}>
          <SparkleIcon /> ask my AI
        </button>
      </div>
    </CodeWindow>
  );
}
