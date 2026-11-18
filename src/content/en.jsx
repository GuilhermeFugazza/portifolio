import { Experiencia, Relogio } from "../components/Tempo.jsx";

// All site copy in English. Same facts as pt.jsx, written for hiring teams in the US and abroad.
export default {
  lang: "en",
  html: "en",
  locale: "en_US",
  outro: { lang: "pt", sigla: "PT", nome: "Português" },
  sigla: "EN",

  cv: { href: "/cv/Guilherme-Fugazza-Resume-US.pdf", curto: "Resume", longo: "Download resume" },

  ui: {
    pular: "Skip to content",
    marca: "Guilherme Fugazza, home",
    idioma: "Language",
    rodape: ["Guilherme Fugazza, Full-stack Product Engineer", "Balneário Camboriú, Brazil, 2026"],
    dockHome: {
      rotulo: "Sections",
      itens: [
        ["produtos", "Products"],
        ["por-dentro", "Inside"],
        ["sobre", "About"],
        ["contato", "Contact"],
      ],
    },
    dockCase: { rotulo: "Case study sections", produtos: "Products", porDentro: "Inside", decisoes: "Decisions", telas: "Screens" },
  },

  meta: {
    home: {
      titulo: "Guilherme Fugazza, Full-stack Product Engineer",
      descricao: "I build the whole product, from the database to the app in the store. Poupfy is live on the App Store, and Comandafy runs in 3 cafés.",
    },
    poupfy: {
      titulo: "Poupfy case study, Guilherme Fugazza",
      descricao: "Personal finance app for iPhone, live on the App Store with monthly and yearly plans. Built solo, from the database to marketing.",
    },
    comandafy: {
      titulo: "Comandafy case study, Guilherme Fugazza",
      descricao: "Point of sale and order tickets for cafés, running in 3 stores. Built solo, from the database to on-site setup.",
    },
    404: {
      titulo: "Page not found, Guilherme Fugazza",
      descricao: "This page doesn't exist. The products and resume are on the home page.",
    },
  },

  home: {
    heroi: {
      disponivel: "Open to remote roles, full-time or contract",
      papel: (
        <>
          Full-stack Product Engineer with <Experiencia /> of experience, leading a small team.
        </>
      ),
      frase: "I build the whole product, from the database to the app in the store, and I keep it running after launch.",
      verProdutos: "See the products",
      fluxoRotulo: "From the database to the store: the layers I build",
      camadas: [
        ["Database", "PostgreSQL, Prisma, Redis"],
        ["API", "Node.js, NestJS, Express"],
        ["Interface", "React Native, React"],
        ["Deploy and operations", "Docker, Coolify, EAS Build"],
      ],
      poupfy: ["Personal finance, iPhone", "On the App Store"],
      comandafy: ["Point of sale for cafés", "In 3 cafés"],
    },

    produtos: {
      titulo: "In use today",
      verCase: "Read the case study",
      papel: "Role:",
      conhecer: "Visit the product site",
      appStore: "View on the App Store",
      poupfy: {
        linha: "Personal finance app for iPhone.",
        sr: ": Poupfy",
        status: "On the App Store since September 2026, with monthly and yearly plans.",
        fatos: ["Pix and card payments through Stripe.", "MCP server for ChatGPT and Claude.", "Data encrypted on the server."],
        papel: "solo, from the database to marketing.",
      },
      comandafy: {
        linha: "Point of sale and order tickets for cafés.",
        sr: ": Comandafy",
        status: "Running in 3 cafés of one chain.",
        fatos: ["Keeps selling when the internet drops.", "Real-time kitchen queue.", "Tax receipts and iFood orders."],
        papel: "solo, from the database to on-site setup.",
      },
      mensageria: {
        selo: "Client work",
        titulo: "Condominium Mailroom",
        lead: "Front desk and package system for Edifício Neo Superquadra, with face-recognition pickup.",
        texto:
          "Runs on the building's own server. Biometric data and several buildings share one database, so isolation lives in PostgreSQL, with Row-Level Security, not in API code.",
        papel: "solo, from contract to install.",
        nota: "Project details are confidential under contract. Screens use test data.",
        telas: [
          ["mensageria-2-encomendas", "Resident's package screen, with the status of each package, in test data"],
          ["mensageria-5-perfil", "Resident profile with face recognition enrolled and LGPD privacy options, in test data"],
          ["mensageria-4-reservas", "Booking screen for the building's shared spaces, with instructions, in test data"],
        ],
      },
    },

    porDentro: {
      titulo: "Inside",
      sub: "Each product opened up in layers, from the screen to the server. I built every one of them.",
      texto: "Switch products to see each stack. The lines show what runs in each layer.",
      seletor: "Product shown",
      figura: "Exploded view of the product in four layers: interface, API, data, and server",
      produtos: {
        poupfy: {
          titulo: "Inside Poupfy",
          link: "Read the Poupfy case study",
          legendas: [
            "React Native and Expo, iPhone widgets in Swift",
            "Express, Stripe, and an MCP server",
            <>
              PostgreSQL, fields encrypted with <span className="nw">AES-256-GCM</span>
            </>,
            "Docker and Coolify, hosted in Brazil",
          ],
        },
        comandafy: {
          titulo: "Inside Comandafy",
          link: "Read the Comandafy case study",
          legendas: [
            "Installable web app on phone, tablet, and register",
            "NestJS, WebSocket, iFood, and tax receipts",
            "Multi-tenant PostgreSQL and an offline queue on the device",
            "Docker, Coolify, and an in-store print bridge",
          ],
        },
      },
    },

    sobre: {
      titulo: "About",
      bio: (
        <>
          I've been a full-stack developer for <Experiencia />, based in Balneário Camboriú, Brazil. Since March 2024 I've worked at a
          property and aviation management company, where I've led the development team since 2025. On the side, I built from scratch and still run
          two products in use: Poupfy and Comandafy.
        </>
      ),
      numerosRotulo: "By the numbers",
      numeros: [
        { rotulo: "Experience as a developer", valor: <Experiencia />, texto: "Since March 2024.", principal: true },
        { rotulo: "I coordinate", valor: "2", texto: "developers, on a team of 3 including me." },
        { rotulo: "Products of my own", valor: "2", texto: "in use: Poupfy and Comandafy." },
        { rotulo: "Automation", valor: "2 to 3 h", texto: "a day saved for the support and finance teams." },
      ],
      trajetoria: {
        titulo: "Career",
        itens: [
          {
            agora: true,
            quando: "2026 to present",
            cargo: "Full-stack Developer",
            onde: "FTech Works, on the side",
            pontos: [
              <>
                <b>Poupfy:</b> from the first commit in March 2026 to the App Store in September, with subscriptions.
              </>,
              <>
                <b>Comandafy:</b> started in July 2026 and now runs in 3 cafés.
              </>,
              <>
                <b>Condominium Mailroom:</b> client work for Edifício Neo Superquadra, with face recognition and LGPD compliance.
              </>,
            ],
          },
          {
            agora: true,
            quando: "2025 to present",
            cargo: "Mid-level Full-stack Developer",
            onde: "Property and aviation management company",
            pontos: [
              "I lead a team of 3 developers, myself included: architecture, coding and Git standards, code review, and work planning.",
              "I plan deliveries with company leadership and the teams that use our systems, and mentor our junior developer.",
              "Organized logs, audit trails, and health checks in every system; I'm the first to respond when something breaks.",
              "n8n and Python automations that save 2 to 3 hours a day.",
              "React Native and Expo apps for iOS and Android, Node.js and Python APIs, and React dashboards.",
              "Integrations with Superlógica, Sicoob, Sicredi, and Zendesk; deployment on Ubuntu Server, Proxmox, and Cloudflare.",
            ],
          },
          {
            quando: "March 2024",
            cargo: "Systems Development Technician",
            onde: "Same company. Joined as a developer; this is still my registered job title.",
          },
          { quando: "Expected 2027", cargo: "Systems Analysis and Development", onde: "UNIVALI" },
          { quando: "Completed", cargo: "Technical Degree in IT", onde: "Instituto Federal Catarinense, combined with high school" },
        ],
      },
      ficha: {
        titulo: "At a glance",
        itens: [
          ["Experience", <Experiencia key="e" />, "since March 2024"],
          ["Role", "Full-stack Product Engineer", "leading a team of 3"],
          ["Availability", "Open to roles, full-time or contract", null, true],
          ["Work", "Remote, in Brazil or abroad"],
          ["Location", "Balneário Camboriú, SC, Brazil"],
          ["Time zone", "UTC-3", <>currently <Relogio /></>],
          ["Languages", "Native Portuguese", "Intermediate technical English, reading and writing"],
          ["Now", "Taking Poupfy beyond Brazil, with multiple currencies, translation, and Apple in-app purchases."],
        ],
        metodoTitulo: "How I work, in order",
        metodo: [
          ["Docs before code.", "PRD, architecture, and sprints written before the first line."],
          ["AI on solid fundamentals.", "Claude Code and Codex with role-based agents; I own the fundamentals without assistance."],
          ["Tests as the acceptance bar.", "Automated tests and CI decide when work is done."],
        ],
      },
      stack: {
        titulo: "Stack",
        base: "Daily core",
        nucleo: [
          ["typescript", "#3178C6", "TypeScript", "From database to app, in both products"],
          ["react", "#61DAFB", "React Native", "The Poupfy app, on the App Store"],
          ["nodedotjs", "#5FA04E", "Node.js", "The Poupfy and Comandafy APIs"],
          ["react", "#61DAFB", "React", "Comandafy and web dashboards"],
          ["postgresql", "#4169E1", "PostgreSQL", "Many businesses in one database, isolated"],
          ["docker", "#2496ED", "Docker", "Deploys for both products, with Coolify"],
        ],
        porArea: "By area",
        areas: [
          ["Languages", [["javascript", "JavaScript"], ["python", "Python"], ["codigo", "SQL"], ["swift", "Swift"]]],
          ["Mobile", [["expo", "Expo"], ["pacote", "EAS Build"], ["apple", "iPhone widgets"]]],
          ["Web", [["vite", "Vite"], ["tailwindcss", "Tailwind CSS"], ["pwa", "PWA"]]],
          ["API", [["nestjs", "NestJS"], ["express", "Express"], ["socketdotio", "WebSocket"], ["zod", "Zod"], ["swagger", "OpenAPI"], ["fila", "Queues (BullMQ)"], ["modelcontextprotocol", "MCP"]]],
          ["Data", [["prisma", "Prisma"], ["redis", "Redis"], ["mysql", "MySQL"], ["banco", "Row-Level Security"]]],
          [
            "Infrastructure",
            [
              ["coolify", "Coolify"],
              ["ubuntu", "Ubuntu Server"],
              ["nuvem", "AWS (EC2)"],
              ["proxmox", "Proxmox"],
              ["caddy", "Caddy"],
              ["nginx", "Nginx"],
              ["cloudflare", "Cloudflare"],
              ["githubactions", "GitHub Actions"],
            ],
          ],
          [
            "Quality and operations",
            [["jest", "Jest"], ["vitest", "Vitest"], ["codigo", "Supertest"], ["sentry", "Sentry"], ["lista", "Logs and audit trails"], ["pulso", "Health checks"]],
          ],
          ["Payments", [["stripe", "Stripe"], ["pix", "Pix"], ["apple", "Apple in-app purchase"]]],
          ["Security", [["jsonwebtokens", "JWT with refresh tokens"], ["cadeado", "argon2"], ["cadeado", "AES-256-GCM"], ["escudo", "LGPD"]]],
          [
            "Automation and integrations",
            [["n8n", "n8n"], ["zendesk", "Zendesk"], ["tomada", "Superlógica"], ["tomada", "Sicoob"], ["tomada", "Sicredi"]],
          ],
        ],
      },
      perguntas: {
        titulo: "Questions hiring teams ask",
        sub: "What usually comes up before the first call.",
        itens: [
          [
            "How much experience do you have?",
            <>
              I've been a developer for <Experiencia />, since March 2024, at a property and aviation management company, where I've led
              the development team since 2025. We are 3 developers, and I coordinate the other 2.
            </>,
            "On the side, I built from scratch and run Poupfy, on the App Store, and Comandafy, in 3 cafés.",
          ],
          [
            "What kind of role are you looking for?",
            "Full-stack or product engineer, remote, full-time or contract, in Brazil or abroad.",
            "I make the most difference where one person needs to carry a product end to end, as in small and mid-sized companies.",
          ],
          [
            "Do you work alone or on a team?",
            "Both. At my current job, I lead a team of 3 developers: I set the architecture and standards, review code, plan deliveries with company leadership, and mentor our junior developer. On my own products, I do everything, from the database to talking with customers.",
          ],
          [
            "What's your main stack?",
            "TypeScript end to end: React and React Native on the front end, Node.js with NestJS or Express for APIs, PostgreSQL with Prisma for data, and Docker on the server. Python for automation.",
          ],
          ["How's your English?", "Intermediate technical English, reading and writing. Conversation is a work in progress."],
          ["What's your time zone?", "UTC-3, Brasília time. Fully remote."],
          [
            "Do you use AI to code?",
            "Yes, with a method: Claude Code and Codex with role-based agents, a PRD and architecture before code, and automated tests with CI as the acceptance bar.",
            "I own the fundamentals without assistance; AI makes me faster.",
          ],
          [
            "Can I see the code?",
            "The product repositories are private. Both products are live, so you can see them working: Poupfy on the App Store and Comandafy at ftechworks.com.br/comandafy.",
          ],
          [
            "What's your education?",
            "Systems Analysis and Development at UNIVALI, graduating in 2027. Before that, a technical high school degree in IT at the Instituto Federal Catarinense.",
          ],
        ],
      },
    },

    contato: {
      titulo: "Need someone who ships the whole product?",
      termos: "Remote, UTC-3. Full-time or contract, in Brazil or abroad. Native Portuguese; intermediate technical English, reading and writing.",
    },
  },

  caso: {
    produtos: "Products",
    ficha: "Project facts",
    fichaRotulos: { papel: "Role", periodo: "Timeline", status: "Status", plataforma: "Platform", link: "Link" },
    lerDecisoes: "Read the decisions",
    problema: "The problem",
    decisoes: "Decisions",
    porque: "Why",
    descartado: "Ruled out",
    custo: "Cost",
    resultado: "Verifiable results",
    telas: "Screens",
    stack: "Tech stack",
    colunas: ["Layer", "Technology", "Purpose"],
    proximos: "Other products",
    voltar: ["Back", "All products"],
    proximo: "Next product",
    camadas: { servidor: "server", dados: "data", api: "api", interface: "interface" },
    porDentroTexto: "Four layers, all built by me. Each label links to the decision made in that layer.",
  },

  casos: {
    poupfy: {
      linha: "Personal finance app for iPhone, on the App Store with monthly and yearly plans.",
      status: "On the App Store since September 2026",
      acao: "View on the App Store",
      ficha: {
        papel: "Solo, from the database to marketing",
        periodo: "March 2026 to present",
        status: "On the App Store since September 2026",
        plataforma: "iPhone, with its own API",
        link: "apps.apple.com/br/app/poupfy",
      },
      porDentroTitulo: "Inside Poupfy",
      figura: "Exploded view of Poupfy in four layers: interface, API, data, and server",
      legendas: [
        [
          "#stack-secao",
          <>
            <u>React Native and Expo</u>, iPhone widgets in Swift
          </>,
        ],
        [
          "#cobranca",
          <>
            <u>Two billing paths</u> and an <u>MCP server</u>
          </>,
        ],
        [
          "#cifrado",
          <>
            <u>Encrypted fields</u> with <span className="nw">AES-256-GCM</span>
          </>,
        ],
        ["#stack-secao", "Docker and Coolify, hosted in Brazil"],
      ],
      problema:
        "A bank app shows one bank, and spreadsheets take work. People with credit cards, installments, and a small business need the whole month in one place, without mixing personal and business money.",
      decisoes: [
        {
          id: "cobranca",
          titulo: "Two billing paths.",
          texto: "In Brazil, subscriptions run through Stripe, with card and Pix. Outside Brazil, through Apple in-app purchase.",
          porque: "In Brazil, Pix is how people pay.",
          descartado: "Apple in-app purchase everywhere, which would leave Pix out.",
          custo: "Two billing sources to keep in sync. The idempotent Stripe webhook is the source of truth for the plan.",
        },
        {
          id: "mcp",
          titulo: "The agent talks, Poupfy does the math.",
          texto:
            "An MCP server, live since October 2026, lets people connect their own ChatGPT or Claude to their account, with OAuth and 17 tools.",
          porque: "Language models get arithmetic wrong. The numbers come from the same API the app uses.",
          descartado: "Sending the full statement to the model to summarize.",
          custo: "Every new rule in the app has to reach the tools, with tests.",
        },
        {
          id: "cifrado",
          titulo: "Sensitive data encrypted in the database.",
          texto: "Descriptions, amounts, notes, and limits are stored with AES-256-GCM, on servers in Brazil.",
          porque: "Anyone who gets into the database sees scrambled text.",
          descartado: "Relying only on the database password and disk encryption.",
          custo: "Search and totals can't run in SQL over encrypted fields; the API does the math.",
        },
      ],
      resultados: [
        "On the App Store since September 2026, with real users from the first month.",
        "R$ 12.90 a month or R$ 109.90 a year, with a 7-day free trial.",
        "MCP server in production since October 2026.",
      ],
      telasSub: "Version 2.0.",
      telas: [
        ["poupfy-inicio-pessoal", "Poupfy home screen with the month's balance, the credit card, and shortcuts to receive, pay, and see reports", "Home", "The month's balance, the card, and shortcuts."],
        ["poupfy-widget-grande", "Large Poupfy widget on the iPhone Home Screen, with October's balance and the top three categories", "Widget", "The month on the iPhone Home Screen."],
        ["poupfy-registrar-pagamento-da-fatura", "Logging a payment on the October card statement, with the amount, the payment date, and a late notice", "Statement", "Pay the full statement or part of it, with the date."],
        ["poupfy-contas-das", "This month's bills, with September's overdue DAS tax slip and buttons to issue the slip and pay", "Bills", "What's due this month, including the DAS tax slip."],
      ],
      stackLegenda: "What runs in each part of Poupfy, and why.",
      stack: [
        ["app", "React Native, Expo SDK 58, TypeScript", "The iPhone app, with Reanimated animations and Skia backgrounds."],
        ["native ios", "Swift, WidgetKit", "Home Screen widgets, written by hand in the iOS project."],
        ["device", "Keychain and Face ID", "Session stored in the Keychain and the app locked behind biometrics."],
        ["api", "Node.js, Express 5, Zod", "REST API with every input validated by a schema."],
        ["data", "PostgreSQL, Prisma 7, AES-256-GCM", "Sensitive fields encrypted before they are stored."],
        ["protection", "JWT, bcrypt, Helmet, Redis", "Sign-in with access and refresh tokens; rate limits stored in Redis."],
        ["billing", "Stripe, Apple in-app purchase", "Card and Pix in Brazil, with an idempotent webhook; Apple outside Brazil."],
        ["ai", "MCP, OAuth", "17 tools that connect ChatGPT or Claude to the person's account."],
        ["files", "pdfkit, ExcelJS, pdf.js", "PDF and spreadsheet reports, and reading bank statements from PDF."],
        ["operations", "Docker, Coolify, Sentry, EAS Build", "Servers in Brazil, error monitoring in the app and the API, iOS builds in the cloud."],
      ],
    },

    comandafy: {
      linha: "Point of sale and order tickets for cafés: front of house, kitchen, register, iFood, and tax receipts in one system.",
      status: "Running in 3 cafés of one chain",
      acao: "Visit the product site",
      ficha: {
        papel: "Solo, from the database to on-site setup",
        periodo: "July 2026 to present",
        status: "Running in 3 cafés of one chain",
        plataforma: "Installable web app on phone, tablet, and register",
        link: "ftechworks.com.br/comandafy",
      },
      porDentroTitulo: "Inside Comandafy",
      figura: "Exploded view of Comandafy in four layers: interface, API, data, and server",
      legendas: [
        [
          "#stack-secao",
          <>
            <u>Installable web app</u> on phone, tablet, and register
          </>,
        ],
        [
          "#tempo-real",
          <>
            <u>Real-time kitchen</u>, iFood, and tax receipts
          </>,
        ],
        [
          "#offline",
          <>
            Multi-tenant PostgreSQL and an <u>offline queue</u> on the device
          </>,
        ],
        ["#stack-secao", "Docker, Coolify, and an in-store print bridge"],
      ],
      problema:
        "At peak hours, a café can't stop selling. The store's internet drops, sometimes for hours, the printer jams, and iFood orders arrive alongside table orders. At the end of the day, every sale needs the right tax receipt.",
      decisoes: [
        {
          id: "offline",
          titulo: "Sales don't wait for the network.",
          texto:
            "Every order goes into a queue on the device and syncs when the connection is back. Each operation carries a key, so the same order sent twice never becomes two tickets.",
          porque: "Store internet drops often, sometimes for hours.",
          descartado: "Relying on a backup internet line alone.",
          custo: "Deciding what happens when the network returns and two people changed the same ticket.",
        },
        {
          id: "fiscal",
          titulo: "Tax receipts sit behind a port.",
          texto: (
            <>
              The sales domain talks to a <code>FiscalProvider</code>, never to the issuer. In October I switched issuers from Focus NFe to
              Brasil NFe without touching a line of sales code.
            </>
          ),
          porque: "In Santa Catarina, NFC-e receipts require a certified issuer, and the first issuer's cost didn't fit the per-store price.",
          descartado: "Calling the issuer directly from the register.",
          custo: "Keeping each issuer's format inside the fiscal package.",
        },
        {
          id: "tempo-real",
          titulo: "Real-time kitchen, printer out of the way.",
          texto:
            "The kitchen queue arrives over WebSocket, with one room per store. Printing goes through a local bridge, and a jammed printer never blocks a sale: the register reprints.",
          porque: "At peak hours, every second of delay shows up at the counter.",
          descartado: "Polling the server every few seconds.",
          custo: "Keeping one open connection per device and reconnecting on its own when the network returns.",
        },
      ],
      resultados: [
        "Running in 3 cafés of one chain.",
        "NFC-e tax receipts issued in all 3 stores, printed on the register's thermal printer.",
        "iFood integration available in all 3 stores: orders land in the same kitchen queue.",
        "End-to-end tests for store isolation and the offline queue; CI runs build, lint, and tests on every push.",
      ],
      telasSub: "With demo data.",
      telas: [
        ["comandafy-comandas", "Open tickets on the floor, with each table's status and the floor total right now", "Tickets", "The floor right now, with what needs attention first."],
        ["comandafy-cozinha", "Counter queue in the kitchen, with each order's time and finished items crossed out", "Kitchen", "The counter queue, with each order's time."],
        ["comandafy-caixa", "Register with the tickets left to charge and the amount on each", "Register", "What's left to charge, table by table."],
        ["comandafy-comanda-celular", "Table 3's ticket on the server's phone, with items in progress and the running total", "Phone", "The ticket in the server's hand."],
      ],
      stackLegenda: "What runs in each part of Comandafy, and why.",
      stack: [
        ["monorepo", "pnpm workspaces, TypeScript", "API, web app, print bridge, and the fiscal and contracts packages in one repository."],
        ["web", "React, Vite, Tailwind CSS, PWA with Workbox", "Installable on phone, tablet, and register, and opens without a network."],
        ["offline", "Dexie (IndexedDB), TanStack Query, Zustand", "Order queue on the device, with an idempotency key per operation."],
        ["real time", "socket.io", "One room per store: the kitchen and the register see each order instantly."],
        ["api", "NestJS, Prisma 7, PostgreSQL", "Many stores in one database, each one isolated."],
        ["access", "JWT, argon2, Helmet, rate limiting", "Owner, manager, server, and cashier roles."],
        ["fiscal", "FiscalProvider: Brasil NFe, Focus NFe", "NFC-e receipts through an issuer certified in Santa Catarina."],
        ["integration", "iFood API", "iFood orders go into the kitchen queue."],
        ["printing", "Local Node.js bridge, ESC/POS", "Receipts and tickets on the thermal printer, with the receipt's QR code; an emulator allows development without a printer."],
        ["tests", "Jest, Supertest, Vitest, GitHub Actions", "End-to-end tests for store isolation and queue idempotency; CI runs build, lint, and tests on every push."],
        ["operations", "Docker Compose, Coolify, PostgreSQL with backups", "Deploys on every push to main, with TLS and scheduled database backups."],
      ],
    },
  },

  naoEncontrada: {
    titulo: "This page doesn't exist.",
    texto: "The address may have changed with the new site. The products, resume, and contact details are on the home page.",
    voltar: "Go to the home page",
  },
};
