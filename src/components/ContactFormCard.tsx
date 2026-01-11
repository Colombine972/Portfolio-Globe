import "../styles/Contact.css"

export default function ContactFormCard() {
  return (
    <div className="glass-card">
      <h3>Formulaire</h3>
      <input placeholder="Nom" />
      <input placeholder="Email" />
      <textarea placeholder="Message" rows={4} />
      <button>Envoyer</button>
    </div>
  );
}
