import ContactGlassCard from "../components/ContactGlassCard";
import "../styles/Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      {/* Background */}
      <div className="contact-bg" />

      {/* Content */}
      <section className="contact-content">
        <ContactGlassCard
          linkedinUrl="https://www.linkedin.com/in/ton-profil"
        />
      </section>
    </main>
  );
}

export default Contact;
