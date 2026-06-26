"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaWordpress, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";


const floatingTech = [
  { icon: <FaHtml5 />, color: "text-orange-500", glow: "drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]", top: "10%", left: "10%", size: "text-3xl md:text-4xl" },
  { icon: <FaCss3Alt />, color: "text-blue-500", glow: "drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]", top: "20%", left: "75%", size: "text-2xl md:text-3xl" },
  { icon: <FaJs />, color: "text-yellow-400", glow: "drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]", top: "75%", left: "8%", size: "text-4xl md:text-5xl" },
  { icon: <FaReact />, color: "text-cyan-400", glow: "drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]", top: "15%", left: "60%", size: "text-5xl md:text-6xl" },
  { icon: <SiNextdotjs />, color: "text-white", glow: "drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]", top: "85%", left: "70%", size: "text-3xl md:text-4xl" },
  { icon: <SiTailwindcss />, color: "text-sky-400", glow: "drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]", top: "50%", left: "80%", size: "text-2xl md:text-3xl" },
  { icon: <FaBootstrap />, color: "text-purple-500", glow: "drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]", top: "5%", left: "35%", size: "text-3xl md:text-4xl" },
  { icon: <FaWordpress />, color: "text-blue-400", glow: "drop-shadow-[0_0_15px_rgba(96,165,250,0.6)]", top: "80%", left: "40%", size: "text-4xl md:text-5xl" },
  { icon: <FaFigma />, color: "text-pink-500", glow: "drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]", top: "40%", left: "5%", size: "text-3xl md:text-4xl" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const moveX = useTransform(smoothX, [0, 2000], [-30, 30]);
  const moveY = useTransform(smoothY, [0, 1000], [-30, 30]);

  const bgGradient = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
  );

  useEffect(() => {
    // requestAnimationFrame use korle ESLint synchronously render warning-ta permanently chole jabe
    const animationFrame = requestAnimationFrame(() => {
      setMounted(true);
    });

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return <div className="h-screen bg-[#020202]" />;

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full bg-[#020202] overflow-hidden flex items-center justify-center font-mono max-w-full"
      id="home"
    >
      {/* 1. Background Layer */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full"
      >
        {floatingTech.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 7 + (i % 3), 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute ${tech.size} ${tech.color} ${tech.glow} select-none pointer-events-none`}
            style={{ top: tech.top, left: tech.left }}
          >
            {tech.icon}
          </motion.div>
        ))}

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/5 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/5 rounded-full blur-[100px] md:blur-[150px]" />
      </motion.div>

      {/* 2. Main Typography Block */}
      <div className="relative z-10 text-center px-4 max-w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          {/* Tag Title Custom Reset */}
          <p className="text-blue-400 font-bold text-[10px] md:text-sm mb-6 tracking-[0.2em] md:tracking-[0.6em] uppercase opacity-80 whitespace-nowrap bg-black/20 px-3 py-1 rounded-full border border-white/5">
            &lt; Creative Web Developer /&gt;
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-[8rem] lg:text-[10rem] font-black text-white mb-6 tracking-tighter leading-none whitespace-nowrap">
            <TypeAnimation
                  sequence={['ARNAB MONDAL', 1000]}
                  wrapper="span"
                  speed={40}
                  repeat={0}
                  cursor={false}
                />
          </h1>

          <div className="text-sm sm:text-xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 min-h-[50px] md:min-h-[70px] uppercase tracking-wider italic px-2 max-w-full break-words">
              <TypeAnimation
                sequence={[
                  'Creating Next-Gen Web', 2000,
                  'Frontend Web Developer', 2000,
                  'Web Development Specialist', 2000,
                  'UI/UX & WordPress Designer', 2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={70}
                repeat={Infinity}
                cursor={true}
              />
            </div>
        </motion.div>
      </div>

      {/* 3. Mouse Pointer Circle (Hidden on Mobile) */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-white/40 rounded-full z-50 pointer-events-none hidden md:flex items-center justify-center mix-blend-difference"
        style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_white]" />
      </motion.div>

      {/* Interactive Overlay */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none hidden md:block"
        style={{ background: bgGradient }}
      />
    </section>
  );
}