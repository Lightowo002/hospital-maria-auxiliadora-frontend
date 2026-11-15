import Link from "next/link";
import { hospital } from "@/data/hospital";
import { Icono } from "./Icono";

export function PiePagina() {
  return <footer className="pie"><div className="contenedor">
    <div className="footer-grid">
      <div><Link href="/" className="marca"><span className="marca-simbolo"><Icono nombre="cross" /></span><span><small>HOSPITAL</small><strong>María Auxiliadora</strong></span></Link><p>Información para acompañarte<br />antes de tu visita.</p><span className="demo-label">Propuesta académica · Sitio demostrativo</span></div>
      <div><h2>Explora</h2><Link href="/#hospital">El hospital</Link><Link href="/#especialidades">Especialidades y servicios</Link><Link href="/#pacientes">Pacientes y visitantes</Link><Link href="/noticias/">Noticias y anuncios</Link></div>
      <div><h2>Canales oficiales</h2><a href={hospital.portal}>Hospital en Gob.pe ↗</a><a href="https://www.hma.gob.pe">Portal institucional ↗</a><a href="https://www.gob.pe/institucion/hma/contacto-y-numeros-de-emergencias">Directorio de contacto ↗</a><Link href="/creditos/">Fuentes y créditos</Link></div>
      <div><h2>Encuéntranos</h2><p>{hospital.direccion}<br />{hospital.distrito}</p><a href={hospital.telefonoHref}>{hospital.telefono}</a><a href={`mailto:${hospital.correo}`}>{hospital.correo}</a></div>
    </div>
    <div className="footer-bottom"><span>Hospital María Auxiliadora · Propuesta web 2026</span><span>Datos consultados el 15 de noviembre de 2026.</span></div>
  </div></footer>;
}
