import profileImage from "../assets/guilherme.jpg";
import SectionHeader from "../components/SectionHeader.jsx";

const serviceAreas = [
  {
    title: "Desenvolvimento de APIs e Back-end",
    description:
      "APIs robustas, seguras e prontas para integrações críticas e alto volume de uso.",
    tag: "Back-end"
  },
  {
    title: "Aplicativos Mobile (iOS e Android)",
    description:
      "Aplicativos com estrutura sólida, boa performance e experiência consistente no dia a dia.",
    tag: "Mobile"
  },
  {
    title: "Sistemas Web e Dashboards",
    description:
      "Interfaces claras para operação e gestão, com foco em produtividade e tomada de decisão.",
    tag: "Front-end"
  },
  {
    title: "Automações e Integrações",
    description:
      "Fluxos automatizados para reduzir tarefas manuais e conectar sistemas de forma confiável.",
    tag: "Integrações"
  },
  {
    title: "Sistemas Multi-tenant",
    description:
      "Arquiteturas escaláveis para múltiplos clientes, mantendo isolamento e segurança de dados.",
    tag: "Arquitetura"
  },
  {
    title: "Estruturação de Banco de Dados",
    description:
      "Modelagem orientada à consistência, performance e crescimento sustentável do produto.",
    tag: "Dados"
  }
];

const technologyLogos = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "React Native",
    icon: "https://cdn.simpleicons.org/react/61DAFB"
  },
  {
    name: "Tailwind CSS",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    name: "Node.js",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Python",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "REST APIs",
    icon: "https://cdn.simpleicons.org/openapiinitiative/6BA539"
  },
  {
    name: "Webhooks",
    icon: "https://cdn.simpleicons.org/zapier/FF4F00"
  },
  {
    name: "n8n",
    icon: "https://cdn.simpleicons.org/n8n/EA4B71"
  },
  {
    name: "PostgreSQL",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "Linux Server",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
  },
  {
    name: "Cloudflare",
    icon: "https://cdn.simpleicons.org/cloudflare/F38020"
  }
];

const profileLevels = [
  { label: "Back-end & APIs", level: "Alto", value: 92 },
  { label: "Mobile", level: "Alto", value: 88 },
  { label: "Arquitetura de Sistemas", level: "Alto", value: 90 },
  { label: "Front-end Web", level: "Médio/Alto", value: 78 },
  { label: "Infraestrutura & Redes", level: "Médio", value: 65 }
];

const workPrinciples = [
  "Entendimento real do problema",
  "Arquitetura antes do código",
  "Código organizado e escalável",
  "Comunicação clara com o cliente",
  "Soluções sustentáveis no longo prazo"
];

const professionalSummary = [
  "Sou desenvolvedor de software com formação técnica em Informática pelo Instituto Federal Catarinense e atuação prática em projetos web, mobile e integrações de negócios.",
  "Participo de todo o ciclo de produto: diagnóstico, desenho de arquitetura, implementação, validação e evolução contínua em produção.",
  "Atualmente desenvolvo sistemas de gestão, plataformas SaaS e aplicativos com potencial real de operação e monetização."
];

const trustHighlights = [
  "Visão completa de produto, da regra de negócio ao deploy.",
  "Decisões técnicas orientadas por clareza, performance e escalabilidade.",
  "Compromisso com previsibilidade de entrega e qualidade de código."
];

const profileFacts = [
  { label: "Formação", value: "Técnico em Informática - IFC" },
  { label: "Atuação", value: "Web, APIs, Mobile e Integrações" },
  { label: "Modelo", value: "Arquitetura + execução ponta a ponta" }
];

const processSteps = [
  {
    step: "01",
    title: "Diagnóstico e escopo",
    description:
      "Mapeio objetivos, regras e riscos para transformar necessidade de negócio em plano técnico claro."
  },
  {
    step: "02",
    title: "Arquitetura e implementação",
    description:
      "Estruturo back-end, dados e interface de forma consistente para acelerar a evolução sem retrabalho."
  },
  {
    step: "03",
    title: "Entrega, monitoramento e evolução",
    description:
      "Publicação segura, acompanhamento da operação e melhorias com foco em resultado contínuo."
  }
];

export default function About() {
  return (
    <section className="w-full pb-10 pt-0 md:pb-12 md:pt-0">
      <SectionHeader
        title="Sobre"
        description="Perfil profissional"
        className="mb-8 md:mb-10"
        descriptionClassName="text-[0.68rem] md:text-[0.72rem]"
        titleClassName="text-[2.45rem] md:text-[3rem] leading-[1.03]"
      />

      <div className="mx-auto w-full max-w-[1040px]">
        <div className="grid gap-6 md:grid-cols-[18.5rem_minmax(0,1fr)] md:gap-8">
          <aside className="stagger-item md:sticky md:top-28 md:self-start" style={{ "--stagger": 0.2 }}>
            <figure className="relative overflow-hidden rounded-[1.28rem] border border-[rgba(138,162,214,0.28)] bg-[linear-gradient(160deg,rgba(12,24,52,0.82),rgba(8,15,32,0.9))] p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem]">
                <img
                  src={profileImage}
                  alt="Foto de Guilherme"
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,23,0.08)_16%,rgba(7,11,23,0.65)_100%)]" />
                <figcaption className="absolute inset-x-0 bottom-0 p-3">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-burnt/90">
                    Perfil profissional
                  </p>
                  <p className="mt-1 font-display text-[1.18rem] leading-tight text-ink">
                    Guilherme Fugazza
                  </p>
                  <p className="mt-1 text-[0.75rem] text-ink/74">Desenvolvedor Full Stack</p>
                </figcaption>
              </div>
            </figure>

            <dl className="mt-4 divide-y divide-[rgba(138,162,214,0.16)] border-y border-[rgba(138,162,214,0.16)]">
              {profileFacts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-3 py-2.5">
                  <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-ink/52">
                    {fact.label}
                  </dt>
                  <dd className="text-right text-[0.8rem] font-medium text-ink/80">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="space-y-6">
            <section className="stagger-item" style={{ "--stagger": 0.32 }}>
              <div className="grid gap-2">
                {professionalSummary.map((paragraph) => (
                  <p key={paragraph} className="text-[0.94rem] leading-relaxed text-ink/78">
                    {paragraph}
                  </p>
                ))}
              </div>

              <ul className="mt-3 grid gap-1.5">
                {trustHighlights.map((item) => (
                  <li key={item} className="text-[0.84rem] leading-relaxed text-ink/72">
                    - {item}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-[0.66rem] font-semibold uppercase tracking-[0.13em] text-ink/50">
                {workPrinciples.join(" · ")}
              </p>
            </section>

            <section className="stagger-item" style={{ "--stagger": 0.44 }}>
              <header>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-burnt/90">
                  Processo
                </p>
                <h2 className="mt-1 font-display text-[1.28rem] leading-tight text-ink md:text-[1.42rem]">
                  Como conduzo projetos
                </h2>
              </header>

              <ol className="mt-3 divide-y divide-[rgba(138,162,214,0.16)] border-y border-[rgba(138,162,214,0.16)]">
                {processSteps.map((item) => (
                  <li key={item.step} className="grid gap-2 py-3 md:grid-cols-[2.4rem_minmax(0,1fr)] md:gap-3">
                    <span className="inline-flex h-6 w-9 items-center justify-center rounded-full border border-[rgba(138,162,214,0.24)] bg-[rgba(124,149,206,0.06)] text-[0.62rem] font-semibold tracking-[0.1em] text-ink/72">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-[0.92rem] font-semibold text-ink/86">{item.title}</h3>
                      <p className="mt-1 text-[0.84rem] leading-relaxed text-ink/72">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="stagger-item" style={{ "--stagger": 0.56 }}>
              <header>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-burnt/90">
                  Atuação
                </p>
                <h2 className="mt-1 font-display text-[1.28rem] leading-tight text-ink md:text-[1.42rem]">
                  Frentes principais
                </h2>
              </header>

              <ol className="mt-3 divide-y divide-[rgba(138,162,214,0.16)] border-y border-[rgba(138,162,214,0.16)]">
                {serviceAreas.map((item, index) => (
                  <li key={item.title} className="grid gap-2 py-3 md:grid-cols-[2.4rem_minmax(0,1fr)_auto] md:gap-3">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ink/48">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[0.92rem] font-semibold text-ink/86">{item.title}</h3>
                      <p className="mt-1 text-[0.84rem] leading-relaxed text-ink/72">{item.description}</p>
                    </div>
                    <span className="inline-flex h-6 w-fit items-center rounded-full border border-[rgba(138,162,214,0.24)] bg-[rgba(124,149,206,0.06)] px-2 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-ink/64">
                      {item.tag}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="stagger-item" style={{ "--stagger": 0.68 }}>
              <header>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-burnt/90">
                  Tecnologias
                </p>
                <h2 className="mt-1 font-display text-[1.28rem] leading-tight text-ink md:text-[1.42rem]">
                  Stack principal
                </h2>
              </header>

              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Stack principal">
                {technologyLogos.map((tech) => (
                  <li
                    key={tech.name}
                    className="inline-flex min-h-8 items-center gap-2 rounded-full border border-[rgba(138,162,214,0.22)] bg-[rgba(124,149,206,0.05)] px-2.5 py-1"
                  >
                    <img
                      src={tech.icon}
                      alt={`Logo ${tech.name}`}
                      className="h-3.5 w-3.5 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="text-[0.74rem] font-medium text-ink/68">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="stagger-item" style={{ "--stagger": 0.8 }}>
              <header>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-burnt/90">
                  Maturidade técnica
                </p>
                <h2 className="mt-1 font-display text-[1.28rem] leading-tight text-ink md:text-[1.42rem]">
                  Nível por área
                </h2>
              </header>

              <div className="mt-3 divide-y divide-[rgba(138,162,214,0.16)] border-y border-[rgba(138,162,214,0.16)]">
                {profileLevels.map((item) => (
                  <div key={item.label} className="py-3">
                    <div className="flex items-end justify-between gap-3">
                      <span className="text-[0.84rem] font-medium text-ink/80">{item.label}</span>
                      <span className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-ink/50">
                        {item.level}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[rgba(138,162,214,0.15)]">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,rgba(94,131,226,0.9),rgba(140,169,238,0.86))]"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <p className="stagger-item mt-7 text-center text-[0.92rem] leading-relaxed text-ink/68" style={{ "--stagger": 0.9 }}>
          Se você precisa de alguém para planejar, construir e evoluir um produto digital com responsabilidade técnica e visão de negócio, vamos conversar.
        </p>
      </div>
    </section>
  );
}
