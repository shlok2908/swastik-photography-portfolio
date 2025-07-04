import { useState, useEffect } from "react";

// Auto-import all hero images
const imagesObj = import.meta.glob("../assets/hero/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});
const allImageUrls = Object.values(imagesObj).sort();

function HeroCarousel() {
  const [loadedImages, setLoadedImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    allImageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        if (isMounted) {
          setLoadedImages((prev) => [...prev, url]);
        }
      };
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (loadedImages.length < 2) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % loadedImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [loadedImages]);

  if (loadedImages.length === 0) {
    return (
      <div className="w-full max-w-[960px] aspect-[3/2] mx-auto bg-gray-200 animate-pulse" />
    );
  }

  return (
    <div className="w-full max-w-[960px] aspect-[3/2] mx-auto">
      <img
        src={loadedImages[index]}
        alt={`slide-${index}`}
        className="w-full h-full object-cover transition duration-700"
      />
    </div>
  );
}

export default HeroCarousel;
