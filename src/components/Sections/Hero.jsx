import { motion } from "motion/react";
import Magnetic from "../UI/Magnetic";
import { SITE_CONFIG, scrollTo } from "../../constants";
import Logo from "../../assets/Logo.svg";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
};
const item = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const Hero = () => (
  <motion.section
    id="hero"
    variants={container}
    initial="hidden"
    animate="visible"
    className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
  >
    {/* Corner brackets */}
    {[
      "top-8 left-8 border-t border-l",
      "top-8 right-8 border-t border-r",
      "bottom-8 left-8 border-b border-l",
      "bottom-8 right-8 border-b border-r",
    ].map((cls, i) => (
      <div
        key={i}
        className={`absolute w-4 h-4 ${cls} border-white/10 pointer-events-none`}
      />
    ))}

    {/* Ghost BG letters */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                 text-white/[0.02] font-heading font-bold italic pointer-events-none select-none leading-none"
      style={{
        fontSize: "clamp(100px, 25vw, 340px)",
        letterSpacing: "-0.05em",
      }}
    >
      UK
    </div>

    {/* Logo */}
    <motion.div variants={item} className="mb-8 z-10">
      <img
        src={Logo}
        alt="Logo"
        className="w-8 h-8 md:w-10 md:h-10 object-contain mx-auto opacity-50"
      />
    </motion.div>

    {/* Section tag */}
    <motion.div variants={item} className="flex items-center gap-3 mb-6 z-10">
      <div className="w-5 h-[0.5px] bg-primary/50" />
      <span className="text-[10px] md:text-[11px] font-mono tracking-[0.5em] uppercase text-primary/60">
        01 / Portfolio
      </span>
      <div className="w-5 h-[0.5px] bg-primary/50" />
    </motion.div>

    {/* Heading */}
    <motion.h1
      variants={item}
      className="font-heading font-bold italic tracking-[-0.04em] leading-[0.88] mb-6 z-10 whitespace-pre-line"
      style={{ fontSize: "clamp(64px, 12vw, 148px)" }}
    >
      {SITE_CONFIG.hero.title}
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      variants={item}
      className="max-w-xs sm:max-w-md lg:max-w-lg text-white/35 font-mono text-[13px] md:text-[14px] leading-relaxed tracking-wide mb-10 z-10"
    >
      {SITE_CONFIG.hero.subtitle}
    </motion.p>

    {/* CTA */}
    <motion.div variants={item} className="z-10">
      <Magnetic factor={0.2}>
        <button
          onClick={() => scrollTo("contact")}
          className="group relative inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4
                     border border-white/15 text-[11px] md:text-[12px] font-mono tracking-[0.3em] uppercase
                     text-white/50 hover:text-white hover:border-primary/50
                     transition-all duration-300 overflow-hidden bg-transparent cursor-pointer"
        >
          <span className="relative z-10">{SITE_CONFIG.hero.cta}</span>
          <span className="relative z-10 text-primary transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
          <span
            className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-400"
            style={{ transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)" }}
          />
        </button>
      </Magnetic>
    </motion.div>

    {/* Scroll indicator */}
    <motion.div
      variants={item}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20"
    >
      <span className="text-[7px] font-mono tracking-[0.5em] uppercase">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-[1px] h-6 md:h-8 bg-white"
      />
    </motion.div>
  </motion.section>
);

export default Hero;
