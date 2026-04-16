import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { SITE_CONFIG } from "../../constants";

/* ─── Cipher scramble hook ───────────────────────────────────────────── */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";

function useCipherText(target) {
  const [text, setText] = useState(target);
  const prev = useRef(target);

  useEffect(() => {
    if (target === prev.current) return;
    prev.current = target;
    let it = 0;
    const iv = setInterval(() => {
      setText(
        target
          .split("")
          .map((c, i) => {
            if (c === " ") return " ";
            if (i < it) return target[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      if (it >= target.length) clearInterval(iv);
      it += 0.7;
    }, 22);
    return () => clearInterval(iv);
  }, [target]);

  return text;
}

/* ─── Status stages ──────────────────────────────────────────────────── */
function getStatus(p) {
  if (p < 25) return "LOADING ASSETS";
  if (p < 50) return "COMPILING SHADERS";
  if (p < 75) return "INIT MODULES";
  if (p < 100) return "BUILDING SCENE";
  return "INITIALIZED";
}

/* ─── Corner bracket ─────────────────────────────────────────────────── */
const Corner = ({ pos, flip }) => (
  <div
    className={`absolute w-12 h-12 z-10 ${pos}`}
    style={{ transform: flip }}
  >
    <div
      className="absolute top-0 left-0 h-px bg-primary/50"
      style={{ width: 0, animation: "armH .75s cubic-bezier(.4,0,.2,1) .25s forwards" }}
    />
    <div
      className="absolute top-0 left-0 w-px bg-primary/50"
      style={{ height: 0, animation: "armV .75s cubic-bezier(.4,0,.2,1) .25s forwards" }}
    />
  </div>
);

/* ─── Signal bars ────────────────────────────────────────────────────── */
const SignalBars = () => (
  <div className="flex items-end gap-[2px]">
    {[4, 7, 10, 13].map((h, i) => (
      <div
        key={i}
        className="w-[3px] rounded-[1px] bg-primary/50"
        style={{ height: h }}
      />
    ))}
  </div>
);

/* ─── Main component ─────────────────────────────────────────────────── */
const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(() => new Date().toTimeString().slice(0, 8));
  const [session] = useState(() =>
    Math.random().toString(36).slice(2, 8).toUpperCase()
  );

  const statusText = useCipherText(getStatus(progress));
  const isGlitching = progress >= 90 && progress < 100;

  useEffect(() => {
    /* Clock */
    const clock = setInterval(
      () => setTime(new Date().toTimeString().slice(0, 8)),
      1000
    );

    /* Progress */
    const prog = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(prog); return 100; }
        return Math.min(prev + Math.floor(Math.random() * 4) + 1, 100);
      });
    }, 55);

    return () => { clearInterval(clock); clearInterval(prog); };
  }, []);

  return (
    <>
      {/* Keyframe injections — keeps the component self-contained */}
      <style>{`
        @keyframes armH  { to { width:  48px } }
        @keyframes armV  { to { height: 48px } }
        @keyframes ghostIn { from{opacity:0;transform:scale(1.06)} to{opacity:1;transform:scale(1)} }
        @keyframes slideUp { to { transform: translateY(0) } }
        @keyframes dsweep  { 0%{left:-50%} 100%{left:160%} }
        @keyframes shim    { 0%{transform:translateX(-250%)} 100%{transform:translateX(650%)} }
        @keyframes pdot    { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:1;transform:scale(1.4)} }

        @keyframes g1 {
          0%,100%{ opacity:0; clip-path:none; transform:translate(0) }
          15%{ opacity:.9; clip-path:inset(20% 0 60% 0); transform:translate(-5px,0) }
          35%{ opacity:.9; clip-path:inset(65% 0 5%  0); transform:translate( 4px,0) }
          55%{ opacity:.9; clip-path:inset(38% 0 32% 0); transform:translate(-3px,0) }
          75%{ opacity:.9; clip-path:inset( 5% 0 74% 0); transform:translate( 5px,0) }
        }
        @keyframes g2 {
          0%,100%{ opacity:0; clip-path:none; transform:translate(0) }
          20%{ opacity:.7; clip-path:inset(55% 0 16% 0); transform:translate( 6px,0) }
          40%{ opacity:.7; clip-path:inset(10% 0 68% 0); transform:translate(-4px,0) }
          60%{ opacity:.7; clip-path:inset(30% 0 44% 0); transform:translate( 3px,0) }
          80%{ opacity:.7; clip-path:inset(70% 0  6% 0); transform:translate(-6px,0) }
        }

        .glitch-wrap::before, .glitch-wrap::after {
          content: attr(data-v);
          position: absolute; inset: 0;
          font-family: inherit; font-size: inherit;
          line-height: inherit; letter-spacing: inherit;
          font-weight: inherit; font-style: inherit;
          opacity: 0;
        }
        .glitch-wrap::before { color: #ff2244; }
        .glitch-wrap::after  { color: #00ffcc; }
        .glitch-active::before { animation: g1 .38s steps(1) infinite; }
        .glitch-active::after  { animation: g2 .38s steps(1) infinite .08s; }
      `}</style>

      <motion.div
        initial={{ clipPath: "inset(0 0 0 0)" }}
        exit={{ clipPath: "inset(0 0 100% 0)" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        style={{ background: "#060606" }}
      >
        {/* ── Dot grid ─────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(201,169,110,0.07) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* ── Scanlines ────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background:
              "repeating-linear-gradient(0deg,transparent 0px,transparent 3px,rgba(0,0,0,0.13) 3px,rgba(0,0,0,0.13) 4px)",
          }}
        />

        {/* ── Vignette ─────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            background:
              "radial-gradient(ellipse at center,transparent 40%,rgba(0,0,0,0.65) 100%)",
          }}
        />

        {/* ── Ghost watermark ──────────────────────────────────────── */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[3] font-heading italic font-bold whitespace-nowrap"
          style={{
            fontSize: "min(18vw, 120px)",
            color: "rgba(201,169,110,0.028)",
            letterSpacing: "0.05em",
            animation: "ghostIn 2s ease forwards",
          }}
        >
          UMAID KHAN
        </div>

        {/* ── Corner brackets ──────────────────────────────────────── */}
        <Corner pos="top-[18px] left-[18px]" flip="" />
        <Corner pos="top-[18px] right-[18px]" flip="scaleX(-1)" />
        <Corner pos="bottom-[18px] left-[18px]" flip="scaleY(-1)" />
        <Corner pos="bottom-[18px] right-[18px]" flip="scale(-1,-1)" />

        {/* ── Top HUD ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute top-[18px] left-[76px] right-[76px] flex justify-between items-start z-10"
        >
          <div>
            <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-primary/50">
              19.0760° N · 72.8777° E
            </p>
            <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/20 mt-1">
              SESSION_{session}
            </p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-primary/50">
              {time}
            </p>
            <div className="flex items-center gap-2 mt-1 justify-end">
              <SignalBars />
              <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-primary/80">
                SYS.ONLINE
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Centre ───────────────────────────────────────────────── */}
        <div className="relative z-[15] flex flex-col items-center">
          {/* Percentage counter */}
          <div
            className="overflow-hidden flex items-center"
            style={{ height: "min(17vw, 108px)" }}
          >
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className={`glitch-wrap${isGlitching ? " glitch-active" : ""} font-heading italic font-bold text-white`}
              data-v={`${progress}%`}
              style={{
                fontSize: "min(20vw, 128px)",
                lineHeight: 0.85,
                letterSpacing: "-0.02em",
                position: "relative",
              }}
            >
              {progress}%
            </motion.div>
          </div>

          {/* Divider with gold sweep */}
          <div
            className="w-full relative overflow-hidden mt-1.5"
            style={{ height: 1, background: "rgba(255,255,255,0.07)" }}
          >
            <div
              className="absolute top-0 h-full"
              style={{
                width: "35%",
                background: "rgba(201,169,110,0.5)",
                animation: "dsweep 2.2s ease-in-out infinite",
                left: "-50%",
              }}
            />
          </div>

          {/* Status row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="flex items-center gap-3 mt-3"
          >
            <div
              className="w-[5px] h-[5px] rounded-full bg-primary/85"
              style={{ animation: "pdot 1.6s ease-in-out infinite" }}
            />
            <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-primary/60">
              SYSTEM.INIT
            </span>
            <div className="w-7 h-px bg-white/10" />
            <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-primary/85">
              {statusText}
            </span>
          </motion.div>
        </div>

        {/* ── Side HUD left ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="absolute left-[18px] top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-10"
        >
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="font-mono text-[8px] tracking-widest text-white/15">
                0{i + 1}
              </span>
              <div
                className="w-[7px] h-[7px] rounded-full border transition-all duration-500"
                style={{
                  borderColor:
                    progress > i * 25
                      ? "rgba(201,169,110,0.9)"
                      : "rgba(255,255,255,0.15)",
                  background:
                    progress > i * 25 ? "rgba(201,169,110,0.9)" : "transparent",
                }}
              />
            </div>
          ))}
        </motion.div>

        {/* ── Vertical indicator ────────────────────────────────────── */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px overflow-hidden z-10"
          style={{ height: 76, background: "rgba(255,255,255,0.05)" }}
        >
          <motion.div
            animate={{ height: `${progress}%` }}
            transition={{ ease: "linear" }}
            className="absolute bottom-0 w-full"
            style={{ background: "rgba(201,169,110,0.55)" }}
          />
        </div>

        {/* ── Bottom HUD ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-[10px] left-[76px] right-[76px] flex justify-between z-10"
        >
          <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/20">
            {Math.floor(progress * 10.24)} / 1024 KB
          </span>
          <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/20">
            {SITE_CONFIG.version} · {SITE_CONFIG.name}
          </span>
        </motion.div>

        {/* ── Bottom progress bar ───────────────────────────────────── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-[15]"
          style={{ height: 2, background: "rgba(255,255,255,0.04)" }}
        >
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
            className="h-full relative overflow-hidden"
            style={{ background: "rgba(201,169,110,0.75)" }}
          >
            <div
              className="absolute inset-0"
              style={{
                width: "28%",
                background: "rgba(255,255,255,0.55)",
                animation: "shim 1.3s ease-in-out infinite",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Loader;