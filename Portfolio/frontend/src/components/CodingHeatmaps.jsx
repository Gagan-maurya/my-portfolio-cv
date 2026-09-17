/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import GithubContributions from "./GithubContributions";
import LeetCodeActivity from "./LeetCodeActivity";

const CodingHeatmaps = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="space-y-4 w-full">
      {/* Tab switchers */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-1">
        <div className="flex items-center gap-2 bg-gray-900/60 p-1 rounded-xl border border-gray-800 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-[#27CBCB]/20 text-[#27CBCB] border border-[#27CBCB]/30 font-semibold"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            All Activity
          </button>
          <button
            onClick={() => setActiveTab("github")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === "github"
                ? "bg-[#27CBCB]/20 text-[#27CBCB] border border-[#27CBCB]/30 font-semibold"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            <FaGithub size={13} />
            GitHub
          </button>
          <button
            onClick={() => setActiveTab("leetcode")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === "leetcode"
                ? "bg-[#FFA116]/20 text-[#FFA116] border border-[#FFA116]/30 font-semibold"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            <SiLeetcode size={13} className="text-[#FFA116]" />
            LeetCode
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-gray-500">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#27CBCB]" /> GitHub Active
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#FFA116]" /> LeetCode 5-Day Streak
          </span>
        </div>
      </div>

      {/* Rendered Views */}
      <div className="space-y-4">
        {(activeTab === "all" || activeTab === "github") && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GithubContributions />
          </motion.div>
        )}

        {(activeTab === "all" || activeTab === "leetcode") && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LeetCodeActivity />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CodingHeatmaps;
