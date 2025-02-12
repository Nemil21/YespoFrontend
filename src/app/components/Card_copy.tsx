"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
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
      { threshold: 1 } //how much of an observed element needs to be visible in the viewport for the observer to trigger its callback.
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
    }
  };

  return (
    <main className="h-full flex items-center justify-center py-10 px-20 flex-col w-full">
<div className="flex flex-row justify-start items-center  bg-gray-100 whitespace-nowrap overflow-x-hidden w-full lg:p-4 lg:gap-20 sm:gap-4">
  {["New Drops", "Inveter", "AIO Lithium", "AC Stabilizer"].map((label, index) => (
    <button
      key={index}
      onClick={() => handleScrollToCategory(index)}
      className={`px-4 py-2 gap-15 rounded-full transition-all text-sm font-semibold whitespace-nowrap ${
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
        <div ref={wrapperRef} className="flex gap-6 w-max py-10 px-6">
          {allCards.map((card, index) => (
            <div
              key={`${card.id}-${card.card_title}-${index}`}
              data-api-index={card.apiIndex}
              className="max-w-[320px] mx-auto group transform transition-all duration-300 ease-in-out hover:scale-110 card"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg relative group w-80 h-60">
                <div className="relative w-full h-full">
                  <img
                    src={card.card_image}
                    alt={card.card_title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 text-white font-semibold text-lg bg-black bg-opacity-50 p-2 rounded">
                    {card.card_title}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="text-gray-700 p-4">{parse(card.catalogs_desc)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
