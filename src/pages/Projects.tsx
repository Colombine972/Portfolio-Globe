import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Projects.css";
import Navbar from "../components/NavBar";

type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  position: { top: string; left: string };
};

const projects: Project[] = [
  {
    id: "wizdle",
    title: "Wizdle",
    description: "Jeu daily inspiré de l’univers Harry Potter.",
    stack: ["React", "TypeScript", "API"],
    position: { top: "45%", left: "48%" },
  },
  {
    id: "ecologic",
    title: "EcoLogic",
    description: "Application de sensibilisation écologique.",
    stack: ["React", "TS", "API"],
    position: { top: "60%", left: "55%" },
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(
    projects[0]
  );

  return (
    <main className="projects-page">
       <div className="bg-world-tint" aria-hidden />
      <div className="bg-world-map" aria-hidden />

      <Navbar />

      {/* HERO */}
      <header className="projects-hero">
        <h1>Mes escales projets</h1>
        <p>Chaque projet est une destination explorée.</p>
      </header>

      {/* MAP */}
      <section className="projects-map">
        {/* MARKERS */}
        {projects.map((project, index) => (
          <motion.button
            key={project.id}
            className="project-marker"
            style={project.position}
            onClick={() => setActiveProject(project)}
            aria-label={project.title}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            ✈️
          </motion.button>
        ))}

        {/* PROJECT CARD */}
        <AnimatePresence mode="wait">
          {activeProject && (
            <motion.article
              key={activeProject.id}
              className="project-card"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <h2>{activeProject.title}</h2>
              <p>{activeProject.description}</p>

              <div className="project-stack">
                {activeProject.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <button>GitHub</button>
                <button>Voir en ligne</button>
                <button>Cas pratique</button>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </section>

      <footer className="projects-footer">
        <button>✉️ Me contacter</button>
        <button>✈️ Retour à mon ODYSSEY</button>
      </footer>
    </main>
  );
}
