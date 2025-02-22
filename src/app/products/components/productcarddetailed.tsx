import Image from "next/image";

// ProductCardDetailed Component Display the Card
const ProductCardDetailed = ({ image, discount, title, reviews, price, timer }) => (
  <div className="shadow-lg mx-auto max-w-[394px] max-h-[447px] gap-5">
    <div className="relative bg-[#EDEDED]">
      <Image src={image} alt={title} width={280} height={280} className="rounded-lg mx-auto" />
      {discount && (
        <span className="absolute top-2 right-2 bg-red-600 text-white text-sm pb-1 rounded px-4">
          {discount}
        </span>
      )}
    </div>
    <div className="border-t-[3px] border-b-[3px] border-red-600 text-lg font-medium px-4 py-2 lg:text-xl">
      SALES END IN: {timer}
    </div>
    <p className="text-gray-500 text-sm mt-2 px-4">
      ⭐ ⭐ ⭐ ⭐ ⭐ ({reviews} Reviews)
    </p>
    <h3 className="text-xl font-semibold px-4">{title}</h3>
    <p className="text-red-600 font-bold px-4 pb-2">Rs {price}</p>
  </div>
);

export default ProductCardDetailed;
