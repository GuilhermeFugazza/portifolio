import SectionHeader from "../components/SectionHeader.jsx";

const capabilityHighlights = [
  "Atuação ponta a ponta",
  "Clareza de arquitetura",
  "Entrega previsível"
];

const stackDomains = [
  {
    id: "01",
    title: "Front-end e Mobile",
    summary:
      "Interfaces web e apps mobile com experiência consistente, fluida e orientada ao uso real.",
    focus: [
      "Componentes reutilizáveis e padrão visual escalável.",
      "Organização de estado e fluxo de tela.",
      "Ajustes de performance para renderização estável."
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
      "APIs robustas para regra de negócio, integrações externas e crescimento sustentável do produto.",
    focus: [
      "Arquitetura por camadas com separação de responsabilidades.",
      "Autenticação, validação e controle de acesso.",
      "Contratos estáveis entre serviços e integrações."
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
      "Automações para reduzir tarefas manuais e manter operações mais rápidas e confiáveis.",
    focus: [
      "Scripts para rotinas operacionais recorrentes.",
      "Tratamento e validação de dados entre sistemas.",
      "Integrações via webhooks e fluxos de negócio."
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
      "Modelagem orientada ao negócio com foco em consistência, consulta eficiente e evolução segura.",
    focus: [
      "Estruturas relacionais claras e sustentáveis.",
      "Otimização de consultas críticas em produção.",
      "Migrações e versionamento sem interrupção desnecessária."
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
      "Deploy e operação com foco em estabilidade, segurança e previsibilidade de release.",
    focus: [
      "Configuração de ambientes Linux para web e APIs.",
      "Camada de edge, cache e proteção básica.",
      "Pipeline de entrega para publicação consistente."
    ],
    tools: [
      { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare/F38020" }
    ]
  }
];

export default function StackExperience() {
  return (
    <section className="w-full py-5 md:py-8">
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
      </article>
    </section>
  );
}
