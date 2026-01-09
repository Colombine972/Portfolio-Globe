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
    icon: "🧭",
    title: "Frontend",
    description:
      "Concevoir des interfaces claires, réactives et immersives, pensées pour guider l’utilisateur avec fluidité.",
     logos: [
      { src: "/logos/logo-react.png", alt: "React" },
      { src: "/logos/logo-ts.png", alt: "TypeScript" },
      { src: "/logos/css.svg", alt: "CSS" },
      { src: "/logos/logo-html.png", alt: "HTML" }
    ],
  },
  {
    icon: "⚙️",
    title: "Backend",
    description:
      "Structurer la logique applicative et créer des APIs simples, fiables et évolutives.",
    logos: [
        { src: "/logos/node.svg", alt: "Node.js" },
      { src: "/logos/express.svg", alt: "Express" },
      { src: "/logos/rest.svg", alt: "REST API" },
    ],
  },
  {
    icon: "🗂",
    title: "Base de données",
    description:
      "Modéliser des bases cohérentes et compréhensibles pour soutenir la logique métier.",
   logos: [
      { src: "/logos/mysql.svg", alt: "MySQL" },
    ],
  },
  {
    icon: "🧠",
    title: "Méthodologie",
    description:
      "Comprendre le besoin, découper un projet et avancer étape par étape avec rigueur.",
    
  },
  {
    icon: "🎨",
    title: "Expérience utilisateur",
    description:
      "Soigner les détails, les animations et l’harmonie visuelle pour créer une expérience engageante.",
    
  },
  {
    icon: "🌱",
    title: "Exploration continue",
    description:
      "Apprendre, tester et expérimenter de nouveaux outils pour enrichir chaque projet.",
    
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
        <h1>Mes escales techniques</h1>
        <p className="skills-subtitle">
          Chaque compétence est une étape du voyage, construite par la pratique
          et l’exploration.
        </p>
      </header>

      {/* GRID */}
      <section className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.title} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
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
