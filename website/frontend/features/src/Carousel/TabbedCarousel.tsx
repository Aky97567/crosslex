import { useRef, useState } from 'react';

interface CarouselProps {
  tabs: string[];
  children: React.ReactNode[];
}

const Carousel = ({ tabs, children }: CarouselProps) => {
  const [currentTab, setCurrentTab] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleTabClick = (index: number) => {
    setCurrentTab(index);
    const tabElement = document.querySelector(`.tab-${index}`);

    if (tabElement && scrollContainerRef.current) {
      const offset =
        tabElement.getBoundingClientRect().left -
        scrollContainerRef.current.getBoundingClientRect().left;
      scrollContainerRef.current.scrollTo({
        left: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="carousel pt-50">
      {/* Tabs Indicator */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto mb-5 scrollbar-hidden"
      >
        {tabs.map((tab, index) => (
          <div key={index} className="flex-shrink-0 px-10">
            <button
              className={`tab-${index} flex-shrink-0 px-10 py-35 text-md font-semibold transition-all duration-300 hover:bg-brand rounded-sm ${
                currentTab === index
                  ? 'bg-brand border-b-2 border-r-2 border-text text-text'
                  : 'bg-brand-2 text-text-cta'
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </button>
          </div>
        ))}
      </div>

      {/* Carousel Content */}
      <div className="relative">
        <div className="flex transition-opacity duration-500 py-20">
          {children.map((child, index) =>
            currentTab === index ? (
              <div
                key={index}
                className={`flex-shrink-0 w-full transition-opacity duration-500 ${
                  currentTab === index ? 'opacity-100' : 'opacity-0 absolute'
                }`}
              >
                {child}
              </div>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
};

export { Carousel };
