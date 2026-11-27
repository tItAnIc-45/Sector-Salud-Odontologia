import React from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site.js";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <span><MapPin size={14} /> {site.city}</span>
        <span><Clock size={14} /> Atención con cita previa</span>
        <Link to="/contacto"><Phone size={14} /> Contáctanos</Link>
      </div>
    </div>
  );
}
