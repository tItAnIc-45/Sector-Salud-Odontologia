import React from "react";
import { useEffect } from "react";

// Cabecera de cada página interna. También pone el título de la pestaña.
export default function PageHero({ eyebrow, title, text }) {
  useEffect(() => { document.title = `${title} | Tu Plus Odontología`; }, [title]);
  return (
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow"><span></span> {eyebrow}</div>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
