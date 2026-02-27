import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import curriculumFile from "../assets/CV/Curriculo_Guilherme_Fugazza_Mobile_React_Native_v5.pdf.pdf";

const navItems = [
  {
    label: "Início",
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
    label: "Stack & Experiência",
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
  const location = useLocation();
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const whatsappLink = "https://wa.me/5547997564677";
  const isAboutPage = location.pathname === "/sobre";
  const ctaHref = isAboutPage ? curriculumFile : whatsappLink;
  const ctaLabelFull = isAboutPage ? "Baixar CV" : "Fale comigo";
  const ctaLabelShort = isAboutPage ? "CV" : "Falar";
  const showWhatsappCompactIcon = !isAboutPage;
  const ctaLinkProps = isAboutPage
    ? { download: "Curriculo_Guilherme_Fugazza.pdf" }
    : { target: "_blank", rel: "noreferrer" };

  useEffect(() => {
    let rafId = 0;

    const syncCompactState = () => {
      const nextCompact = window.scrollY > 24;
      setIsHeaderCompact((prev) => (prev === nextCompact ? prev : nextCompact));
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        syncCompactState();
      });
    };

    syncCompactState();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed z-20 w-full bg-transparent">
        <div className="mx-auto flex w-full max-w-8xl flex-col items-center gap-3 px-4 pt-4 text-sm text-muted sm:flex-row sm:justify-between sm:gap-3 sm:px-8 sm:pt-8">
          <div
            className={`navbar-work-pill ${isHeaderCompact ? "is-collapsed" : ""}`}
            aria-label="Disponível para projetos"
            title="Disponível para projetos"
          >
            <span className="navbar-work-pill-dot" aria-hidden="true" />
            <span className="navbar-work-pill-text">Disponível para projetos</span>
          </div>
          <div className="flex justify-center sm:justify-end">
            <a
              className={`shiny-cta shiny-cta--compact navbar-cv-cta ${isHeaderCompact ? "is-collapsed" : ""}`}
              href={ctaHref}
              aria-label={ctaLabelFull}
              {...ctaLinkProps}
            >
              <span className="navbar-cv-cta-label-wrap">
                <strong className="navbar-cv-cta-label navbar-cv-cta-label-full">
                  {ctaLabelFull}
                </strong>
                <strong className="navbar-cv-cta-label navbar-cv-cta-label-short">
                  {showWhatsappCompactIcon ? (
                    <img
                      src="https://cdn.simpleicons.org/whatsapp/FFFFFF"
                      alt=""
                      aria-hidden="true"
                      className="h-4 w-4 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    ctaLabelShort
                  )}
                </strong>
              </span>
            </a>
          </div>
        </div>
      </header>

      <nav className="fixed inset-x-0 bottom-6 z-50 px-2.5 sm:bottom-10 sm:px-4">
        <div className="no-scrollbar mx-auto flex w-full justify-center overflow-x-auto">
          <div
            className="relative inline-flex w-max items-center gap-1 overflow-y-hidden rounded-full border border-white/20 bg-[rgba(11,19,36,0.45)] p-1 text-sm font-medium text-white shadow-[0_18px_40px_rgba(5,10,25,0.28)] backdrop-blur-xl"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 transition sm:px-5 sm:py-3 ${
                    isActive
                      ? "bg-white/90 text-black"
                      : "text-white/70 hover:text-white"
                  }`
                }
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sr-only">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
