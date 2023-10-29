import { useRef, useEffect } from "react";

const AutoSlide = () => {
  const logos = [
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.jpg",
    "/slide4.jpg",
    "/slide5.jpg",
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let requestId;
    let position = 0;

    const step = () => {
      position -= 1;
      if (position <= -scrollElement.scrollWidth / 2) position = 0; // Reset the position when half is scrolled
      scrollElement.style.transform = `translateX(${position}px)`;
      requestId = requestAnimationFrame(step);
    };

    requestId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="overflow-hidden bg-main-gray-100 mx-5">
      <div ref={scrollRef} className="whitespace-nowrap ">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            className="inline-block h-[150px] w-[350px] object-cover mx-4"
            alt={`Logo ${idx}`}
          />
        ))}
        {logos.map((logo, idx) => (
          <img
            key={idx + logos.length}
            src={logo}
            className="inline-block h-[150px] w-[350px] object-cover mx-4"
            alt={`Logo ${idx + logos.length}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlide;
