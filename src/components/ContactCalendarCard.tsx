import "../styles/Contact.css"

export default function ContactCalendarCard() {
  return (
    <div className="glass-card">
      <iframe
        src="https://calendly.com/ton-lien"
        title="Calendly"
        frameBorder="0"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
