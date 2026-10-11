import { useState } from "react";
import { useScrollSpy } from "../hooks";
import { profile } from "../data/content";
import { MenuIcon, CloseIcon } from "./Icons";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "credentials", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const active = useScrollSpy(LINKS.map((l) => l.id));
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <a href="#home" className="nav-logo">
        <span className="dot" aria-hidden="true" />
        {profile.name.split(" ")[0].toUpperCase()}
      </a>
      <ul className={`nav-links ${open ? "open" : ""}`}>
        {LINKS.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
}
