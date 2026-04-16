import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS } from "../../constants";

const SectionHUD = ({ loading }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (loading) return;

    const ids = ["hero", ...NAV_LINKS.map((l) => l.section)];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = ids.indexOf(entry.target.id);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Initial check and observation
    const timer = setTimeout(() => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) obs.observe(el);
      });
    }, 1000);

    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, [loading]);

  const totalSections = NAV_LINKS.length + 1; // Hero + Links

  return (
    <div className="fixed left-6 md:left-8 lg:left-10 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col items-center gap-10 pointer-events-none">
      <div className="flex flex-col items-center gap-4">
        {/* Index Number */}
        <div className="h-6 overflow-hidden flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="text-[10px] font-mono font-bold text-primary"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Divider Line */}
        <div className="w-[1px] h-20 bg-white/10 relative">
          <motion.div
            animate={{ height: `${((activeIndex + 1) / totalSections) * 100}%` }}
            className="absolute top-0 left-0 w-full bg-primary/40"
          />
        </div>

        {/* Total Sections */}
        <span className="text-[10px] font-mono text-white/20">
          {String(totalSections).padStart(2, "0")}
        </span>
      </div>

      {/* Decorative vertical label */}
      <span className="text-[8px] font-mono uppercase tracking-[0.5em] text-white/10 rotate-180 [writing-mode:vertical-lr]">
        Scoping Phase
      </span>
    </div>
  );
};

export default SectionHUD;
