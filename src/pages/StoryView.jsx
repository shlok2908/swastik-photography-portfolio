import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const images = import.meta.glob('../assets/stories/*/*.{jpg,jpeg,png,webp}', { eager: true });

const StoryView = () => {
  const { id } = useParams();
  const [storyImages, setStoryImages] = useState([]);

  useEffect(() => {
    const tempImages = [];

    for (const path in images) {
      const parts = path.split('/');
      const folder = parts[3];
      const file = parts[4];
      const url = images[path].default;

      if (folder === id && file.toLowerCase() !== 'cover.webp') {
        tempImages.push(url);
      }
    }

    setStoryImages(tempImages);
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
    <div className="columns-2 gap-2 px-2">
    {storyImages.map((img, index) => (
        <img
        key={index}
        src={img}
        alt=""
        className="mb-2 w-full object-cover"
        />
    ))}
    </div>

    </div>
  );
};

export default StoryView;
