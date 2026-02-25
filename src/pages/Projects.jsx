import SectionHeader from "../components/SectionHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section className="w-full py-5 md:py-8">
      <SectionHeader
        title="Projetos"
        description="Cases reais"
        className="mb-5 md:mb-6"
        descriptionClassName="text-[0.68rem] md:text-[0.72rem]"
        titleClassName="text-[2.5rem] md:text-[3rem] leading-[1.02]"
      />

      <article className="mx-auto w-full max-w-[1040px]">
        <ol className="divide-y divide-white/[0.09] border-y border-white/[0.09]">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </ol>
      </article>
    </section>
  );
}
