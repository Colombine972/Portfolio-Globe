import { useState } from "react";
import "../styles/ContactCalendarCard.css";

export default function ContactCalendarCard() {
  const [key, setKey] = useState(0);

  const resetCalendar = () => {
    setKey((k) => k + 1); // force le re-mount
  };

  return (
    <div className="glass-card calendar-card">
      {/* Bouton fermer */}
      <button
        className="calendar-close"
        onClick={resetCalendar}
        aria-label="Revenir au calendrier"
      >
        ✕
      </button>

      <iframe
        key={key}
        src="https://calendly.com/colombine-cindy/echange-autour-de-mon-cv"
        title="Calendly"
        loading="lazy"
      />
    </div>
  );
}
