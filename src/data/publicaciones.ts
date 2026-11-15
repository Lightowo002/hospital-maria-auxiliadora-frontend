import type { Publicacion } from "@/types/publicacion";

export const publicaciones: Publicacion[] = [
  {
    id: "ejemplo-001", slug: "una-mirada-al-hospital", tipo: "noticia",
    titulo: "Una mirada al Hospital María Auxiliadora",
    fechaPublicacion: "2026-11-15",
    resumen: "Un recorrido visual por nuestra sede en San Juan de Miraflores. Publicación de ejemplo para conocer este espacio informativo.",
    esEjemplo: true,
    imagen: { ruta: "/images/hospital.webp", alt: "Fachada del Hospital María Auxiliadora vista desde la avenida, detrás de su reja perimetral, en marzo de 2022." },
    contenido: [
      { tipo: "parrafo", texto: "Esta es una publicación demostrativa del sitio. La fotografía corresponde al Hospital María Auxiliadora y fue tomada en marzo de 2022; no representa una actividad ni una campaña actual." },
      { tipo: "subtitulo", texto: "Un hospital en el sur de Lima" },
      { tipo: "parrafo", texto: "La sede del hospital se encuentra en la avenida Miguel Iglesias 968, en el distrito de San Juan de Miraflores, Lima. Su historia institucional recoge la inauguración de la dependencia el 29 de diciembre de 1983, con atención en consultorios externos." },
      { tipo: "subtitulo", texto: "Información a tu alcance" },
      { tipo: "lista", elementos: ["Conoce las especialidades publicadas por la institución.", "Consulta los canales oficiales para recibir orientación.", "Revisa la dirección antes de planificar tu visita."] },
      { tipo: "parrafo", texto: "Este espacio muestra cómo se presentan publicaciones con párrafos, subtítulos, listas y enlaces. No anuncia cambios en la atención, nuevas prestaciones ni fechas de actividades." },
      { tipo: "enlace", texto: "Consultar la información oficial en Gob.pe", href: "https://www.gob.pe/hma" },
    ],
  },
  {
    id: "ejemplo-002", slug: "bienvenidos-al-espacio-de-anuncios", tipo: "anuncio",
    titulo: "Un espacio para mantenerte informado",
    fechaPublicacion: "2026-11-14",
    resumen: "Así se verán los avisos breves en el portal. Este ejemplo no comunica cambios en los servicios ni en los horarios de atención.",
    esEjemplo: true,
    contenido: [
      { tipo: "parrafo", texto: "Este anuncio es un ejemplo de presentación sin fotografía. Su propósito es mostrar un formato sencillo y legible para futuros comunicados." },
      { tipo: "parrafo", texto: "Para conocer noticias y anuncios reales del Hospital María Auxiliadora, consulta su portal oficial. Este contenido de demostración no constituye un comunicado institucional." },
      { tipo: "enlace", texto: "Visitar el portal oficial del hospital", href: "https://www.gob.pe/hma" },
    ],
  },
];
