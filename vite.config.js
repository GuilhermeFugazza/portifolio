import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Mês do build no fuso de Balneário Camboriú: o HTML gerado sai com o tempo de experiência deste mês.
const mes = new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "2-digit", timeZone: "America/Sao_Paulo" })
  .format(new Date())
  .slice(0, 7);

export default defineConfig({
  plugins: [react()],
  define: { __MES_DO_BUILD__: JSON.stringify(mes) },
  build: { assetsInlineLimit: 0, manifest: true },
});
