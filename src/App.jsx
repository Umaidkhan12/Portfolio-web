import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import Magnetic from './components/Magnetic';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
      
      // Update CSS variables for the spotlight
      document.documentElement.style.setProperty('--x', `${clientX}px`);
      document.documentElement.style.setProperty('--y', `${clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="relative w-full min-h-[200vh] bg-bg text-text-main">
      <CustomCursor />
      <div className="spotlight" />
      <Background3D />
      <Navbar />
      
      {/* Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl font-heading font-bold mb-6 italic tracking-tighter"
          >
            Creative <br /> Developer
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="max-w-xl text-text-muted font-sans text-lg leading-relaxed tracking-wide mb-10"
          >
            Building bespoke digital experiences with a focus on high-end design and fluid animations.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Magnetic factor={0.2}>
              <button className="px-10 py-4 bg-white text-black text-[12px] font-bold font-heading tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 active:scale-95">
                Get In Touch
              </button>
            </Magnetic>
          </motion.div>
        </section>
      </motion.div>

    </main>
  );
}

export default App
