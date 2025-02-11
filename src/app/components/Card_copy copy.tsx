'use client'
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Head from "next/head";
import Image from "next/image";
const fetchDataFromApis = async () => {
  const urls = [
    'http://127.0.0.1:8000/catalog/catalogs_new_drops/',
    'http://127.0.0.1:8000/catalog/catalogs_inveter/',
    'http://127.0.0.1:8000/catalog/catalogs_aio_lithium/',
    'http://127.0.0.1:8000/catalog/catalogs_ac_stabalizer/',
  ];

  // Fetch data from all APIs
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const data = await Promise.all(responses.map((response) => response.json()));
  return data; // Return the combined data
};

export default function ScrollCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [allCards, setAllCards] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const catalogs = await fetchDataFromApis();
      const allCards = catalogs.flat();
      setAllCards(allCards);

      // Assuming you're setting the title based on the first catalog or any other business logic
      if (allCards.length > 0) {
        setTitle(allCards[0].card_title); // Example of setting the title dynamically based on the first card
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const container = containerRef.current;

    // Desktop Scroll (Mouse Wheel)
    const handleWheelScroll = (event: WheelEvent) => {
      event.preventDefault();

      const totalWidth = wrapperRef.current!.scrollWidth - container.clientWidth;
      const moveDistance = event.deltaY; // Control speed

      const newPos = Math.min(Math.max(0, scrollX + moveDistance), totalWidth);
      setScrollX(newPos);

      gsap.to(wrapperRef.current, {
        x: -newPos,
        ease: "power2.out",
        duration: 0.5,
        overwrite: "auto",
        scrub: 3,
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
    <main className="h-full flex items-center justify-center ">
      <Head>
        <title>{title || "Default Title"}</title> {/* Set title dynamically */}
      </Head>

      <div ref={containerRef} className="relative w-full max-w-7xl overflow-hidden">
        <div ref={wrapperRef} className="flex gap-6 w-max py-10 px-6">
          {allCards.map((card: any, index: number) => (
            <div
              key={`${card.id}-${card.card_title}-${index}`}  // Ensures a unique key
              className="w-72 h-96 rounded-2xl flex flex-col items-center justify-center shadow-lg text-xl font-bold p-4 relative overflow-hidden group hover:scale-105 transform transition-all duration-300"
            >
              <Image
                src={card.card_image}
                alt={card.card_title}
                height={100}
                width={100}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-100">{card.card_title}</h3>

              {/* Hidden description */}
              <p className="text-gray-300 text-center mt-2 truncate group-hover:block hidden transition-all duration-300 ease-in-out absolute bottom-4 left-4 right-4">
                {card.catalogs_desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
