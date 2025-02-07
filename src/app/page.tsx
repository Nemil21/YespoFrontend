import PromoBanner from './components/prenavbar'; 
import Navbar from './components/navbar'; 
import Footer from './components/footer';
import VoltageEngineer from './components/section2';
import ProductShowcase from './components/cards';
import AboutYepso from './components/about';
import  { FullScreenImage ,FullScreenSingleImage } from './components/hero';




const HomePage = () => {
  return (
    <div>
      <PromoBanner />
      <Navbar/>
      <FullScreenSingleImage />
      <VoltageEngineer/>
      < ProductShowcase/>
      < AboutYepso />
      <div className="w-full flex flex-col items-center justify-center text-center p-6 bg-gray-100 rounded-lg mt-8">
        <h3 className="text-2xl font-semibold mb-4">Get to know More About Us!</h3>
        <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
          <input type="email" placeholder="Email Address" className="border p-2 flex-1 rounded" />
          <button className="bg-black text-white px-4 py-2 rounded">Submit</button>
        </div>
      </div>
      <FullScreenImage />
      <Footer />

    </div>
  );
};

export default HomePage;
