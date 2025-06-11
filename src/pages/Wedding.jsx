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
      <div className="px-4 py-16 max-w-5xl mx-auto bg-[#f8f5f0]">
        <h1 className="text-4xl font-bold mb-10 text-center">WEDDING</h1>
        <div className="space-y-12">
          {stories.map((story) => (
            <div key={story.slug} className="group">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={story.cover}
                  alt={story.title}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <Link
                to={`/gallery/${story.slug}`}
                className="block text-2xl font-semibold mt-4 text-center text-gray-800 hover:underline"
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

export default Wedding;
