import SectionHeader from "../components/SectionHeader.jsx";

export default function About() {
  return (
    <section>
      <SectionHeader
        title="Sobre"
        description="Perfil profissional"
      />
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-sm leading-relaxed text-muted">
          <p>
            Formacao tecnica no Instituto Federal, com base solida em
            desenvolvimento de software e infraestrutura. Atuo no ciclo completo
            de produtos digitais, priorizando arquitetura limpa e manutencao a
            longo prazo.
          </p>
          <p>
            Tenho experiencia pratica com sistemas reais em operacao, incluindo
            APIs REST, plataformas web, mobile e automacoes internas para reduzir
            tarefas repetitivas.
          </p>
          <p>
            Tambem presto apoio a desenvolvedores juniores, revisando codigo,
            alinhando boas praticas e ajudando no planejamento de entregas.
          </p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-soft">
          <h3 className="font-display text-lg font-semibold text-ink">
            Areas de atuacao
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>Arquitetura e desenvolvimento full stack.</li>
            <li>Aplicacoes mobile com foco em experiencia do usuario.</li>
            <li>Automacoes e integracoes de processos.</li>
            <li>Documentacao tecnica e suporte a times.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
