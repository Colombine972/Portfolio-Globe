import { useMemo } from "react";
import { useNavigate } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  BriefcaseBusiness,
  Plane,
  Mail,
  FileText,
  ArrowRight,
} from "lucide-react";

import "../styles/HeroSection.css";
import "../styles/Globals.css";

const heroImgUrl = "/globe.png";

type NavItem = {
  key: string;
  label: string;
  to: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

type HeroSectionProps = {
  onOpenPassport: () => void;
};

export default function HeroSection({ onOpenPassport }: HeroSectionProps) {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();



  const items: NavItem[] = useMemo(
    () => [
      { key: "skills", label: "Skills", to: "/skills", Icon: Code2 },
      { key: "projects", label: "Projects", to: "/projects", Icon: BriefcaseBusiness },
      { key: "about", label: "About", to: "/about", Icon: Plane }, // ouvre la modal
      { key: "contact", label: "Contact", to: "/contact", Icon: Mail },
      { key: "cv", label: "CV", to: "/cv", Icon: FileText },
    ],
    []
  );

  const orbitDuration = reduceMotion ? 0 : 26;

  return (
    <section className="hero">
      {/* ================= BACKGROUND GLOBAL ================= */}
      <div className="bg-world-tint" aria-hidden />
      <div className="bg-world-map" aria-hidden />

      {/* ================= NAV ================= */}
      <header className="hero__nav">

  {/* LEFT (vide ou futur logo) */}
  <div className="hero__nav-left" />

  {/* CENTER */}
  <div className="hero__nav-center">
    <button className="hero__navLink" onClick={() => navigate("/skills")}>
      Skills
    </button>
    <button className="hero__navLink" onClick={() => navigate("/projects")}>
      Projects
    </button>

    <p className="hero__brand">
      <span>Cindy COLOMBINE</span>
    </p>

    <button className="hero__navLink" onClick={onOpenPassport}>
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
      

      {/* ================= GRID ================= */}
      <div className="hero__grid">
        {/* LEFT */}
        <div className="hero__copy">
          <p className="hero__kicker">MON ODYSSEY </p>

          <h1 className="hero__title">
            Bienvenue dans <br />
            mon parcours de
            <span className="hero__accent"> Développeuse Web </span>
          </h1>

          <p className="hero__subtitle">
            Je conçois des expériences web modernes, du design UI à l’API.
          </p>

          <div className="hero__actions">
            <button
              className="hero__btn hero__btn--primary"
              onClick={() => navigate("/projects")}
            >
              Voir mes projets <ArrowRight size={18} />
            </button>

            <button
              className="hero__btn hero__btn--ghost"
              onClick={() => navigate("/contact")}
            >
              Me contacter
            </button>
          </div>

        </div>

        {/* RIGHT */}
        <div className="hero__visual">
          <div className="hero__visualFrame">
            <div className="hero__glow" />

            {/* GLOBE */}
            <motion.img
              src={heroImgUrl}
              alt="Developer journey globe"
              className="hero__img"
              initial={{ y: 0 }}
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }
              draggable={false}
            />

            {/* ORBIT */}
            <div className="orbit">
              <motion.div
                className="orbit__spinner"
                animate={{ rotate: 360 }}
                transition={{
                  duration: orbitDuration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {items.map((item, index) => (
                  <OrbitIcon
                    key={item.key}
                    item={item}
                    angleDeg={index * (360 / items.length)}
                    onClick={() => {
                      if (item.key === "about") {
                        onOpenPassport();
                      } else {
                        navigate(item.to);
                      }
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

   
    </section>
  );
}

function OrbitIcon({
  item,
  angleDeg,
  onClick,
}: {
  item: NavItem;
  angleDeg: number;
  onClick: () => void;
}) {
  const { Icon } = item;

  return (
    <motion.button
      type="button"
      className="orbitIcon"
      style={{ "--angle": `${angleDeg}deg` } as React.CSSProperties}
      onClick={onClick}
      aria-label={item.label}
      title={item.label}
    >
      <span className="orbitIcon__inner">
        <Icon size={18} className="orbitIcon__svg" />
      </span>
      <span className="orbitIcon__label">{item.label}</span>
    </motion.button>
  );
}
