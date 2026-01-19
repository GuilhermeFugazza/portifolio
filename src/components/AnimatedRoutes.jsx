import { useEffect, useState } from "react";
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

const normalizePath = (pathname) => {
  if (pathname.startsWith("/projetos")) {
    return "/projetos";
  }
  return pathname;
};

export default function AnimatedRoutes() {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location);
  const [previousLocation, setPreviousLocation] = useState(null);
  const [direction, setDirection] = useState("forward");
  const [hasMounted, setHasMounted] = useState(false);

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

    setDirection(nextDirection);
    setPreviousLocation(currentLocation);
    setCurrentLocation(location);

    const timeoutId = window.setTimeout(() => {
      setPreviousLocation(null);
    }, TRANSITION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [location, currentLocation]);

  const isTransitioning = Boolean(previousLocation);
  const shouldAnimate = isTransitioning || !hasMounted;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="page-stack h-full w-full">
      {previousLocation && (
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
