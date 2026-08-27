import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "portfolio-lang";
const LANGS = ["pt", "en"];

const detectInitial = () => {
  if (typeof window === "undefined") return "pt";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {
    /* storage indisponível: cai no idioma do navegador */
  }
  return /^en/i.test(window.navigator.language || "") ? "en" : "pt";
};

const LanguageContext = createContext({ lang: "pt", setLang: () => {}, t: (v) => v?.pt ?? v });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitial);

  const setLang = useCallback((next) => {
    if (!LANGS.includes(next)) return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* sem persistência, sem problema */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  }, [lang]);

  // t({ pt, en }) devolve o texto do idioma atual; string pura passa direto.
  const t = useCallback(
    (value) => {
      if (value == null) return "";
      if (typeof value === "string") return value;
      return value[lang] ?? value.pt ?? "";
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
