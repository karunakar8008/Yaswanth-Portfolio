import { useReveal } from "../hooks";

export default function Section({ id, eyebrow, title, lead, children, align = "left" }) {
  const { ref, visible } = useReveal();
  return (
    <section id={id} className={`section ${visible ? "visible" : ""} align-${align}`} ref={ref}>
      <header className="section-head">
        {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
        {title && <h2 className="section-title">{title}</h2>}
        {lead && <p className="section-lead">{lead}</p>}
      </header>
      <div className="section-body">{children}</div>
    </section>
  );
}
