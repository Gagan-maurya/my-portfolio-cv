/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const sections = [
  { id: "hero", label: "<prakhar>" },
  { id: "about", label: "/about" },
  { id: "stack", label: "/stack" },
  { id: "projects", label: "/projects" },
  { id: "certificates", label: "/certificates" },
  { id: "contact", label: "/contact" },
];

const PurpleLineFlow = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 260;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const NAVBAR_HEIGHT = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hidden xl:flex fixed left-6 lg:left-10 top-24 bottom-16 z-30 flex-col items-center select-none pointer-events-auto">
      {/* Background Track Line */}
      <div className="relative w-[3px] h-full bg-purple-950/40 rounded-full">
        {/* Animated Glowing Purple Gradient Line */}
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#27CBCB] via-[#a855f7] to-[#c084fc] shadow-[0_0_15px_rgba(168,85,247,0.9),0_0_30px_rgba(168,85,247,0.6)] rounded-full"
        />

        {/* Ambient Purple Line Glow Aura */}
        <div className="absolute top-0 -left-1 w-2.5 h-full bg-purple-500/10 blur-sm rounded-full pointer-events-none" />

        {/* Section Checkpoint Nodes */}
        {sections.map((sec, idx) => {
          const isActive = activeSection === sec.id;
          const posPercent = (idx / (sections.length - 1)) * 100;

          return (
            <div
              key={sec.id}
              style={{ top: `${posPercent}%` }}
              onClick={() => scrollTo(sec.id)}
              className="absolute -left-[5px] -translate-y-1/2 flex items-center group cursor-pointer"
            >
              {/* Outer pulsing ring on active */}
              {isActive && (
                <span className="absolute -left-1 w-5 h-5 rounded-full bg-purple-500/30 animate-ping pointer-events-none" />
              )}

              {/* Node Dot */}
              <div
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 border relative z-10 ${
                  isActive
                    ? "bg-[#c084fc] border-white scale-125 shadow-[0_0_15px_#a855f7,0_0_30px_#a855f7]"
                    : "bg-[#101318] border-purple-500/50 group-hover:border-purple-300 group-hover:scale-110"
                }`}
              />

              {/* Section Tag on Hover / Active */}
              <span
                className={`absolute left-6 font-mono text-[11px] tracking-wide whitespace-nowrap px-2 py-0.5 rounded-md transition-all duration-200 ${
                  isActive
                    ? "text-[#c084fc] font-bold opacity-100 translate-x-0 bg-purple-950/70 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                    : "text-gray-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 bg-gray-950/80 border border-gray-800"
                }`}
              >
                {sec.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PurpleLineFlow;
