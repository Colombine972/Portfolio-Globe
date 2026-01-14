import { useEffect, useState } from "react";
import Navbar from "./NavBar";
import SideNav from "./SideNav";
import MobileMenu from "./MobileMenu";

type Props = {
  onOpenPassport?: () => void;
};

export default function NavigationResponsive({ onOpenPassport }: Props) {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const onResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { width, height } = viewport;
  const isPortrait = height > width;

  /* =============================
     RÈGLES DE NAVIGATION
  ============================== */

  // 📱 Mobile
  if (width <= 767) {
    return <MobileMenu onOpenPassport={onOpenPassport} />;
  }

  // 📲 Tablet portrait (ex: 768x1024)
  if (width <= 1080 && isPortrait) {
    return <SideNav onOpenPassport={onOpenPassport} />;
  }

  // 💻 Tablet paysage (ex: 1024x768) + Desktop
  return <Navbar onOpenPassport={onOpenPassport} />;
}
