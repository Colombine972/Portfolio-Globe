import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Modal from "./components/Modal";

export default function Home() {
  const [isPassportOpen, setIsPassportOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenPassport={() => {
    setIsPassportOpen(true);
  }}
/>

      <Modal
        isOpen={isPassportOpen} onClose={() => setIsPassportOpen(false)}>
  <div className="passport-wrapper">
    <img
      src="/passport.png"
      alt="Developer Passport"
      className="passport-image"
    />

    <button
      className="passport-cta"
      onClick={() => {
        setIsPassportOpen(false);
        // ici plus tard → animation nuage + navigate("/about-cindy")
      }}
    >
      Découvrir mon parcours
    </button>
  </div>
</Modal>
    </>
  );
}

