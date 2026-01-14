import { useNavigate, useLocation } from "react-router";
import {
  Compass,
  Folder,
  Plane,
  Mail,
  FileText,
} from "lucide-react";

import "../styles/SideNav.css";

type SideNavProps = {
  onOpenPassport?: () => void;
};

const navItems = [
  { label: "Skills", to: "/skills", Icon: Compass },
  { label: "Projects", to: "/projects", Icon: Folder },
  { label: "About", to: "/about-me", Icon: Plane },
  { label: "Contact", to: "/contact", Icon: Mail },
  { label: "CV", to: "/cv", Icon: FileText },
];

export default function SideNav({ onOpenPassport }: SideNavProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="sideNav">
      {navItems
        // ⬇️ on enlève l’item correspondant à la page actuelle
        .filter((item) => item.to !== location.pathname)
        .map(({ label, to, Icon }) => (
          <button
            key={label}
            className="sideNav__item"
            onClick={() => {
  if (label === "About" && onOpenPassport) {
    onOpenPassport();
  } else {
    navigate(to);
  }
}}
            aria-label={label}
            title={label}
          >
            <Icon size={20} />
            <span className="sideNav__label">{label}</span>
          </button>
        ))}
    </nav>
  );
}
