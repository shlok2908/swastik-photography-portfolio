import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#f8f5f0] font-bodoni text-black px-2 sm:px-4 py-2 sm:py-6 shadow-md">
      {/* Logo */}
      <div className="flex justify-center mb-2 sm:mb-4">
        <img
          src={logo}
          alt="Logo"
          className="h-10 sm:h-20 md:h-28 lg:h-32 xl:h-36 transition-all duration-300"
        />
      </div>

      {/* Centered navigation menu */}
      <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-12 text-sm sm:text-lg md:text-xl uppercase tracking-wider">
        <Link 
          to="/home" 
          className={`font-semibold hover:underline text-center py-2 ${
            location.pathname === '/home' ? 'text-gray-600' : ''
          }`}
        >
          Home
        </Link>
        {/* Gallery Dropdown */}
        <div className="relative group text-center py-2">
          <span className="font-semibold cursor-pointer hover:underline">Gallery</span>
          <div className="absolute top-full left-1/2 -translate-x-1/2 bg-[#f8f5f0] border border-gray-300 shadow-md py-2 px-6 space-y-2 z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 text-center min-w-[120px]">
            <Link to="/fashion" className="text-sm sm:text-lg block hover:underline">
              Fashion
            </Link>
            <Link to="/wedding" className="text-sm sm:text-lg block hover:underline">
              Wedding
            </Link>
          </div>
        </div>
        <Link to="/aboutus" className="font-semibold hover:underline text-center py-2">
          About Us
        </Link>
        <Link to="/enquire" className="font-semibold hover:underline text-center py-2">
          Enquire
        </Link>
      </div>
    </nav>
  );
}

// Hide scrollbar utility for Tailwind (add to index.css if not present)
// .scrollbar-hide::-webkit-scrollbar { display: none; }
// .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
