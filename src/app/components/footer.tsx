'use client';
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-5 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-black">
        {/* Products */}
        <div>
          <h3 className="font-bold text-lg mb-3">Products</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-600">Product A</a></li>
            <li><a href="#" className="hover:text-red-600">Product B</a></li>
            <li><a href="#" className="hover:text-red-600">Product C</a></li>
          </ul>
        </div>
        
        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-3">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-600">Product A</a></li>
            <li><a href="#" className="hover:text-red-600">Product B</a></li>
            <li><a href="#" className="hover:text-red-600">Product C</a></li>
          </ul>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-600">Product A</a></li>
            <li><a href="#" className="hover:text-red-600">Product B</a></li>
            <li><a href="#" className="hover:text-red-600">Product C</a></li>
          </ul>
        </div>
        
        {/* Connect With Us */}
        <div>
          <h3 className="font-bold text-lg mb-3">Connect With Us</h3>
          <div className="flex items-center space-x-2 mb-2">
          <i className="text-green-500 fa-brands fa-whatsapp"></i>
            
            <span>+91 44444 44444</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
          <i className="text-green-500 fa-brands fa-solid fa-envelope"></i>
            <span>xyz@gmail.com</span>
          </div>
          <h3 className="font-bold text-lg mb-3">Follow Us</h3>
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
