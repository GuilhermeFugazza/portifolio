import SectionHeader from "../components/SectionHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  const authorialProjects = projects.filter((project) => project.group === "autoral");
  const ndaProjects = projects.filter((project) => project.group === "nda");

  return (
    <section className="w-full pb-10 pt-14 md:pb-12 md:pt-0">
      <SectionHeader
        title="Projetos"
        description="Projetos autorais e experiência profissional"
        className="mb-5 md:mb-6"
        descriptionClassName="text-[0.68rem] md:text-[0.72rem]"
        titleClassName="text-[2.5rem] md:text-[3rem] leading-[1.02]"
      />

      <div className="mx-auto w-full max-w-[1040px] space-y-8">
        <article>
          <header className="mb-3">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-burnt/90">
              Projetos autorais
            </p>
          </header>
          <ol className="divide-y divide-white/[0.09] border-y border-white/[0.09]">
            {authorialProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </ol>
        </article>

        <article>
          <header className="mb-3">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-burnt/90">
              Experiência profissional sob NDA
            </p>
          </header>
          <ol className="divide-y divide-white/[0.09] border-y border-white/[0.09]">
            {ndaProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index + authorialProjects.length}
              />
            ))}
          </ol>
        </article>
      </div>
    </section>
  );
}
