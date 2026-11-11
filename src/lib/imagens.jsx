// Telas em AVIF e WebP com srcset, geradas por scripts/imagens.mjs.
const arquivos = import.meta.glob("../assets/img/*.{avif,webp,jpg}", {
  eager: true,
  query: "?url",
  import: "default",
});

const DIMENSOES = {
  celular: [647, 1400],
  "comandafy-comanda-celular": [554, 1200],
  navegador: [1800, 1125],
};

const telas = {};
for (const [caminho, url] of Object.entries(arquivos)) {
  const [, nome, largura, formato] = caminho.match(/\/([a-z0-9-]+?)-(\d+)\.(avif|webp|jpg)$/);
  const t = (telas[nome] ??= { avif: [], webp: [], jpg: null });
  if (formato === "jpg") t.jpg = url;
  else t[formato].push([Number(largura), url]);
}

function dimensoes(nome) {
  if (DIMENSOES[nome]) return DIMENSOES[nome];
  if (nome.startsWith("comandafy-")) return DIMENSOES.navegador;
  return DIMENSOES.celular;
}

const srcset = (lista) =>
  [...lista].sort((a, b) => a[0] - b[0]).map(([w, url]) => `${url} ${w}w`).join(", ");

export function Tela({ nome, alt = "", sizes, prioridade = false }) {
  const t = telas[nome];
  if (!t) throw new Error(`Tela não encontrada: ${nome}`);
  const [width, height] = dimensoes(nome);
  return (
    <picture>
      <source type="image/avif" srcSet={srcset(t.avif)} sizes={sizes} />
      <source type="image/webp" srcSet={srcset(t.webp)} sizes={sizes} />
      <img
        src={t.jpg}
        width={width}
        height={height}
        alt={alt}
        loading={prioridade ? "eager" : "lazy"}
        decoding={prioridade ? "sync" : "async"}
        fetchpriority={prioridade ? "high" : undefined}
      />
    </picture>
  );
}
