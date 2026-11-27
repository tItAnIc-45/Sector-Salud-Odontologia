import React from "react";

// Imagen con respaldo: si la foto remota falla, se usa la ilustración local.
export default function Photo({ photo, alt, ...rest }) {
  return <img src={photo.src} alt={alt} onError={(e) => { if (!e.currentTarget.dataset.fb) { e.currentTarget.dataset.fb = "1"; e.currentTarget.src = photo.fb; } }} {...rest} />;
}
