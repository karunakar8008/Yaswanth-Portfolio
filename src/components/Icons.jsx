// Inline SVG icons — zero dependencies, currentColor so they pick up CSS color.
const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const FolderIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
  </svg>
);
export const FileIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
    <polyline points="14 3 14 9 20 9" />
  </svg>
);
export const PyIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 2c-3 0-5 1-5 3v3h5v1H5a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2v-3a3 3 0 0 1 3-3h5a3 3 0 0 0 3-3V5c0-2-2-3-5-3H12z" />
    <circle cx="9" cy="5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
export const JsonIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M8 4c-2 0-3 1-3 3v3c0 1-.5 2-2 2 1.5 0 2 1 2 2v3c0 2 1 3 3 3M16 4c2 0 3 1 3 3v3c0 1 .5 2 2 2-1.5 0-2 1-2 2v3c0 2-1 3-3 3" />
  </svg>
);
export const TerminalIcon = (p) => (
  <svg {...base} {...p}>
    <polyline points="4 7 9 12 4 17" />
    <line x1="13" y1="17" x2="20" y2="17" />
  </svg>
);
export const GitIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="6" cy="6" r="2" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="12" r="2" />
    <path d="M6 8v8M8 18h2a4 4 0 0 0 4-4v-2" />
  </svg>
);
export const CubeIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 2 3 7v10l9 5 9-5V7l-9-5z" />
    <path d="M3 7l9 5 9-5M12 12v10" />
  </svg>
);
export const SparkleIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
  </svg>
);
export const CloseIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
export const SendIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);
export const MenuIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);
export const MailIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);
export const GitHubIcon = (p) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
  </svg>
);
export const StarIcon = (p) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M12 2l2.9 6.8L22 10l-5.5 4.8L18 22l-6-3.5L6 22l1.5-7.2L2 10l7.1-1.2L12 2z" />
  </svg>
);
export const BranchIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="6" cy="4" r="2" />
    <circle cx="6" cy="20" r="2" />
    <circle cx="18" cy="12" r="2" />
    <path d="M6 6v12M8 12h2a4 4 0 0 0 4-4V6" />
  </svg>
);
