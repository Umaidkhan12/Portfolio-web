import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-10 right-10 z-[1000] hidden md:block"
        >
          <Magnetic factor={0.2}>
            <button
              onClick={scrollToTop}
              className="group relative w-12 h-12 flex items-center justify-center border border-white/10 bg-bg/80 backdrop-blur-sm rounded-full cursor-pointer hover:border-primary/50 transition-colors"
              aria-label="Back to top"
            >
              <span className="text-white/50 group-hover:text-primary transition-colors text-lg">
                ↑
              </span>
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
            </button>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
