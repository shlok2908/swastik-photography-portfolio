import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Masonry from "react-masonry-css";

const allWeddingImages = import.meta.glob(
  "/src/assets/galleries/wedding/*/*.{jpg,jpeg,png,webp}",
  { eager: true, as: "url" }
);

const weddingData = {};
for (const path in allWeddingImages) {
  const parts = path.split("/");
  const slug = parts[parts.length - 2];
  const image = allWeddingImages[path];
  if (!weddingData[slug]) {
    weddingData[slug] = {
      title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      images: [],
      cover: `/src/assets/galleries/wedding/${slug}/cover.jpg`, // adjust if needed
    };
  }
  weddingData[slug].images.push(image);
}

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

export default function WeddingGallery() {
  const { slug } = useParams();
  const wedding = weddingData[slug];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
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
      <div className="w-full h-screen overflow-hidden relative">
        <img
          src={wedding.cover}
          alt={wedding.title}
          className="w-full h-full object-cover"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`, // Only parallax scroll
            transition: "transform 0.2s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold">
            {wedding.title}
          </h1>
        </div>
      </div>

      {/* Masonry Image Grid */}
      <div className="px-4 py-16">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {wedding.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Wedding ${idx + 1}`}
              className="w-full mb-4 shadow-md"
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
}
