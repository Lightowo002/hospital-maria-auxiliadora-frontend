import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve("out");
const files = await readdir(root, { recursive: true });
const htmlFiles = files.filter(file => file.endsWith(".html"));
assert(htmlFiles.length >= 6, "Faltan rutas exportadas");
await access(resolve(root, "404.html"));
const details = htmlFiles.filter(file => /noticias[/\\].+[/\\]index\.html$/.test(file));
assert.equal(details.length, 2, "Deben exportarse las dos publicaciones");
for (const file of htmlFiles) {
  const html = await readFile(resolve(root, file), "utf8");
  assert(html.includes('lang="es"'), `Idioma incorrecto: ${file}`);
  assert(/<title>.+?<\/title>/.test(html), `Falta título: ${file}`);
  assert(!/<form[\s>]/.test(html), `Formulario fuera de alcance: ${file}`);
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"?#]*)/g)) {
    if (!url || url.startsWith("//")) continue;
    const local = resolve(root, `.${url.endsWith("/") ? url + "index.html" : url}`);
    await access(local).catch(() => { throw new Error(`Recurso o enlace local roto en ${file}: ${url}`); });
  }
}
const rendered = await Promise.all(details.map(file => readFile(resolve(root, file), "utf8")));
assert(rendered.every(html => html.includes("Publicación de ejemplo.")), "Falta identificación de ejemplos");
assert.equal(rendered.filter(html => html.includes('class="article-photo"')).length, 1, "Una publicación debe tener imagen y la otra no");
console.log(`Verificación correcta: ${htmlFiles.length} páginas HTML, 2 detalles, recursos y enlaces locales válidos.`);
