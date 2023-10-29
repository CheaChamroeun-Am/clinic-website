"use client";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Collapse } from "react-collapse";

const items = [
  {
    id: 1,
    title: "Meal",
    desc: "For about a week after the surgery, avoid eating irritating and greasy foods, and eat foods that are easily digestible, such as udon noodles and porridge that won't put a strain on your stomach or intestines.",
  },
  {
    id: 2,
    title: "Alcohol",
    desc: "Please refrain from using it for about a week after the excision. Even non-alcoholic drinks, avoid drinks that contain carbonated carbonate as they can be very irritating.",
  },
  {
    id: 3,
    title: "Rest",
    desc: "Please be sure to rest on the day and the next day.",
  },
  {
    id: 4,
    title: "Motion",
    desc: "You will be able to take a light walk the next day, but most exercise will not be possible for about a week after the surgery.",
  },
  {
    id: 5,
    title: "Bathing",
    desc: "It is possible to take a light shower from the day of the event. Avoid soaking in the bathtub for about a week.",
  },
  {
    id: 6,
    title: "Movements that apply abdominal pressure",
    desc: "Lifting heavy objects can cause strong intra-abdominal pressure, so try to refrain from lifting heavy objects for about a week after the surgery.",
  },
  {
    id: 7,
    title: "Medication and drug withdrawal",
    desc: "If you are taking blood thinning drugs such as anticoagulants or antiplatelet drugs, consult your doctor in advance to determine the period of drug suspension and when to resume taking the drugs, and stick to them.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id} className="pt-[10px]">
          <div
            onClick={() => toggle(index)}
            className="bg-white rounded-md py-[25px] px-[10px] flex justify-between items-center cursor-pointer"
          >
            <div className="flex gap-5 items-center">
              <div className="font-bold text-main">{item.title}</div>
            </div>
            <div>{openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
          </div>
          <Collapse isOpened={openIndex === index}>
            <div className="bg-white pl-2 pb-[20px]">
              <p className="faq-answer">{item.desc}</p>
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
