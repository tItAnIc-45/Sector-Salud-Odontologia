import React from "react";
import { steps } from "@/data/site.js";

// Cómo es el recorrido del paciente. Los textos están en data/site.js.
export default function Process() {
  return (
    <section className="process section">
      <div className="container">
        <div className="section-heading"><div><div className="eyebrow dark"><span></span> TU RECORRIDO</div><h2>Cómo es tu primera visita.</h2></div><p>Cuatro pasos, sin sorpresas.</p></div>
        <ol className="steps-grid">
          {steps.map((s, i) => <li key={s.title}><span>{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p></li>)}
        </ol>
      </div>
    </section>
  );
}
