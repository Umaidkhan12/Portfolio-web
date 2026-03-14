import { motion } from 'motion/react';

/** Scanline + corner HUD frame for the mobile overlay */
const HudFrame = () => (
  <>
    {/* corners */}
    {[
      'top-4 left-4 border-t border-l',
      'top-4 right-4 border-t border-r',
      'bottom-4 left-4 border-b border-l',
      'bottom-4 right-4 border-b border-r',
    ].map((cls, i) => (
      <span key={i} className={`absolute w-5 h-5 border-white/20 ${cls}`} />
    ))}
    {/* horizontal scanline */}
    <motion.div
      animate={{ top: ['0%', '100%'] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none z-0"
    />
  </>
);

export default HudFrame;
