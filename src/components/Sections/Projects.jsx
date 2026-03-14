import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { PROJECTS } from "../../constants";

const Card = ({ project, i }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), {
    stiffness: 200,
    damping: 30,
  });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), {
    stiffness: 200,
    damping: 30,
  });

  const handleMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set((e.clientX - left) / width - 0.5);
    y.set((e.clientY - top) / height - 0.5);
  };

  const handleLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="relative group cursor-pointer border border-white/[0.07] overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.bg} z-0`} />

      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at 60% 40%, ${project.color}14 0%, transparent 70%)`,
        }}
      />

      {/* Top accent */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: 0, backgroundColor: project.color, height: "1px" }}
        className="absolute top-0 left-0 right-0 z-10"
      />

      <div className="relative z-10 p-6 md:p-8 flex flex-col min-h-[260px] md:min-h-[280px] justify-between gap-5">
        {/* Top row */}
        <div className="flex justify-between items-start">
          <motion.span
            animate={{
              color: hovered ? project.color : "rgba(255,255,255,0.18)",
            }}
            transition={{ duration: 0.3 }}
            className="text-[11px] font-mono tracking-[0.3em]"
          >
            {project.index}
          </motion.span>
          <motion.div
            animate={{
              opacity: hovered ? 1 : 0,
              rotate: hovered ? -45 : 0,
              scale: hovered ? 1 : 0.6,
            }}
            transition={{ duration: 0.3 }}
            className="w-7 h-7 border flex items-center justify-center text-xs"
            style={{ borderColor: project.color, color: project.color }}
          >
            ↗
          </motion.div>
        </div>

        {/* Title */}
        <div>
          <motion.h3
            animate={{ fontStyle: hovered ? "italic" : "normal" }}
            transition={{ duration: 0.3 }}
            className="font-heading text-3xl md:text-4xl tracking-tight leading-tight mb-2"
          >
            {project.title}
          </motion.h3>
          <motion.p
            animate={{ opacity: hovered ? 0.45 : 0, y: hovered ? 0 : 6 }}
            transition={{ duration: 0.35 }}
            className="text-[13px] font-mono leading-relaxed"
          >
            {project.description}
          </motion.p>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag, t) => (
              <motion.span
                key={tag}
                animate={{
                  borderColor: hovered
                    ? project.color
                    : "rgba(255,255,255,0.1)",
                  color: hovered ? project.color : "rgba(255,255,255,0.3)",
                }}
                transition={{ duration: 0.3, delay: t * 0.05 }}
                className="text-[10px] font-mono uppercase tracking-[0.25em] px-2 py-1 border"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <span className="text-[10px] font-mono text-white/15 tabular-nums">
            {project.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section
    id="projects"
    className="min-h-screen py-24 px-6 md:px-12 lg:px-20 bg-bg-secondary relative overflow-hidden"
  >
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
              03 / Selected Works
            </span>
          </motion.div>

          <div>
            <motion.h2
              initial={{ y: "105%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading italic tracking-tight"
              style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
            >
              Projects
            </motion.h2>
          </div>
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="hidden md:block text-[10px] md:text-[11px] font-mono tracking-[0.3em] uppercase text-white/20 border border-white/[0.08] px-4 py-2"
        >
          {PROJECTS.length} Projects
        </motion.span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {PROJECTS.map((p, i) => (
          <Card key={i} project={p} i={i} />
        ))}
      </div>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-10 flex justify-end"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.3em] px-5 py-2.5
                     border border-white/[0.08] text-white/25
                     hover:text-white/70 hover:border-white/20 transition-all duration-300 cursor-pointer bg-transparent"
        >
          View All →
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default Projects;
