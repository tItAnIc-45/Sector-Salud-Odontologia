import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <Link className="brand brand-footer" to="/"><span className="brand-mark">✦</span><span><strong>tu<span>plus</span></strong><small>O D O N T O L O G Í A</small></span></Link>
        <p>Una sonrisa sana cambia todo.</p>
        <div className="socials"><Link to="/contacto" aria-label="Instagram"><Instagram/></Link><Link to="/contacto" aria-label="Facebook"><Facebook/></Link></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Tu Plus Odontología. Diseño de demostración.</span><Link to="/">Volver arriba ↑</Link></div>
    </footer>
  );
}
