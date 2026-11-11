// Junta os ícones de src/assets/icones (Simple Icons, CC0) e os de traço num sprite SVG só.
// Uso: npm run icones (só quando um ícone mudar). A página referencia cada um com <use>.
import { readdir, readFile, writeFile } from "node:fs/promises";

const PASTA = "src/assets/icones";
const TRACOS = {
  codigo: '<path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/>',
  pacote: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>',
  banco: '<ellipse cx="12" cy="6" rx="7" ry="2.6"/><path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6"/><path d="M9 13l2 2 4-4"/>',
  cadeado: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  escudo: '<path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z"/>',
  tomada: '<path d="M9 3v5M15 3v5"/><path d="M6 8h12v3a6 6 0 0 1-12 0V8z"/><path d="M12 17v4"/>',
};

const simbolos = [];
for (const arquivo of (await readdir(PASTA)).filter((f) => f.endsWith(".svg")).sort()) {
  const d = (await readFile(`${PASTA}/${arquivo}`, "utf8")).match(/<path d="([^"]+)"/)[1];
  simbolos.push(`<symbol id="${arquivo.slice(0, -4)}" viewBox="0 0 24 24"><path d="${d}"/></symbol>`);
}
for (const [nome, corpo] of Object.entries(TRACOS)) simbolos.push(`<symbol id="${nome}" viewBox="0 0 24 24">${corpo}</symbol>`);

await writeFile("src/assets/icones.svg", `<svg xmlns="http://www.w3.org/2000/svg">\n${simbolos.join("\n")}\n</svg>\n`);
console.log(`${simbolos.length} ícones em src/assets/icones.svg`);
