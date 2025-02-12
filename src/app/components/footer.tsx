'use client';
import { useState } from 'react';

export default function Footer() {
  const [openProduct, setOpenProduct] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openQuickLinks, setOpenQuickLinks] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);

  return (
    <footer className="bg-gray-100 py-10 px-5 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-black">

        {/* Products */}
        <div>
          <h3
            className="font-bold text-lg mb-3 cursor-pointer border-b pb-2"
            onClick={() => setOpenProduct(!openProduct)}
          >
            Products
          </h3>
          {/* Display only on small screens */}
          <ul className={`${openProduct ? 'block' : 'hidden'} md:block space-y-2`}>
            <li><a href="#" className="hover:text-red-600">Product A</a></li>
            <li><a href="#" className="hover:text-red-600">Product B</a></li>
            <li><a href="#" className="hover:text-red-600">Product C</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3
            className="font-bold text-lg mb-3 cursor-pointer border-b pb-2"
            onClick={() => setOpenServices(!openServices)}
          >
            Services
          </h3>
          {/* Display only on small screens */}
          <ul className={`${openServices ? 'block' : 'hidden'} md:block space-y-2`}>
            <li><a href="#" className="hover:text-red-600">Service A</a></li>
            <li><a href="#" className="hover:text-red-600">Service B</a></li>
            <li><a href="#" className="hover:text-red-600">Service C</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="font-bold text-lg mb-3 cursor-pointer border-b pb-2"
            onClick={() => setOpenQuickLinks(!openQuickLinks)}
          >
            Quick Links
          </h3>
          {/* Display only on small screens */}
          <ul className={`${openQuickLinks ? 'block' : 'hidden'} md:block space-y-2`}>
            <li><a href="#" className="hover:text-red-600">Link A</a></li>
            <li><a href="#" className="hover:text-red-600">Link B</a></li>
            <li><a href="#" className="hover:text-red-600">Link C</a></li>
          </ul>
        </div>

        {/* Connect With Us */}
        {/* Connect With Us */}
        <div>
          <h3
            className="font-bold text-lg mb-3 cursor-pointer border-b pb-2"
            onClick={() => setOpenConnect(!openConnect)}
          >
            Connect With Us
          </h3>
          {/* Display only on small screens */}
          <div className={`${openConnect ? 'block' : 'hidden'} md:block`}>
            <div className="flex items-center space-x-2 mb-2">
              <i className="text-green-500 fa-brands fa-whatsapp"></i>
              <span>+91 44444 44444</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="text-green-500 fa-brands fa-solid fa-envelope"></i>
              <span>xyz@gmail.com</span>
            </div>
            <h3 className="font-bold text-lg mb-3 sm:hidden md:grid">Follow Us</h3>
            {/* Follow Us icons - changed to grid for medium devices and larger */}
            <div className="flex sm:grid md:grid-cols-5 gap-4 text-xl sm:hidden md:flex">
              <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="text-black hover:text-gray-800"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="text-pink-600 hover:text-pink-800"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="text-blue-500 hover:text-blue-700"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" className="text-red-600 hover:text-red-800"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>

      </div>

      {/* Follow Us Section */}
      <div className=" py-2 lg:hidden">
        <div className="container mx-auto">
          <h3 className="font-bold text-lg mb-3 text-black">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="text-black hover:text-gray-800"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" className="text-pink-600 hover:text-pink-800"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-blue-500 hover:text-blue-700"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="text-red-600 hover:text-red-800"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
