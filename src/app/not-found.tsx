import Link from "next/link";
export default function NotFound() {
  return <div className="contenedor not-found"><p className="eyebrow">ERROR 404</p><h1>Esta página<br />no está disponible.</h1><p>Revisa la dirección o vuelve al inicio para encontrar la información que necesitas.</p><Link className="boton" href="/">Volver al inicio →</Link></div>;
}
