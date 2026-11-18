import { Experiencia, Relogio } from "../components/Tempo.jsx";

// Todo o texto do site em português. A fonte dos fatos é Profissional/agente/PERFIL.md.
export default {
  lang: "pt",
  html: "pt-BR",
  locale: "pt_BR",
  outro: { lang: "en", sigla: "EN", nome: "English" },
  sigla: "PT",

  cv: { href: "/cv/Guilherme-Fugazza-Curriculo.pdf", curto: "Currículo", longo: "Baixar o currículo" },

  ui: {
    pular: "Pular para o conteúdo",
    marca: "Guilherme Fugazza, início",
    idioma: "Idioma",
    rodape: ["Guilherme Fugazza, Full-stack Product Engineer", "Balneário Camboriú, SC, 2026"],
    dockHome: {
      rotulo: "Seções",
      itens: [
        ["produtos", "Produtos"],
        ["por-dentro", "Por dentro"],
        ["sobre", "Sobre"],
        ["contato", "Contato"],
      ],
    },
    dockCase: { rotulo: "Seções do case", produtos: "Produtos", porDentro: "Por dentro", decisoes: "Decisões", telas: "Telas" },
  },

  meta: {
    home: {
      titulo: "Guilherme Fugazza, Full-stack Product Engineer",
      descricao: "Faço o produto inteiro, do banco de dados ao app na loja. O Poupfy está na App Store e o Comandafy roda em 3 cafeterias.",
    },
    poupfy: {
      titulo: "Poupfy, case de Guilherme Fugazza",
      descricao: "App de finanças pessoais para iPhone, na App Store, com assinatura mensal e anual. Feito sozinho, do banco de dados ao marketing.",
    },
    comandafy: {
      titulo: "Comandafy, case de Guilherme Fugazza",
      descricao: "PDV e comanda para cafeterias, em operação em 3 lojas. Feito sozinho, do banco de dados à instalação na loja.",
    },
    404: {
      titulo: "Página não encontrada, Guilherme Fugazza",
      descricao: "Esta página não existe. Os produtos e o currículo estão na página inicial.",
    },
  },

  home: {
    heroi: {
      disponivel: "Aberto a vaga remota, CLT ou PJ",
      papel: (
        <>
          Full-stack Product Engineer com <Experiencia /> de experiência, liderando uma equipe pequena.
        </>
      ),
      frase: "Faço o produto inteiro, do banco de dados ao app na loja, e cuido dele depois que entra no ar.",
      verProdutos: "Ver os produtos",
      fluxoRotulo: "Do banco de dados à loja: as camadas que eu faço",
      camadas: [
        ["Banco de dados", "PostgreSQL, Prisma, Redis"],
        ["API", "Node.js, NestJS, Express"],
        ["Interface", "React Native, React"],
        ["Deploy e operação", "Docker, Coolify, EAS Build"],
      ],
      poupfy: ["Finanças pessoais, iPhone", "Na App Store"],
      comandafy: ["PDV de cafeteria", "Em 3 cafeterias"],
    },

    produtos: {
      titulo: "Em uso hoje",
      verCase: "Ver o case",
      papel: "Papel:",
      conhecer: "Conhecer o produto",
      appStore: "Abrir na App Store",
      poupfy: {
        linha: "App de finanças pessoais para iPhone.",
        sr: " do Poupfy",
        status: "Na App Store desde setembro de 2026, com assinatura mensal e anual.",
        fatos: ["Pix e cartão pela Stripe.", "Servidor MCP para ChatGPT e Claude.", "Dados cifrados no servidor."],
        papel: "sozinho, do banco de dados ao marketing.",
      },
      comandafy: {
        linha: "PDV e comanda para cafeterias.",
        sr: " do Comandafy",
        status: "Em operação em 3 cafeterias de uma rede.",
        fatos: ["Continua vendendo sem internet.", "Cozinha em tempo real.", "Nota fiscal e pedidos do iFood."],
        papel: "sozinho, do banco de dados à instalação na loja.",
      },
      mensageria: {
        selo: "Sob contrato",
        titulo: "Mensageria de Condomínios",
        lead: "Portaria e encomendas do Edifício Neo Superquadra, com retirada por reconhecimento facial.",
        texto:
          "Instalado no servidor do condomínio. Dado biométrico e vários prédios no mesmo banco: o isolamento é feito no PostgreSQL, com Row-Level Security, e não no código da API.",
        papel: "sozinho, do contrato à instalação.",
        nota: "Detalhes do projeto são confidenciais por contrato. As telas usam dados de teste.",
        telas: [
          ["mensageria-2-encomendas", "Tela de encomendas do morador, com o status de cada pacote, em dados de teste"],
          ["mensageria-5-perfil", "Perfil do morador com o reconhecimento facial cadastrado e as opções de privacidade da LGPD, em dados de teste"],
          ["mensageria-4-reservas", "Tela de reservas dos espaços do condomínio, com as instruções para reservar, em dados de teste"],
        ],
      },
    },

    porDentro: {
      titulo: "Por dentro",
      sub: "Cada produto aberto em camadas, da tela ao servidor. Todas foram feitas por mim.",
      texto: "Troque o produto para ver a pilha de cada um. As linhas mostram o que roda em cada camada.",
      seletor: "Produto no desenho",
      figura: "Vista explodida do produto em quatro camadas: interface, API, dados e servidor",
      produtos: {
        poupfy: {
          titulo: "Poupfy por dentro",
          link: "Ler o case do Poupfy",
          legendas: [
            "React Native e Expo, widgets do iPhone em Swift",
            "Express, Stripe e servidor MCP",
            <>
              PostgreSQL, campos cifrados com <span className="nw">AES-256-GCM</span>
            </>,
            "Docker e Coolify, no Brasil",
          ],
        },
        comandafy: {
          titulo: "Comandafy por dentro",
          link: "Ler o case do Comandafy",
          legendas: [
            "Web instalável no celular, no tablet e no caixa",
            "NestJS, WebSocket, iFood e nota fiscal",
            "PostgreSQL multi-tenant e fila offline no aparelho",
            "Docker, Coolify e ponte de impressão na loja",
          ],
        },
      },
    },

    sobre: {
      titulo: "Sobre",
      bio: (
        <>
          Sou desenvolvedor full-stack há <Experiencia />, em Balneário Camboriú, SC. Desde março de 2024 trabalho numa empresa de
          administração condominial e aeronáutica, onde lidero a equipe de desenvolvimento desde 2025. Em paralelo, construí do zero e mantenho dois produtos
          em uso: o Poupfy e o Comandafy.
        </>
      ),
      numerosRotulo: "Em números",
      numeros: [
        { rotulo: "Experiência como desenvolvedor", valor: <Experiencia />, texto: "Desde março de 2024.", principal: true },
        { rotulo: "Coordeno", valor: "2", texto: "desenvolvedores, numa equipe de 3 contando comigo." },
        { rotulo: "Produtos meus", valor: "2", texto: "em uso: Poupfy e Comandafy." },
        { rotulo: "Automações", valor: "2 a 3 h", texto: "por dia poupadas no atendimento e no financeiro." },
      ],
      trajetoria: {
        titulo: "Trajetória",
        itens: [
          {
            agora: true,
            quando: "2026 a hoje",
            cargo: "Desenvolvedor Full-stack",
            onde: "FTech Works, em paralelo",
            pontos: [
              <>
                <b>Poupfy:</b> do primeiro commit, em março de 2026, à App Store em setembro, com assinatura.
              </>,
              <>
                <b>Comandafy:</b> começou em julho de 2026 e hoje opera em 3 cafeterias.
              </>,
              <>
                <b>Mensageria de Condomínios:</b> sob contrato para o Edifício Neo Superquadra, com reconhecimento facial e LGPD.
              </>,
            ],
          },
          {
            agora: true,
            quando: "2025 a hoje",
            cargo: "Desenvolvedor Full-stack Pleno",
            onde: "Empresa de administração condominial e aeronáutica",
            pontos: [
              "Lidero a equipe de 3 desenvolvedores, contando comigo: arquitetura, padrões de código e de Git, revisão de código e distribuição do trabalho.",
              "Planejo as entregas com a diretoria e com as áreas que usam os sistemas, e oriento o desenvolvedor júnior.",
              "Logs organizados, trilha de auditoria e healthchecks em todos os sistemas; sou o primeiro a responder quando algo falha.",
              "Automações em n8n e Python que poupam de 2 a 3 horas por dia.",
              "Apps em React Native e Expo para iOS e Android, APIs em Node.js e Python e painéis em React.",
              "Integrações com Superlógica, Sicoob, Sicredi e Zendesk; deploy em Ubuntu Server, Proxmox e Cloudflare.",
            ],
          },
          {
            quando: "Março de 2024",
            cargo: "Técnico em Desenvolvimento de Sistemas",
            onde: "Mesma empresa. Entrada como desenvolvedor; é o cargo registrado até hoje.",
          },
          { quando: "Conclusão em 2027", cargo: "Análise e Desenvolvimento de Sistemas", onde: "UNIVALI" },
          { quando: "Concluído", cargo: "Técnico em Informática", onde: "Instituto Federal Catarinense, integrado ao ensino médio" },
        ],
      },
      ficha: {
        titulo: "Ficha rápida",
        itens: [
          ["Experiência", <Experiencia key="e" />, "desde março de 2024"],
          ["Cargo", "Full-stack Product Engineer", "liderando uma equipe de 3"],
          ["Disponível", "Aberto a vaga, CLT ou PJ", null, true],
          ["Trabalho", "Remoto, no Brasil ou no exterior"],
          ["Local", "Balneário Camboriú, SC, Brasil"],
          ["Fuso", "UTC-3", <>agora são <Relogio /></>],
          ["Idiomas", "Português nativo", "Inglês técnico intermediário, na leitura e na escrita"],
          ["Agora", "Levando o Poupfy para fora do Brasil, com moedas, tradução e compra pela Apple."],
        ],
        metodoTitulo: "Como eu trabalho, em ordem",
        metodo: [
          ["Documento antes do código.", "PRD, arquitetura e sprints escritos antes da primeira linha."],
          ["IA com a base dominada.", "Claude Code e Codex com agentes por papel; a base eu domino sem assistência."],
          ["Teste como critério de aceite.", "Testes automatizados e CI decidem se a entrega está pronta."],
        ],
      },
      stack: {
        titulo: "Stack",
        base: "Base do dia a dia",
        nucleo: [
          ["typescript", "#3178C6", "TypeScript", "Do banco ao app, nos dois produtos"],
          ["react", "#61DAFB", "React Native", "O app do Poupfy, na App Store"],
          ["nodedotjs", "#5FA04E", "Node.js", "As APIs do Poupfy e do Comandafy"],
          ["react", "#61DAFB", "React", "O Comandafy e os painéis web"],
          ["postgresql", "#4169E1", "PostgreSQL", "Várias empresas no mesmo banco, isoladas"],
          ["docker", "#2496ED", "Docker", "Deploy dos dois produtos, com Coolify"],
        ],
        porArea: "Por área",
        areas: [
          ["Linguagens", [["javascript", "JavaScript"], ["python", "Python"], ["codigo", "SQL"], ["swift", "Swift"]]],
          ["Mobile", [["expo", "Expo"], ["pacote", "EAS Build"], ["apple", "Widgets do iPhone"]]],
          ["Web", [["vite", "Vite"], ["tailwindcss", "Tailwind CSS"], ["pwa", "PWA"]]],
          ["API", [["nestjs", "NestJS"], ["express", "Express"], ["socketdotio", "WebSocket"], ["zod", "Zod"], ["swagger", "OpenAPI"], ["fila", "Filas (BullMQ)"], ["modelcontextprotocol", "MCP"]]],
          ["Dados", [["prisma", "Prisma"], ["redis", "Redis"], ["mysql", "MySQL"], ["banco", "Row-Level Security"]]],
          [
            "Infra",
            [
              ["coolify", "Coolify"],
              ["ubuntu", "Ubuntu Server"],
              ["proxmox", "Proxmox"],
              ["caddy", "Caddy"],
              ["nginx", "Nginx"],
              ["cloudflare", "Cloudflare"],
              ["githubactions", "GitHub Actions"],
            ],
          ],
          [
            "Qualidade e operação",
            [["jest", "Jest"], ["vitest", "Vitest"], ["codigo", "Supertest"], ["sentry", "Sentry"], ["lista", "Logs e auditoria"], ["pulso", "Healthchecks"]],
          ],
          ["Pagamentos", [["stripe", "Stripe"], ["pix", "Pix"], ["apple", "Compra pela Apple"]]],
          ["Segurança", [["jsonwebtokens", "JWT com renovação"], ["cadeado", "argon2"], ["cadeado", "AES-256-GCM"], ["escudo", "LGPD"]]],
          [
            "Automação e integrações",
            [["n8n", "n8n"], ["zendesk", "Zendesk"], ["tomada", "Superlógica"], ["tomada", "Sicoob"], ["tomada", "Sicredi"]],
          ],
        ],
      },
      perguntas: {
        titulo: "Perguntas de quem contrata",
        sub: "As dúvidas que aparecem antes da primeira conversa.",
        itens: [
          [
            "Quanto tempo de experiência você tem?",
            <>
              Sou desenvolvedor há <Experiencia />, desde março de 2024, numa empresa de administração condominial e aeronáutica, onde
              lidero a equipe de desenvolvimento desde 2025. Somos 3 desenvolvedores, e eu coordeno os outros 2.
            </>,
            "Em paralelo, construí do zero e mantenho o Poupfy, na App Store, e o Comandafy, em 3 cafeterias.",
          ],
          [
            "Que tipo de vaga você procura?",
            "Full-stack ou product engineer, em trabalho remoto, CLT ou PJ, no Brasil ou no exterior.",
            "Faço mais diferença onde é preciso levar o produto de ponta a ponta, como em empresas pequenas e médias.",
          ],
          [
            "Você trabalha sozinho ou em equipe?",
            "Os dois. No trabalho atual, lidero a equipe de 3 desenvolvedores: defino arquitetura e padrões, reviso o código, planejo as entregas com a diretoria e oriento o desenvolvedor júnior. Nos meus produtos, faço tudo, do banco de dados ao contato com o cliente.",
          ],
          [
            "Qual é a sua stack principal?",
            "TypeScript de ponta a ponta: React e React Native na interface, Node.js com NestJS ou Express na API, PostgreSQL com Prisma nos dados e Docker no servidor. Python nas automações.",
          ],
          ["Como está o seu inglês?", "Técnico intermediário, na leitura e na escrita. A conversação está em desenvolvimento."],
          ["Qual é o seu fuso horário?", "UTC-3, o horário de Brasília. Trabalho remoto."],
          [
            "Você usa IA para programar?",
            "Sim, com método: Claude Code e Codex com agentes por papel, PRD e arquitetura antes do código, e testes automatizados com CI como critério de aceite.",
            "A base eu domino sem assistência; a IA acelera.",
          ],
          [
            "Posso ver o código?",
            "Os repositórios dos produtos são privados. Os dois estão no ar para você ver funcionando: o Poupfy na App Store e o Comandafy em ftechworks.com.br/comandafy.",
          ],
          [
            "Qual é a sua formação?",
            "Análise e Desenvolvimento de Sistemas na UNIVALI, com conclusão em 2027. Antes, técnico em Informática integrado ao ensino médio no Instituto Federal Catarinense.",
          ],
        ],
      },
    },

    contato: {
      titulo: "Precisa de alguém que entregue o produto inteiro?",
      termos:
        "Remoto, UTC-3. CLT ou PJ, no Brasil ou no exterior. Português nativo; inglês técnico intermediário, na leitura e na escrita.",
    },
  },

  caso: {
    produtos: "Produtos",
    ficha: "Ficha do projeto",
    fichaRotulos: { papel: "Papel", periodo: "Período", status: "Status", plataforma: "Plataforma", link: "Link" },
    lerDecisoes: "Ler as decisões",
    problema: "O problema",
    decisoes: "Decisões",
    porque: "Por quê",
    descartado: "Descartado",
    custo: "Custo",
    resultado: "Resultado verificável",
    telas: "Telas",
    stack: "Stack técnica",
    colunas: ["Camada", "Tecnologia", "Para quê"],
    proximos: "Outros produtos",
    voltar: ["Voltar", "Todos os produtos"],
    proximo: "Próximo produto",
    camadas: { servidor: "servidor", dados: "dados", api: "api", interface: "interface" },
    porDentroTexto: "Quatro camadas, todas feitas por mim. Cada legenda leva à decisão tomada naquela camada.",
  },

  casos: {
    poupfy: {
      linha: "App de finanças pessoais para iPhone, na App Store, com assinatura mensal e anual.",
      status: "Na App Store desde setembro de 2026",
      acao: "Abrir na App Store",
      ficha: {
        papel: "Sozinho, do banco de dados ao marketing",
        periodo: "Março de 2026 a hoje",
        status: "Na App Store desde setembro de 2026",
        plataforma: "iPhone, com API própria",
        link: "apps.apple.com/br/app/poupfy",
      },
      porDentroTitulo: "Por dentro do Poupfy",
      figura: "Vista explodida do Poupfy em quatro camadas: interface, API, dados e servidor",
      legendas: [
        [
          "#stack-secao",
          <>
            <u>React Native e Expo</u>, widgets do iPhone em Swift
          </>,
        ],
        [
          "#cobranca",
          <>
            <u>Cobrança com dois caminhos</u> e <u>servidor MCP</u>
          </>,
        ],
        [
          "#cifrado",
          <>
            <u>Campos cifrados</u> com <span className="nw">AES-256-GCM</span>
          </>,
        ],
        ["#stack-secao", "Docker e Coolify, no Brasil"],
      ],
      problema:
        "App de banco mostra um banco só, e planilha dá trabalho. Quem tem cartão, parcela e uma empresa MEI precisa ver o mês inteiro num lugar, sem misturar o dinheiro pessoal com o da empresa.",
      decisoes: [
        {
          id: "cobranca",
          titulo: "Cobrança com dois caminhos.",
          texto: "No Brasil, a assinatura passa pela Stripe, com cartão e Pix. Fora do Brasil, pela compra dentro do app da Apple.",
          porque: "No Brasil, o Pix é como as pessoas pagam.",
          descartado: "Só a compra pela Apple em todo lugar, que deixaria o Pix de fora.",
          custo: "Duas origens de cobrança para manter coerentes. O webhook idempotente da Stripe é a fonte da verdade do plano.",
        },
        {
          id: "mcp",
          titulo: "O agente conversa, o Poupfy calcula.",
          texto:
            "Um servidor MCP no ar desde outubro de 2026 deixa a pessoa ligar o ChatGPT ou o Claude dela à conta, com OAuth e 17 ferramentas.",
          porque: "Modelo de linguagem erra conta. Os números saem da mesma API que o app usa.",
          descartado: "Mandar o extrato inteiro para o modelo resumir.",
          custo: "Cada regra nova do app precisa chegar às ferramentas, com teste.",
        },
        {
          id: "cifrado",
          titulo: "Dado sensível cifrado no banco.",
          texto: "Descrições, valores, anotações e limites são gravados com AES-256-GCM, e o servidor fica no Brasil.",
          porque: "Quem obtiver acesso ao banco vê texto embaralhado.",
          descartado: "Confiar só na senha do banco e no disco cifrado.",
          custo: "Busca e soma não rodam direto no SQL sobre o campo cifrado; o cálculo é feito na API.",
        },
      ],
      resultados: [
        "Na App Store desde setembro de 2026, com usuários reais desde o primeiro mês.",
        "Assinatura de R$ 12,90 por mês ou R$ 109,90 por ano, com 7 dias grátis.",
        "Servidor MCP em produção desde outubro de 2026.",
      ],
      telasSub: "Versão 2.0.",
      telas: [
        ["poupfy-inicio-pessoal", "Tela inicial do Poupfy com o saldo do mês, o cartão de crédito e os atalhos para receber, pagar e ver relatórios", "Início", "O saldo do mês, o cartão e os atalhos."],
        ["poupfy-widget-grande", "Widget grande do Poupfy na tela de início do iPhone, com o saldo de outubro e as três maiores categorias", "Widget", "O mês na tela de início do iPhone."],
        ["poupfy-registrar-pagamento-da-fatura", "Registro de pagamento da fatura de outubro, com o valor, a data do pagamento e um aviso de atraso", "Fatura", "Pagar a fatura inteira ou em parte, com a data."],
        ["poupfy-contas-das", "Lista de contas a pagar do mês, com o DAS de setembro vencido e os botões para emitir a guia e pagar", "Contas", "O que vence no mês, com a guia do DAS."],
      ],
      stackLegenda: "O que roda em cada parte do Poupfy e para quê.",
      stack: [
        ["app", "React Native, Expo SDK 58, TypeScript", "O app do iPhone, com animações em Reanimated e fundos em Skia."],
        ["nativo ios", "Swift, WidgetKit", "Os widgets da tela de início, escritos à mão no projeto iOS."],
        ["aparelho", "Keychain e Face ID", "Sessão guardada no Keychain e app travado pela biometria."],
        ["api", "Node.js, Express 5, Zod", "API REST com cada entrada validada por esquema."],
        ["dados", "PostgreSQL, Prisma 7, AES-256-GCM", "Campos sensíveis cifrados antes de gravar."],
        ["proteção", "JWT, bcrypt, Helmet, Redis", "Login com token de acesso e de renovação; limite de requisições guardado no Redis."],
        ["cobrança", "Stripe, compra pela Apple", "Cartão e Pix no Brasil, com webhook idempotente; Apple fora do Brasil."],
        ["ia", "MCP, OAuth", "17 ferramentas que ligam o ChatGPT ou o Claude à conta da pessoa."],
        ["arquivos", "pdfkit, ExcelJS, pdf.js", "Relatórios em PDF e planilha, e leitura de extratos em PDF."],
        ["operação", "Docker, Coolify, Sentry, EAS Build", "Servidor no Brasil, erros monitorados no app e na API, builds do iOS na nuvem."],
      ],
    },

    comandafy: {
      linha: "PDV e comanda para cafeterias: atendimento, cozinha, caixa, iFood e nota fiscal num sistema só.",
      status: "Em operação em 3 cafeterias de uma rede",
      acao: "Conhecer o produto",
      ficha: {
        papel: "Sozinho, do banco de dados à instalação na loja",
        periodo: "Julho de 2026 a hoje",
        status: "Em operação em 3 cafeterias de uma rede",
        plataforma: "Web instalável no celular, no tablet e no caixa",
        link: "ftechworks.com.br/comandafy",
      },
      porDentroTitulo: "Por dentro do Comandafy",
      figura: "Vista explodida do Comandafy em quatro camadas: interface, API, dados e servidor",
      legendas: [
        [
          "#stack-secao",
          <>
            <u>Web instalável</u> no celular, no tablet e no caixa
          </>,
        ],
        [
          "#tempo-real",
          <>
            <u>Cozinha em tempo real</u>, iFood e nota fiscal
          </>,
        ],
        [
          "#offline",
          <>
            PostgreSQL multi-tenant e <u>fila offline</u> no aparelho
          </>,
        ],
        ["#stack-secao", "Docker, Coolify e ponte de impressão na loja"],
      ],
      problema:
        "No pico, a cafeteria não pode parar de vender. A internet da loja cai, às vezes por horas, a impressora trava, e o pedido do iFood chega junto com o do salão. No fim do dia, cada venda precisa da nota fiscal certa.",
      decisoes: [
        {
          id: "offline",
          titulo: "A venda não espera a rede.",
          texto:
            "Cada pedido entra numa fila no próprio aparelho e sincroniza quando a conexão volta. Cada operação leva uma chave, então o mesmo pedido enviado duas vezes não vira duas comandas.",
          porque: "A internet das lojas cai com frequência, às vezes por horas.",
          descartado: "Depender só de uma internet reserva.",
          custo: "Decidir o que acontece quando a rede volta e duas pessoas mexeram na mesma comanda.",
        },
        {
          id: "fiscal",
          titulo: "A nota fiscal fica atrás de uma porta.",
          texto: (
            <>
              O domínio de vendas fala com um <code>FiscalProvider</code>, nunca com o emissor. Em outubro troquei o emissor da Focus NFe
              para a Brasil NFe sem mexer numa linha das vendas.
            </>
          ),
          porque: "Em Santa Catarina, a NFC-e exige emissor credenciado, e o custo do primeiro emissor não cabia no preço por loja.",
          descartado: "Chamar o emissor direto de dentro do caixa.",
          custo: "Manter o formato de cada emissor dentro do pacote fiscal.",
        },
        {
          id: "tempo-real",
          titulo: "Cozinha em tempo real, impressora fora do caminho.",
          texto:
            "A fila da cozinha chega por WebSocket, com uma sala por loja. A impressão passa por uma ponte local, e impressora travada nunca bloqueia a venda: o caixa reimprime.",
          porque: "No pico, cada segundo de atraso aparece no balcão.",
          descartado: "Consultar o servidor a cada poucos segundos.",
          custo: "Manter uma conexão aberta por aparelho e reconectar sozinho quando a rede volta.",
        },
      ],
      resultados: [
        "Em operação em 3 cafeterias de uma rede.",
        "NFC-e emitida nas 3 lojas, com o cupom impresso na térmica do caixa.",
        "Integração com o iFood disponível nas 3 lojas: os pedidos entram na mesma fila da cozinha.",
        "Testes e2e de isolamento entre lojas e da fila sem internet; CI com build, lint e testes a cada push.",
      ],
      telasSub: "Com dados de demonstração.",
      telas: [
        ["comandafy-comandas", "Comandas abertas no salão, com o status de cada mesa e o total do salão agora", "Comandas", "O salão agora, com o que precisa de atenção primeiro."],
        ["comandafy-cozinha", "Fila do balcão na cozinha, com o tempo de cada pedido e os itens prontos riscados", "Cozinha", "A fila do balcão, com o tempo de cada pedido."],
        ["comandafy-caixa", "Caixa com as comandas a cobrar e o valor de cada uma", "Caixa", "O que falta cobrar, mesa por mesa."],
        ["comandafy-comanda-celular", "Comanda da mesa 3 no celular do atendente, com os itens em preparo e o total parcial", "Celular", "A comanda na mão do atendente."],
      ],
      stackLegenda: "O que roda em cada parte do Comandafy e para quê.",
      stack: [
        ["monorepo", "pnpm workspaces, TypeScript", "API, web, ponte de impressão e os pacotes fiscal e de contratos no mesmo repositório."],
        ["web", "React, Vite, Tailwind CSS, PWA com Workbox", "Instalável no celular, no tablet e no caixa, e abre sem rede."],
        ["offline", "Dexie (IndexedDB), TanStack Query, Zustand", "Fila de pedidos no aparelho, com chave de idempotência por operação."],
        ["tempo real", "socket.io", "Uma sala por loja: a cozinha e o caixa veem o pedido na hora."],
        ["api", "NestJS, Prisma 7, PostgreSQL", "Várias lojas no mesmo banco, cada uma isolada."],
        ["acesso", "JWT, argon2, Helmet, limite de requisições", "Papéis de dono, gerente, atendente e caixa."],
        ["fiscal", "FiscalProvider: Brasil NFe, Focus NFe", "NFC-e por um emissor credenciado em Santa Catarina."],
        ["integração", "API do iFood", "Pedidos do iFood entram na fila da cozinha."],
        ["impressão", "Ponte local em Node.js, ESC/POS", "Cupom e comanda na térmica, com o QR Code da nota; um emulador permite desenvolver sem impressora."],
        ["testes", "Jest, Supertest, Vitest, GitHub Actions", "Testes e2e de isolamento entre lojas e de idempotência da fila; o CI roda build, lint e testes a cada push."],
        ["operação", "Docker Compose, Coolify, PostgreSQL com backup", "Deploy a cada push na main, com TLS e backup agendado do banco."],
      ],
    },
  },

  naoEncontrada: {
    titulo: "Esta página não existe.",
    texto: "O endereço pode ter mudado com o site novo. Os produtos, o currículo e o contato estão na página inicial.",
    voltar: "Ir para a página inicial",
    ingles: "English version",
  },
};
