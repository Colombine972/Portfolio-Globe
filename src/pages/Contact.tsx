import { useEffect, useState } from "react";
import { Link } from "react-router";
import "../styles/Contact.css";

function Contact() {
  /* ===============================
     CAROUSEL STATE
  =============================== */
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 0,
      title: "Contact",
      content: "Mes coordonnées & réseaux",
    },
    {
      id: 1,
      title: "Formulaire",
      content: "M’envoyer un message",
    },
    {
      id: 2,
      title: "Calendrier",
      content: "Planifier un échange",
    },
  ];

  /* ===============================
     AUTO ROTATION
  =============================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <main className="contact-page">
      {/* ================= BACKGROUND ================= */}
      <div className="contact-bg" aria-hidden />

      {/* ================= HEADER ================= */}
      <section className="contact-content">
        <h1 className="contact-title">Contact</h1>

        <div className="cv-glass-return">
          <Link to="/" className="cv-glass-link">
            ← Retour à la carte
          </Link>
        </div>
      </section>

      {/* ================= GLASS CAROUSEL ================= */}
      <section className="glass-carousel">
        <div className="glass-track">
          {cards.map((card, index) => {
            const offset = index - activeIndex;

            return (
              <article
                key={card.id}
                className="glass-card"
                style={{
                  transform: `translateX(${offset * 320}px) scale(${
                    offset === 0 ? 1 : 0.9
                  })`,
                  opacity: offset === 0 ? 1 : 0.55,
                  zIndex: offset === 0 ? 2 : 1,
                  pointerEvents: offset === 0 ? "auto" : "none",
                  transition: "all 0.6s ease",
                }}
              >
                <h2 className="glass-card-title">{card.title}</h2>
                <p className="glass-card-text">{card.content}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Contact;
