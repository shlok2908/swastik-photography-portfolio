import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

// Import thumbnails and full images from folders
const thumbs = import.meta.glob("../assets/photogrid/thumbs/*.avif", {
  eager: true,
  query: "?url",
  import: "default",
});

const fulls = import.meta.glob("../assets/photogrid/full/*.avif", {
  eager: true,
  query: "?url",
  import: "default",
});


// Ensure both are sorted by filename
const thumbUrls = Object.entries(thumbs).sort().map(([, url]) => url);
const fullUrls = Object.entries(fulls).sort().map(([, url]) => url);

const columns = 4;
const rows = 2;
const photosPerSlide = columns * rows;

export default function PhotoGrid() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState({});

  // Preload upcoming full-size images for smoother transitions
useEffect(() => {
  const preloadIndexes = [];

  // Look ahead by 1 slide (i.e., 8 images)
  const nextStart = (startIndex + photosPerSlide) % fullUrls.length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const idx = nextStart + c + r * columns;
      if (idx < fullUrls.length) preloadIndexes.push(idx);
    }
  }

  preloadIndexes.forEach((i) => {
    const img = new Image();
    img.src = fullUrls[i];
  });
}, [startIndex]);


  // Auto-slide every 7 seconds
useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 7000); // ← 7000ms = 7s

  return () => clearInterval(interval); // Cleanup on unmount
}, []);


  const nextSlide = () => {
    setDirection(2);
    setStartIndex((prev) =>
      prev + rows < fullUrls.length - columns ? prev + 2 : 0
    );
  };

  const prevSlide = () => {
    setDirection(-2);
    setStartIndex((prev) =>
      prev - 1 >= 0 ? prev - 2 : Math.max(fullUrls.length - photosPerSlide, 0)
    );
  };

  const visibleIndexes = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const index = startIndex + c + r * columns;
      if (index < fullUrls.length) visibleIndexes.push(index);
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div
      {...handlers}
      ref={containerRef}
      className="relative max-w-6xl mx-auto px-4 py-10 overflow-hidden"
    >
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-10 right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
      >
        ❯
      </button>

      {/* Grid with Animation */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={startIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4 }}
          className="grid grid-cols-4 grid-rows-2 gap-2"
        >
          {visibleIndexes.map((i) => (
            <div key={fullUrls[i]} className="w-full overflow-hidden rounded relative">
              <img
                src={thumbUrls[i]}
                alt={`thumb-${i}`}
                className="w-full h-auto object-cover rounded blur-sm scale-105 absolute inset-0"
              />
              <img
                src={fullUrls[i]}
                alt={`photo-${i}`}
                loading="lazy"
                onLoad={() => setLoaded((prev) => ({ ...prev, [i]: true }))}
                className={`w-full h-auto object-cover rounded transition-opacity duration-500 ${
                  loaded[i] ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
