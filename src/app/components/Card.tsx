"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ScrollCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const container = containerRef.current;

    // Desktop Scroll (Mouse Wheel)
    const handleWheelScroll = (event: WheelEvent) => {
      event.preventDefault();

      const totalWidth = wrapperRef.current!.scrollWidth - container.clientWidth;
      const moveDistance = event.deltaY * 2; // Control speed

      const newPos = Math.min(Math.max(0, scrollX + moveDistance), totalWidth);
      setScrollX(newPos);

      gsap.to(wrapperRef.current, {
        x: -newPos,
        ease: "power2.out",
        duration: 0.5,
        overwrite: "auto",
        scrub:3,
      });
    };

    // Mobile Scroll (Touch Gesture)
    const handleTouchStart = (event: TouchEvent) => {
      setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();

      const totalWidth = wrapperRef.current!.scrollWidth - container.clientWidth;
      const touchMoveX = event.touches[0].clientX;
      const moveDistance = touchStartX - touchMoveX; // Detect swipe direction

      const newPos = Math.min(Math.max(0, scrollX + moveDistance), totalWidth);
      setScrollX(newPos);

      gsap.to(wrapperRef.current, {
        x: -newPos,
        ease: "power2.out",
        duration: 0.5,
        overwrite: "auto",
      });

      setTouchStartX(touchMoveX);
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
  }, [scrollX, touchStartX]);

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
