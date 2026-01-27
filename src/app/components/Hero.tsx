"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background Decor - The "Promising" Glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-600/20 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl dark:bg-purple-600/20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Status Badge */}
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-800">
            Available for Hire
          </span>

          {/* Headline with Gradient Text */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Building scalable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              SaaS Platforms.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
            I am <strong className="text-slate-900 dark:text-white">Amal Thomas</strong>, a Full-Stack Engineer specializing in high-performance <span className="text-blue-600 dark:text-blue-400">Django</span> backends and reactive <span className="text-blue-600 dark:text-blue-400">React</span> frontends.
            Based in Kannur, crafting digital solutions that scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/AMAL_THOMAS.pdf" target="_blank" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2">
              <FileText size={18} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 items-center">
            <a href="https://github.com" target="_blank" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/amal-thomas-67aa0a263/" target="_blank" className="text-slate-500 hover:text-[#0077b5] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:amalthomasktyr@gmail.com" className="text-slate-500 hover:text-red-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}