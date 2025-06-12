import { useParams } from "react-router-dom";

const allStoryImages = import.meta.glob(
  "/src/assets/stories/*/*.{jpg,jpeg,png,webp}",
  { eager: true, as: "url" }
);

const storyData = {};

// Group images by folder (slug)
for (const path in allStoryImages) {
  const parts = path.split("/");
  const slug = parts[parts.length - 2];
  const image = allStoryImages[path];

  if (!storyData[slug]) {
    storyData[slug] = {
      title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      images: [],
    };
  }

  storyData[slug].images.push(image);
}

function StoryDetails() {
  const { slug } = useParams();
  const story = storyData[slug]; // ✅ this replaces "wedding"

  if (!story) {
    return (
      <div className="p-8 text-center text-xl text-gray-600">
        Story gallery not found.
      </div>
    );
  }

  return (
    <div className="font-bodoni min-h-screen bg-[#f8f5f0] text-[#111] px-4 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">{story.title}</h1>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {story.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Story ${idx + 1}`}
            className="w-full rounded-lg break-inside-avoid shadow"
          />
        ))}
      </div>
    </div>
  );
}

export default StoryDetails;
