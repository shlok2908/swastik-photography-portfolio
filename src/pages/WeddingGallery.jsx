import { useParams } from "react-router-dom";
import Masonry from "react-masonry-css";
import { useEffect, useRef, useState } from "react";

// Load all wedding images
const allWeddingImages = import.meta.glob(
  "/src/assets/galleries/wedding/*/*.{jpg,jpeg,png,webp}",
  { eager: true, as: "url" }
);

// Load all cover images
const allCovers = import.meta.glob(
  "/src/assets/galleries/wedding/*/cover.jpg",
  { eager: true, as: "url" }
);

// Group images by folder
const weddingData = {};

for (const path in allWeddingImages) {
  const parts = path.split("/");
  const slug = parts[parts.length - 2];
  const image = allWeddingImages[path];

  if (!weddingData[slug]) {
    weddingData[slug] = {
      title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      images: [],
      cover: allCovers[`/src/assets/galleries/wedding/${slug}/cover.jpg`] || null,
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
          setOffsetY(scrollY / 2); // Adjust the divisor for speed
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
      {/* Parallax Cover Image */}
      {wedding.cover && (
        <div
          ref={coverRef}
          className="relative w-full overflow-hidden h-[80vh]"
        >
          <img
            src={wedding.cover}
            alt="Cover"
            className="w-full h-full object-cover"
            style={{
              transform: `translateY(${offsetY}px)`,
              transition: "transform 0.1s ease-out",
            }}
          />
        </div>
      )}

      {/* Gallery */}
      <div className="px-4 py-16">
        <h1 className="text-4xl font-bold mb-10 text-center">{wedding.title}</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid bg-[#f8f5f0]"
          columnClassName="my-masonry-grid_column bg-[#f8f5f0]"
        >
          {wedding.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Wedding ${idx + 1}`}
              className="w-full mb-4 shadow"
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default WeddingGallery;
