"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaPhp, FaWordpress, FaFigma, FaAws, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFirebase, SiNextdotjs } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Mastery",
    description: "Creating responsive and interactive user interfaces.",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-cyan-500/50",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
      { name: "React", icon: <FaReact />, color: "text-blue-400" },
    ],
  },
  {
    title: "Backend & Database",
    description: "Building robust server-side logic and managing data.",
    color: "from-purple-500/20 to-indigo-500/20",
    border: "group-hover:border-purple-500/50",
    skills: [
      { name: "PHP", icon: <FaPhp />, color: "text-indigo-400" },
      { name: "MySQLi", icon: <SiMysql />, color: "text-blue-600" },
      { name: "Firebase", icon: <SiFirebase />, color: "text-orange-400" },
    ],
  },
  {
    title: "Design & CMS",
    description: "Visualizing ideas and managing content effortlessly.",
    color: "from-pink-500/20 to-rose-500/20",
    border: "group-hover:border-pink-500/50",
    skills: [
      { name: "Figma", icon: <FaFigma />, color: "text-pink-500" },
      { name: "WordPress", icon: <FaWordpress />, color: "text-blue-400" },
    ],
  },
  {
    title: "Cloud & DevTools",
    description: "Deploying applications with modern cloud solutions.",
    color: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-amber-500/50",
    skills: [
      { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
      { name: "Git", icon: <span className="text-xs font-bold">GIT</span>, color: "text-red-500" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-12" id="skills">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Stack</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-xl mx-auto">
            Transforming complex problems into elegant digital solutions with modern tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:bg-white/[0.06] ${category.border}`}
            >
              {/* Card Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm mb-8">{category.description}</p>

                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-14 h-14 flex items-center justify-center bg-black/40 rounded-2xl border border-white/10 group-hover:border-white/20 text-3xl transition-all shadow-lg">
                        <span className={skill.color}>{skill.icon}</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}