import React from "react";
import PageHero from "@/components/PageHero.jsx";
import Contact from "@/sections/Contact.jsx";
import Faq from "@/sections/Faq.jsx";

export default function Contacto() {
  return (
    <>
      <PageHero eyebrow="CONTACTO" title="Contáctanos." text="Escríbenos o visítanos para coordinar tu evaluación." />
      <Contact />
      <Faq />
    </>
  );
}
