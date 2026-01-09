import "../styles/Skills.css";
import "../styles/Globals.css";

const skills = [
  {
    icon: "🧭",
    title: "Frontend",
    description:
      "Concevoir des interfaces claires, réactives et immersives, pensées pour guider l’utilisateur avec fluidité.",
    tech: ["React", "TypeScript", "CSS", "Animations"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    description:
      "Structurer la logique applicative et créer des APIs simples, fiables et évolutives.",
    tech: ["Node.js", "Express", "REST API"],
  },
  {
    icon: "🗂",
    title: "Base de données",
    description:
      "Modéliser des bases cohérentes et compréhensibles pour soutenir la logique métier.",
    tech: ["MySQL", "Modélisation", "Relations"],
  },
  {
    icon: "🧠",
    title: "Méthodologie",
    description:
      "Comprendre le besoin, découper un projet et avancer étape par étape avec rigueur.",
    tech: ["Agile", "Trello", "Git"],
  },
  {
    icon: "🎨",
    title: "Expérience utilisateur",
    description:
      "Soigner les détails, les animations et l’harmonie visuelle pour créer une expérience engageante.",
    tech: ["UX", "UI", "Micro-interactions"],
  },
  {
    icon: "🌱",
    title: "Exploration continue",
    description:
      "Apprendre, tester et expérimenter de nouveaux outils pour enrichir chaque projet.",
    tech: ["Veille", "Tests", "Nouvelles technos"],
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

            <ul className="skill-tech">
              {skill.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
