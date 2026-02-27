export const projects = [
  {
    slug: "aplicativo-concurseiros",
    group: "autoral",
    name: "App de Concurseiros",
    shortDescription:
      "Caso de estudo autoral focado em arquitetura mobile escalável, sincronização offline e organização de fluxo de estudo.",
    status: "Projeto autoral - laboratório de arquitetura e produto",
    stack: ["React Native", "Expo", "Node.js", "PostgreSQL"],
    overview:
      "Projeto autoral usado como laboratório técnico para validar decisões de arquitetura mobile, fluxo de estudo orientado por dados e evolução de APIs de suporte.",
    problem:
      "O desafio foi estruturar um app de estudo com experiência contínua mesmo em conectividade instável, sem perder consistência de dados e previsibilidade de evolução.",
    solution:
      "A solução foi desenhada com separação clara de camadas, sincronização incremental e API preparada para expansão de módulos sem acoplamento excessivo.",
    responsibilities: [
      "Definição da arquitetura mobile e organização modular por contexto de domínio",
      "Implementação de API REST para sessões de estudo, progresso e sincronização",
      "Modelagem relacional para histórico de desempenho e metas por disciplina",
      "Estruturação de fluxo offline-first com reconciliação de dados",
      "Ajustes de experiência para manter previsibilidade no uso diário"
    ],
    techStack: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Cloudflare"
    ],
    mobileGalleryFolder: "Study",
    statusDetail:
      "Projeto autoral mantido como laboratório técnico para validar arquitetura, fluxo de produto e evolução de integrações.",
    keyMessage:
      "Caso autoral orientado a arquitetura mobile escalável e consistência de dados.",
    keyHighlights: [
      "Fluxo de estudo desenhado com foco em continuidade operacional.",
      "Estrutura técnica preparada para expansão incremental de recursos.",
      "Decisões guiadas por separação de domínio e previsibilidade de manutenção."
    ],
    architecturalDecisions: [
      "Estrutura modular para escalabilidade futura.",
      "Sincronização offline-first para continuidade de uso.",
      "Separação clara entre camada de domínio e apresentação.",
      "API estruturada para expansão de recursos."
    ]
  },
  {
    slug: "sistemas-empresariais-nda",
    group: "nda",
    name: "Sistemas empresariais sob NDA",
    shortDescription:
      "Atuação em desenvolvimento e arquitetura de sistemas de gestão, integrações financeiras, APIs multi-tenant e automações empresariais sob contrato de confidencialidade.",
    status: "Experiência profissional sob NDA",
    stack: [
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Multi-tenant",
      "Linux",
      "Integrações financeiras",
      "n8n",
      "Cloudflare"
    ],
    overview:
      "Projetos empresariais executados sob confidencialidade, com foco em arquitetura de sistemas de gestão, integração entre serviços críticos e sustentação operacional.",
    problem:
      "Ambientes corporativos com múltiplas regras de negócio e integrações sensíveis exigiam arquitetura estável, isolamento de dados e rastreabilidade de operações.",
    solution:
      "A entrega foi conduzida com arquitetura por camadas, APIs versionadas, modelagem relacional orientada ao domínio e rotinas automatizadas para reduzir falhas operacionais.",
    responsibilities: [
      "Definição e implementação de arquitetura multi-tenant com isolamento por cliente",
      "Construção de integrações financeiras com autenticação segura e validação transacional",
      "Estruturação de bancos PostgreSQL para crescimento com performance previsível",
      "Automação de rotinas operacionais com n8n e scripts Python",
      "Deploy e sustentação de APIs em ambientes Linux com Cloudflare"
    ],
    techStack: [
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Multi-tenant",
      "Linux",
      "Integrações financeiras",
      "n8n",
      "Cloudflare"
    ],
    mobileGalleryFolder: "",
    statusDetail:
      "Escopo técnico executado em ambientes reais sob contratos de confidencialidade (NDA), sem exposição pública de dados de cliente.",
    ctaLabel: "Ver escopo técnico",
    keyMessage:
      "Arquitetura e desenvolvimento de sistemas críticos sob confidencialidade.",
    keyHighlights: [
      "Isolamento multi-tenant e controle de acesso orientado por contexto.",
      "Integrações financeiras com autenticação segura e validação de consistência.",
      "Operação sustentada com automação e observabilidade em ambiente Linux."
    ],
    visualProofTitle: "Contexto de confidencialidade",
    visualProofDescription:
      "Este case representa atuação profissional sob NDA. Por confidencialidade contratual, não há publicação de telas, fluxos internos ou dados operacionais."
  }
];
