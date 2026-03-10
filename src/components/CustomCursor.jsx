import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleDragStart = () => setIsDragging(true);
    const handleDragEnd = () => setIsDragging(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('dragstart', handleDragStart);
    window.addEventListener('dragend', handleDragEnd);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('dragend', handleDragEnd);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Framer Motion constraints and configurations
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: isVisible && !isDragging ? 1 : 0,
      backgroundColor: 'transparent',
      borderColor: 'rgba(255, 255, 255, 0.4)',
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 35
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      opacity: isVisible && !isDragging ? 1 : 0,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: '#ffffff',
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 35
      }
    }
  };

  return (
    <div className="hidden md:block">
      {/* Outer animated circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-[1.5px] pointer-events-none z-[9999] mix-blend-difference"
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
      />
      
      {/* Inner precise dot */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] bg-white mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
          transition: 'transform 0.05s linear',
          opacity: isHovering || !isVisible || isDragging ? 0 : 1
        }}
      />
    </div>
  );
};

export default CustomCursor;
