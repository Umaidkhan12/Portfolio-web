import { motion } from "motion/react";
import { TECH_STACK, NAV_LINKS } from "../../constants";
import MaskText from "../UI/MaskText";

const Skills = () => (
  <section
    id="skills"
    className="min-h-screen py-24 px-6 md:px-12 lg:px-20 bg-bg relative overflow-hidden"
  >
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                 text-white/[0.02] font-heading font-bold italic pointer-events-none select-none leading-none"
      style={{ fontSize: "clamp(80px, 18vw, 260px)" }}
    >
      Skills
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="flex items-end justify-between mb-14">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-6 h-[0.5px] bg-primary/50" />
            <span className="text-[10px] md:text-[11px] font-mono tracking-[0.45em] uppercase text-primary/60">
              {NAV_LINKS[1].id} / Skills & Tools
            </span>
          </motion.div>
          <MaskText>
            <h2
              className="font-heading italic tracking-tight"
              style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
            >
              My Skills
            </h2>
          </MaskText>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="hidden md:block text-[10px] md:text-[11px] font-mono tracking-[0.3em] uppercase text-white/45 border border-white/[0.08] px-4 py-2"
        >
          {TECH_STACK.reduce((a, g) => a + g.items.length, 0)} Technologies
        </motion.span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.05]">
        {TECH_STACK.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.1,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative p-8 md:p-10 bg-bg hover:bg-white/[0.02] transition-colors duration-500"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/[0.08] group-hover:border-primary/40 transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/[0.08] group-hover:border-primary/40 transition-colors" />

            <span className="text-[10px] md:text-[11px] font-mono tracking-[0.4em] uppercase text-primary/40 block mb-5">
              0{i + 1}
            </span>
            <h3 className="font-heading italic text-2xl md:text-3xl mb-7 text-white/85 group-hover:text-white transition-colors duration-300">
              {group.category}
            </h3>
            <div className="w-full h-[0.5px] bg-white/[0.06] mb-7 group-hover:bg-primary/20 transition-colors duration-500" />
            <div className="flex flex-col gap-3">
              {group.items.map((item, j) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + j * 0.05 }}
                  className="flex items-center gap-3 group/item"
                >
                  <div className="w-1 h-1 rounded-full bg-primary/30 group-hover/item:bg-primary transition-colors duration-300 shrink-0" />
                  <span className="text-[12px] md:text-[13px] font-mono tracking-[0.2em] uppercase text-white/70 group-hover/item:text-white transition-colors duration-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
