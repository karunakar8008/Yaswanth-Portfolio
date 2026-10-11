import { useClock, useScrollSpy } from "../hooks";
import { BranchIcon } from "./Icons";

const IDS = ["home", "about", "skills", "experience", "projects", "contact"];

export default function StatusBar({ onOpenChat }) {
  const now = useClock();
  const active = useScrollSpy(IDS);

  return (
    <footer className="statusbar">
      <div className="status-left">
        <span className="status-chip">
          <BranchIcon width={12} height={12} /> main
        </span>
        <span className="status-chip">↳ #{active}</span>
        <span className="status-chip muted">0 errors · 0 warnings</span>
      </div>

      <button className="status-chip chip-cta" onClick={onOpenChat}>
        ✨ ask Yas
      </button>

      <div className="status-right">
        <span className="status-chip muted">UTF-8 · LF</span>
        <span className="status-chip muted">Python 3.12</span>
        <span className="status-chip muted">{now}</span>
      </div>
    </footer>
  );
}
