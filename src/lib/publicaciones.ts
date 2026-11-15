import { publicaciones } from "@/data/publicaciones";

export function obtenerPublicaciones() {
  return [...publicaciones].sort((a, b) => b.fechaPublicacion.localeCompare(a.fechaPublicacion));
}

export function buscarPublicacion(slug: string) {
  return publicaciones.find((publicacion) => publicacion.slug === slug);
}

export function formatearFecha(fecha: string) {
  return new Intl.DateTimeFormat("es-PE", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${fecha}T12:00:00Z`));
}
