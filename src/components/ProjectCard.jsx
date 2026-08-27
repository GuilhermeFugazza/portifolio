import { Link } from "react-router-dom";
import { coverFor } from "../data/screenshots.js";
import { techIcon } from "../data/techIcons.js";
import { statusModifier } from "../lib/status.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { strings } from "../i18n/strings.js";

const staggerOffsets = [0.5, 0.75, 1.0, 1.25];

export default function ProjectCard({ project, index = 0 }) {
  const { t } = useLang();
  const stagger = staggerOffsets[index % staggerOffsets.length];
  const cover = coverFor(project);
  const isMobileCover = Boolean(project.mobileGalleryFolder && !project.desktopGalleryFolder);
  const liveLink = (project.links || []).find((link) => link.kind === "live");
  const groupLabel =
    project.group === "produto" ? t(strings.common.ownProduct)
    : project.group === "cliente" ? t(strings.common.clientProject)
    : "";

  return (
    <li className="stagger-item" style={{ "--stagger": stagger }}>
      <article className="surface surface--interactive flex h-full flex-col !p-0">
        <Link
          to={`/projetos/${project.slug}`}
          className="project-cover"
          aria-label={`${t(strings.common.openCase)} ${project.name}`}
        >
          {cover ? (
            <img
              src={cover}
              alt=""
              className={isMobileCover ? "project-cover-img project-cover-img--mobile" : "project-cover-img"}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span className="project-cover-empty">
              <span className="eyebrow eyebrow--quiet">{t(strings.common.screensPending)}</span>
            </span>
          )}
        </Link>

        <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className={`status-pill ${statusModifier(project.status)}`}>{project.status}</span>
            {groupLabel && <span className="meta-text">{groupLabel}</span>}
          </div>

          <div className="grid gap-2">
            <h3 className="font-display text-[1.45rem] font-semibold leading-[1.1] tracking-[-0.015em] txt-1">
              <Link to={`/projetos/${project.slug}`}>{project.name}</Link>
            </h3>
            <p className="body-text">{project.shortDescription}</p>
          </div>

          <ul className="chip-row" aria-label={`${t(strings.common.techOf)} ${project.name}`}>
            {project.stack.map((item) => {
              const icon = techIcon(item);
              return (
                <li key={item} className="chip" title={item}>
                  {icon && <img src={icon} alt="" loading="lazy" decoding="async" />}
                  {item}
                </li>
              );
            })}
          </ul>

          <div className="mt-auto flex flex-wrap gap-2 pt-1">
            <Link to={`/projetos/${project.slug}`} className="btn btn--primary">
              {t(strings.common.seeCase)}
              <span aria-hidden="true">→</span>
            </Link>
            {liveLink && (
              <a href={liveLink.href} target="_blank" rel="noreferrer noopener" className="btn btn--ghost">
                {liveLink.label}
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </li>
  );
}
