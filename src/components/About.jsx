import { motion } from 'motion/react';
import { ABOUT_STATS } from '../constants';

const About = () => (
  <section
    id="about"
    className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-24 bg-bg-secondary relative overflow-hidden"
  >
    {/* BG ghost label */}
    <div
      className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3
                 text-white/[0.02] font-heading font-bold italic pointer-events-none select-none leading-none"
      style={{ fontSize: 'clamp(100px, 18vw, 240px)' }}
    >
      About
    </div>

    <div className="max-w-7xl mx-auto w-full relative z-10">

      {/* Section tag */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="w-8 h-[1px] bg-primary" />
        <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-primary">
          01 / About
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="font-heading italic font-bold tracking-tighter leading-none mb-16"
        style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
      >
        Specializing in{' '}
        <span className="text-white/20 hover:text-white transition-colors duration-500 cursor-default">high-end</span> digital products
        <br />with a focus on{' '}
        <span className="text-primary italic">motion</span> and{' '}
        <span className="text-white">refined</span> aesthetics.
      </motion.h2>

      {/* Gold divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
        className="w-full h-[0.5px] mb-14 origin-left"
        style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.3), rgba(201,168,76,0.05), transparent)' }}
      />

      {/* Two col text */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        {[
          'I bridge the gap between design and technology, creating immersive experiences that resonate. My approach is rooted in minimalism, precision, and a deep understanding of user behavior.',
          'With a background in both creative design and technical development, I bring a unique perspective to every project, ensuring that every interaction is meaningful and every detail is polished.',
        ].map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 + i * 0.1 }}
            className="text-white/35 text-[13px] md:text-sm font-mono leading-[1.8] hover:text-white/55 transition-colors duration-500"
          >
            {text}
          </motion.p>
        ))}
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55 }}
        className="flex flex-wrap gap-12 mt-16 pt-10 border-t border-white/[0.05]"
      >
        {ABOUT_STATS.map((s) => (
          <div key={s.label} className="flex flex-col gap-1.5">
            <span className="font-heading italic text-3xl md:text-4xl text-white/75">
              {s.num}
            </span>
            <span className="text-[10px] md:text-[11px] font-mono tracking-[0.35em] uppercase text-white/25">
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default About;