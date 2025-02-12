import PromoBanner from '../components/prenavbar'; 
import Navbar from '../components/navbar'; 
import Footer from '../components/footer';
import ResponsiveCarousel from '../components/crousal';
import Categories from './components/catagory'
import ProductCatalogue from './components/product'
import Image from 'next/image';


const ProductPage = () => {
  const images = [
    "/Static/Image/Banner.png",
    "/Static/Image/Banner.png",
    "/Static/Image/Banner.png",
  ];

  return (
    
    <div>
      <PromoBanner />
      <Navbar/>
      <ResponsiveCarousel 
      images={images} 
        autoplayDelay={5000} 
        slidesPerView={1} 
        spaceBetween={30}/>

        <Categories/>
        <ProductCatalogue/>

    

      <Footer />

    </div>
  );
};

export default ProductPage;
