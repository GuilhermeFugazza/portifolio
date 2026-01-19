import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShinyButton from "../components/ShinyButton.jsx";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <section className="flex h-full w-full items-center overflow-hidden">
      <div className="grid w-full items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Desenvolvedor Full Stack
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
            <span className="block">Guilherme</span>
            <span className="block">Fugazza</span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Sistemas, APIs e aplicacoes mobile escalaveis com foco em produto e
            entrega consistente.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "React",
              "React Native",
              "Node.js",
              "APIs REST",
              "PostgreSQL",
              "n8n",
              "Cloudflare"
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          <ShinyButton onClick={() => navigate("/projetos")}>
            Ver projetos
          </ShinyButton>
        </div>
        <div aria-hidden="true" className="hidden md:block"></div>
      </div>
    </section>
  );
}
