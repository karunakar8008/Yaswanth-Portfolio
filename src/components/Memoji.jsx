/* The memoji avatar — a cheerful SVG character.
   `speaking` makes the mouth animate (open/close) and the brows jiggle;
   `blink` triggers a quick eye blink. */
export default function Memoji({ speaking = false, size = 110 }) {
  return (
    <svg
      className={`memoji ${speaking ? "speaking" : ""}`}
      viewBox="0 0 160 180"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f5c89a" />
          <stop offset="1" stopColor="#e2a06d" />
        </linearGradient>
        <linearGradient id="hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a1a10" />
          <stop offset="1" stopColor="#1a0f08" />
        </linearGradient>
        <linearGradient id="shirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#10b981" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <radialGradient id="cheek" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ff8a8a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ff8a8a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="headShadow" cx="0.5" cy="0.3" r="0.65">
          <stop offset="0.6" stopColor="transparent" />
          <stop offset="1" stopColor="#000" stopOpacity="0.18" />
        </radialGradient>
      </defs>

      {/* soft shadow under head */}
      <ellipse cx="80" cy="160" rx="42" ry="6" fill="#000" opacity="0.22" />

      {/* neck */}
      <path d="M66 118 L94 118 L96 142 L64 142 Z" fill="url(#skin)" />

      {/* shoulders / shirt */}
      <path d="M20 180 Q20 138 60 134 L100 134 Q140 138 140 180 Z" fill="url(#shirt)" />
      {/* collar highlight */}
      <path d="M60 134 Q80 150 100 134 L100 142 Q80 158 60 142 Z" fill="#0d7a5a" opacity="0.6" />

      {/* head */}
      <ellipse cx="80" cy="76" rx="50" ry="56" fill="url(#skin)" />
      <ellipse cx="80" cy="76" rx="50" ry="56" fill="url(#headShadow)" />

      {/* hair — swept top */}
      <path
        d="M30 70 Q22 36 60 24 Q82 10 110 26 Q140 42 130 72 Q118 56 100 54 Q90 48 76 56 Q58 50 42 60 Q34 66 30 70 Z"
        fill="url(#hair)"
      />

      {/* ears */}
      <ellipse cx="30" cy="80" rx="7" ry="12" fill="url(#skin)" />
      <ellipse cx="130" cy="80" rx="7" ry="12" fill="url(#skin)" />

      {/* cheeks */}
      <circle className="cheek" cx="50" cy="92" r="12" fill="url(#cheek)" />
      <circle className="cheek" cx="110" cy="92" r="12" fill="url(#cheek)" />

      {/* brows */}
      <g className="brows">
        <path d="M46 60 Q58 54 68 60" stroke="#2a1a10" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M92 60 Q102 54 114 60" stroke="#2a1a10" strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>

      {/* eyes */}
      <g className="eyes">
        <ellipse className="eye" cx="57" cy="78" rx="6" ry="7" fill="#1a1a1a" />
        <ellipse className="eye" cx="103" cy="78" rx="6" ry="7" fill="#1a1a1a" />
        <circle cx="59" cy="76" r="1.6" fill="#fff" />
        <circle cx="105" cy="76" r="1.6" fill="#fff" />
      </g>

      {/* mouth — animates (open/close) when `speaking` */}
      <g className="mouth-group">
        <path
          className="mouth"
          d="M66 104 Q80 112 94 104"
          stroke="#4a2a1a"
          strokeWidth="3.5"
          fill="#3a1a0a"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
