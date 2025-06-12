import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const images = import.meta.glob('../assets/stories/*/*.{jpg,png,jpeg}', { eager: true });

const FeaturedStories = () => {
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storyMap = {};

    for (const path in images) {
      const parts = path.split('/');
      const folder = parts[3]; // story1, story2, etc.
      const file = parts[4];

      if (!storyMap[folder]) {
        storyMap[folder] = { id: folder, cover: '', images: [] };
      }

      const url = images[path].default;

      if (file.toLowerCase() === 'cover.jpg') {
        storyMap[folder].cover = url;
      } else {
        storyMap[folder].images.push(url);
      }
    }

    setStories(Object.values(storyMap));
  }, []);

  return (
    <div className="my-16 text-center">
      <h2 className="text-xl font-semibold">REAL LOVE STORIES</h2>
      <p className="text-xs mt-1 text-gray-600 uppercase tracking-wide">
        Like a river flows surely to the sea, so it goes some things are meant to be.
      </p>

      <div className="flex overflow-x-auto md:overflow-visible gap-4 mt-6 px-4">
        {stories.map((story) => (
          <img
            key={story.id}
            src={story.cover}
            alt={story.id}
            className="w-64 flex-none md:w-1/3 rounded object-cover cursor-pointer hover:scale-105 transition"
            onClick={() => navigate(`/story/${story.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedStories;
