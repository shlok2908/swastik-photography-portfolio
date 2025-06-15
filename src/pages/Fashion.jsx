import React from "react";

// Auto import all images from the fashion folder
const images = import.meta.glob("/src/assets/galleries/fashion/*.{jpg,jpeg,png,webp}", {
  eager: true,
  as: "url",
});

const photoList = Object.values(images);

export default function Fashion() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-[#f8f5f0] font-bodoni text-[#111]">
      <h1 className="text-4xl font-bold mb-8 mt-4 text-center">EDITORIAL</h1>

      <div className="grid grid-cols-2 gap-4">
        {photoList.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full h-[700px] object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
}
