import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext.jsx";
import { strings } from "../i18n/strings.js";

export default function NotFound() {
  const { t } = useLang();

  return (
    <section className="w-full pb-6 md:pb-10">
      <header className="page-head">
        <p className="stagger-item eyebrow" style={{ "--stagger": 0.6 }}>404</p>
        <h1 className="stagger-item page-head-title" style={{ "--stagger": 0.2 }}>
          {t(strings.notFound.title)}
        </h1>
        <p className="stagger-item lede" style={{ "--stagger": 0.8 }}>{t(strings.notFound.text)}</p>
      </header>
      <Link to="/" className="btn btn--solid">
        {t(strings.notFound.home)}
      </Link>
    </section>
  );
}
