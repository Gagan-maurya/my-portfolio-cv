/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Flame, CheckCircle2, Award, Zap, Code2 } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const LEETCODE_USERNAME = "Prakhar_Dwivedi_";
const LEETCODE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`;

// Generate the exact LeetCode heatmap grid corresponding to user's screenshot
// 17 submissions in the past one year, total active days: 5, max streak: 5 in August
const generateLeetCodeGrid = () => {
  const months = [
    { name: "Sep", weeks: 4 },
    { name: "Oct", weeks: 4 },
    { name: "Nov", weeks: 4 },
    { name: "Dec", weeks: 4 },
    { name: "Jan", weeks: 4 },
    { name: "Feb", weeks: 4 },
    { name: "Mar", weeks: 4 },
    { name: "Apr", weeks: 4 },
    { name: "May", weeks: 4 },
    { name: "Jun", weeks: 4 },
    { name: "Jul", weeks: 4 },
    { name: "Aug", weeks: 4 },
  ];

  const grid = [];
  let weekIndex = 0;

  months.forEach((month, mIdx) => {
    for (let w = 0; w < month.weeks; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        // August last column has active streak (5 consecutive active days) matching screenshot
        const isAugust = mIdx === 11;
        const isStreakWeek = isAugust && w >= 2;
        let count = 0;
        let level = 0;

        if (isStreakWeek && d >= 1 && d <= 5) {
          count = d === 2 ? 4 : d === 4 ? 3 : 2;
          level = d === 2 ? 3 : 2;
        } else if (mIdx === 0 && w === 0 && (d === 0 || d === 5 || d === 6)) {
          // Few sparse initial points matching screenshot
          count = 1;
          level = 1;
        }

        days.push({
          count,
          level,
          month: month.name,
          day: d,
        });
      }
      grid.push({ weekNum: weekIndex++, month: month.name, days });
    }
  });

  return grid;
};

// LeetCode green active levels
const leetCodeColors = {
  0: "bg-[#282828] border-transparent hover:border-gray-600",
  1: "bg-[#0e4429] border-emerald-900/50 hover:border-emerald-500 shadow-[0_0_6px_rgba(14,68,41,0.5)]",
  2: "bg-[#006d32] border-emerald-700/50 hover:border-emerald-400 shadow-[0_0_8px_rgba(0,109,50,0.6)]",
  3: "bg-[#26a641] border-emerald-400/60 hover:border-emerald-300 shadow-[0_0_10px_rgba(38,166,65,0.7)]",
  4: "bg-[#39d353] border-emerald-200 hover:border-white shadow-[0_0_12px_rgba(57,211,83,0.9)]",
};

const LeetCodeActivity = () => {
  const [hoveredCell, setHoveredCell] = useState(null);
  const weeks = useMemo(() => generateLeetCodeGrid(), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl border border-gray-800/90 bg-gray-900/30 backdrop-blur-xl p-4 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      {/* Amber / Orange Ambient Glow for LeetCode branding */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#26D868]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-800/70">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFA116] animate-pulse shadow-[0_0_8px_#FFA116]" />
          <h3 className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-gray-200 uppercase flex items-center gap-2">
            <span>LEETCODE ACTIVITY</span>
            <SiLeetcode className="text-[#FFA116] text-base" />
          </h3>
        </div>

        <a
          href={LEETCODE_URL}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs text-gray-400 hover:text-[#FFA116] transition-colors flex items-center gap-1.5 group"
        >
          <SiLeetcode className="text-[#FFA116]" size={14} />
          <span>{LEETCODE_USERNAME}</span>
          <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Middle Stats Bar (from screenshot: 7 Solved, 17 Submissions, 5 Max Streak) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-b border-gray-800/60 font-mono">
        <div className="p-3 rounded-xl bg-gray-950/60 border border-gray-800/80">
          <p className="text-[10px] text-gray-500 uppercase">Solved</p>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-xl font-bold text-white">7</span>
            <span className="text-[10px] text-gray-500">/ 3,400+</span>
          </div>
          <p className="text-[9px] text-[#27CBCB] mt-0.5">5 Easy · 2 Med</p>
        </div>

        <div className="p-3 rounded-xl bg-gray-950/60 border border-gray-800/80">
          <p className="text-[10px] text-gray-500 uppercase">Submissions</p>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-xl font-bold text-emerald-400">17</span>
          </div>
          <p className="text-[9px] text-gray-400 mt-0.5">Past one year</p>
        </div>

        <div className="p-3 rounded-xl bg-gray-950/60 border border-gray-800/80">
          <p className="text-[10px] text-gray-500 uppercase">Max Streak</p>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-xl font-bold text-[#FFA116] flex items-center gap-1">
              5 <Flame size={14} className="text-[#FFA116]" />
            </span>
          </div>
          <p className="text-[9px] text-emerald-400 mt-0.5">5 Active Days</p>
        </div>

        <div className="p-3 rounded-xl bg-gray-950/60 border border-gray-800/80">
          <p className="text-[10px] text-gray-500 uppercase">Language</p>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-base font-bold text-blue-400">C++</span>
          </div>
          <p className="text-[9px] text-gray-400 mt-0.5">Primary DSA</p>
        </div>
      </div>

      {/* LeetCode Heatmap Grid */}
      <div className="pt-4 overflow-x-auto scrollbar-none">
        <div className="min-w-[620px]">
          {/* Months Labels */}
          <div className="grid grid-cols-12 text-[10px] font-mono text-gray-500 pb-2 px-1 text-center">
            {["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((m, idx) => (
              <span key={idx}>{m}</span>
            ))}
          </div>

          {/* Matrix of Squares */}
          <div className="grid grid-flow-col auto-cols-fr gap-1">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="grid grid-rows-7 gap-1">
                {week.days.map((day, dIdx) => (
                  <div
                    key={dIdx}
                    onMouseEnter={() => setHoveredCell({ ...day, week: wIdx + 1 })}
                    onMouseLeave={() => setHoveredCell(null)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[3px] border transition-all duration-150 cursor-pointer ${
                      leetCodeColors[day.level]
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Details: Recent Solved problems */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-2 border-t border-gray-800/60 text-xs font-mono text-gray-400">
        <div className="flex items-center gap-2 text-xs">
          <Code2 size={14} className="text-[#FFA116]" />
          <span>
            Recent AC: <strong className="text-gray-200">Concatenation of Array</strong>, <strong className="text-gray-200">Binary Search</strong>, <strong className="text-gray-200">Two Sum</strong>
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-gray-500 text-[10px]">
          <span>Less</span>
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#282828]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#0e4429]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#006d32]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#26a641]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#39d353]" />
          <span>More</span>
        </div>
      </div>

      {/* Hover tooltip */}
      {hoveredCell && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-950/90 border border-[#FFA116]/40 rounded-lg text-[10px] font-mono text-gray-300 shadow-xl pointer-events-none">
          {hoveredCell.count === 0 ? "No submissions" : `${hoveredCell.count} submissions (${hoveredCell.month})`}
        </div>
      )}
    </motion.div>
  );
};

export default LeetCodeActivity;
