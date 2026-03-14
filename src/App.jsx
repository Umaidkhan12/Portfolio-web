import { useEffect } from "react";
import CustomCursor from "./components/UI/CustomCursor";
import Navbar from "./components/Navbar/Navbar";
import Background3D from "./components/UI/Background3D";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
import Experience from "./components/Sections/Experience";
import Education from "./components/Sections/Education";
import Achievements from "./components/Sections/Achievements";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer";

function App() {
  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden">
      <CustomCursor />
      <div className="spotlight" />
      <Background3D />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
