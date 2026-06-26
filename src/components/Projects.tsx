"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Project Data with Media & Layout Configuration
const projects = [
  {
    id: "REAL ESTATE",
    title: "REAL ESTATE",
    category: "Luxury Real Estate Website",
    description: "Scalable hotel management system with 5+ Node.js services.",
    longDescription: "Elysian Estates is a high-performance luxury real estate web app built with Vite, Tailwind CSS, and JavaScript. Key features include dynamic property filtering, a fully responsive layout with mobile navigation, an interactive concierge chatbot, and smooth scroll animations. Designed for elegance and speed, it offers a seamless user experience.",
    techStack: ["Html","Tailwind Css","Js","Css"],
    repo: "https://github.com/Arnab0610/Elysian-Estates-Luxury-Real-Estate-Website",
    demo: "https://elysian-estates-luxury-real-estate.vercel.app/",
    color: "from-black-600/20 to-black-500/20",
    hoverColor: "group-hover:from-black-600/40 group-hover:to-black-500/40",
    span: "md:col-span-2 md:row-span-2",
    mediaType: "image",
    // Abstract Network/Server for Grid
    mediaUrl: "/project/project_1.png",
    // Code/Structure Demo for Modal
    demoUrl: "/project/project_1.png"
  },
//   {
//     id: "Shoes E-commerce Website",
//     title: "Shoes E-commerce Website",
//     category: "E-Commerce",
//     description: "A vibrant, fully responsive frontend educational website designed for modern primary and kids' schools. Features intuitive multi-page layouts, clean component structures, and custom UI elements optimized for parents and administrators.",
//     longDescription: "Designed and engineered a modern, production-ready website template for a kids' educational institution. The goal was to build an engaging, colorful, yet structurally robust interface that provides seamless navigation for parents seeking information about admissions, curriculum, and school activities. ",
//     techStack: ["wordpress","elementor","responsive design","WooCommerce", "wp-forms"],
//     // repo: "https://github.com/fawazv/nxt-cart",
//     demo: "babykidsschool.42web.io",
//     color: "from-black-600/20 to-black-500/20",
//     hoverColor: "group-hover:from-black-600/40 group-hover:to-black-500/40",
//     span: "md:col-span-1 md:row-span-2",
//     mediaType: "image",
//     // Shopping/Ecommerce Concept
//     mediaUrl: "/project/project_2.png",
//     // Shopping Interaction
//     demoUrl: "/project/project_2.png"
//   },
  {
    id: "Bhojon Bilash food Restaurant",
    title: "Bhojon Bilash food Restaurant",
    category: "Restaurant Website",
    description: "A visually stunning and responsive restaurant website showcasing culinary excellence.",
    longDescription: "Bhojon Bilash is a modern restaurant landing page designed to provide an immersive gastronomic experience. It features a meticulously crafted menu showcase, smooth scroll animations, and a fully responsive layout that ensures a seamless experience across all devices, highlighting my expertise in frontend development and UI design.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "AOS Library"],
    repo: "https://github.com/Arnab0610/Bhojon-Bilash-food-Restaurant",
    demo: "https://arnab0610.github.io/Bhojon-Bilash-food-Restaurant/",
    color: "from-black-600/20 to-black-500/20",
    hoverColor: "group-hover:from-black-600/40 group-hover:to-black-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Cloud/Data Abstract
    mediaUrl: "/project/project_3.png",
    // File Management
    demoUrl: "/project/project_3.png"
  },
  {
    id: "arena-animation",
    title: "Arena Animation Chowringhee",
    category: "Institutional • Web Design",
    description: "A professional institutional portal for a premier animation and multimedia institute.",
    longDescription: "Arena Animation Chowringhee is a comprehensive institutional website designed to showcase various multimedia courses and career paths. The project focuses on clean navigation, clear course categorization, and an optimized user journey for prospective students, built with a mobile-first approach using modern frontend tools to ensure accessibility across all devices.",
    techStack: ["WordPress", "Elementor", "Responsive Design"],
    repo: "https://github.com/Arnab0610/Arena_Animation_Chowringhee",
    demo: "https://arnab0610.github.io/Arena_Animation_Chowringhee/",
    color: "from-black-600/20 to-black-500/20",
    hoverColor: "group-hover:from-black-600/40 group-hover:to-black-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Typing/Code Abstract
    mediaUrl: "/project/project_4.png",
    // Server/Terminal
    demoUrl: "/project/project_4.png"
  },
  {
    id: "Arena Animation Chowringhee Faculty Log in",
    title: "Arena Animation Chowringhee Faculty Log in",
    category: "Result Management System",
    description: "A dedicated academic portal for seamless result management and student tracking.",
    longDescription: "Arena Result is a custom-built web application designed to streamline the result-checking process for students. It integrates a backend database to fetch and display academic performance records accurately, providing a centralized, secure, and user-friendly platform for students to monitor their progress.",
    techStack: ["PHP", "MySQLi", "JavaScript", "CSS3", "HTML5"],
    repo: "https://github.com/Arnab0610/Arena-Animation-Result-System",
    demo: "https://arenaresult.42web.io/?i=1",
    color: "from-black-600/20 to-black-500/20",
    hoverColor: "group-hover:from-black-600/40 group-hover:to-black-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Reading/Books
    mediaUrl: "/project/project_5.png",
    // Library/Shelf
    demoUrl: "/project/project_5.png"
  },
  {
    id: "indoor-plantation",
    title: "Indoor Plantation",
    category: "E-Commerce • Lifestyle",
    description: "A serene and modern e-commerce platform for indoor plant enthusiasts.",
    longDescription: "Indoor Plantation is a meticulously designed e-commerce landing page that brings nature closer to users. It features a clean, organic aesthetic with a focus on high-quality visuals, responsive product grids, and smooth navigation. This project demonstrates my ability to create niche-specific UI/UX designs that balance beauty with functional shopping elements.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Google Fonts"],
    repo: "https://github.com/Arnab0610/Indoor-Plantation-E-Commerce",
    demo: "https://arnab0610.github.io/Indoor-Plantation-E-Commerce/",
    color: "from-black-600/20 to-black-500/20",
    hoverColor: "group-hover:from-black-600/40 group-hover:to-black-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Color/Art
    mediaUrl: "/project/project_6.png",
    // Searching/Scanning
    demoUrl: "/project/project_6.png"
  },
  {
    id: "stepup-shoes-e-commerce-website",
    title: "StepUp Shoes E-Commerce Website",
    category: "E-Commerce • Fashion",
    description: "A stylish and high-performance e-commerce landing page for a footwear brand.",
    longDescription: "StepUp Shoes is a dynamic e-commerce platform designed to showcase premium footwear with a focus on speed, style, and user engagement. The project features a sleek product gallery, interactive hover effects, and a fully mobile-responsive layout, demonstrating my ability to build conversion-oriented frontend experiences for modern fashion brands.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "AOS Library"],
    repo: "https://github.com/Arnab0610/StepUp_Shoes-_E_commerce_Website",
    demo: "https://arnab0610.github.io/StepUp_Shoes-_E_commerce_Website/",
    color: "from-black-600/20 to-black-500/20",
    hoverColor: "group-hover:from-black-600/40 group-hover:to-black-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Data Transfer
    mediaUrl: "/project/project_7.png",
    // Upload/Processing
    demoUrl: "/project/project_7.png"
  },

  {
    id: "car-landing-page",
    title: "Elite Auto Gallery",
    category: "Web Design • Automotive",
    description: "A sleek and high-performance landing page for a luxury car brand.",
    longDescription: "Elite Auto Gallery is a high-performance car landing page designed to showcase luxury vehicles with a sleek and modern aesthetic. It features an immersive dark interface, smooth AOS animations, and a responsive layout that highlights the speed and elegance of premium cars, demonstrating my skills in advanced CSS and frontend design.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "AOS Library"],
    repo: "https://github.com/Arnab0610/car_landing_page",
    demo: "https://arnab0610.github.io/car_landing_page/",
    color: "from-black-600/20 to-black-500/20",
    hoverColor: "group-hover:from-black-600/40 group-hover:to-black-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Data Transfer
    mediaUrl: "/project/project_8.png",
    // Upload/Processing
    demoUrl: "/project/project_8.png"
  },

  {
    id: "ahmad-law",
    title: "Ahmad Law Chambers",
    category: "Legal Services • Frontend",
    description: "A professional and authoritative web presence for a legal firm.",
    longDescription: "Ahmad Law Chambers holo ekta sophisticated legal services landing page ja professionalism ebong trust prokash korar jonno toiri kora hoyechhe. E-te achhe clean navigation, service sections, ebong modern contact integration, ja legal clients-der jonno ekta seamless user experience prodan kore. E-te amar modern frontend tools ebong UI design-er dokkhota prokash pay.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Google Fonts"],
    repo: "",
    demo: "",
    color: "from-black-600/20 to-black-500/20",
    hoverColor: "group-hover:from-black-600/40 group-hover:to-black-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Data Transfer
    mediaUrl: "/project/project_9.png",
    // Upload/Processing
    demoUrl: "/project/project_9.png"
  },

  {
    id: "debit-card-animation",
    title: "Interactive Debit Card",
    category: "Interactive Debit Card • UI Animation",
    description: "A realistic 3D credit card animation featuring smooth flip and hover effects.",
    longDescription: "The Interactive Debit Card project is a visually engaging UI component designed to enhance the checkout experience. It showcases advanced CSS 3D transforms, glassmorphism aesthetics, and real-time input synchronization, allowing users to see their data reflected on a virtual card in a dynamic and interactive way.",
    techStack: ["HTML5", "CSS3", "JavaScript", "3D Transforms"],
    repo: "https://github.com/Arnab0610/Debit-Card-Animation",
    demo: "https://arnab0610.github.io/Debit-Card-Animation/",
    color: "from-black-600/20 to-black-500/20",
    hoverColor: "group-hover:from-black-600/40 group-hover:to-black-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Data Transfer
    mediaUrl: "/project/project_10.png",
    // Upload/Processing
    demoUrl: "/project/project_10.png"
  },

  {
    id: "dynamic-clock",
    title: "Synchronized Dynamic Clock",
    category: "UI Component • JavaScript",
    description: "A precision-based digital and analog clock interface with real-time synchronization.",
    longDescription: "The Synchronized Dynamic Clock is a sleek time-tracking component that combines traditional analog aesthetics with modern digital precision. It utilizes JavaScript's Date object to ensure accurate timekeeping and CSS transforms for smooth, real-time hand movement. This project highlights my ability to handle time-based logic and create clean, minimalist UI components.",
    techStack: ["HTML5", "CSS3", "JavaScript (ES6)"],
    repo: "https://github.com/Arnab0610/Clock",
    demo: "https://arnab0610.github.io/Clock/",
    color: "from-black-600/20 to-black-500/20",
    hoverColor: "group-hover:from-black-600/40 group-hover:to-black-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Data Transfer
    mediaUrl: "/project/project_11.png",
    // Upload/Processing
    demoUrl: "/project/project_11.png"
  },

  {
    id: "travel-app",
    title: "SWanderlust Travel App",
    category: "Web App • Tourism",
    description: "A comprehensive travel companion app for exploring global destinations.",
    longDescription: "Wanderlust Travel App is a feature-rich landing page designed to inspire travelers and simplify vacation planning. It showcases stunning destination galleries, immersive scroll effects, and a mobile-responsive interface that provides an intuitive booking and discovery experience. This project reflects my ability to create high-impact, visual-heavy frontend solutions with smooth performance.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "AOS Library"],
    repo: "https://github.com/Arnab0610/Travel_App",
    demo: "https://arnab0610.github.io/Travel_App/",
    color: "from-black-600/20 to-black-500/20",
    hoverColor: "group-hover:from-black-600/40 group-hover:to-black-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Data Transfer
    mediaUrl: "/project/project_12.png",
    // Upload/Processing
    demoUrl: "/project/project_12.png"
  },
];

const INITIAL_VISIBLE_COUNT = 5;

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const selectedProject = projects.find((p) => p.id === selectedId);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="projects">
  {/* Background Ambience - Fixed Side Scroll */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[-20%] right-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-[-10%] left-[-10%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
             Building the future of the web, one project at a time. 
             Here’s a look at the tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]"
        >
            <AnimatePresence mode="popLayout">
                {visibleProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        layoutId={project.id}
                        onClick={() => setSelectedId(project.id)}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 backdrop-blur-md ${project.span}`}
                        whileHover={{ scale: 1.015 }}
                    >
                        {/* Media Background - Always 'mediaUrl' for Grid */}
                        <Image src={project.mediaUrl} alt={project.title} fill className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110"/>

                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-linear-to-br ${project.color} ${project.hoverColor} transition-all duration-500 opacity-60 group-hover:opacity-80 mix-blend-overlay`} />
                        
                        {/* Darkener */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                        {/* Noise */}
                        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                                 <span className="inline-block px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-mono text-blue-300 backdrop-blur-md">
                                    {project.category}
                                 </span>
                                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                 </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:translate-x-1 transition-transform drop-shadow-lg">{project.title}</h3>
                                <p className="text-gray-200 text-sm line-clamp-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    {project.techStack.slice(0, 3).map(t => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider text-white/80 bg-black/40 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {/* Pagination Buttons */}
        <motion.div layout className="flex justify-center mt-12">
            {hasMore ? (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setVisibleCount(prev => prev + 6)}
                    className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-2 group"
                >
                    View More Projects
                    <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.button>
            ) : projects.length > INITIAL_VISIBLE_COUNT && (
                 <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        const projectsSection = document.getElementById('projects');
                        if (projectsSection) {
                            projectsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                        setVisibleCount(INITIAL_VISIBLE_COUNT);
                    }}
                    className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-2 group"
                 >
                    Show Less
                    <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                 </motion.button>
            )}
        </motion.div>

        {/* Enhanced Modal */}
        <AnimatePresence>
            {selectedId && selectedProject && (
                <>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-xl z-60"
                    />
                    <div className="fixed inset-0 flex items-center justify-center z-70 pointer-events-auto p-4 md:p-8">
                        <motion.div
                           layoutId={selectedId}
                           className="bg-[#121212] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-4xl border border-white/10 shadow-2xl relative scrollbar-hide"
                        >
                           <button 
                                onClick={() => setSelectedId(null)}
                                className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-colors border border-white/10"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                           </button>

                           <div className="flex flex-col md:flex-row h-full">
                                { /* Visual Side - Prioritize 'demoUrl', fallback to 'mediaUrl' */ }
                                <div className={`w-full md:w-2/5 min-h-75 relative overflow-hidden flex flex-col justify-end p-8`}>
                                    <Image
                                        src={selectedProject.demoUrl || selectedProject.mediaUrl}
                                        alt={selectedProject.title}
                                        fill
                                        className="absolute inset-0 w-full h-full object-cover opacity-80" 
                                    />
                                   <div className={`absolute inset-0 bg-linear-to-b ${selectedProject.color} mix-blend-overlay opacity-80`} />
                                   <div className="absolute inset-0 bg-black/20" />
                                   
                                   <motion.span 
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ delay: 0.2 }}
                                     className="relative z-10 inline-block px-3 py-1 rounded-full bg-black/40 text-xs font-mono text-white mb-4 w-fit border border-white/10 backdrop-blur-md"
                                   >
                                     {selectedProject.category}
                                   </motion.span>
                                   <motion.h3 
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ delay: 0.3 }}
                                     className="relative z-10 text-4xl font-bold text-white leading-none tracking-tight drop-shadow-xl"
                                   >
                                     {selectedProject.title}
                                   </motion.h3>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-3/5 p-8 md:p-12 bg-[#121212]">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">About the project</h4>
                                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                            {selectedProject.longDescription}
                                        </p>

                                        <div className="mb-10">
                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Core Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.techStack.map((tech, i) => (
                                                    <motion.span 
                                                        key={tech} 
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.5 + (i * 0.05) }}
                                                        className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-gray-200 border border-white/5 transition-colors cursor-default"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-4 border-t border-white/10">
                                            <a 
                                                href={selectedProject.repo} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex-1 py-4 rounded-xl bg-white text-black font-bold text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                                View Code
                                            </a>
                                            <a 
                                                href={selectedProject.demo} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex-1 py-4 rounded-xl bg-white/5 text-white font-bold text-center hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center gap-2"
                                            >
                                                Live Demo
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>
                           </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
      </div>
    </section>
  );
}
