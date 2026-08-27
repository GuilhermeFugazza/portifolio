// Mapeia o texto de status (PT ou EN) para o modificador visual do selo.
export const statusModifier = (status = "") => {
  const s = status.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  if (/produc|production/.test(s)) return "status-pill--live";
  if (/desenvolv|develop/.test(s)) return "status-pill--wip";
  if (/homolog|beta|teste|testing/.test(s)) return "status-pill--test";
  return "";
};
