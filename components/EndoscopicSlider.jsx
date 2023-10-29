"use client";
import React, { useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const items = [
  {
    id: 1,
    title: "endoscopic polypectomy",
    desc: [
      "This method uses a wire called a snare to remove the polyp from the end of the endoscope. It is used to remove small polyps of about 5 to 10 mm. Polypectomy can be divided into polypectomy, which burns out by passing high-frequency current, and cold polypectomy, which does not pass current. Applying high-frequency current can suppress bleeding during excision, as with electric scalpel, but in rare cases, the burn may extend to deep layers, which may cause bleeding or perforation after some time. Cold polypectomy, which removes the tumor without applying electrical current, can be performed without the risk of such complications. Cold polypectomy is a technique that can be used for patients who use a cardiac pacemaker or who are taking antithrombotic drugs to thin the blood.",
      "For removal of colonic polyps smaller than 4 mm, forceps may be taken out from the tip of the endoscope and used to remove them.",
      "Regardless of the method used to remove the tumor, carefully check for bleeding and take measures to stop the bleeding if necessary.",
    ],
    imgUrl: "/endoscopic.png",
  },
  {
    id: 2,
    title: "Endoscopic mucosal resection (EMR)",
    desc: "I use this technique because I can't snare flat polyps. A syringe needle is taken out from the tip of the endoscope, saline is injected into the flat mucosa of the polyp, the polyp is lifted, and a snare is applied to remove it. There is no need to worry about heat being transmitted to the underlying layer, so it is removed using high-frequency current.",
    imgUrl: "/endoscopic2.png",
  },
];

const EndoscopicSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressPosition, setProgressPosition] = useState("left");

  const handleNextSlide = () => {
    setCurrentIndex((currentSlide) =>
      currentSlide < items.length - 1 ? currentSlide + 1 : currentSlide
    );
    setProgressPosition("right");
  };

  const handlePrevSlide = () => {
    setCurrentIndex((currentSlide) =>
      currentSlide > 0 ? currentSlide - 1 : currentSlide
    );
    setProgressPosition("left");
  };
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 gap-y-5">
        <div className="order-last lg:order-first">
          <h3>{items[currentIndex].title}</h3>
          <div className="mt-5">
            {items[currentIndex].desc instanceof Array
              ? items[currentIndex].desc.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              : items[currentIndex].desc}
          </div>

          <div className="flex justify-end items-center mt-10">
            <BiChevronLeft
              size={30}
              className="cursor-pointer text-main"
              onClick={handlePrevSlide}
            />

            {/* Progress bar */}
            <div className="flex w-32">
              <div
                className={`h-1 transition-all duration-300 ${
                  progressPosition === "left" ? "bg-main" : "bg-gray-400"
                }`}
                style={{ flex: 1 }}
              ></div>
              <div
                className={`h-1 transition-all duration-300 ${
                  progressPosition === "right" ? "bg-main" : "bg-gray-400"
                }`}
                style={{ flex: 1 }}
              ></div>
            </div>

            <BiChevronRight
              size={30}
              className="cursor-pointer text-main"
              onClick={handleNextSlide}
            />
          </div>
        </div>
        <div className="order-first lg:order-last">
          <img
            src={items[currentIndex].imgUrl}
            alt={items[currentIndex].title}
          />
        </div>
      </div>
    </div>
  );
};

export default EndoscopicSlider;
