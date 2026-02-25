export const projects = [
  {
    slug: "aplicativo-concurseiros",
    name: "Aplicativo para Concurseiros (SaaS Mobile)",
    shortDescription:
      "Plataforma mobile para planejamento de estudos, simulados e acompanhamento de desempenho em tempo real.",
    status: "Em produção",
    stack: ["React Native", "Expo", "Node", "PostgreSQL"],
    overview:
      "SaaS mobile criado para concurseiros que precisam organizar a rotina de estudos, registrar resultados e manter consistência diária. O projeto prioriza performance, experiência offline e integração com APIs de conteúdo.",
    problem:
      "A maioria dos estudantes utiliza planilhas desconectadas e aplicativos genéricos, o que dificulta manter um plano de estudos consistente e acompanhar a evolução com dados confiáveis.",
    solution:
      "A solução combina cronograma inteligente, simulados com estatísticas de acertos e um painel de progresso por disciplina. O app integra lembretes, metas semanais e dashboard com indicadores claros.",
    responsibilities: [
      "Definição da arquitetura do app e organização dos módulos principais",
      "Construção das APIs REST e integrações com notificações",
      "Modelagem do banco e processos de sincronização",
      "Implementação de telas críticas com foco em usabilidade",
      "Automações internas para suporte e onboarding"
    ],
    techStack: [
      "React Native",
      "Expo",
      "Node",
      "Express",
      "PostgreSQL",
      "Redis",
      "Cloudflare"
    ],
    mobileGalleryFolder: "Study",
    statusDetail:
      "Produto ativo com base paga e roadmap focado em novos simulados e recomendações personalizadas."
  },
  {
    slug: "erp-cafeterias",
    name: "ERP Vertical para Cafeterias",
    shortDescription:
      "Sistema interno para controle de estoque, pedidos e rotinas administrativas em cafeterias.",
    status: "Em desenvolvimento",
    stack: ["React", "Node", "SQLite", "n8n"],
    overview:
      "ERP enxuto para operar rotinas diárias de uma rede de cafeterias, com foco em padronizar processos e reduzir perdas de estoque.",
    problem:
      "Gestão de insumos e pedidos feita manualmente gerava inconsistências e falta de previsibilidade.",
    solution:
      "Dashboard centralizado com alertas de reposição, controle de compras e fluxo de atendimento simplificado.",
    responsibilities: [
      "Mapeamento de processos do negócio",
      "Construção do painel administrativo",
      "Automações no n8n para alertas de compras"
    ],
    techStack: ["React", "Node", "SQLite", "n8n"],
    mobileGalleryFolder: "",
    statusDetail:
      "Projeto piloto com duas unidades, validando processos de estoque e vendas."
  },
  {
    slug: "gestao-ecommerce",
    name: "Sistema de Gestão de E-commerce (multi-tenant)",
    shortDescription:
      "Plataforma para lojas virtuais com controle de catálogo, pedidos e financeiro.",
    status: "Em produção",
    stack: ["React", "Node", "PostgreSQL", "Linux"],
    overview:
      "Plataforma multi-tenant para gerenciamento de operações de e-commerce, com foco em escalabilidade e separação de dados por loja.",
    problem:
      "Lojas pequenas precisam de um sistema único para catálogo, pedidos e financeiro, sem os custos de plataformas grandes.",
    solution:
      "Sistema modular com painel por loja, gestão de usuários e integração com gateways de pagamento.",
    responsibilities: [
      "Arquitetura multi-tenant",
      "APIs de catálogo e pedidos",
      "Monitoramento e deploy em Linux"
    ],
    techStack: ["React", "Node", "PostgreSQL", "Linux"],
    mobileGalleryFolder: "",
    statusDetail:
      "Em uso por lojas locais, com suporte a novos módulos financeiros."
  }
];
