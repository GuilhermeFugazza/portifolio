import { useCallback, useEffect, useRef } from "react";
import { Tela } from "../lib/imagens.jsx";

const reduzMovimento = () =>
  typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;

// O app aberto em camadas (servidor, dados, api e a tela), com uma linha de cada camada até a legenda.
// Abre uma vez quando aparece na tela. trocar() fecha, aplica a troca de produto e abre de novo.
export function useVista() {
  const fig = useRef(null);
  const stack = useRef(null);
  const body = useRef(null);
  const svg = useRef(null);

  const desenhar = useCallback(() => {
    if (!fig.current) return;
    const itens = [...fig.current.querySelectorAll(".xv-callouts li")];
    const ancoras = [...stack.current.querySelectorAll(".xv-anchor")].reverse();
    if (!itens.length) return;
    if (getComputedStyle(itens[0]).position !== "absolute") {
      svg.current.innerHTML = "";
      itens.forEach((li) => (li.style.top = ""));
      return;
    }
    const caixa = body.current.getBoundingClientRect();
    const xTexto = itens[0].getBoundingClientRect().left - caixa.left - 10;
    let html = "";
    let ultimo = -Infinity;
    ancoras.forEach((a, i) => {
      const r = a.getBoundingClientRect();
      const x = r.left - caixa.left;
      const y0 = r.top - caixa.top;
      const y = Math.max(y0, ultimo + itens[i].offsetHeight + 12);
      ultimo = y;
      itens[i].style.top = `${y}px`;
      const meio = (x + xTexto) / 2;
      html += `<line x1="${x}" y1="${y0}" x2="${meio}" y2="${y}"></line><line x1="${meio}" y1="${y}" x2="${xTexto}" y2="${y}"></line><circle cx="${x}" cy="${y0}" r="3"></circle>`;
    });
    svg.current.innerHTML = html;
  }, []);

  const acompanhar = useCallback(
    (ms) => {
      const fim = performance.now() + ms;
      const passo = () => {
        desenhar();
        if (performance.now() < fim) requestAnimationFrame(passo);
      };
      requestAnimationFrame(passo);
    },
    [desenhar]
  );

  const abrir = useCallback(() => {
    if (!stack.current) return;
    stack.current.classList.add("open");
    if (reduzMovimento()) {
      desenhar();
      fig.current.classList.add("ready");
      return;
    }
    acompanhar(1300);
    setTimeout(() => fig.current && fig.current.classList.add("ready"), 700);
  }, [acompanhar, desenhar]);

  useEffect(() => {
    const reduz = reduzMovimento();
    let aberto = false;
    let obs;
    const comecar = () => {
      if (aberto) return;
      aberto = true;
      const fontes = document.fonts ? document.fonts.ready : Promise.resolve();
      fontes.then(() => setTimeout(abrir, reduz ? 0 : 150));
    };
    if ("IntersectionObserver" in window && !reduz) {
      obs = new IntersectionObserver(
        (es) => {
          if (es.some((e) => e.isIntersecting)) {
            comecar();
            obs.disconnect();
          }
        },
        { threshold: 0.25 }
      );
      obs.observe(fig.current);
    } else comecar();
    addEventListener("resize", desenhar);
    return () => {
      removeEventListener("resize", desenhar);
      if (obs) obs.disconnect();
    };
  }, [abrir, desenhar]);

  const trocar = useCallback(
    (aplicar) => {
      if (reduzMovimento()) {
        aplicar();
        requestAnimationFrame(desenhar);
        return;
      }
      const app = stack.current.querySelector(".app");
      fig.current.classList.remove("ready");
      stack.current.classList.remove("open");
      app.classList.add("swap");
      setTimeout(() => {
        aplicar();
        app.classList.remove("swap");
        abrir();
      }, 520);
    },
    [abrir, desenhar]
  );

  return { refs: { fig, stack, body, svg }, trocar };
}

// legendas: [interface, api, dados, servidor], cada uma { texto, href? }.
export function VistaExplodida({ vista, rotulo, camadas, tela, legendas }) {
  const { fig, stack, body, svg } = vista.refs;
  const nomes = [camadas.interface, camadas.api, camadas.dados, camadas.servidor];
  return (
    <figure className="xv" ref={fig} aria-label={rotulo}>
      <div className="xv-body" ref={body}>
        <div className="xv-stage" aria-hidden="true">
          <div className="xv-stack" ref={stack}>
            <div className="xv-plate layer" style={{ "--i": 0 }}>
              <span className="xv-anchor"></span>
              <span className="plate-name">{camadas.servidor}</span>
            </div>
            <div className="xv-plate layer" style={{ "--i": 1 }}>
              <span className="xv-anchor"></span>
              <span className="plate-name">{camadas.dados}</span>
            </div>
            <div className="xv-plate layer" style={{ "--i": 2 }}>
              <span className="xv-anchor"></span>
              <span className="plate-name">{camadas.api}</span>
            </div>
            <div className="xv-plate app" style={{ "--i": 3 }}>
              <span className="xv-anchor"></span>
              <Tela nome={tela} sizes="190px" />
            </div>
          </div>
        </div>
        <svg className="xv-lines" ref={svg} aria-hidden="true"></svg>
        <ol className="xv-callouts">
          {legendas.map((l, i) => (
            <li key={i}>
              <b>{nomes[i]}</b>
              {l.href ? <a href={l.href}>{l.texto}</a> : <span>{l.texto}</span>}
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
