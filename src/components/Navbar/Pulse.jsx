import { motion } from 'motion/react';

/** Blinking status dot */
const Pulse = ({ color = 'bg-primary' }) => (
  <motion.span
    animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
    className={`inline-block w-1.5 h-1.5 rounded-full ${color}`}
  />
);

export default Pulse;
