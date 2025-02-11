"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ScrollCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state to control scroll behavior

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const container = containerRef.current;
    const totalWidth = wrapperRef.current!.scrollWidth - container.clientWidth;

    // Desktop Scroll (Mouse Wheel)
    const handleWheelScroll = (event: WheelEvent) => {
      event.preventDefault();

      // Allow horizontal scroll only if inside the card section (isHovered)
      if (isHovered) {
        const moveDistance = event.deltaY * 2; // Control speed
        const newPos = Math.min(Math.max(0, scrollX + moveDistance), totalWidth);
        setScrollX(newPos);

        gsap.to(wrapperRef.current, {
          x: -newPos,
          ease: "power2.out",
          duration: 0.5,
          overwrite: "auto",
        });
      }
    };

    // Mobile Scroll (Touch Gesture)
    const handleTouchStart = (event: TouchEvent) => {
      setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();

      // Allow horizontal scroll only if inside the card section (isHovered)
      if (isHovered) {
        const touchMoveX = event.touches[0].clientX;
        const moveDistance = touchStartX - touchMoveX; // Detect swipe direction

        const totalWidth = wrapperRef.current!.scrollWidth - container.clientWidth;
        const newPos = Math.min(Math.max(0, scrollX + moveDistance), totalWidth);
        setScrollX(newPos);

        gsap.to(wrapperRef.current, {
          x: -newPos,
          ease: "power2.out",
          duration: 0.5,
          overwrite: "auto",
        });

        setTouchStartX(touchMoveX);
      }
    };

    // Attach Events
    container.addEventListener("wheel", handleWheelScroll, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheelScroll);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [scrollX, touchStartX, isHovered]);

  return (
    <main className="h-full flex items-center justify-center bg-gray-900 text-white">
      <div
        ref={containerRef}
        className="relative w-full max-w-7xl overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}  // Set isHovered to true when mouse enters the card section
        onMouseLeave={() => setIsHovered(false)} // Set isHovered to false when mouse leaves the card section
      >
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
