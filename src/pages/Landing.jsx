import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-end justify-center pb-[60%] md:items-center md:pb-0">
        <button
          onClick={() => navigate('/home')}
          className="px-4 py-1 text-xl md:px-8 md:py-3 md:text-2xl font-bodoni text-white border-2 border-white 
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
