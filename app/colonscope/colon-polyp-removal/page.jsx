import React from "react";
import Link from "next/link";
import Button from "../../../components/Button";
import { BsChevronRight } from "react-icons/bs";
import EndoscopicSlider from "../../../components/EndoscopicSlider";
import Accordion from "../../../components/Accordion";
import Contact from "../../../components/Contact";


const ColonPolypRemoval = () => {
  return (
    <div>
      <div className="main-section">
        <div className="flex gap-3 text-[13px]  text-gray-500">
          <Link href="/" className="underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/colonscope" className="underline">
            Colonscope
          </Link>
          <span>/</span>
          <span>Colon polyp removal</span>
        </div>
      </div>

      <div className="section2 mt-20">
        <h2 className="text-center">Colon polyp removal</h2>
      </div>

      <div className="section">
        <div>
          <div className="flex justify-center md:float-right md:ml-10">
            <img
              src="/colonremoval1.png"
              alt="endoscope"
              className="w-full h-full lg:h-[320px]"
            ></img>
          </div>
        </div>
        <div>
          <h2 className="mt-5 md:mt-0">Same-day colon polyp removal</h2>
          <p className="mt-5">
            Colon polyps discovered during a colonoscopy can be removed on the
            spot. There is no need to make a schedule for another day, and the
            patient can receive the treatment without being hospitalized, which
            greatly reduces the time and financial burden on the patient.A
            wire-shaped snare is taken out from the tip of the endoscope, hooked
            onto the polyp, and tightened to remove it. However, depending on
            the shape of the polyp, it may be necessary to inject physiological
            saline to lift the polyp before removing it, or a high-frequency
            current may be applied to the snare. In some cases, it may be
            removed by flushing it out. Depending on the size, shape, number,
            etc. of the colon polyp, it may not be possible to remove it during
            the examination, but in that case, we will introduce you to a
            affiliated medical institution with inpatient facilities and support
            you so that you can receive appropriate medical care as soon as
            possible. I am.
          </p>
          <div>
            <Button title="Make a Reservation" className="mt-5" />
          </div>
        </div>
      </div>

      <div className="bg-main-gray mt-32">
        <div className="section1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <div className="flex justify-center">
              <img src="/colonremoval2.png" alt="endoscope"></img>
            </div>
            <div>
              <h2>Cancer risk of colon polyps</h2>
              <p className="mt-5">
                Most colon cancers arise from untreated colon polyps. Colon
                polyps are benign tumors, but if left untreated, they tend to
                enlarge, with a probability of over 5% when the diameter of a
                colon polyp exceeds 5 mm, and over 50% when the diameter exceeds
                20 mm. It has been reported that the Therefore, finding and
                removing colorectal polyps can help prevent future colorectal
                cancer. Colon polyps have no symptoms and are rarely detected by
                fecal occult blood tests; colonoscopy is the only way to
                reliably detect them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 items-center">
          <div>
            <h2>
              What is the risk <br /> of developing colon polyps?
            </h2>

            <Button
              icon={BsChevronRight}
              title="Make a reservation"
              iconPosition="after"
              className="mt-10"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-main text-white rounded-md p-5">
              <h4>eating habits</h4>
              <p className="mt-4">
                Dietary habits are thought to play a major role in the
                development of colorectal cancer. Foods that are particularly at
                risk include high-calorie foods, red meat, and processed meat.
                Foods that are high in dietary fiber, such as vegetables, can
                lower your risk.
              </p>
            </div>
            <div className="bg-main text-white rounded-md p-5">
              <h4>genetics</h4>
              <p className="mt-4">
                There is a type of ``hereditary colorectal cancer'' in which
                people are genetically prone to developing colorectal cancer or
                colorectal polyps. Familial adenomatous polyposis and Lynch
                syndrome are also considered to be at high risk. If you have a
                blood relative with colorectal cancer or colorectal polyps, we
                recommend that you undergo a colonoscopy as soon as possible
                when you have no symptoms.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="text-center">Excision method</h2>
        <EndoscopicSlider />
      </div>

      <div className="bg-main-gray mt-32">
        <div className="section1">
          <h2 className="text-center">
            Do colon polyps always have to be removed?
          </h2>
          <p className="text-center mt-5">
            Colorectal polyps are benign tumors, but they can be broadly divided
            into neoplastic and non-neoplastic types. Among these, if left
            untreated, neoplastic polyps called adenomas can lead to colon
            cancer. Most colon polyps are adenomas, but at our hospital, we use
            a special light (NBI) that allows us to examine the surface
            structure and the condition of surrounding capillaries in detail
            during colon camera examinations, and determine if treatment is
            necessary. We are removing those that have been determined.It is
            said that if you maintain adenoma-free status by undergoing regular
            colonoscopy and removing adenomas if found, you can reduce the
            incidence of colon cancer by about 50 to 70%. We recommend that you
            undergo regular colonoscopy, especially if you have had a colon
            polyp removed in the past.
          </p>
          <div className="flex justify-center mt-10">
            <Button title="Book an Appointment" />
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="text-center">
          Meals and precautions after colon polyp removal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="bg-main text-white p-5 rounded-md">
            <h3>Precautions before colon camera examination</h3>
            <p className="mt-5">
              You won't know if you have colon polyps unless you do a test.
              Therefore, we have made preparations on the assumption that it
              will be removed. <br /> If you regularly take anticoagulants or
              antiplatelet drugs that thin the blood, please stop taking them 4
              to 7 days before the test. If you are taking any of these
              medications, please be sure to inform your doctor at the time of
              your pre-treatment visit.
            </p>
          </div>
          <div className="bg-main text-white p-5 rounded-md">
            <h3>Precautions after colon polyp removal</h3>
            <p className="mt-5">
              The area that was removed using polypectomy, which uses
              high-frequency current, is electrocauterized and has an ulcer.
              Also, no matter what method is used for the resected area,
              measures such as hemostasis, suturing, and prevention of bleeding
              are performed. These ulcers and treated areas can cause
              complications such as bleeding and delayed perforation due to
              strong intra-abdominal pressure and the passage of contents.{" "}
              <br /> To prevent these complications, you will need to adhere to
              some restrictions for a few days to a week after your colon polyp
              is removed. If you experience any of these complications, seek
              medical attention immediately. Depending on the condition,
              endoscopic hemostasis, surgery, or hospitalization may be
              required.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="shadow-md p-5 order-last md:order-first">
            <Accordion/>
          </div>
          <div className="order-first md:order-last">
            <h2>About meals and lifestyle after colon polyp removal</h2>
          </div>
        </div>
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default ColonPolypRemoval;
