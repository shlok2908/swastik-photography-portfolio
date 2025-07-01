import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

// Auto-import all image URLs from folder
const imagesObj = import.meta.glob("../assets/photogrid/*.avif", {
  eager: true,
  query: '?url',
  import: 'default',
});
const photoUrls = Object.values(imagesObj).sort();

const columns = 4;
const rows = 2;
const photosPerSlide = columns * rows;

export default function PhotoGrid() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  // Preload images
  useEffect(() => {
    photoUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  // Auto-slide every 10s
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(2);
    setStartIndex((prev) =>
      prev + rows < photoUrls.length - columns ? prev + 2 : 0
    );
  };

  const prevSlide = () => {
    setDirection(-2);
    setStartIndex((prev) =>
      prev - 1 >= 0 ? prev - 2 : Math.max(photoUrls.length - photosPerSlide, 0)
    );
  };

  const visiblePhotos = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const index = startIndex + c + r * columns;
      if (index < photoUrls.length) {
        visiblePhotos.push(photoUrls[index]);
      }
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
    center: {
      x: 0,
      opacity: 1,
    },
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
          {visiblePhotos.map((url, idx) => (
            <div key={url} className="w-full overflow-hidden rounded">
              <img
                src={url}
                alt={`photo-${startIndex + idx}`}
                className="w-full h-auto object-cover rounded"
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
