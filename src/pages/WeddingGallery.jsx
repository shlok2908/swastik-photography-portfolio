import { useParams } from "react-router-dom";
import Masonry from "react-masonry-css";

const allWeddingImages = import.meta.glob(
  "/src/assets/galleries/wedding/*/*.{jpg,jpeg,png,webp}",
  { eager: true, as: "url" }
);

const weddingData = {};

// Grouping images by folder name (album slug)
for (const path in allWeddingImages) {
  const parts = path.split("/");
  const slug = parts[parts.length - 2]; // folder name
  const image = allWeddingImages[path];

  if (!weddingData[slug]) {
    weddingData[slug] = {
      title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      images: [],
    };
  }

  weddingData[slug].images.push(image);
}

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

function WeddingGallery() {
  const { slug } = useParams();
  const wedding = weddingData[slug];

  if (!wedding) {
    return (
      <div className="p-8 text-center text-xl text-gray-600">
        Wedding gallery not found.
      </div>
    );
  }

  return (
    <div className="font-bodoni min-h-screen bg-[#f8f5f0] text-[#111] px-4 py-16">
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
            className="w-full mb-4 rounded shadow"
          />
        ))}
      </Masonry>
    </div>
  );
}

export default WeddingGallery;
