import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Projetos", to: "/projetos" },
  { label: "Stack & Experiencia", to: "/stack-experiencia" },
  { label: "Contato", to: "/contato" }
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight">
          Guilherme Dev
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-ink ${
                  isActive ? "text-ink" : "text-muted"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contato"
          className="rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink"
        >
          Vamos conversar
        </Link>
      </div>
      <div className="mx-auto flex w-full max-w-6xl gap-4 overflow-x-auto px-6 pb-3 text-xs font-medium text-muted md:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `whitespace-nowrap rounded-full border px-3 py-1 transition ${
                isActive ? "border-ink/40 text-ink" : "border-ink/10"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
