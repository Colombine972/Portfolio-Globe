import { useNavigate, useLocation } from "react-router";
import { motion } from "framer-motion";
import "../styles/NavBar.css";

type NavbarProps = {
  onOpenPassport?: () => void;
};

export default function Navbar({ onOpenPassport }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="hero__nav">
      {/* LEFT */}
      <div className="hero__nav-left" />

      {/* CENTER */}
      <div className="hero__nav-center">
        {/* SKILLS */}
        <button
          className="hero__navLink"
          onClick={() => navigate("/skills")}
        >
          <span className="nav-item">
            Skills
            {isActive("/skills") && <NavUnderline />}
          </span>
        </button>

        {/* PROJECTS */}
        <button
          className="hero__navLink"
          onClick={() => navigate("/projects")}
        >
          <span className="nav-item">
            Projets
            {isActive("/projects") && <NavUnderline />}
          </span>
        </button>

        {/* BRAND */}
        <button
          className="hero__brand"
          onClick={() => navigate("/")}
          aria-label="Retour à l'accueil"
        >
          <span>Cindy COLOMBINE</span>
        </button>

        {/* ABOUT */}
        <button
          className="hero__navLink"
          onClick={onOpenPassport ?? (() => navigate("/about"))}
        >
          <span className="nav-item">
            About
            {isActive("/about") && <NavUnderline />}
          </span>
        </button>

        {/* CONTACT */}
        <button
          className="hero__navLink"
          onClick={() => navigate("/contact")}
        >
          <span className="nav-item">
            Contact
            {isActive("/contact") && <NavUnderline />}
          </span>
        </button>
      </div>

      {/* RIGHT */}
      <div className="hero__nav-right">
        <button
          className="hero__navLink hero__navLink--cta"
          onClick={() => navigate("/cv")}
        >
          <span className="nav-item">
            CV
            {isActive("/cv") && <NavUnderline />}
          </span>
        </button>
      </div>
    </header>
  );
}

/* ===== TRAIT ANIMÉ ===== */
function NavUnderline() {
  return (
    <motion.div
      layoutId="nav-underline"
      className="nav-underline"
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
      }}
    />
  );
}
