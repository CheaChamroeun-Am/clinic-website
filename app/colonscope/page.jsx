import React from "react";
import Link from "next/link";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { BiChevronRight } from "react-icons/bi";
import CalonCameraSlider from "../../components/CalonCameraSlider";
import Button from "../../components/Button";

const disease1 = [
  "Colorectal cancer",
  "Ulcerative colitis",
  "Infectious enteritis",
  "Crohn's disease",
];

const disease2 = [
  "Colon polyp",
  "Ischemic colitis",
  "Colorectal diverticulosis",
  "Hemorrhoids",
];

const Colonscope = () => {
  return (
    <div>
      <div className="main-section">
        <div className="flex gap-3 text-[13px]  text-gray-500">
          <Link href="/" className="underline">
            Home
          </Link>
          <span>/</span>
          <span>Calonscope</span>
        </div>
      </div>

      <div className="section2 mt-20">
        <h2 className="text-center">What is colon camera (colonscope)?</h2>
      </div>

      <div className="bg-main-gray mt-20">
        <div className="section1">
          <div>
            <div className="flex justify-center md:float-right md:ml-10">
              <img
                src="/colonscope.png"
                alt="endoscope"
                className="w-full h-full md:w-[350px] md:h-[250px]"
              ></img>
            </div>
          </div>
          <div className="mt-5 md:mt-0">
            <p className="mt-3">
              A colon camera examination allows you to directly observe the
              mucous membranes of the entire large intestine, including the
              rectum, colon, and cecum. This test is essential for detecting
              precancerous colon polyps and early colon cancer, and is also
              useful for diagnosing a wide range of colon diseases such as
              ischemic colitis and ulcerative colitis by identifying specific
              lesions. is. A definitive diagnosis can also be made by collecting
              tissue from suspicious areas. Furthermore, we can perform same-day
              surgery to remove colon polyps found during the examination on the
              spot. This will help prevent future colon cancer. If you have
              symptoms such as abdominal pain, diarrhea, constipation, blood in
              your stool, or positive fecal occult blood, if you are over 40
              years old and have never had a colonoscopy, or if you have had a
              colon polyp removed in the past. , Japanese Gastrointestinal
              Endoscopy Society Please visit a hospital/clinic with a specialist
              as soon as possible.
              <br />
              Those who have symptoms such as heaviness in the stomach, stomach
              discomfort, heartburn, acid swallowing, dark stools, Helicobacter
              pylori infection, those who have never had a gastroscopy
              examination, and those who have had Helicobacter pylori eradicated
              in the past. If you have ever had this, please visit a
              hospital/clinic with a specialist from the Japan Gastrointestinal
              Endoscopy Society as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Diseases detected by colon camera examination</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-y-4">
          <div className="flex flex-col gap-4">
            {disease1.map((disease) => (
              <div
                key={disease}
                className="flex gap-3 items-center text-main text-base"
              >
                <HiOutlineShieldCheck />
                <span>{disease}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {disease2.map((disease) => (
              <div
                key={disease}
                className="flex gap-3 items-center text-main text-base"
              >
                <HiOutlineShieldCheck />
                <span>{disease}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="text-center">About colon polyp day surgery</h2>
        <p className="text-center mt-5">
          Colon polyps are warts that form on the mucous membrane of the large
          intestine. Colon polyps discovered during a colonoscopy can be removed
          on the spot. There is no need to make a schedule for another day, and
          the patient can receive the treatment without being hospitalized,
          which greatly reduces the time and financial burden on the patient.A
          wire-shaped snare is taken out from the tip of the endoscope, hooked
          onto the polyp, and tightened to remove it. However, depending on the
          shape of the polyp, it may be necessary to inject physiological saline
          to lift the polyp before removing it, or a high-frequency current may
          be applied to the snare. In some cases, it may be removed by flushing
          it out. Depending on the size, shape, number, etc. of the colon polyp,
          it may not be possible to remove it during the examination, but in
          that case, we will introduce you to a affiliated medical institution
          with inpatient facilities and support you so that you can receive
          appropriate medical care as soon as possible. I am.
        </p>{" "}
        <div className="flex justify-center mt-5">
          <Button title="Book an Appointment" className="mt-5" />
        </div>
      </div>

      <div className="section" id="CustomizedEndoscopy">
        <h2 className="text-center">Customized Endoscopy</h2>
        <img
          src="/endoscope.png"
          alt="endoscope"
          className="mt-10 object-cover h-full w-full"
        />
      </div>

      {/* Feature */}
      <div className="section" id="CharacteristicsHospital">
        <h2>Features of our hospital's colon camera</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div className="order-last lg:order-first">
            <h3>
              Examination by a doctor with extensive experience in endoscopy
            </h3>
            <p className="mt-3">
              At our hospital, doctors who have been involved in endoscopy and
              treatment for many years provide a comprehensive service that
              includes preliminary examinations, examinations, diagnosis, and
              explanations. Based on our extensive case experience, we
              accurately identify and diagnose minute changes in mucous
              membranes, leading to early detection. Because we carefully
              perform examinations using delicate techniques, we are able to
              perform detailed examinations quickly and greatly reduce the
              burden on patients. In addition, when communicating the results,
              we strive to provide easy-to-understand explanations, such as by
              showing images obtained from the test. If you have any questions,
              please feel free to ask us anything.
            </p>
          </div>

          <div className="order-first lg:order-last flex">
            <img
              src="/featurec1.png"
              className="w-full h-[350px] mx-auto object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div>
            <img
              src="featureg2.png"
              className="w-full h-[350px] mx-auto object-cover"
            />
          </div>
          <div>
            <h3>Painless endoscopy</h3>
            <p className="mt-3">
              A colonoscopy can be performed using sedation. By using a mild
              sedative, the patient will respond to your call, but will remain
              in a light drowsiness state, making it possible to conduct a
              painless examination without feeling any pain or suffering. Even
              if you have had a painful experience in the past and have been
              traumatized by a colonoscopy, you can undergo the examination
              without any pain. It is also recommended if you are nervous about
              having a colonoscopy for the first time, as it allows you to relax
              and allows for a safe examination in a short period of time.
              Please keep in mind that if you undergo a test using sedatives,
              you will not be able to drive a car or motorcycle on the day of
              the test.At our hospital, we decide on the content and amount of
              sedatives given, taking into account the patient's age, physique,
              and past medical conditions, and we strictly control the patient's
              general condition during the examination. In addition, you will
              wake up immediately after the test, but we will ask you to rest
              for about 30 minutes to an hour until you are no longer dizzy, and
              we will check your condition thoroughly before returning home.At
              our hospital, our highly experienced director, who has more than
              10 years of experience in pain-free endoscopic examinations using
              sedatives, performs them using the minimum necessary and
              appropriate amount of anesthesia. In the director's extensive past
              experience using sedatives, there has never been a single serious
              problem.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div className="order-last lg:order-first">
            <h3>Olympus' latest endoscope system "EVIS X1"</h3>
            <p className="mt-3">
              Our hospital has installed the latest endoscopy system "EVIS X1"
              from Olympus, which has long been a world leader in endoscopy
              equipment. As of September 2020, "EVIS Highly accurate testing is
              possible in a short period of time, reducing the burden on
              patients. It is also a high-performance endoscope system that is
              equipped with special light and digital high-definition that
              enable the quick discovery of minute lesions. Please also refer to
              the NBI section below.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <img
              src="/featurec3.png"
              className="w-full h-[350px] object-cover mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div>
            <img
              src="/featurec4.png"
              className="w-full h-[350px] object-cover mx-auto"
            />
          </div>
          <div>
            <h3>Detailed endoscopic diagnosis using special light (NBI)</h3>
            <p className="mt-3">
              The endoscope system introduced at our hospital is equipped with
              NBI (Narrow Band Imaging), which was originally developed by
              Olympus. This makes it possible to clearly see minute surface
              structures and capillaries using narrow-band light, which is
              different from normal light.The magnification function also
              enables detailed observation, making it extremely useful for
              speedy detection and diagnosis of early cancers, etc. Helpful.
              What's more, the examining doctor can easily switch between normal
              light and special light at hand, providing powerful support for
              accurate diagnosis and greatly reducing the burden on patients.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div className="order-last lg:order-first">
            <h3>Less painful insertion method</h3>
            <p className="mt-3">
              The pain that occurs during a colonoscopy is caused by pressure
              from the colon being pushed or stretched. In order to eliminate
              this pain, our hospital uses the non-air shaft holding and
              shortening method, which is an insertion method that does not put
              pressure on the intestine, thereby minimizing the pain that occurs
              during insertion and increasing safety. Based on the techniques
              cultivated over many years of study and extensive experience, the
              treatment is performed according to the shape of the intestine for
              each patient, so the patient rarely feels any pain.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <img
              src="/featurec5.png"
              className="w-full h-[350px] object-cover mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div>
            <img
              src="/featurec6.png"
              className="w-full h-[350px] object-cover mx-auto"
            />
          </div>
          <div>
            <h3>Carbon dioxide gas supply during endoscopy</h3>
            <p className="mt-3">
              The large intestine is tortuous and has many wrinkles and folds.
              To avoid overlooking these areas, we use gas to inflate the
              intestines during colonoscopy to thoroughly observe them. However,
              if you inflate your intestines too much by pumping in a large
              amount of air, you will feel a strong sense of fullness for a long
              time after the test, making your experience uncomfortable and
              painful.At our hospital, we use carbon dioxide gas, which is 200
              times more easily absorbed than air, to quickly relieve abdominal
              discomfort after the test. After this carbon dioxide is absorbed,
              it becomes carbon dioxide and is naturally expelled through
              exhalation, making it highly safe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div className="order-last lg:order-first">
            <h3>Same-day polyp removal is also possible</h3>
            <p className="mt-3">
              If a precancerous colorectal polyp or early colorectal cancer is
              discovered during a colon camera examination, same-day surgery can
              be performed to remove it on the spot. This will lead to the
              prevention of colon cancer if colon polyps that have the potential
              to become cancerous in the future can be removed. Of course, we
              will do this if you wish to have it removed during the examination
              with prior explanation.Colon polyps are benign tumors that form in
              the intestines, but they can be broadly divided into "neoplastic
              polyps" and "non-neoplastic polyps." At our hospital, we magnify
              and closely examine the surface of polyps discovered during colon
              camera examinations, and instantly determine whether they are
              tumors or non-tumors. Then, only the polyps that need to be
              removed are removed, and polyps that have no possibility of
              turning into colorectal cancer are not removed.
            </p>
            <button className="mt-5 bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center">
              <span>Book Appointment</span>
            </button>
          </div>
          <div className="order-first lg:order-last">
            <img
              src="/featurec7.png"
              className="w-full h-[350px] object-cover mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div>
            <img
              src="/featurec8.png"
              className="w-full h-[350px] object-cover mx-auto"
            />
          </div>
          <div>
            <h3>We can also administer laxatives in the hospital</h3>
            <p className="mt-3">
              The large intestine is tortuous and has many wrinkles and folds.
              To avoid overlooking these areas, we use gas to inflate the
              intestines during colonoscopy to thoroughly observe them. However,
              if you inflate your intestines too much by pumping in a large
              amount of air, you will feel a strong sense of fullness for a long
              time after the test, making your experience uncomfortable and
              painful.At our hospital, we use carbon dioxide gas, which is 200
              times more easily absorbed than air, to quickly relieve abdominal
              discomfort after the test. After this carbon dioxide is absorbed,
              it becomes carbon dioxide and is naturally expelled through
              exhalation, making it highly safe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div className="order-last lg:order-first">
            <h3>Gastroscopy can be performed on the same day</h3>
            <p className="mt-3">
              At our hospital, we offer gastroscopy and colonoscopy examinations
              on the same day. Since both tests can be performed in the same
              day, dietary restrictions are only required once, making it
              recommended for busy people. Before the test, the inside of your
              intestines will be cleaned with laxatives, and then gastroscopy
              and colonoscopy will be performed. Therefore, the total
              examination time is about 20 to 30 minutes. The test time is short
              and the burden on your body is reduced. Additionally, both tests
              can be taken while you are sedated and dozed off.
            </p>
            <button className="mt-5 bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center">
              <span>More Detail</span>
            </button>
          </div>
          <div className="order-first lg:order-last">
            <img
              src="/featurec9.png"
              className="w-full h-[350px] object-cover mx-auto"
            />
          </div>
        </div>
      </div>

      <div id="TestFlow">
        <CalonCameraSlider />
      </div>

      <div className="section">
        <h3>About the next inspection</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-center">
          <div>
            <div>
              <div className="flex gap-4 items-center">
                <HiOutlineShieldCheck className="text-main w-[35px] md:w-[35px] lg:w-[35px] xl:w-[35px] 2xl:w-[25px]" />
                <h5>Case where there was no abnormality</h5>
              </div>
              <p className="pl-10">
                If inflammation continues, the risk of developing colon cancer
                increases, and it is basically necessary to undergo a
                colonoscopy every year to check the state of inflammation and
                ulcers and provide appropriate treatment.
              </p>
            </div>

            <div>
              <div className="flex gap-4 items-center mt-4">
                <HiOutlineShieldCheck className="text-main w-[35px] md:w-[35px] lg:w-[35px] xl:w-[35px] 2xl:w-[25px]" />
                <h5>
                  A case where the polyp was removed and was found to be benign
                </h5>
              </div>
              <p className="pl-10">
                We recommend re-examination after 1 to 2 years.
              </p>
            </div>

            <div>
              <div className="flex gap-4 items-center mt-4">
                <HiOutlineShieldCheck className="text-main w-[35px] md:w-[35px] lg:w-[35px] xl:w-[35px] 2xl:w-[25px]" />
                <h5>
                  A case in which a polyp was removed and was found to be
                  malignant
                </h5>
              </div>
              <p className="pl-10">
                Careful follow-up is required with re-examination within 3
                months to 1 year.
              </p>
            </div>

            <div>
              <div className="flex gap-6 items-center mt-4">
                <HiOutlineShieldCheck className="text-main w-[35px] md:w-[35px] lg:w-[35px] xl:w-[35px] 2xl:w-[25px]" />
                <h5>
                  Cases where chronic inflammatory diseases such as ulcerative
                  colitis and Crohn's disease are discovered
                </h5>
              </div>
              <p className="pl-10">
                If inflammation continues, the risk of developing colon cancer
                increases, and it is basically necessary to undergo a
                colonoscopy every year to check the state of inflammation and
                ulcers and provide appropriate treatment.
              </p>
            </div>
          </div>

          <div>
            <h3>Schedule an Appointment With Us Today</h3>
            <button className="mt-5 bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center">
              <span>View Hospital Information</span>
              <BiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="section" id="CostTesting">
        <h2 className="text-center">Cost of testing</h2>
        <div className="w-full overflow-x-auto mt-20">
          <table className="table-auto mt-5 min-w-full">
            <thead>
              <tr>
                <th className="px-3 "></th>
                <th className="px-3 text-main">10% Burden</th>
                <th className="px-3 text-main">30% Burden</th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-main-gray shadow-md border-b-8 border-white">
                <td className="px-3 py-3  text-start">
                  First visit (including blood sampling for infectious diseases)
                </td>
                <td className="px-3 py-3  text-center">
                  Approximately 700 yen
                </td>
                <td className="px-3 py-3  text-center">
                  Approximately 2,000 yen
                </td>
              </tr>

              <tr className="bg-main-gray shadow-md border-b-8 border-white">
                <td className="px-3 py-3  text-start">
                  Gastrocamera examination only
                </td>
                <td className="px-3 py-3  text-center">
                  Approximately 2,000 yen
                </td>
                <td className="px-3 py-3  text-center">
                  Approximately 6,000 yen
                </td>
              </tr>

              <tr className="bg-main-gray shadow-md border-b-8 border-white">
                <td className="px-3 py-3  text-start">
                  Gastrocamera examination + pathological examination
                </td>
                <td className="px-3 py-3  text-center">
                  Approximately 3,000 to 4,000 yen
                </td>
                <td className="px-3 py-3  text-center">
                  Approximately 10,000 yen
                </td>
              </tr>

              <tr className="bg-main-gray shadow-md border-b-8 border-white">
                <td className="px-3 py-3  text-start">
                  Gastrocamera examination + Helicobacter pylori test
                </td>
                <td className="px-3 py-3  text-center">
                  Approximately 10,000 yen
                </td>
                <td className="px-3 py-3  text-center">
                  Approximately 7,500 yen
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-5">
          <div>
            <h2>Check more About our hospital</h2>
          </div>

          <div>
            <button className="bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center">
              <span>View Hospital Information</span>
              <BiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colonscope;
