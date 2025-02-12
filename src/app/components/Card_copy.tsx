"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import parse from "html-react-parser";

const fetchDataFromApis = async () => {
  const urls = [
    'http://127.0.0.1:8000/catalog/catalogs_new_drops/',
    'http://127.0.0.1:8000/catalog/catalogs_inveter/',
    'http://127.0.0.1:8000/catalog/catalogs_aio_lithium/',
    'http://127.0.0.1:8000/catalog/catalogs_ac_stabalizer/',
  ];

  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const data = await Promise.all(responses.map((response) => response.json()));
  return data.map((catalog, index) => catalog.map((item) => ({ ...item, apiIndex: index })));
};

export default function ScrollCards() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const cardRefs = useRef([]);
  const [scrollX, setScrollX] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [allCards, setAllCards] = useState([]);
  const [activeApiIndex, setActiveApiIndex] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const catalogs = await fetchDataFromApis();
      const allCards = catalogs.flat();
      setAllCards(allCards);
    };
    getData();
  }, []);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const container = containerRef.current;

    const handleWheelScroll = (event) => {
      event.preventDefault();
      const totalWidth = wrapperRef.current.scrollWidth - container.clientWidth;
      const moveDistance = event.deltaY;
      const newPos = Math.min(Math.max(0, scrollX + moveDistance), totalWidth);
      setScrollX(newPos);

      gsap.to(wrapperRef.current, {
        x: -newPos,
        ease: "power2.out",
        duration: 0.5,
        overwrite: "auto",
      });
    };

    container.addEventListener("wheel", handleWheelScroll, { passive: false });
    return () => container.removeEventListener("wheel", handleWheelScroll);
  }, [scrollX]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveApiIndex(parseInt(entry.target.dataset.apiIndex));
          }
        });
      },
      { threshold: 0.7 } // Adjusted threshold to 50% visibility
    );

    const cardsElements = document.querySelectorAll('.card');
    cardsElements.forEach((card) => observer.observe(card));
    return () => cardsElements.forEach((card) => observer.unobserve(card));
  }, [allCards]);

  const handleScrollToCategory = (index) => {
    const cardElement = cardRefs.current.find(
      (card) => card.dataset.apiIndex == index
    );
    if (cardElement && wrapperRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const cardLeftOffset = cardElement.offsetLeft;
      const scrollPosition = Math.max(0, cardLeftOffset - containerWidth / 2 + cardElement.clientWidth / 2);
      gsap.to(wrapperRef.current, {
        x: -scrollPosition,
        ease: "power2.out",
        duration: 0.8,
      });
      setActiveApiIndex(index); // Update the active API index when the button is clicked
    }
  };

  return (
    <main className="h-full flex items-center justify-center py-10 px-20 flex-col w-full lg:translate-x-10">
      <div className="flex flex-row justify-start items-center whitespace-nowrap overflow-x-hidden w-full lg:p-10 lg:gap-20 sm:gap-4">
        {["New Drops", "Inveter", "AIO Lithium", "AC Stabilizer"].map((label, index) => (
          <button
            key={index}
            onClick={() => handleScrollToCategory(index)}
            className={`px-5 py-2 gap-15 rounded-full transition-all text-sm font-semibold whitespace-nowrap lg:px-10 ${
              activeApiIndex === index
                ? "bg-red-600 text-white"
                : "text-black hover:text-gray-600"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div ref={containerRef} className="relative w-full overflow-hidden">
        <div ref={wrapperRef} className="flex gap-6 w-max py-8 px-6">
          {allCards.map((card, index) => (
            <div
              key={`${card.id}-${card.card_title}-${index}`}
              data-api-index={card.apiIndex}
              className="relative w-[400px] h-[300px] rounded-xl bg-red-50 shadow-lg overflow-hidden group card lg:gap-10"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              {/* Main Image: Render only if a valid URL exists */}
              <div className="relative w-full h-full">
                {card.card_image ? (
                  <Image
                    src={card.card_image}
                    alt={card.card_title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                ) : null}
              </div>

              {/* Small Product Image Overlay: Render only if product_image exists */}
              {card.product_image && (
                <div className="absolute bottom-3 right-3 w-20 h-14">
                  <Image
                    src={card.product_image}
                    alt="Product"
                    width={80}
                    height={56}
                    className="rounded-md shadow-md"
                  />
                </div>
              )}

              {/* Title Section */}
              <div className="absolute bottom-0 left-0 w-full bg-white p-2">
                <p className="text-gray-800 font-semibold text-xl px-4 rounded-lg border-solid">
                  {card.card_title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
