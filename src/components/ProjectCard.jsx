import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-panel/80 p-6 shadow-soft">
      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {project.status}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold text-ink">
            {project.name}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-muted">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-panelSoft px-3 py-1 text-xs font-medium text-ink"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <Link
        to={`/projetos/${project.slug}`}
        className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-ink transition hover:border-white/40"
      >
        Ver detalhes
      </Link>
    </div>
  );
}
