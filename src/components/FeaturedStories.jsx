import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const images = import.meta.glob('../assets/stories/*/*.{jpg,png,jpeg}', { eager: true });

const FeaturedStories = () => {
  const [stories, setStories] = useState([]);
  const [isRealMobile, setIsRealMobile] = useState(true); // true = allow scroll
  const navigate = useNavigate();

  useEffect(() => {
    const storyMap = {};

    for (const path in images) {
      const parts = path.split('/');
      const folder = parts[3];
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

  useEffect(() => {
    // Detect mobile screen in mobile browser (not in desktop mode)
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const screenWidth = window.innerWidth;
    const realMobile = isTouch && screenWidth < 768;
    setIsRealMobile(realMobile);
  }, []);

  return (
    <div className="my-16 text-center">
      <h2 className="text-xl font-semibold">REAL LOVE STORIES</h2>
      <p className="text-xs mt-1 text-gray-600 uppercase tracking-wide">
        Like a river flows surely to the sea, so it goes some things are meant to be.
      </p>

      <div className="mt-6 px-4">
        {/* Scroll only when real mobile */}
        {isRealMobile ? (
          <div className="flex gap-4 w-max overflow-x-auto">
            {stories.map((story) => (
              <img
                key={story.id}
                src={story.cover}
                alt={story.id}
                className="w-[16rem] aspect-[3/4] flex-none rounded object-cover cursor-pointer hover:scale-105 transition"
                onClick={() => navigate(`/story/${story.id}`)}
              />
            ))}
          </div>
        ) : (
          // Desktop or phone in desktop mode
          <div className="grid grid-cols-3 gap-6 justify-center">
            {stories.map((story) => (
              <img
                key={story.id}
                src={story.cover}
                alt={story.id}
                className="w-full aspect-[3/4] rounded object-cover cursor-pointer hover:scale-105 transition"
                onClick={() => navigate(`/story/${story.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedStories;
