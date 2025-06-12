// File: src/pages/Fashion.jsx
import React from "react";
import Masonry from "react-masonry-css";

// Automatically import all images from /assets/galleries/fashion/
const images = import.meta.glob("/src/assets/galleries/fashion/*.{jpg,jpeg,png,webp}", {
  eager: true,
  as: "url",
});

const photoList = Object.values(images);

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

export default function Fashion() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] font-bodoni text-[#111] px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 mt-4 text-center">FASHION</h1>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid bg-[#f8f5f0]"
        columnClassName="my-masonry-grid_column bg-[#f8f5f0]"
      >
        {photoList.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Fashion ${idx + 1}`}
            className="w-full mb-4 rounded-lg shadow-md"
          />
        ))}
      </Masonry>
    </div>
  );
}
