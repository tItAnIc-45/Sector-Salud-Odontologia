import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero.jsx";
import CtaBand from "@/components/CtaBand.jsx";
import { services } from "@/data/site.js";

export default function Tratamientos() {
  return (
    <>
      <PageHero eyebrow="TRATAMIENTOS" title="Todo lo que tu sonrisa necesita." text="Seis áreas de atención. Cada tratamiento empieza con una evaluación." />
      <section className="section treat-list">
        <div className="container">
          {services.map((s, i) => (
            <article className={`treat-row${i % 2 ? " flip" : ""}`} key={s.title} id={s.title.toLowerCase().replace(/\s+/g, "-")}>
              <img src={`/img/art/${s.icon.toLowerCase()}.svg`} alt="" />
              <div>
                <span className="treat-num">0{i + 1}</span>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
                <ul className="check-list">{s.items.map((t) => <li key={t}><CheckCircle2 /> {t}</li>)}</ul>
                <Link className="under-link" to={`/cita?servicio=${encodeURIComponent(s.title)}`}>Consultar este tratamiento <ArrowUpRight size={17} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="¿No sabes cuál necesitas?" text="Empieza con una evaluación general y te orientamos." />
    </>
  );
}
