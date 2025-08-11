import SEO from '../components/SEO';
import aboutPhoto from '../assets/about.jpg'; 

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Swastik by Sarang | Meet Our Wedding & Fashion Photographer",
    "description": "Learn about Swastik by Sarang, a passionate wedding and fashion photographer dedicated to capturing the soul of Indian culture and traditions through artistic photography.",
    "url": "https://swastikbysarang.com/aboutus",
    "mainEntity": {
      "@type": "Person",
      "name": "Sarang Sashvat",
      "jobTitle": "Professional Wedding & Fashion Photographer",
      "description": "Wedding and fashion photographer capturing the soul of Indian heritage through photography."
    }
  };

  return (
    <>
      <SEO 
        title="About Swastik by Sarang | Meet Our Wedding & Fashion Photographer"
        description="Learn about Swastik by Sarang, a passionate wedding and fashion photographer dedicated to capturing the soul of Indian culture and traditions through artistic photography."
        keywords="about Swastik photography, Sarang Sashvat photographer, wedding photographer India, fashion photographer, photography story, Indian culture photography"
        url="https://swastikbysarang.com/aboutus"
        robots="noindex, nofollow"
      />
      <script type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </script>

      <div className="pt-6 font-bodoni min-h-screen bg-[#f8f5f0] text-[#111] flex items-center justify-center px-4">
        <div className="flex flex-col md:flex-row items-center max-w-5xl w-full gap-8 mt-20">
          {/* Text on Left */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl leading-relaxed">
              At Swastik, we believe in capturing more than just moments.we preserve emotions, traditions, and timeless beauty. The name Swastik symbolizes auspicious beginnings, purity, and blessings in Indian culture. With over 2 years of experience in photography and cinematography, we specialize in weaving together the sacredness, joy, and elegance of life's most cherished celebrations,especially weddings. Every frame we create reflects cultural richness and emotional depth, just like the meaning behind Swastik itself.
            </p>
          </div>

          {/* Image on Right */}
          <div className="pt-6 md:w-1/2">
            <img
              src={aboutPhoto}
              alt="Deep Patel"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
