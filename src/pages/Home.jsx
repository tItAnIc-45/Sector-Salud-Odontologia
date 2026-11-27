import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/sections/Hero.jsx";
import About from "@/sections/About.jsx";
import Services from "@/sections/Services.jsx";
import Feature from "@/sections/Feature.jsx";
import CtaBand from "@/components/CtaBand.jsx";

export default function Home() {
  useEffect(() => { document.title = "Tu Plus Odontología | Una sonrisa sana cambia todo"; }, []);
  return (
    <>
      <Hero />
      <About />
      <Services limit={3} />
      <div className="container more-link"><Link className="under-link" to="/tratamientos">Ver todos los tratamientos <ArrowUpRight size={17} /></Link></div>
      <Feature />
      <CtaBand />
    </>
  );
}
