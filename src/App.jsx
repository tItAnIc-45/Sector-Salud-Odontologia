import React from "react";
import { Route, Routes } from "react-router-dom";
import Topbar from "@/components/Topbar.jsx";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import FloatingContact from "@/components/FloatingContact.jsx";
import ScrollToTop from "@/components/ScrollToTop.jsx";
import Home from "@/pages/Home.jsx";
import Nosotros from "@/pages/Nosotros.jsx";
import Tratamientos from "@/pages/Tratamientos.jsx";
import Cita from "@/pages/Cita.jsx";
import Contacto from "@/pages/Contacto.jsx";

// Nivel 1: cinco páginas (Inicio, Nosotros, Tratamientos, Reservar y Contacto).
export default function App() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Topbar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/tratamientos" element={<Tratamientos />} />
          <Route path="/cita" element={<Cita />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
