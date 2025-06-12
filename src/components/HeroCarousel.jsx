import { useState, useEffect } from "react";

// Auto-import all images from the hero folder
const imagesObj = import.meta.glob("../assets/hero/*.{jpg,jpeg,png,webp}", { eager: true, as: "url" });
const images = Object.values(imagesObj).sort();

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (images.length === 0) return null;

  return (
    <div className="w-full max-w-[960px] aspect-[3/2] mx-auto overflow-hidden rounded">
      <img
        src={images[index]}
        alt={`slide-${index}`}
        className="w-full h-full object-cover transition duration-700"
      />
    </div>
  );
}

export default HeroCarousel;
