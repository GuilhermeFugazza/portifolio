import { useEffect, useMemo, useRef, useState } from "react";
import { useLang } from "../i18n/LanguageContext.jsx";
import { strings } from "../i18n/strings.js";

function normalizeSlides(images) {
  if (!Array.isArray(images)) return [];

  return images
    .filter(Boolean)
    .map((item, index) => {
      if (typeof item === "string") {
        return { src: item, label: `Tela ${index + 1}` };
      }

      return { src: item.src, label: item.label || `Tela ${index + 1}` };
    })
    .filter((item) => item.src);
}

export default function BrowserMockupGallery({
  images = [],
  projectSlug = "",
  addressLabel = "",
  stagger = 0.85
}) {
  const { t } = useLang();
  const slides = useMemo(() => normalizeSlides(images), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbRefs = useRef([]);

  const total = slides.length;

  useEffect(() => {
    setActiveIndex(0);
  }, [projectSlug, total]);

  if (total === 0) return null;

  const goTo = (index) => setActiveIndex((index + total) % total);

  const handleKeyDown = (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const nextIndex =
      event.key === "ArrowRight"
        ? (activeIndex + 1) % total
        : (activeIndex - 1 + total) % total;
    setActiveIndex(nextIndex);
    thumbRefs.current[nextIndex]?.focus();
  };

  const active = slides[activeIndex];

  return (
    <div className="stagger-item space-y-4" style={{ "--stagger": stagger }}>
      <figure className="overflow-hidden rounded-[0.8rem] border border-[var(--line-strong)] bg-[rgba(6,10,22,0.9)] shadow-soft">
        <div className="flex items-center gap-3 border-b border-[var(--line)] bg-white/[0.03] px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
          </span>
          {addressLabel && (
            <span className="truncate rounded-full border border-white/10 bg-white/[0.03] px-3 py-0.5 text-[0.68rem] font-medium text-ink/54">
              {addressLabel}
            </span>
          )}
        </div>

        <div className="relative bg-[rgba(6,10,22,0.9)]">
          <img
            key={active.src}
            src={active.src}
            alt={active.label}
            className="block w-full"
            loading="eager"
            decoding="async"
          />
        </div>
      </figure>

      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label={t(strings.common.projectScreens)}
        onKeyDown={handleKeyDown}
      >
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={slide.src}
              ref={(node) => {
                thumbRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => goTo(index)}
              className={`btn ${isActive ? "btn--primary" : "btn--ghost"} !min-h-9 !px-3.5 !text-[0.78rem]`}
            >
              {slide.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
