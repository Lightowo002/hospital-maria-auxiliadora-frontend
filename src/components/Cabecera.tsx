"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icono } from "./Icono";
import { hospital } from "@/data/hospital";

const enlaces = [
  ["Inicio", "/"], ["El hospital", "/#hospital"], ["Especialidades", "/#especialidades"],
  ["Pacientes", "/#pacientes"], ["Noticias", "/noticias/"]
];

export function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const boton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    function cerrar(event: KeyboardEvent) {
      if (event.key === "Escape" && abierto) { setAbierto(false); boton.current?.focus(); }
    }
    window.addEventListener("keydown", cerrar);
    return () => window.removeEventListener("keydown", cerrar);
  }, [abierto]);
  return <>
    <a href="#contenido" className="skip-link">Saltar al contenido</a>
    <div className="topbar"><div className="contenedor flex items-center justify-between gap-4"><span>San Juan de Miraflores · Lima, Perú</span><a href={hospital.telefonoHref}><Icono nombre="phone" /> Central telefónica <strong>{hospital.telefono}</strong></a></div></div>
    <header className="cabecera">
      <div className="contenedor nav-wrap">
        <Link href="/" className="marca" aria-label="Hospital María Auxiliadora, inicio" onClick={() => setAbierto(false)}><span className="marca-simbolo" aria-hidden="true"><Icono nombre="cross" /></span><span><small>HOSPITAL</small><strong>María Auxiliadora</strong></span></Link>
        <button ref={boton} className="menu-toggle" type="button" aria-expanded={abierto} aria-controls="navegacion" onClick={() => setAbierto(!abierto)}><Icono nombre={abierto ? "close" : "menu"} /><span>{abierto ? "Cerrar" : "Menú"}</span></button>
        <nav id="navegacion" aria-label="Navegación principal" className={abierto ? "nav abierto" : "nav"}>
          {enlaces.map(([texto, href]) => <Link key={href} href={href} onClick={() => setAbierto(false)} aria-current={(href === "/" && pathname === "/") || (href === "/noticias/" && pathname.startsWith("/noticias")) ? "page" : undefined}>{texto}</Link>)}
          <Link href="/#contacto" className="nav-contacto" onClick={() => setAbierto(false)}>Contacto <Icono nombre="external" /></Link>
        </nav>
        {/*
         * logo Inicio de sesion
         */}
        <Link href={"/login"} className="nav-cantacto">
          Iniciar Sesión
        </Link>
      </div>
    </header>
  </>;
}
