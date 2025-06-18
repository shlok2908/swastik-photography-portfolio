import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";
import Breadcrumb from "./Breadcrumb";

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PhotographyBusiness",
    "name": "Swastik by Sarang",
    "image": "https://swastikbysarang.com/cover.jpg",
    "description": "Professional wedding and fashion photography services by Sarang",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India" 
    },
    "priceRange": "₹₹₹",
    "url": "https://swastikbysarang.com",
    "telephone": "+91-6355023913",
    "sameAs": [
      "https://www.instagram.com/swastikbysarangsashvat",
      
    ]
  };

  return (
    <div className="bg-[#f8f5f0] text-black font-bodoni">
      <SEO />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Fixed Header */}
      <Navbar />

      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* Main content with responsive spacing and matching background */}
      <main className="pt-4 sm:pt-20 lg:pt-24 pb-4 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto bg-[#f8f5f0]">
        {children}
      </main>

      {/* Footer with built-in spacing */}
      <Footer />
    </div>
  );
}
