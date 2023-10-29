"use client";
import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Button from "./Button";

const items = [
  {
    number: "01",
    title: "Reception/fill out medical questionnaire",
    description:
      "Filling out the pre-screening questionnaire before your visit will speed up your check-in process.",
    button: true,
  },
  {
    number: "02",
    title: "Consultation",
    description:
      "The doctor will conduct an examination. Perform visual inspection, auscultation, palpation, etc. as necessary.",
  },
  {
    number: "03",
    title: "Consultation",
    description:
      "The doctor will conduct an examination. Perform visual inspection, auscultation, palpation, etc. as necessary.",
  },
  {
    number: "04",
    title: "Consultation",
    description:
      "The doctor will conduct an examination. Perform visual inspection, auscultation, palpation, etc. as necessary.",
  },
  {
    number: "05",
    title: "Consultation",
    description:
      "The doctor will conduct an examination. Perform visual inspection, auscultation, palpation, etc. as necessary.",
  },
];

const FirstTimeUserSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressPosition, setProgressPosition] = useState("left");

  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < items.length - 2 ? prevIndex + 1 : prevIndex
    );
    setProgressPosition("right");
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    setProgressPosition("left");
  };

  const visibleItems = items.slice(currentIndex, currentIndex + 3);

  return (
    <div className="section">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {visibleItems.map((item, index) => (
          <div className="flex justify-center" key={index}>
            <div className="flex flex-col items-center">
              <span className="rounded-full bg-main-gray w-16 h-16 flex justify-center items-center">
                <p className="text-main font-bold text-2xl">{item.number}</p>
              </span>
              <h3 className="text-center mt-3">{item.title}</h3>
              <p className="text-center mt-3">{item.description}</p>
              {item.button && (
                <div>
                  <Button title="Fill Form" className="mt-5" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-20 gap-4 items-center">
        <span className="rounded-full border border-main w-7 h-7 flex justify-center items-center">
          <BiChevronLeft
            className="text-main cursor-pointer"
            size={30}
            onClick={prevItem}
          />
        </span>

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

        <span className="rounded-full border border-main w-7 h-7 flex justify-center items-center">
          <BiChevronRight
            className="text-main cursor-pointer"
            size={30}
            onClick={nextItem}
          />
        </span>
      </div>
    </div>
  );
};

export default FirstTimeUserSlider;
