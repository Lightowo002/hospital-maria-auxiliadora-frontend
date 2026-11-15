export const hospital = {
  direccion: "Av. Miguel Iglesias 968",
  distrito: "San Juan de Miraflores, Lima, Perú",
  telefono: "(01) 217 1818",
  telefonoHref: "tel:+5112171818",
  citas: "(01) 217 1900",
  citasHref: "tel:+5112171900",
  correo: "mesadepartes@hma.gob.pe",
  portal: "https://www.gob.pe/hma",
  mapa: "https://www.google.com/maps/search/?api=1&query=Hospital+Maria+Auxiliadora+Av+Miguel+Iglesias+968+San+Juan+de+Miraflores+Lima",
  fuenteCitas: "https://www.hma.gob.pe/pdf/GobDigital/centradecitas.pdf",
  fuenteEspecialidades: "https://www.hma.gob.pe/paginas/especialidades/tabla.html",
  fuenteHistoria: "https://www.hma.gob.pe/v2/pdf/historia/historia.pdf",
};

export const especialidades = [
  { titulo: "Medicina", icono: "heart" as const, resumen: "Atención en especialidades médicas.", servicios: ["Medicina interna", "Cardiología", "Endocrinología", "Gastroenterología", "Neurología", "Neumología"] },
  { titulo: "Cirugía", icono: "pulse" as const, resumen: "Especialidades quirúrgicas.", servicios: ["Cirugía general", "Cirugía pediátrica", "Neurocirugía", "Oftalmología", "Traumatología y ortopedia", "Urología"] },
  { titulo: "Gineco-obstetricia", icono: "flower" as const, resumen: "Salud de la mujer y atención obstétrica.", servicios: ["Ginecología", "Obstetricia", "Centro obstétrico"] },
  { titulo: "Pediatría", icono: "smile" as const, resumen: "Atención pediátrica y neonatal.", servicios: ["Pediatría", "Neonatología"] },
  { titulo: "Oncología", icono: "ribbon" as const, resumen: "Especialidades de atención oncológica.", servicios: ["Oncología médica", "Oncología quirúrgica", "Oncología ginecológica", "Radioterapia"] },
  { titulo: "Apoyo al diagnóstico", icono: "cross" as const, resumen: "Servicios complementarios de salud.", servicios: ["Laboratorio clínico", "Radiología", "Ecografía", "Banco de sangre"] },
];
