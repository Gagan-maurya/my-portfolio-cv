/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Activity,
  GitBranch,
  Terminal,
  FileCode,
  CheckCircle2,
} from "lucide-react";
import { SiTypescript } from "react-icons/si";

const AcademicDetails = () => {
  const [showStats, setShowStats] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const academicData = [
    {
      id: "programme",
      label: "PROGRAMME",
      value: "B.Tech CSE (2nd yr)",
      isInteractive: false,
    },
    {
      id: "university",
      label: "UNIVERSITY",
      value: "Lovely Professional Univ.",
      isInteractive: false,
    },
    {
      id: "cgpa",
      label: "CURRENT CGPA",
      value: "7.4",
      isInteractive: true,
      badge: "+0.61",
      hint: "Hover for stats",
    },
    {
      id: "focus",
      label: "FOCUS",
      value: "Fullstack · AI/ML",
      isInteractive: false,
    },
  ];

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setShowStats(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowStats(false);
    }, 300);
  };

  return (
    <div className="relative w-full">
      {/* 4 Academic Info Cards in a balanced 2x2 rectangular grid */}
      <div className="grid grid-cols-2 gap-2 w-full">
        {academicData.map((item) => {
          if (item.isInteractive) {
            return (
              <div
                key={item.id}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setShowStats((prev) => !prev)}
                className="relative group cursor-pointer h-full"
              >
                <div className="p-3 rounded-xl border border-gray-800/90 bg-gray-900/40 backdrop-blur-md transition-all duration-300 group-hover:border-[#27CBCB]/60 group-hover:bg-gray-900/70 group-hover:shadow-[0_0_15px_rgba(39,203,203,0.2)] flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-mono tracking-wider text-[#27CBCB] uppercase font-medium flex items-center gap-1">
                      <span>{item.label}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#26D868] animate-pulse" />
                    </p>
                    <Activity
                      size={13}
                      className="text-[#27CBCB] group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="mt-1 flex items-baseline justify-between gap-1">
                    <p className="text-sm font-bold text-white tracking-wide">
                      {item.value}
                    </p>
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[9px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-[#26D868]">
                      <TrendingUp size={9} />
                      {item.badge}
                    </span>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={item.id}
              className="p-3 rounded-xl border border-gray-800/80 bg-gray-900/30 backdrop-blur-md transition-all duration-300 hover:border-gray-700/80 hover:bg-gray-900/50 flex flex-col justify-between"
            >
              <p className="text-[10px] font-mono tracking-wider text-[#27CBCB] uppercase font-medium">
                {item.label}
              </p>
              <p className="text-xs font-semibold text-gray-200 mt-1 truncate">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* VS Code IDE Theme Dialog with Mac Dock Shrink/Pop Animation */}
      <AnimatePresence>
        {showStats && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.15,
              scaleY: 0.05,
              y: 50,
              x: -30,
              transformOrigin: "bottom left",
              filter: "blur(4px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              scaleY: 1,
              y: 0,
              x: 0,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 420,
                damping: 24,
                mass: 0.8,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.15,
              scaleY: 0.05,
              y: 50,
              x: -30,
              filter: "blur(4px)",
              transition: {
                duration: 0.2,
                ease: [0.32, 0, 0.67, 0],
              },
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute z-50 left-0 right-0 sm:-right-6 bottom-full mb-3 rounded-2xl bg-[#141820]/95 backdrop-blur-2xl border border-[#27CBCB]/40 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(39,203,203,0.2)] overflow-hidden font-mono"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-linear-to-br from-[#27CBCB]/25 to-[#26D868]/15 rounded-full blur-2xl pointer-events-none" />

            {/* VS Code Window Title Bar & Tabs */}
            <div className="bg-[#0e1217] border-b border-gray-800/90 flex items-center justify-between px-3 pt-2">
              {/* Traffic Light Window Buttons */}
              <div className="flex items-center gap-1.5 pb-2">
                <button
                  onClick={() => setShowStats(false)}
                  className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center group"
                  aria-label="Close"
                >
                  <span className="text-[7px] text-red-950 opacity-0 group-hover:opacity-100 leading-none">
                    ×
                  </span>
                </button>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* VS Code Tabs */}
              <div className="flex items-center gap-1 text-[11px]">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg bg-[#141820] border-t-2 border-[#27CBCB] border-x border-gray-800/80 text-gray-200 shadow-sm">
                  <SiTypescript className="text-blue-400 text-xs" />
                  <span className="font-medium text-[11px]">
                    semester-stats.ts
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 text-gray-500 hover:text-gray-300 transition-colors">
                  <FileCode size={11} className="text-amber-400" />
                  <span className="text-[10px]">analytics.json</span>
                </div>
              </div>

              <div className="flex items-center gap-1 pb-2">
                <span className="text-[10px] text-gray-500 hidden sm:inline">
                  VS Code
                </span>
              </div>
            </div>

            {/* VS Code Breadcrumb Bar */}
            <div className="bg-[#11151c] px-3 py-1 border-b border-gray-800/60 text-[10px] text-gray-400 flex items-center gap-1 select-none">
              <span>portfolio</span>
              <span className="text-gray-600">&gt;</span>
              <span>academics</span>
              <span className="text-gray-600">&gt;</span>
              <span className="text-[#27CBCB] font-semibold">
                semester-stats.ts
              </span>
            </div>

            {/* VS Code Editor Body */}
            <div className="p-3.5 sm:p-4 space-y-3 text-xs bg-[#141820]">
              {/* Code Line Comments */}
              <div className="text-[11px] text-gray-400 leading-relaxed pl-1 flex items-start gap-2 border-l-2 border-gray-800">
                <span className="text-gray-600 select-none text-[10px]">
                  01
                </span>
                <div>
                  <span className="text-gray-500">
                    // @academic-performance
                  </span>
                  <p className="text-gray-300 text-[11px]">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-300">academicRecord</span> =
                    &#123; <span className="text-[#27CBCB]">status</span>:{" "}
                    <span className="text-emerald-400">
                      &quot;Distinction&quot;
                    </span>{" "}
                    &#125;;
                  </p>
                </div>
              </div>

              {/* SGPA Code Cards */}
              <div className="grid grid-cols-2 gap-2">
                {/* Sem 1 */}
                <div className="p-2.5 rounded-xl bg-[#0e1217] border border-gray-800/80 relative overflow-hidden">
                  <div className="flex items-center justify-between text-[10px] text-gray-400">
                    <span className="text-purple-400">sem1_sgpa</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </div>
                  <div className="mt-1">
                    <p className="text-lg font-bold text-white tracking-wide font-mono">
                      6.79
                    </p>
                    <p className="text-[9px] text-gray-500 font-mono">
                      First Semester
                    </p>
                  </div>
                </div>

                {/* Sem 2 */}
                <div className="p-2.5 rounded-xl bg-[#0e1217] border border-[#26D868]/30 relative overflow-hidden shadow-[0_0_12px_rgba(38,216,104,0.1)]">
                  <div className="flex items-center justify-between text-[10px] text-[#26D868]">
                    <span className="text-purple-400">sem2_sgpa</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#26D868] animate-ping" />
                  </div>
                  <div className="mt-1">
                    <div className="flex items-baseline gap-1">
                      <p className="text-lg font-bold text-white tracking-wide font-mono">
                        8.58
                      </p>
                      <span className="text-[9px] font-semibold text-[#26D868] flex items-center">
                        <TrendingUp size={9} /> +0.76
                      </span>
                    </div>
                    <p className="text-[9px] text-gray-500 font-mono">
                      Second Semester
                    </p>
                  </div>
                </div>
              </div>

              {/* Line Graph Visualization (Editor Inspection Pane) */}
              <div className="p-2.5 rounded-xl bg-[#0e1217] border border-gray-800/80 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] px-1 text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Terminal size={11} className="text-[#27CBCB]" />
                    <span>GPA Growth Curve</span>
                  </span>
                  <span className="text-[#26D868] bg-[#26D868]/10 px-1.5 py-0.5 rounded border border-[#26D868]/20 text-[9px]">
                    +6.25% Improvement
                  </span>
                </div>

                <div className="relative h-28 w-full pt-1">
                  <svg
                    viewBox="0 0 300 110"
                    className="w-full h-full overflow-visible"
                  >
                    <defs>
                      <linearGradient
                        id="vscodeLineGrad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#27CBCB" />
                        <stop offset="100%" stopColor="#26D868" />
                      </linearGradient>

                      <linearGradient
                        id="vscodeAreaGrad"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#27CBCB"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#26D868"
                          stopOpacity="0.0"
                        />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Reference Grid Lines */}
                    <line
                      x1="30"
                      y1="25"
                      x2="270"
                      y2="25"
                      stroke="rgba(255,255,255,0.06)"
                      strokeDasharray="4 4"
                    />
                    <text
                      x="10"
                      y="28"
                      fill="#80978F"
                      fontSize="9"
                      fontFamily="monospace"
                    >
                      8.0
                    </text>

                    <line
                      x1="30"
                      y1="50"
                      x2="270"
                      y2="50"
                      stroke="rgba(255,255,255,0.06)"
                      strokeDasharray="4 4"
                    />
                    <text
                      x="10"
                      y="53"
                      fill="#80978F"
                      fontSize="9"
                      fontFamily="monospace"
                    >
                      7.5
                    </text>

                    <line
                      x1="30"
                      y1="75"
                      x2="270"
                      y2="75"
                      stroke="rgba(255,255,255,0.06)"
                      strokeDasharray="4 4"
                    />
                    <text
                      x="10"
                      y="78"
                      fill="#80978F"
                      fontSize="9"
                      fontFamily="monospace"
                    >
                      7.0
                    </text>

                    {/* Area under line graph */}
                    <motion.path
                      initial={{
                        opacity: 0,
                        d: "M 60 75 C 130 75, 170 75, 240 75 L 240 95 L 60 95 Z",
                      }}
                      animate={{
                        opacity: 1,
                        d: "M 60 75 C 130 75, 170 46, 240 46 L 240 95 L 60 95 Z",
                      }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      fill="url(#vscodeAreaGrad)"
                    />

                    {/* Smooth Curved Line */}
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      d="M 60 75 C 130 75, 170 46, 240 46"
                      fill="none"
                      stroke="url(#vscodeLineGrad)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* Point 1: Sem 1 (8.00) */}
                    <g>
                      <circle
                        cx="60"
                        cy="75"
                        r="4.5"
                        fill="#0e1217"
                        stroke="#27CBCB"
                        strokeWidth="2.5"
                      />
                      <rect
                        x="40"
                        y="86"
                        width="40"
                        height="15"
                        rx="3"
                        fill="#0e1217"
                        stroke="rgba(39,203,203,0.3)"
                      />
                      <text
                        x="60"
                        y="97"
                        textAnchor="middle"
                        fill="#27CBCB"
                        fontSize="8.5"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        6.79
                      </text>
                    </g>

                    {/* Point 2: Sem 2 (8.58) */}
                    <g>
                      <circle
                        cx="240"
                        cy="46"
                        r="8"
                        fill="#26D868"
                        opacity="0.25"
                        className="animate-ping"
                      />
                      <circle
                        cx="240"
                        cy="46"
                        r="5"
                        fill="#0e1217"
                        stroke="#26D868"
                        strokeWidth="2.5"
                      />
                      <rect
                        x="220"
                        y="18"
                        width="40"
                        height="15"
                        rx="3"
                        fill="#0e1217"
                        stroke="rgba(38,216,104,0.4)"
                      />
                      <text
                        x="240"
                        y="29"
                        textAnchor="middle"
                        fill="#26D868"
                        fontSize="8.5"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        7.6
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* VS Code Status Bar */}
            <div className="bg-[#007acc]/20 border-t border-gray-800/80 px-3 py-1 text-[10px] text-gray-400 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-[#27CBCB]">
                  <GitBranch size={10} /> main*
                </span>
                <span className="text-gray-600">|</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 size={10} /> 0 errors
                </span>
              </div>

              <div className="flex items-center gap-2 font-semibold">
                <span className="text-gray-300">CGPA: 7.4</span>
                <span className="text-[#26D868]">✓</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AcademicDetails;
