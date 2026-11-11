// Cada página existe em português e em inglês, com o endereço equivalente no outro idioma.
export const SITE = "https://guilherme.ftechworks.com.br";

export const ROTAS = {
  pt: { home: "/", poupfy: "/projetos/poupfy", comandafy: "/projetos/comandafy" },
  en: { home: "/en", poupfy: "/en/projects/poupfy", comandafy: "/en/projects/comandafy" },
};

// Arquivo HTML gerado para cada rota (sem barra no fim, como o Cloudflare Pages serve).
export const PAGINAS = [
  { pagina: "home", lang: "pt", arquivo: "index.html" },
  { pagina: "poupfy", lang: "pt", arquivo: "projetos/poupfy.html" },
  { pagina: "comandafy", lang: "pt", arquivo: "projetos/comandafy.html" },
  { pagina: "home", lang: "en", arquivo: "en.html" },
  { pagina: "poupfy", lang: "en", arquivo: "en/projects/poupfy.html" },
  { pagina: "comandafy", lang: "en", arquivo: "en/projects/comandafy.html" },
  { pagina: "404", lang: "pt", arquivo: "404.html" },
];

export function resolver(caminho) {
  const limpo = caminho.replace(/\/+$/, "") || "/";
  for (const lang of ["pt", "en"]) {
    for (const [pagina, rota] of Object.entries(ROTAS[lang])) {
      if (rota === limpo) return { pagina, lang };
    }
  }
  return { pagina: "404", lang: limpo.startsWith("/en") ? "en" : "pt" };
}
