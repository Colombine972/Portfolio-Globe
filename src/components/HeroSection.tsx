import { useMemo, useState } from "react";
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
import Modal from "../components/Modal";
import "../styles/HeroSection.css";

console.log("HeroSection render");
const heroImgUrl = "/globe.png";
const worldMapImg = "/world-map.png";

type NavItem = {
  key: string;
  label: string;
  to: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

type HeroSectionProps = {
  onOpenPassport: () => void;
}

export default function HeroSection({ onOpenPassport }: HeroSectionProps) {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  // ✅ STATE DE LA MODAL PASSEPORT
  const [isPassportOpen, setIsPassportOpen] = useState(false);

  const items: NavItem[] = useMemo(
    () => [
      { key: "skills", label: "Skills", to: "/skills", Icon: Code2 },
      { key: "projects", label: "Projects", to: "/projects", Icon: BriefcaseBusiness },
      { key: "about", label: "About", to: "/about", Icon: Plane }, // 🛂 ouvre la modal
      { key: "contact", label: "Contact", to: "/contact", Icon: Mail },
      { key: "cv", label: "CV", to: "/cv", Icon: FileText },
    ],
    []
  );

  const orbitDuration = reduceMotion ? 0 : 26;

  return (
    <section className="hero">
      {/* HEADER */}
      <header className="hero__nav">
        <button className="hero__navLink" onClick={() => navigate("/")}>Home</button>
        <button className="hero__navLink" onClick={() => navigate("/skills")}>Skills</button>
        <button className="hero__navLink" onClick={() => navigate("/projects")}>Projects</button>
        <button className="hero__navLink" onClick={() => setIsPassportOpen(true)}>About</button>
        <button className="hero__navLink" onClick={() => navigate("/contact")}>Contact</button>
        <button className="hero__navLink hero__navLink--cta" onClick={() => navigate("/cv")}>CV</button>
      </header>

      <div className="hero__grid">
        {/* LEFT */}
        <div className="hero__copy">
          <p className="hero__kicker">ODYSSEY • Developer Journey</p>

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
          <img src={worldMapImg} alt="" className="hero__map" aria-hidden />

          <div className="hero__visualFrame">
            <div className="hero__glow" />

            <motion.img
              src={heroImgUrl}
              alt="Developer journey hero"
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
                transition={{ duration: orbitDuration, repeat: Infinity, ease: "linear" }}
              >
                {items.map((item, index) => (
                  <OrbitIcon
                    key={item.key}
                    item={item}
                    angleDeg={index * (360 / items.length)}
                    onClick={() => {
                      if (item.key === "about") {
                        onOpenPassport(); // 🛂 ouvre la modal
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

      {/* ✅ MODAL PASSEPORT */}
      <Modal
        isOpen={isPassportOpen}
        onClose={() => setIsPassportOpen(false)}
      >
        <div className="passport-wrapper">
          <img
            src="/images/developer-passport.png"
            alt="Developer Passport"
            className="passport-image"
          />

          <button
            className="passport-cta"
            onClick={() => {
              setIsPassportOpen(false);
              // 👉 plus tard : animation nuage + navigate("/about-cindy")
            }}
          >
            Découvrir mon parcours
          </button>
        </div>
      </Modal>
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
