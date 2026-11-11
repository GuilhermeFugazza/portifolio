import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import pt from "./content/pt.jsx";
import en from "./content/en.jsx";
import { ROTAS, SITE } from "./rotas.js";
import { LINKS } from "./content/links.js";

const TEXTOS = { pt, en };

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// Gera o HTML de uma página e o <head> dela, com título, descrição, idiomas alternativos e Open Graph.
export function render(pagina, lang) {
  const t = TEXTOS[lang];
  const meta = t.meta[pagina];
  const html = renderToString(<App pagina={pagina} t={t} />);

  const head = [`<title>${esc(meta.titulo)}</title>`, `<meta name="description" content="${esc(meta.descricao)}">`];

  if (pagina === "404") {
    head.push('<meta name="robots" content="noindex">');
  } else {
    const url = SITE + ROTAS[lang][pagina];
    head.push(
      `<link rel="canonical" href="${url}">`,
      `<link rel="alternate" hreflang="pt-BR" href="${SITE + ROTAS.pt[pagina]}">`,
      `<link rel="alternate" hreflang="en" href="${SITE + ROTAS.en[pagina]}">`,
      `<link rel="alternate" hreflang="x-default" href="${SITE + ROTAS.pt[pagina]}">`,
      `<meta property="og:type" content="${pagina === "home" ? "profile" : "article"}">`,
      `<meta property="og:site_name" content="Guilherme Fugazza">`,
      `<meta property="og:url" content="${url}">`,
      `<meta property="og:title" content="${esc(meta.titulo)}">`,
      `<meta property="og:description" content="${esc(meta.descricao)}">`,
      `<meta property="og:locale" content="${t.locale}">`,
      `<meta property="og:image" content="${SITE}/og/${lang}.png">`,
      `<meta property="og:image:width" content="1200">`,
      `<meta property="og:image:height" content="630">`,
      `<meta name="twitter:card" content="summary_large_image">`
    );
  }

  if (pagina === "home") {
    const pessoa = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Guilherme Fugazza",
      jobTitle: "Full-stack Product Engineer",
      url: SITE + ROTAS[lang].home,
      email: `mailto:${LINKS.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Balneário Camboriú", addressRegion: "SC", addressCountry: "BR" },
      sameAs: [LINKS.linkedin, LINKS.github],
    };
    head.push(`<script type="application/ld+json">${JSON.stringify(pessoa).replace(/</g, "\\u003c")}</script>`);
  }

  return { html, head: head.join("\n    "), htmlLang: t.html };
}
