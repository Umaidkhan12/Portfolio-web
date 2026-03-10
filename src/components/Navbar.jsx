import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const navLinks = [
    { name: 'Index', href: '#', id: '01' },
    { name: 'Works', href: '#projects', id: '02' },
    { name: 'Archive', href: '#about', id: '03' },
    { name: 'Contact', href: '#contact', id: '04' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[100] pointer-events-none p-6 md:p-10">
      {/* Top Left: Logo & Build Info */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 pointer-events-auto flex flex-col gap-1">
        <Magnetic factor={0.2}>
          <motion.div className="text-2xl font-heading font-black tracking-tighter text-white">
            UK<span className="text-primary italic">.</span>
          </motion.div>
        </Magnetic>
        <div className="flex flex-col gap-0.5 opacity-30 mt-2">
            <span className="text-[7px] font-mono tracking-[0.3em] uppercase">Built for 2026/V.02</span>
            <span className="text-[7px] font-mono tracking-[0.3em] uppercase">25.0487° N, 55.2290° E</span>
        </div>
      </div>

      {/* Top Right: Distributed Link HUD */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 pointer-events-auto flex flex-col items-end gap-8">
        {/* Scanning Utility Area */}
        <div className="flex items-center gap-10">
            <div className="hidden lg:flex flex-col items-end opacity-40">
                <span className="text-[8px] font-mono tracking-widest uppercase mb-1">Status</span>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-heading font-medium tracking-widest text-white tabular-nums">
                        {formatTime(time)}
                    </span>
                    <motion.div 
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-primary" 
                    />
                </div>
            </div>

            <nav className="flex flex-col gap-4 items-end relative py-4">
              {/* Vertical Scanning Line */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute right-[-10px] w-[1px] h-10 bg-white/40 blur-[1px] z-50 pointer-events-none"
              />

              {navLinks.map((link) => (
                <Magnetic key={link.name} factor={0.15}>
                  <a
                    href={link.href}
                    className="group relative flex items-baseline gap-4 py-1 text-right"
                  >
                    <span className="text-[8px] font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      [{link.id}]
                    </span>
                    <span className="text-xl md:text-3xl font-heading font-light tracking-tighter text-white/50 group-hover:text-white transition-all duration-500 group-hover:italic">
                      {link.name}
                    </span>
                    <span className="text-[7px] font-mono tracking-tighter opacity-20 uppercase">
                        Active
                    </span>
                  </a>
                </Magnetic>
              ))}
            </nav>
        </div>
      </div>

      {/* Bottom Right Decor: Architectural Line */}
      <div className="absolute bottom-10 right-10 flex items-center gap-4 opacity-10">
        <div className="w-20 h-[0.5px] bg-white" />
        <span className="text-[8px] font-mono tracking-[0.5em] uppercase">UI.HUD.SYSTEM</span>
      </div>
    </div>
  );
};

export default Navbar;
