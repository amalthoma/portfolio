"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Ticket-Lite",
    desc: "A comprehensive SaaS platform for event management and ticket sales. Features include organization workspaces, invite systems, and secure payment flow integration.",
    tags: ["Django", "React", "Tailwind", "PostgreSQL"],
    links: { demo: "#", code: "#" }, // Add your actual links
  },
  {
    title: "Finance Tracker",
    desc: "Full-stack financial analytics tool featuring real-time data visualization, budget setting, and secure transaction recording.",
    tags: ["Python", "Django REST", "Chart.js"],
    links: { demo: "#", code: "#" },
  },
  {
    title: "Netflix Clone",
    desc: "High-fidelity UI clone demonstrating complex state management and efficient consumption of third-party media APIs.",
    tags: ["React", "Redux", "TMDB API"],
    links: { demo: "#", code: "#" },
  },
];

export default function Projects() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-slate-200 dark:border-slate-700 p-6 rounded-xl hover:shadow-lg dark:hover:bg-slate-800 transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 h-20 text-sm">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
               {/* Add links here */}
               <button className="flex items-center gap-2 text-sm font-medium hover:text-blue-500 transition-colors"><Github size={16}/> Code</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}