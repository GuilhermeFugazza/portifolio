import SectionHeader from "../components/SectionHeader.jsx";

const contactChannels = [
  {
    label: "Email",
    value: "guilhermefugazza05@gmail.com",
    href: "mailto:guilhermefugazza05@gmail.com",
    icon: "https://cdn.simpleicons.org/gmail/EA4335"
  },
  {
    label: "Telefone",
    value: "(47) 99756-4677",
    href: "tel:+5547997564677",
    icon: "https://cdn.simpleicons.org/whatsapp/25D366"
  },
  {
    label: "GitHub",
    value: "github.com/GuilhermeFugazza",
    href: "https://github.com/GuilhermeFugazza",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/guilherme-fugazza-56720027a",
    href: "https://www.linkedin.com/in/guilherme-fugazza-56720027a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
  },
  {
    label: "Instagram",
    value: "@gui_fugazza",
    href: "https://instagram.com/gui_fugazza",
    icon: "https://cdn.simpleicons.org/instagram/E4405F"
  }
];

const quickActions = [
  {
    label: "Enviar e-mail",
    href: "mailto:guilhermefugazza05@gmail.com"
  },
  {
    label: "Me chame no WhatsApp",
    href: "https://wa.me/5547997564677"
  }
];

export default function Contact() {
  return (
    <section className="w-full pb-10 pt-14 md:pb-12 md:pt-0">
      <SectionHeader
        title="Contato"
        description="Vamos conversar"
        className="mb-5 md:mb-6"
      />

      <article className="stagger-item mx-auto w-full max-w-[920px]" style={{ "--stagger": 0.5 }}>
        {/* <p className="text-sm leading-relaxed text-ink/82 md:text-[0.97rem]">
          Disponível para conversar sobre novos projetos, manutenção ou evolução
          de produto. Me chame pelo canal que for mais prático.
        </p> */}

        <div className="mt-4 flex flex-wrap gap-2">
          {quickActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex min-h-10 w-full items-center justify-center rounded-full border border-[rgba(138,162,214,0.3)] bg-[rgba(124,149,206,0.05)] px-4 text-sm font-semibold text-ink/90 transition hover:border-[rgba(156,182,240,0.45)] hover:bg-[rgba(124,149,206,0.1)] sm:w-auto"
            >
              {action.label}
            </a>
          ))}
        </div>

        <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
          {contactChannels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="group grid grid-cols-[2.1rem_minmax(0,1fr)_auto] items-center gap-3 py-3"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05]">
                  <img
                    src={channel.icon}
                    alt={`Logo ${channel.label}`}
                    width="16"
                    height="16"
                    style={{ width: 16, height: 16 }}
                    className="max-h-[16px] max-w-[16px] object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </span>

                <span className="min-w-0">
                  <span className="block text-[0.63rem] font-semibold uppercase tracking-[0.13em] text-ink/58">
                    {channel.label}
                  </span>
                  <span className="block truncate text-[0.95rem] text-ink/90 group-hover:text-white">
                    {channel.value}
                  </span>
                </span>

                <span className="text-base leading-none text-white/36 transition group-hover:text-white/72">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
