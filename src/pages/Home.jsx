import { Link } from "react-router-dom";
import { useProjects } from "../data/useProjects.js";
import { coverFor } from "../data/screenshots.js";
import { statusModifier } from "../lib/status.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { strings } from "../i18n/strings.js";

// A home responde em 30 segundos: quem, o que faz, prova e para onde ir.
// Herói só de tipografia: o trabalho aparece logo abaixo, numa grade calma,
// sem um card disputando atenção com o nome.
const GRID_SLUGS = ["vistacloud", "mensageria-condominios", "comandafy", "easyfinance"];

function CaseCover({ project }) {
  const cover = coverFor(project);
  const isMobile = Boolean(project.mobileGalleryFolder && !project.desktopGalleryFolder);

  return (
    <span className="project-cover">
      {cover ? (
        <img
          src={cover}
          alt=""
          className={isMobile ? "project-cover-img project-cover-img--mobile" : "project-cover-img"}
          loading="lazy"
          decoding="async"
        />
      ) : (
        // Sem captura ainda: a capa vira a marca do produto, não um aviso de
        // "em breve": aviso passa recado de site inacabado.
        <span className="project-cover-empty">
          <span className="project-cover-mark">{project.name}</span>
          <span className="project-cover-mark-stack">{(project.stack || []).slice(0, 3).join(" · ")}</span>
        </span>
      )}
    </span>
  );
}

export default function Home() {
  const { t } = useLang();
  const projects = useProjects();
  const s = strings.home;
  const grid = GRID_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean);

  return (
    <section className="w-full pb-6 md:pb-10">
      <div className="grid gap-6 pt-24 md:gap-7 md:pt-36">
        <p className="stagger-item eyebrow" style={{ "--stagger": 0.4 }}>{t(s.eyebrow)}</p>

        <h1
          className="stagger-item font-display font-semibold leading-[0.98] tracking-[-0.03em] txt-1 text-[clamp(2.9rem,9.5vw,6.4rem)]"
          style={{ "--stagger": 0.2 }}
        >
          Guilherme Fugazza
        </h1>

        <p className="stagger-item lede !max-w-[42rem] md:text-[1.16rem]" style={{ "--stagger": 0.7 }}>
          {t(s.lede)}
        </p>

        <div className="stagger-item flex flex-wrap items-center gap-3" style={{ "--stagger": 0.9 }}>
          <Link to="/projetos" className="btn btn--solid">
            {t(s.ctaProjects)}
            <span aria-hidden="true">→</span>
          </Link>
          <Link to="/contato" className="btn btn--ghost">
            {t(s.ctaContact)}
          </Link>
        </div>

        <p className="stagger-item meta-text flex items-start gap-2" style={{ "--stagger": 1.05 }}>
          <span className="mt-[0.45em] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
          {t(s.now)}
        </p>
      </div>

      <dl
        className="stagger-item mt-12 grid gap-4 border-y border-[var(--line)] py-6 sm:grid-cols-3 md:mt-16 md:gap-6"
        style={{ "--stagger": 1.1 }}
      >
        {s.proof.map((item) => (
          <div key={item.value + t(item.label)} className="grid gap-1">
            <dd className="order-1 font-display text-[2rem] font-semibold leading-none txt-1">{item.value}</dd>
            <dt className="order-2 meta-text">{t(item.label)}</dt>
          </div>
        ))}
      </dl>

      <section className="pt-12 md:pt-16">
        <header className="mb-5 flex items-end justify-between gap-4">
          <div className="grid gap-1">
            <p className="eyebrow">{t(s.moreEyebrow)}</p>
            <h2 className="block-head-title">{t(s.moreTitle)}</h2>
          </div>
          <Link to="/projetos" className="meta-text shrink-0 transition hover:txt-1">
            {t(strings.common.all)} →
          </Link>
        </header>

        <ol className="grid gap-4 md:grid-cols-2 md:gap-5">
          {grid.map((project, index) => {
            const live = (project.links || []).find((l) => l.kind === "live");
            return (
              <li key={project.slug} className="stagger-item" style={{ "--stagger": 1.2 + index * 0.1 }}>
                <Link
                  to={`/projetos/${project.slug}`}
                  className="surface surface--interactive group flex h-full flex-col !p-0"
                  aria-label={`${t(strings.common.openCase)} ${project.name}`}
                >
                  <CaseCover project={project} />
                  <span className="grid gap-2 p-5 md:p-6">
                    <span className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`status-pill ${statusModifier(project.status)}`}>{project.status}</span>
                      {live ? (
                        <span className="meta-text">{live.href.replace(/^https?:\/\//, "")}</span>
                      ) : (
                        <span className="txt-4" aria-hidden="true">→</span>
                      )}
                    </span>
                    <span className="font-display text-[1.2rem] font-semibold leading-tight txt-1">{project.name}</span>
                    <span className="meta-text">{project.keyMessage}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="pt-12 md:pt-16">
        <header className="mb-5 grid gap-1">
          <p className="eyebrow">{t(s.strengthsEyebrow)}</p>
          <h2 className="block-head-title">{t(s.strengthsTitle)}</h2>
        </header>

        <ol className="grid gap-4 md:grid-cols-3 md:gap-5">
          {s.strengths.map((item, index) => (
            <li key={item.to} className="stagger-item" style={{ "--stagger": 1.5 + index * 0.1 }}>
              <Link to={item.to} className="surface surface--interactive flex h-full flex-col gap-3">
                <span className="font-display text-[0.8rem] font-semibold txt-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[1rem] font-semibold leading-snug txt-1">{t(item.title)}</span>
                <span className="meta-text">{t(item.text)}</span>
                <span className="meta-text mt-auto pt-2">{t(strings.common.seeInCase)} →</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="stagger-item surface mt-12 flex flex-col gap-5 md:mt-16 md:flex-row md:items-center md:justify-between"
        style={{ "--stagger": 1.8 }}
      >
        <div className="grid gap-1">
          <h2 className="block-head-title">{t(s.ctaTitle)}</h2>
          <p className="body-text">{t(s.ctaText)}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href="mailto:guilhermefugazza05@gmail.com" className="btn btn--solid">
            {t(s.ctaEmail)}
          </a>
          <Link to="/contato" className="btn btn--ghost">
            {t(s.ctaOther)}
          </Link>
        </div>
      </section>
    </section>
  );
}
