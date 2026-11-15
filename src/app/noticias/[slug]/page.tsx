import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetallePublicacion } from "@/components/DetallePublicacion";
import { buscarPublicacion, obtenerPublicaciones } from "@/lib/publicaciones";

export const dynamicParams = false;
export function generateStaticParams() { return obtenerPublicaciones().map(({ slug }) => ({ slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const publicacion = buscarPublicacion((await params).slug);
  return { title: publicacion?.titulo ?? "Publicación no encontrada", description: publicacion?.resumen };
}
export default async function Noticia({ params }: Props) {
  const publicacion = buscarPublicacion((await params).slug);
  if (!publicacion) notFound();
  return <DetallePublicacion publicacion={publicacion} />;
}
