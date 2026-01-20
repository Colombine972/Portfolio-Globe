import { useState } from "react";
import { useNavigate } from "react-router";
import ContactCard from "../components/ContactCard";
import ContactFormCard from "../components/ContactFormCard";
import ContactCalendarCard from "../components/ContactCalendarCard";
import "../styles/Contact.css";

const cards = ["contact", "form", "calendar"] as const;

function Contact() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + cards.length) % cards.length);

  const next = () =>
    setActiveIndex((i) => (i + 1) % cards.length);

  const isCalendar = cards[activeIndex] === "calendar";

  const navigate = useNavigate();


  return (
    <main className="contact-page">
      <div className="contact-bg" />

      <section className="contact-content">
        <div className="carousel-wrapper">
        <button className="carousel-arrow left" onClick={prev}>
          ‹
        </button>

        <div className={`carousel-3d ${isCalendar ? "is-calendar" : ""}`}>
          {cards.map((type, index) => {
            const offset =
              (index - activeIndex + cards.length) % cards.length;

            let transform = "";
            let zIndex = 1;
            let opacity = 0.4;
            let scale = 0.9;

            if (offset === 0) {
              transform = "translateX(0) translateZ(120px)";
              zIndex = 3;
              opacity = 1;
              scale = 1;
            } else if (offset === 1) {
              transform = "translateX(180px)";
              zIndex = 2;
            } else {
              transform = "translateX(-180px)";
              zIndex = 2;
            }

            return (
              <div
                key={type}
                className="carousel-card"
                style={{
                  transform: `${transform} scale(${scale})`,
                  zIndex,
                  opacity,
                }}
              >
                {type === "contact" && (
                  <ContactCard />
                )}
                {type === "form" && <ContactFormCard />}
                {type === "calendar" && <ContactCalendarCard />}
              </div>
            );
          })}
        </div>

        <button className="carousel-arrow right" onClick={next}>
          ›
        </button>
        </div>
        <div className="projects-right-cta">

  <button
    className="btn-return-odyssey"
    onClick={() => navigate("/")}
  >
    ✈️ Retour à mon ODYSSEY
  </button>
</div>
      </section>
    </main>
  );
}

export default Contact;
