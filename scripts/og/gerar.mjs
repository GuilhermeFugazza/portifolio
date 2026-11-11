// Gera public/og/pt.png e public/og/en.png (1200 x 630), a imagem que aparece ao compartilhar o link.
// Uso: node scripts/og/gerar.mjs (precisa do Chrome instalado e do playwright-core das ferramentas do estúdio).
import { createRequire } from "node:module";
import path from "node:path";
import { pathToFileURL } from "node:url";
const require = createRequire("/Users/index/Documents/Guilherme/Profissional/agente/ferramentas/package.json");
const { chromium } = require("playwright-core");

const cartao = pathToFileURL(path.resolve("scripts/og/cartao.html")).href;
const b = await chromium.launch({ channel: "chrome", headless: true });
const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const lang of ["pt", "en"]) {
  await p.goto(`${cartao}?lang=${lang}`);
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(300);
  await p.screenshot({ path: `public/og/${lang}.png` });
  console.log(`public/og/${lang}.png`);
}
await b.close();
