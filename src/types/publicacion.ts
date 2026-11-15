export type BloqueContenido =
  | { tipo: "parrafo"; texto: string }
  | { tipo: "subtitulo"; texto: string }
  | { tipo: "lista"; elementos: string[] }
  | { tipo: "enlace"; texto: string; href: string };

export interface Publicacion {
  id: string;
  slug: string;
  tipo: "noticia" | "anuncio";
  titulo: string;
  fechaPublicacion: string;
  resumen: string;
  contenido: BloqueContenido[];
  imagen?: { ruta: string; alt: string };
  esEjemplo: boolean;
}
