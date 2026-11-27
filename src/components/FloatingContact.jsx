import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site.js";

export default function FloatingContact() {
  return site.whatsapp
    ? <a className="floating-contact wa-float" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp"><MessageCircle size={22} /></a>
    : <Link className="floating-contact" to="/cita" aria-label="Solicitar una cita"><Phone size={20} /></Link>;
}
