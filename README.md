# Hospital María Auxiliadora

Propuesta institucional demostrativa, únicamente visual e informativa. React, Next.js 16 (App Router), TypeScript y Tailwind CSS 4. Código en `src/`; contenido local; exportación estática.

## Ejecutar en tu computadora

Necesitas Node.js 22 o superior y npm. Abre una terminal dentro de esta carpeta:

```sh
npm ci
npm run dev
```

Abre http://127.0.0.1:3000. Los cambios en `src/` se actualizan durante el desarrollo. Detén el proceso con Ctrl+C.

## Generar la versión estática

```sh
npm run build
npm run check:export
npm run preview
```

La compilación genera `out/`, con HTML, JavaScript, CSS e imágenes. `preview` sirve esa carpeta localmente en http://127.0.0.1:3000; no ejecutes `dev` y `preview` simultáneamente en ese puerto. Para cambiar el puerto de la vista previa en PowerShell: `$env:PORT=3001` antes de ejecutar `npm run preview`.

`npm run typecheck` comprueba TypeScript. `check:export` verifica páginas, enlaces y recursos locales, la página 404 y los dos ejemplos con/sin imagen. Si añades más publicaciones, actualiza la cantidad esperada en ese script.

## Dónde editar

| Archivo o carpeta | Contenido |
| --- | --- |
| `src/app/page.tsx` | Secciones de la página de inicio |
| `src/app/globals.css` | Paleta, tipografía, estilos y adaptación a pantallas |
| `src/data/hospital.ts` | Contacto, enlaces y especialidades verificadas |
| `src/data/publicaciones.ts` | Noticias y anuncios locales |
| `src/types/publicacion.ts` | Tipos compartidos de publicación y bloques |
| `src/lib/publicaciones.ts` | Listado ordenado, búsqueda por slug y fechas |
| `src/components/` | Cabecera, pie, tarjetas y plantilla de detalle |
| `public/images/` | Fotografía local y original para trazabilidad |
| `FUENTES.md` | Fuentes, licencia de la fotografía y decisiones editoriales |

## Añadir una publicación

Edita `src/data/publicaciones.ts` y añade un objeto al arreglo. Usa un `id` y un `slug` únicos. El slug debe contener letras minúsculas sin tildes, números y guiones. Ejemplo de estructura:

```ts
{
  id: "ejemplo-003",
  slug: "otro-ejemplo",
  tipo: "anuncio", // "noticia" o "anuncio"
  titulo: "Otro ejemplo de publicación",
  fechaPublicacion: "2026-11-16", // AAAA-MM-DD
  resumen: "Resumen del contenido de demostración.",
  esEjemplo: true,
  contenido: [
    { tipo: "parrafo", texto: "Este contenido es un ejemplo." },
    { tipo: "subtitulo", texto: "Más información" },
    { tipo: "lista", elementos: ["Primer punto", "Segundo punto"] },
    { tipo: "enlace", texto: "Portal oficial", href: "https://www.gob.pe/hma" },
  ],
  // imagen: { ruta: "/images/archivo.webp", alt: "Descripción de la imagen" },
}
```

La imagen es opcional y solo se admite una por publicación. Si la omites, la tarjeta y el detalle se ajustan sin rellenos. Añade únicamente imágenes con permiso de reutilización y registra créditos; si incorporas otra fotografía, adapta `CreditoFoto.tsx`, que actualmente atribuye la única fotografía utilizada. El contenido se renderiza como texto y bloques React, sin HTML sin sanear.

Las publicaciones se ordenan de más reciente a más antigua. `generateStaticParams` genera las rutas `/noticias/[slug]/` durante `npm run build`. La tarjeta y el detalle reciben sus datos por propiedades y comparten la misma plantilla.

Durante esta etapa, cualquier cambio de contenido requiere editar el archivo local, **reconstruir y volver a desplegar `out/`**. No hay panel, carga de archivos, autenticación, API, base de datos, reserva de citas ni formularios de envío. Una integración futura podrá sustituir las funciones de lectura; la publicación automática desde un panel podría requerir recompilaciones automáticas o un cambio de renderizado/despliegue.

## Despliegue futuro

Por tu indicación, **no se incluyen archivos ni configuración de Docker, Nginx o Dokploy**. Puedes prepararlos más adelante sin cambiar el frontend. La salida que debes servir es `out/`, no `src/` ni `.next/`.

El servidor elegido debe resolver `/noticias/slug/` como `/noticias/slug/index.html`, redirigir las rutas sin barra final a su equivalente con barra cuando corresponda y devolver `404.html` con estado HTTP **404** para rutas inexistentes. No uses una redirección universal hacia el inicio que convierta errores en respuestas 200. No es necesario ejecutar un servidor Next.js en producción.

La exportación utiliza `output: "export"`, `trailingSlash: true` e imágenes sin optimizador de servidor. No tiene dominio definitivo configurado. El sitio demostrativo lleva `robots: noindex, nofollow`; cambia esa decisión solo cuando exista una publicación definitiva autorizada.

## Contenido y accesibilidad

Datos institucionales documentados en `FUENTES.md`. Las dos publicaciones están identificadas como ejemplos. Se omiten profesionales, testimonios y horarios de visita no confirmados. La central telefónica y la central de citas se distinguen explícitamente.

Se incluyen navegación por teclado, enlace para saltar al contenido, estados de foco, menú móvil con cierre mediante Escape, desplegables nativos, textos alternativos y respeto a movimiento reducido. La fotografía es de 2022; no se presenta como registro actual.

No se realizó ningún despliegue remoto ni cambio de infraestructura.
