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

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={() => navigate('/home')}
          className="px-8 py-3 text-2xl font-bodoni text-white border-2 border-white 
                   hover:bg-white hover:text-black transition-all duration-300
                   transform hover:scale-105 focus:outline-none"
        >
          Swastik
        </button>
      </div>
    </div>
  );
}

export default Landing; 