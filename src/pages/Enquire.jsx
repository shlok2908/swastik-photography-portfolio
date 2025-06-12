import React, { useState } from "react";
import emailjs from "@emailjs/browser";


export default function Enquire() {
  const [formData, setFormData] = useState({
    fullName: "",
    coupleName: "",
    email: "",
    eventDate: "",
    guestCount: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare template parameters matching your EmailJS template variables
    const templateParams = {
      full_name: formData.fullName,
      couple_name: formData.coupleName,
      email: formData.email,
      event_date: formData.eventDate,
      guest_count: formData.guestCount,
      user_email: formData.email,
    };

    emailjs
      .send(
        "service_dzah7ym",   
        "template_lsunfq6",  
        templateParams,
        "WbtDR8dctOn7GomuR"       
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Enquiry submitted successfully!");
          setFormData({
            fullName: "",
            coupleName: "",
            email: "",
            eventDate: "",
            guestCount: "",
          });
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send enquiry. Please try again later.");
        }
      );
  };

  return (
    <div className="font-bodoni min-h-screen bg-[#f8f5f0] text-[#111] px-4 py-16">
      <div className="max-w-3xl mx-auto bg-[#f8f5f0]">
        <h1 className="text-4xl font-bold mb-8 mt-4 text-center">Enquire</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Couple Name */}
          <div>
            <label className="block font-semibold mb-1">
              Couple Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="coupleName"
              required
              value={formData.coupleName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Date of Event */}
          <div>
            <label className="block font-semibold mb-1">
              Date of Event <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="eventDate"
              required
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Guest Count */}
          <div>
            <label className="block font-semibold mb-1">
              No. of Guests Attending <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="guestCount"
              required
              min="1"
              value={formData.guestCount}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
