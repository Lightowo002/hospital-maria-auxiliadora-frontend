import Image from "next/image";
import Link from "next/link";
import type { Publicacion } from "@/types/publicacion";
import { formatearFecha } from "@/lib/publicaciones";
import { Icono } from "./Icono";

export function TarjetaPublicacion({ publicacion }: { publicacion: Publicacion }) {
  return <article className={`publicacion ${publicacion.imagen ? "con-imagen" : "sin-imagen"}`}>
    {publicacion.imagen && <Link tabIndex={-1} aria-hidden="true" href={`/noticias/${publicacion.slug}/`} className="publicacion-imagen"><Image src={publicacion.imagen.ruta} alt="" width={1000} height={650} /></Link>}
    <div className="publicacion-body">
      <div className="meta"><span className="etiqueta">{publicacion.tipo}</span>{publicacion.esEjemplo && <span className="ejemplo">Ejemplo</span>}<time dateTime={publicacion.fechaPublicacion}>{formatearFecha(publicacion.fechaPublicacion)}</time></div>
      <h3><Link href={`/noticias/${publicacion.slug}/`}>{publicacion.titulo}</Link></h3>
      <p>{publicacion.resumen}</p>
      <Link className="text-link" href={`/noticias/${publicacion.slug}/`}>Leer publicación <Icono nombre="arrow" /><span className="sr-only">: {publicacion.titulo}</span></Link>
    </div>
  </article>;
}
