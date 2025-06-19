import React from "react";
import Masonry from "react-masonry-css";
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Import all images from the flat folder
const images = import.meta.glob("/src/assets/galleries/fashion/*.{jpg,jpeg,png,webp}", {
  eager: true,
  as: "url",
});
const photoList = Object.values(images);

const breakpointColumnsObj = {
  default: 2, // 👈 Always show 2 columns on all screen sizes
  0: 2,
};

const coverImages = import.meta.glob('/src/assets/galleries/fashion/*/cover.jpg', { eager: true, as: 'url' });

const stories = Object.entries(coverImages)
  .map(([path, url]) => {
    const parts = path.split('/');
    const slug = parts[parts.length - 2];

    const namePart = slug
      .split('-')
      .slice(1)
      .join(' ');

    return {
      slug,
      order: parseInt(slug.split('-')[0], 10),
      title: namePart.replace(/\b\w/g, (c) => c.toUpperCase()),
      cover: url,
    };
  })
  .sort((a, b) => a.order - b.order);

export default function Fashion() {
  const fashionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Fashion Photography Portfolio | Swastik by Sarang",
    "description": "Explore our creative fashion photography portfolio showcasing artistic fashion shoots, editorial photography, and stunning fashion moments captured by Swastik by Sarang.",
    "image": stories[0]?.cover || "https://swastikbysarang.com/cover.jpg",
    "url": "https://swastikbysarang.com/fashion"
  };

  return (
    <>
      <SEO 
        title="Fashion Photography Portfolio | Swastik by Sarang"
        description="Explore our creative fashion photography portfolio showcasing artistic fashion shoots, editorial photography, and stunning fashion moments captured by Swastik by Sarang."
        keywords="fashion photography portfolio, editorial photography, fashion shoots, fashion photographer India, artistic fashion photography, Swastik by Sarang"
        url="https://swastikbysarang.com/fashion"
        robots="noindex, nofollow"
      />
      <script type="application/ld+json">
        {JSON.stringify(fashionSchema)}
      </script>

      <div className="font-bodoni min-h-screen bg-[#f8f5f0] text-[#111] px-4 py-20">
        <h1 className="text-3xl font-bold mb-6 text-center">Editorial</h1>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {photoList.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Fashion ${idx + 1}`}
              className="w-full mb-4 shadow"
            />
          ))}
        </Masonry>

        <div className="mt-10 px-4 pt-10 pb-4 max-w-6xl mx-auto bg-[#f8f5f0]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {stories.map((story) => (
              <Link
                key={story.slug}
                to={`/gallery/${story.slug}`}
                className="block group transition hover:shadow-xl"
              >
                <div className="bg-white p-4 rounded shadow-md h-full flex flex-col">
                  <div className="aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={story.cover}
                      alt={`Fashion Photography - ${story.title}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="400"
                      height="500"
                    />
                  </div>
                  <div className="text-base font-semibold mt-4 text-center text-gray-800">
                    {story.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
