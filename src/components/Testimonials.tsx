"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function About() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden" id="about">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[10%] w-150 h-150 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-125 h-125 bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image with Nomination Badge Effect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0 group"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-blue-500 to-purple-500 rounded-3xl rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20" />
            <div className="relative h-full w-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl">
              <Image 
                src="/photo.jpeg" 
                alt="Arnab Mondal" 
                fill // Ei fill proparți-ti obossoi thakte hobe
                className="object-cover grayscale-0 hover:grayscale transition-all duration-700"
              />
            </div>

            {/* Nomination Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="absolute -bottom-6 -right-6 bg-white text-black p-4 rounded-2xl shadow-xl z-20 max-w-40 border-2 border-purple-500"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-purple-600 mb-1">Recognition</p>
              <p className="text-xs font-bold leading-tight">Creative Minds 2024 Nominee in Website Design</p>
            </motion.div>
          </motion.div>

          {/* Right Column: About Content */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Me</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Hi! I'm <span className="text-white font-medium">Arnab Mondal</span>, a passionate Frontend Developer based in <span className="text-white">West Bengal</span> with a knack for building clean, responsive, and user-centric web experiences. 
              </p>
              
              <p>
                I specialize in transforming creative ideas into functional websites using modern technologies like <span className="text-blue-400">HTML5</span>, <span className="text-blue-400">CSS3</span>, <span className="text-blue-400">JavaScript (ES6)</span>, <span className="text-purple-400">Tailwind CSS</span>, and <span className="text-purple-400">Bootstrap 5</span>. 
              </p>

              <p>
                My journey in web development is driven by a love for UI/UX design and performance optimization. I also have extensive experience working with <span className="text-white">WordPress</span> and <span className="text-white">Elementor</span> to create high-conversion landing pages.
              </p>

              <p className="italic text-gray-300 border-l-2 border-purple-500 pl-4">
                "One of my proudest moments was being recognized as a <span className="text-purple-400 font-bold">Creative Minds 2024 Nominee in Website Design</span>, which reflects my commitment to quality and creativity in every project I undertake."
              </p>

              <div className="pt-8 flex flex-wrap gap-4"> 
                
                <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all group">
                  Let's Collaborate <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </a> */}
                
                {/* Accomplishments Button */}
                
                {/* <a href="YOUR_GOOGLE_DRIVE_FOLDER_LINK" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all group">
                  Accomplishments
                  <svg className="w-5 h-5 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
            </div>
          </motion.div> */}
{/* Right Column: About Content */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
    About <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Me</span>
  </h2>
  
  <div className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed">
    <p>
      Hi! I'm <span className="text-white font-medium">Arnab Mondal</span>, a Creative Web Developer based in <span className="text-white">West Bengal</span>, specializing in building clean, responsive, and performance-driven web interfaces.
    </p>
    
    <p>
      Recently, I completed a Web Development Internship with <span className="text-white font-semibold">Webriy</span>, where I single-handedly engineered and delivered over <span className="text-purple-400 font-bold">250+ responsive frontend layout modules</span> using industry-grade frameworks and modern workflows.
    </p>

    {/* Letter of Recommendation (LOR) Short Quote */}
    <div className="italic text-gray-300 border-l-2 border-purple-500 pl-4 py-1 bg-white/[0.01]">
      "Arnab approach responsibilities with professionalism... displayed reliability, dedication, and a commitment to continuous improvement." 
      <span className="block text-right text-xs font-mono text-gray-500 mt-1">— HR & CRM Admin, Webriy</span>
    </div>

    <div className="pt-4 flex flex-wrap gap-4">
      <a href="#contact" className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-all group">
        Let's Collaborate <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
      </a>
      
      <a href="https://drive.google.com/drive/folders/1-ANRGyzp77VB8n3-2yLMIyuvW3pGkPKC?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-all group">
        View Credentials
        <svg className="w-4 h-4 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}