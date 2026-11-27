import React from "react";
import { ArrowUpRight, MapPin, Clock, Phone } from "lucide-react";
import { site } from "@/data/site.js";

export default function Contact() {
  const q = encodeURIComponent(site.mapQuery);
  return (
    <section className="contact section" id="contacto">
      <div className="container">
        <div className="section-heading contact-heading"><div><div className="eyebrow dark"><span></span> ENCUÉNTRANOS</div><h2>Estamos cerca de ti.</h2></div><p>Visítanos o contáctanos para coordinar tu próxima evaluación.</p></div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item"><MapPin/><div><strong>Ubicación</strong><p>{site.city}</p></div></div>
            <div className="contact-item"><Clock/><div><strong>Horario de atención</strong><p>Atención con cita previa<br/><small>Confirma los horarios al reservar.</small></p></div></div>
            <div className="contact-item"><Phone/><div><strong>Contacto</strong><p>Solicita información y coordinación de citas.</p></div></div>
            <a className="btn btn-dark" href={`https://www.google.com/maps/search/?api=1&query=${q}`} target="_blank" rel="noreferrer">Abrir mapa <ArrowUpRight size={17}/></a>
          </div>
          <div className="map-frame">
            <iframe title="Mapa de referencia de Lima, Perú" src={`https://www.google.com/maps?q=${q}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            <div className="map-label"><MapPin size={17}/><span><strong>Tu Plus Odontología</strong><small>Mapa referencial · Lima, Perú</small></span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
