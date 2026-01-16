import SectionHeader from "../components/SectionHeader.jsx";

const stackItems = [
  {
    name: "React, React Native e Expo",
    detail:
      "Experiencia pratica no desenvolvimento de interfaces web e mobile, com foco em performance e consistencia visual."
  },
  {
    name: "Node e APIs REST",
    detail:
      "Criacao de APIs seguras, organizacao de camadas e integracao com servicos externos."
  },
  {
    name: "Python",
    detail:
      "Automacoes, scripts internos e suporte a pipelines de dados quando necessario."
  },
  {
    name: "Banco de dados",
    detail:
      "Modelagem e otimizacao de PostgreSQL e SQLite para sistemas de negocio."
  },
  {
    name: "n8n",
    detail:
      "Automacoes operacionais para alertas, onboarding e tarefas de suporte."
  },
  {
    name: "Linux e Cloudflare",
    detail:
      "Deploy, monitoramento e configuracoes de edge para performance e seguranca."
  }
];

export default function StackExperience() {
  return (
    <section>
      <SectionHeader
        title="Stack & Experiencia"
        description="Tecnologias" 
      />
      <div className="grid gap-6 md:grid-cols-2">
        {stackItems.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-soft"
          >
            <h3 className="font-display text-lg font-semibold text-ink">
              {item.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
