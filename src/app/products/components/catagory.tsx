"use client";
import ProductCardCatalog from "./productcard"; 
import Image from "next/image";

interface PromoBannerProps {
  image: string;
  discountText: string;
  title: string;
  buttonText: string;
}

const SolorBanner: React.FC<PromoBannerProps> = ({ image, discountText, title, buttonText }) => (
  <div className="relative">
    <Image src={image} alt={title} width={900} height={400} className="rounded-lg" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <p className="text-sm">{discountText}</p>
      <h3 className="text-2xl font-bold">{title}</h3>
      <button className="bg-red-600 text-white px-4 py-2 rounded mt-2">{buttonText}</button>
    </div>
  </div>
);

const Categories: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-6 mt-6 text-black">
        <div className="flex flex-col lg:flex-col mb-4 border-b pb-4">
          <h1 className="text-5xl font-bold border-b-[5px] border-red-600 pb-4 leading-[3.5rem]">
            Shop by <br /> Categories
          </h1>
          <div className="flex-col items-center gap-4">
            <div className="flex gap-4 items-center justify-center">
              <Image
                src="/Static/Image/about3.png"
                alt="Category Icon"
                width={150}
                height={50}
              />
              <p className="text-lg font-semibold text-left">
                10+ <br /> New Products
              </p>
            </div>
            <a href="#" className=" font-semibold text-xl flex items-center gap-2">
              <span className="border-b-[3px] border-b-red-600 pb-1 pr-2">All Categories →</span>
            </a>
          </div>
        </div>
        <div> {/* cards in the catalog section*/}
          <ProductCardCatalog image="/Static/Image/about2.png" title="Inverter 1" />
        </div>
        <div>
          <ProductCardCatalog image="/Static/Image/about2.png" title="Inverter 2" />
        </div>
        <div>
          <ProductCardCatalog image="/Static/Image/about2.png" title="Inverter 3" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div> {/* Solar cards in the catalog section*/}
          <SolorBanner
            image="/Static/product/image.png"
            discountText="30% OFF ON STUFF"
            title="Solar Panels"
            buttonText="Shop Now"
          />
        </div>
        <div>
          <SolorBanner
            image="/Static/product/image.png"
            discountText="50% OFF ON STUFF"
            title="Solar Panels"
            buttonText="Shop Now"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
