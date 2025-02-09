"use client";

import { useState } from "react";

const categories = ["New Drops", "Inverter", "AIO Lithium", "Ac Stabiliser"];

const CategoryNav = () => {
  const [selected, setSelected] = useState<string>(categories[0]); // "New Drops" selected by default

  return (
    <div className="flex items-center gap-1 p-4 bg-gray-100 justify-center whitespace-nowrap overflow-x-hidden">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`px-4 py-2 rounded-full transition-all text-sm font-semibold ${
            selected === category
              ? "bg-red-600 text-white"
              : "text-black hover:text-gray-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;
