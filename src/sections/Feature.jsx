import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Photo from "@/components/Photo.jsx";
import { photos } from "@/data/site.js";

export default function Feature() {
  return (
    <section className="feature-band">
      <div className="container feature-grid">
        <div className="feature-copy">
          <div className="eyebrow light"><span></span> TU TRANQUILIDAD ES PRIMERO</div>
          <h2>Un equipo que te escucha. Un cuidado que se nota.</h2>
          <p>Te explicamos cada paso y te ayudamos a elegir el tratamiento adecuado según tu evaluación profesional.</p>
          <Link className="btn btn-lime" to="/cita">Quiero una evaluación <ArrowUpRight size={18}/></Link>
        </div>
        <div className="feature-photo"><Photo photo={photos.patient} alt="Paciente recibiendo atención dental" /></div>
      </div>
    </section>
  );
}
