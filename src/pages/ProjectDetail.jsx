import { Link, useParams } from "react-router-dom";
import SectionHeader from "../components/SectionHeader.jsx";
import IphoneMockupCarousel from "../components/IphoneMockupCarousel.jsx";
import BrowserMockupGallery from "../components/BrowserMockupGallery.jsx";
import { useProjects } from "../data/useProjects.js";
import { galleryFor } from "../data/screenshots.js";
import { techIcon } from "../data/techIcons.js";
import { statusModifier } from "../lib/status.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { strings } from "../i18n/strings.js";

function Block({ eyebrow, title, children, stagger, className = "" }) {
  return (
    <section className={`stagger-item surface ${className}`.trim()} style={{ "--stagger": stagger }}>
      <header className="block-head">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="block-head-title">{title}</h2>
      </header>
      {children}
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t, lang } = useLang();
  const projects = useProjects();
  const s = strings.detail;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="pb-16">
        <SectionHeader title={t(s.notFound)} description="404" />
        <p className="body-text">{t(s.notFoundText)}</p>
        <Link to="/projetos" className="btn btn--primary mt-6">
          {t(s.backAll)}
        </Link>
      </section>
    );
  }

  const gallery = galleryFor(project, lang);
  const isDesktopGallery = Boolean(project.desktopGalleryFolder);
  const projectLinks = project.links || [];
  const liveLink = projectLinks.find((link) => link.kind === "live");
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const groupLabel =
    project.group === "produto" ? t(strings.common.ownProduct)
    : project.group === "cliente" ? t(strings.common.clientProject)
    : "";

  return (
    <section className="w-full pb-6 md:pb-10">
      <header className="page-head">
        <div className="stagger-item flex flex-wrap items-center gap-3" style={{ "--stagger": 0.4 }}>
          <Link to="/projetos" className="meta-text transition hover:txt-1">
            {t(s.backCrumb)}
          </Link>
          <span className="txt-4" aria-hidden="true">/</span>
          <span className={`status-pill ${statusModifier(project.status)}`}>{project.status}</span>
          {groupLabel && <span className="meta-text">{groupLabel}</span>}
        </div>

        <h1 className="stagger-item page-head-title" style={{ "--stagger": 0.2 }}>
          {project.name}
        </h1>

        <p className="stagger-item lede !max-w-[52rem]" style={{ "--stagger": 0.6 }}>
          {project.shortDescription}
        </p>

        <div className="stagger-item flex flex-wrap items-center gap-2 pt-1" style={{ "--stagger": 0.8 }}>
          {liveLink && (
            <a href={liveLink.href} target="_blank" rel="noreferrer noopener" className="btn btn--primary">
              {liveLink.label}
              <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.repoNote && <span className="meta-text">{project.repoNote}</span>}
        </div>
      </header>

      <div className="grid gap-5 md:gap-6">
        <div className="grid gap-5 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-6">
          <Block eyebrow={t(s.context)} title={t(s.contextTitle)} stagger={0.5}>
            <p className="body-text">{project.overview}</p>
          </Block>

          <Block eyebrow={t(s.focus)} title={project.keyMessage} stagger={0.65}>
            <ul className="marked-list">
              {project.keyHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Block>
        </div>

        <Block eyebrow={t(s.visual)} title={project.visualProofTitle || t(s.gallery)} stagger={0.8}>
          {gallery.length > 0 ? (
            <div>
              <p className="body-text mb-5">{project.visualProofDescription}</p>
              {isDesktopGallery ? (
                <BrowserMockupGallery
                  images={gallery}
                  projectSlug={project.desktopGalleryFolder}
                  addressLabel={liveLink ? liveLink.href.replace(/^https?:\/\//, "") : ""}
                  stagger={0.9}
                />
              ) : (
                <IphoneMockupCarousel images={gallery} projectSlug={project.mobileGalleryFolder} stagger={0.9} />
              )}
            </div>
          ) : (
            <p className="body-text">{project.visualProofDescription}</p>
          )}
        </Block>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <Block eyebrow={t(s.problemEyebrow)} title={t(s.problemTitle)} stagger={1.0}>
            <p className="body-text">{project.problem}</p>
          </Block>
          <Block eyebrow={t(s.solutionEyebrow)} title={t(s.solutionTitle)} stagger={1.1}>
            <p className="body-text">{project.solution}</p>
          </Block>
        </div>

        <div className="grid gap-5 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-6">
          <Block eyebrow={t(s.execEyebrow)} title={t(s.execTitle)} stagger={1.2}>
            <ul className="marked-list">
              {project.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Block>

          <div className="grid gap-5 md:gap-6">
            <Block eyebrow={t(s.stackEyebrow)} title={t(s.stackTitle)} stagger={1.3}>
              <ul className="chip-row">
                {project.techStack.map((item) => {
                  const icon = techIcon(item);
                  return (
                    <li key={item} className="chip">
                      {icon && <img src={icon} alt="" loading="lazy" decoding="async" />}
                      {item}
                    </li>
                  );
                })}
              </ul>
              <p className="meta-text mt-4 border-t border-[var(--line)] pt-4">{project.statusDetail}</p>
            </Block>

            {project.architecturalDecisions?.length > 0 && (
              <Block eyebrow={t(s.decisionsEyebrow)} title={t(s.decisionsTitle)} stagger={1.4}>
                <ul className="marked-list marked-list--quiet">
                  {project.architecturalDecisions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Block>
            )}
          </div>
        </div>

        <nav
          className="stagger-item flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)] pt-6"
          style={{ "--stagger": 1.5 }}
          aria-label={t(s.navLabel)}
        >
          <Link to="/projetos" className="btn btn--ghost">
            {t(s.backAll)}
          </Link>
          <Link to={`/projetos/${nextProject.slug}`} className="btn btn--primary">
            {t(s.next)}: {nextProject.name}
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </section>
  );
}
