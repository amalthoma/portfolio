"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import Image from "next/image"; // Import Next.js Image component

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-10">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] dark:bg-blue-600/10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] dark:bg-purple-600/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-8 border border-blue-100 dark:border-blue-800/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Full-Stack Roles
          </span>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              Scalable Logic.
            </span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-10 leading-relaxed">
            Hi, I'm <strong>Amal Thomas</strong>. I architect high-performance SaaS platforms using 
            <span className="text-slate-900 dark:text-slate-200 font-semibold"> Django</span> & 
            <span className="text-slate-900 dark:text-slate-200 font-semibold"> React</span>. 
            Focused on clean code, CI/CD pipelines, and intuitive user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="group bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-2">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/AMAL_THOMAS.pdf" target="_blank" className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2">
              <FileText size={18} className="text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors"/>
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 items-center border-t border-slate-200 dark:border-slate-800 pt-8">
            <a href="https://github.com/amalthoma" target="_blank" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/amal-thomas-67aa0a263/" target="_blank" className="text-slate-400 hover:text-[#0077b5] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:amalthomasktyr@gmail.com" className="text-slate-400 hover:text-red-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: EXECUTIVE PORTRAIT */}
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Subtle Backdrop Glow (Silver/Blue for Executive Feel) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-900 rounded-full blur-2xl opacity-40"></div>
                
                {/* The Frame */}
                <div className="relative w-full h-full rounded-full border-[4px] border-slate-100 dark:border-slate-700 overflow-hidden shadow-2xl">
                    <Image 
                        src="/profile.jpeg"
                        alt="Amal Thomas"
                        fill
                        priority
                        quality={100}
                        // EXECUTIVE STYLING MAGIC:
                        // 1. grayscale-100: Removes distracting colors (forest/car)
                        // 2. contrast-125: Adds a sharp, premium 'magazine' look
                        // 3. scale-110: Zooms in slightly to fill the frame
                        // 4. object-[center_30%]: Crops out the 'ONTOUR' logo, focusing on the face
                        className="object-cover object-[center_30%] scale-110 grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-in-out" 
                    />
                </div>
                
                {/* Optional: 'Status Dot' to show you are active */}
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-white dark:border-slate-900 rounded-full z-10"></div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}

