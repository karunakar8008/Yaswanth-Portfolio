import CodeWindow from "./CodeWindow";
import { skillGroups } from "../data/content";

/* Skills as a bento grid; each tile is one category themed by its own accent. */
export default function Skills() {
  return (
    <CodeWindow id="skills" filename="skills.yaml" language="yaml">
      <div className="bento">
        {skillGroups.map((g) => (
          <div className={`bento-tile accent-${g.accent}`} key={g.category}>
            <div className="bento-head">
              <span className="bento-key">{g.category.toLowerCase().replace(/\s+/g, "_")}:</span>
            </div>
            <div className="bento-tags">
              {g.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CodeWindow>
  );
}
