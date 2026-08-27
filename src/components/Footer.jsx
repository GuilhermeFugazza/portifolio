import { useLang } from "../i18n/LanguageContext.jsx";
import { strings } from "../i18n/strings.js";

const year = new Date().getFullYear();

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
        <span className="meta-text">Guilherme Fugazza · Full-stack Product Engineer</span>
        <span className="meta-text">© {year} · {t(strings.footer.place)}</span>
      </div>
    </footer>
  );
}
