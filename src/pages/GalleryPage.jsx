import { useParams } from 'react-router-dom';

// Import all gallery images (excluding covers)
const galleryImages = import.meta.glob('/src/assets/galleries/featured/*/*.{jpg,jpeg,png}', {
  eager: true,
  as: 'url',
});

function GalleryPage() {
  const { slug } = useParams();

  // Filter images for the current slug
  const images = Object.entries(galleryImages)
    .filter(([path]) => path.includes(`/featured/${slug}/`) && !path.includes('cover'))
    .map(([_, url]) => url);

  if (images.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center font-bodoni text-xl text-gray-500">
        No photos found for this gallery.
      </div>
    );
  }

  return (
    <div className="bg-[#f8f5f0] min-h-screen px-4 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`Gallery image ${idx}`}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
