import SectionHeader from "../components/SectionHeader.jsx";

const contacts = [
  { label: "GitHub", value: "github.com/guilherme-dev" },
  { label: "LinkedIn", value: "linkedin.com/in/guilherme-dev" },
  { label: "Email", value: "contato@guilherme.dev" }
];

export default function Contact() {
  return (
    <section>
      <SectionHeader title="Contato" description="Vamos conversar" />
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div
          className="stagger-item space-y-4 text-sm leading-relaxed text-muted"
          style={{ "--stagger": 0.8 }}
        >
          <p>
            Se voce precisa de um parceiro tecnico para desenvolver ou evoluir um
            produto digital, estou disponivel para conversar sobre escopo,
            prazos e prioridades.
          </p>
          <p>
            Prefiro alinhar objetivos logo no inicio para entregar uma solucao
            simples, estavel e sustentavel.
          </p>
        </div>
        <div
          className="stagger-item rounded-2xl border border-white/10 bg-panel/80 p-6 shadow-soft"
          style={{ "--stagger": 1.4 }}
        >
          <h3 className="font-display text-lg font-semibold text-ink">
            Canais diretos
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {contacts.map((contact) => (
              <li key={contact.label}>
                <span className="font-semibold text-ink">{contact.label}:</span>{" "}
                {contact.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
