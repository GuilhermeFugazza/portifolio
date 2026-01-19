import { Link, useParams } from "react-router-dom";
import SectionHeader from "../components/SectionHeader.jsx";
import { projects } from "../data/projects.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="space-y-6">
        <SectionHeader title="Projeto nao encontrado" description="Erro 404" />
        <p className="text-sm text-muted">
          Nao foi possivel localizar o projeto solicitado.
        </p>
        <Link
          to="/projetos"
          className="inline-flex items-center rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold text-ink"
        >
          Voltar para projetos
        </Link>
      </section>
    );
  }

  return (
    <section className="space-y-10">
      <div className="stagger-item space-y-4" style={{ "--stagger": 0.6 }}>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {project.status}
        </p>
        <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          {project.name}
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          {project.overview}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div
          className="stagger-item rounded-2xl border border-white/10 bg-panel/80 p-6 shadow-soft"
          style={{ "--stagger": 1.1 }}
        >
          <h2 className="font-display text-lg font-semibold text-ink">
            Problema
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {project.problem}
          </p>
        </div>
        <div
          className="stagger-item rounded-2xl border border-white/10 bg-panel/80 p-6 shadow-soft"
          style={{ "--stagger": 1.6 }}
        >
          <h2 className="font-display text-lg font-semibold text-ink">
            Solucao
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {project.solution}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div
          className="stagger-item rounded-2xl border border-white/10 bg-panel/80 p-6 shadow-soft"
          style={{ "--stagger": 0.9 }}
        >
          <h2 className="font-display text-lg font-semibold text-ink">
            Responsabilidades tecnicas
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div
          className="stagger-item rounded-2xl border border-white/10 bg-panel/80 p-6 shadow-soft"
          style={{ "--stagger": 1.4 }}
        >
          <h2 className="font-display text-lg font-semibold text-ink">
            Stack utilizada
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-panelSoft px-3 py-1 text-xs font-medium text-ink"
              >
                {item}
              </span>
            ))}
          </div>
          <h3 className="mt-6 text-sm font-semibold text-ink">Status</h3>
          <p className="mt-2 text-sm text-muted">{project.statusDetail}</p>
        </div>
      </div>

      <Link
        className="stagger-item inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-ink transition hover:border-white/40"
        style={{ "--stagger": 2.1 }}
        to="/projetos"
      >
        Voltar para projetos
      </Link>
    </section>
  );
}
