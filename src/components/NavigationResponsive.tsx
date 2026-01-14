import { useEffect, useState } from "react";
import Navbar from "./NavBar";
import SideNav from "./SideNav";

type Props = {
  onOpenPassport?: () => void;
};

export default function NavigationResponsive({ onOpenPassport }: Props) {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 1080
  );

  useEffect(() => {
    const onResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1080);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobileOrTablet ? (
    <SideNav />
  ) : (
    <Navbar onOpenPassport={onOpenPassport} />
  );
}
