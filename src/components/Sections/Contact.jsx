import { motion } from "motion/react";
import { useState } from "react";
import Magnetic from "../UI/Magnetic";
import { SITE_CONFIG } from "../../constants";

const socials = [
  { id: "01", label: "LinkedIn", href: SITE_CONFIG.social.linkedin },
  { id: "02", label: "GitHub", href: SITE_CONFIG.social.github },
  { id: "03", label: "X (Twitter)", href: SITE_CONFIG.social.twitter },
];

const Contact = () => {
  const [formState, setFormState] = useState("idle"); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => setFormState("success"), 2000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 py-24 overflow-hidden bg-bg"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full" />
      </div>

      {/* Decorative Brackets */}
      <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/10" />
      <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-white/10" />
      <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/10" />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Content */}
          <div className="space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-8 h-[1px] bg-primary" />
                <span className="text-[11px] md:text-[12px] font-mono tracking-[0.4em] uppercase text-primary">
                  Get in Touch
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-heading italic font-bold tracking-tighter leading-none mb-8"
                style={{ fontSize: "clamp(44px, 7vw, 96px)" }}
              >
                Let's start <br />
                <span className="text-white/20 hover:text-white transition-colors duration-500 cursor-default">
                  something
                </span>{" "}
                <br />
                <span className="text-primary italic">extraordinary.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-text-muted text-[16px] md:text-lg max-w-md leading-relaxed"
              >
                I’m currently available for freelance projects and full-time
                opportunities. Drop a message or find me on social media.
              </motion.p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="group">
                <p className="text-[11px] font-mono uppercase tracking-widest text-white/30 mb-2">
                  Direct Line
                </p>
                <Magnetic factor={0.1}>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-2xl md:text-3xl font-heading hover:text-primary transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </Magnetic>
              </div>

              <div className="flex flex-wrap gap-8 pt-6">
                {socials.map((social) => (
                  <Magnetic key={social.id} factor={0.2}>
                    <a
                      href={social.href}
                      target="_blank"
                      className="group flex items-center gap-3 no-underline"
                    >
                      <span className="text-[11px] font-mono text-primary group-hover:translate-y-[-2px] transition-transform">
                        [{social.id}]
                      </span>
                      <span className="text-[15px] md:text-sm font-mono uppercase tracking-widest hover:text-white transition-colors">
                        {social.label}
                      </span>
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white/[0.02] backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-primary transition-colors font-mono text-[16px] md:text-sm placeholder:text-white/5"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-primary transition-colors font-mono text-[16px] md:text-sm placeholder:text-white/5"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                  What are you looking for?
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-primary transition-colors font-mono text-sm placeholder:text-white/5"
                  placeholder="e.g. Website Design, Branding, Development"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                  Tell me about your project
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-primary transition-colors font-mono text-sm resize-none placeholder:text-white/5"
                  placeholder="Hey Umaid, I'd love to work with you on..."
                />
              </div>

              <div className="pt-4 flex justify-end">
                <Magnetic factor={0.2}>
                  <button
                    disabled={formState !== "idle"}
                    className={`
                      px-10 py-4 rounded-full font-heading font-bold uppercase tracking-[0.2em] text-[12px]
                      transition-all duration-500 flex items-center gap-3
                      ${formState === "idle" ? "bg-primary text-black hover:scale-105 active:scale-95" : "bg-white/10 text-white cursor-not-allowed"}
                    `}
                  >
                    {formState === "idle" && "Send Message"}
                    {formState === "sending" && "Transmitting..."}
                    {formState === "success" && "Message Sent ★"}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </Magnetic>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
