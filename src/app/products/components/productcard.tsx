"use client";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
}

const ProductCardCatalog: React.FC<ProductCardProps> = ({ image, title }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center max-h-[431px]">
    <Image src={image} alt={title} width={243} height={244} />
    <h1 className="mt-2 font-medium text-black">{title}</h1>
  </div>
);
//this is for card of Shop by Categoriey
export default ProductCardCatalog;

