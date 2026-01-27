"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Trello, TrendingUp, PlayCircle, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Ticket-Lite SaaS",
    desc: "A Trello-style event management platform simulating enterprise logic. Features organization workspaces, role-based access control (RBAC), and secure invitation systems.",
    tags: ["Django", "React", "PostgreSQL", "Docker"],
    links: { demo: "https://ticket-lite-frontend.vercel.app/", code: "https://github.com/amalthoma/ticket-lite-backend" },
    gradient: "from-blue-500 to-indigo-600",
    icon: <Trello size={48} className="text-white/80" />
  },
  {
    title: "Finance Analytics",
    desc: "Real-time expense tracking with dynamic data visualization. Implemented RESTful APIs for secure budget monitoring and granular spending analysis.",
    tags: ["Python", "Django REST", "Chart.js"],
    links: { demo: "https://finance-web-xvy4.onrender.com/", code: "https://github.com/amalthoma/finance-dashboard" },
    gradient: "from-emerald-500 to-teal-600",
    icon: <TrendingUp size={48} className="text-white/80" />
  },
  {
    title: "Netflix Clone UI",
    desc: "Pixel-perfect streaming interface. Demonstrates complex Redux state management and efficient handling of large media datasets via TMDB API.",
    tags: ["React", "Redux", "TMDB API"],
    links: { demo: "#", code: "#" },
    gradient: "from-red-600 to-rose-600",
    icon: <PlayCircle size={48} className="text-white/80" />
  },
];


export default function Projects() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-blue-600 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // ADDED: flex, flex-col, h-full to force equal height
              className="group flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:-translate-y-2"
            >
              {/* Thumbnail */}
              <div className={`h-48 shrink-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-5 -mb-5 blur-xl" />
                <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {project.icon}
                </div>
              </div>

              {/* Content Container - flex-grow pushes button down */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <a href={project.links.code} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Tech Stack - Auto margin top pushes it down, but before button */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs rounded-full font-medium border border-slate-200 dark:border-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button - Always at bottom */}
                <a 
                  href={project.links.demo !== "#" ? project.links.demo : project.links.code}
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full inline-flex justify-center items-center gap-2 py-3 rounded-lg bg-slate-900 dark:bg-slate-700 text-white font-medium hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors mt-auto"
                >
                  View Project <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}