import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router";

import "../styles/MobileMenu.css";

type Props = {
  onOpenPassport?: () => void;
};

export default function MobileMenu({ onOpenPassport }: Props) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const go = (to: string) => {
    setOpen(false);
    navigate(to);
  };

  return (
    <>
      {/* TOGGLE BUTTON */}
      <button
        className="mobileMenu__toggle"
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
      >
        <Menu size={22} />
      </button>

      {/* OVERLAY */}
      {open && (
        <div className="mobileMenu__overlay" onClick={() => setOpen(false)} />
      )}

      {/* DRAWER */}
      <aside className={`mobileMenu ${open ? "is-open" : ""}`}>
        <button
          className="mobileMenu__close"
          onClick={() => setOpen(false)}
          aria-label="Fermer le menu"
        >
          <X size={22} />
        </button>

        <nav className="mobileMenu__nav">
          <button onClick={() => go("/skills")}>Skills</button>
          <button onClick={() => go("/projects")}>Projects</button>
        <button onClick={() => go("/about")}>About</button>
          <button onClick={() => go("/contact")}>Contact</button>
          <button onClick={() => go("/cv")}>CV</button>
        </nav>
      </aside>
    </>
  );
}
