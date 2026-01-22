import { useEffect, useState } from "react";
import Navbar from "./NavBar";
import MobileMenu from "./MobileMenu";

type Props = {
  onOpenPassport?: () => void;
};

export default function NavigationResponsive({ onOpenPassport }: Props) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  

  /* =============================
     RÈGLES DE NAVIGATION
  ============================== */

  
  // 📱 Mobile + Tablet → menu toggle
  if (width <= 1023) {
    return <MobileMenu onOpenPassport={onOpenPassport} />;
  }

  // 💻 Tablet paysage (ex: 1024x768) + Desktop
  return <Navbar onOpenPassport={onOpenPassport} />;
}


