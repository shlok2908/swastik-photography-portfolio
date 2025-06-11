function FeaturedStories() {
  const stories = [
    "https://picsum.photos/id/1011/400/500",
    "https://picsum.photos/id/1012/400/500",
    "https://picsum.photos/id/1013/400/500",
  ];

  return (
    <div className="my-16 text-center">
      <h2 className="text-xl font-semibold">REAL LOVE STORIES</h2>
      <p className="text-xs mt-1 text-gray-600 uppercase tracking-wide">
        Like a river flows surely to the sea, so it goes some things are meant to be.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4 mt-6 px-4">
        {stories.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`story-${idx}`}
            className="w-full md:w-1/3 rounded object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedStories;
