import Moldura from "../components/Moldura.jsx";
import { ROTAS } from "../rotas.js";

// Uma página só: o Cloudflare Pages serve o mesmo 404.html para qualquer endereço, em português ou inglês.
export default function NaoEncontrada({ t }) {
  const n = t.naoEncontrada;
  return (
    <Moldura t={t} pagina="home" classe="p-home" dock={{ rotulo: t.ui.dockHome.rotulo, itens: [] }}>
      <section className="section" aria-labelledby="nao-encontrada">
        <div className="wrap">
          <div className="contact-panel">
            <h1 id="nao-encontrada" className="nf-title">
              {n.titulo}
            </h1>
            <p className="terms">{n.texto}</p>
            <ul className="pills">
              <li>
                <a href={ROTAS[t.lang].home}>{n.voltar}</a>
              </li>
              {n.ingles && (
                <li lang="en">
                  <a href={ROTAS.en.home}>{n.ingles}</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </Moldura>
  );
}
