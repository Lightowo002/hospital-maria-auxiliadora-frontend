export type NombreIcono = "arrow" | "external" | "phone" | "pin" | "calendar" | "heart" | "pulse" | "flower" | "smile" | "ribbon" | "cross" | "menu" | "close" | "chevron";
const trazos: Record<NombreIcono, React.ReactNode> = {
  arrow: <><path d="M4 12h15m-6-6 6 6-6 6" /></>,
  external: <><path d="M7 17 17 7M7 7h10v10" /></>,
  phone: <path d="m8 3 2 5-3 2a16 16 0 0 0 7 7l2-3 5 2v4c-9 2-19-8-18-17Z" />,
  pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  calendar: <><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M8 3v5m8-5v5M4 11h16m-11 5h6" /></>,
  heart: <><path d="M20 5c-3-3-7-1-8 1-1-2-5-4-8-1-5 5 3 12 8 15 5-3 13-10 8-15Z" /><path d="M4 12h4l2-3 3 6 2-3h5" /></>,
  pulse: <><path d="M2 12h5l3-8 4 16 3-8h5" /></>,
  flower: <><circle cx="12" cy="12" r="3" /><path d="M9 9C2 4 9-2 12 5c3-7 10-1 3 4 8-1 8 8 0 6 5 7-3 10-3 3-3 7-10 1-3-3-8 1-8-8 0-6Z" /></>,
  smile: <><circle cx="12" cy="12" r="9" /><path d="M8 14q4 5 8 0M8 9h.01M16 9h.01" /></>,
  ribbon: <><path d="M8 7c0-6 8-6 8 0 0 4-8 14-8 14l-3-4S16 7 16 5M8 5s2 7 11 12l-3 4S8 11 8 7Z" /></>,
  cross: <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6Z" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  chevron: <path d="m6 9 6 6 6-6" />,
};
export function Icono({ nombre, className = "" }: { nombre: NombreIcono; className?: string }) {
  return <svg className={`icono ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{trazos[nombre]}</svg>;
}
