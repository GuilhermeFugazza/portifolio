import { NavLink } from "react-router-dom";
import ShinyButton from "./ShinyButton.jsx";

const navItems = [
  {
    label: "Home",
    to: "/",
    icon: (
      <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
        <path
          d="M3 9.5 10 4l7 5.5V16a1 1 0 0 1-1 1h-4v-4H8v4H4a1 1 0 0 1-1-1V9.5Z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    label: "Sobre",
    to: "/sobre",
    icon: (
      <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
        <path
          d="M6 5h8a2 2 0 0 1 2 2v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a2 2 0 0 1 2-2Zm2.5 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-1.5 4h6"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    label: "Projetos",
    to: "/projetos",
    icon: (
      <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
        <path
          d="M5 4h10a2 2 0 0 1 2 2v2H3V6a2 2 0 0 1 2-2Zm-2 6h14v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4Z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    label: "Stack & Experiencia",
    to: "/stack-experiencia",
    icon: (
      <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
        <path
          d="M10 3 3 8l7 4 7-4-7-5Zm-5 8.5V15l5 3 5-3v-3.5l-5 2.8-5-2.8Z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    label: "Contato",
    to: "/contato",
    icon: (
      <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
        <path
          d="M4 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2 6 4 6-4"
          fill="currentColor"
        />
      </svg>
    )
  }
];

export default function Navbar() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-8 pt-8 text-sm text-muted">
          <div className="flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-sm text-white">
            <span className="h-2 w-2 rounded-full bg-accent"></span>
            <span>Open to work</span>
          </div>
          <ShinyButton className="shiny-cta--compact">Download CV</ShinyButton>
        </div>
      </header>

      <nav className="fixed inset-x-0 bottom-7 z-50">
        <div className="mx-auto w-fit max-w-4xl px-6">
          <div className="flex items-center justify-between overflow-x-auto rounded-full bg-white/8 text-sm font-medium text-white shadow-soft backdrop-blur-2xl">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-full px-5 py-3 transition ${
                    isActive ? "bg-white/90 text-black" : "text-white/70"
                  }`
                }
              >
                <span className="inline-flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
