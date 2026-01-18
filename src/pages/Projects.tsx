import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { SiGithub } from "react-icons/si";
import "../styles/Projects.css";
import NavigationResponsive from "../components/NavigationResponsive";

type StackItem = {
    name: string;
    logo: string;
};

type ProjectLinks = {
  github?: string;
  live?: string;
  caseStudy?: string;
};

type Project = {
  id: string;
  title: string;
  description: string;
  stack: StackItem[];
  image: string;
  position: { top: string; left: string };
  date: string;
  links: ProjectLinks;
};

const projects: Project[] = [
  {
    id: "wizdle",
    title: "Wizdle",
    date: "12-2025",
    description: "Jeu daily inspiré de l’univers Harry Potter.",
    stack: [
        {name: "React", logo: "/logos/logo-react.png"},
        { name: "TypeScript", logo: "/logos/logo-ts.png" },
      { name: "API", logo: "/logos/logo-rest.png" },
    ],
    image: "/wizdle.png",
    position: { top: "35%", left: "50%" },
    links: {
      github: "https://github.com/Colombine972/wizdle",
      live: "https://wizdle.vercel.app",
      caseStudy: "/projects/wizdle",
    },
  },
  {
    id: "ecologic",
    title: "EcoLogic",
    date: "11-2025",
    description: "Application de sensibilisation écologique.",
    stack: [
        {name: "React", logo: "/logos/logo-react.png"},
        { name: "TypeScript", logo: "/logos/logo-ts.png" },
      { name: "API", logo: "/logos/logo-rest.png" },
    ],
    image: "/autre.png",
    position: { top: "13%", left: "67%" },
    links: {
      github: "https://github.com/Colombine972/Portfolio-Globe",
      live: "https://odyssey.vercel.app",
      caseStudy: "/docs/wizdle-case-study.pdf",
    },
  },
    {
    id: "portfolio",
    title: "Mon ODYSSEE",
    date: "01-2026",
    description: "Application de présentation de mon portfolio.",
    stack: [
        {name: "React", logo: "/logos/logo-react.png"},
        { name: "TypeScript", logo: "/logos/logo-ts.png" },
      { name: "API", logo: "/logos/logo-rest.png" },
    ],
    image: "/hero-odyssey.png",
    position: { top: "-25%", left: "42%" },
    links: {
      github: "https://github.com/Colombine972/Portfolio-Globe",
      live: "https://cindycolombine.vercel.app",
      caseStudy: "/projects/portfolio",
    },
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);

  const navigate = useNavigate();

useEffect(() => {
  if (!activeMarkerId) return;

  const timeout = setTimeout(() => {
    setActiveMarkerId(null);   //rallume tout
  }, 10000);

  return () => clearTimeout(timeout);
}, [activeMarkerId]);


  return (
    <main className="projects-page">
       <div className="bg-world-tint" aria-hidden />
      <div className="bg-world-map" aria-hidden />

      <NavigationResponsive />

      {/* HERO */}
      <header className="projects-hero">
        <h1>Mes escales <span>projets</span></h1>
        <p>Chaque projet est une destination explorée.</p>
      </header>

      {/* MAP */}
      <section className="projects-map">

        {/* MARKERS */}
        {projects.map((project, index) => {
  const isActive =
    activeMarkerId === null || activeMarkerId === project.id;

  return (
    <motion.button
  key={project.id}
  className={`project-marker ${
    isActive ? "marker--active" : "marker--inactive"
  }`}
  style={project.position}
  aria-label={project.title}
  onClick={() => {
    setActiveProject(project);
    setActiveMarkerId(project.id);
  }}
  initial={{ opacity: 0, scale: 0.6 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    delay: index * 0.2,
    duration: 0.6,
  }}
>
  {/* ICÔNE */}
  <div className="marker-content">
  <span className="marker-core">✈️</span>

  {/* LABEL */}
  <motion.div
    className="marker-label marker-label--right"
    initial={{ opacity: 0, y: -6 }}
    animate={{
      opacity: isActive ? 1 : 0.35,
      y: 0,
    }}
    whileHover={{ opacity: 1, y: 2 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    <span className="marker-title">{project.title}</span>
    <span className="marker-date">{project.date}</span>
  </motion.div>
  </div>
</motion.button>

  );
})}


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
      {/* TEXTE */}
      <div className="project-info">
        <h3>{activeProject.title}</h3>

        <p className="project-subtitle">
          {activeProject.description}
        </p>

        <div className="project-stack">
          {activeProject.stack.map((tech) => (
    <div key={tech.name} className="stack-item">
      <img
        src={tech.logo}
        alt={tech.name}
        title={tech.name}
        className="stack-logo"
      />
    </div>
          ))}
        </div>

        <h4>Objectif</h4>
        <p>
          Créer une expérience utile, immersive et cohérente,
          pensée comme une escale de mon ODYSSEY.
        </p>

        <div className="project-actions">
  {activeProject.links?.github && (
    <a
      href={activeProject.links.github}
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn"
    >
      <SiGithub size={16} />
      GitHub
    </a>
  )}

  {activeProject.links.live && (
    <a
      href={activeProject.links.live}
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn"
    >
      <ExternalLink size={16} />
      Voir en ligne
    </a>
  )}

  {activeProject.links.caseStudy && (
  <Link
    to={activeProject.links.caseStudy}
    className="project-btn"
  >
    <FileText size={16} />
    Cas pratique
  </Link>
)}
</div>

      </div>

      {/* IMAGE */}
      <div className="project-preview">
        <motion.img
          src={activeProject.image}
          alt={`Aperçu du projet ${activeProject.title}`}
          initial={{ rotateY: -45, rotateX: 4, z: 60, x:20 }}
          animate={{ rotateY: -34, rotateX: 3 }}
          whileHover={{ rotateY: -6, rotateX: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
        />
      </div>
    </motion.article>
  )}
</AnimatePresence>

      </section>

      <footer className="projects-footer">
  

  {/* Mallette décorative */}
  <img
    src="/malette-projects.png"
    alt="malette de projets"
    aria-hidden
    className="footer-malette"
  />
</footer>

<div className="projects-right-cta">
    {/* CTA CONTACT */}
  <motion.button
    className="btn-contact"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    onClick={() => navigate("/contact")}
  >
    ✉️ Me contacter
  </motion.button>
  <button
    className="btn-return-odyssey"
    onClick={() => navigate("/")}
  >
    ✈️ Retour à mon ODYSSEY
  </button>
</div>

    </main>
  );
}
