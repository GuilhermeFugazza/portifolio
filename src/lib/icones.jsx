// Ícones de tecnologia do Simple Icons 16.37.0 (CC0) e ícones de traço, num sprite gerado por scripts/icones.mjs.
import sprite from "../assets/icones.svg?url";

const TRACOS = new Set(["codigo", "pacote", "banco", "cadeado", "escudo", "tomada", "fila", "lista", "pulso", "nuvem"]);

export function Icone({ nome }) {
  return (
    <svg className={TRACOS.has(nome) ? "g" : undefined} viewBox="0 0 24 24" aria-hidden="true">
      <use href={`${sprite}#${nome}`} />
    </svg>
  );
}
