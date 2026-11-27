import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, ShieldCheck, Smile, Gem, HeartPulse, Stethoscope } from "lucide-react";
import { services } from "@/data/site.js";

const ICONS = { Sparkles, ShieldCheck, Smile, Gem, HeartPulse, Stethoscope };

export default function Services({ limit }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="services section" id="servicios">
      <div className="container">
        <div className="section-heading">
          <div><div className="eyebrow dark"><span></span> NUESTROS TRATAMIENTOS</div><h2>Todo lo que tu sonrisa necesita.</h2></div>
          <p>Soluciones odontológicas para cuidar tu salud, prevenir y recuperar la confianza al sonreír.</p>
        </div>
        <div className="service-grid">
          {list.map(({ icon, title, text }, i) => { const Icon = ICONS[icon]; return (
            <article className="service-card" key={title}>
              <img className="service-art" src={`/img/art/${icon.toLowerCase()}.svg`} alt="" loading="lazy" />
    <div className="service-top"><span>0{i + 1}</span><Icon size={25}/></div>
              <h3>{title}</h3><p>{text}</p>
              <Link to={`/cita?servicio=${encodeURIComponent(title)}`} aria-label={`Consultar por ${title}`}>Consultar tratamiento <ArrowUpRight size={16}/></Link>
            </article>
          ); })}
        </div>
      </div>
    </section>
  );
}
