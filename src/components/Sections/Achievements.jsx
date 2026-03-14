import { motion } from "motion/react";
import { ACHIEVEMENTS } from "../../constants";

const Achievements = () => (
  <section
    id="achievements"
    className="min-h-screen py-24 px-6 md:px-12 lg:px-20 bg-bg relative overflow-hidden"
  >
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                 text-white/[0.018] font-heading font-bold italic pointer-events-none select-none leading-none text-center"
      style={{ fontSize: "clamp(70px, 15vw, 200px)" }}
    >
      Awards
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-4"
      >
        <div className="w-6 h-[0.5px] bg-primary/50" />
        <span className="text-[10px] md:text-[11px] font-mono tracking-[0.45em] uppercase text-primary/60">
          06 / Key Milestones
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-heading italic tracking-tight mb-14"
        style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
      >
        Achievements
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
        {ACHIEVEMENTS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.12,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative p-8 md:p-12 bg-bg hover:bg-white/[0.015] transition-colors duration-500 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-7">
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.4em] uppercase text-primary/40">
                {item.year}
              </span>
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                whileHover={{ rotate: 72 }}
                transition={{ duration: 0.5 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <polygon
                  points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                  stroke="#c9a84c"
                  strokeWidth="1"
                  fill="rgba(201,168,76,0.1)"
                />
              </motion.svg>
            </div>

            <h3
              className="font-heading italic text-2xl md:text-3xl mb-3 text-white/80
                           group-hover:text-white transition-colors duration-300"
            >
              {item.title}
            </h3>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-[0.5px] bg-primary/40" />
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.3em] uppercase text-primary/50">
                {item.organization}
              </span>
            </div>

            <p
              className="text-white/30 text-[13px] md:text-sm font-mono leading-relaxed
                          group-hover:text-white/50 transition-colors duration-300"
            >
              {item.description}
            </p>

            <div
              className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-primary scale-x-0 origin-left
                         group-hover:scale-x-100 transition-transform duration-500"
              style={{
                transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
