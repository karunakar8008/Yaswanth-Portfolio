import CodeWindow from "./CodeWindow";
import { profile, about } from "../data/content";

/* About section rendered as a syntax-highlighted Python dict. */
export default function About() {
  return (
    <CodeWindow id="about" filename="about.py" language="python">
      <pre className="code">
        <div className="ln">
          <span className="k">class</span> <span className="cls">Developer</span>:
        </div>
        <div className="ln indent">
          <span className="k">def</span> <span className="fn">__init__</span>(<span className="self">self</span>):
        </div>
        <div className="ln indent2">
          <span className="self">self</span>.<span className="attr">name</span> ={" "}
          <span className="s">"{profile.name}"</span>
        </div>
        <div className="ln indent2">
          <span className="self">self</span>.<span className="attr">role</span> ={" "}
          <span className="s">"{profile.role}"</span>
        </div>
        <div className="ln indent2">
          <span className="self">self</span>.<span className="attr">location</span> ={" "}
          <span className="s">"{profile.location}"</span>
        </div>
        <div className="ln indent2">
          <span className="self">self</span>.<span className="attr">years_experience</span> ={" "}
          <span className="num">6</span>
        </div>
        <div className="ln indent2">
          <span className="self">self</span>.<span className="attr">open_to_work</span> ={" "}
          <span className="b">True</span>
        </div>
        <div className="ln indent2">
          <span className="self">self</span>.<span className="attr">domains</span> = [
          {about.domains.map((d, i) => (
            <span key={d}>
              <span className="s">"{d}"</span>
              {i < about.domains.length - 1 ? ", " : ""}
            </span>
          ))}
          ]
        </div>
        <div className="ln indent2">
          <span className="self">self</span>.<span className="attr">highlights</span> = [
        </div>
        {about.highlights.map((h, i) => (
          <div className="ln indent3" key={i}>
            <span className="s">"{h}"</span>
            {i < about.highlights.length - 1 ? "," : ""}
          </div>
        ))}
        <div className="ln indent2">]</div>
        <div className="ln" />
        <div className="ln">
          <span className="c"># instantiate</span>
        </div>
        <div className="ln">
          <span className="attr">dev</span> = <span className="cls">Developer</span>()
        </div>
      </pre>
    </CodeWindow>
  );
}
