import { useState } from "react";
import { useNavigate } from "react-router";

import HeroSection from "./components/HeroSection";
import Modal from "./components/Modal";

export default function Home() {

  const [isPassportOpen, setIsPassportOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <HeroSection onOpenPassport={() => setIsPassportOpen(true)} />

      <Modal isOpen={isPassportOpen} onClose={() => setIsPassportOpen(false)}>
        <div className="passport-wrapper">
          <img src="/passport.png" className="passport-image" />

          <button
            className="passport-cta"
            onClick={() => {
              setIsPassportOpen(false);
              navigate("/about-me");
            }}
          >
            Découvrir mon parcours
          </button>
        </div>
      </Modal>
    </>
  );
}

