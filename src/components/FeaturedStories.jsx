import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Load all images from assets/stories/<folder>/*.jpg
const images = import.meta.glob('../assets/stories/*/*.{jpg,jpeg,png}', { eager: true });

const FeaturedStories = () => {
  const [stories, setStories] = useState([]);
  const [isRealMobile, setIsRealMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storyMap = {};

    for (const path in images) {
      const parts = path.split('/');
      const folder = parts[3];
      const file = parts[4];
      const url = images[path].default;

      if (!storyMap[folder]) {
        storyMap[folder] = { id: folder, cover: '', images: [] };
      }

      if (file.toLowerCase() === 'cover.jpg') {
        storyMap[folder].cover = url;
      } else {
        storyMap[folder].images.push(url);
      }
    }

    setStories(Object.values(storyMap));
  }, []);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isMobileUA = /iphone|ipod|android|ipad/.test(navigator.userAgent.toLowerCase());
    const realMobile = isTouch && isMobileUA && window.innerWidth <= 768;
    setIsRealMobile(realMobile);
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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStories;
