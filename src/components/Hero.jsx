import { useEffect, useState } from "react";
import { profile, heroStats } from "../data/content";
import Memoji from "./Memoji";

/* Cycles typing one word at a time for the subtitle. */
function useRotating(words, { typeMs = 60, deleteMs = 30, holdMs = 1700 } = {}) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx % words.length];
    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && text === current) delay = holdMs;
    else if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => i + 1);
      delay = 300;
    }
    const t = setTimeout(() => {
      if (!deleting && text === current) setDeleting(true);
      else setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, idx, words, typeMs, deleteMs, holdMs]);

  return text;
}

const SPECIALTIES = [
  "Python backends",
  "React UIs",
  "AI-powered apps",
  "AWS cloud systems",
  "LLM + RAG tools",
];

export default function Hero({ onOpenChat }) {
  const specialty = useRotating(SPECIALTIES);

  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="dot" /> available for new roles
          </span>
          <h1 className="headline">
            Hi, I'm <span className="accent">{profile.name.split(" ")[0]}</span> —
            I build <em className="rotating">{specialty}</em>
            <span className="caret">|</span>
          </h1>
          <p className="lead">
            Python Full-Stack Developer with <strong>6+ years</strong> shipping secure,
            scalable web apps across fintech, healthcare, and banking. Recently leaning
            hard into Generative AI — LangChain, RAG, vector search.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">See my work →</a>
            <button className="btn btn-ghost" onClick={onOpenChat}>
              💬 Chat with my AI
            </button>
          </div>

          <div className="hero-stats">
            {heroStats.map((s) => (
              <div className="hero-stat" key={s.k}>
                <strong>{s.v}</strong>
                <span>{s.k}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero-avatar">
          <div className="avatar-ring">
            <div className="avatar-shadow" />
            <Memoji size={220} />
          </div>
          <div className="speech-greet">
            <span>👋 hey!</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
