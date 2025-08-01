import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Welcome to Swastik by Sarang | Artistic Wedding & Fashion Photography</title>
        <meta name="description" content="Step into Swastik by Sarang — experience creative wedding and fashion photography, love stories, and cultural moments. Enter to explore our unique portfolio." />
        <link rel="canonical" href="https://swastikbysarang.com/" />
      </Helmet>
      
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

      

        {/* Button */}
        <div className="absolute inset-0 z-20 flex justify-center items-end md:items-center">
          <button
            onClick={() => navigate('/home')}
            className="mb-[60%] md:mb-0 md:translate-y-40
                      px-2 py-0.5 md:px-4 md:py-1 text-xl md:text-2xl font-avenir next text-white border-2 border-white 
                      hover:bg-white hover:text-black transition-all duration-300
                      transform hover:scale-105 focus:outline-none"
            style={{ wordSpacing: '6px' }}
          >
            Enter
          </button>
        </div>
      </div>
    </>
  );
}

export default Landing;
