import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CtaBand({ title = "Tu próxima sonrisa comienza aquí.", text = "Reserva tu evaluación y te confirmamos el horario." }) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div><h2>{title}</h2><p>{text}</p></div>
        <Link className="btn btn-lime" to="/cita">Reservar cita <ArrowUpRight size={18} /></Link>
      </div>
    </section>
  );
}
