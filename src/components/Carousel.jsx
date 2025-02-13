import { useState, useEffect } from "react";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    { url: "../../public/bnr1.jpg", id: "bnr1" },
    { url: "../../public/bnr3.jpg", id: "bnr3" },
    { url: "../../public/bnr12.jpg", id: "bnr12" },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const setObjectPosition = (id) => {
    switch (id) {
      case "bnr1":
        return "object-center";
      case "bnr3":
        return "object-[35%_0]";
      case "bnr12":
        return "object-[25%_75%]";
      default:
        return "";
    }
  };

  return (
    <div className="relative w-full min-h-96 h-[500px] overflow-hidden">
      <div className="relative overflow-hidden w-full h-full bg-red-200 rounded-lg">
        <div className="flex transition-transform duration-700 ease-in-out h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img src={slide.url} alt="img" className={`object-cover rounded-lg w-full h-full ${setObjectPosition(slide.id)}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full border border-gray-400 transition-colors ${currentSlide === index ? "bg-blue-700 border-blue-700" : "bg-transparent"}`}>
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
