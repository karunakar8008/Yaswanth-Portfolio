import { useEffect, useState } from "react";
import { profile, heroStats } from "../data/content";

// Lines the "shell" types out when the hero mounts.
const LINES = [
  { prompt: "yaswanth@dev", path: "~", cmd: "whoami" },
  { output: `${profile.name} · ${profile.role}` },
  { prompt: "yaswanth@dev", path: "~", cmd: "cat tagline.txt" },
  { output: profile.tagline },
  { prompt: "yaswanth@dev", path: "~", cmd: "ls skills/" },
  {
    output:
      "python/   django/   fastapi/   react/   typescript/   postgres/   aws/   docker/   langchain/   rag/",
  },
  { prompt: "yaswanth@dev", path: "~", cmd: "./start.sh" },
  { output: "✓ server started on :3000  —  scroll down to explore ↓" },
];

// Types the whole LINES script, char-by-char for commands.
function useTypingLines(lines, { typeMs = 24, pauseMs = 320 } = {}) {
  const [printed, setPrinted] = useState([]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let i = 0;
    let acc = [];

    const run = async () => {
      while (i < lines.length && !cancelled) {
        const line = lines[i];
        if (line.output !== undefined) {
          acc = [...acc, { ...line }];
          setPrinted([...acc]);
          await wait(pauseMs);
        } else {
          // Type the command out character by character.
          const target = line.cmd;
          for (let c = 0; c <= target.length && !cancelled; c++) {
            acc = [
              ...acc.filter((_, idx) => idx < acc.length - (c === 0 ? 0 : 1)),
              { ...line, cmd: target.slice(0, c) },
            ];
            setPrinted([...acc]);
            await wait(typeMs);
          }
          await wait(pauseMs);
        }
        i++;
      }
    };

    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const blink = setInterval(() => setCursor((v) => !v), 500);
    run();

    return () => {
      cancelled = true;
      clearInterval(blink);
    };
  }, [lines, typeMs, pauseMs]);

  return { printed, cursor };
}

export default function TerminalHero() {
  const { printed, cursor } = useTypingLines(LINES);
  const done = printed.length >= LINES.length && printed[printed.length - 1]?.cmd === undefined;

  return (
    <section id="home" className="hero">
      <div className="terminal">
        <div className="term-head">
          <span className="wdot red" />
          <span className="wdot yellow" />
          <span className="wdot green" />
          <span className="term-title">zsh — yaswanth@dev — 100×26</span>
        </div>

        <div className="term-body">
          {printed.map((l, i) =>
            l.cmd !== undefined ? (
              <div key={i} className="term-line">
                <span className="term-user">{l.prompt}</span>
                <span className="term-colon">:</span>
                <span className="term-path">{l.path}</span>
                <span className="term-prompt">$</span>
                <span className="term-cmd">{l.cmd}</span>
                {i === printed.length - 1 && !done && <span className={`caret ${cursor ? "on" : ""}`} />}
              </div>
            ) : (
              <div key={i} className="term-out">
                {l.output}
              </div>
            )
          )}
          {done && <div className="term-out muted"># ready — ask Yas (bottom-right) or scroll ↓</div>}
        </div>
      </div>

      <div className="hero-stats">
        {heroStats.map((s) => (
          <div key={s.k} className="hero-stat">
            <span className="k">{s.k}</span>
            <span className="v">{s.v}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
