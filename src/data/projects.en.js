import { projects as projectsPt } from "./projects.js";

// Só os campos de texto mudam; slug, stack, pastas de captura e links vêm do PT.
const en = {
  "mensageria-condominios": {
    name: "Condominium Mailroom",
    shortDescription:
      "Multi-tenant condominium management system with a web panel and a resident app, covering packages, notices, amenity bookings and pickup released by facial recognition. Installed on the building's own server, in acceptance testing with the client.",
    status: "Acceptance testing",
    overview:
      "Commissioned by a residential building to replace paper-based package control. The scope grew to notices, common-area bookings and integration with the lobby's physical access control.",
    problem:
      "Packages handed over at the front desk and picked up by someone other than the recipient, with no record of who took what. Add biometric data: pickup is released by facial recognition, which puts the system under Brazil's LGPD as sensitive personal-data processing. And the building wanted the server inside the premises, not in the cloud.",
    solution:
      "Multi-tenant isolation enforced in the database with Row-Level Security by tenant_id in PostgreSQL, not only in the application layer: a query bug cannot leak one building's data into another. Intelbras controller credentials never leave the backend and are encrypted per tenant. The delivery runs on-premise on Ubuntu Server with PostgreSQL, Node and Caddy under systemd, without Docker. That is an operations decision, because the building itself maintains the machine day to day.",
    responsibilities: [
      "Multi-tenant data model with Row-Level Security by tenant_id in PostgreSQL",
      "Fastify + TypeScript API with zod validation and OpenAPI generated from the same schemas",
      "argon2id authentication with access JWT and rotating refresh tokens; RBAC by role (manager, doorman, caretaker, resident)",
      "Resident app in Expo Router consuming the real API: packages, notices, bookings and LGPD consent",
      "Integration with Intelbras facial-recognition controllers to release pickups",
      "On-premise deployment: Ubuntu Server, PostgreSQL 18, Node 22 and Caddy under systemd, HTTPS on the internal network"
    ],
    statusDetail:
      "Installed on the building's network since August 2026, with panel and API on the same HTTPS address. In testing with the client, awaiting rollout. Use of interface images authorized by contract.",
    keyMessage:
      "Biometric data and multi-tenancy force security to be decided in the database, not in the controller.",
    keyHighlights: [
      "Tenant isolation guaranteed by PostgreSQL via RLS, not by application filters.",
      "Physical access-control credentials encrypted per tenant and restricted to the backend.",
      "Navigable state in the URL: reloading or sharing a screen lands on the same view."
    ],
    architecturalDecisions: [
      "Row-Level Security by tenant_id: isolation survives a query mistake.",
      "OpenAPI generated from zod schemas: contract and validation come from one source.",
      "Rotating refresh tokens with argon2id password hashing.",
      "On-premise without Docker, under systemd, because maintenance stays with the client.",
      "Relative API path: a single panel build serves every address."
    ],
    visualProofTitle: "Resident app",
    visualProofDescription:
      "Resident app screens connected to the real API: home, packages with a pending badge, notices, amenity bookings and profile.",
    repoNote: "Private repository: code under contract, access on request."
  },
  comandafy: {
    shortDescription:
      "Multi-tenant POS and tab SaaS for coffee shops: front of house, real-time kitchen display, checkout with bill splitting, self-order tablet and tax invoicing.",
    status: "In development",
    overview:
      "Own product. Covers the whole floor cycle: the server opens the tab, the kitchen sees the queue in real time, the cashier closes with service charge, discount and split between people, and the owner follows reports and an audit trail.",
    problem:
      "A coffee shop at peak hour cannot stop selling because the internet dropped, nor lose an order because the printer jammed. And the system must issue tax invoices without the client's A1 digital certificate ever sitting in my infrastructure.",
    solution:
      "The PWA writes the order to a local IndexedDB queue and syncs later, with idempotent operations, so the same order resent does not become two tabs. Thermal printing goes through a local ESC/POS bridge, and a printer failure never blocks the sale: the cashier reprints. Tax invoicing sits behind a FiscalProvider, with Focus NFe as the implementation rather than a coupling; the A1 certificate lives in the company's Focus account, never in the system. The e2e test that runs in CI on every push covers exactly the two things that would break silently: tenant isolation and offline-queue idempotency.",
    responsibilities: [
      "pnpm monorepo with NestJS API, React PWA, print bridge and shared contract packages",
      "Offline queue in IndexedDB with idempotent sync and conflict resolution",
      "Real-time KDS and tabs over WebSocket, with role-based access (owner, manager, server, cashier)",
      "Tax layer isolated behind a provider, with NFC-e and NF-e via Focus NFe and the token encrypted at rest",
      "Local ESC/POS print bridge with an emulator to develop without hardware",
      "Kiosk mode for table tablets, paired with a single-use 6-digit code"
    ],
    statusDetail:
      "About 69k lines of TypeScript. e2e tests for tenant isolation and offline-queue idempotency running in CI. Preparing for the first pilots: billing, self-service onboarding and the final product name are still pending.",
    keyMessage: "Real offline-first means deciding what happens when the network comes back.",
    keyHighlights: [
      "Idempotent local queue: a resend does not duplicate a tab when the connection returns.",
      "A printer failure does not block the sale: the receipt is reprinted at checkout.",
      "The client's digital certificate stays out of my infrastructure, by architectural decision."
    ],
    architecturalDecisions: [
      "IndexedDB as the write queue, with an idempotency key per operation.",
      "FiscalProvider as a port: switching issuers does not touch the sales domain.",
      "WebSocket for the KDS, because polling at peak hour is visible latency at the counter.",
      "Monorepo with a shared contracts package across API, PWA and print bridge.",
      "e2e in CI covering tenant isolation and idempotency, the things that fail silently."
    ],
    visualProofTitle: "System interface",
    visualProofDescription:
      "Floor view with open tabs and running totals, digital menu in tablet kiosk mode, dark theme and sign-in screen.",
    repoNote: "Private repository: product in pre-launch."
  },
  vistacloud: {
    shortDescription:
      "Multi-tenant platform connecting public storefront, lead capture and sales operations in one flow: the same backend serves vehicle, real-estate and food-service sites.",
    status: "In production",
    overview:
      "Own product, sold to dealerships. One backend, one operations panel and several public storefronts across segments. The lead comes in through the site, is distributed automatically, and the team follows it to the sale in the same place.",
    problem:
      "A small dealership lives with a catalogue on a site that talks to nothing and leads landing loose on WhatsApp. Nobody knows which listing they came from, how long first contact took or who was handling the customer.",
    solution:
      "Tenant isolation on the request header, with per-role permissions inside each company, and automatic lead distribution by the active rule the moment it arrives through the public form. The catalogue is served by a public per-tenant route, which lets the same backend serve storefronts in completely different segments without a fork. End-to-end traceability: lead source, time to first contact, win rate and a PDF sales document.",
    responsibilities: [
      "Multi-tenant NestJS + Prisma API with per-enterprise isolation and per-role permissions",
      "Automatic lead-distribution engine driven by configurable rules",
      "Operations panel in React + Vite + TypeScript: products, leads, metrics, distribution and sales",
      "Public per-tenant catalogue consumed by four storefronts in distinct segments",
      "CSV/PDF export and sales-document generation",
      "Deployment on Coolify with PostgreSQL in the same compose and a reverse proxy to the API"
    ],
    statusDetail:
      "In production at business.ftechworks.com.br, with real clients operating. About 52k lines across API, panel and storefronts.",
    keyMessage: "One backend, many segments: the tenant defines the catalogue, not the code.",
    keyHighlights: [
      "A lead from the public form arrives already distributed by the tenant's active rule.",
      "Four storefronts in different markets on the same API, without a fork.",
      "The metrics the operation cares about: source, time to first contact and win rate."
    ],
    architecturalDecisions: [
      "Tenant resolved from the request header, with per-role permission checks.",
      "Public catalogue route separated from the authenticated operations route.",
      "Database inside the API's docker-compose, because separate resources in the orchestrator could not see each other on the network.",
      "/api prefix in NestJS with the front-end proxy pointing at the port exposed by compose."
    ],
    visualProofTitle: "Operations panel",
    visualProofDescription:
      "Conversion and lead-source dashboard, funnel analytics and per-company team management.",
    links: [{ label: "View live", href: "https://business.ftechworks.com.br", kind: "live" }],
    repoNote: "Private repository: commercial product."
  },
  easyfinance: {
    shortDescription:
      "Personal finance app in closed beta, with separate personal and sole-trader (MEI) accounts, cards and statements, bank-statement import, Stripe subscription and AI-generated insights.",
    status: "Closed beta",
    overview:
      "Own product distributed through TestFlight. Covers the full cycle of personal financial organization: income, expenses, instalments and fixed costs, cards with statement closing and payment, per-category budgets, goals and reports.",
    problem:
      "A finance app stores session tokens and banking data on the user's device. A token in AsyncStorage and an HTTPS call without certificate validation are the difference between a finance app and a leak. And most Expo apps ship with both problems by default.",
    solution:
      "Session token in the iOS Keychain and Android Keystore via expo-secure-store, never in plain storage, unlocked by the device's own biometrics. To close the channel, I wrote an Expo config plugin that injects certificate pinning into the native build, because no ready-made solution fit the managed build flow. On the server, distributed rate limiting in Redis so the limit holds across instances, and the Stripe webhook as the source of truth for subscription state instead of trusting the client's return.",
    responsibilities: [
      "React Native + Expo app with tab navigation, light/dark theme and an iOS widget via App Intents",
      "Own Expo config plugin for certificate pinning in the native build",
      "Biometric authentication with the token in expo-secure-store",
      "Express + Prisma + PostgreSQL API with distributed rate limiting in Redis",
      "Stripe subscription with trial, coupons and webhook as source of truth",
      "CSV, XLSX and OFX statement import, and PDF reports including MEI/DAS",
      "Financial-insights layer on top of language models"
    ],
    statusDetail:
      "In closed beta via TestFlight, not yet released on the stores. Own security audit on record. API live on a Linux server with containerized deployment.",
    keyMessage: "An app that touches money has to decide where the secret lives and who the source of truth is.",
    keyHighlights: [
      "Certificate pinning delivered by an own Expo config plugin.",
      "Token in Keychain/Keystore with biometric unlock, never in plain storage.",
      "Subscription state comes from the Stripe webhook, not from the client's return."
    ],
    architecturalDecisions: [
      "expo-secure-store for the token; AsyncStorage only for preferences with no session value.",
      "Rate limiting in Redis, because an in-memory limit does not survive two instances.",
      "Stripe webhook as source of truth for the subscription, with per-event idempotency.",
      "Personal/business split in the data model from day one, instead of an improvised flag later."
    ],
    visualProofTitle: "Distribution",
    visualProofDescription: "App distributed through TestFlight. Screenshots in preparation.",
    repoNote: "Private repository: own product."
  }
};

export const projectsEn = projectsPt.map((p) => ({ ...p, ...(en[p.slug] || {}) }));
