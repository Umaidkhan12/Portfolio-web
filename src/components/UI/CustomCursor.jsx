import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState("default");
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 400, damping: 28, mass: 0.5 };
  const borderX = useSpring(cursorX, springConfig);
  const borderY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("button, a, .cursor-pointer");
      if (target) {
        setCursorType("pointer");
      } else if (e.target.closest("h1, h2, h3")) {
        setCursorType("heading");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {/* Outer Border (Delayed physics) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-primary/40 pointer-events-none z-[10000] hidden md:block"
        style={{
          x: borderX,
          y: borderY,
          translateX: "-50%",
          translateY: "-50%",
          width: cursorType === "pointer" ? 64 : cursorType === "heading" ? 100 : 32,
          height: cursorType === "pointer" ? 64 : cursorType === "heading" ? 100 : 32,
          backgroundColor: cursorType === "heading" ? "rgba(201,168,76,0.08)" : "transparent",
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Inner Dot (Instant) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[10001] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: cursorType === "pointer" ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Magnetic HUD text (Optional flair) */}
      {cursorType === "heading" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed top-0 left-0 pointer-events-none z-[10002] hidden lg:block"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: 40,
            translateY: -40,
          }}
        >
          <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-primary/60">
            View Section
          </span>
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
