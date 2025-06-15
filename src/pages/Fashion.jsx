import React from "react";
import Masonry from "react-masonry-css";

// Import all images from the flat folder
const images = import.meta.glob("/src/assets/galleries/fashion/*.{jpg,jpeg,png,webp}", {
  eager: true,
  as: "url",
});
const photoList = Object.values(images);

const breakpointColumnsObj = {
  default: 2, // 👈 Always show 2 columns on all screen sizes
  0: 2,
};

export default function Fashion() {
  return (
    <div className="font-bodoni min-h-screen bg-[#f8f5f0] text-[#111] px-4 py-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Editorial</h1>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photoList.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Fashion ${idx + 1}`}
            className="w-full mb-4 shadow"
          />
        ))}
      </Masonry>
    </div>
  );
}
