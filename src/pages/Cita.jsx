import React from "react";
import PageHero from "@/components/PageHero.jsx";
import Booking from "@/sections/Booking.jsx";

export default function Cita() {
  return (
    <>
      <PageHero eyebrow="RESERVAR" title="Pide tu cita." text="Llena el formulario y te confirmamos el horario." />
      <Booking />
    </>
  );
}
