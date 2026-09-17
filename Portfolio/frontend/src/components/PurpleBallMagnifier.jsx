/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PurpleBallMagnifier = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isMagnifying, setIsMagnifying] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(true);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    if (window.matchMedia && !window.matchMedia("(pointer: fine)").matches) {
      setIsPointerDevice(false);
      return;
    }

    const handlePointerMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check element under cursor
      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target) {
        // Tag names or classes that trigger the glowing purple magnifier
        const isTextElement =
          target.closest("p") ||
          target.closest("h1") ||
          target.closest("h2") ||
          target.closest("h3") ||
          target.closest("h4") ||
          target.closest("blockquote") ||
          target.closest("code") ||
          target.closest("pre") ||
          target.closest(".magnify-text") ||
          target.closest("[data-magnify]") ||
          target.tagName === "P" ||
          target.tagName === "H1" ||
          target.tagName === "H2" ||
          target.tagName === "H3" ||
          target.tagName === "BLOCKQUOTE";

        const isButtonOrLink = target.closest("button") || target.closest("a");

        if (isTextElement && !isButtonOrLink) {
          setIsMagnifying(true);
        } else {
          setIsMagnifying(false);
        }
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  if (!isPointerDevice) return null;

  return (
    <motion.div
      aria-hidden
      animate={{
        x: pos.x,
        y: pos.y,
        scale: isMagnifying ? 1 : 0,
        opacity: isMagnifying ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 28,
        mass: 0.5,
      }}
      className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full pointer-events-none z-100000 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at center, rgba(192, 132, 252, 0.45) 0%, rgba(168, 85, 247, 0.3) 50%, rgba(147, 51, 234, 0.1) 75%, transparent 100%)",
        boxShadow:
          "0 0 35px rgba(168, 85, 247, 0.75), 0 0 60px rgba(192, 132, 252, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(1px)",
        border: "1px solid rgba(216, 180, 254, 0.4)",
      }}
    >
      {/* Inner Lens Core Reflection */}
      <div className="absolute top-2 left-3 w-4 h-2.5 rounded-full bg-white/40 blur-[1px] -rotate-45" />
    </motion.div>
  );
};

export default PurpleBallMagnifier;
