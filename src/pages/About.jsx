import { Link } from "react-router-dom";
import profileImage from "../assets/guilherme.jpg";
import SectionHeader from "../components/SectionHeader.jsx";
import { techIcon } from "../data/techIcons.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { strings } from "../i18n/strings.js";

const stack = [
  "React", "React Native", "Expo", "TypeScript", "Node.js", "NestJS", "Fastify",
  "PostgreSQL", "Prisma", "Redis", "Docker", "Linux", "Cloudflare", "Python", "n8n"
];

export default function About() {
  const { t } = useLang();
  const s = strings.about;

  return (
    <section className="w-full pb-6 md:pb-10">
      <SectionHeader title={t(s.title)} description={t(s.eyebrow)} lede={t(s.lede)} />

      <div className="grid gap-5 md:grid-cols-[17.5rem_minmax(0,1fr)] md:gap-6">
        <aside className="grid content-start gap-5 md:sticky md:top-24 md:self-start md:gap-6">
          <figure className="stagger-item surface !p-2" style={{ "--stagger": 0.3 }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[0.7rem]">
              <img
                src={profileImage}
                alt="Guilherme Fugazza"
                className="h-full w-full object-cover object-top"
                loading="eager"
                decoding="async"
              />
            </div>
            <figcaption className="px-2 pb-1 pt-3">
              <p className="font-display text-[1.1rem] font-semibold leading-tight txt-1">Guilherme Fugazza</p>
              <p className="meta-text mt-0.5">{t(s.role)}</p>
            </figcaption>
          </figure>

          <dl className="stagger-item surface def-grid" style={{ "--stagger": 0.45 }}>
            {s.facts.map((fact) => (
              <div key={t(fact.label)}>
                <dt>{t(fact.label)}</dt>
                <dd>{t(fact.value)}</dd>
              </div>
            ))}
          </dl>

          <div className="stagger-item flex flex-col gap-2" style={{ "--stagger": 0.55 }}>
            <Link to="/contato" className="btn btn--primary">
              {t(s.contactBtn)}
            </Link>
            <a href="https://github.com/GuilhermeFugazza" target="_blank" rel="noreferrer noopener" className="btn btn--ghost">
              GitHub ↗
            </a>
          </div>
        </aside>

        <div className="grid gap-5 md:gap-6">
          <section className="stagger-item surface" style={{ "--stagger": 0.4 }}>
            <div className="grid gap-3">
              {s.summary.map((paragraph) => (
                <p key={t(paragraph)} className="body-text">
                  {t(paragraph)}
                </p>
              ))}
            </div>
          </section>

          <section className="stagger-item surface" style={{ "--stagger": 0.55 }}>
            <header className="block-head">
              <p className="eyebrow">{t(s.expEyebrow)}</p>
              <h2 className="block-head-title">{t(s.expTitle)}</h2>
            </header>

            <ol className="grid gap-0 divide-y divide-[var(--line)]">
              {s.experience.map((item) => (
                <li
                  key={t(item.org)}
                  className="grid gap-3 py-5 first:pt-0 last:pb-0 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-6"
                >
                  <p className="meta-text pt-0.5">{t(item.period)}</p>
                  <div className="grid gap-2">
                    <div>
                      <h3 className="text-[1rem] font-semibold txt-1">{t(item.role)}</h3>
                      <p className="meta-text">{t(item.org)}</p>
                    </div>
                    <p className="body-text">{t(item.summary)}</p>
                    {item.points.length > 0 && (
                      <ul className="marked-list marked-list--quiet mt-1">
                        {item.points.map((point) => (
                          <li key={t(point)}>{t(point)}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <section className="stagger-item surface" style={{ "--stagger": 0.7 }}>
              <header className="block-head">
                <p className="eyebrow">{t(s.processEyebrow)}</p>
                <h2 className="block-head-title">{t(s.processTitle)}</h2>
              </header>
              <ol className="grid gap-4">
                {s.process.map((item) => (
                  <li key={item.step} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3">
                    <span className="font-display text-[0.8rem] font-semibold txt-4">{item.step}</span>
                    <div>
                      <h3 className="text-[0.92rem] font-semibold txt-1">{t(item.title)}</h3>
                      <p className="meta-text mt-0.5">{t(item.description)}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="stagger-item surface" style={{ "--stagger": 0.8 }}>
              <header className="block-head">
                <p className="eyebrow">{t(s.stackEyebrow)}</p>
                <h2 className="block-head-title">{t(s.stackTitle)}</h2>
              </header>
              <ul className="chip-row">
                {stack.map((name) => {
                  const icon = techIcon(name);
                  return (
                    <li key={name} className="chip">
                      {icon && <img src={icon} alt="" loading="lazy" decoding="async" />}
                      {name}
                    </li>
                  );
                })}
              </ul>
              <p className="meta-text mt-4 border-t border-[var(--line)] pt-4">
                {t(s.stackNote)}{" "}
                <Link to="/stack-experiencia" className="txt-2 underline decoration-white/25 underline-offset-4">
                  {t(s.stackLink)}
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
