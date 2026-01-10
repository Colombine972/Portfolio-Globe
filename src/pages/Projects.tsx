import { useState } from "react";
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
      {/* BACKGROUND */}
       <div className="bg-world-tint" aria-hidden />
      <div className="bg-world-map" aria-hidden />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <header className="projects-hero">
        <p className="projects-eyebrow">ODYSSEY · COMPÉTENCES</p>
        <h1>Mes escales <span>projets</span></h1>
        <div className="projects-hero-row">
        <p className="projects-subtitle">Chaque projet est une destination explorée.</p>
        </div>
      </header>
            
       

      {/* MAP */}
      <section className="projects-map">
        {projects.map((project) => (
          <button
            key={project.id}
            className="project-marker"
            style={project.position}
            onClick={() => setActiveProject(project)}
            aria-label={project.title}
          >
            ✈️
          </button>
        ))}

        {/* ACTIVE PROJECT CARD */}
        {activeProject && (
          <article className="project-card">
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
          </article>
        )}
      </section>

      {/* FOOTER ACTIONS */}
      <footer className="projects-footer">
        <button>✉️ Me contacter</button>
        <button>✈️ Retour à mon ODYSSEY</button>
      </footer>
    </main>
  );
}
