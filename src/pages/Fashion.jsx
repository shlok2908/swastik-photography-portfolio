import React from "react";
import Masonry from "react-masonry-css";

// Auto import all images from folder
const images = import.meta.glob("/src/assets/galleries/fashion/*.{jpg,jpeg,png,webp}", {
  eager: true,
  as: "url",
});
const photoList = Object.values(images);

const breakpoints = {
  default: 2,
  0: 2, // ⬅ Force 2 columns on all screens including mobile
};

export default function Fashion() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-[#f8f5f0] font-bodoni text-[#111]">
      <h1 className="text-4xl font-bold mb-8 mt-4 text-center">EDITORIAL</h1>

      <Masonry
        breakpointCols={breakpoints}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {photoList.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-full rounded object-cover"
          />
        ))}
      </Masonry>
    </div>
  );
}
