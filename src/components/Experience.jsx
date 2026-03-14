import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.exp-item', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        y: 50, opacity: 0, stagger: 0.2, duration: 1, ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="min-h-screen py-24 px-6 md:px-12 lg:px-20 bg-bg relative overflow-hidden"
    >
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4
                   text-white/[0.02] font-heading font-bold italic pointer-events-none select-none leading-none"
        style={{ fontSize: 'clamp(80px, 18vw, 220px)' }}
      >
        Work
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="flex items-center gap-3 mb-4"
        >
          <div className="w-6 h-[0.5px] bg-primary/50" />
          <span className="text-[10px] md:text-[11px] font-mono tracking-[0.45em] uppercase text-primary/60">
            04 / Professional History
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="font-heading italic tracking-tight mb-14"
          style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-[0.5px] bg-white/[0.06]" />

          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="exp-item group relative pl-8 md:pl-10 pb-14 last:pb-0">
              <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border border-white/20 bg-bg
                              group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300" />

              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.4em] uppercase text-primary/50 block mb-2">
                {exp.period}
              </span>

              <h3 className="font-heading italic text-2xl md:text-3xl tracking-tight text-white/80
                             group-hover:text-white transition-colors duration-300 mb-2">
                {exp.role}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-[0.5px] bg-primary/40" />
                <span className="text-[10px] md:text-[11px] font-mono tracking-[0.3em] uppercase text-primary/50">
                  {exp.company}
                </span>
              </div>

              <p className="text-white/30 text-[13px] md:text-sm font-mono leading-relaxed max-w-xl
                            group-hover:text-white/50 transition-colors duration-300">
                {exp.description}
              </p>

              {/* Gold hover line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[0.5px] bg-primary scale-y-0 origin-top
                           group-hover:scale-y-100 transition-transform duration-500"
                style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;