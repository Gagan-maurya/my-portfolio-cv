/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Eye,
  X,
  Sparkles,
} from "lucide-react";
import { SiMongodb, SiInfosys } from "react-icons/si";
import { FaPython } from "react-icons/fa";

const IbmIcon = ({ className = "text-xl text-blue-400" }) => (
  <svg
    viewBox="0 0 1075 401.15"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <g>
      <rect y="373.17" width="194.43" height="27.932" />
      <rect y="319.83" width="194.43" height="27.932" />
      <rect x="55.468" y="266.54" width="83.399" height="27.932" />
      <rect x="55.468" y="213.25" width="83.399" height="27.932" />
      <rect x="55.468" y="159.96" width="83.399" height="27.932" />
      <rect x="55.468" y="106.58" width="83.399" height="27.932" />
      <rect y="53.288" width="194.43" height="27.932" />
      <rect width="194.43" height="27.932" />

      <path d="m222.17 400.85 207.11 0.297c27.734 0 52.793-10.697 71.513-27.932h-278.62z" />
      <path d="m222.17 347.76h299.03c5.051-8.617 8.815-18.027 11.094-27.932h-310.12z" />
      <rect x="277.73" y="266.54" width="83.3" height="27.932" />
      <path d="m444.43 266.54v27.932h90.927c0-9.608-1.288-19.017-3.764-27.932z" />
      <path d="m497.92 213.25h-220.19v27.932h243.46c-6.34-10.698-14.165-20.107-23.277-27.932z" />
      <path d="m277.73 159.96v27.932h220.19c9.311-7.825 17.135-17.235 23.277-27.932z" />
      <rect x="277.73" y="106.58" width="83.3" height="27.932" />
      <path d="m444.43 134.51h87.163c2.476-8.914 3.764-18.324 3.764-27.932h-90.927z" />
      <path d="m521.2 53.288h-299.03v27.932h310.12c-2.575-9.905-6.339-19.314-11.093-27.932z" />
      <path d="m429.28 0h-207.11v27.932h278.53c-18.621-17.235-43.878-27.932-71.414-27.932z" />

      <polygon points="555.57 81.22 742.67 81.22 733.06 53.288 555.57 53.288" />
      <polygon points="555.57 27.932 724.25 27.932 714.64 0 555.57 0" />
      <polygon points="861.03 401.17 861.03 373.24 1000 373.24 1000 401.17" />
      <polygon points="861.03 347.76 861.03 319.83 1000 319.83 1000 347.76" />
      <polygon points="777.73 182.54 769.91 159.96 694.43 159.96 611.03 159.96 611.03 187.89 694.43 187.89 694.43 162.24 703.25 187.89 852.22 187.89 861.03 162.24 861.03 187.89 944.43 187.89 944.43 159.96 861.03 159.96 785.56 159.96" />
      <polygon points="944.43 106.58 803.98 106.58 794.37 134.51 944.43 134.51" />
      <polygon points="1000 27.932 1000 0 840.93 0 831.32 27.932" />
      <polygon points="768.13 373.22 777.73 400.85 787.34 373.22" />
      <polygon points="749.5 319.83 759.31 347.76 796.16 347.76 806.06 319.83" />
      <polygon points="730.78 266.54 740.59 294.47 814.88 294.47 824.68 266.54" />
      <polygon points="721.97 241.18 833.6 241.18 843.11 213.25 712.36 213.25" />
      <polygon points="611.03 134.51 761.09 134.51 751.49 106.58 611.03 106.58" />
      <polygon points="1000 53.288 822.4 53.288 812.9 81.22 1000 81.22" />
      <rect x="555.57" y="373.22" width="138.97" height="27.932" />
      <rect x="555.57" y="319.83" width="138.97" height="27.932" />
      <rect x="611.03" y="266.54" width="83.399" height="27.932" />
      <rect x="611.03" y="213.25" width="83.399" height="27.932" />
      <rect x="861.03" y="213.25" width="83.399" height="27.932" />
      <rect x="861.03" y="266.54" width="83.399" height="27.932" />
    </g>
  </svg>
);

const certificatesData = [
  {
    id: 1,
    title: "MongoDB Basics for Students",
    issuer: "MongoDB University",
    issueDate: "August 2026",
    credentialId: "MDBnzjq5n5y1x",
    credentialUrl:
      "https://www.credly.com/badges/8e542c34-1acd-4343-8a1e-5c8ccf8b9847/public_url",
    previewUrl:
      "https://drive.google.com/file/d/14MycvXObd_NJf1gE4vD1Gery-vSLODyB/view?usp=sharing",
    buttonText: "Verify Credential",
    icon: <SiMongodb className="text-xl text-[#00ED64]" />,
    accent: "from-[#26D868]/40 to-emerald-500/10",
    badgeColor: "border-[#26D868]/30 text-[#26D868] bg-[#26D868]/10",
    skills: [
      "MongoDB",
      "NoSQL",
      "Database Fundamentals",
      "Document Model",
      "MongoDB Atlas",
    ],
    image: null,
  },
  {
    id: 2,
    title: "Generative AI Essentials: Using LLMs to Work with Data",
    issuer: "IBM SkillsBuild",
    issueDate: "August 2026",
    credentialId: null,
    credentialUrl:
      "https://www.credly.com/badges/94f4d955-bd47-4c04-b57b-673f600b7c50/public_url",
    previewUrl:
      "https://drive.google.com/file/d/1aomXk_8cCzBfdErfVuWASRaGTZvdoxYj/view?usp=sharing",
    buttonText: "Verify Credential",
    icon: <IbmIcon className="w-5 h-5 text-blue-400" />,
    accent: "from-blue-500/40 to-indigo-500/10",
    badgeColor: "border-blue-400/30 text-blue-400 bg-blue-400/10",
    skills: [
      "Generative AI",
      "Large Language Models",
      "LLMs",
      "Data Summarization",
      "Data Classification",
      "IBM Granite",
    ],
    image: null,
  },
  {
    id: 3,
    title: "Programming Using C++",
    issuer: "Infosys springboard",
    issueDate: "February 2026",
    credentialId: "6004464920PD",
    previewUrl:
      "https://drive.google.com/file/d/1wuBoQPNDp22HuBQdYfjwluCXqqT8VdQ6/view?usp=sharing",
    buttonText: "View Certificate",
    icon: <FaPython className="text-xl text-amber-400" />,
    accent: "from-amber-400/40 to-yellow-500/10",
    badgeColor: "border-amber-400/30 text-amber-400 bg-amber-400/10",
    skills: [
      "Python",
      "Programming Fundamentals",
      "Control Flow",
      "Data Structures",
      "Algorithms",
    ],
    image: null,
  },
  {
    id: 4,
    title: "Introduction to Cyber Security",
    issuer: "Infosys Springboard",
    issueDate: "March 2026",
    credentialId: null,
    credentialUrl: "https://verify.onwingspan.com",
    previewUrl:
      "https://drive.google.com/file/d/1zZtkBMe6-aKrIdYUoR2C7B4so4olclbH/view?usp=sharing",
    buttonText: "Verify Credential",
    icon: <SiInfosys className="text-xl text-[#007cc3]" />,
    accent: "from-[#007cc3]/40 to-blue-500/10",
    badgeColor: "border-[#007cc3]/30 text-[#007cc3] bg-[#007cc3]/10",
    skills: [
      "Cyber Security",
      "Information Security",
      "Network Security",
      "Threat Identification",
      "Security Fundamentals",
    ],
    image: null,
  },
];

const CertificateCard = ({ cert, index = 0, onPreview }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-xl border border-gray-700/40 bg-gray-900/20 backdrop-blur overflow-hidden flex flex-col justify-between hover:border-[#27CBCB]/50 transition-colors"
    >
      {/* Top ambient glow on hover */}
      <div
        className={`absolute -top-24 -right-24 w-48 h-48 bg-linear-to-br ${cert.accent} rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`}
      />

      <div className="p-5 sm:p-6 space-y-4 relative z-10">
        {/* Header with Icon and Verification Badge */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-gray-800/80 border border-gray-700/50 flex items-center justify-center">
              {cert.icon || <Award className="text-xl text-[#27CBCB]" />}
            </div>
            <div>
              <span
                className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border ${cert.badgeColor}`}
              >
                <ShieldCheck size={12} />
                Verified
              </span>
              <p className="text-xs text-gray-400 mt-1">{cert.issuer}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
            <Calendar size={13} className="text-[#27CBCB]" />
            <span>{cert.issueDate}</span>
          </div>
        </div>

        {/* Certificate Title */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#27CBCB] transition-colors leading-snug">
            {cert.title}
          </h3>
          {cert.credentialId && (
            <p className="text-xs font-mono text-gray-500 mt-1">
              ID: <span className="text-gray-400">{cert.credentialId}</span>
            </p>
          )}
        </div>

        {/* Summary (if available) */}
        {cert.summary && (
          <p className="text-gray-300 text-sm leading-relaxed">
            {cert.summary}
          </p>
        )}

        {/* Skills Covered */}
        <div className="space-y-1.5 pt-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Skills Mastered
          </p>
          <div className="flex flex-wrap gap-1.5">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 text-xs rounded-md bg-gray-950/80 border border-gray-700/40 text-gray-300 font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Actions */}
      <div className="px-5 sm:px-6 py-3.5 border-t border-gray-800/60 bg-gray-950/30 flex items-center justify-between text-xs relative z-10">
        <a
          href={cert.previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-gray-400 hover:text-[#27CBCB] transition-colors cursor-pointer"
        >
          <Eye size={14} />
          <span>Quick View</span>
        </a>

        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#27CBCB] hover:text-[#26D868] transition-colors font-medium group/btn cursor-pointer"
        >
          <span>{cert.buttonText || "Verify Credential"}</span>
          <ExternalLink
            size={13}
            className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-6 md:px-8 lg:ml-65 lg:p-5 space-y-6 sm:space-y-8 max-w-6xl lg:mr-36 mx-auto"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#27CBCB] text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
              <span>Certifications</span>
              <Sparkles className="w-6 h-6 text-[#26D868] hidden sm:inline" />
            </h2>
            <p className="mt-2 text-[#80978F] text-base sm:text-lg max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              Industry-recognized credentials validating continuous learning,
              technical expertise, and domain competencies.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-800 bg-gray-900/40 text-xs font-mono text-gray-400">
            <ShieldCheck size={14} className="text-[#26D868]" />
            <span>4 Certified Credentials</span>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {certificatesData.map((cert, idx) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={idx}
              onPreview={(item) => setSelectedCert(item)}
            />
          ))}
        </div>
      </motion.section>

      {/* Interactive Modal View */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#101318] rounded-2xl w-full max-w-2xl border border-gray-800 overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start border-b border-gray-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gray-800/80 border border-gray-700/50">
                    {selectedCert.icon || (
                      <Award className="text-2xl text-[#27CBCB]" />
                    )}
                  </div>
                  <div>
                    <span
                      className={`inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full border ${selectedCert.badgeColor}`}
                    >
                      <ShieldCheck size={12} />
                      Verified Certification
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {selectedCert.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-4 text-sm text-gray-300">
                <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-gray-900/60 border border-gray-800 font-mono text-xs">
                  <div>
                    <p className="text-gray-500">ISSUING ORGANIZATION</p>
                    <p className="text-gray-200 font-semibold mt-0.5">
                      {selectedCert.issuer}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">ISSUE DATE</p>
                    <p className="text-gray-200 font-semibold mt-0.5">
                      {selectedCert.issueDate}
                    </p>
                  </div>
                  {selectedCert.credentialId && (
                    <div className="col-span-2 pt-2 border-t border-gray-800">
                      <p className="text-gray-500">CREDENTIAL ID</p>
                      <p className="text-[#27CBCB] font-semibold mt-0.5">
                        {selectedCert.credentialId}
                      </p>
                    </div>
                  )}
                </div>

                {selectedCert.summary && (
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1">
                      Description & Competencies
                    </h4>
                    <p className="leading-relaxed text-gray-300">
                      {selectedCert.summary}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Verified Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs rounded-md bg-gray-800/80 border border-gray-700/60 text-[#27CBCB] font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-gray-800">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-full sm:w-auto px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 rounded-lg hover:border-gray-600 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold text-gray-900 bg-linear-to-r from-[#27CBCB] to-[#26D868] rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <span>
                    {selectedCert.buttonText === "View Certificate"
                      ? "View Certificate"
                      : "Verify Credential"}
                  </span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificates;
