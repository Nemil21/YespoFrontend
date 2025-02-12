"use client";
import { useState } from "react";
import Image from "next/image";

const ProductCard = ({ image, discount, title, reviews, price, timer }) => (
  <div className="bg-white shadow-lg rounded-lg p-4">
    <div className="relative">
      <Image src={image} alt={title} width={250} height={100} className="rounded-lg" />
      <span className="absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded">{discount}</span>
    </div>
    <div className="border-t-[4px] border-b-[4px] border-red-600 mt-4 pt-2 text-xl font-medium py-2">
      SALES END IN: {timer}
    </div>
    <h3 className="text-lg font-semibold mt-2">{title}</h3>
    <p className="text-gray-500 text-sm">⭐ ⭐ ⭐ ⭐ ⭐ ({reviews} Reviews)</p>
    <p className="text-red-600 font-bold">Rs {price}</p>
  </div>
);

export default function ProductCatalogue() {
  const [selectedTab, setSelectedTab] = useState("latest"); // Default tab is "Latest Products"

  // Sample data for different categories
  const products = {
    latest: [
      { image: "/Static/Image/about2.png", discount: "-30%", title: "Smart Inverter", reviews: "4", price: "20000", timer: "255d : 45h : 44m : 52s" },
      { image: "/Static/Image/about2.png", discount: "-20%", title: "Smart Fan", reviews: "5", price: "15000", timer: "125d : 23h : 14m : 10s" },
      { image: "/Static/Image/about2.png", discount: "-10%", title: "LED Bulb", reviews: "3", price: "500", timer: "15d : 12h : 30m : 5s" },
    ],
    popular: [
      { image: "/Static/Image/about2.png", discount: "-50%", title: "Air Conditioner", reviews: "500", price: "50000", timer: "365d : 10h : 12m : 30s" },
      { image: "/Static/Image/about2.png", discount: "-40%", title: "Washing Machine", reviews: "420", price: "30000", timer: "200d : 12h : 14m : 50s" },
      { image: "/Static/Image/about2.png", discount: "-30%", title: "Refrigerator", reviews: "380", price: "25000", timer: "120d : 5h : 30m : 5s" },
    ],
    reviewed: [
      { image: "/Static/Image/about2.png", discount: "-25%", title: "Laptop", reviews: "1000", price: "60000", timer: "45d : 18h : 30m : 15s" },
      { image: "/Static/Image/about2.png", discount: "-15%", title: "Smartphone", reviews: "900", price: "30000", timer: "75d : 20h : 25m : 30s" },
      { image: "/Static/Image/about2.png", discount: "-10%", title: "Smart Watch", reviews: "600", price: "12000", timer: "35d : 12h : 10m : 45s" },
    ],
  };

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  // Render products based on selected tab
  const renderProducts = () => {
    return products[selectedTab].map((product, index) => (
      <ProductCard key={index} {...product} />
    ));
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 py-10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 border-b pb-4">
        <h2 className="text-4xl font-bold text-black">Catalogue</h2>
        <div className="flex space-x-6 text-gray-500 font-semibold">
          <span
            className={`cursor-pointer ${selectedTab === "latest" ? "text-black border-b-2 border-black pb-1" : ""}`}
            onClick={() => handleTabClick("latest")}
          >
            Latest Products
          </span>
          <span
            className={`cursor-pointer ${selectedTab === "popular" ? "text-black border-b-2 border-black pb-1" : ""}`}
            onClick={() => handleTabClick("popular")}
          >
            Most Popular
          </span>
          <span
            className={`cursor-pointer ${selectedTab === "reviewed" ? "text-black border-b-2 border-black pb-1" : ""}`}
            onClick={() => handleTabClick("reviewed")}
          >
            Most Reviewed
          </span>
        </div>
        <button className="border px-4 py-2 rounded flex items-center gap-2">
          All Products →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {renderProducts()}
      </div>
    </div>
  );
}
