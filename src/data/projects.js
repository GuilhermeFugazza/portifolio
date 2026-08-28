export const projects = [
  {
    slug: "mensageria-condominios",
    group: "cliente",
    name: "Mensageria de Condomínios",
    shortDescription:
      "Sistema de gestão condominial multi-tenant, com painel web e app do morador: encomendas, comunicados, reservas e retirada liberada por reconhecimento facial. Instalado no servidor do próprio condomínio, em homologação com o cliente.",
    status: "Em homologação",
    stack: ["Fastify", "PostgreSQL", "React", "React Native"],
    overview:
      "Contratado por um edifício residencial para substituir o controle de encomendas em papel. O escopo cresceu para comunicados, reservas de área comum e integração com o controle de acesso físico da portaria.",
    problem:
      "Encomenda entregue na portaria e retirada por quem não era o destinatário, sem registro de quem pegou o quê. Some-se a isso dado biométrico: a retirada é liberada por reconhecimento facial, o que coloca o sistema debaixo da LGPD como tratamento de dado pessoal sensível. E o condomínio queria o servidor dentro do próprio prédio, não em nuvem.",
    solution:
      "Isolamento multi-tenant feito no banco, com Row-Level Security por tenant_id no PostgreSQL, e não apenas na camada de aplicação: um bug de query não vaza dado de um condomínio para outro. As credenciais dos controladores Intelbras nunca saem do backend e ficam cifradas por tenant. A entrega roda on-premise em Ubuntu Server, com PostgreSQL, Node e Caddy pelo systemd, sem Docker. É uma decisão de operação, porque quem mantém a máquina no dia a dia é o próprio condomínio.",
    responsibilities: [
      "Modelagem multi-tenant com Row-Level Security por tenant_id no PostgreSQL",
      "API Fastify + TypeScript com validação zod e OpenAPI gerada dos próprios schemas",
      "Autenticação argon2id com JWT de acesso e refresh rotativo, RBAC por perfil (síndico, porteiro, zelador, morador)",
      "App do morador em Expo Router consumindo a API real: encomendas, avisos, reservas e aceite de termo LGPD",
      "Integração com controladores de reconhecimento facial Intelbras para liberar a retirada",
      "Deploy on-premise: Ubuntu Server, PostgreSQL 18, Node 22 e Caddy sob systemd, HTTPS na rede interna"
    ],
    techStack: [
      "Fastify",
      "TypeScript",
      "PostgreSQL",
      "React",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Linux"
    ],
    mobileGalleryFolder: "MensageriaCondominios",
    statusDetail:
      "Instalado na rede do condomínio desde agosto de 2026, com painel e API no mesmo endereço em HTTPS. Em fase de testes com o cliente, aguardando a implantação. Uso das imagens da interface autorizado em contrato.",
    keyMessage:
      "Dado biométrico e multi-tenant obrigam a decidir segurança no banco, não no controller.",
    keyHighlights: [
      "Isolamento por tenant garantido pelo PostgreSQL via RLS, não por filtro na aplicação.",
      "Credenciais do controle de acesso físico cifradas por tenant e restritas ao backend.",
      "Estado navegável na URL: recarregar ou compartilhar a tela leva à mesma view."
    ],
    architecturalDecisions: [
      "Row-Level Security por tenant_id: o isolamento sobrevive a um erro de query.",
      "OpenAPI gerada dos schemas zod: contrato e validação saem da mesma fonte.",
      "Refresh token rotativo com argon2id no hash de senha.",
      "On-premise sem Docker, com systemd, porque a manutenção fica com o cliente.",
      "Caminho relativo na API: um único build do painel serve todos os endereços."
    ],
    visualProofTitle: "App do morador",
    visualProofDescription:
      "Telas do aplicativo do morador conectadas à API real: início, encomendas com selo de pendência, avisos, reservas de área comum e perfil.",
    links: [],
    repoNote: "Repositório privado: código sob contrato, acesso mediante solicitação."
  },
  {
    slug: "comandafy",
    group: "produto",
    name: "Comandafy",
    shortDescription:
      "SaaS multi-tenant de PDV e comanda para cafeterias: atendimento, cozinha em tempo real, caixa com divisão de conta, tablet de autoatendimento e emissão fiscal.",
    status: "Em desenvolvimento",
    stack: ["NestJS", "PostgreSQL", "React", "WebSocket"],
    overview:
      "Produto próprio. Cobre o ciclo inteiro do salão: o atendente abre a comanda, a cozinha vê a fila em tempo real, o caixa fecha com taxa, desconto e divisão entre pessoas, e o dono acompanha relatório e trilha de auditoria.",
    problem:
      "Cafeteria em horário de pico não pode parar de vender porque a internet caiu, nem perder um pedido porque a impressora travou. E o sistema precisa emitir nota fiscal sem que o certificado digital A1 do cliente fique guardado na minha infraestrutura.",
    solution:
      "O PWA grava o pedido numa fila local em IndexedDB e sincroniza depois, com operações idempotentes, então o mesmo pedido reenviado não vira duas comandas. A impressão térmica passa por uma ponte local em ESC/POS e falha de impressora nunca bloqueia a venda: o caixa reimprime. A emissão fiscal fica atrás de um FiscalProvider, com a Focus NFe como implementação e não como acoplamento; o certificado A1 fica no cadastro da empresa na Focus, nunca no sistema. O teste e2e que roda no CI a cada push cobre exatamente os dois pontos que quebrariam silenciosamente: isolamento entre tenants e idempotência da fila offline.",
    responsibilities: [
      "Monorepo pnpm com API NestJS, PWA React, ponte de impressão e pacotes compartilhados de contratos",
      "Fila offline em IndexedDB com sincronização idempotente e resolução de conflito",
      "KDS e comandas em tempo real por WebSocket, com RBAC por papel (dono, gerente, atendente, caixa)",
      "Camada fiscal isolada atrás de um provider, com NFC-e e NF-e via Focus NFe e token cifrado em repouso",
      "Ponte local de impressão ESC/POS com emulador para desenvolver sem hardware",
      "Modo kiosk para tablet de mesa, pareado por código de 6 dígitos de uso único"
    ],
    techStack: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "React",
      "TypeScript",
      "WebSocket",
      "IndexedDB",
      "Docker"
    ],
    desktopGalleryFolder: "Comandafy",
    statusDetail:
      "Cerca de 69 mil linhas de TypeScript. Testes e2e de isolamento multi-tenant e de idempotência da fila offline rodando no CI. Em preparação para os primeiros pilotos: falta billing, onboarding self-service e nome comercial definitivo.",
    keyMessage:
      "Offline-first de verdade é decidir o que acontece quando a rede volta.",
    keyHighlights: [
      "Fila local idempotente: reenvio não duplica comanda quando a conexão retorna.",
      "Falha de impressora não bloqueia a venda: o cupom é reimpresso pelo caixa.",
      "Certificado digital do cliente fora da minha infraestrutura, por decisão de arquitetura."
    ],
    architecturalDecisions: [
      "IndexedDB como fila de escrita, com chave de idempotência por operação.",
      "FiscalProvider como porta: trocar de emissor não toca no domínio de vendas.",
      "WebSocket para o KDS, porque polling em horário de pico é latência visível no balcão.",
      "Monorepo com pacote de contratos compartilhado entre API, PWA e ponte de impressão.",
      "e2e no CI cobrindo isolamento de tenant e idempotência, que é o que falha em silêncio."
    ],
    visualProofTitle: "Interface do sistema",
    visualProofDescription:
      "Salão com as comandas abertas e o total parcial, cardápio digital no modo kiosk do tablet, tema escuro e tela de acesso.",
    links: [],
    repoNote: "Repositório privado: produto em pré-lançamento."
  },
  {
    slug: "vistacloud",
    group: "produto",
    name: "VistaCloud",
    shortDescription:
      "Plataforma multi-tenant que liga vitrine pública, captação de lead e operação comercial num fluxo único: o mesmo backend serve sites de veículos, imóveis e food service.",
    status: "No ar",
    stack: ["NestJS", "PostgreSQL", "React", "Multi-tenant"],
    overview:
      "Produto próprio, construído para revendas e publicado para validação antes da venda. Um backend, um painel operacional e várias vitrines públicas de segmentos diferentes. O lead entra pelo site, é distribuído automaticamente e a operação acompanha até a venda no mesmo lugar.",
    problem:
      "Revenda pequena vive com o catálogo num site que não conversa com nada e o lead chegando solto no WhatsApp. Ninguém sabe de qual anúncio veio, quanto tempo demorou o primeiro atendimento nem quem estava com o cliente.",
    solution:
      "Isolamento por tenant no header da requisição, com permissão por papel dentro de cada empresa, e distribuição automática do lead por regra ativa no momento em que ele entra pelo formulário público. O catálogo é servido por rota pública por tenant, o que permite que o mesmo backend atenda vitrines de segmentos completamente diferentes sem fork. Rastreabilidade fim a fim: origem do lead, tempo de primeiro atendimento, win rate e documento de venda em PDF.",
    responsibilities: [
      "API NestJS + Prisma multi-tenant com isolamento por enterprise e permissão por papel",
      "Motor de distribuição automática de lead por regra configurável",
      "Painel operacional em React + Vite + TypeScript: produtos, leads, métricas, distribuição e vendas",
      "Catálogo público por tenant consumido por quatro vitrines de segmentos distintos",
      "Exportação CSV/PDF e geração do documento de venda",
      "Deploy em Coolify com PostgreSQL no mesmo compose e proxy reverso para a API"
    ],
    techStack: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Docker",
      "Linux",
      "Nginx"
    ],
    desktopGalleryFolder: "VistaCloud",
    statusDetail:
      "No ar em business.ftechworks.com.br, em validação com revendas antes da comercialização. Cerca de 52 mil linhas entre API, painel e vitrines.",
    keyMessage:
      "Um backend, vários segmentos: o tenant define o catálogo, não o código.",
    keyHighlights: [
      "Lead do formulário público já entra distribuído pela regra ativa do tenant.",
      "Quatro vitrines de mercados diferentes sobre a mesma API, sem fork.",
      "Métrica que interessa à operação: origem, tempo de primeiro atendimento e win rate."
    ],
    architecturalDecisions: [
      "Tenant resolvido no header da requisição, com validação de permissão por papel.",
      "Rota pública de catálogo separada da rota autenticada de operação.",
      "Banco dentro do mesmo docker-compose da API, porque recursos separados no orquestrador não se enxergavam na rede.",
      "Prefixo /api no NestJS com o proxy do front apontando para a porta exposta pelo compose."
    ],
    visualProofTitle: "Painel operacional",
    visualProofDescription:
      "Dashboard de conversão e origem de lead, analytics do funil e gestão de equipe por empresa.",
    links: [
      {
        label: "Ver no ar",
        href: "https://business.ftechworks.com.br",
        kind: "live"
      }
    ],
    repoNote: "Repositório privado: produto comercial."
  },
  {
    slug: "easyfinance",
    group: "produto",
    name: "EasyFinance",
    shortDescription:
      "App de finanças pessoais em beta fechado, com separação entre pessoa física e MEI, cartões e faturas, importação de extrato, assinatura Stripe e insights gerados por IA.",
    status: "Beta fechado",
    stack: ["React Native", "Expo", "Node.js", "PostgreSQL"],
    overview:
      "Produto próprio distribuído por TestFlight. Cobre o ciclo completo de organização financeira: receitas, despesas, parceladas e fixas, cartões com fechamento e pagamento de fatura, orçamento por categoria, metas e relatórios.",
    problem:
      "Aplicativo financeiro guarda token de sessão e dado bancário no aparelho do usuário. Um token em AsyncStorage e uma chamada HTTPS sem validação de certificado são a diferença entre um app de finanças e um vazamento. E a maior parte dos apps Expo sai com os dois problemas por padrão.",
    solution:
      "Token de sessão no Keychain do iOS e no Keystore do Android via expo-secure-store, nunca em armazenamento comum, com desbloqueio por biometria do próprio aparelho. Para fechar o canal, escrevi um config plugin do Expo que injeta certificate pinning na build nativa, porque não existia solução pronta que se encaixasse no fluxo de build gerenciado. No servidor, rate limiting distribuído em Redis, para o limite valer com mais de uma instância, e webhook do Stripe como fonte da verdade do estado da assinatura, em vez de confiar no retorno do cliente.",
    responsibilities: [
      "App React Native + Expo com navegação por abas, tema claro/escuro e widget iOS via App Intents",
      "Config plugin próprio do Expo para certificate pinning na build nativa",
      "Autenticação biométrica com token em expo-secure-store",
      "API Express + Prisma + PostgreSQL com rate limiting distribuído em Redis",
      "Assinatura Stripe com trial, cupons e webhook como fonte da verdade",
      "Importação de extratos CSV, XLSX e OFX, e relatórios PDF incluindo MEI/DAS",
      "Camada de insights financeiros sobre modelos de linguagem"
    ],
    techStack: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Stripe"
    ],
    statusDetail:
      "Em beta fechado via TestFlight, ainda não lançado nas lojas. Auditoria de segurança própria registrada. API no ar em servidor Linux com deploy containerizado.",
    keyMessage:
      "App que toca dinheiro exige decidir onde mora o segredo e quem é a fonte da verdade.",
    keyHighlights: [
      "Certificate pinning entregue por config plugin próprio do Expo.",
      "Token em Keychain/Keystore com desbloqueio biométrico, nunca em armazenamento comum.",
      "Estado da assinatura vem do webhook do Stripe, não do retorno do cliente."
    ],
    architecturalDecisions: [
      "expo-secure-store para o token; AsyncStorage só para preferência sem valor de sessão.",
      "Rate limiting em Redis, porque limite em memória não sobrevive a duas instâncias.",
      "Webhook do Stripe como fonte da verdade da assinatura, com idempotência por evento.",
      "Separação PF/PJ no modelo de dados desde o início, em vez de flag improvisada depois."
    ],
    visualProofTitle: "Distribuição",
    visualProofDescription:
      "App distribuído por TestFlight. Capturas do aplicativo em preparação.",
    links: [],
    repoNote: "Repositório privado: produto próprio."
  }
];
