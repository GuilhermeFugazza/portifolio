import { useNavigate } from "react-router-dom";
import ShinyButton from "../components/ShinyButton.jsx";

const homeStack = [
  {
    label: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    alt: "Logo do React"
  },
  {
    label: "React Native",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    alt: "Logo do React Native"
  },
  {
    label: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    alt: "Logo do Node.js"
  },
  {
    label: "APIs REST",
    icon: "https://cdn.simpleicons.org/openapiinitiative/6BA539",
    alt: "Ícone de APIs REST"
  },
  {
    label: "PostgreSQL",
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    alt: "Logo do PostgreSQL"
  },
  {
    label: "n8n",
    icon: "https://cdn.simpleicons.org/n8n/EA4B71",
    alt: "Logo do n8n"
  },
  {
    label: "Cloudflare",
    icon: "https://cdn.simpleicons.org/cloudflare/F38020",
    alt: "Logo do Cloudflare"
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-2 pb-36 pt-32 sm:px-4 sm:pb-40 sm:pt-28">
      <div className="w-full max-w-3xl space-y-6 text-center">
        <p
          className="stagger-item text-[11px] font-semibold uppercase tracking-[0.35em] text-burnt"
          style={{ "--stagger": 0.8 }}
        >
          Engenharia de software B2B
        </p>
        <h1
          className="stagger-item font-display text-4xl font-semibold leading-tight text-white md:text-6xl"
          style={{ "--stagger": 0.2 }}
        >
          <span className="block">Guilherme</span>
          <span className="block">Fugazza</span>
        </h1>
        <p
          className="stagger-item mx-auto max-w-2xl text-sm leading-relaxed text-white/80 md:text-base"
          style={{ "--stagger": 1.4 }}
        >
          Arquitetura e desenvolvimento de sistemas empresariais, APIs robustas e plataformas escaláveis.
        </p>
        {/* <p
          className="stagger-item mx-auto max-w-2xl text-sm leading-relaxed text-white/80 md:text-base"
          style={{ "--stagger": 1.5 }}
        >
          Atuação ponta a ponta em back-end, integrações críticas, multi-tenant e aplicações mobile estruturadas para evolução contínua.
        </p> */}
        <p
          className="stagger-item mx-auto max-w-2xl text-[0.76rem] font-medium leading-relaxed text-white/60 md:text-[0.8rem]"
          style={{ "--stagger": 1.6 }}
        >
          Foco em soluções B2B sob contrato e ambientes de produção reais.
        </p>
        <div
          className="stagger-item flex flex-wrap justify-center gap-2 pt-1"
          style={{ "--stagger": 0.9 }}
        >
          {homeStack.map((skill) => (
            <span
              key={skill.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur-sm"
            >
              <img
                src={skill.icon}
                alt={skill.alt}
                className="h-3.5 w-3.5 object-contain"
                loading="lazy"
                decoding="async"
              />
              <span>{skill.label}</span>
            </span>
          ))}
        </div>
        <div
          className="stagger-item flex justify-center pt-2"
          style={{ "--stagger": 1.9 }}
        >
          <ShinyButton onClick={() => navigate("/projetos")}>
            Ver projetos
          </ShinyButton>
        </div>
      </div>
    </section>
  );
}
