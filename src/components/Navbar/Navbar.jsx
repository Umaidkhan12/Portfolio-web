import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Magnetic from "../UI/Magnetic";
import {
  NAV_LINKS,
  SITE_CONFIG,
  formatTime,
  formatDate,
  scrollTo,
} from "../../constants";
import Logo from "../../assets/Logo.svg";

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...NAV_LINKS.map((l) => l.section)];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.3 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNav = (section) => {
    scrollTo(section);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ══════════════════════════════
          TOP HUD — logo left, nav right
      ══════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 w-full z-[100] p-6 md:p-8 lg:p-10 pointer-events-none"
      >
        {/* Logo + Meta — top left */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 lg:top-10 lg:left-10 pointer-events-auto flex flex-col gap-1">
          <Magnetic factor={0.2}>
            <button
              onClick={() => handleNav("hero")}
              className="bg-transparent border-0 p-0 cursor-pointer"
            >
              <img
                src={Logo}
                alt={SITE_CONFIG.name}
                className="w-8 h-8 md:w-9 md:h-9 object-contain"
              />
            </button>
          </Magnetic>

          <div className="hidden md:flex flex-col gap-0.5 mt-2">
            <span className="text-[7px] font-mono tracking-[0.3em] uppercase text-white/25">
              {SITE_CONFIG.version} / {SITE_CONFIG.year}
            </span>
            <span className="text-[7px] font-mono tracking-[0.3em] uppercase text-white/25">
              {SITE_CONFIG.location}
            </span>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-4 h-[0.5px] bg-white/15" />
              <span className="text-[7px] font-mono tracking-[0.3em] uppercase text-primary/50">
                Online
              </span>
            </div>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden absolute top-6 right-6 md:top-8 md:right-8 pointer-events-auto
                     w-10 h-10 flex flex-col items-center justify-center gap-1.5
                     border border-white/10 bg-transparent cursor-pointer
                     hover:border-primary/40 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.3 : 0 }}
            className="block w-4 h-[0.5px] bg-white/50"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="block w-4 h-[0.5px] bg-white/50"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.3 : 0 }}
            className="block w-4 h-[0.5px] bg-white/50"
          />
        </button>

        {/* Desktop nav — top right */}
        <div className="hidden lg:flex absolute top-10 right-10 pointer-events-auto">
          <nav className="flex flex-col gap-3 items-end relative py-2">
            {/* Scan line */}
            <motion.div
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute right-[-12px] w-[1px] h-10 pointer-events-none z-50"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)",
              }}
            />
            <div className="absolute right-[-12px] top-0 bottom-0 w-[1px] bg-white/[0.06]" />

            {NAV_LINKS.map((link, i) => {
              const isActive = active === link.section;
              return (
                <Magnetic key={link.name} factor={0.12}>
                  <motion.button
                    onClick={() => handleNav(link.section)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                    className="group relative flex items-baseline gap-3 py-0.5 text-right
                               bg-transparent border-0 cursor-pointer"
                  >
                    <span
                      className="text-[7px] font-mono text-primary opacity-0 translate-x-1
                                     group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    >
                      [{link.id}]
                    </span>
                    <span
                      className={`font-heading font-light tracking-tighter transition-all duration-300
                      ${
                        isActive
                          ? "text-white italic text-xl md:text-2xl"
                          : "text-white/35 text-lg md:text-xl group-hover:text-white group-hover:italic"
                      }`}
                    >
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="dot"
                        className="w-1 h-1 rounded-full bg-primary mb-1"
                      />
                    )}
                  </motion.button>
                </Magnetic>
              );
            })}
          </nav>
        </div>
      </motion.div>

      {/* BOTTOM CENTER — date / time strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hidden lg:flex fixed bottom-0 left-1/2 -translate-x-1/2 z-[100]
                   items-center gap-5 px-6 py-3 pointer-events-none"
      >
        {/* Left line */}
        <div className="w-10 h-[0.5px] bg-white/10" />

        {/* Date */}
        <span className="text-[7px] font-mono tracking-[0.4em] uppercase text-white/20">
          {formatDate(time)}
        </span>

        {/* Separator dot */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-1 rounded-full bg-primary/60"
        />

        {/* Time */}
        <span className="text-[9px] font-mono tracking-[0.3em] text-white/30 tabular-nums">
          {formatTime(time)}
        </span>

        {/* Right line */}
        <div className="w-10 h-[0.5px] bg-white/10" />
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.75, 1] }}
            className="fixed inset-0 z-[90] bg-bg flex flex-col items-start justify-center gap-2 lg:hidden px-10 sm:px-16"
          >
            <div className="flex items-center gap-3 opacity-30 mb-4">
              <div className="w-5 h-[0.5px] bg-primary" />
              <span className="text-[13px] font-mono tracking-[0.4em] uppercase text-primary">
                Navigation
              </span>
            </div>

            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.name}
                onClick={() => handleNav(link.section)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group flex items-baseline gap-4 bg-transparent border-0 cursor-pointer py-2
                  ${active === link.section ? "text-white" : "text-white/30 hover:text-white/80"}`}
              >
                <span className="text-[8px] font-mono text-primary/50 group-hover:text-primary transition-colors duration-300">
                  {link.id}
                </span>
                <span
                  className={`font-heading tracking-tighter transition-all duration-300 text-4xl sm:text-5xl
                  ${active === link.section ? "italic" : "group-hover:italic"}`}
                >
                  {link.name}
                </span>
              </motion.button>
            ))}

            {/* Date + time inside mobile menu */}
            <div className="absolute bottom-8 left-10 sm:left-16 flex flex-col items-start gap-2">
              <div className="flex items-center gap-3">
                <span className="text-[7px] font-mono tracking-[0.4em] uppercase text-white/15">
                  {formatDate(time)}
                </span>
                <div className="w-1 h-1 rounded-full bg-primary/40" />
                <span className="text-[9px] font-mono tracking-[0.3em] text-white/20 tabular-nums">
                  {formatTime(time)}
                </span>
              </div>
              <span className="text-[7px] font-mono tracking-[0.3em] uppercase text-white/10">
                {SITE_CONFIG.city} · {SITE_CONFIG.version}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
