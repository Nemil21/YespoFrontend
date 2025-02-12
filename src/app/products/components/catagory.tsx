"use client";
import Image from "next/image";

const ProductCard = ({ image, title }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
    <Image src={image} alt={title} width={200} height={150} />
    <h1 className="mt-2 font-medium text-black">{title}</h1>
  </div>
);

const PromoBanner = ({ image, discountText, title, buttonText }) => (
  <div className="relative">
    <Image src={image} alt={title} width={900} height={400} className="rounded-lg" />
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white">
      <p className="text-sm">{discountText}</p>
      <h3 className="text-2xl font-bold">{title}</h3>
      <button className="bg-red-600 text-white px-4 py-2 rounded mt-2">{buttonText}</button>
    </div>
  </div>
);

export default function Categories() {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-6 mt-6 text-black">
      <div className="flex flex-col lg:flex-col mb-4 border-b pb-4">
        <h2 className="text-4xl font-bold">Shop by <br /><span className="text-red-600">Categories</span></h2>
        <div className="flex-col items-center gap-4">
          <div className=" p-4 rounded-lg flex gap-4 items-center justify-center">
            <Image src="/Static/Image/about3.png" alt="Category Icon" width={150} height={50} />
            <p className="text-lg font-semibold text-left">10+ <br /> New Products</p>
          </div>
          <a href="#" className="text-red-600 font-semibold flex items-center gap-2">
            All Categories →
          </a>
        </div>
      </div>
        <div><ProductCard image="/Static/Image/about2.png" title="Inverter 1" /></div>
        <div><ProductCard image="/Static/Image/about2.png" title="Inverter 2" /></div>
        <div><ProductCard image="/Static/Image/about2.png" title="Inverter 3" /></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div><PromoBanner image="/Static/product/image.png" discountText="30% OFF ON STUFF" title="Solar Panels" buttonText="Shop Now" /></div>
        <div><PromoBanner image="/Static/product/image.png" discountText="50% OFF ON STUFF" title="Solar Panels" buttonText="Shop Now" /></div>
      </div>
    </div>
  );
}
