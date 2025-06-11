import { Link } from 'react-router-dom';

const coverImages = import.meta.glob('/src/assets/galleries/featured/*/cover.jpg', {
  eager: true,
  as: 'url',
});

const stories = Object.entries(coverImages).map(([path, url]) => {
  const parts = path.split('/');
  const slug = parts[parts.length - 2]; // folder name is the slug
  return {
    slug,
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    cover: url,
  };
});

export default function FeaturedStories() {
  return (
    <div className="font-bodoni min-h-screen bg-[#f8f5f0] text-[#111]">
      <div className="px-4 py-16 max-w-5xl mx-auto bg-[#f8f5f0]">
        <h1 className="text-4xl font-bold mb-10 text-center">REAL LOVE STORIES</h1>
        <p className="text-sm text-center text-gray-600 uppercase tracking-wide mb-8">
          Like a river flows surely to the sea, so it goes some things are meant to be.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <div key={story.slug} className="group">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={story.cover}
                  alt={story.title}
                  className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Link
                to={`/gallery/${story.slug}`}
                className="block text-xl font-semibold mt-4 text-center text-gray-800 hover:underline"
              >
                {story.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
