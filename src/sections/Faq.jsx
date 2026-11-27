import React from "react";
import { faqs } from "@/data/site.js";

export default function Faq() {
  return (
    <section className="faq section">
      <div className="container faq-wrap">
        <div><div className="eyebrow dark"><span></span> PREGUNTAS FRECUENTES</div><h2>Lo que más nos preguntan.</h2></div>
        <div>{faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
      </div>
    </section>
  );
}
