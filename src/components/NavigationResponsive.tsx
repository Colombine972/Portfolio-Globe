import { useEffect, useState } from "react";
import Navbar from "./NavBar";
import SideNav from "./SideNav";
import MobileMenu from "./MobileMenu";

type Props = {
  onOpenPassport?: () => void;
};

export default function NavigationResponsive({ onOpenPassport }: Props) {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* =============================
     RÈGLES DE NAVIGATION
  ============================== */

  // 📱 Mobile + Tablet (≤ 1023px) → Menu toggle
  if (width <= 1023) {
    return <MobileMenu onOpenPassport={onOpenPassport} />;
  }

  // 💻 Tablet large / petit laptop (1024–1279px) → SideNav
  if (width <= 1279) {
    return <SideNav onOpenPassport={onOpenPassport} />;
  }

  // 🖥️ Desktop (≥ 1280px) → Navbar complète
  return <Navbar onOpenPassport={onOpenPassport} />;
}
