import { Link } from "react-router";
import "../styles/AboutMe.css";
import "../styles/Globals.css";
import AboutCarousel from "../components/AboutCarousel";

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
  <p className="about-eyebrow">ODYSSEY · DÉVELOPPEUSE WEB</p>
  <h1>À propos de <span>Cindy</span></h1>
  <p className="about-subtitle"> Chaque projet est une escale, chaque ligne de code est un pas en avant.</p>
  </header>

{/* ================= GLASS CARD ================= */}
<section className="about-card">
        {/* LEFT */}
        <div className="about-left">
          <div className="portrait-wrapper">
            <AboutCarousel
            />
          </div>
         
        </div>

        {/* RIGHT */}
        <div className="about-content">
          <article>
            <h2>→ Un parcours en mouvement</h2>
            <p>
              ODYSSEY est le reflet de mon parcours dans le développement web.
Comme un voyage, il s’est construit étape par étape, entre apprentissage, expérimentations et découvertes. Actuellement en formation de développeuse web, j’avance avec curiosité et persévérance, en explorant de nouveaux outils, de nouvelles méthodes et de nouvelles façons de créer. 
<br />Ce portfolio raconte un chemin en construction — un voyage qui continue, ouvert sur la suite.
            </p>
          </article>

          <article>
            <h2>→ À la croisée de la logique et de la créativité </h2>
            <p>
             Je n’ai pas choisi le développement web par hasard.
J’y ai trouvé un domaine où la rigueur technique rencontre la créativité, où une idée peut prendre forme et devenir une expérience concrète.
Le code me permet de transformer des concepts abstraits en interfaces visibles, interactives et utiles.
C’est cette capacité à construire, structurer et donner vie à des projets qui m’a donné envie de m’engager dans cette voie.
Développer, c’est pour moi résoudre des problèmes, expérimenter, créer et toujours avec le souci du sens et de l’expérience utilisateur.
            </p>          
          </article>

          <article>
            <h2>→ Transformer des idées en expériences interactives</h2>
            <p>
              Ma façon de créer repose sur une vision globale du projet.
J’aime penser une interface comme un équilibre entre :
la structure et la logique du code
              Je m’attache à concevoir des interfaces claires, immersives et cohérentes, où le code s’efface pour laisser place à l’expérience.
Chaque détail compte : une animation fluide, une interaction intuitive, une ambiance visuelle soignée.
<br />Créer une expérience, ce n’est pas seulement faire fonctionner une application, c’est inviter l’utilisateur à explorer.
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