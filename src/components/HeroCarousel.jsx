import { useState, useEffect } from "react";

// Import only hero images
const imagesObj = import.meta.glob("../assets/hero/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});
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
    <div className="w-full max-w-[960px] aspect-[3/2] mx-auto">
      <img
        src={images[index]}
        alt={`slide-${index}`}
        className="w-full h-full object-cover transition duration-700"
        loading={index === 0 ? "eager" : "lazy"}
      />
    </div>
  );
}

export default HeroCarousel;
