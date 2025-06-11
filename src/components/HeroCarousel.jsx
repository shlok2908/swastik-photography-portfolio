import { useState, useEffect } from "react";

// Auto-import all images from the hero folder
const imagesObj = import.meta.glob("../assets/hero/*.{jpg,jpeg,png,webp}", { eager: true, as: "url" });
// Sort images by filename for consistent order
const images = Object.values(imagesObj).sort();

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="w-full max-w-5xl mx-auto">
      <img
        src={images[index]}
        alt={`slide-${index}`}
        className="w-full h-[400px] object-contain transition duration-700 rounded bg-[#f8f5f0]"
      />
    </div>
  );
}

export default HeroCarousel;
