import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="space-y-4">
      <p
        className="stagger-item text-xs font-semibold uppercase tracking-[0.3em] text-muted"
        style={{ "--stagger": 0.6 }}
      >
        404
      </p>
      <h1
        className="stagger-item font-display text-3xl font-semibold text-ink"
        style={{ "--stagger": 0.2 }}
      >
        Pagina nao encontrada
      </h1>
      <p className="stagger-item text-sm text-muted" style={{ "--stagger": 1 }}>
        Volte para a home ou explore os projetos disponiveis.
      </p>
      <Link
        to="/"
        className="stagger-item inline-flex items-center rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink"
        style={{ "--stagger": 1.6 }}
      >
        Ir para home
      </Link>
    </section>
  );
}
