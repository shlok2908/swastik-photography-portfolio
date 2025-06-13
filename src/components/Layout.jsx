  import Navbar from "./Navbar";
  import Footer from "./Footer";

  export default function Layout({ children }) {
    return (
      <div className="bg-[#f8f5f0] text-black font-bodoni">
        {/* Fixed Header */}
        <Navbar />

        {/* Main content with responsive spacing and matching background */}
        <main className="pt-10 sm:pt-44 lg:pt-48 pb-4 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto bg-[#f8f5f0]">
          {children}
        </main>

        {/* Footer with built-in spacing */}
        <Footer />
      </div>
    );
  }
