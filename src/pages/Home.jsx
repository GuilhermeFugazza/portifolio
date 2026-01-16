import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="space-y-16">
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Desenvolvedor Full Stack
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Sistemas, APIs e aplicacoes mobile que resolvem problemas reais.
          </h1>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            Atuo com produtos digitais do planejamento ao deploy, com foco em
            performance, escalabilidade e entregas consistentes para negocios que
            precisam de tecnologia aplicada.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/projetos"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-accentDark"
            >
              Ver projetos
            </Link>
            <Link
              to="/contato"
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
            >
              Falar sobre um projeto
            </Link>
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-black/10 bg-white/80 p-8 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Visao rapida
          </h2>
          <div className="space-y-4 text-sm text-muted">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
              <p>Arquitetura full stack com foco em APIs REST confiaveis.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
              <p>Experiencia em produtos mobile, web e automacoes.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
              <p>Entrega orientada a resultados, com processos claros.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-black/10 bg-white/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Foco
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold text-ink">
            Produtos de nicho
          </h3>
          <p className="mt-3 text-sm text-muted">
            Solucoes sob medida para negocios que precisam de sistemas
            especializados.
          </p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Diferencial
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold text-ink">
            Visao ponta a ponta
          </h3>
          <p className="mt-3 text-sm text-muted">
            Da arquitetura ao deploy, garantindo performance e manutencao.
          </p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Entrega
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold text-ink">
            Roadmap claro
          </h3>
          <p className="mt-3 text-sm text-muted">
            Planejamento com metas e validacao constante com o cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
