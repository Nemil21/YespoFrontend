import Image from 'next/image';
import Banner from "../../../public/Static/Image/Banner.png"
const FullScreenImage = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Default image for smaller screens */}
      <Image
        src={Banner}
        alt="Responsive Fullscreen Image"
        layout="fill"
        objectFit="container"
        className="hidden md:block" // Hidden on smaller screens
        priority
      />
      
      {/* Medium-sized image for larger screens */}
      <Image
        src={Banner}
        alt="Responsive Fullscreen Image"
        layout="fill"
        objectFit="container"
        className="hidden lg:block" // Hidden on medium screens and smaller
        priority
      />

      {/* Large image for extra large screens */}
      <Image
        src={Banner}
        alt="Responsive Fullscreen Image"
        layout="fill"
        objectFit="container"
        className="block lg:hidden xl:block" // Hidden on smaller screens and medium
        priority
      />
    </div>
  );
};

const FullScreenSingleImage = () => {
    return (
      <div className="relative w-full h-screen">
        <Image
          src={Banner} 
          alt="Responsive Fullscreen Image"
          layout="fill" 
          objectFit="container" 
          className="w-full h-full p-5"
          priority 
        />
      </div>
    );
  };
export {FullScreenImage , FullScreenSingleImage};
