"use client";
import PromoBanner from '../components/prenavbar'; 
import Navbar from '../components/navbar'; 
import Fotter from '../components/footer'; 

export default function ContactUs() {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <div className="flex flex-col md:flex-row items-start justify-between w-full px-6 md:px-12 py-10 gap-6">
        {/* Contact Form Section */}
        <div className="md:w-1/2 p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-4 text-black">Contact Us</h2>
          <p className="mb-4 text-black">
            Our first priority is customer satisfaction! You can contact us at any point of time!
          </p>
          
          <div className="mb-4 space-y-2 text-gray-800">
            <p className="flex items-center gap-2 font-medium"><i className="fa-brands fa-whatsapp text-green-600"></i> Chat with us on WhatsApp</p>
            <p className="flex items-center gap-2 font-medium"><i className="fa-regular fa-envelope text-gray-600"></i> Drop us a mail!</p>
            <p className="flex items-center gap-2 font-medium"><i className="fa-solid fa-phone text-gray-600"></i> Contact us on our Toll-Free Number</p>
          </div>

          <form className="space-y-4 text-black">
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-10  justify-between w-2/3">
              <div>
                <h1 className='text-xl px-4 py-2'> First Name</h1>
              <input type="text" placeholder="First Name" className="border p-3 w-full rounded-3xl" /></div>
              <div>
                <h1 className='text-xl px-4 py-2'> Last Name</h1>
              <input type="text" placeholder="Last Name" className="border p-3 w-full rounded-3xl" /></div>
            </div>
            <div><h1 className='text-xl px-4 py-2'>Email</h1>
            <input type="email" placeholder="Email" className="border p-3 w-2/5 rounded-3xl" /></div>
            <div><h1 className='text-xl px-4 py-2'>Confirm Email</h1>
            <input type="email" placeholder="Email" className="border p-3 w-2/5 rounded-3xl" /></div>
            
            <div className="grid grid-cols-2 gap-2  w-2/3">
              <label><input type="checkbox" className="mr-2 whitespace-nowrap accent-red-500" /> Website Design</label>
              <label><input type="checkbox" className="mr-2 whitespace-nowrap accent-red-500" /> Content Creation</label>
              <label><input type="checkbox" className="mr-2 whitespace-nowrap accent-red-500" /> UX Design</label>
              <label><input type="checkbox" className="mr-2 whitespace-nowrap accent-red-500" /> Strategy & Consulting</label>
              <label><input type="checkbox" className="mr-2 whitespace-nowrap accent-red-500" /> User Research</label>
              <label><input type="checkbox" className="mr-2 whitespace-nowrap accent-red-500" /> Other</label>
            </div>

            <button type="submit" className="bg-black text-white px-6 py-3 rounded-xl w-full sm:w-auto">
              Send Message
            </button>
          </form>
        </div>

        {/* Google Maps Section */}
        <div className="w-full md:w-1/2 h-full rounded-lg overflow-hidden flex justify-center">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2932202985835!2d77.37859527585336!3d28.62097278460483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefc48bbcb459%3A0xb7e9fb5b07b33bb6!2sYepso!5e0!3m2!1sen!2sin!4v1738947126532!5m2!1sen!2sin" 
            className="w-full h-96 md:h-[550px] border rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <Fotter />
    </>
  );
}
