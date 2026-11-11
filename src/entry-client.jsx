import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import { resolver } from "./rotas.js";
import "./styles/base.css";
import "./styles/home.css";
import "./styles/case.css";
import "./styles/comum.css";
import "./styles/case-poupfy.css";
import "./styles/case-comandafy.css";
import "./styles/heroi.css";

// Cada idioma é um pacote separado: a página baixa só o texto que mostra.
const IDIOMAS = { pt: () => import("./content/pt.jsx"), en: () => import("./content/en.jsx") };

const raiz = document.getElementById("root");
// No site publicado, o HTML já vem pronto e diz qual página é; no npm run dev, vale o endereço.
const pronto = Boolean(raiz.dataset.pagina);
const { pagina, lang } = pronto ? { pagina: raiz.dataset.pagina, lang: raiz.dataset.lang } : resolver(location.pathname);

IDIOMAS[lang]().then(({ default: t }) => {
  if (pronto) {
    hydrateRoot(raiz, <App pagina={pagina} t={t} />);
  } else {
    document.title = t.meta[pagina].titulo;
    document.documentElement.lang = t.html;
    createRoot(raiz).render(<App pagina={pagina} t={t} />);
  }
});
