import { useEffect } from "react";
import HeroCarousel from "../components/HeroCarousel";
import PhotoGrid from "../components/PhotoGrid";
import FeaturedStories from "../components/FeaturedStories";
import SEO from "../components/SEO";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Swastik by Sarang - Home | Wedding & Fashion Photography Portfolio",
    "description": "Discover Swastik by Sarang's photography portfolio featuring stunning wedding photography, fashion shoots, and cultural moments captured with artistic vision.",
    "url": "https://swastikbysarang.com/home",
    "mainEntity": {
      "@type": "PhotographyBusiness",
      "name": "Swastik by Sarang",
      "description": "Professional wedding and fashion photography services capturing the essence of Indian culture and traditions."
    }
  };

  return (
    <>
      <SEO 
        title="Swastik by Sarang - Home | Wedding & Fashion Photography Portfolio"
        description="Discover Swastik by Sarang's photography portfolio featuring stunning wedding photography, fashion shoots, and cultural moments captured with artistic vision."
        keywords="photography portfolio, wedding photography, fashion photography, Swastik by Sarang, Indian photographer, cultural photography"
        url="https://swastikbysarang.com/home"
      />
      <script type="application/ld+json">
        {JSON.stringify(homeSchema)}
      </script>

      <div className="pt-6 md:pt-16 font-bodoni min-h-screen bg-[#f8f5f0] text-[#111]">
        <div className="pt-16 text-center">
          <HeroCarousel />

          <div className="max-w-2xl mx-auto my-10 px-4 text-gray-800">
            <h2 className="text-xl font-bold style={{ wordSpacing: '4px' }} ">"Swastik is not just a name, it's the soul of every frame."</h2>
            <p className="mt-4 text-sm">
              "Swastik by Sarang Sashvat is more than a photography brand, it's a cultural lens.
With every wedding / capture, I document rituals, raw emotions, and the sanctity of traditions passed down through generations.
            </p>
            <p className="mt-2 text-lg font-bold italic tracking-wide text-gray-600">
              I want to create timeless frames that speak of joy, purity & the soul of Indian Heritage.
            </p>
          </div>

          <PhotoGrid />
          <FeaturedStories />
        </div>
      </div>
    </>
  );
}

export default Home;
