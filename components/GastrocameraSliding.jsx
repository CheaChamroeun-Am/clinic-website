"use client";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react";

const items = [
  {
    mainTitle: "Gastrocamera Examination",
    mainText:
      "A definitive diagnosis is made by directly observing the mucous membranes of the pharynx, esophagus, stomach, and duodenum. Helicobacter pylori testing is also available.",
    main2Text: "Helicobacter pylori testing is also available.",
    buttonText: "More Details",
    buttonLink: "/clinic",
    items: [
      { link: "/clinic", text: "About Gastrocamera" },
      { link: "/clinic", text: "Characteristics of our hospital" },
      { link: "/clinic", text: "Test flow" },
      { link: "/clinic", text: "Cost of testing" },
    ],
    imageUrl: "/gastrocamera.jpg",
  },
  {
    mainTitle: "Coloncamera Examination",
    mainText:
      "Colon polyps can be removed at the same time as definitive diagnosis and examination of diseases of the rectum and large intestine.",
    main2Text: "In-hospital laxatives are also avaliable.",
    buttonText: "More Details",

    buttonLink: "/clinic",
    items: [
      { link: "/clinic", text: "About colon camera" },
      { link: "/clinic", text: "Characteristics of our hospital" },
      { link: "/clinic", text: "Test flow" },
      { link: "/clinic", text: "Cost of testing" },
    ],
    imageUrl: "/coloncamera.png",
  },
];

const GastrocameraSliding = () => {
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
    <div className="bg-main-gray mt-32">
      <div className="section1 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="order-last lg:order-first">
          <div>
            <h3>{items[currentIndex].mainTitle}</h3>
            <p className="mt-3">{items[currentIndex].mainText}</p>
            <p className="2">{items[currentIndex].main2Text}</p>

            <button className="bg-main text-white rounded-md px-4 py-2 gap-3 mt-5">
              <Link href={items[currentIndex].buttonLink}>
                <>
                  <span>{items[currentIndex].buttonText}</span>
                </>
              </Link>
            </button>

            <div className="mt-5">
              {items[currentIndex].items.map((item, index) => (
                <div key={index} className="flex items-center">
                  <BiChevronRight size={20} className="text-main" />
                  <span className="ml-2 text-main font-bold">
                    <Link href={item.link}>{item.text}</Link>
                  </span>
                </div>
              ))}
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
        </div>

        <div className="order-first lg:order-last">
          <img
            src={items[currentIndex].imageUrl}
            alt="endoscope"
            className="w-full h-full 2xl:h-[355px]"
          />
        </div>
      </div>
    </div>
  );
};

export default GastrocameraSliding;
