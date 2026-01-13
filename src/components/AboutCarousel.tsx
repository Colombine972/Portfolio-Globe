import { useEffect, useState } from "react";
import "../styles/AboutCaroussel.css";

const images = [
  "/croquis-cindy.png",
  "/cindy-3.jpg",
  "/cindy-4.PNG",
];

export default function AboutCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-carousel">
      <div className="carousel-images">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Portrait"
            className={`carousel-image ${i === index ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
