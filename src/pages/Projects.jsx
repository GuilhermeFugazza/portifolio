import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { useProjects } from "../data/useProjects.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { strings } from "../i18n/strings.js";

export default function Projects() {
  const { t } = useLang();
  const projects = useProjects();
  const live = projects.filter((p) => /produ/i.test(p.status)).length;
  const s = strings.projects;

  return (
    <section className="w-full pb-6 md:pb-10">
      <SectionHeader
        title={t(s.title)}
        description={t(s.eyebrow)}
        lede={t(s.lede)}
        aside={
          <dl className="grid grid-cols-2 gap-x-8 gap-y-1 text-right md:text-left">
            <div>
              <dt className="eyebrow eyebrow--quiet">{t(s.countSystems)}</dt>
              <dd className="font-display text-[1.8rem] font-semibold leading-none txt-1">{projects.length}</dd>
            </div>
            <div>
              <dt className="eyebrow eyebrow--quiet">{t(s.countLive)}</dt>
              <dd className="font-display text-[1.8rem] font-semibold leading-none txt-1">{live}</dd>
            </div>
          </dl>
        }
      />

      <ol className="grid gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </ol>

      <p className="stagger-item mt-8 max-w-[46rem] meta-text" style={{ "--stagger": 1.5 }}>
        {t(s.ndaNote)}{" "}
        <Link to="/sobre" className="txt-2 underline decoration-white/25 underline-offset-4 transition hover:txt-1">
          {t(s.ndaLink)}
        </Link>
        .
      </p>
    </section>
  );
}
