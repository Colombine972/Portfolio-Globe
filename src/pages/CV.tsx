import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import Modal from "../components/Modal";
import ContactForm from "../components/ContactForm";
import "../styles/CV.css";
import "../styles/Globals.css";

export default function CV() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<ReactNode | null>(null);

  const openPopup = (content: ReactNode) => {
    setPopupContent(content);
    setIsOpen(true);
  };

  return (
    <main className="cv-page">
      {/* ================= BACKGROUND LAYERS ================= */}
      <div className="bg-world-tint" aria-hidden />
      <div className="bg-world-map" aria-hidden />
      <div className="cv-clouds" aria-hidden />
      <div className="cv-bg-overlay" aria-hidden />

      {/* ================= HERO ================= */}
      <header className="cv-hero">
        <p className="cv-eyebrow">ODYSSEY · DOCUMENT DE VOYAGE</p>

        <h1 className="cv-title">
          Document de <span>Voyage</span>
        </h1>

        <p className="cv-subtitle">
          Mon parcours professionnel, compétences et expériences
        </p>

        </header>

      {/* ================= GLASS CARD : RETOUR ================= */}
        <div className="cv-glass-zone">
  <div className="cv-glass-return">
    <Link to="/" className="cv-glass-link">
      ← Retour à la carte
    </Link>
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

      {/* ================= CTA ================= */}
      <section className="cv-cta">
        <div className="cv-cta-card">
          <h3>Envie d’échanger ?</h3>
          <p>
            Télécharger mon CV, planifier un rendez-vous ou poser une question.
          </p>

          <div className="cv-cta-actions">
            <a
              href="/CV_Cindy_COLOMBINE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-btn"
            >
              Télécharger le CV
            </a>

            <button
              className="cv-btn cv-btn-primary"
              onClick={() =>
                openPopup(
                  <iframe
                    src="https://calendly.com/colombine-cindy/echange-autour-de-mon-cv"
                    title="Calendly"
                    className="cv-calendly"
                  />
                )
              }
            >
              Échange de 15 min autour de mon CV
            </button>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {popupContent}
      </Modal>
    </main>
  );
}
