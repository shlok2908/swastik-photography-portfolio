import { Link } from 'react-router-dom';

const coverImages = import.meta.glob('/src/assets/galleries/wedding/*/cover.jpg', { eager: true, as: 'url' });

const stories = Object.entries(coverImages).map(([path, url]) => {
  const parts = path.split('/');
  const slug = parts[parts.length - 2];
  return {
    slug,
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    cover: url,
  };
});

function Wedding() {
  return (
    <div className="font-bodoni min-h-screen bg-[#f8f5f0] text-[#111]">
      <div className="px-4 py-20 max-w-5xl mx-auto bg-[#f8f5f0]">
        <h1 className="text-4xl font-bold mb-10 mt-4 text-center">Wedding</h1>

        <div className="space-y-12">
          {stories.map((story) => (
       <Link
        key={story.slug}
        to={`/gallery/${story.slug}`}
        className="block group hover:shadow-xl transition rounded"
      >
        <div className="bg-white p-6 ded shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          <div className="aspect-[4/5]">
            <img
              src={story.cover}
              alt={story.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-2xl font-semibold mt-4 text-center text-gray-800 ">
            {story.title}
          </div>
        </div>
      </Link>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Wedding;
