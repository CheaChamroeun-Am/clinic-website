import React from "react";
import Link from "next/link";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { BiChevronRight } from "react-icons/bi";
import Button from "../../components/Button";

const disease1 = [
  "esophageal cancer",
  "pylori infection",
  "acute gastritis",
  "duodenal ulcer",
];

const disease2 = [
  "stomach cancer",
  "Reflux esophagitis",
  "stomach ulcer",
  "gastric anisakiasis",
];

const Gastroscope = () => {
  return (
    <div>
      <div className="main-section">
        <div className="flex gap-3 text-[13px]  text-gray-500">
          <Link href="/" className="underline">
            Home
          </Link>
          <span>/</span>
          <span>Gastroscope</span>
        </div>
      </div>

      <div className="section2 mt-20">
        <h2 className="text-center">About Gastroscopy</h2>
        <p className="text-center mt-5">
          Many people who have had a gastroscopy in the past or who have never
          had a gastrocamera exam still have the impression that ``gastroscopy
          is painful.'' If a gastroscopy is performed using the old-fashioned
          method, it may be a very painful test with a strong feeling of
          vomiting.
        </p>
      </div>

      <div className="bg-main-gray mt-32">
        <div className="section1">
          <div>
            <div className="flex justify-center md:float-right md:ml-10">
              <img
                src="examGastrocamera.png"
                alt="endoscope"
                className="w-full h-full md:w-[350px] md:h-[300px]"
              ></img>
            </div>
          </div>
          <div className="mt-5 md:mt-0">
            <p className="mt-3">
              This strong feeling of vomiting occurs reflexively when the
              endoscope touches the base of the tongue. It's similar to the
              persistent tingling sensation that occurs when you brush your back
              teeth, or when your tongue is pressed while inspecting the back of
              your throat due to inflammation in your throat. Additionally,
              patients may unconsciously try to swallow saliva that has
              accumulated during the test and accidentally enter the trachea,
              making the feeling of vomiting even stronger. This feeling of
              vomiting is an important reflex that helps people avoid swallowing
              foreign objects, and the way it feels varies from person to
              person. Nowadays, a sophisticated method has been established to
              prevent the patient from experiencing a strong feeling of
              vomiting, and it is now possible for doctors with extensive
              experience in endoscopy to perform the test fairly easily.At our
              hospital, doctors with extensive testing experience carefully
              operate the scope to ensure that you do not feel vomiting. During
              the test, saliva is suctioned to prevent inadvertent swallowing,
              minimizing discomfort. We also offer painless anesthesia
              endoscopy, which allows you to undergo the examination while you
              are dozing off. Even if you are very anxious, we can provide a
              painless test, so please come with confidence.
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
        <h2>Diseases detected by gastroscopy</h2>
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
        <h2 className="text-center">Types of gastrocamera examination</h2>
        <p className="text-center mt-5">
          There are two types of gastroscopy: transnasal endoscopy and transoral
          endoscopy. At our hospital, we offer upper gastrointestinal endoscopy
          (gastroscopy) tailored to each patient. If you have any questions,
          please feel free to contact our clinic.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-main p-5 shadow-md rounded-md text-white">
            <h3>Nasal endoscop</h3>
            <p className="mt-2">
              Nasal endoscopy is a test in which a scope is inserted through the
              nose to directly observe the esophagus and stomach.
            </p>

            <div className="mt-10">
              <h5>The Benefits</h5>
              <div className="flex gap-3 items-center mt-2">
                <HiOutlineShieldCheck />
                <span>
                  Gastrocamera examination is possible with less pain without
                  sedatives (anesthesia)
                </span>
              </div>
              <div className="flex gap-3 items-center mt-2">
                <HiOutlineShieldCheck />
                <span>
                  Gastrocamera examination with less tingling and nausea
                  possible
                </span>
              </div>
              <div className="flex gap-3 items-center mt-2">
                <HiOutlineShieldCheck />
                <span>
                  Less fluctuation in pulse rate, blood pressure, etc.
                </span>
              </div>
              <div className="flex gap-3 items-center mt-2">
                <HiOutlineShieldCheck />
                <span>
                  This includes being able to have a conversation with the
                  doctor during the gastrocamera examination.
                </span>
              </div>
            </div>

            <div className="mt-10">
              <h5>The Disadvantages</h5>
              <div className="flex gap-3 items-center mt-2">
                <HiOutlineShieldCheck />
                <span>
                  Treatment endoscopy such as hemostasis is not possible
                </span>
              </div>
              <div className="flex gap-3 items-center mt-2">
                <HiOutlineShieldCheck />
                <span>
                  People with narrow nasal passages are at risk of nosebleeds
                  when inserting the scope.
                </span>
              </div>
            </div>
          </div>

          <div className="bg-main p-5 shadow-md rounded-md text-white">
            <h3>Oral endoscopy</h3>
            <p className="mt-2">
              Oral endoscopy is a test in which a scope is inserted through the
              mouth to directly observe the esophagus and stomach. At our
              hospital, we perform oral endoscopy using sedation.
            </p>

            <div className="mt-10">
              <h5>The Benefits</h5>
              <div className="flex gap-3 items-center mt-2">
                <HiOutlineShieldCheck />
                <span>
                  Gastrocamera examination is possible with less pain using
                  sedatives.
                </span>
              </div>
              <div className="flex gap-3 items-center mt-2">
                <HiOutlineShieldCheck />
                <span>Gag reflex is less likely to occur with sedatives</span>
              </div>
            </div>

            <div className="mt-10">
              <h5>The Disadvantages</h5>
              <div className="flex gap-3 items-center mt-2">
                <HiOutlineShieldCheck />
                <span>
                  If sedatives are not used, tingling and nausea are likely to
                  occur.
                </span>
              </div>
              <div className="flex gap-3 items-center mt-2">
                <HiOutlineShieldCheck />
                <span>
                  If you are sedated, you will not be able to drive yourself
                  home.
                </span>
              </div>
              <div className="flex gap-3 items-center mt-2">
                <HiOutlineShieldCheck />
                <span>
                  If you are pregnant or breastfeeding, you may not be able to
                  undergo an oral endoscopy using sedation.
                </span>
              </div>
            </div>
          </div>
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

      <div className="section" id="CharacteristicsHospital">
        <h2 className="text-center">Features of our hospital's gastrocamera</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div className="order-last lg:order-first">
            <h3>Carefully examined by experienced doctors</h3>
            <p className="mt-3">
              Endoscopy allows detailed observation of minute changes in mucous
              membranes, so the physician conducting the examination must have
              extensive case experience in order to accurately assess and
              diagnose the condition and lead to early detection. At our
              hospital, all endoscopic examinations are carefully performed by
              doctors who have performed numerous endoscopic examinations and
              treatments. Because detailed examinations are performed in a short
              time using delicate techniques, the burden on patients is greatly
              reduced.When reporting the results after the test, the doctor in
              charge of the test will explain the results in an
              easy-to-understand manner while showing you the images taken
              during the test. If you have any questions or concerns, please
              feel free to ask us anything.
            </p>
          </div>
          <div className="order-first lg:order-last flex">
            <img
              src="featureg1.png"
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
            <h3>Painless endoscopy using sedatives</h3>
            <p className="mt-3">
              Nasal testing, which is inserted through the nose, is said to be
              easier than oral testing, but it is not completely painless and
              can be a little painful.At our hospital, instead of a nasal test,
              we perform a painless test that involves injecting a mild sedative
              and allowing you to take the test while you doze off.Because the
              pain and stress experienced during endoscopy varies greatly from
              person to person, our hospital performs custom-made endoscopy that
              is carefully tailored to each patient. When using analgesics, we
              place great importance on safety, and we decide on the content and
              amount of anesthesia given by taking into account the patient's
              age, physique, and past medical conditions, and perform
              examinations while strictly controlling the patient's general
              condition.At our hospital, our highly experienced director, who
              has more than 10 years of experience in pain-free endoscopic
              examinations using sedatives, performs them using the minimum
              necessary and appropriate amount of anesthesia. In the director's
              extensive past experience using sedatives, there has never been a
              single serious problem.
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
          <div className="order-first lg:order-last ">
            <img
              src="featureg3.png"
              className="w-full h-[350px] object-cover mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div>
            <img
              src="featureg4.png"
              className="w-full h-[350px] object-cover mx-auto"
            />
          </div>
          <div>
            <h3>Diagnosis by detailed confirmation of special light (NBI)</h3>
            <p className="mt-3">
              NBI (Narrow Band Imaging), which was originally developed by
              Olympus, allows observation using narrow band light, which is
              different from normal light, making it possible to quickly
              discover minute lesions. This greatly helps in detecting and
              diagnosing early cancer.Previously, such observations were made by
              sprinkling dye, but with NBI, the examining doctor can easily
              switch between normal light and special light at hand, making it
              possible to quickly make accurate diagnoses. The burden on
              patients is also greatly reduced.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div className="order-last lg:order-first">
            <h3>Colon camera can be performed on the same day</h3>
            <p className="mt-3">
              We make it possible for patients to undergo gastroscopy and
              colonoscopy examinations on the same day. Both tests can be
              completed in one day, so you only need to make dietary
              restrictions once. Before the test, the inside of the intestine is
              cleaned with a laxative (intestinal cleansing agent), and then the
              gastroscopy and colonoscopy are performed consecutively, so the
              total test time is about 20 to 30 minutes, and it is easy to clean
              your body. It can also reduce your burden. Also, in this case,
              both tests can be done while you are drowsy using sedatives.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <img
              src="featureg5.png"
              className="w-full h-[350px] object-cover mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div>
            <img
              src="featureg6.png"
              className="w-full h-[350px] object-cover mx-auto"
            />
          </div>
          <div>
            <h3>Thorough infection prevention</h3>
            <p className="mt-3">
              Through thorough infection prevention, we prevent bacterial and
              viral infections from occurring during endoscopy. The Japan
              Gastrointestinal Endoscopy Society has established strict
              guidelines for safe endoscopy, and our hospital performs cleaning
              and disinfection that strictly adheres to these standards.
            </p>
          </div>
        </div>
      </div>

      <div className="section" id="TestFlow">
        <h2 className="text-center">Gastrocamera flow</h2>
        <div className="grid grid-col-1 md:grid-cols-4 mt-10 gap-5">
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-main text-white p-5 ">
              <h3>1</h3>
              <h3 className="mt-3">The day before the test</h3>
              <p className="mt-3">
                If the test is performed with any food left in your stomach, it
                may be missed, so avoid eating fibrous foods that tend to remain
                from the previous day's meals. Similarly, avoid greasy foods as
                they tend to leave a residue.Please eat a light dinner the night
                before by 9:00 pm. After this, you will be required to fast
                until the test is completed.If you usually take medicine, please
                stop taking it or taking it according to the instructions given
                in advance.To stay hydrated, you can drink anything clear and
                sugar-free, such as water or weak tea.
              </p>
            </div>
            <div className="bg-main text-white p-5 ">
              <h3>2</h3>
              <h3 className="mt-3">On the day of the test</h3>
              <p className="mt-3">
                If you usually take medicine, please stop taking it or taking it
                according to the instructions given in advance.Please come to
                the hospital without eating breakfast that day. It is okay to
                drink clear, sugar-free drinks in moderation, such as water or
                weak tea.
              </p>
            </div>
            <div className="bg-main text-white p-5 ">
              <h3>3</h3>
              <h3 className="mt-3">Inspection</h3>
              <p className="mt-3">
                If you wish to undergo a painless test in which you will be in a
                drowsiness state, we will administer a sedative to you. The test
                itself takes about 5 to 10 minutes.
              </p>
            </div>
            <div className="bg-main text-white p-5 ">
              <h3>4</h3>
              <h3 className="mt-3">After inspection</h3>
              <p className="mt-3">
                The doctor will explain the results while viewing the test
                images. Please feel free to ask any questions you may have.
                After the explanation, you will go home.For tests that use
                sedatives, you will be asked to rest for about 30 minutes to an
                hour after the test before the results will be explained to you.
              </p>
            </div>
          </div>

          <div className="bg-main text-white p-5  col-span-3 md:col-span-1">
            <h3>5</h3>
            <h3 className="mt-3">After returning home</h3>
            <p className="mt-3">
              You will not be able to eat or drink anything for about an hour
              after the test, as the anesthesia will still be in effect. After
              one hour has passed, take a small amount of water in your mouth
              and drink it slowly to check for any abnormalities such as choking
              or not feeling the temperature. You can eat and drink without any
              problems.Please note that if tissue is collected during the test,
              you will not be allowed to drink alcohol on the day of the test.
            </p>
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
            <Button
              icon={BiChevronRight}
              title="View Hospital Information"
              iconPosition="after"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gastroscope;
