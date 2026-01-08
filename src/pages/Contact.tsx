import { useState } from "react";
import { Link } from "react-router";
import "../styles/Contact.css";
import ContactCard from "../components/ContactCard";

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
  {/* ================= HEADER ================= */}
  <header className="card-header">
    {card.type === "contact" && (
      <img src="/glass-contact.png" alt="" className="card-icon" />
    )}

    {card.type === "form" && (
      <img src="/glass-form.png" alt="" className="card-icon" />
    )}

    {card.type === "calendar" && (
      <img src="/glass-calendar.png" alt="" className="card-icon" />
    )}

    <h3 className="card-title">{card.title}</h3>
  </header>

  {/* ================= BODY ================= */}
  <section className="card-body">
    {/* ----- CONTACT ----- */}
    {card.type === "contact" && (
      <>
        {offset === 0 ? (
        <ContactCard />
      ) : (
        <p className="card-placeholder">
          Carte de contact
        </p>
      )}
    </>
  )}

    {/* ----- FORMULAIRE ----- */}
    {card.type === "form" && (
      <>
        <input type="text" placeholder="Votre nom" />
        <input type="email" placeholder="Votre email" />
        <textarea placeholder="Votre message" rows={4} />
      </>
    )}

    {/* ----- CALENDRIER ----- */}
    {card.type === "calendar" && (
      <iframe
        src="https://calendly.com/colombine-cindy/echange-autour-de-mon-cv"
        title="Calendly"
        frameBorder="0"
        className="calendar-frame"
      />
    )}
  </section>

  {/* ================= FOOTER ================= */}
  <footer className="card-footer">
    {card.type === "form" && <button>Envoyer</button>}
  </footer>
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
