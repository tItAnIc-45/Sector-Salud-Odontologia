import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Photo from "@/components/Photo.jsx";
import { photos } from "@/data/site.js";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span></span> CUIDAMOS DE TU SONRISA</div>
          <h1>Una sonrisa sana <em>cambia todo.</em></h1>
          <p>En Tu Plus Odontología combinamos atención cercana, tecnología y cuidado profesional para acompañarte en cada sonrisa.</p>
          <div className="hero-actions">
            <Link className="btn btn-lime" to="/cita">Agenda tu cita <ArrowUpRight size={18}/></Link>
            <Link className="text-link" to="/tratamientos">Conoce nuestros tratamientos <ArrowUpRight size={16}/></Link>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars"><span>TP</span><span>+</span><span>☺</span></div>
            <div><strong>Tu sonrisa, nuestra prioridad</strong><small>Atención humana y profesional</small></div>
          </div>
        </div>
        <div className="hero-visual">
          <Photo photo={photos.hero} alt="Atención odontológica profesional" />
          <div className="hero-note"><span className="note-icon"><Sparkles size={18}/></span><div><strong>Cuidado integral</strong><small>Para cada etapa de tu vida</small></div></div>
          <span className="vertical-label">TU PLUS · ODONTOLOGÍA</span>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>SONRISAS QUE INSPIRAN CONFIANZA</span><span className="line"></span><span>BIENVENIDOS A TU PLUS</span>
      </div>
    </section>
  );
}
