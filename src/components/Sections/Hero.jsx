import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Magnetic from "../UI/Magnetic";
import { SITE_CONFIG, scrollTo } from "../../constants";
import Logo from "../../assets/Logo.svg";

// ─── Ease presets ─────────────────────────────────────────────────────────────
const EXPO = [0.16, 1, 0.3, 1];

// ─── Clip-reveal word ─────────────────────────────────────────────────────────
function RevealWord({ word, delay = 0, outlined = false }) {
  return (
    <div className="overflow-hidden" style={{ lineHeight: 0.88 }}>
      <motion.span
        className="font-heading font-bold italic tracking-[-0.04em] select-none block"
        style={{
          fontSize: "clamp(72px, 17vw, 228px)",
          WebkitTextStroke: outlined
            ? "1.5px var(--color-primary, #c9a84c)"
            : undefined,
          color: outlined ? "transparent" : "white",
        }}
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease: EXPO }}
      >
        {word}
      </motion.span>
    </div>
  );
}

// ─── Minimal scroll indicator ─────────────────────────────────────────────────
function ScrollIndicator({ visible }) {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                 flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 8 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    >
      <span className="font-mono text-[8px] tracking-[0.4em] text-white/25 select-none">
        SCROLL
      </span>

      {/* Two staggered chevrons */}
      {[0, 1].map((i) => (
        <motion.svg
          key={i}
          width="12" height="7"
          viewBox="0 0 12 7"
          fill="none"
          className="block"
          animate={{ opacity: [0.15, 0.9, 0.15], y: [0, 3, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        >
          <polyline
            points="1,1 6,6 11,1"
            stroke="var(--color-primary, #c9a84c)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      ))}
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero({ loading }) {
  const [ready, setReady] = useState(false);

  // Wait until loading overlay clears, then trigger reveals
  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setReady(true), 80);
      return () => clearTimeout(t);
    }
  }, [loading]);

  // Stagger timings (seconds from reveal start)
  const T = {
    word1:    0.05,
    word2:    0.22,
    divider:  0.55,
    subtitle: 0.65,
    cta:      0.75,
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* ── CSS ───────────────────────────────────────────────────────────── */}
      <style>{`
        #hero .grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      {/* Background grid */}
      <div className="grid-bg absolute inset-0 pointer-events-none" aria-hidden />

      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 35%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* ══ NAME BLOCK ══════════════════════════════════════════════════════ */}
      <div
        className="relative z-10 flex-1 flex flex-col justify-center
                   px-6 md:px-14 lg:px-20 max-w-[1400px] w-full mx-auto md:mt-10"
      >
        <div className="flex flex-col mb-10 md:mb-16 xl:mb-20">
          {ready && (
            <>
              <RevealWord word="UMAID" delay={T.word1} />
              <div className="mt-[-3vw] sm:mt-[-2vw]">
                <RevealWord word="KHAN." delay={T.word2} outlined />
              </div>
            </>
          )}
        </div>

        {/* ── Divider + Subtitle + CTA ── */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 md:gap-12 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: T.subtitle, ease: EXPO }}
        >
          {/* Thin top rule */}
          <motion.div
            className="hidden sm:block absolute left-6 md:left-14 lg:left-20 h-[1px] bg-white/10"
            style={{ width: "clamp(80px, 12vw, 160px)", top: "auto" }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={ready ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: T.divider, ease: EXPO }}
          />

          <p
            className="font-mono text-[13px] md:text-[14px] text-white/50
                       leading-relaxed tracking-wide max-w-[400px]"
          >
            {SITE_CONFIG.hero.subtitle}
          </p>

          <Magnetic factor={0.2}>
            <button
              onClick={() => scrollTo("contact")}
              className="group relative inline-flex items-center gap-3 px-7 py-3.5
                         border border-white/12 font-mono text-[11px] tracking-[0.3em] uppercase
                         text-white/40 hover:text-white hover:border-primary/40
                         transition-colors duration-300 overflow-hidden bg-transparent
                         cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10">{SITE_CONFIG.hero.cta}</span>
              <span
                className="relative z-10 text-primary group-hover:translate-x-1.5
                               transition-transform duration-300"
              >
                →
              </span>
              {/* Wipe fill on hover */}
              <span
                className="absolute inset-0 bg-primary/[0.06] translate-y-full
                           group-hover:translate-y-0 transition-transform duration-500"
                style={{ transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)" }}
              />
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* ══ SCROLL INDICATOR ════════════════════════════════════════════════ */}
      <ScrollIndicator visible={ready} />

    </section>
  );
}