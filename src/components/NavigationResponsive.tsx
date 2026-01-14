import { useEffect, useState } from "react";
import Navbar from "./NavBar";
import SideNav from "./SideNav";
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

  if (width <= 767) {
    return <MobileMenu />;
  }

  if (width <= 1080) {
    return <SideNav />;
  }

  return <Navbar onOpenPassport={onOpenPassport} />;
}
