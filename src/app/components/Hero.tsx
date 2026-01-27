"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowRight, Code2, Terminal, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-10">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] dark:bg-blue-600/10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] dark:bg-purple-600/10 pointer-events-none" />

      {/* CHANGED: max-w-6xl to match Projects */}
      <div className="max-w-6xl mx-auto px-6 z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
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

        {/* Right Column: Visual Element / Abstract Code Representation */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.7, delay: 0.2 }}
           className="hidden lg:block relative"
        >
          <div className="relative z-10 bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-800 rotate-3 hover:rotate-0 transition-transform duration-500">
             <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                <div className="w-3 h-3 rounded-full bg-green-500"/>
             </div>
             <pre className="text-sm text-blue-300 font-mono leading-relaxed">
                {`const engineer = {
                name: "Amal Thomas",
                role: "Full-Stack Engineer",
                stack: {
                    frontend: ["Next.js", "React", "Tailwind"],
                    backend: ["Django", "Python", "PostgreSQL"],
                    infra: ["Docker", "CI/CD", "AWS"]
                },
                status: "Ready to deploy 🚀"
                };`}
             </pre>
          </div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl -z-10 blur-xl opacity-30"></div>
        </motion.div>
      </div>
    </section>
  );
}
