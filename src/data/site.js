// Datos del sitio. Edita este archivo para cambiar textos, teléfono y fotos sin tocar el diseño.
export const site = {
  name: "Tu Plus Odontología",
  city: "Lima, Perú",
  // Número de WhatsApp con código de país y sin signos. Ejemplo: 51999999999. Si queda vacío, el formulario funciona en modo demostración.
  whatsapp: "",
  mapQuery: "clinica odontologica Lima Peru"
};

// Fotos. Si una foto no carga se muestra la ilustración local de respaldo (public/img/art).
export const photos = {
  hero: { src: "https://plus.unsplash.com/premium_photo-1682097288491-7e926a30cd0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", fb: "/img/art/sparkles.svg" },
  clinic: { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85", fb: "/img/art/shieldcheck.svg" },
  patient: { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=85", fb: "/img/art/smile.svg" },
  team: { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85", fb: "/img/art/badgecheck.svg" }
};

export const services = [
  { icon: "Sparkles", title: "Estética dental", items: ["Evaluación de tu sonrisa", "Blanqueamiento y carillas según el caso", "Plan explicado antes de empezar"], text: "Tratamientos pensados para realzar tu sonrisa con naturalidad." },
  { icon: "ShieldCheck", title: "Odontología general", items: ["Revisión y limpieza", "Tratamiento de caries", "Controles periódicos"], text: "Prevención, diagnóstico y cuidado para mantener tu salud bucal." },
  { icon: "Smile", title: "Ortodoncia", items: ["Evaluación de la mordida", "Opciones de aparatos fijos o removibles", "Seguimiento de cada ajuste"], text: "Opciones para mejorar la alineación y función de tu sonrisa." },
  { icon: "Gem", title: "Rehabilitación oral", items: ["Reposición de piezas", "Coronas y puentes", "Recuperar masticación y comodidad"], text: "Recupera comodidad, función y confianza al sonreír." },
  { icon: "HeartPulse", title: "Endodoncia", items: ["Diagnóstico del dolor", "Tratamiento de conductos", "Conservar la pieza dental"], text: "Atención especializada para conservar tus piezas dentales." },
  { icon: "Stethoscope", title: "Odontopediatría", items: ["Primera visita sin miedo", "Prevención en niños", "Orientación para los padres"], text: "Cuidado amable y cercano para las sonrisas más pequeñas." }
];

export const steps = [
  { title: "Reserva", text: "Elige tu tratamiento y un día. Nos comunicamos contigo para confirmar el horario." },
  { title: "Evaluación", text: "Revisamos tu caso y te explicamos con claridad qué necesitas." },
  { title: "Plan de tratamiento", text: "Conoces los pasos, los tiempos y los costos antes de empezar." },
  { title: "Seguimiento", text: "Te acompañamos con controles hasta terminar tu tratamiento." }
];

export const faqs = [
  { q: "¿Necesito cita previa?", a: "Sí. Atendemos con cita para dedicarte el tiempo que tu caso necesita." },
  { q: "¿Qué pasa en la primera consulta?", a: "Conversamos, revisamos tu boca y te explicamos las opciones. No empezamos nada sin que lo entiendas." },
  { q: "¿Atienden niños?", a: "Sí, tenemos odontopediatría con un trato amable para los más pequeños." },
  { q: "¿Cómo confirmo mi cita?", a: "Envías el formulario y te escribimos por WhatsApp o teléfono para acordar el horario." }
];
