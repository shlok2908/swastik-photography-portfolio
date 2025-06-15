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
          <h2 className="text-xl font-bold style={{ wordSpacing: '4px' }} ">"THEY FELT IT . I FRAMED IT. "</h2>
          <p className="mt-4 text-sm">
            Every wedding holds a thousand untold poems — woven into fabric, rituals, and stolen glances.  
            Our lens finds the verse in your love story.
          </p>
          <p className="mt-2 text-lg font-bold italic tracking-wide text-gray-600">
            "I don't capture perfection, I capture connection."
          </p>
        </div>

        <PhotoGrid />
        <FeaturedStories />
      </div>
    </div>
  );
}

export default Home;
