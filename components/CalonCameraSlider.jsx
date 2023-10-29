"use client";
import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const items = [
  {
    number: "1",
    title: "Prior outpatient visit",
    description:
      "We will perform a medical examination and explain in detail about the colon camera examination. We provide easy-to-understand information about dietary restrictions for the day before, taking laxatives on the morning of the day, removal of polyps found during the test, and precautions to be taken afterward. If you have any questions or concerns, please feel free to ask any questions.",
  },
  {
    number: "2",
    title: "The day before the test",
    description:
      "For breakfast and lunch, eat foods that are easy to digest. For dinner, have a light meal such as white porridge or udon noodles by 9:00 pm, and then fast until the day after the test. If you wish, we also sell test food within the hospital.Drink plenty of water, weak tea, and sports drinks.I will take the laxative I gave you and go to bed early.",
  },
  {
    number: "3",
    title: "Morning of the test day",
    description: [
      "Drink about 2 liters of laxative (intestinal cleansing solution) over 2 hours. After about an hour, your bowel movements will become more frequent, and will subside after going to the bathroom a few times.",
      "Please come to the hospital when you feel calm. Please note that if you are undergoing a test that uses painkillers, you will not be able to drive on the day of the test, so please use public transportation or bring a family member with you to the hospital.",
      "After coming to the hospital, we will check your bowel movements and if your stool is clear and yellowish and watery, we can test it. There are also courses where you can take laxatives in the hospital. If you have any wishes, please discuss this with us during your outpatient treatment in advance.",
      "Once you are ready for the test, you will be asked to change into the test wear provided by our hospital and undergo the test.",
    ],
  },
  {
    number: "4",
    title: "Inspection",
    description:
      "The doctor will conduct an examination. Perform visual inspection, auscultation, palpation, etc. as necessary.",
  },
  {
    number: "5",
    title: "Consultation",
    description: [
      "After the test, you will rest for about 30 minutes to an hour until you are completely awake from the sedative. Once you have recovered, your doctor will explain the results while viewing the test images. After the explanation, we will go home. If no abnormalities are found, you can continue with the procedure without any restrictions until the next examination in 2 to 3 years. If any abnormalities are found, we recommend re-examination in 1 to 2 years.",
      { type: "h5", content: "If a polyp is removed" },
      "If a polyp is removed during the examination, you will need to adhere to some restrictions for about a week. For example, you should avoid alcohol consumption, strenuous exercise, and long trips for about a week.",
    ],
  },
];

const CalonCameraSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressPosition, setProgressPosition] = useState("left");

  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 < items.length ? prevIndex + 1 : prevIndex
    );
    setProgressPosition("right");
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    setProgressPosition("left");
  };

  const visibleItems = items.slice(currentIndex, currentIndex + 2);

  return (
    <div className="section">
      <h2 className="text-center">Colon camera flow</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        {visibleItems.map((item) => (
          <div key={item.number} className="bg-main text-white p-5">
            <div className="flex flex-col gap-3">
              <h3>{item.number}</h3>
              <h4>{item.title}</h4>
              {typeof item.description === "string" ? (
                <p>{item.description}</p>
              ) : (
                item.description.map((paragraph, index) => {
                  if (typeof paragraph === "string") {
                    return <p key={index}>{paragraph}</p>;
                  } else if (paragraph.type === "h5") {
                    return <h5 key={index}>{paragraph.content}</h5>;
                  }
                  return null;
                })
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

export default CalonCameraSlider;
