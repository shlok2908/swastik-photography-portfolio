import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  <div className="my-16 text-center">
    <h2 className="text-xl font-semibold">REAL LOVE STORIES</h2>
    <p className="text-xs mt-1 text-gray-600 uppercase tracking-wide">
      Like a river flows surely to the sea, so it goes some things are meant to be.
    </p>

    <div className="mt-6 px-4">
      <div className="block lg:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 w-max">
          {stories.map((story) => (
            <img
              key={story.id}
              src={story.cover}
              alt={story.id}
              className="w-[16rem] flex-none aspect-[3/4] rounded object-cover cursor-pointer hover:scale-105 transition"
              onClick={() => navigate(`/story/${story.id}`)}
            />
          ))}
        </div>
      </div>
      <div className="max-w-[90rem] mx-auto">
      <div className="hidden lg:flex">
       <div className="mx-auto">
        <div className="grid grid-cols-3 gap-6">
        {stories.map((story) => (
          <img
            key={story.id}
            src={story.cover}
            alt={story.id}
            className="w-[30rem] aspect-[3/4] rounded object-cover cursor-pointer hover:scale-105 transition mx-auto"
            onClick={() => navigate(`/story/${story.id}`)}
          />
        ))}
      </div>
    </div>
  </div>
</div>
</div>
</div>
);
};

export default FeaturedStories;
