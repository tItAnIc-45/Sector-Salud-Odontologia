import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { services, site } from "@/data/site.js";

// Formulario de solicitud. Con WhatsApp configurado en data/site.js abre el chat con los datos escritos.
// Sin WhatsApp funciona en modo demostración y solo muestra el mensaje de gracias.
export default function Booking() {
  const [sent, setSent] = useState(false);
  const [params] = useSearchParams();
  const [form, setForm] = useState({ name: "", phone: "", service: params.get("servicio") || "Evaluación general", date: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (site.whatsapp) {
      const text = `Hola, soy ${form.name}. Quisiera una cita en ${site.name}.\nTratamiento: ${form.service}.${form.date ? `\nFecha preferida: ${form.date}.` : ""}\nMi teléfono: ${form.phone}.`;
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    }
    setSent(true);
  };

  return (
    <section className="appointment section" id="cita">
      <div className="container appointment-grid">
        <div className="appointment-copy">
          <div className="eyebrow light"><span></span> DA EL PRIMER PASO</div>
          <h2>Tu próxima sonrisa comienza aquí.</h2>
          <p>Déjanos tus datos y coordinaremos contigo para ayudarte a encontrar el momento ideal para tu evaluación.</p>
          <div className="appointment-detail"><CalendarDays /><span><strong>Atención con cita previa</strong><small>Coordinaremos contigo la disponibilidad.</small></span></div>
        </div>
        <form className="appointment-form" onSubmit={submit}>
          {sent ? (
            <div className="success-state">
              <CheckCircle2 size={42} />
              <h3>Gracias, {form.name}.</h3>
              <p>{site.whatsapp ? "Abrimos WhatsApp con tu solicitud. Envía el mensaje y te confirmamos la cita." : "Tu solicitud quedó registrada en esta demostración. Para recibir citas reales, escribe el número de WhatsApp en src/data/site.js."}</p>
              <button type="button" className="btn btn-dark" onClick={() => setSent(false)}>Enviar otra solicitud</button>
            </div>
          ) : (
            <>
              <h3>Solicita una cita</h3>
              <p>Completa tus datos y nos pondremos en contacto.</p>
              <label>Nombre completo<input required value={form.name} onChange={set("name")} placeholder="Tu nombre" /></label>
              <label>Teléfono<input required value={form.phone} onChange={set("phone")} placeholder="Tu número de contacto" inputMode="tel" /></label>
              <label>Tratamiento de interés<select value={form.service} onChange={set("service")}><option>Evaluación general</option>{services.map((s) => <option key={s.title}>{s.title}</option>)}</select></label>
              <label>Fecha preferida<input type="date" value={form.date} onChange={set("date")} /></label>
              <button className="btn btn-lime form-submit" type="submit">{site.whatsapp ? "Enviar por WhatsApp" : "Enviar solicitud"} <ArrowUpRight size={18} /></button>
              <small className="form-legal">Al enviar, autorizas que nos comuniquemos contigo para coordinar tu consulta.</small>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
