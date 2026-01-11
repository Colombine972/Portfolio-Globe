import "../styles/ContactCard.css";

type Props = {
  email?: string;
  phone?: string;
  linkedinLabel?: string;
};

export default function ContactGlassCard({
  email = "cindy.colombine@gmail.com",
  phone = "06 95 69 72 76",
  linkedinLabel = "LinkedIn",
}: Props) {
  return (
    <article className="od-card">
      {/* Header */}
      <header className="od-card__header">
        <img
          src="/glass-contact.png"
          alt=""
          className="od-card__icon"
          draggable={false}
        />
        <h3 className="od-card__title">Contact</h3>
      </header>

      {/* Body */}
      <section className="od-card__body">
        <a className="od-row" href={`mailto:${email}`}>
          <span className="od-row__icon" aria-hidden>
            ✉️
          </span>
          <span className="od-row__text">{email}</span>
        </a>

        <a className="od-row" href={`tel:${phone.replace(/\s/g, "")}`}>
          <span className="od-row__icon" aria-hidden>
            📞
          </span>
          <span className="od-row__text">{phone}</span>
        </a>

        <a
          className="od-row"
          href="https://www.linkedin.com/in/cindy-colombine-devweb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="od-row__icon" aria-hidden>
            💼
          </span>
          <span className="od-row__text">{linkedinLabel}</span>
        </a>
      </section>

      {/* Footer */}
      <footer className="od-card__footer">
  <p>
    {"<<DEV<CINDY<<COLOMBINE<<HTML<CSS<JS"}
    <br />
    {"REACT<NODE<MYSQL<GITHUB<2026<<<"}
  </p>
</footer>
    </article>
  );
}
