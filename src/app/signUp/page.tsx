'use client';
import React from 'react';
import Image from 'next/image';

export default function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full p-6 md:p-12 gap-8">
      {/* Contact Form Section */}
      <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-black font-normal text-[20px]  flex items-center" style={{ fontFamily: 'Cabinet Grotesk' }}>
          Our first priority is customer <br />satisfaction! You can contact us at any point of time!
        </p>
        <div className="mb-4">
          <p className="flex items-center gap-2 text-green-600 font-medium">
            💬 Chat with us on Whatsapp
          </p>
          <p className="flex items-center gap-2 text-gray-700 font-medium">
            📧 Drop us a mail!
          </p>
          <p className="flex items-center gap-2 text-gray-700 font-medium">
            📞 Contact us on our Toll free number
          </p>
        </div>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input type="text" placeholder="First Name" className="border p-2 w-1/2 rounded" />
            <input type="text" placeholder="Last Name" className="border p-2 w-1/2 rounded" />
          </div>
          <input type="email" placeholder="Email" className="border p-2 w-full rounded" />
          <input type="email" placeholder="Confirm Email" className="border p-2 w-full rounded" />
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            <label><input type="checkbox" className="mr-2" /> Website design</label>
            <label><input type="checkbox" className="mr-2" /> Content creation</label>
            <label><input type="checkbox" className="mr-2" /> UX design</label>
            <label><input type="checkbox" className="mr-2" /> Strategy & consulting</label>
            <label><input type="checkbox" className="mr-2" /> User research</label>
            <label><input type="checkbox" className="mr-2" /> Other</label>
          </div>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </div>

      {/* Google Maps Section */}
      <div className="md:w-1/2 flex justify-center items-center bg-white rounded-lg shadow-lg p-6">
        <iframe
          className="w-full h-80 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.063821223446!2d77.3718896751855!3d23.25993388484667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c426b070b1e3b%3A0x1c3c6d2622d1b81!2sYepso!5e0!3m2!1sen!2sin!4v1649251492573!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
