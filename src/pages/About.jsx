import SectionHeader from "../components/SectionHeader.jsx";

export default function About() {
  return (
    <section>
      <SectionHeader
        title="Sobre"
        description="Perfil profissional"
      />
      <div className="space-y-8">
        <div className="space-y-3">
          <h3 className="font-display text-lg font-semibold text-ink">
            Introducao
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            Sou desenvolvedor Full Stack com formacao tecnica em Informatica
            pelo Instituto Federal Catarinense e experiencia pratica no
            desenvolvimento de sistemas reais em ambiente de producao.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-lg font-semibold text-ink">
            Experiencia pratica
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            Atuo no desenvolvimento de aplicacoes web e mobile, APIs e
            automacoes, participando desde a definicao da arquitetura ate a
            entrega e manutencao dos sistemas. Tenho experiencia com produtos
            SaaS, sistemas multi-tenant, integracoes com APIs externas e
            implementacao de regras de negocio complexas.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-lg font-semibold text-ink">
            Responsabilidades tecnicas
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            No meu trabalho atual, sou responsavel pela criacao e evolucao de
            sistemas internos, integracoes financeiras, automacoes e aplicacoes
            mobile. Tambem auxilio um desenvolvedor junior, organizando tarefas,
            revisando entregas e apoiando decisoes tecnicas.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-lg font-semibold text-ink">
            Foco tecnico
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            Tenho maior afinidade com desenvolvimento de APIs, estruturacao de
            banco de dados, automacoes e aplicacoes mobile. Possuo experiencia
            com infraestrutura Linux e cloud, atuando na configuracao e
            manutencao de ambientes, embora nao seja minha especialidade
            principal.
          </p>
        </div>
      </div>
    </section>
  );
}
