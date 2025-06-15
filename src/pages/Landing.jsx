import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Desktop Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/preview-desktop.JPG"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/desktop-video.mp4" type="video/mp4" />
      </video>

      {/* Mobile Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/preview-mobile.JPG"
        className="block md:hidden absolute inset-0 w-full h-full object-contain bg-black"

      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

      {/* Button */}
      <div className="absolute inset-0 z-20 flex justify-center items-end md:items-center">
        <button
          onClick={() => navigate('/home')}
          className="mb-[60%] md:mb-0 md:translate-y-40
                     px-4 py-1 text-xl md:px-8 md:py-3 md:text-2xl font-bodoni text-white border-2 border-white 
                     hover:bg-white hover:text-black transition-all duration-300
                     transform hover:scale-105 focus:outline-none"
        >
          Enter
        </button>
      </div>
    </div>
  );
}

export default Landing;
