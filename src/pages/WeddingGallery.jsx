import { useParams } from "react-router-dom";
import Masonry from "react-masonry-css";
import { useEffect, useRef, useState } from "react";

// Load all wedding images
const allWeddingImages = import.meta.glob(
  "/src/assets/galleries/wedding/*/*.{jpg,jpeg,png,webp}",
  { eager: true, query: '?url', import: 'default' }
);

// Load all cover images
const allCovers = import.meta.glob(
  "/src/assets/galleries/wedding/*/cover.jpg",
  { eager: true, query: '?url', import: 'default' }
);

// Load all desc.txt files
const allDescriptions = import.meta.glob(
  "/src/assets/galleries/wedding/*/desc.txt",
  { eager: true, query: '?raw', import: 'default' }
);

// Group images by folder
const weddingData = {};

for (const path in allWeddingImages) {
  const parts = path.split("/");
  const slug = parts[parts.length - 2]; // e.g., '1-alisha-rahul'
  const image = allWeddingImages[path];

  // ✅ Clean name: remove number prefix
  const namePart = slug.split("-").slice(1).join(" ");
  const title = namePart.replace(/\b\w/g, (c) => c.toUpperCase());

  if (!weddingData[slug]) {
    weddingData[slug] = {
      title,
      images: [],
      cover: allCovers[`/src/assets/galleries/wedding/${slug}/cover.jpg`] || null,
      description:
        allDescriptions[`/src/assets/galleries/wedding/${slug}/desc.txt`] || null,
    };
  }

  if (!path.endsWith("cover.jpg")) {
    weddingData[slug].images.push(image);
  }
}

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

function WeddingGallery() {
  const { slug } = useParams();
  const wedding = weddingData[slug];
  const coverRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (coverRef.current) {
        const scrollY = window.scrollY;
        const limit = coverRef.current.offsetHeight;
        if (scrollY <= limit) {
          setOffsetY(scrollY / 2);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!wedding) {
    return (
      <div className="p-8 text-center text-xl text-gray-600">
        Wedding gallery not found.
      </div>
    );
  }

  return (
    <div className="font-bodoni min-h-screen bg-[#f8f5f0] text-[#111]">
      {/* Parallax Cover Image with Title */}
      {wedding.cover && (
        <div
          ref={coverRef}
          className="relative w-full overflow-hidden h-[80vh]"
        >
          <img
            src={wedding.cover}
            alt="Cover"
            className="w-full h-full object-cover opacity-55"
            style={{
              transform: `translateY(${offsetY}px)`,
              transition: "transform 0.1s ease-out",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 px-4">
            <h1 className="text-white text-center text-3xl md:text-5xl font-semibold">
              {wedding.title}
            </h1>
          </div>
        </div>
      )}

      {/* Description Below Cover */}
      {wedding.description && (
        <div className="px-4 md:px-8 mt-10 text-center">
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed whitespace-pre-line">
            {wedding.description}
          </p>
        </div>
      )}

      {/* Gallery */}
      <div className="px-4 py-16">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid bg-[#f8f5f0]"
          columnClassName="my-masonry-grid_column bg-[#f8f5f0]"
        >
          {wedding.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={wedding.title}
              className="w-full mb-2 shadow"
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default WeddingGallery;
