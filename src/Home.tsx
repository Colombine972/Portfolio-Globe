import { useState } from "react";
import { useNavigate } from "react-router";

import HeroSection from "./pages/HeroSection";
import Modal from "./components/Modal";

export default function Home() {
  const [isPassportOpen, setIsPassportOpen] = useState(false);
  const navigate = useNavigate();

  const openPassportModal = () => {
    setIsPassportOpen(true);
  };

  const closePassportModal = () => {
    setIsPassportOpen(false);
  };

  return (
    <>
      {/* HERO */}
      <HeroSection onOpenPassport={openPassportModal} />

      {/* PASSPORT MODAL */}
      <Modal isOpen={isPassportOpen} onClose={closePassportModal}>
        <div className="passport-wrapper">
          <img
            src="/passport.png"
            alt="Passeport ODYSSEY"
            className="passport-image"
          />

          <button
            className="passport-cta"
            onClick={() => {
              closePassportModal();
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
