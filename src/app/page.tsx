import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Hero />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}