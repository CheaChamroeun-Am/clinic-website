import React from "react";
import Link from "next/link";
import FirstTimeUserSlider from "../../../components/FirstTimeUserSlider";
import Contact from "../../../components/Contact";

const medicalInfo = [
  {
    id: 1,
    title: "Internal Medicine",
    description:
      "This is a test in which an endoscope is inserted through the anus to directly observe the mucous membrane throughout the large intestine, from the cecum to the rectum. It is possible to confirm the characteristic lesions of inflammatory diseases and observe minute changes in detail, making it extremely useful for the early detection of precancerous polyps and colorectal cancer.Additionally, if a polyp that has the potential to develop into colorectal cancer in the future is discovered during the test, it can be removed on the spot, which not only helps with the test but also helps prevent colorectal cancer.",
    buttonTitle: "Read More Detail",
  },
  {
    id: 2,
    title: "Gastroenterology",
    description:
      "We specialize in treating the entire digestive tract, including the entire digestive tract from the mouth to the anus, including the esophagus, stomach, duodenum, small intestine, and large intestine, as well as the liver, gallbladder, and pancreas, which are responsible for digestive functions. By performing stomach and colonoscopy, which are painless, we can make a definitive diagnosis at an early stage, leading to appropriate treatment.",
    buttonTitle: "Read More Detail",
  },
  {
    id: 3,
    title: "Gastroscope",
    description:
      "This is a test in which an endoscope is inserted through the mouth or nose to directly observe the mucous membranes of the esophagus, stomach, and duodenum. You can also check for Helicobacter pylori infection. If the patient tests positive for Helicobacter pylori infection, eradication treatment is also performed.We recommend that people over the age of 40, when the risk of stomach cancer starts to increase, have a gastroscopy done at least once, even if they have no symptoms.",
    buttonTitle: "About Gastroscope",
  },
  {
    id: 4,
    title: "Colon Camera",
    description:
      "This is a test in which an endoscope is inserted through the anus to directly observe the mucous membrane throughout the large intestine, from the cecum to the rectum. It is possible to confirm the characteristic lesions of inflammatory diseases and observe minute changes in detail, making it extremely useful for the early detection of precancerous polyps and colorectal cancer.Additionally, if a polyp that has the potential to develop into colorectal cancer in the future is discovered during the test, it can be removed on the spot, which not only helps with the test but also helps prevent colorectal cancer.",
    buttonTitle: "About Colon Camera",
  },
];

const FirstTimeUser = () => {
  return (
    <div>
      <div className="main-section">
        <div className="flex gap-3 text-[14px] text-gray-500">
          <Link href="/" className="underline">
            Home
          </Link>
          <span>/</span>
          <span>Menu</span>
          <span>/</span>
          <span>For First Time User</span>
        </div>

        <div className="mt-10">
          <h2 className="text-center">For First Time Users</h2>
          <p className="text-center mt-5 text-base">
            When you visit our clinic for the first time, please bring your
            insurance card. Also, if you take any medicines, please bring a
            medicine notebook or something that shows the medicines you are
            taking.*Insurance card confirmation is required at the first medical
            treatment of each month. Please be sure to bring your insurance card
            with you to your first visit of the month.
          </p>

          <div>
            <FirstTimeUserSlider />
          </div>
        </div>
      </div>

      <div className=" bg-main-gray mt-32 h-[20vh]">
        <div className="section1">
          <h2 className="text-center">Medical Information</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 -mt-16 section2">
        {medicalInfo.map((item) => (
          <div className="bg-gray shadow-lg p-5 " key={item.id}>
            <h3>{item.title}</h3>
            <p className="mt-3">{item.description}</p>
            <button className="bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center mt-5">
              <span>{item.buttonTitle}</span>
            </button>
          </div>
        ))}
      </div>

      <div>
        <Contact/>
      </div>

      
    </div>
  );
};

export default FirstTimeUser;
