import SectionHeader from "../components/SectionHeader.jsx";

const capabilityHighlights = [
  "Áreas de atuação predominante",
  "Arquitetura por camadas",
  "Integrações empresariais escaláveis"
];

const stackDomains = [
  {
    id: "01",
    title: "Front-end e Mobile",
    summary:
      "Interfaces web e mobile conectadas ao domínio do negócio, com foco em previsibilidade de fluxo e evolução contínua.",
    focus: [
      "Estrutura de componentes reutilizáveis para manutenção incremental.",
      "Organização de estado por contexto funcional e fluxo de uso.",
      "Controle de renderização e performance para cenários de operação diária."
    ],
    tools: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Expo", icon: "https://cdn.simpleicons.org/expo/FFFFFF" },
      { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" }
    ]
  },
  {
    id: "02",
    title: "Back-end e APIs",
    summary:
      "Serviços e APIs para regras de negócio críticas, integração entre sistemas e sustentação de crescimento.",
    focus: [
      "Arquitetura por camadas com separação de responsabilidades.",
      "Autenticação baseada em token, validação e controle de acesso.",
      "Controle de concorrência e contratos REST estáveis entre serviços."
    ],
    tools: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
      { name: "REST APIs", icon: "https://cdn.simpleicons.org/openapiinitiative/6BA539" },
      { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare/F38020" }
    ]
  },
  {
    id: "03",
    title: "Python e Automações",
    summary:
      "Automações orientadas a operação para reduzir intervenção manual e aumentar confiabilidade de processos.",
    focus: [
      "Scripts para rotinas empresariais recorrentes e monitoráveis.",
      "Tratamento de dados com validação entre múltiplas origens.",
      "Integração via webhooks e orquestração de fluxos no n8n."
    ],
    tools: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
      { name: "Webhooks", icon: "https://cdn.simpleicons.org/zapier/FF4F00" }
    ]
  },
  {
    id: "04",
    title: "Banco de Dados",
    summary:
      "Modelagem relacional orientada a domínio com foco em consistência, consulta eficiente e evolução segura.",
    focus: [
      "Estruturas relacionais claras para isolamento e rastreabilidade.",
      "Otimização de consultas críticas com análise de plano de execução.",
      "Migrações versionadas com baixo risco de interrupção operacional."
    ],
    tools: [
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite/0F80CC" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748" }
    ]
  },
  {
    id: "05",
    title: "Infraestrutura e Entrega",
    summary:
      "Deploy e sustentação com foco em estabilidade, segurança e previsibilidade de release.",
    focus: [
      "Configuração de ambientes Linux para web e APIs.",
      "Camada de edge, cache e proteção de tráfego com Cloudflare.",
      "Pipeline de entrega para publicação consistente de serviços."
    ],
    tools: [
      { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare/F38020" }
    ]
  }
];

const solvedChallenges = [
  "Implementação de arquitetura multi-tenant com isolamento de dados",
  "Integração com APIs financeiras sob autenticação segura",
  "Estruturação de banco de dados para crescimento escalável",
  "Criação de fluxos automatizados com n8n e Python",
  "Deploy e configuração de ambientes Linux para APIs",
  "Otimização de consultas críticas em PostgreSQL"
];

export default function StackExperience() {
  return (
    <section className="w-full pb-10 pt-14 md:pb-12 md:pt-0">
      <SectionHeader
        title="Stack & Experiência"
        description="Tecnologias"
        className="mb-5 md:mb-6"
      />

      <article className="stagger-item mx-auto w-full max-w-[980px]" style={{ "--stagger": 0.45 }}>
        <p className="stack-principles-line">
          {capabilityHighlights.join(" · ")}
        </p>

        <ol className="mt-5 divide-y divide-white/10 border-y border-white/10">
          {stackDomains.map((domain, index) => (
            <li
              key={domain.title}
              className="stagger-item py-4 md:py-5"
              style={{ "--stagger": 0.6 + index * 0.12 }}
            >
              <div className="grid gap-3 md:grid-cols-[13.5rem_minmax(0,1fr)] md:gap-6">
                <header>
                  <p className="text-[0.63rem] font-semibold uppercase tracking-[0.14em] text-burnt/90">
                    Domínio {domain.id}
                  </p>
                  <h3 className="mt-1 font-display text-[1.28rem] font-semibold leading-tight text-ink md:text-[1.48rem]">
                    {domain.title}
                  </h3>
                </header>

                <div>
                  <p className="text-[0.9rem] leading-relaxed text-ink/82 md:text-[0.95rem]">
                    {domain.summary}
                  </p>

                  <ul className="mt-2 grid gap-1.5">
                    {domain.focus.map((item) => (
                      <li key={item} className="text-[0.82rem] leading-relaxed text-ink/78 md:text-[0.85rem]">
                        - {item}
                      </li>
                    ))}
                  </ul>

                  <ul className="stack-tool-list">
                    {domain.tools.map((tool) => (
                      <li key={tool.name}>
                        <span className="stack-tool-chip" title={tool.name}>
                          <span className="stack-tool-icon-wrap">
                            <img
                              src={tool.icon}
                              alt={`Logo ${tool.name}`}
                              className="stack-tool-icon"
                              loading="lazy"
                              decoding="async"
                            />
                          </span>
                          <span className="stack-tool-name">{tool.name}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <section className="stagger-item mt-8" style={{ "--stagger": 1.35 }}>
          <header>
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-burnt/90">
              Escopo técnico
            </p>
            <h2 className="mt-1 font-display text-[1.28rem] leading-tight text-ink md:text-[1.42rem]">
              Desafios técnicos já resolvidos
            </h2>
          </header>

          <ul className="mt-3 divide-y divide-white/10 border-y border-white/10">
            {solvedChallenges.map((item) => (
              <li key={item} className="py-3 text-[0.84rem] leading-relaxed text-ink/78 md:text-[0.88rem]">
                - {item}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </section>
  );
}
