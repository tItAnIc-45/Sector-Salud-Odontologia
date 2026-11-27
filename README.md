# Tu Plus Odontología, Nivel 1 Profesional

Sitio de hasta 5 páginas de contenido, sin gestor de contenidos ni blog. Parte de tu plantilla profesional (azul marino y lima, DM Sans y Playfair Display) y la amplía de una página a cinco.

## Páginas

| Ruta | Página | Qué tiene |
|---|---|---|
| / | Inicio | Portada, valores, 3 tratamientos, bloque destacado, llamada a reservar |
| /nosotros | Nosotros | Enfoque, recorrido de la primera visita, equipo |
| /tratamientos | Tratamientos | Los 6 tratamientos con qué incluye cada uno |
| /cita | Reservar | Formulario que abre WhatsApp |
| /contacto | Contacto | Datos, mapa y preguntas frecuentes |

## Cómo ejecutarlo

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # carpeta dist, lista para subir a Vercel o Netlify
```

## Cómo cambiar el contenido

Los textos que cambian más se editan en `src/data/site.js`: ciudad, número de WhatsApp (con código de país, sin signos), mapa, fotos, tratamientos, pasos y preguntas frecuentes. No necesita base de datos.

## Carpetas

| Carpeta | Contenido |
|---|---|
| src/pages | Un archivo por página |
| src/sections | Bloques que se reutilizan entre páginas |
| src/components | Cabecera, pie, botón flotante, cabecera de página |
| src/styles | Estilos por sección |
| public/img/art | Ilustraciones de tratamientos y respaldo de fotos |

Si necesitas gestor de contenidos, blog o portal de pacientes, eso está en los niveles Empresarial y Corporativo.
