import { useLang } from "../i18n/LanguageContext.jsx";
import { projects as projectsPt } from "./projects.js";
import { projectsEn } from "./projects.en.js";

export const projectsByLang = (lang) => (lang === "en" ? projectsEn : projectsPt);

export function useProjects() {
  const { lang } = useLang();
  return projectsByLang(lang);
}
