import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader.jsx";
import { techIcon } from "../data/techIcons.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { strings } from "../i18n/strings.js";

export default function StackExperience() {
  const { t } = useLang();
  const s = strings.stack;

  return (
    <section className="w-full pb-6 md:pb-10">
      <SectionHeader title={t(s.title)} description={t(s.eyebrow)} lede={t(s.lede)} />

      <ol className="grid gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {s.layers.map((layer, index) => (
          <li
            key={layer.id}
            className="stagger-item surface surface--interactive flex flex-col gap-4"
            style={{ "--stagger": 0.4 + index * 0.1 }}
          >
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-[1.25rem] font-semibold leading-tight txt-1">{t(layer.title)}</h2>
              <span className="font-display text-[0.78rem] font-semibold txt-4">{layer.id}</span>
            </div>

            <p className="body-text">{t(layer.summary)}</p>

            <ul className="chip-row">
              {layer.tools.map((name) => {
                const icon = techIcon(name);
                return (
                  <li key={name} className="chip">
                    {icon && <img src={icon} alt="" loading="lazy" decoding="async" />}
                    {name}
                  </li>
                );
              })}
            </ul>

            {layer.proof && (
              <Link
                to={`/projetos/${layer.proof.slug}`}
                className="mt-auto flex items-start gap-2 border-t border-[var(--line)] pt-4 meta-text transition hover:txt-1"
              >
                <span className="eyebrow eyebrow--quiet shrink-0 pt-[0.2em]">{t(s.proof)}</span>
                <span>{t(layer.proof.label)} →</span>
              </Link>
            )}
          </li>
        ))}
      </ol>

      <section className="stagger-item surface mt-5 md:mt-6" style={{ "--stagger": 1.1 }}>
        <header className="block-head">
          <p className="eyebrow">{t(s.solvedEyebrow)}</p>
          <h2 className="block-head-title">{t(s.solvedTitle)}</h2>
        </header>

        <ol className="grid gap-0 divide-y divide-[var(--line)] md:grid-cols-2 md:gap-x-10 md:divide-y-0">
          {s.solved.map((item, index) => (
            <li
              key={t(item.title)}
              className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 py-4 first:pt-0 last:pb-0 md:border-b md:border-[var(--line)] md:py-4 md:first:pt-4 md:last:pb-4 md:[&:nth-child(-n+2)]:pt-0 md:[&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-last-child(-n+2)]:pb-0"
            >
              <span className="font-display text-[0.8rem] font-semibold txt-4">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-[0.95rem] font-semibold leading-snug txt-1">{t(item.title)}</h3>
                <p className="meta-text mt-1">{t(item.detail)}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}
