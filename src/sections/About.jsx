import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import Photo from "@/components/Photo.jsx";
import { photos } from "@/data/site.js";

export default function About() {
  return (
    <section className="intro section" id="nosotros">
      <div className="container intro-grid">
        <div className="intro-image"><Photo photo={photos.clinic} alt="Interior moderno de una clínica dental" /><div className="image-caption">Un espacio pensado para ti</div></div>
        <div className="intro-copy">
          <div className="eyebrow dark"><span></span> MÁS QUE UNA SONRISA</div>
          <h2>Tu bienestar comienza con una buena experiencia.</h2>
          <p className="lead">Creemos que ir al dentista debe sentirse sencillo, seguro y cercano.</p>
          <p>Por eso cuidamos cada detalle: desde la primera consulta hasta el seguimiento de tu tratamiento. Nuestro objetivo es que te sientas acompañado y tengas la información necesaria para cuidar tu salud bucal.</p>
          <Link className="under-link" to="/nosotros">Conoce nuestro enfoque <ArrowUpRight size={17}/></Link>
          <div className="values">
            <div><ShieldCheck/><strong>Confianza</strong><small>Información clara</small></div>
            <div><HeartPulse/><strong>Cuidado</strong><small>Atención cercana</small></div>
            <div><Sparkles/><strong>Calidad</strong><small>En cada detalle</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}
