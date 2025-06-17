import { Instagram, Mail } from "lucide-react";
import logo1 from "../assets/logo1.png";

export default function Footer() {
  return (
    <footer className="text-white px-4 pt-0 pb-4">
      <div className="border-t border-gray-300 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-10">
          {/* Left Side: Contact + Icons */}
<div>
  <h3 className="text-2xl font-semibold mb-4 tracking-widest">Contact Us</h3>
  <p className="text-base md:text-lg lg:text-xl leading-loose tracking-wide">Name: Sarang</p>
  <p className="text-base md:text-lg lg:text-xl leading-loose tracking-wide">
    Email:{" "}
    <a
      href="mailto:swastik.enquire@gmail.com?subject=Enquiry&body=Hi%20Swastik%2C"
      className="underline font-semibold text-gray-300"
    >
      swastik.enquire@gmail.com
    </a>
  </p>
  <p className="text-base md:text-lg lg:text-xl leading-loose tracking-wide">Phone: +91 6355023913</p>

  <div className="flex gap-6 mt-8">
    <a
      href="https://instagram.com/swastikbysarangsashvat"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-pink-400 transition"
    >
      <Instagram size={32} />
    </a>
    <a
      href="mailto:swastik.enquire@gmail.com?subject=Enquiry&body=Hi%20Swastik%2C"
      className="hover:text-blue-400 transition"
    >
      <Mail size={32} />
    </a>
  </div>
</div>


          {/* Right Side: Logo */}
          <div className="flex justify-center md:justify-end items-center">
            <img
              src={logo1}
              alt="Footer Logo"
              className="h-20 sm:h-28 md:h-32 lg:h-36"
            />
          </div>
        </div>

        <div className="text-center text-xs font-semibold xl:text-xl md:text-sm text-gray-400 pb-4">
          © {new Date().getFullYear()} Swastik — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
