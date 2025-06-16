import { Link } from 'react-router-dom';

const coverImages = import.meta.glob('/src/assets/galleries/wedding/*/cover.jpg', { eager: true, as: 'url' });

const stories = Object.entries(coverImages)
  .map(([path, url]) => {
    const parts = path.split('/');
    const slug = parts[parts.length - 2]; // e.g., '1-alisha-rahul'

    const namePart = slug
      .split('-')
      .slice(1) // remove the number prefix
      .join(' ');

    return {
      slug, // you can also clean this if needed
      order: parseInt(slug.split('-')[0], 10), // sort using the number
      title: namePart.replace(/\b\w/g, (c) => c.toUpperCase()), // Capitalize name only
      cover: url,
    };
  })
  .sort((a, b) => a.order - b.order);


function Wedding() {
  return (
    <div className="font-bodoni min-h-screen bg-[#f8f5f0] text-[#111]">
      <div className="mt-10 px-4 pt-10 pb-4 max-w-6xl mx-auto bg-[#f8f5f0]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Link
              key={story.slug}
              to={`/gallery/${story.slug}`}
              className="block group transition hover:shadow-xl"
            >
              <div className="bg-white p-4 rounded shadow-md h-full flex flex-col">
                <div className="aspect-[4/5] w-full overflow-hidden ">
                  <img
                    src={story.cover}
                    alt={story.title}
                    className="w-full h-full object-cover"
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
  );
}


export default Wedding;
