"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaEnvelope, FaDownload } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="relative z-20 bg-[#020202] py-32 px-6 overflow-hidden" id="contact">
      {/* Background Cinematic Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            LET'S WORK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              TOGETHER.
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed italic">
            "I'm currently available for freelance projects and open to full-time opportunities. 
            Let's build something extraordinary."
          </p>
        </motion.div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Email Card - Text Wrap Fixed */}
            <motion.a
              href="mailto:arnabmondal0610@gmail.com"
              whileHover={{ y: -5 }}
              className="group p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center gap-4 transition-all hover:bg-white/10 max-w-full overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <FaEnvelope size={28} />
              </div>
              <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">Send an Email</span>
              <span className="text-white text-base md:text-xl font-bold break-all max-w-full text-center px-2">
                arnabmondal0610@gmail.com
              </span>
            </motion.a>

          {/* Download CV Card */}
          <motion.a
            href="/Resume_Arnab_Mondal.pdf"
            download
            whileHover={{ y: -5 }}
            className="group p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center gap-4 transition-all hover:bg-white/10"
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-600/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <FaDownload size={28} />
            </div>
            <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">Get My Resume</span>
            <span className="text-white text-lg md:text-xl font-bold">Download CV</span>
          </motion.a>
        </div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center gap-6"
        >
          <SocialLink href="https://github.com/Arnab0610?tab=repositories" icon={<FaGithub />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/arnabm0610/" icon={<FaLinkedinIn />} label="LinkedIn" />
          {/* <SocialLink href="https://twitter.com/" icon={<FaXTwitter />} label="Twitter" /> */}
        </motion.div>

        {/* Minimal Footer */}
        <footer className="mt-32 pt-8 border-t border-white/5">
          <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Arnab Mondal &bull; Handcrafted with React & Framer Motion
          </p>
        </footer>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-lg"
      aria-label={label}
    >
      <div className="text-2xl">{icon}</div>
    </motion.a>
  );
}