import Image from "next/image";
import Link from "next/link";
import type { Publicacion } from "@/types/publicacion";
import { formatearFecha } from "@/lib/publicaciones";
import { CreditoFoto } from "./CreditoFoto";

export function DetallePublicacion({ publicacion }: { publicacion: Publicacion }) {
  return <article className="contenedor articulo">
    <nav aria-label="Ruta de navegación" className="breadcrumb"><Link href="/">Inicio</Link><span>/</span><Link href="/noticias/">Noticias y anuncios</Link></nav>
    <header className="article-header"><div className="meta"><span className="etiqueta">{publicacion.tipo}</span><time dateTime={publicacion.fechaPublicacion}>{formatearFecha(publicacion.fechaPublicacion)}</time></div><h1>{publicacion.titulo}</h1><p className="entradilla">{publicacion.resumen}</p></header>
    {publicacion.esEjemplo && <p className="aviso-ejemplo"><strong>Publicación de ejemplo.</strong> Contenido demostrativo; no es un comunicado oficial del hospital. La fecha corresponde al ejemplo.</p>}
    {publicacion.imagen && <figure className="article-photo"><Image src={publicacion.imagen.ruta} alt={publicacion.imagen.alt} width={1600} height={1040} priority /><figcaption><CreditoFoto /></figcaption></figure>}
    <div className="prosa">{publicacion.contenido.map((bloque, i) => {
      switch (bloque.tipo) {
        case "parrafo": return <p key={i}>{bloque.texto}</p>;
        case "subtitulo": return <h2 key={i}>{bloque.texto}</h2>;
        case "lista": return <ul key={i}>{bloque.elementos.map(elemento => <li key={elemento}>{elemento}</li>)}</ul>;
        case "enlace": return <p key={i}><a href={bloque.href}>{bloque.texto} ↗</a></p>;
      }
    })}</div>
    <Link className="boton boton-outline" href="/noticias/">← Volver a noticias y anuncios</Link>
  </article>;
}
