"use client";

import { motion } from "framer-motion";
import { BookOpen, Laptop } from "lucide-react";

// ১. TypeScript এর জন্য TimelineItem ইন্টারফেস তৈরি করা হলো
interface TimelineItem {
  year: string;
  title: string;
  org: string;
  description: string;
}

// Academic Education ডেটা
const EDUCATION_DATA: TimelineItem[] = [
  {
    year: "2023 - 2025",
    title: "Web Design & Development Trainee",
    org: "Arena Animation Chowringhee",
    description: "Specializing in frontend frameworks, Next.js, full-stack workflow components, and responsive grid layouts.",
  },
  {
    year: "2020 - 2023",
    title: "Bachelor of Arts in History Honours",
    org: "Vivekananda College (University of Calcutta)",
    description: "Specialized in historical research and cultural analysis. Developed critical thinking, archival skills, and strong analytical methodologies.",
  },
  {
    year: "2016 - 2020",
    title: "Secondary & Higher Secondary Education",
    org: "Belsingha Sikshayatan School",
    description: "Completed secondary (WBBSE) and higher secondary (WBCHSE) education with a focused approach on core academic disciplines.",
  },
];

// Industry Work Experience & Certifications Data (Right Column)
const EXPERIENCE_DATA: TimelineItem[] = [
  {
    year: "March 2026 - June 2026",
    title: "Web Developer Intern",
    org: "Webriy (Noida, Remote)",
    description: "Single-handedly engineered, optimized, and delivered 250+ clean, responsive frontend components using V4 Atomic structure. Managed advanced Elementor-based component libraries for CopyElement and structured email marketing layouts for CopyMail.",
  },
  {
    year: "2025",
    title: "Oracle AI Certified Associate",
    org: "Oracle Cloud Infrastructure",
    description: "Achieved a 95% score in the OCI AI Foundations Associate certification, establishing expertise in cloud infrastructure and core AI methodologies.",
  },
]

export default function Timeline() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="journey">
      {/* Background Ambience*/}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* ক্যানোনিকাল ক্লাস w-150 এবং h-150 ব্যবহার করা হয়েছে */}
        <div className="absolute top-[-20%] right-[20%] w-150 h-150 bg-purple-600/10 rounded-full blur-[120px]" />
        {/* ক্যানোনিকাল ক্লাস w-125 এবং h-125 ব্যবহার করা হয়েছে */}
        <div className="absolute bottom-[10%] left-[-10%] w-125 h-125 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
             Education <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">& Qualifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Education and professional milestones that shaped my career in technology.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
  {/* Left Column */}
  <div>
    <h3 className="text-2xl font-bold text-blue-400 mb-10 flex items-center gap-3">
      <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
        <BookOpen size={28} /> 
      </div>
      Education & Qualifications
    </h3>
    <div className="space-y-10 border-l-2 border-blue-500/20 pl-8 ml-2">
      {EDUCATION_DATA.map((item, index) => (
        <TimelineCard key={index} item={item} color="blue" index={index} />
      ))}
    </div>
  </div>

  {/* Right Column */}
  <div>
    <h3 className="text-2xl font-bold text-purple-400 mb-10 flex items-center gap-3">
      <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
        <Laptop size={28} />
      </div> 
      Work Experience & Credentials
    </h3>
    <div className="space-y-10 border-l-2 border-purple-500/20 pl-8 ml-2">
      {EXPERIENCE_DATA.map((item, index) => (
        <TimelineCard key={index} item={item} color="purple" index={index} />
      ))}
    </div>
  </div>
</div>
      </div>
    </section>
  );
}

// প্রপ্স টাইপ থেকে any সরিয়ে TimelineItem ইন্টারফেস ডিফাইন করা হয়েছে
function TimelineCard({ item, color, index }: { item: TimelineItem; color: string; index: number }) {
  const isBlue = color === "blue";

  return (
    <motion.div
      initial={{ opacity: 0, x: isBlue ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Bullet Point - এখানে -left-10.25 ব্যবহার করা হয়েছে */}
      <div className={`absolute -left-10.25 top-2 w-5 h-5 rounded-full border-4 border-[#0a0a0a] z-10 transition-transform group-hover:scale-125 ${
        isBlue ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]" : "bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
      }`} />

      <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
        <span className={`text-xs font-mono px-2 py-1 rounded-full bg-opacity-10 mb-3 inline-block border ${
          isBlue ? "text-white border-blue-500/30 bg-blue-500" : "text-white border-purple-500/30 bg-purple-500"
        }`}>
          {item.year}
        </span>
        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
          {item.title}
        </h4>
        <p className={`text-sm font-medium mb-3 uppercase tracking-widest ${isBlue ? "text-blue-300/70" : "text-purple-300/70"}`}>
          {item.org}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}