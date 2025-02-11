// components/Card.js
export default function Card() {
  return (
    <div className="max-w-sm mx-auto">
      {/* Card Container */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg relative group">
        
        {/* Image Section */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
            alt="Image"
            className="w-full h-64 object-cover"
          />
          
          {/* Title on Image */}
          <div className="absolute bottom-2 left-2 text-white font-semibold text-lg bg-black bg-opacity-50 p-2 rounded">
            Beautiful Landscape
          </div>
        </div>
        
        {/* Behind Card (Initially hidden) */}
        <div
          className="bg-white shadow-lg w-full opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-h-[100px]"
        >
          <p className="text-gray-700 p-4">
            This is a description that becomes visible when you hover over the image. It provides more context to the image and its content.
          </p>
        </div>
        
      </div>
    </div>
  );
}
