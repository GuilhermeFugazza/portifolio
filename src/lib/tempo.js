// Tempo de experiência contado a partir de março de 2024, no fuso de Balneário Camboriú.
export const INICIO = "2024-03";

function mesAtual(agora = new Date()) {
  const partes = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    timeZone: "America/Sao_Paulo",
  }).formatToParts(agora);
  const v = (t) => Number(partes.find((x) => x.type === t).value);
  return `${v("year")}-${String(v("month")).padStart(2, "0")}`;
}

// Mês em que o site foi gerado. O HTML sai com ele e o navegador atualiza depois.
export const MES_DO_BUILD = typeof __MES_DO_BUILD__ === "string" ? __MES_DO_BUILD__ : mesAtual();

export function experiencia(lang, mes = mesAtual()) {
  const [a0, m0] = INICIO.split("-").map(Number);
  const [a1, m1] = mes.split("-").map(Number);
  const total = Math.max(0, (a1 - a0) * 12 + (m1 - m0));
  const anos = Math.floor(total / 12);
  const meses = total % 12;
  const pt = lang === "pt";
  const A = pt ? (anos === 1 ? "1 ano" : `${anos} anos`) : anos === 1 ? "1 year" : `${anos} years`;
  const M = pt ? (meses === 1 ? "1 mês" : `${meses} meses`) : meses === 1 ? "1 month" : `${meses} months`;
  if (anos && meses) return `${A} ${pt ? "e" : "and"} ${M}`;
  return anos ? A : M;
}

export { mesAtual };

export function hora(lang, agora = new Date()) {
  return new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  }).format(agora);
}
