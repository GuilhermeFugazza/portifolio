// Depois do build, gera o HTML pronto de cada página (português e inglês) a partir do React.
// O navegador recebe a página já desenhada e o React só assume os controles.
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const DIST = "dist";
const { render } = await import(pathToFileURL(path.resolve(".ssr/entry-server.js")).href);
const { PAGINAS } = await import(pathToFileURL(path.resolve("src/rotas.js")).href);
const modelo = await readFile(path.join(DIST, "index.html"), "utf8");
// O texto de cada idioma é um pacote à parte: a página já pede o dela junto com o resto.
const manifesto = JSON.parse(await readFile(path.join(DIST, ".vite/manifest.json"), "utf8"));
const pacoteDoIdioma = (lang) => `<link rel="modulepreload" href="/${manifesto[`src/content/${lang}.jsx`].file}">`;

for (const { pagina, lang, arquivo } of PAGINAS) {
  const { html, head, htmlLang } = render(pagina, lang);
  const saida = modelo
    .replace('<html lang="pt-BR">', `<html lang="${htmlLang}">`)
    .replace("<!--head-->", `${head}\n    ${pacoteDoIdioma(lang)}`)
    .replace('<div id="root"></div>', `<div id="root" data-pagina="${pagina}" data-lang="${lang}">${html}</div>`);
  if (!saida.includes(`data-pagina="${pagina}"`) || saida.includes("<!--head-->")) throw new Error(`Modelo sem marcadores: ${arquivo}`);
  const destino = path.join(DIST, arquivo);
  await mkdir(path.dirname(destino), { recursive: true });
  await writeFile(destino, saida);
  console.log(`${arquivo}  ${(Buffer.byteLength(saida) / 1024).toFixed(1)} KB`);
}
await rm(".ssr", { recursive: true, force: true });
await rm(path.join(DIST, ".vite"), { recursive: true, force: true });
