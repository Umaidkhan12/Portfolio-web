import Logo from "../assets/Logo.svg";
import { SITE_CONFIG } from "../../constants";

const Footer = () => (
  <footer className="py-12 md:py-16 px-6 md:px-12 lg:px-16 border-t border-white/[0.04] relative overflow-hidden">
    {/* Gold top line */}
    <div
      className="absolute top-0 left-0 right-0 h-[0.5px]"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)",
      }}
    />

    <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 sm:gap-4">
      {/* Left: logo + tagline */}
      <div className="flex flex-col items-center sm:items-start gap-3">
        <img
          src={Logo}
          alt={SITE_CONFIG.name}
          className="w-7 h-7 md:w-8 md:h-8 object-contain opacity-30 hover:opacity-70 transition-opacity duration-300"
        />
        <span className="text-[7px] font-mono tracking-[0.45em] uppercase text-white/50 italic">
          High-End Digital Experiences
        </span>
      </div>

      {/* Center: built with */}
      <div className="text-[7px] font-mono tracking-[0.35em] uppercase text-white/50 text-center order-last sm:order-none">
        Built with React · Tailwind · GSAP · Three.js
      </div>

      {/* Right: copyright */}
      <div className="text-[7px] font-mono tracking-[0.3em] uppercase text-white/50 text-center sm:text-right">
        © {new Date().getFullYear()} {SITE_CONFIG.name} — {SITE_CONFIG.version}
      </div>
    </div>
  </footer>
);

export default Footer;
