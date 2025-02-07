'use client';
import { useState } from 'react';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

import Logo from "../../../public/Static/Logo/image.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="Logo" width={120} height={40} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center whitespace-nowrap">
          <a href="#" className="text-black hover:text-red-600">Home</a>
          <a href="#" className="text-black hover:text-red-600">Products</a>
          <a href="#" className="text-black hover:text-red-600">Services</a>
          <a href="#" className="text-black hover:text-red-600">Catalogue</a>
          <a href="#" className="text-black hover:text-red-600">Contact Us</a>
          
          {/* Search Bar */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for a product" 
              className="pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-red-200"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
          </div>
          
          {/* Icons */}
          <User className="text-black cursor-pointer" />
          <ShoppingBag className="text-black cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 p-4 bg-white shadow-lg">
          <a href="#" className="text-black hover:text-red-600">Home</a>
          <a href="#" className="text-black hover:text-red-600">Products</a>
          <a href="#" className="text-black hover:text-red-600">Services</a>
          <a href="#" className="text-black hover:text-red-600">Catalogue</a>
          <a href="#" className="text-black hover:text-red-600">Contact Us</a>
          
          {/* Search Bar */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for a product" 
              className="pl-10 pr-4 py-2 border rounded-md w-full focus:ring focus:ring-red-200"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
          </div>

          {/* Icons */}
          <div className="flex space-x-4">
            <User className="text-black cursor-pointer" />
            <ShoppingBag className="text-black cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
}
