"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experience = [
  {
    role: "Software Developer",
    company: "Neopraxis Innovations Pvt Ltd",
    period: "03/2024 - Present",
    location: "Kalpetta, India",
    description: [
      "Architected high-performance Django backends, facilitating complex data automation and reducing API response times.",
      "Engineered interactive React.js interfaces that improved user engagement metrics across eCommerce clients.",
      "Optimized Redux state management to streamline data flow in large-scale applications."
    ]
  },
  {
    role: "Software Development Intern",
    company: "Business Technology Research Centre",
    period: "07/2023 - 02/2024",
    location: "Remote / Hybrid",
    description: [
      "Developed full-stack web solutions using MongoDB, Express, React, and Node.js (MERN).",
      "Designed efficient MongoDB queries to optimize data retrieval speeds for client dashboards.",
      "Collaborated on RESTful API integration, ensuring seamless communication between frontend and backend systems."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white flex items-center gap-3">
          <Briefcase className="text-blue-600" />
          Professional Experience
        </h2>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-12">
          {experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 flex items-center gap-2">
                  <Calendar size={14} />
                  {job.period}
                </span>
              </div>
              
              <div className="text-blue-600 dark:text-blue-400 font-medium mb-4 flex items-center gap-2">
                {job.company} 
                <span className="text-slate-400 text-sm font-normal flex items-center gap-1">
                   • <MapPin size={14}/> {job.location}
                </span>
              </div>

              <ul className="space-y-3">
                {job.description.map((desc, i) => (
                  <li key={i} className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}