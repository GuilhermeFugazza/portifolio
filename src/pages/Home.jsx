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
    <section className="flex h-full w-full items-center justify-center overflow-hidden">
      <div className="w-full max-w-3xl space-y-6 text-center">
        <p
          className="stagger-item text-[11px] font-semibold uppercase tracking-[0.35em] text-burnt"
          style={{ "--stagger": 0.8 }}
        >
          Desenvolvedor Full Stack
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
          Sistemas, APIs e aplicacoes mobile escalaveis com foco em produto e
          entrega consistente.
        </p>
        <div
          className="stagger-item flex flex-wrap justify-center gap-2 pt-1"
          style={{ "--stagger": 0.9 }}
        >
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
