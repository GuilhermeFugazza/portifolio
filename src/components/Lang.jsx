import { createContext, useContext } from "react";

const Contexto = createContext("pt");

export const LangProvider = Contexto.Provider;
export const useLang = () => useContext(Contexto);
