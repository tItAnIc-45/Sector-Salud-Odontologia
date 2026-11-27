import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Photo from "@/components/Photo.jsx";
import { photos } from "@/data/site.js";

export default function Team() {
  return (
    <section className="team section" id="equipo">
      <div className="container team-grid">
        <div className="team-copy">
          <div className="eyebrow dark"><span></span> ATENCIÓN PROFESIONAL</div>
          <h2>Personas que cuidan de personas.</h2>
          <p>Queremos que cada visita sea una experiencia positiva. Nuestro enfoque combina escucha, orientación y atención odontológica responsable.</p>
          <ul className="check-list">
            <li><CheckCircle2/> Evaluación según tus necesidades</li>
            <li><CheckCircle2/> Explicación clara de cada procedimiento</li>
            <li><CheckCircle2/> Acompañamiento durante tu tratamiento</li>
          </ul>
          <Link className="under-link" to="/contacto">Conversemos sobre tu sonrisa <ArrowUpRight size={17}/></Link>
        </div>
        <div className="team-photo"><Photo photo={photos.team} alt="Profesionales en un consultorio odontológico" /><div className="team-stamp"><span>TP</span><small>SONRÍE CON<br/>CONFIANZA</small></div></div>
      </div>
    </section>
  );
}
