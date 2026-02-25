import { useEffect, useMemo, useRef, useState } from "react";

const MAX_VISIBLE_SIDE = 3;
const DRAG_THRESHOLD = 48;

function normalizeSlides(images) {
  if (!Array.isArray(images)) return [];

  return images
    .filter(Boolean)
    .map((item, index) => {
      if (typeof item === "string") {
        return {
          src: item,
          label: `Mockup ${index + 1}`
        };
      }

      return {
        src: item.src,
        label: item.label || `Mockup ${index + 1}`
      };
    })
    .filter((item) => item.src);
}

function getCircularOffset(index, activeIndex, total) {
  if (total <= 1) return 0;

  let delta = index - activeIndex;

  if (delta > total / 2) {
    delta -= total;
  } else if (delta < -total / 2) {
    delta += total;
  }

  return delta;
}

function getCardTransform(offset, dragOffset) {
  const abs = Math.abs(offset);
  const direction = Math.sign(offset);
  const xShiftPercent = direction * abs * 56;
  const yShiftPercent = abs * 0.55;
  const zShift = 188 - abs * 86;
  const rotateY = -direction * Math.min(10 + abs * 8, 33);
  const scale = Math.max(1.06 - abs * 0.1, 0.72);
  const opacity = 1;
  const dragInfluence = abs === 0 ? 1 : Math.max(0.22, 0.84 - abs * 0.2);
  const dragShiftPx = dragOffset * dragInfluence;
  const zIndex = offset === 0 ? 520 : 420 - abs * 42;

  return {
    transform: `translate(-50%, -50%) translate3d(calc(${xShiftPercent}% + ${dragShiftPx}px), ${yShiftPercent}%, ${zShift}px) rotateY(${rotateY}deg) scale(${scale})`,
    opacity,
    filter: "none",
    zIndex
  };
}

export default function IphoneMockupCarousel({
  images = [],
  projectSlug = "",
  stagger = 0.9
}) {
  const slides = useMemo(() => normalizeSlides(images), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [failedImages, setFailedImages] = useState({});
  const suppressClickRef = useRef(false);
  const dragStateRef = useRef({
    pointerId: null,
    startX: 0,
    deltaX: 0,
    moved: false
  });

  const total = slides.length;
  const hasSlides = total > 0;
  const isSingleSlide = total <= 1;
  const fallbackPath = `/assets/projects/${projectSlug || "Study"}/1.png`;
  const maxVisibleSide = Math.min(MAX_VISIBLE_SIDE, Math.floor((total - 1) / 2));

  useEffect(() => {
    setActiveIndex(0);
    setDragOffset(0);
    setIsDragging(false);
    setFailedImages({});
    suppressClickRef.current = false;
    dragStateRef.current = {
      pointerId: null,
      startX: 0,
      deltaX: 0,
      moved: false
    };
  }, [projectSlug, total]);

  const goTo = (index) => {
    if (!hasSlides) return;
    const nextIndex = (index + total) % total;
    setActiveIndex(nextIndex);
  };

  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  const startDrag = (event) => {
    if (!hasSlides || isSingleSlide) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      deltaX: 0,
      moved: false
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event) => {
    const dragState = dragStateRef.current;
    if (!isDragging || dragState.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - dragState.startX;
    dragState.deltaX = deltaX;
    if (Math.abs(deltaX) > 8) {
      dragState.moved = true;
    }

    setDragOffset(Math.max(-120, Math.min(120, deltaX)));
  };

  const endDrag = (event) => {
    const dragState = dragStateRef.current;
    if (!isDragging || dragState.pointerId !== event.pointerId) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const deltaX = dragState.deltaX;
    const didDrag = Math.abs(deltaX) > 8;
    suppressClickRef.current = didDrag;
    if (didDrag && typeof window !== "undefined") {
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
    }

    setIsDragging(false);
    setDragOffset(0);
    dragStateRef.current = {
      pointerId: null,
      startX: 0,
      deltaX: 0,
      moved: false
    };

    if (Math.abs(deltaX) >= DRAG_THRESHOLD) {
      if (deltaX < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
  };

  const cancelDrag = () => {
    setIsDragging(false);
    setDragOffset(0);
    dragStateRef.current = {
      pointerId: null,
      startX: 0,
      deltaX: 0,
      moved: false
    };
  };

  const renderScreenshot = (slide, index) => {
    const showImage = slide?.src && !failedImages[slide.src];

    return (
      <div className="mobile-carousel-shot">
        {showImage ? (
          <img
            src={slide.src}
            alt={slide.label}
            className="mobile-carousel-image"
            loading={index <= 2 ? "eager" : "lazy"}
            decoding="async"
            onError={() =>
              setFailedImages((prev) => ({
                ...prev,
                [slide.src]: true
              }))
            }
          />
        ) : (
          <div className="mobile-carousel-placeholder">
            <span className="mobile-carousel-placeholder-label">
              Adicione a imagem:
            </span>
            <code className="mobile-carousel-placeholder-path">
              {slide?.src || fallbackPath}
            </code>
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      className="stagger-item py-2"
      style={{ "--stagger": stagger }}
      aria-label="Carrossel 3D de mockups mobile"
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink md:text-xl">
            Galeria mobile
          </h2>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Capturas de tela
          </p>
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          {hasSlides ? `${activeIndex + 1}/${total}` : "0/0"}
        </span>
      </div>

      <div className="mobile-carousel-stage mobile-carousel-stage-3d">
        <button
          type="button"
          className="mobile-carousel-nav mobile-carousel-nav-prev"
          onClick={goPrev}
          disabled={!hasSlides || isSingleSlide}
          aria-label="Imagem anterior"
        >
          &lsaquo;
        </button>

        <div
          className={`mobile-carousel-viewport-3d ${isDragging ? "is-dragging" : ""}`}
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={cancelDrag}
        >
          {hasSlides ? (
            <div className="mobile-carousel-track-3d">
              {slides.map((slide, index) => {
                const offset = getCircularOffset(index, activeIndex, total);
                const isVisible = Math.abs(offset) <= maxVisibleSide;
                const pose = getCardTransform(offset, dragOffset);

                return (
                  <div
                    key={slide.src}
                    className={`mobile-carousel-card-3d ${isVisible ? "is-visible" : "is-hidden"
                      } ${offset === 0 ? "is-active" : ""}`}
                    style={pose}
                    aria-hidden={!isVisible}
                    onClick={() => {
                      if (suppressClickRef.current) return;
                      if (offset !== 0) {
                        goTo(index);
                      }
                    }}
                  >
                    {renderScreenshot(slide, index)}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mobile-carousel-empty-3d">
              {renderScreenshot(null, 0)}
            </div>
          )}
        </div>

        <button
          type="button"
          className="mobile-carousel-nav mobile-carousel-nav-next"
          onClick={goNext}
          disabled={!hasSlides || isSingleSlide}
          aria-label="Próxima imagem"
        >
          &rsaquo;
        </button>
      </div>

      {hasSlides && (
        <div className="mobile-carousel-dots" role="tablist" aria-label="Slides">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={`mobile-carousel-dot ${index === activeIndex ? "is-active" : ""
                }`}
              onClick={() => goTo(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Ir para ${slide.label}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
