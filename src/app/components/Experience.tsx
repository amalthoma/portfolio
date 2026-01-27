"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experience = [
  {
    role: "Software Developer",
    company: "Neopraxis Innovations Pvt Ltd",
    period: "03/2024 - Present",
    location: "Kalpetta, India",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    description: [
      "Architected high-performance Django backends, facilitating complex data automation and reducing API response times by 40%.",
      "Engineered interactive React.js interfaces that improved user engagement metrics across eCommerce clients.",
      "Optimized Redux state management to streamline data flow in large-scale applications."
    ]
  },
  {
    role: "Software Development Intern",
    company: "Business Technology Research Centre",
    period: "07/2023 - 02/2024",
    location: "Remote / Hybrid",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    description: [
      "Developed full-stack web solutions using MongoDB, Express, React, and Node.js (MERN).",
      "Designed efficient MongoDB queries to optimize data retrieval speeds for client dashboards.",
      "Collaborated on RESTful API integration, ensuring seamless communication between frontend and backend systems."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-3"
          >
            <Briefcase className="text-blue-600" size={36} />
            Experience
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-blue-600 rounded-full"
          />
        </div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
                
                {/* Header Info */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{job.role}</h3>
                  <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">
                    {job.company}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className={`px-3 py-1 rounded-full font-medium flex items-center gap-2 ${job.color}`}>
                      <Calendar size={14} />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Description List */}
                <div className="md:w-2/3 mt-6 md:mt-0">
                  <ul className="space-y-4">
                    {job.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="shrink-0 w-5 h-5 text-blue-500 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}