import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Load only cover images
const covers = import.meta.glob("../assets/stories/*/cover.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

const FeaturedStories = () => {
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const list = Object.entries(covers).map(([path, url]) => {
      const parts = path.split("/");
      const folder = parts[3];
      return {
        id: folder,
        cover: url,
      };
    });
    setStories(list);
  }, []);

  return (
    <div className="my-4 text-center">
      <p className="text-xl mt-1 italic font-bold text-gray-600 uppercase tracking-wide">
        "Not just a photographer — A storyteller of love, style and music."
      </p>

      {/* Mobile View */}
      <div className="mt-6 px-4 lg:hidden">
        <div className="flex justify-center gap-3">
          {stories.slice(0, 3).map((story) => (
            <img
              key={story.id}
              src={story.cover}
              alt={story.id}
              className="w-28 md:w-40 aspect-[9/16] object-cover cursor-pointer hover:scale-105 transition"
              onClick={() => navigate(`/story/${story.id}`)}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="max-w-[90rem] mx-auto hidden lg:flex mt-10">
        <div className="mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {stories.map((story) => (
              <img
                key={story.id}
                src={story.cover}
                alt={story.id}
                className="w-[30rem] aspect-[9/16] object-cover cursor-pointer hover:scale-105 transition mx-auto"
                onClick={() => navigate(`/story/${story.id}`)}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStories;
