import PromoBanner from './components/prenavbar'; 
import Navbar from './components/navbar'; 
import Footer from './components/footer';
import VoltageEngineer from './components/section2';
import Buttonstxt from './components/Buttons';
import AboutYepso from './components/about';
import  ResponsiveCarousel from './components/crousal';
import Cards from "./components/Card";



const HomePage = () => {
  return (
    <div>
      <PromoBanner />
      <Navbar/>
      <ResponsiveCarousel />
      <VoltageEngineer/>
      < Buttonstxt/>
      < Cards />
      < AboutYepso />
      <Footer />

    </div>
  );
};

export default HomePage;
