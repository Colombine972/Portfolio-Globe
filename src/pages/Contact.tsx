import { useState } from "react";
import { Link } from "react-router";
import "../styles/Contact.css";

const cards = [
  { title: "Contact", content: "Mes coordonnées et réseaux" },
  { title: "Formulaire", content: "M’envoyer un message" },
  { title: "Calendrier", content: "Planifier un échange" },
];

function Contact() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((i) => (i - 1 + cards.length) % cards.length);
  };

  const next = () => {
    setActiveIndex((i) => (i + 1) % cards.length);
  };

  return (
    <main className="contact-page">
      <div className="contact-bg" />

      <section className="contact-content">
        <h1>Contact</h1>

        <div className="cv-glass-return">
          <Link to="/" className="cv-glass-link">
            ← Retour à la carte
          </Link>
        </div>
      </section>

      {/* ===== CAROUSEL ===== */}
      <section className="glass-carousel">
        <button className="carousel-arrow left" onClick={prev}>
          ‹
        </button>

        <div className="carousel-3d">
          {cards.map((card, index) => {
            const offset = (index - activeIndex + cards.length) % cards.length;

  let transform = "";
  let zIndex = 1;
  let opacity = 0.4;
  let scale = 0.9;

  if (offset === 0) {
    // 🟡 Carte active (devant)
    transform = "translateX(0px) translateZ(120px)";
    zIndex = 3;
    opacity = 1;
    scale = 1;
  } else if (offset === 1) {
    // 👉 Carte suivante (droite, partiellement visible)
    transform = "translateX(140px) translateZ(0)";
    zIndex = 2;
  } else {
    // 👈 Carte précédente (gauche, partiellement visible)
    transform = "translateX(-140px) translateZ(0)";
    zIndex = 2;
  }

            return (
              <article
  key={index}
  className={`glass-card ${
    offset === 0 ? "glass-card--active" : "glass-card--back"
  }`}
  style={{
    transform: `${transform} scale(${scale})`,
    opacity,
    zIndex,
  }}
>
  <h3>{card.title}</h3>
  <p>{card.content}</p>
</article>
            );
          })}
        </div>

        <button className="carousel-arrow right" onClick={next}>
          ›
        </button>
      </section>
    </main>
  );
}

export default Contact;
