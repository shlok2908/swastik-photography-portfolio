import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Auto-import all AVIF images from the photogrid folder
const imagesObj = import.meta.glob("../assets/photogrid/*.avif", { eager: true, as: "url" });
const photoUrls = Object.values(imagesObj).sort();

function PhotoGrid() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const photosPerPage = 12;
  const totalPages = Math.ceil(photoUrls.length / photosPerPage);
  const showNavigation = photoUrls.length > photosPerPage;

  // Handle image loading
  const handleImageLoad = (url) => {
    setLoadedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(url);
      return newSet;
    });
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!showNavigation) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 10000);
    return () => clearInterval(timer);
  }, [totalPages, showNavigation]);

  const handlePrevClick = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNextClick = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const startIndex = currentPage * photosPerPage;
  const visiblePhotos = photoUrls.slice(startIndex, startIndex + photosPerPage);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 500 : -500, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -500 : 500, opacity: 0 })
  };

  return (
    <div className="relative max-w-6xl mx-auto px-2 sm:px-4 my-6 sm:my-10 overflow-hidden">
      {showNavigation && (
        <>
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
            aria-label="Previous photos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
            aria-label="Next photos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      <div className="w-full h-full">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.3 }}
            className="grid grid-cols-4 gap-2"
            style={{ minHeight: 0 }}
          >
            {visiblePhotos.map((url, idx) => (
              <div key={url} className="relative aspect-square">
                {!loadedImages.has(url) && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
                )}
                <img
                  src={url}
                  alt={`grid-img-${idx}`}
                  className={`w-full h-full object-cover rounded transition-opacity duration-300 ${
                    loadedImages.has(url) ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(url)}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default PhotoGrid;
