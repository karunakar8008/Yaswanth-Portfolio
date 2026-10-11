import Section from "./Section";
import { profile } from "../data/content";
import { MailIcon, GitHubIcon, SparkleIcon } from "./Icons";

export default function Contact({ onOpenChat }) {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      lead="Open to Python Full-Stack, Senior Backend, and AI engineering roles. Say hi — or let my AI assistant answer first."
      align="center"
    >
      <div className="contact-cta">
        <a className="btn btn-primary big" href={`mailto:${profile.email}`}>
          <MailIcon width={18} height={18} /> {profile.email}
        </a>
        <a className="btn btn-ghost big" href={profile.github} target="_blank" rel="noreferrer">
          <GitHubIcon width={18} height={18} /> github.com/{profile.handle}
        </a>
        <button className="btn btn-ghost big" onClick={onOpenChat}>
          <SparkleIcon width={18} height={18} /> ask my AI
        </button>
      </div>
      <p className="contact-foot">
        <span>Based in <strong>{profile.location}</strong></span>
        <span>·</span>
        <a href={`tel:${profile.phone}`}>{profile.phone}</a>
      </p>
    </Section>
  );
}
