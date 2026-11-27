import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "Inicio", end: true },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/tratamientos", label: "Tratamientos" },
  { to: "/contacto", label: "Contacto" }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setMenuOpen(false), [pathname]);
  return (
    <header className="header">
      <div className="container nav-wrap">
        <Link className="brand" to="/" aria-label="Tu Plus Odontología, inicio">
          <span className="brand-mark">✦</span>
          <span><strong>tu<span>plus</span></strong><small>O D O N T O L O G Í A</small></span>
        </Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {LINKS.map((l) => <NavLink key={l.to} to={l.to} end={l.end}>{l.label}</NavLink>)}
          <Link className="nav-cta" to="/cita">Reservar cita <ArrowUpRight size={17} /></Link>
        </nav>
      </div>
    </header>
  );
}
