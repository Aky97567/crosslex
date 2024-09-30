import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface Section {
  title: string;
  content: ReactNode;
}

interface FlipCardProps {
  sections: Section[];
}

const FlipCardToTarget: React.FC<FlipCardProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [animatingCardIndex, setAnimatingCardIndex] = useState<number | null>(
    null,
  );
  const [clickedCardRect, setClickedCardRect] = useState<DOMRect | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const expandedCardRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (index: number) => {
    const cardElement = cardRefs.current[index];

    if (cardElement) {
      const cardRect = cardElement.getBoundingClientRect();
      setClickedCardRect(cardRect);
      setAnimatingCardIndex(index);

      setTimeout(() => {
        setActiveSection(index);
        setAnimatingCardIndex(null);
      }, 500);
    }
  };

  const handleCloseClick = () => {
    setActiveSection(null);
  };

  useEffect(() => {
    if (activeSection !== null && expandedCardRef.current && clickedCardRect) {
      const expandedCard = expandedCardRef.current;
      expandedCard.style.position = 'fixed';
      expandedCard.style.top = `${clickedCardRect.top}px`;
      expandedCard.style.left = `${clickedCardRect.left}px`;
      expandedCard.style.width = `${clickedCardRect.width}px`;
      expandedCard.style.height = `${clickedCardRect.height}px`;

      requestAnimationFrame(() => {
        expandedCard.style.transition = 'all 0.5s ease-in-out';
        expandedCard.style.top = '50%';
        expandedCard.style.left = '50%';
        expandedCard.style.transform = 'translate(-50%, -50%)';
        expandedCard.style.width = '100vw';
        expandedCard.style.height = '100vh';
      });
    }
  }, [activeSection, clickedCardRect]);

  return (
    <div className="relative min-h-screen">
      {/* Grid of small cards */}
      <div className="grid grid-cols-2 gap-30 pt-50 px-20">
        {sections.map((section, index) => (
          <div
            key={index}
            className="relative min-h-100"
            ref={el => (cardRefs.current[index] = el)}
          >
            <div
              className={`absolute inset-0 preserve-3d h-full w-full cursor-pointer rounded-md border-2 bg-brand border-brand shadow-lg text-center flex items-center justify-center ${
                animatingCardIndex === index
                  ? 'animate-flipAndExpand z-20 opacity-0'
                  : ''
              }`}
              onClick={() => handleCardClick(index)}
            >
              <p className="text-md font-semibold text-text-cta">
                {section.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded card for the active section */}
      {activeSection !== null && (
        <div
          ref={expandedCardRef}
          className="fixed z-30 bg-transparent rounded-lg shadow-xl overflow-auto p-10 flex items-center justify-center"
        >
          <button
            onClick={handleCloseClick}
            className="absolute top-10 right-10 text-brand"
          >
            X
          </button>
          <p className="px-40 text-center">{sections[activeSection].content}</p>
        </div>
      )}
    </div>
  );
};

export { FlipCardToTarget };
