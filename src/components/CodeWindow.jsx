import { useReveal } from "../hooks";

/* A reusable editor-pane wrapper used by section cards. */
export default function CodeWindow({ filename, language = "python", children, className = "", id }) {
  const { ref, visible } = useReveal();
  return (
    <section id={id} className={`code-window ${visible ? "visible" : ""} ${className}`} ref={ref}>
      <header className="cw-head">
        <span className="wdot red" />
        <span className="wdot yellow" />
        <span className="wdot green" />
        <span className="cw-title">{filename}</span>
        <span className="cw-lang">{language}</span>
      </header>
      <div className="cw-body">{children}</div>
    </section>
  );
}
