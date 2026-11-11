import { useEffect, useRef, useState } from "react";
import Moldura from "../components/Moldura.jsx";
import { useVista, VistaExplodida } from "../components/VistaExplodida.jsx";
import { Tela } from "../lib/imagens.jsx";
import { Icone } from "../lib/icones.jsx";
import { LINKS } from "../content/links.js";
import { ROTAS } from "../rotas.js";
import logoPoupfy from "../assets/poupfy-logo-branco.svg";
import simboloPoupfy from "../assets/poupfy-simbolo-branco.svg";
import simboloComandafy from "../assets/comandafy-simbolo.svg";

const Seta = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const ICONES_CAMADA = [
  <svg viewBox="0 0 24 24" aria-hidden="true" key="db">
    <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
    <path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13" />
    <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true" key="api">
    <path d="M8 4c-2 0-3 1-3 3v2c0 1.2-.8 2-2 2 1.2 0 2 .8 2 2v2c0 2 1 3 3 3" />
    <path d="M16 4c2 0 3 1 3 3v2c0 1.2.8 2 2 2-1.2 0-2 .8-2 2v2c0 2-1 3-3 3" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true" key="ui">
    <rect x="3" y="4" width="13" height="10" rx="2" />
    <rect x="14" y="9" width="7" height="11" rx="1.6" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true" key="deploy">
    <rect x="4" y="4" width="16" height="7" rx="2" />
    <rect x="4" y="13" width="16" height="7" rx="2" />
    <path d="M8 7.5h.01M8 16.5h.01" />
  </svg>,
];

export default function Home({ t }) {
  const h = t.home;
  const rotas = ROTAS[t.lang];
  return (
    <Moldura
      t={t}
      pagina="home"
      classe="p-home"
      dock={{ rotulo: t.ui.dockHome.rotulo, itens: t.ui.dockHome.itens.map(([id, r]) => [`#${id}`, r]) }}
    >
      <Heroi t={t} />
      <Produtos t={t} rotas={rotas} />
      <PorDentro t={t} rotas={rotas} />
      <Sobre t={t} />
      <section className="contact" id="contato" aria-labelledby="contato-titulo">
        <div className="wrap">
          <div className="contact-panel">
            <h2 id="contato-titulo">{h.contato.titulo}</h2>
            <a className="mail" href={`mailto:${LINKS.email}`}>
              {LINKS.email}
            </a>
            <ul className="pills">
              <li>
                <a href={LINKS.linkedin} rel="noopener">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={LINKS.github} rel="noopener">
                  GitHub
                </a>
              </li>
              <li>
                <a href={LINKS.whatsapp} rel="noopener">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={t.cv.href} download>
                  {t.cv.longo}
                </a>
              </li>
            </ul>
            <p className="terms">{h.contato.termos}</p>
          </div>
        </div>
      </section>
    </Moldura>
  );
}

function Heroi({ t }) {
  const h = t.home.heroi;
  const fluxo = useRef(null);
  const faisca = useRef(null);

  // O ponto de luz desce do primeiro ao último nó do diagrama, uma vez.
  useEffect(() => {
    const ol = fluxo.current;
    const nos = ol.querySelectorAll(".hx-ico");
    if (!nos.length) return;
    const a = nos[0].getBoundingClientRect();
    const b = nos[nos.length - 1].getBoundingClientRect();
    faisca.current.style.top = `${a.top - ol.getBoundingClientRect().top + a.height / 2 - 2}px`;
    faisca.current.style.setProperty("--trilho", `${b.top - a.top}px`);
  }, []);

  return (
    <section className="hx hx--a" aria-labelledby="nome">
      <div className="wrap">
        <div className="hx-text">
          <p className="avail-line">
            <span className="pulse" aria-hidden="true"></span>
            {h.disponivel}
          </p>
          <h1 id="nome">Guilherme Fugazza</h1>
          <p className="hx-role">{h.papel}</p>
          <p className="hx-lede">{h.frase}</p>
          <div className="actions">
            <a className="btn btn--solid" href="#produtos">
              {h.verProdutos}
            </a>
            <a className="btn btn--line" href={t.cv.href} download>
              {t.cv.longo}
            </a>
          </div>
        </div>
        <ol className="flow" aria-label={h.fluxoRotulo} ref={fluxo}>
          <li className="spark" aria-hidden="true" ref={faisca}></li>
          {h.camadas.map(([nome, pilha], i) => (
            <li key={nome}>
              <span className="hx-ico hx-ico--line">{ICONES_CAMADA[i]}</span>
              <div>
                <b>{nome}</b>
                <small>{pilha}</small>
              </div>
            </li>
          ))}
          <li className="sep" aria-hidden="true">
            <span></span>
          </li>
          <li>
            <a href="#poupfy">
              <span className="hx-ico hx-ico--pf">
                <img src={simboloPoupfy} width="19" height="19" alt="" />
              </span>
              <div>
                <b>Poupfy</b>
                <small>{h.poupfy[0]}</small>
              </div>
              <span className="chip-state">
                <i></i>
                {h.poupfy[1]}
              </span>
            </a>
          </li>
          <li>
            <a href="#comandafy">
              <span className="hx-ico hx-ico--cf">
                <img src={simboloComandafy} width="40" height="40" alt="" />
              </span>
              <div>
                <b>Comandafy</b>
                <small>{h.comandafy[0]}</small>
              </div>
              <span className="chip-state">
                <i></i>
                {h.comandafy[1]}
              </span>
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Produtos({ t, rotas }) {
  const p = t.home.produtos;
  const m = p.mensageria;
  return (
    <section className="section" id="produtos" aria-labelledby="produtos-titulo" style={{ paddingTop: "clamp(24px, 4vw, 48px)" }}>
      <div className="wrap">
        <div className="section__head">
          <h2 id="produtos-titulo">{p.titulo}</h2>
        </div>

        <div className="worlds">
          <article className="window" id="poupfy" aria-labelledby="pf-titulo">
            <a className="world world--pf" href={rotas.poupfy}>
              <div className="world__title">
                <h3 id="pf-titulo" style={{ margin: 0 }}>
                  <img className="pf-logo" src={logoPoupfy} width="95" height="30" alt="Poupfy" />
                </h3>
                <p className="world__line">{p.poupfy.linha}</p>
              </div>
              <div className="stage" aria-hidden="true">
                <div className="phone phone--back tilt" style={{ "--w": "206px" }}>
                  <Tela nome="poupfy-widget-grande" sizes="200px" />
                </div>
                <div className="phone phone--front tilt" style={{ "--w": "236px" }}>
                  <Tela nome="poupfy-inicio-pessoal" sizes="230px" />
                </div>
              </div>
              <span className="open-site">
                {p.verCase}
                <Seta />
              </span>
              <span className="sr">{p.poupfy.sr}</span>
            </a>
            <div className="caption">
              <p className="status">
                <span className="mark mark--pf" aria-hidden="true"></span>
                {p.poupfy.status}
              </p>
              <ul className="facts">
                {p.poupfy.fatos.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="role">
                <b>{p.papel}</b> {p.poupfy.papel}
              </p>
              <div className="links">
                <a className="link" href={rotas.poupfy}>
                  {p.verCase}
                </a>
                <a className="link" href={LINKS.poupfy} rel="noopener">
                  {p.conhecer}
                </a>
                <a className="link" href={LINKS.appStore} rel="noopener">
                  {p.appStore}
                </a>
              </div>
            </div>
          </article>

          <article className="window" id="comandafy" aria-labelledby="cf-titulo">
            <a className="world world--cf" href={rotas.comandafy}>
              <div className="world__title">
                <h3 id="cf-titulo" style={{ margin: 0 }}>
                  <span className="cf-brand">
                    <img src={simboloComandafy} width="40" height="40" alt="" />
                    Comandafy
                  </span>
                </h3>
                <p className="world__line">{p.comandafy.linha}</p>
              </div>
              <div className="stage" aria-hidden="true">
                <div className="browser tilt">
                  <div className="browser__bar">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <Tela nome="comandafy-comandas" sizes="(max-width: 1080px) 150vw, 900px" />
                </div>
                <div className="phone phone--light phone--bare tilt" style={{ "--w": "176px" }}>
                  <Tela nome="comandafy-comanda-celular" sizes="180px" />
                </div>
              </div>
              <span className="open-site">
                {p.verCase}
                <Seta />
              </span>
              <span className="sr">{p.comandafy.sr}</span>
            </a>
            <div className="caption">
              <p className="status">
                <span className="mark mark--cf" aria-hidden="true"></span>
                {p.comandafy.status}
              </p>
              <ul className="facts">
                {p.comandafy.fatos.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="role">
                <b>{p.papel}</b> {p.comandafy.papel}
              </p>
              <div className="links">
                <a className="link" href={rotas.comandafy}>
                  {p.verCase}
                </a>
                <a className="link" href={LINKS.comandafy} rel="noopener">
                  {p.conhecer}
                </a>
              </div>
            </div>
          </article>
        </div>

        <article className="contract" id="mensageria" aria-labelledby="ms-titulo">
          <div className="contract__text">
            <span className="tag">{m.selo}</span>
            <h3 id="ms-titulo">{m.titulo}</h3>
            <p className="lead">{m.lead}</p>
            <p>{m.texto}</p>
            <p className="role">
              <b>{p.papel}</b> {m.papel}
            </p>
            <p className="note">{m.nota}</p>
          </div>
          <div className="contract__screens">
            {m.telas.map(([nome, alt]) => (
              <div className="phone phone--light phone--bare" key={nome}>
                <Tela nome={nome} alt={alt} sizes="150px" />
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function PorDentro({ t, rotas }) {
  const d = t.home.porDentro;
  const [escolhido, setEscolhido] = useState("poupfy");
  const [mostrado, setMostrado] = useState("poupfy");
  const vista = useVista();
  const atual = d.produtos[mostrado];

  const escolher = (nome) => {
    if (nome === escolhido) return;
    setEscolhido(nome);
    vista.trocar(() => setMostrado(nome));
  };

  return (
    <section className="section" id="por-dentro" aria-labelledby="dentro-titulo">
      <div className="wrap">
        <div className="section__head">
          <h2 id="dentro-titulo">{d.titulo}</h2>
          <p>{d.sub}</p>
        </div>
        <div className="inside" data-produto={mostrado}>
          <div className="inside__text">
            <h3>{atual.titulo}</h3>
            <p>{d.texto}</p>
            <div className="seg" role="group" aria-label={d.seletor}>
              {["poupfy", "comandafy"].map((nome) => (
                <button type="button" key={nome} aria-pressed={escolhido === nome} onClick={() => escolher(nome)}>
                  <span className={`mark mark--${nome === "poupfy" ? "pf" : "cf"}`} aria-hidden="true"></span>
                  {nome === "poupfy" ? "Poupfy" : "Comandafy"}
                </button>
              ))}
            </div>
            <a className="inside__link" href={rotas[mostrado]}>
              {atual.link}
            </a>
          </div>
          <VistaExplodida
            vista={vista}
            rotulo={d.figura}
            camadas={t.caso.camadas}
            tela={mostrado === "poupfy" ? "poupfy-inicio-pessoal" : "comandafy-comanda-celular"}
            legendas={atual.legendas.map((texto) => ({ texto }))}
          />
        </div>
      </div>
    </section>
  );
}

function Sobre({ t }) {
  const s = t.home.sobre;
  return (
    <section className="section" id="sobre" aria-labelledby="sobre-titulo">
      <div className="wrap">
        <div className="section__head section__head--bio">
          <h2 id="sobre-titulo">{s.titulo}</h2>
          <p>{s.bio}</p>
        </div>

        <ul className="stats" aria-label={s.numerosRotulo}>
          {s.numeros.map((n) => (
            <li className={n.principal ? "stat stat--main" : "stat"} key={n.rotulo}>
              <small>{n.rotulo}</small>
              <strong>{n.valor}</strong>
              <span>{n.texto}</span>
            </li>
          ))}
        </ul>

        <div className="about-grid">
          <article className="panel panel--path" aria-labelledby="path-t">
            <h3 id="path-t">{s.trajetoria.titulo}</h3>
            <ol className="path">
              {s.trajetoria.itens.map((item) => (
                <li className={item.agora ? "now" : undefined} key={item.cargo}>
                  <p className="when">{item.quando}</p>
                  <div className="what">
                    <h4>{item.cargo}</h4>
                    <p className="org">{item.onde}</p>
                    {item.pontos && (
                      <ul>
                        {item.pontos.map((ponto, i) => (
                          <li key={i}>{ponto}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <article className="panel panel--card" aria-labelledby="card-t">
            <h3 id="card-t">{s.ficha.titulo}</h3>
            <dl className="card-dl">
              {s.ficha.itens.map(([rotulo, valor, nota, pulso]) => (
                <div key={rotulo}>
                  <dt>{rotulo}</dt>
                  <dd>
                    {pulso && <span className="pulse" aria-hidden="true"></span>}
                    {valor}
                    {nota && <small>{nota}</small>}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="method">
              <h4>{s.ficha.metodoTitulo}</h4>
              <ol>
                {s.ficha.metodo.map(([titulo, texto]) => (
                  <li key={titulo}>
                    <p style={{ margin: 0 }}>
                      <b>{titulo}</b> <span>{texto}</span>
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <a className="btn btn--solid" href={t.cv.href} download>
              {t.cv.longo}
            </a>
          </article>

          <article className="panel panel--stack" aria-labelledby="stack-t">
            <h3 id="stack-t">{s.stack.titulo}</h3>
            <p className="stack-sub">{s.stack.base}</p>
            <ul className="stack-core">
              {s.stack.nucleo.map(([icone, cor, nome, uso]) => (
                <li className="core" style={{ "--c": cor }} key={nome}>
                  <span className="core__ico">
                    <Icone nome={icone} />
                  </span>
                  <div>
                    <b>{nome}</b>
                    <span>{uso}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="stack-sub">{s.stack.porArea}</p>
            <dl className="stack-rows">
              {s.stack.areas.map(([area, itens]) => (
                <div key={area}>
                  <dt>{area}</dt>
                  <dd>
                    {itens.map(([icone, nome]) => (
                      <span key={nome}>
                        <Icone nome={icone} />
                        {nome}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        </div>

        <div className="faq" id="perguntas">
          <h3>{s.perguntas.titulo}</h3>
          <p>{s.perguntas.sub}</p>
          <div className="faq__list">
            {s.perguntas.itens.map(([pergunta, ...respostas], i) => (
              <details open={i === 0} key={i}>
                <summary>{pergunta}</summary>
                <div>
                  {respostas.map((r, j) => (
                    <p key={j}>{r}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
