import { Link } from "react-router";
import "../styles/AboutMe.css";
import "../styles/Globals.css";

export default function AboutMe() {
return(
  <main className="about-page">
{/* ================= BACKGROUND LAYERS ================= */}
      <div className="bg-world-tint" aria-hidden />
      <div className="bg-world-map" aria-hidden />
      <div className="about-clouds" aria-hidden />
      <div className="about-bg-overlay" aria-hidden />

 {/* ================= HERO ================= */}
  <header className="about-hero">
  <p className="about-eyebrow">ODYSSEY · DOCUMENT DE VOYAGE</p>
  <h1>À propos de Cindy</h1>
  <p className="about-subtitle"> Développeuse web en quête d'innovation</p>
  </header>

{/* ================= GLASS CARD ================= */}
<section className="about-card">
        {/* LEFT */}
        <div className="about-left">
          <div className="portrait-wrapper">
            <img
              src="/croquis-cindy.png"
              alt="Portrait Cindy Colombine"
              className="portrait"
            />
          </div>
         
        </div>

        {/* RIGHT */}
        <div className="about-content">
          <article>
            <h2>→ Avant</h2>
            <p>
              J’ai débuté ma carrière dans un univers{" "}
              <strong>administratif</strong>, mais la{" "}
              <span className="highlight">spontanéité</span> et la{" "}
              <span className="highlight">curiosité</span> m’ont poussée à
              explorer de nouveaux horizons.
            </p>
          </article>

          <article>
            <h2>→ Aujourd’hui</h2>
            <p>
              Après une formation passionnante à la{" "}
              <strong>Wild Code School</strong>, j’ai plongé dans le
              développement web. J’aime créer des interfaces élégantes, avec
              une attention particulière à l’
              <strong>expérience utilisateur</strong> et aux technologies :
            </p>

            <div className="tech-badges">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </article>

          <article>
            <h2>→ Demain</h2>
            <p>
              Je continue d’apprendre chaque jour, avec l’envie de{" "}
              <strong>construire</strong> des projets qui ont du sens, au sein
              d’une équipe où la <strong>créativité</strong> et l’
              <strong>innovation</strong> sont au cœur de tout.
            </p>
          </article>

          <div className="about-actions">
              <Link className="about-btn" to="/">
                ✈︎ Retour à l'accueil
              </Link>
            </div>
        </div>
      </section>

  </main>




)
}