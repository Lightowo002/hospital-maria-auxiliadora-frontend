import type { Metadata } from "next";
import { Cabecera } from "@/components/Cabecera";
import { PiePagina } from "@/components/PiePagina";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Hospital María Auxiliadora | Información para pacientes", template: "%s | Hospital María Auxiliadora" },
  description: "Conoce las especialidades, la orientación para pacientes y los canales de contacto del Hospital María Auxiliadora en San Juan de Miraflores, Lima. Propuesta demostrativa.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><Cabecera /><main id="contenido" tabIndex={-1}>{children}</main><PiePagina /></body></html>;
}
