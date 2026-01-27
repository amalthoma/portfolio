import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-200 dark:selection:bg-blue-900">
      <Hero />
      <Experience />
      <Projects />
      
      {/* Simple Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950">
        <p>© {new Date().getFullYear()} Amal Thomas. Engineered with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}