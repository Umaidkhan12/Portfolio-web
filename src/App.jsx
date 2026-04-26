import { useEffect, useState, lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AnimatePresence } from "motion/react";
import CustomCursor from "./components/UI/CustomCursor";
import Navbar from "./components/Navbar/Navbar";
import Background3D from "./components/UI/Background3D";
import Hero from "./components/Sections/Hero";
import Loader from "./components/UI/Loader";
import ErrorBoundary from "./components/UI/ErrorBoundary";
import ScrollProgress from "./components/UI/ScrollProgress";
import BackToTop from "./components/UI/BackToTop";
import SectionHUD from "./components/UI/SectionHUD";

// Lazy load non-critical sections
const About = lazy(() => import("./components/Sections/About"));
const Skills = lazy(() => import("./components/Sections/Skills"));
const Projects = lazy(() => import("./components/Sections/Projects"));
const Education = lazy(() => import("./components/Sections/Education"));
const Achievements = lazy(() => import("./components/Sections/Achievements"));
const Languages = lazy(() => import("./components/Sections/Languages"));
const Contact = lazy(() => import("./components/Sections/Contact"));
const Footer = lazy(() => import("./components/Sections/Footer"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);

    // Simulate initial loading time for a premium feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", onMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <main className="relative w-full overflow-x-hidden">
        <ScrollProgress />
        <BackToTop />
        <SectionHUD loading={loading} />
        <CustomCursor />
        <div className="grid-overlay" />
        <div className="spotlight" />
        <Background3D />
        <Navbar loading={loading} />
        
        <Hero loading={loading} />
        
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Languages />
          <Contact />
          <Footer />
        </Suspense>

        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </main>
    </ErrorBoundary>
  );
}

export default App;
