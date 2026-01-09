import { Link } from "react-router";
import "../styles/Skills.css";
import "../styles/Globals.css";


type SkillLogo = {
  src: string;
  alt: string;
};

type Skill = {
  icon: string;
  title: string;
  description: string;
  logos?: SkillLogo[]; // ← optionnel
};

const skills: Skill[] = [
  {
    icon: "/logos/front-end.png",
    title: "Frontend",
    description:
      "Concevoir des interfaces claires, réactives et immersives, pensées pour guider l’utilisateur avec fluidité.",
     logos: [
      { src: "/logos/logo-react.png", alt: "React" },
      { src: "/logos/logo-ts.png", alt: "TypeScript" },
      { src: "/logos/logo-css.png", alt: "CSS" },
      { src: "/logos/logo-js.png", alt: "JavaScript" }
    ],
  },
  {
    icon: "/logos/back-end.png",
    title: "Backend",
    description:
      "Structurer la logique applicative et créer des APIs simples, fiables et évolutives.",
    logos: [
        { src: "/logos/logo-node-js.png", alt: "Node.js" },
      { src: "/logos/logo-express.png", alt: "Express" },
      { src: "/logos/logo-rest.png", alt: "REST API" },
    ],
  },
  {
    icon: "/logos/base-de-donnees.png",
    title: "Base de données",
    description:
      "Modéliser des bases cohérentes et compréhensibles pour soutenir la logique métier.",
   logos: [
      { src: "/logos/logo-mysql.png", alt: "MySQL" },
      { src: "/logos/logo-modelisation.png", alt: "modelisation" },
      { src: "/logos/logo-relations.png", alt: "relations" }
    ],
  },
  {
    icon: "/logos/methodologie.png",
    title: "Méthodologie",
    description:
      "Comprendre le besoin, découper un projet et avancer étape par étape avec rigueur.",
    logos: [
      { src: "/logos/logo-agile.png", alt: "agile" },
      { src: "/logos/logo-trello.png", alt: "trello" },
      { src: "/logos/logo-git.png", alt: "git" },
    ],
  },
  {
    icon: "/logos/experience-utilisateur.png",
    title: "Expérience utilisateur",
    description:
      "Soigner les détails, les animations et l’harmonie visuelle pour créer une expérience engageante.",
    logos: [
      { src: "/logos/logo-UX.png", alt: "UX" },
      { src: "/logos/logo-UI.png", alt: "UI" },
      { src: "/logos/logo-figma.png", alt: "figma" },
    ],
  },
  {
    icon: "/logos/exploration-continue.png",
    title: "Exploration continue",
    description:
      "Apprendre, tester et expérimenter de nouveaux outils pour enrichir chaque projet.",
   logos: [
      { src: "/logos/logo-veille.png", alt: "veille" },
      { src: "/logos/logo-test.png", alt: "test" },
    ],
  },
];



export default function Skills() {
  return (
    <main className="skills-page">
{/* ================= BACKGROUND LAYERS ================= */}
      <div className="bg-world-tint" aria-hidden />
      <div className="bg-world-map" aria-hidden />
      <div className="about-clouds" aria-hidden />
      <div className="about-bg-overlay" aria-hidden />

      {/* HERO */}
      <header className="skills-hero">
        <p className="skills-eyebrow">ODYSSEY · COMPÉTENCES</p>
        <h1>Mes escales <span>Techniques</span></h1>
         <div className="skills-hero-row">
    <p className="skills-subtitle">
      Chaque compétence est une étape du voyage, construite par la pratique
      et l’exploration.
    </p>

    <div className="skills-actions">
      <Link className="skills-btn" to="/">
        ✈︎ Retour à l'accueil
      </Link>
    </div>
  </div>
      </header>

      {/* GRID */}
      <section className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.title} className="skill-card">
            <div className="skill-header">
     <img src={skill.icon} alt={`${skill.title} icon`} />
    <h3>{skill.title}</h3>
  </div>
            <p>{skill.description}</p>

            {/* LOGOS (si présents) */}
            {skill.logos && (
              <div className="skill-logos">
                {skill.logos.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.alt}
                  />
                ))}
              </div>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}
