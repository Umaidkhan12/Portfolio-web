import { motion } from "motion/react";
import { LANGUAGES, INTERESTS, NAV_LINKS } from "../../constants";

const Languages = () => (
  <section
    id="languages"
    className="min-h-screen py-24 px-6 md:px-12 lg:px-20 bg-bg relative overflow-hidden"
  >
    <div
      className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3
                 text-white/[0.02] font-heading font-bold italic pointer-events-none select-none leading-none"
      style={{ fontSize: "clamp(80px, 15vw, 200px)" }}
    >
      More
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
          {NAV_LINKS[5].id} / Languages & Interests
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
        Beyond Code
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
        {/* Languages block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative p-8 md:p-12 bg-bg hover:bg-white/[0.015] transition-colors duration-500 overflow-hidden"
        >
          <span className="text-[10px] md:text-[11px] font-mono tracking-[0.4em] uppercase text-primary/40 block mb-6">
            Languages Spoken
          </span>
          <div className="flex flex-col gap-5">
            {LANGUAGES.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="flex items-center justify-between group/row"
              >
                <h3 className="font-heading italic text-2xl md:text-3xl text-white/80 group-hover/row:text-white transition-colors duration-300">
                  {lang.name}
                </h3>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary/50 border border-primary/20 px-3 py-1 group-hover/row:border-primary/50 transition-colors duration-300">
                  {lang.level}
                </span>
              </motion.div>
            ))}
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-primary scale-x-0 origin-left
                       group-hover:scale-x-100 transition-transform duration-500"
            style={{ transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)" }}
          />
        </motion.div>

        {/* Interests block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative p-8 md:p-12 bg-bg hover:bg-white/[0.015] transition-colors duration-500 overflow-hidden"
        >
          <span className="text-[10px] md:text-[11px] font-mono tracking-[0.4em] uppercase text-primary/40 block mb-6">
            Interests & Hobbies
          </span>
          <div className="flex flex-wrap gap-3">
            {INTERESTS.map((interest, i) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="font-heading italic text-xl md:text-2xl text-white/55 border border-white/[0.08] px-4 py-2
                           hover:text-white hover:border-primary/40 transition-all duration-300 cursor-default"
              >
                {interest}
              </motion.span>
            ))}
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-primary scale-x-0 origin-left
                       group-hover:scale-x-100 transition-transform duration-500"
            style={{ transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)" }}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Languages;
