import { motion } from "motion/react";
import { EDUCATION } from "../../constants";

const Education = () => (
  <section
    id="education"
    className="min-h-screen py-24 px-6 md:px-12 lg:px-20 bg-bg-secondary relative overflow-hidden"
  >
    <div
      className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4
                 text-white/[0.02] font-heading font-bold italic pointer-events-none select-none leading-none"
      style={{ fontSize: "clamp(80px, 18vw, 220px)" }}
    >
      Study
    </div>

    <div className="max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-4"
      >
        <div className="w-6 h-[0.5px] bg-primary/50" />
        <span className="text-[10px] md:text-[11px] font-mono tracking-[0.45em] uppercase text-primary/60">
          05 / Academic Journey
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
        Education
      </motion.h2>

      <div className="space-y-6">
        {EDUCATION.map((edu, i) => (
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
            className="group relative p-7 md:p-10 border border-white/[0.05]
                       hover:border-primary/20 transition-colors duration-500"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
              <h3
                className="font-heading italic text-2xl md:text-3xl text-white/80
                             group-hover:text-white transition-colors duration-300"
              >
                {edu.degree}
              </h3>
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.4em] uppercase text-white/20 whitespace-nowrap shrink-0">
                {edu.period}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-[0.5px] bg-primary/40" />
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.3em] uppercase text-primary/50">
                {edu.school}
              </span>
            </div>

            <p
              className="text-white/30 text-[13px] md:text-sm font-mono leading-relaxed max-w-xl
                          group-hover:text-white/50 transition-colors duration-300"
            >
              {edu.description}
            </p>

            <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary/0 group-hover:border-primary/40 transition-colors duration-400" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary/0 group-hover:border-primary/40 transition-colors duration-400" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
