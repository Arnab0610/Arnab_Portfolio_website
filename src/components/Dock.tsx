"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const Icons = {
  Home: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  Code: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  Zap: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  User: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  Compass: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  ),
  Mail: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  FileText: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
  ),
};

const DOCK_ITEMS = [
  { id: "home", icon: Icons.Home, label: "Home", href: "#home" },
  { id: "about", icon: Icons.User, label: "About Me", href: "#about" }, 
  { id: "projects", icon: Icons.Code, label: "Projects", href: "#projects" },
  { id: "skills", icon: Icons.Zap, label: "Skills", href: "#skills" },
  { id: "journey", icon: Icons.Compass, label: "Journey", href: "#journey" },
  { id: "contact", icon: Icons.Mail, label: "Contact", href: "#contact" },
  { id: "resume", icon: Icons.FileText, label: "CV", href: "/Resume_Arnab_Mondal.pdf", external: true }, 
];

export default function Dock() {
  const mouseX = useMotionValue(Infinity);
  const [activeSection, setActiveSection] = useState("home");

  // Track active scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const item of DOCK_ITEMS) {
        if (item.external) continue;
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4 pointer-events-none">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto flex h-14 md:h-16 items-end gap-2.5 md:gap-3 rounded-2xl border border-white/10 bg-black/60 px-3 md:px-4 pb-2 md:pb-3 backdrop-blur-xl shadow-2xl max-w-[92vw] overflow-visible"
      >
        {DOCK_ITEMS.map((item) => (
          <DockIcon 
            key={item.id} 
            mouseX={mouseX} 
            item={item} 
            isActive={activeSection === item.id}
            onClick={() => !item.external && setActiveSection(item.id)}
          />
        ))}
      </motion.div>
    </div>
  );
}

function DockIcon({ 
  mouseX, 
  item, 
  isActive,
  onClick 
}: { 
  mouseX: MotionValue; 
  item: (typeof DOCK_ITEMS)[0]; 
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Purono boro responsive animation scaling for desktop views
  const widthSync = useTransform(distance, [-150, 0, 150], [44, 70, 44]);
  const widthSpring = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link href={item.href} target={item.external ? "_blank" : undefined} className="block" onClick={onClick}>
      {/* md: variant targets desktop spring logic safely, mobile targets native responsive constraints */}
      <motion.div
        ref={ref}
        style={{
          width: typeof window !== "undefined" && window.innerWidth > 768 ? widthSpring : undefined
        }}
        whileTap={{ scale: 0.92 }}
        className={`w-[40px] h-[40px] md:h-full aspect-square rounded-xl md:rounded-full flex flex-col items-center justify-center transition-all duration-300 md:duration-100 group relative border ${
          isActive 
            ? "bg-blue-500/10 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]" 
            : "bg-white/5 border-white/10 hover:bg-blue-500/10 hover:border-blue-500/30"
        }`}
      >
         <item.icon className={`w-1/2 h-1/2 transition-all ${
           isActive 
             ? "text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" 
             : "text-gray-400 group-hover:text-blue-400"
         }`} />
         
         {/* Sliding dot layer */}
         {isActive && (
           <motion.div 
             layoutId="activeIndicatorDot"
             className="absolute bottom-1 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,1)]"
             transition={{ type: "spring", stiffness: 300, damping: 30 }}
           />
         )}

         {/* Tooltip */}
         <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 backdrop-blur-md hidden md:block">
            {item.label}
         </span>
      </motion.div>
    </Link>
  );
}