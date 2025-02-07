'use client';
import textBanner from '../../../public/Static/Image/text2background.png'
import Image from 'next/image';

export default function VoltageEngineer() {
  return (
    <div className="relative flex flex-col justify-center items-center p-10">
      {/* First text without background */}
      <div className="text-black font-bold text-4xl md:text-5xl lg:text-6xl text-center px-4 py-2"
      style={{ fontFamily: 'Cabinet Grotesk' }}
      >
        Your Voltage Engineer whose first priority
      </div>

      {/* Second text with background */}
      <div
        className="relative text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center mx-10 px-4 py-2"
        style={{ fontFamily: 'Cabinet Grotesk' }}
      >
        <Image 
          src={textBanner}
          alt="Background Red" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 -z-10 mx-10"
        />
           is customer satisfaction!! 
      </div>
    </div>
  );
}
