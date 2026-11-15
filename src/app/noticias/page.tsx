import type { Metadata } from "next";
import Link from "next/link";
import { TarjetaPublicacion } from "@/components/TarjetaPublicacion";
import { obtenerPublicaciones } from "@/lib/publicaciones";

export const metadata: Metadata = { title: "Noticias y anuncios", description: "Explora las publicaciones demostrativas del portal: noticias con fotografía y anuncios informativos." };
export default function Noticias() {
  return <div className="contenedor listing"><nav className="breadcrumb" aria-label="Ruta de navegación"><Link href="/">Inicio</Link><span>/</span><span>Noticias y anuncios</span></nav><p className="eyebrow">INFORMACIÓN A TU ALCANCE</p><h1>Noticias y anuncios</h1><p className="entradilla">Un espacio para estar más cerca.</p><p className="aviso-ejemplo">Estas dos publicaciones son ejemplos demostrativos. Para noticias reales, visita <a href="https://www.gob.pe/hma">el portal oficial del hospital ↗</a>.</p><div className="news-grid">{obtenerPublicaciones().map(publicacion => <TarjetaPublicacion key={publicacion.id} publicacion={publicacion} />)}</div></div>;
}
