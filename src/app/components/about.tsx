'use client';

import Image from 'next/image';
import Iamge1 from '../../../public/Static/Image/about2.png'
import Iamge2 from '../../../public/Static/Image/about1.png'
import Iamge3 from  '../../../public/Static/Image/about3.png'

export default function AboutYepso() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full p-6 md:p-12 gap-8">
      {/* Text Section */}
      <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">About Yepso</h2>
        <p className="text-gray-600 mb-4">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
          a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
          Latin words, consectetur, from a Lorem Ipsum passage.
        </p>
        <a href="#" className="text-black font-semibold underline flex items-center hover:text-gray-700">
          Read More About our Journey →
        </a>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-center bg-white rounded-lg shadow-lg p-6">
        <div className="flex space-x-4">
          <Image src={Iamge1} alt="Product 1" width={150} height={200} className="object-contain" />
          <Image src={Iamge2} alt="Product 2" width={150} height={200} className="object-contain" />
          <Image src={Iamge3} alt="Product 3" width={150} height={200} className="object-contain" />
        </div>
      </div>
    </div>
  );
}
