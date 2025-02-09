'use client';
import { useState } from 'react';
import Image from 'next/image';

import Image1 from '../../../public/Static/Image/image1.png';
import Image2 from '../../../public/Static/Image/image2.png';
import Image3 from '../../../public/Static/Image/image3.png';
import Image4 from '../../../public/Static/Image/image4.png';
import Image5 from '../../../public/Static/Image/image4.png';

const categories = ['New Drops', 'Inverter', 'AIO Lithium', 'AC Stabiliser'];
const cardData = [
  { title: 'Solar Inverter', description: 'High efficiency solar inverter for home and commercial use.', image: Image1 },
  { title: 'AC St', description: 'Reliable AC stabilizer for voltage fluctuations.', image: Image2 },
  { title: 'AC St', description: 'Reliable AC stabilizer for voltage fluctuations.', image: Image3 },
  { title: 'AC St', description: 'Reliable AC stabilizer for voltage fluctuations.', image: Image4 },
  { title: 'AC St', description: 'Reliable AC stabilizer for voltage fluctuations.', image: Image5 },
];

const Card = ({ card }: { card: { title: string; description: string; image: StaticImageData } }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-64 flex-shrink-0 rounded-2xl overflow-hidden bg-white shadow-lg transition-transform duration-300 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-40">
        <Image src={card.image} alt={card.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-3 text-center text-black font-medium">
        {card.title}
      </div>
      <div className={`p-2 text-sm text-center text-gray-600 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>{card.description}</div>
    </div>
  );
};

const ButtonTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center gap-6 items-center mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-lg font-medium rounded-full transition-all duration-300 ${
              activeTab === index ? 'bg-red-500 text-white' : 'text-black'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="overflow-hidden flex space-x-4 pb-6 no-scrollbar">
        {cardData.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default ButtonTabs;
