import { useEffect, useMemo, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Projects from "../pages/Projects.jsx";
import ProjectDetail from "../pages/ProjectDetail.jsx";
import StackExperience from "../pages/StackExperience.jsx";
import Contact from "../pages/Contact.jsx";
import NotFound from "../pages/NotFound.jsx";

const ROUTE_ORDER = [
  "/",
  "/sobre",
  "/projetos",
  "/stack-experiencia",
  "/contato"
];

const TRANSITION_MS = 550;
const LOW_END_MEMORY_GB = 4;
const LOW_END_THREADS = 4;

const normalizePath = (pathname) => {
  if (pathname.startsWith("/projetos")) {
    return "/projetos";
  }
  return pathname;
};

const isLowEndDevice = () => {
  if (typeof navigator === "undefined") return false;

  const hasLowMemory =
    typeof navigator.deviceMemory === "number" &&
    navigator.deviceMemory <= LOW_END_MEMORY_GB;
  const hasLowThreads =
    typeof navigator.hardwareConcurrency === "number" &&
    navigator.hardwareConcurrency <= LOW_END_THREADS;

  return hasLowMemory || hasLowThreads;
};

export default function AnimatedRoutes() {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location);
  const [previousLocation, setPreviousLocation] = useState(null);
  const [direction, setDirection] = useState("forward");
  const [hasMounted, setHasMounted] = useState(false);
  const transitionTimeoutRef = useRef(0);
  const disableTransitions = useMemo(() => isLowEndDevice(), []);

  useEffect(() => {
    if (location.pathname === currentLocation.pathname) {
      return;
    }

    const currentIndex = ROUTE_ORDER.indexOf(
      normalizePath(currentLocation.pathname)
    );
    const nextIndex = ROUTE_ORDER.indexOf(normalizePath(location.pathname));
    const nextDirection =
      currentIndex === -1 || nextIndex === -1
        ? "forward"
        : nextIndex >= currentIndex
        ? "forward"
        : "backward";

    if (disableTransitions) {
      setDirection(nextDirection);
      setPreviousLocation(null);
      setCurrentLocation(location);
      return;
    }

    if (transitionTimeoutRef.current) {
      window.clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = 0;
    }

    setDirection(nextDirection);
    setPreviousLocation(currentLocation);
    setCurrentLocation(location);

    transitionTimeoutRef.current = window.setTimeout(() => {
      setPreviousLocation(null);
    }, TRANSITION_MS);
  }, [location, currentLocation, disableTransitions]);

  const isTransitioning = !disableTransitions && Boolean(previousLocation);
  const shouldAnimate = !disableTransitions && (isTransitioning || !hasMounted);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const syncBodyOverflow = () => {
      const isHome = currentLocation.pathname === "/";
      const isProjectsList = currentLocation.pathname === "/projetos";
      const isLargeViewport =
        window.innerWidth >= 1024 && window.innerHeight >= 820;
      const shouldLockScroll = isHome || (isProjectsList && isLargeViewport);

      document.body.style.overflow = shouldLockScroll ? "hidden" : "";
    };

    syncBodyOverflow();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    window.addEventListener("resize", syncBodyOverflow);

    return () => {
      window.removeEventListener("resize", syncBodyOverflow);
      document.body.style.overflow = "";
    };
  }, [currentLocation.pathname]);

  return (
    <div className="page-stack w-full">
      {!disableTransitions && previousLocation && (
        <div
          key={previousLocation.key}
          className={`page-layer page-exit ${direction}`}
          data-direction={direction}
        >
          <Routes location={previousLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/projetos/:slug" element={<ProjectDetail />} />
            <Route path="/stack-experiencia" element={<StackExperience />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
      <div
        key={currentLocation.key}
        className={`page-layer ${shouldAnimate ? "page-enter" : "page-static"} ${direction}`}
        data-direction={direction}
      >
        <Routes location={currentLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/projetos/:slug" element={<ProjectDetail />} />
          <Route path="/stack-experiencia" element={<StackExperience />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
