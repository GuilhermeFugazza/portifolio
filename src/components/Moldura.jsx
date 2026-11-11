import { useEffect, useState } from "react";
import { ROTAS } from "../rotas.js";

// Cabeçalho, dock de seções e rodapé, iguais em todas as páginas.
// itens do dock: [href, rótulo]. Os que começam com "#" ficam marcados quando a seção está na tela.
export default function Moldura({ t, pagina, classe, dock, children }) {
  const ativo = useSecaoAtiva(dock.itens);
  const outra = ROTAS[t.outro.lang][pagina] ?? ROTAS[t.outro.lang].home;

  return (
    <div className={`p ${classe}`}>
      <a className="skip" href="#conteudo">
        {t.ui.pular}
      </a>

      <header className="site-header">
        <div className="wrap">
          <a className="brand" href={ROTAS[t.lang].home} aria-label={t.ui.marca}>
            Guilherme Fugazza
          </a>
          <div className="topbar-right">
            <a className="cv-sm" href={t.cv.href} download>
              {t.cv.curto}
            </a>
            <span className="lang" role="group" aria-label={t.ui.idioma}>
              <span aria-current="true">{t.sigla}</span>
              <a href={outra} lang={t.outro.lang === "pt" ? "pt-BR" : "en"} hrefLang={t.outro.lang === "pt" ? "pt-BR" : "en"}>
                {t.outro.sigla}
              </a>
            </span>
          </div>
        </div>
      </header>

      <nav className="dock" aria-label={dock.rotulo}>
        {dock.itens.map(([href, rotulo]) => (
          <a key={href} href={href} aria-current={ativo && href === `#${ativo}` ? "true" : undefined}>
            {rotulo}
          </a>
        ))}
        <a className="dock-cv" href={t.cv.href} download>
          {t.cv.curto}
        </a>
      </nav>

      <main id="conteudo">{children}</main>

      <footer className="site-footer">
        <div className="wrap">
          <span>{t.ui.rodape[0]}</span>
          <span>{t.ui.rodape[1]}</span>
        </div>
      </footer>
    </div>
  );
}

function useSecaoAtiva(itens) {
  const [ativo, setAtivo] = useState(null);
  const chave = itens.map(([href]) => href).join(" ");
  useEffect(() => {
    const ids = chave.split(" ").filter((h) => h.startsWith("#")).map((h) => h.slice(1));
    const alvos = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!alvos.length || !("IntersectionObserver" in window)) return;
    const visiveis = new Map();
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => visiveis.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
        let melhor = null;
        let maior = 0;
        visiveis.forEach((r, id) => {
          if (r > maior) {
            maior = r;
            melhor = id;
          }
        });
        setAtivo(melhor);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.01, 0.5, 1] }
    );
    alvos.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [chave]);
  return ativo;
}
