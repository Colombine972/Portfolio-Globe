import { Link } from "react-router";
import "../styles/CV.css";
import "../styles/Globals.css";
import SideNav from "../components/SideNav";

export default function CV() {


  return (
    <main className="cv-page">
      {/* ================= BACKGROUND LAYERS ================= */}
      <div className="bg-world-tint" aria-hidden />
      <div className="bg-world-map" aria-hidden />
      <div className="cv-clouds" aria-hidden />
      <div className="cv-bg-overlay" aria-hidden />

      {/* ================= HERO ================= */}
      <header className="cv-hero">
        <p className="cv-eyebrow">ODYSSEY · PROJET ·</p>

        <h1 className="cv-title">
          WIZDLE <br /><span>Cas pratique</span>
        </h1>

        <p className="cv-subtitle">
          Jeu web quotidien · Logique métier · UX immersive.<br />
          Analyse du projet, choix techniques, architecture et retours d’expérience.
        </p>

        </header>

        {/* ================= SIDE NAV (RAIL ODYSSEY) ================= */}
              <SideNav />
        

      {/* ================= GLASS CARD : RETOUR ================= */}
        <div className="cv-glass-zone">
            
    <div className="cv-glass-return">
    <Link to="/projects" className="cv-glass-link">
      ← Retour à Mes Projets
    </Link>
       
            <a
              href="/Cas_pratique_wizdle.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-glass-download"
            >
              Télécharger le cas pratique (PDF)
            </a>
            </div>
            
    </div>


      {/* ================= CV WRAPPER ================= */}
      <section className="cv-wrapper">
        <div className="cv-frame">
          <iframe
            src="/Cas_pratique_wizdle.pdf#toolbar=0&navpanes=0&scrollbar=0"
            title="Cas pratique Wizdle"
            className="cv-iframe"
          />
        </div>
      </section>
     </main>
  );
}
