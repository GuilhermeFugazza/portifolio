import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
        404
      </p>
      <h1 className="font-display text-3xl font-semibold text-ink">
        Pagina nao encontrada
      </h1>
      <p className="text-sm text-muted">
        Volte para a home ou explore os projetos disponiveis.
      </p>
      <Link
        to="/"
        className="inline-flex items-center rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink"
      >
        Ir para home
      </Link>
    </section>
  );
}
