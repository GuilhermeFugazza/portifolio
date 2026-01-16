export const projects = [
  {
    slug: "aplicativo-concurseiros",
    name: "Aplicativo para Concurseiros (SaaS Mobile)",
    shortDescription:
      "Plataforma mobile para planejamento de estudos, simulados e acompanhamento de desempenho em tempo real.",
    status: "Em producao",
    stack: ["React Native", "Expo", "Node", "PostgreSQL"],
    overview:
      "SaaS mobile criado para concurseiros que precisam organizar rotina de estudos, registrar resultados e manter consistencia diaria. O projeto prioriza performance, experiencia offline e integracao com APIs de conteudo.",
    problem:
      "A maioria dos estudantes utiliza planilhas desconectadas e aplicativos genericos, o que dificulta manter um plano de estudos consistente e acompanhar evolucao com dados confiaveis.",
    solution:
      "A solucao combina cronograma inteligente, simulados com estatisticas de acertos e um painel de progresso por disciplina. O app integra lembretes, metas semanais e dashboard com indicadores claros.",
    responsibilities: [
      "Definicao da arquitetura do app e organizacao dos modulos principais",
      "Construcao das APIs REST e integracoes com notificacoes",
      "Modelagem do banco e processos de sincronizacao",
      "Implementacao de telas criticas com foco em usabilidade",
      "Automacoes internas para suporte e onboarding"
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
    statusDetail:
      "Produto ativo com base paga e roadmap focado em novos simulados e recomendacoes personalizadas."
  },
  {
    slug: "erp-cafeterias",
    name: "ERP Vertical para Cafeterias",
    shortDescription:
      "Sistema interno para controle de estoque, pedidos e rotinas administrativas em cafeterias.",
    status: "Em desenvolvimento",
    stack: ["React", "Node", "SQLite", "n8n"],
    overview:
      "ERP enxuto para operar rotinas diarias de uma rede de cafeterias, com foco em padronizar processos e reduzir perdas de estoque.",
    problem:
      "Gestao de insumos e pedidos feita manualmente gerava inconsistencias e falta de previsibilidade.",
    solution:
      "Dashboard centralizado com alertas de reposicao, controle de compras e fluxo de atendimento simplificado.",
    responsibilities: [
      "Mapeamento de processos do negocio",
      "Construcao do painel administrativo",
      "Automacoes no n8n para alertas de compras"
    ],
    techStack: ["React", "Node", "SQLite", "n8n"],
    statusDetail:
      "Projeto piloto com duas unidades, validando processos de estoque e vendas."
  },
  {
    slug: "gestao-ecommerce",
    name: "Sistema de Gestao de E-commerce (multi-tenant)",
    shortDescription:
      "Plataforma para lojas virtuais com controle de catalogo, pedidos e financeiro.",
    status: "Em producao",
    stack: ["React", "Node", "PostgreSQL", "Linux"],
    overview:
      "Plataforma multi-tenant para gerenciamento de operacoes de e-commerce com foco em escalabilidade e separacao de dados por loja.",
    problem:
      "Lojas pequenas precisam de um sistema unico para catalogo, pedidos e financeiro, sem custos de plataformas grandes.",
    solution:
      "Sistema modular com painel por loja, gestao de usuarios e integracao com gateways de pagamento.",
    responsibilities: [
      "Arquitetura multi-tenant",
      "APIs de catalogo e pedidos",
      "Monitoramento e deploy em Linux"
    ],
    techStack: ["React", "Node", "PostgreSQL", "Linux"],
    statusDetail:
      "Em uso por lojas locais com suporte a novos modulos financeiros."
  }
];
