import { useScrollSpy } from "../hooks";
import { FolderIcon, PyIcon, JsonIcon, FileIcon, GitIcon, TerminalIcon, CubeIcon } from "./Icons";

// Each nav item maps a section id to a "file" in the IDE sidebar.
const FILES = [
  { id: "home", label: "readme.md", icon: FileIcon },
  { id: "about", label: "about.py", icon: PyIcon },
  { id: "skills", label: "skills.yaml", icon: JsonIcon },
  { id: "experience", label: "experience.log", icon: GitIcon },
  { id: "projects", label: "projects/", icon: CubeIcon },
  { id: "contact", label: "contact.sh", icon: TerminalIcon },
];
const IDS = FILES.map((f) => f.id);

export default function Sidebar({ onNav }) {
  const active = useScrollSpy(IDS);
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <FolderIcon width={14} height={14} />
        <span>yaswanth.dev</span>
      </div>

      <nav className="file-tree">
        <div className="tree-label">PORTFOLIO</div>
        {FILES.map((f) => {
          const Icon = f.icon;
          const isActive = active === f.id;
          return (
            <a
              key={f.id}
              href={`#${f.id}`}
              onClick={onNav}
              className={`file-row ${isActive ? "active" : ""}`}
            >
              <span className="file-indent" />
              <Icon width={14} height={14} className="file-icon" />
              <span className="file-name">{f.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="sidebar-foot">
        <div className="dot green" /> connected
      </div>
    </aside>
  );
}
