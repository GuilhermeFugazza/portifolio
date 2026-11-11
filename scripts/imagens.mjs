// Gera as versões AVIF, WebP e JPEG das telas, nas larguras que o site usa.
// Uso: npm run imagens (só quando uma tela em src/assets/originais mudar).
// As saídas vão para src/assets/img e entram no repositório; o build não depende do sharp.
import sharp from "sharp";
import { readdir, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const ORIGEM = "src/assets/originais";
const DESTINO = "src/assets/img";

// Larguras por tipo de tela. Celular: 647 px no original; navegador: 1800 px.
const LARGURAS = {
  celular: [320, 480, 647],
  navegador: [640, 960, 1280, 1800],
};

const tipo = (nome) => (nome.startsWith("comandafy-") && !nome.includes("celular") ? "navegador" : "celular");

await rm(DESTINO, { recursive: true, force: true });
await mkdir(DESTINO, { recursive: true });

for (const arquivo of (await readdir(ORIGEM)).filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  const nome = arquivo.replace(/\.(jpe?g|png)$/i, "");
  const entrada = sharp(path.join(ORIGEM, arquivo));
  const { width } = await entrada.metadata();
  const larguras = LARGURAS[tipo(nome)].filter((w) => w < width).concat(width);
  const unicas = [...new Set(larguras)];

  for (const w of unicas) {
    const base = sharp(path.join(ORIGEM, arquivo)).resize({ width: w, withoutEnlargement: true });
    await base.clone().avif({ quality: 55, effort: 6 }).toFile(path.join(DESTINO, `${nome}-${w}.avif`));
    await base.clone().webp({ quality: 80 }).toFile(path.join(DESTINO, `${nome}-${w}.webp`));
  }
  // Uma JPEG só, na largura do meio, para navegador sem AVIF nem WebP.
  const meio = unicas[Math.floor((unicas.length - 1) / 2)];
  await sharp(path.join(ORIGEM, arquivo))
    .resize({ width: meio })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(DESTINO, `${nome}-${meio}.jpg`));
  console.log(`${nome}: ${unicas.join(", ")} (jpeg ${meio})`);
}
