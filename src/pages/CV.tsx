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
        <p className="cv-eyebrow">ODYSSEY · DOCUMENT DE VOYAGE ·</p>

        <h1 className="cv-title">
          DEVELOPPEUR WEB <br /><span>FULL STACK</span>
        </h1>

        <p className="cv-subtitle">
          Mon parcours professionnel, compétences et expériences
        </p>

        </header>

        {/* ================= SIDE NAV (RAIL ODYSSEY) ================= */}
              <SideNav />
        

      {/* ================= GLASS CARD : RETOUR ================= */}
        <div className="cv-glass-zone">
            
    <div className="cv-glass-return">
    <Link to="/" className="cv-glass-link">
      ← Retour à Mon ODYSSEE
    </Link>
       
            <a
              href="/CV_Cindy_COLOMBINE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-glass-download"
            >
              Télécharger le CV
            </a>
            </div>
            
    </div>


      {/* ================= CV WRAPPER ================= */}
      <section className="cv-wrapper">
        <div className="cv-frame">
          <iframe
            src="/CV_Cindy_COLOMBINE.pdf#toolbar=0&navpanes=0&scrollbar=0"
            title="CV de Cindy Colombine"
            className="cv-iframe"
          />
        </div>
      </section>
     </main>
  );
}
