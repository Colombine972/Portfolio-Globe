import { useNavigate } from "react-router";
import "../styles/NavBar.css";

type NavbarProps = {
  onOpenPassport?: () => void;
};

export default function Navbar({ onOpenPassport }: NavbarProps) {
  const navigate = useNavigate();

  return (
    <header className="hero__nav">
      {/* LEFT */}
      <div className="hero__nav-left" />

      {/* CENTER */}
      <div className="hero__nav-center">
        <button className="hero__navLink" onClick={() => navigate("/skills")}>
          Skills
        </button>
        <button className="hero__navLink" onClick={() => navigate("/projects")}>
          Projects
        </button>

        <button
          className="hero__brand"
          onClick={() => navigate("/")}
          aria-label="Retour à l'accueil"
        >
          <span>Cindy COLOMBINE</span>
        </button>

        <button
          className="hero__navLink"
          onClick={onOpenPassport ?? (() => navigate("/about"))}
        >
          About
        </button>

        <button className="hero__navLink" onClick={() => navigate("/contact")}>
          Contact
        </button>
      </div>

      {/* RIGHT */}
      <div className="hero__nav-right">
        <button
          className="hero__navLink hero__navLink--cta"
          onClick={() => navigate("/cv")}
        >
          CV
        </button>
      </div>
    </header>
  );
}
