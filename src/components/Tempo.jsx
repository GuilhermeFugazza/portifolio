import { useEffect, useState } from "react";
import { experiencia, hora, mesAtual, MES_DO_BUILD } from "../lib/tempo.js";
import { useLang } from "./Lang.jsx";

// "2 anos e 8 meses": sai no HTML com o mês do build e se atualiza no navegador.
export function Experiencia() {
  const lang = useLang();
  const [mes, setMes] = useState(MES_DO_BUILD);
  useEffect(() => setMes(mesAtual()), []);
  return <span>{experiencia(lang, mes)}</span>;
}

// Hora atual em Balneário Camboriú.
export function Relogio() {
  const lang = useLang();
  const [agora, setAgora] = useState(null);
  useEffect(() => {
    const tick = () => setAgora(new Date());
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return <time suppressHydrationWarning>{agora ? hora(lang, agora) : ""}</time>;
}
