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

/**
 * ✅ Remplace `heroImgUrl` par ton image (celle qu’on a générée)
 * Exemple :
 *  - public/hero.png  -> "/hero.png"
 *  - src/assets/hero.png -> import heroImgUrl from "../assets/hero.png";
 */
const heroImgUrl = "/globe.png";
const worldMapImg = "/world-map.png";

type NavItem = {
  key: string;
  label: string;
  to: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  angleDeg: number; // position initiale sur l'orbite
};

export default function HeroSection() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const items: NavItem[] = useMemo(
    () => [
      { key: "skills", label: "Skills", to: "/skills", Icon: Code2, angleDeg: 300 },
      { key: "projects", label: "Projects", to: "/projects", Icon: BriefcaseBusiness, angleDeg: 20 },
      { key: "about", label: "About", to: "/about", Icon: Plane, angleDeg: 120 },
      { key: "contact", label: "Contact", to: "/contact", Icon: Mail, angleDeg: 200 },
      { key: "cv", label: "CV", to: "/cv", Icon: FileText, angleDeg: 250 },
    ],
    []
  );

  const orbitDuration = reduceMotion ? 0 : 26;

  return (
    <section className="hero">
      {/* ✅ Fallback header */}
      <header className="hero__nav">
        <button className="hero__navLink" onClick={() => navigate("/")}>Home</button>
        <button className="hero__navLink" onClick={() => navigate("/skills")}>Skills</button>
        <button className="hero__navLink" onClick={() => navigate("/projects")}>Projects</button>
        <button className="hero__navLink" onClick={() => navigate("/about")}>About</button>
        <button className="hero__navLink" onClick={() => navigate("/contact")}>Contact</button>
        <button className="hero__navLink hero__navLink--cta" onClick={() => navigate("/cv")}>CV</button>
      </header>

      <div className="hero__grid">
        {/* LEFT */}
        <div className="hero__copy">
          <p className="hero__kicker">ODYSSEY • Developer Journey</p>

          <h1 className="hero__title">
            Bienvenue dans <br />mon parcours de<span className="hero__accent"> Développeuse Web </span>
          
          </h1>

          <p className="hero__subtitle">
            Je conçois des expériences web modernes, du design UI à l’API.
          </p>

          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary" onClick={() => navigate("/projects")}>
              Voir mes projets <ArrowRight size={18} />
            </button>

            <button className="hero__btn hero__btn--ghost" onClick={() => navigate("/contact")}>
              Me contacter
            </button>
          </div>

          <div className="hero__chips">
            <span className="chip">React</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Express</span>
            <span className="chip">MySQL</span>
            <span className="chip">Figma</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero__visual">
          <img
    src={worldMapImg}
    alt=""
    className="hero__map"
    aria-hidden
  />
          <div className="hero__visualFrame">
            {/* Glow */}
            <div className="hero__glow" />

            {/* Globe image */}
            <motion.img
              src={heroImgUrl}
              alt="Developer journey hero"
              className="hero__img"
              initial={{ y: 0,}}
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
              draggable={false}
            />

            {/* Orbit ring */}
            <div className="orbit">
              <motion.div
                className="orbit__spinner"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: orbitDuration, repeat: Infinity, ease: "linear" }
                }
              >
                {items.map((item) => (
                  <OrbitIcon
                    key={item.key}
                    item={item}
                    onClick={() => navigate(item.to)}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          <p className="hero__hint">
            Survole les icônes pour voir les sections • Clique pour naviguer
          </p>
        </div>
      </div>
    </section>
  );
}

function OrbitIcon({
  item,
  onClick,
}: {
  item: NavItem;
  onClick: () => void;
}) {
  const { Icon } = item;

  return (
    <motion.button
      type="button"
      className="orbitIcon"
      style={
        {
          "--angle": `${item.angleDeg}deg`,
        } as React.CSSProperties
      }
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.98 }}
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
