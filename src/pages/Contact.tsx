import { useState } from "react";
import { Link } from "react-router";
import "../styles/Contact.css";

type ContactCard = {
  type: "contact" | "form" | "calendar";
  title: string;
};

const cards: ContactCard[] = [
  {
    type: "contact",
    title: "Contact",
  },
  {
    type: "form",
    title: "Formulaire",
  },
  {
    type: "calendar",
    title: "Planifier un rendez-vous",
  },
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
        <div className="cv-glass-return">
          <Link to="/" className="cv-glass-link">
            ← Retour à la carte
          </Link>
        </div>
      </section>

      {/* ===== CAROUSEL ===== */}
      <section className="glass-carousel">
        <div className="carousel-offset">
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
    zIndex,
  }}
>


  <div className="card-header">
  <h3 className="card-title">{card.title}</h3>

  

  {/* ===== CONTENU DYNAMIQUE ===== */}
  {card.type === "contact" && (
    <div className="card-content">
      <img src="/glass-contact.png" alt="Contact" className="card-icon" />
      <p>📧 cindy.colombine@gmail.com</p>
      <p>📞 06 95 69 72 76</p>
      <p>💼 LinkedIn</p>
    </div>
  )}
  </div>

  {card.type === "form" && (
    <div className="card-content">
      <input placeholder="Votre nom" />
      <input placeholder="Votre email" />
      <textarea placeholder="Votre message" />
      <button>Envoyer</button>
    </div>
  )}

  {card.type === "calendar" && (
    <div className="card-content calendar">
      <iframe
        src="https://calendly.com/colombine-cindy/echange-autour-de-mon-cv"
        title="Calendly"
        frameBorder="0"
      />
    </div>
  )}
</article>

            );
          })}
        </div>

        <button className="carousel-arrow right" onClick={next}>
          ›
        </button>
        </div>
      </section>
    </main>
  );
}

export default Contact;
