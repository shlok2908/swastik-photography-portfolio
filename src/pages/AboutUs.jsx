import SEO from '../components/SEO';
import aboutPhoto from '../assets/about.jpg'; 

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Swastik by Sarang - Wedding & Fashion Photographer",
    "description": "Learn about Swastik by Sarang, a professional wedding and fashion photographer capturing the essence of Indian culture and traditions.",
    "url": "https://swastikbysarang.com/aboutus",
    "mainEntity": {
      "@type": "Person",
      "name": "Sarang Sashvat",
      "jobTitle": "Professional Photographer",
      "description": "Wedding and fashion photographer capturing the soul of Indian heritage through photography."
    }
  };

  return (
    <>
      <SEO 
        title="About Swastik by Sarang - Wedding & Fashion Photographer"
        description="Learn about Swastik by Sarang, a professional wedding and fashion photographer capturing the essence of Indian culture and traditions."
        keywords="about Swastik photography, Sarang Sashvat photographer, wedding photographer India, fashion photographer, photography portfolio"
        url="https://swastikbysarang.com/aboutus"
      />
      <script type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </script>

      <div className="font-bodoni min-h-screen bg-[#f8f5f0] text-[#111] flex items-center justify-center px-4">
        <div className="flex flex-col md:flex-row items-center max-w-5xl w-full gap-8 mt-20">
          {/* Text on Left */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl leading-relaxed">
              'Swastik' symbolizes auspicious beginnings, purity, and blessings in Indian culture. Through this platform, we aim to capture the sacredness, joy, and beauty of life's most cherished moments, especially weddings. Every frame we create is a blend of emotion, elegance, and cultural richness - just like the meaning behind
              'Swastik' itself.
            </p>
          </div>

          {/* Image on Right */}
          <div className="md:w-1/2">
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
