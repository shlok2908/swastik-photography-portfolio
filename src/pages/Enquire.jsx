import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import bgImage from "../assets/bg-enquire-mobile.jpg";
import bgDesktop from "../assets/bg-enquire-desktop.jpg";
import SEO from '../components/SEO';

export default function Enquire() {
  const [formData, setFormData] = useState({
    fullName: "",
    coupleName: "",
    email: "",
     contactNumber: "",
    shootType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      full_name: formData.fullName,
      couple_name: formData.coupleName,
      email: formData.email,
      contact_number: formData.contactNumber,
      event_date: formData.eventDate,
      guest_count: formData.guestCount,
      shoot_type: formData.shootType,
      message: formData.message,
      user_email: formData.email,
    };

    emailjs
      .send(
        "service_dzah7ym", // Your EmailJS service ID
        "template_lsunfq6", // Your template ID
        templateParams,
        "WbtDR8dctOn7GomuR" // Your public key
      )
      .then(
        () => {
          alert("Enquiry submitted successfully!");
          setFormData({
            fullName: "",
            coupleName: "",
            email: "",
            contactNumber: "",
            shootType: "",
            eventDate: "",
            guestCount: "",
            message: "",
          });
        },
        () => {
          alert("Failed to send enquiry. Please try again later.");
        }
      );
  };

  return (
    <>
      <SEO 
        title="Book Your Photography Session | Enquire with Swastik by Sarang"
        description="Book your wedding or fashion photography session with Swastik by Sarang. Get in touch to discuss your photography needs and secure your special moments."
        keywords="book photography, wedding photography booking, fashion photography booking, photography enquiry, Swastik by Sarang contact, photography services"
        url="https://swastikbysarang.com/enquire"
        robots="noindex, nofollow"
      />
      
      <div
        className="min-h-screen w-full relative flex items-center justify-center px-4 py-16 
                   bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: `url(${window.innerWidth >= 768 ? bgDesktop : bgImage})`,
        }}
      >
        {/* Overlay for desktop (behind form) */}
        <div className="hidden md:block fixed inset-0 bg-black/40 z-0" />

        {/* Form Container */}
        <div className="relative z-10 w-full max-w-3xl text-white p-6 md:p-10 font-bodoni opacity-70">
          <h1 className="pt-6 text-4xl font-bold mb-8 text-center">Enquire</h1>

         <div className="text-center mt-6 space-y-2 font-bold">
          <p>
            Please complete the form below and provide as many details as possible to help us create an accurate estimate. 
            We aim to respond within 48 hours. If you do not hear from us or if it is an urgent inquiry, 
            please call us at the number below.
          </p>

          <a 
            href="mailto:swastik.enquire@gmail.com" 
            className="hover:underline block text-lg text-bold"
          >
            swastik.enquire@gmail.com
          </a>

          <a 
            href="tel:+916355023913" 
            className="hover:underline block text-lg"
          >
            +91 6355023913
          </a>

          <p className="text-lg">
            Ahemdabad  · Anand 
          </p>
        </div>


          <form onSubmit={handleSubmit} className=" pt-6 space-y-6">
            {/* Full Name */}
            <div>
              <label className="block font-semibold mb-1 text-xl">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-1 text-xl">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-black"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block font-semibold mb-1 text-xl">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contactNumber"
                required
                value={formData.contactNumber}
                onChange={handleChange}
                pattern="[0-9]{10}" // allows only 10-digit numbers
                className="w-full border border-gray-300 rounded px-4 py-2 text-black"
                placeholder="Enter your phone number"
              />
            </div>


            {/* Type of Shoot */}
            <div>
              <label className="block font-semibold mb-1 text-xl">
                Shoot Type <span className="text-red-500">*</span>
              </label>
              <select
                name="shootType"
                required
                value={formData.shootType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-black"
              >
                <option value="" disabled>Select a type</option>
                <option value="Wedding">Wedding</option>
                <option value="Fashion">Fashion</option>
                <option value="LiveShows">Live Shows</option>
              </select>
            </div>

            {/* Date of Event */}
            <div>
              <label className="block font-semibold mb-1 text-xl">
                Date of Event <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="eventDate"
                required
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-black"
              />
            </div>

            {/* Guest Count */}
            <div>
              <label className="block font-semibold mb-1 text-xl">No. of Guests Attending</label>
              <input
                type="number"
                name="guestCount"
                min="1"
                value={formData.guestCount}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-black"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold mb-1 text-xl">Message (Optional)</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your thoughts or special instructions..."
                className="w-full border border-gray-300 rounded px-4 py-2 text-black"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
