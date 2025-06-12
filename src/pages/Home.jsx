import { useEffect } from "react";
import HeroCarousel from "../components/HeroCarousel";
import PhotoGrid from "../components/PhotoGrid";
import FeaturedStories from "../components/FeaturedStories";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-6 md:pt-16 font-bodoni min-h-screen bg-[#f8f5f0] text-[#111]">
      <div className="pt-16 text-center">
        <HeroCarousel />

        <div className="max-w-2xl mx-auto my-10 px-4 text-gray-800">
          <h2 className="text-lg italic">"YOU FEEL. I FOCUS. WE FRAME"</h2>
          <p className="mt-4 text-sm">
            A wedding is a celebration mingled with the showcase of love & culture. 
            A visual expression with vibrant colors, fresh garlands, heirloom jewelry, and rituals so emotional...
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-600">
            We are creating fiction out of reality.
          </p>
        </div>

        <PhotoGrid />
        <FeaturedStories />
      </div>
    </div>
  );
}

export default Home;
