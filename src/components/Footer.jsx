import { Instagram } from "lucide-react";
import logo1 from "../assets/logo1.png";

export default function Footer() {
  return (
    <footer className="text-white px-4 pt-0 pb-10">
      <div className="border-t border-gray-300 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-10">
          {/* Left Side: Contact + Social */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Name: Sarang </p>
            <p>
              Email:{" "}
              <a
                href="mailto:swastik.enquire@gmail.com"
                className="underline text-gray-300"
              >
                swastik.enquire@gmail.com
              </a>
            </p>
            <p>Phone: +91 6355023913</p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Social</h3>
            <div className="flex items-center gap-2">
              <Instagram size={20} />
              <a
                href="https://instagram.com/swastikbysarangsashvat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-300"
              >
                @swastikbysarangsashvat
              </a>
            </div>
          </div>

          {/* Right Side: Logo */}
          <div className="flex justify-end items-center">
            <img
              src={logo1}
              alt="Footer Logo"
              className="h-28 md:h-32 lg:h-36"
            />
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 pb-4">
          © {new Date().getFullYear()} Swastik — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
