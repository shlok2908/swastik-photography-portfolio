import React from "react";

// Auto import all images from /assets/galleries/fashion/
const images = import.meta.glob("/src/assets/galleries/fashion/*.{jpg,jpeg,png,webp}", {
  eager: true,
  as: "url",
});

const photoList = Object.values(images);

export default function Fashion() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 bg-[#f8f5f0] font-bodoni text-[#111]">
      <h1 className="text-4xl font-bold mb-8 mt-4 text-center">FASHION</h1>

      <div className="columns-2 gap-2 px-2">
        {photoList.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Fashion ${index + 1}`}
            className="mb-2 w-full rounded object-cover"
          />
        ))}
      </div>
    </div>
  );
}
