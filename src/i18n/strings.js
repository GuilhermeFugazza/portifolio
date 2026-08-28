// Textos de interface. Conteúdo dos cases fica em data/projects*.js.
export const strings = {
  nav: {
    home: { pt: "Início", en: "Home" },
    about: { pt: "Sobre", en: "About" },
    projects: { pt: "Projetos", en: "Projects" },
    stack: { pt: "Stack & Experiência", en: "Stack & Experience" },
    contact: { pt: "Contato", en: "Contact" },
    available: { pt: "Disponível para projetos", en: "Open to work" },
    talk: { pt: "Fale comigo", en: "Get in touch" },
    talkShort: { pt: "Falar", en: "Talk" },
    cv: { pt: "Baixar CV", en: "Download CV" },
    cvShort: { pt: "CV", en: "CV" },
    langLabel: { pt: "Idioma", en: "Language" }
  },
  footer: {
    role: { pt: "Guilherme Fugazza · Full-stack Product Engineer", en: "Guilherme Fugazza · Full-stack Product Engineer" },
    place: { pt: "Santa Catarina, Brasil", en: "Santa Catarina, Brazil" }
  },
  common: {
    seeCase: { pt: "Ver o case", en: "View case" },
    seeInCase: { pt: "Ver no case", en: "See it in the case" },
    all: { pt: "Todos", en: "All" },
    ownProduct: { pt: "Produto próprio", en: "Own product" },
    clientProject: { pt: "Projeto para cliente", en: "Client project" },
    screensPending: { pt: "Capturas em preparação", en: "Screenshots coming soon" },
    techOf: { pt: "Tecnologias de", en: "Technologies of" },
    openCase: { pt: "Abrir o case", en: "Open the case" },
    screen: { pt: "Tela", en: "Screen" },
    projectScreens: { pt: "Telas do projeto", en: "Project screens" },
    prev: { pt: "Imagem anterior", en: "Previous image" },
    next: { pt: "Próxima imagem", en: "Next image" },
    goTo: { pt: "Ir para", en: "Go to" }
  },
  home: {
    eyebrow: { pt: "Full-stack Product Engineer · Santa Catarina, Brasil · Remoto", en: "Full-stack Product Engineer · Santa Catarina, Brazil · Remote" },
    lede: {
      pt: "Construo o produto inteiro: banco de dados, API, aplicação web e mobile, e o servidor onde tudo roda. Sistemas multi-tenant, operação offline-first e integrações financeiras, com segurança decidida antes do primeiro deploy.",
      en: "I build the whole product: database, API, web and mobile apps, and the server it all runs on. Multi-tenant systems, offline-first operation and financial integrations, with security decided before the first deploy."
    },
    ctaProjects: { pt: "Ver os projetos", en: "See the projects" },
    ctaContact: { pt: "Entrar em contato", en: "Get in touch" },
    now: {
      pt: "Agora: preparando o Comandafy para os primeiros pilotos · aberto a vaga remota, CLT ou PJ",
      en: "Now: getting Comandafy ready for its first pilots · open to remote roles, employee or contractor"
    },
    proof: [
      { value: "4", label: { pt: "sistemas construídos ponta a ponta", en: "systems built end to end" } },
      { value: "2", label: { pt: "em testes com usuários reais", en: "in testing with real users" } },
      { value: "3", label: { pt: "desenvolvedores liderados como tech lead", en: "developers led as tech lead" } }
    ],
    moreEyebrow: { pt: "Projetos", en: "Projects" },
    moreTitle: { pt: "Mais três sistemas, cada um com o problema que resolveu", en: "Three more systems, each with the problem it solved" },
    strengthsEyebrow: { pt: "Onde faço diferença", en: "Where I make a difference" },
    strengthsTitle: { pt: "Três decisões que se repetem nos meus sistemas", en: "Three decisions that repeat across my systems" },
    strengths: [
      {
        title: { pt: "Multi-tenant decidido no banco", en: "Multi-tenancy decided in the database" },
        text: { pt: "Row-Level Security no PostgreSQL. Um bug de query não vaza dado entre clientes.", en: "Row-Level Security in PostgreSQL. A query bug cannot leak data between clients." },
        to: "/projetos/mensageria-condominios"
      },
      {
        title: { pt: "Offline-first que não para de vender", en: "Offline-first that keeps selling" },
        text: { pt: "Fila local idempotente: a rede cai, a venda continua, e o reenvio não duplica.", en: "Idempotent local queue: the network drops, sales continue, and a resend never duplicates." },
        to: "/projetos/comandafy"
      },
      {
        title: { pt: "Segredo no lugar certo", en: "Secrets in the right place" },
        text: { pt: "Certificate pinning por config plugin, token em Keychain, webhook como fonte da verdade.", en: "Certificate pinning via config plugin, token in the Keychain, webhook as source of truth." },
        to: "/projetos/easyfinance"
      }
    ],
    ctaTitle: { pt: "Procurando alguém que entregue a coluna inteira?", en: "Looking for someone who delivers the whole stack?" },
    ctaText: { pt: "Respondo por e-mail ou WhatsApp. Leio e escrevo em inglês com fluência.", en: "I reply by e-mail or WhatsApp. Fluent in written English." },
    ctaEmail: { pt: "Enviar e-mail", en: "Send e-mail" },
    ctaOther: { pt: "Outros canais", en: "Other channels" }
  },
  projects: {
    title: { pt: "Projetos", en: "Projects" },
    eyebrow: { pt: "Sistemas construídos ponta a ponta", en: "Systems built end to end" },
    lede: {
      pt: "Quatro sistemas onde fiz o banco, a API, a interface e o servidor. Cada case traz o problema que originou a decisão técnica, não só a lista de tecnologia.",
      en: "Four systems where I built the database, the API, the interface and the server. Each case starts from the problem behind the technical decision, not just the tech list."
    },
    countSystems: { pt: "Sistemas", en: "Systems" },
    countLive: { pt: "No ar", en: "Live" },
    ndaNote: {
      pt: "Atuo também em sistemas de gestão sob contrato de confidencialidade, que por definição não aparecem aqui. Esse escopo está descrito na página",
      en: "I also work on management systems under NDA, which by definition are not shown here. That scope is described on the"
    },
    ndaLink: { pt: "Sobre", en: "About page" },
    liveButton: { pt: "Ver no ar", en: "View live" }
  },
  detail: {
    backCrumb: { pt: "← Projetos", en: "← Projects" },
    notFound: { pt: "Projeto não encontrado", en: "Project not found" },
    notFoundText: { pt: "Não foi possível localizar o projeto solicitado.", en: "The requested project could not be found." },
    backAll: { pt: "← Todos os projetos", en: "← All projects" },
    next: { pt: "Próximo", en: "Next" },
    context: { pt: "Contexto", en: "Context" },
    contextTitle: { pt: "Por que o sistema existe", en: "Why the system exists" },
    focus: { pt: "Enfoque técnico", en: "Technical focus" },
    visual: { pt: "Prova visual", en: "Visual proof" },
    gallery: { pt: "Galeria", en: "Gallery" },
    problemEyebrow: { pt: "Cenário inicial", en: "Starting point" },
    problemTitle: { pt: "O problema", en: "The problem" },
    solutionEyebrow: { pt: "Resposta aplicada", en: "Applied answer" },
    solutionTitle: { pt: "A solução", en: "The solution" },
    execEyebrow: { pt: "Execução", en: "Execution" },
    execTitle: { pt: "O que foi entregue", en: "What was delivered" },
    stackEyebrow: { pt: "Base técnica", en: "Technical base" },
    stackTitle: { pt: "Stack", en: "Stack" },
    decisionsEyebrow: { pt: "Decisões", en: "Decisions" },
    decisionsTitle: { pt: "Arquitetura", en: "Architecture" },
    navLabel: { pt: "Navegação entre projetos", en: "Project navigation" }
  },
  about: {
    title: { pt: "Sobre", en: "About" },
    eyebrow: { pt: "Perfil profissional", en: "Professional profile" },
    lede: {
      pt: "Engenheiro que entrega a coluna inteira do produto, com sistema multi-tenant em produção, dado biométrico sob LGPD e integração financeira para provar.",
      en: "An engineer who delivers the whole product stack, with a multi-tenant system in production, biometric data under Brazil's LGPD and financial integrations to prove it."
    },
    role: { pt: "Full-stack Product Engineer", en: "Full-stack Product Engineer" },
    summary: [
      {
        pt: "Construo produtos inteiros. Modelo o banco, escrevo a API, faço a interface web e o app, subo o servidor e cuido do que quebra depois, em vez de me especializar numa fatia e depender de alguém para as outras.",
        en: "I build whole products. I model the database, write the API, build the web interface and the app, bring up the server and look after what breaks afterwards, instead of specializing in one slice and depending on someone else for the rest."
      },
      {
        pt: "Isso aparece em sistemas que estão rodando: multi-tenant com isolamento no banco, operação offline-first que não pode parar de vender, tratamento de dado pessoal sensível sob LGPD e integração financeira com emissão fiscal.",
        en: "That shows in systems that are running: multi-tenant with isolation in the database, offline-first operation that cannot stop selling, sensitive personal data handled under Brazil's LGPD, and financial integration with tax invoicing."
      }
    ],
    facts: [
      { label: { pt: "Cargo", en: "Role" }, value: { pt: "Full-stack Product Engineer", en: "Full-stack Product Engineer" } },
      { label: { pt: "Base", en: "Based in" }, value: { pt: "Santa Catarina, Brasil", en: "Santa Catarina, Brazil" } },
      { label: { pt: "Modelo", en: "Work model" }, value: { pt: "Remoto · CLT ou PJ", en: "Remote · employee or contractor" } },
      { label: { pt: "Formação", en: "Education" }, value: { pt: "ADS em andamento (UNIVALI) · Técnico em Informática (IFC)", en: "B.Tech. in Systems Analysis, in progress (UNIVALI) · IT Technician (IFC)" } }
    ],
    contactBtn: { pt: "Entrar em contato", en: "Get in touch" },
    expEyebrow: { pt: "Experiência", en: "Experience" },
    expTitle: { pt: "Onde o trabalho está", en: "Where the work is" },
    experience: [
      {
        period: { pt: "2026 a hoje", en: "2026 to present" },
        role: { pt: "Fundador e engenheiro", en: "Founder and engineer" },
        org: "FTech Works",
        summary: {
          pt: "Produtos próprios e projetos sob contrato. Quatro sistemas construídos ponta a ponta: dois em fase de testes com usuários reais e um publicado para validação.",
          en: "Own products and contract work. Four systems built end to end: two in testing with real users and one published for validation."
        },
        points: [
          { pt: "Mensageria de Condomínios: gestão condominial multi-tenant com reconhecimento facial, on-premise no cliente, em homologação", en: "Condominium Mailroom: multi-tenant condo management with facial recognition, on-premise at the client, in acceptance testing" },
          { pt: "VistaCloud: plataforma comercial multi-tenant, publicada para validação com revendas", en: "VistaCloud: multi-tenant sales platform, published for validation with dealerships" },
          { pt: "EasyFinance: app financeiro em beta fechado, Stripe e certificate pinning", en: "EasyFinance: finance app in closed beta, Stripe and certificate pinning" },
          { pt: "Comandafy: PDV offline-first com emissão fiscal, em pré-lançamento", en: "Comandafy: offline-first POS with tax invoicing, in pre-launch" }
        ]
      },
      {
        period: { pt: "Atual", en: "Present" },
        role: { pt: "Tech Lead", en: "Tech Lead" },
        org: { pt: "Empresa de administração condominial e aeronáutica", en: "Condominium and aviation management company" },
        summary: {
          pt: "Tech lead de uma equipe de três desenvolvedores. Sistemas de gestão sob confidencialidade: integrações financeiras, APIs multi-tenant e automações que economizam de 2 a 3 horas por dia das equipes de atendimento e financeiro.",
          en: "Tech lead of a three-developer team. Business management systems under NDA: financial integrations, multi-tenant APIs and automations that save the support and finance teams 2 to 3 hours a day."
        },
        points: []
      }
    ],
    processEyebrow: { pt: "Processo", en: "Process" },
    processTitle: { pt: "Como conduzo", en: "How I work" },
    process: [
      { step: "01", title: { pt: "Diagnóstico e escopo", en: "Diagnosis and scope" }, description: { pt: "Mapeio domínio, restrições e integrações antes de escrever a primeira linha.", en: "I map the domain, constraints and integrations before writing the first line." } },
      { step: "02", title: { pt: "Arquitetura e implementação", en: "Architecture and implementation" }, description: { pt: "Defino camadas, contratos e persistência com foco em estabilidade transacional.", en: "I define layers, contracts and persistence with transactional stability in mind." } },
      { step: "03", title: { pt: "Entrega e sustentação", en: "Delivery and operations" }, description: { pt: "Deploy, monitoração e ciclo de melhoria. O sistema continua meu depois do lançamento.", en: "Deployment, monitoring and an improvement cycle. The system stays mine after launch." } }
    ],
    stackEyebrow: { pt: "Stack", en: "Stack" },
    stackTitle: { pt: "Ferramentas do dia a dia", en: "Everyday tools" },
    stackNote: { pt: "Detalhe por camada na página", en: "Layer-by-layer detail on the" },
    stackLink: { pt: "Stack & Experiência", en: "Stack & Experience page" }
  },
  stack: {
    title: { pt: "Stack & Experiência", en: "Stack & Experience" },
    eyebrow: { pt: "Por camada", en: "By layer" },
    lede: { pt: "Cada camada abaixo aponta para um sistema real onde a decisão foi tomada. Tecnologia sem prova é só lista.", en: "Each layer below points to a real system where the decision was made. Technology without proof is just a list." },
    proof: { pt: "Prova", en: "Proof" },
    layers: [
      { id: "01", title: { pt: "Front-end e mobile", en: "Front-end and mobile" }, summary: { pt: "Painéis operacionais e apps nativos ligados à API real, não a mock.", en: "Operations panels and native apps wired to the real API, not mocks." }, tools: ["React", "React Native", "Expo", "TypeScript", "Tailwind CSS"], proof: { label: { pt: "App do morador na Mensageria de Condomínios", en: "Resident app in Condominium Mailroom" }, slug: "mensageria-condominios" } },
      { id: "02", title: { pt: "Back-end e APIs", en: "Back-end and APIs" }, summary: { pt: "Contrato e validação da mesma fonte; documentação gerada do schema.", en: "Contract and validation from one source; documentation generated from the schema." }, tools: ["Node.js", "NestJS", "Fastify", "Express", "zod", "WebSocket"], proof: { label: { pt: "OpenAPI a partir dos schemas zod", en: "OpenAPI from zod schemas" }, slug: "mensageria-condominios" } },
      { id: "03", title: { pt: "Dados", en: "Data" }, summary: { pt: "Isolamento multi-tenant decidido no banco, com RLS, não em filtro de query.", en: "Multi-tenant isolation decided in the database with RLS, not in query filters." }, tools: ["PostgreSQL", "Prisma", "Redis", "IndexedDB"], proof: { label: { pt: "Fila offline idempotente no Comandafy", en: "Idempotent offline queue in Comandafy" }, slug: "comandafy" } },
      { id: "04", title: { pt: "Segurança", en: "Security" }, summary: { pt: "Segredo no lugar certo e fonte da verdade definida antes do primeiro deploy.", en: "Secrets in the right place and the source of truth defined before the first deploy." }, tools: ["Stripe", "Multi-tenant"], proof: { label: { pt: "Certificate pinning por config plugin no EasyFinance", en: "Certificate pinning via config plugin in EasyFinance" }, slug: "easyfinance" } },
      { id: "05", title: { pt: "Infraestrutura", en: "Infrastructure" }, summary: { pt: "Do container em Coolify ao servidor on-premise com systemd, o que a operação exigir.", en: "From a Coolify container to an on-premise server under systemd, whatever operations require." }, tools: ["Linux", "Docker", "Nginx", "Caddy", "Cloudflare", "GitHub Actions"], proof: { label: { pt: "On-premise no condomínio, sem Docker", en: "On-premise at the building, without Docker" }, slug: "mensageria-condominios" } },
      { id: "06", title: { pt: "Automação", en: "Automation" }, summary: { pt: "Rotinas operacionais e integrações entre serviços sem intervenção manual.", en: "Operational routines and service integrations without manual intervention." }, tools: ["Python", "n8n", "Webhooks"], proof: null }
    ],
    solvedEyebrow: { pt: "Problemas resolvidos", en: "Problems solved" },
    solvedTitle: { pt: "Seis decisões que sustentam os sistemas", en: "Six decisions that hold the systems up" },
    solved: [
      { title: { pt: "Isolamento multi-tenant que sobrevive a bug de query", en: "Tenant isolation that survives a query bug" }, detail: { pt: "Row-Level Security por tenant_id no PostgreSQL; teste e2e no CI cobrindo o vazamento entre tenants.", en: "Row-Level Security by tenant_id in PostgreSQL; e2e test in CI covering cross-tenant leaks." } },
      { title: { pt: "Venda que não para quando a internet cai", en: "Sales that don't stop when the internet drops" }, detail: { pt: "Fila local em IndexedDB com chave de idempotência por operação; reenvio não duplica comanda.", en: "Local IndexedDB queue with an idempotency key per operation; a resend never duplicates a tab." } },
      { title: { pt: "Emissão fiscal sem guardar o certificado do cliente", en: "Tax invoicing without holding the client's certificate" }, detail: { pt: "FiscalProvider como porta; o A1 fica no emissor, o token cifrado em repouso no sistema.", en: "FiscalProvider as a port; the A1 certificate stays with the issuer, the token encrypted at rest." } },
      { title: { pt: "Dado biométrico sob LGPD em servidor do cliente", en: "Biometric data under LGPD on the client's server" }, detail: { pt: "Credenciais do controle de acesso cifradas por tenant e restritas ao backend; aceite de termo no app.", en: "Access-control credentials encrypted per tenant and restricted to the backend; consent captured in the app." } },
      { title: { pt: "Canal seguro num app financeiro Expo", en: "A secure channel in an Expo finance app" }, detail: { pt: "Config plugin próprio injetando certificate pinning na build nativa; token em Keychain/Keystore.", en: "Own config plugin injecting certificate pinning into the native build; token in Keychain/Keystore." } },
      { title: { pt: "Rate limiting que vale com mais de uma instância", en: "Rate limiting that holds across instances" }, detail: { pt: "Limite em Redis em vez de memória; webhook do Stripe como fonte da verdade da assinatura.", en: "Limit in Redis instead of memory; Stripe webhook as source of truth for the subscription." } }
    ]
  },
  contact: {
    title: { pt: "Contato", en: "Contact" },
    eyebrow: { pt: "Vamos conversar", en: "Let's talk" },
    lede: { pt: "Aberto a vaga remota, CLT ou PJ, no Brasil ou no exterior. Leio e escrevo em inglês com fluência.", en: "Open to remote roles as an employee or contractor, in Brazil or abroad. Fluent in written English." },
    channels: [
      { label: { pt: "E-mail", en: "E-mail" }, value: "guilhermefugazza05@gmail.com", href: "mailto:guilhermefugazza05@gmail.com", icon: "https://cdn.simpleicons.org/gmail/EA4335", hint: { pt: "Melhor canal para vaga e proposta", en: "Best channel for roles and proposals" } },
      { label: { pt: "WhatsApp", en: "WhatsApp" }, value: "+55 (47) 99756-4677", href: "https://wa.me/5547997564677", icon: "https://cdn.simpleicons.org/whatsapp/25D366", hint: { pt: "Resposta mais rápida", en: "Fastest reply" } },
      { label: { pt: "GitHub", en: "GitHub" }, value: "github.com/GuilhermeFugazza", href: "https://github.com/GuilhermeFugazza", icon: "https://cdn.simpleicons.org/github/FFFFFF", hint: { pt: "Código e histórico de commits", en: "Code and commit history" } },
      { label: { pt: "LinkedIn", en: "LinkedIn" }, value: "linkedin.com/in/guilherme-fugazza-56720027a", href: "https://www.linkedin.com/in/guilherme-fugazza-56720027a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg", hint: { pt: "Perfil profissional", en: "Professional profile" } }
    ],
    availEyebrow: { pt: "Disponibilidade", en: "Availability" },
    availTitle: { pt: "Como prefiro trabalhar", en: "How I prefer to work" },
    avail: [
      { dt: { pt: "Regime", en: "Engagement" }, dd: { pt: "Remoto · CLT ou PJ", en: "Remote · employee or contractor" } },
      { dt: { pt: "Fuso", en: "Time zone" }, dd: { pt: "UTC−3 (Brasília)", en: "UTC−3 (Brasília), overlapping US Eastern and European hours" } },
      { dt: { pt: "Idiomas", en: "Languages" }, dd: { pt: "Português nativo · Inglês técnico (leitura e escrita fluentes)", en: "Native Portuguese · Technical English (fluent reading and writing)" } },
      { dt: { pt: "Processo", en: "Process" }, dd: { pt: "Disponível para teste prático, revisão de código ou entrevista técnica", en: "Available for take-home tasks, code review or technical interviews" } }
    ]
  },
  notFound: {
    title: { pt: "Página não encontrada", en: "Page not found" },
    text: { pt: "Volte para a home ou explore os projetos disponíveis.", en: "Go back home or browse the projects." },
    home: { pt: "Ir para a home", en: "Go home" }
  }
};
