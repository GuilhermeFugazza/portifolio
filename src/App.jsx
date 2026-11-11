import { LangProvider } from "./components/Lang.jsx";
import Home from "./pages/Home.jsx";
import Caso from "./pages/Caso.jsx";
import NaoEncontrada from "./pages/NaoEncontrada.jsx";

// t: o texto do idioma da página (src/content/pt.jsx ou en.jsx).
export default function App({ pagina, t }) {
  return (
    <LangProvider value={t.lang}>
      {pagina === "home" && <Home t={t} />}
      {(pagina === "poupfy" || pagina === "comandafy") && <Caso t={t} produto={pagina} />}
      {pagina === "404" && <NaoEncontrada t={t} />}
    </LangProvider>
  );
}
