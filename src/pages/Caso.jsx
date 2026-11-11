import Moldura from "../components/Moldura.jsx";
import { useVista, VistaExplodida } from "../components/VistaExplodida.jsx";
import { Tela } from "../lib/imagens.jsx";
import { LINKS } from "../content/links.js";
import { ROTAS } from "../rotas.js";
import simboloComandafy from "../assets/comandafy-simbolo.svg";

// Página de case. O Poupfy fica no mundo escuro e violeta; o Comandafy, no mundo claro e lima.
export default function Caso({ t, produto }) {
  const c = t.casos[produto];
  const k = t.caso;
  const rotas = ROTAS[t.lang];
  const pf = produto === "poupfy";
  const outro = pf ? "comandafy" : "poupfy";
  const linkProduto = pf ? LINKS.appStore : LINKS.comandafy;
  const vista = useVista();

  const dock = {
    rotulo: t.ui.dockCase.rotulo,
    itens: [
      [`${rotas.home}#produtos`, t.ui.dockCase.produtos],
      ["#por-dentro", t.ui.dockCase.porDentro],
      ["#decisoes", t.ui.dockCase.decisoes],
      ["#telas-secao", t.ui.dockCase.telas],
    ],
  };

  return (
    <Moldura t={t} pagina={produto} classe={pf ? "p-case p-pf" : "p-case p-cf"} dock={dock}>
      <section className={pf ? "world" : "world world--cf"} aria-labelledby="titulo">
        <div className="wrap">
          <div className="world__text">
            <p className="crumb">
              <a href={`${rotas.home}#produtos`}>{k.produtos}</a>
              <span aria-hidden="true">/</span>
              <span>{pf ? "Poupfy" : "Comandafy"}</span>
            </p>
            <h1 id="titulo">
              {pf ? (
                "Poupfy"
              ) : (
                <span className="cf-brand">
                  <img src={simboloComandafy} width="64" height="64" alt="" />
                  Comandafy
                </span>
              )}
            </h1>
            <p className="world__line">{c.linha}</p>
            <p className="status">
              <span className="mark" aria-hidden="true"></span>
              {c.status}
            </p>
            <div className="actions">
              <a className="btn btn--solid" href={linkProduto} rel="noopener">
                {c.acao}
              </a>
              <a className="btn btn--line" href="#decisoes">
                {k.lerDecisoes}
              </a>
            </div>
          </div>
          <div className="world__stage" aria-hidden="true">
            {pf ? (
              <>
                <div className="phone phone--back">
                  <Tela nome="poupfy-widget-grande" sizes="250px" />
                </div>
                <div className="phone phone--front">
                  <Tela nome="poupfy-inicio-pessoal" sizes="300px" prioridade />
                </div>
              </>
            ) : (
              <>
                <div className="browser">
                  <div className="browser__bar">
                    <i></i>
                    <i></i>
                    <i></i>
                    <span>app.ftechworks.com.br/comandafy</span>
                  </div>
                  <Tela nome="comandafy-cozinha" sizes="(max-width: 860px) 190vw, 820px" prioridade />
                </div>
                <div className="phone phone--light phone--bare">
                  <Tela nome="comandafy-comanda-celular" sizes="230px" />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="sheet" aria-label={k.ficha}>
        <div className="wrap">
          <dl>
            <div>
              <dt>{k.fichaRotulos.papel}</dt>
              <dd>{c.ficha.papel}</dd>
            </div>
            <div>
              <dt>{k.fichaRotulos.periodo}</dt>
              <dd>{c.ficha.periodo}</dd>
            </div>
            <div>
              <dt>{k.fichaRotulos.status}</dt>
              <dd>{c.ficha.status}</dd>
            </div>
            <div>
              <dt>{k.fichaRotulos.plataforma}</dt>
              <dd>{c.ficha.plataforma}</dd>
            </div>
            <div>
              <dt>{k.fichaRotulos.link}</dt>
              <dd>
                <a href={linkProduto} rel="noopener">
                  {c.ficha.link}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="dentro" id="por-dentro" aria-labelledby="dentro-titulo">
        <div className="wrap">
          <div className="inside" data-produto={produto}>
            <div className="inside__text">
              <h2 id="dentro-titulo">{c.porDentroTitulo}</h2>
              <p>{k.porDentroTexto}</p>
            </div>
            <VistaExplodida
              vista={vista}
              rotulo={c.figura}
              camadas={k.camadas}
              tela={pf ? "poupfy-inicio-pessoal" : "comandafy-comanda-celular"}
              legendas={c.legendas.map(([href, texto]) => ({ href, texto }))}
            />
          </div>
        </div>
      </section>

      <div className="wrap">
        <article className="read">
          <section className="chapter" aria-labelledby="problema">
            <h2 id="problema">{k.problema}</h2>
            <p className="problem">{c.problema}</p>
          </section>

          <section className="chapter" id="decisoes" aria-labelledby="decisoes-titulo">
            <h2 id="decisoes-titulo">{k.decisoes}</h2>
            {c.decisoes.map((d) => (
              <div className="decision" id={d.id} key={d.id}>
                <h3>{d.titulo}</h3>
                <p>{d.texto}</p>
                <dl>
                  <dt>{k.porque}</dt>
                  <dd>{d.porque}</dd>
                  <dt>{k.descartado}</dt>
                  <dd>{d.descartado}</dd>
                  <dt>{k.custo}</dt>
                  <dd>{d.custo}</dd>
                </dl>
              </div>
            ))}
          </section>

          <section className="chapter" aria-labelledby="resultado">
            <h2 id="resultado">{k.resultado}</h2>
            <ul className="results">
              {c.resultados.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>
        </article>
      </div>

      <section className={pf ? "screens" : "screens screens--cf"} id="telas-secao" aria-labelledby="telas">
        <div className="wrap">
          <h2 id="telas">{k.telas}</h2>
          <p className="sub">{c.telasSub}</p>
          <ul className={pf ? "gallery" : "gallery gallery--cf"}>
            {c.telas.map(([nome, alt, titulo, legenda]) => {
              const celular = pf || nome.includes("celular");
              return (
                <li key={nome} className={!pf && celular ? "only-phone" : undefined}>
                  {celular ? (
                    <div className={pf ? "phone" : "phone phone--light phone--bare"}>
                      <Tela nome={nome} alt={alt} sizes="240px" />
                    </div>
                  ) : (
                    <div className="browser">
                      <div className="browser__bar">
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                      <Tela nome={nome} alt={alt} sizes="(max-width: 860px) 92vw, 640px" />
                    </div>
                  )}
                  <p>
                    <b>{titulo}</b>
                    {legenda}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className="wrap">
        <article className="read">
          <section className="chapter" id="stack-secao" aria-labelledby="stack">
            <h2 id="stack">{k.stack}</h2>
            <div className="tech-wrap">
              <table className="tech">
                <caption>{c.stackLegenda}</caption>
                <thead>
                  <tr>
                    {k.colunas.map((col) => (
                      <th scope="col" key={col}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.stack.map(([camada, tecnologia, uso]) => (
                    <tr key={camada}>
                      <th scope="row">{camada}</th>
                      <td>{tecnologia}</td>
                      <td>{uso}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </article>
      </div>

      <nav className="next" aria-label={k.proximos}>
        <div className="wrap">
          <a href={`${rotas.home}#produtos`}>
            <small>{k.voltar[0]}</small>
            <span>{k.voltar[1]}</span>
          </a>
          <a href={rotas[outro]}>
            <small>{k.proximo}</small>
            <span>{outro === "poupfy" ? "Poupfy" : "Comandafy"}</span>
          </a>
        </div>
      </nav>
    </Moldura>
  );
}
