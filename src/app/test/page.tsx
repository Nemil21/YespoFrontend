"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ScrollCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const handleMouseWheel = (event: WheelEvent) => {
      event.preventDefault();

      const totalWidth = wrapperRef.current.scrollWidth - containerRef.current.clientWidth;
      const moveDistance = event.deltaY; // Directly using the deltaY for scroll movement
      const newPos = Math.min(Math.max(0, mouseY + moveDistance), totalWidth); // Ensure scroll stays within bounds

      setMouseY(newPos);

      gsap.to(wrapperRef.current, {
        x: -newPos,
        ease: "power1.inOut",
        overwrite: "auto", // Overwrites previous animation
      });
    };

    const container = containerRef.current;

    container.addEventListener("wheel", handleMouseWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleMouseWheel);
    };
  }, [mouseY]);

  return (
    <main className="h-full flex items-center justify-center bg-gray-900 text-white">
      <div ref={containerRef} className="relative w-full max-w-7xl overflow-hidden">
        <div ref={wrapperRef} className="flex gap-6 w-max py-10 px-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-72 h-96 bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg text-xl font-bold"
            >
              Card {i + 1}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
