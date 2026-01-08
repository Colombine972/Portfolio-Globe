import "../styles/ContactCard.css";

export default function ContactCard() {
  return (
    <article className="contact-glass-card">
      {/* Header */}
      <header className="contact-header">
        <img
          src="/glass-contact.png"
          alt="Contact illustration"
          className="contact-illustration"
        />
        <h3>Contact</h3>
      </header>

      {/* Content */}
      <ul className="contact-list">
        <li>
          <img src="/assets/icons/mail.svg" alt="" />
          <span>cindy.colombine@gmail.com</span>
        </li>

        <li>
          <img src="/assets/icons/phone.svg" alt="" />
          <span>06 95 69 72 76</span>
        </li>

        <li>
          <img src="/assets/icons/linkedin.svg" alt="" />
          <span>LinkedIn</span>
        </li>
      </ul>

      {/* Footer */}
      <footer className="contact-footer">
        <p>
          &lt;&lt;DEV&lt;CINDY&lt;&lt;COLOMBINE&lt;&lt;HTML&lt;CSS&lt;JS
          <br />
          REACTNODEMYSQLGITHUB2023&lt;&lt;&lt;
        </p>
      </footer>
    </article>
  );
}
