import React from "react";
import PageHero from "@/components/PageHero.jsx";
import CtaBand from "@/components/CtaBand.jsx";
import About from "@/sections/About.jsx";
import Process from "@/sections/Process.jsx";
import Team from "@/sections/Team.jsx";

export default function Nosotros() {
  return (
    <>
      <PageHero eyebrow="CONÓCENOS" title="Cuidado cercano, explicado con claridad." text="Así trabajamos desde la primera consulta hasta el último control." />
      <About />
      <Process />
      <Team />
      <CtaBand />
    </>
  );
}
