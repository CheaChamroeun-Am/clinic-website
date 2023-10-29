import React from "react";
import Link from "next/link";
import FirstTimeUserSlider from "../../components/FirstTimeUserSlider";
import Contact from "../../components/Contact";
import Button from "../../components/Button";

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
];

const FirstTimeUser = () => {
  return (
    <div>
      <div className="main-section">
        <div className="flex gap-3 text-[13px] text-gray-500">
          <Link href="/" className="underline">
            Home
          </Link>
          <span>/</span>
          <span>Menu</span>
        </div>

        <div className="mt-10" id="ForFirstTimeUser">
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

      <div className=" bg-main-gray mt-32 h-[20vh]" id="InternalMedicine">
        <div className="section1" id="Gastroenterology">
          <h2 className="text-center">Medical Information</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 -mt-16 section2">
        {medicalInfo.map((item) => (
          <div className="shadow-lg p-5 " key={item.id}>
            <h3>{item.title}</h3>
            <p className="mt-3">{item.description}</p>
            <Button title={item.buttonTitle} className="mt-5" />
          </div>
        ))}
      </div>

      <div className="section2 mt-5" id="Endoscopy">
        <div className=" p-5 shadow-lg">
          <h3>Endoscopy (gastrocamera/colon camera examination)</h3>
          <p className="mt-4">
            This is a test in which an endoscope with a camera attached to the
            tip is inserted to directly observe the mucous membranes of the
            gastrointestinal tract. Conditions such as inflammation and polyps
            can be confirmed in detail, and tissue can be collected from
            suspicious areas, making it possible to make a definitive diagnosis.
          </p>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-main text-white p-5 rounded-md">
              <h4>Gastroscope</h4>
              <p className="mt-4">
                This is a test in which an endoscope is inserted through the
                mouth or nose to directly observe the mucous membranes of the
                esophagus, stomach, and duodenum. You can also check for
                Helicobacter pylori infection. If the patient tests positive for
                Helicobacter pylori infection, eradication treatment is also
                performed.
              </p>
              <p>
                We recommend that people over the age of 40, when the risk of
                stomach cancer starts to increase, have a gastroscopy done at
                least once, even if they have no symptoms.
              </p>
              <button className="bg-white text-main py-2 px-4 rounded-md mt-5">About gastrocamera</button>
            </div>
            <div className="bg-main text-white p-5 rounded-md">
              <h4>Colon camera</h4>
              <p className="mt-4">
                This is a test in which an endoscope is inserted through the
                anus to directly observe the mucous membrane throughout the
                large intestine, from the cecum to the rectum. It is possible to
                confirm the characteristic lesions of inflammatory diseases and
                observe minute changes in detail, making it extremely useful for
                the early detection of precancerous polyps and colorectal
                cancer.
              </p>
              <p>
                Additionally, if a polyp that has the potential to develop into
                colorectal cancer in the future is discovered during the test,
                it can be removed on the spot, which not only helps with the
                test but also helps prevent colorectal cancer.
              </p>
              <button className="bg-white text-main py-2 px-4 rounded-md mt-5">About colon camera</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default FirstTimeUser;
