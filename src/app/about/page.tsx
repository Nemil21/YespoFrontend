"use client";
import PromoBanner from '../components/prenavbar'; 
import Navbar from '../components/navbar'; 
export default function ContactUs() {

  return (
    <>
      <PromoBanner />
      <Navbar />
    <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 sm:px-6 md:px-12 py-10 gap-2">
      {/* Contact Form Section */}
      <div className=" md:w-1/2 rounded-lg  p-6 md:p-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          Our first priority is customer satisfaction! You can contact us at any time!
        </p>
        
        <div className="mb-4 space-y-2">
          <p className="flex items-center gap-2 text-green-600 font-medium">💬 Chat with us on WhatsApp</p>
          <p className="flex items-center gap-2 text-gray-700 font-medium">📧 Drop us a mail!</p>
          <p className="flex items-center gap-2 text-gray-700 font-medium">📞 Contact us on our Toll-Free Number</p>
        </div>

        <form className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="First Name" className="border p-3 w-full rounded" />
            <input type="text" placeholder="Last Name" className="border p-3 w-full rounded" />
          </div>
          <input type="email" placeholder="Email" className="border p-3 w-full rounded" />
          <input type="email" placeholder="Confirm Email" className="border p-3 w-full rounded" />

          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            <label><input type="checkbox" className="mr-2" /> Website Design</label>
            <label><input type="checkbox" className="mr-2" /> Content Creation</label>
            <label><input type="checkbox" className="mr-2" /> UX Design</label>
            <label><input type="checkbox" className="mr-2" /> Strategy & Consulting</label>
            <label><input type="checkbox" className="mr-2" /> User Research</label>
            <label><input type="checkbox" className="mr-2" /> Other</label>
          </div>

          <button type="submit" className="bg-black text-white px-5 py-3 rounded w-full sm:w-auto">
            Send Message
          </button>
        </form>
      </div>

      {/* Google Maps Section */}
      <div className="w-full sm:w-1/2 h-full flex justify-center items-center rounded-lg  sm:p-6">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2932202985835!2d77.37859527585336!3d28.62097278460483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefc48bbcb459%3A0xb7e9fb5b07b33bb6!2sYepso!5e0!3m2!1sen!2sin!4v1738947126532!5m2!1sen!2sin" 
    width="600" 
    height="550" 
    allowFullScreen
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
  </iframe>
</div>

    </div>
    </>
  );
}
