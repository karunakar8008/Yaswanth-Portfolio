import { useScrollSpy } from "../hooks";
import { MenuIcon } from "./Icons";

// The sections currently "open" as tabs across the top of the editor.
const TABS = [
  { id: "home", label: "readme.md" },
  { id: "about", label: "about.py" },
  { id: "skills", label: "skills.yaml" },
  { id: "experience", label: "experience.log" },
  { id: "projects", label: "projects.ipynb" },
  { id: "contact", label: "contact.sh" },
];
const IDS = TABS.map((t) => t.id);

export default function TopBar({ onToggleSidebar }) {
  const active = useScrollSpy(IDS);

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="icon-btn mobile-only" onClick={onToggleSidebar} aria-label="Toggle sidebar">
          <MenuIcon />
        </button>
        <div className="window-dots" aria-hidden="true">
          <span className="wdot red" />
          <span className="wdot yellow" />
          <span className="wdot green" />
        </div>
      </div>

      <nav className="tabs" aria-label="File tabs">
        {TABS.map((t) => (
          <a key={t.id} href={`#${t.id}`} className={`tab ${active === t.id ? "active" : ""}`}>
            <span className="tab-dot" />
            <span>{t.label}</span>
          </a>
        ))}
      </nav>

      <div className="topbar-right">
        <span className="meta mono">main</span>
      </div>
    </header>
  );
}
