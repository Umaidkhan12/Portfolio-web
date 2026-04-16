import { motion } from "motion/react";

const MaskText = ({ children, className, delay = 0 }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a luxury feel
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MaskText;
