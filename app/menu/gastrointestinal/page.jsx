import React from "react";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { HiOutlineShieldCheck } from "react-icons/hi";

const cards = [
  {
    id: 1,
    title: "Good access! Convenient for going to the hospital!",
    des: "Our hospital uses a complete reservation system, so all patients are managed by appointment and waiting times are short. If you would like to receive outpatient treatment at our hospital, please make an online reservation.",
    bg: "main",
    text: "main",
  },
  {
    id: 2,
    title: "By appointment only! Reduce waiting time!",
    des: "Our hospital uses a complete reservation system, so all patients are managed by appointment and waiting times are short. If you would like to receive outpatient treatment at our hospital, please make an online reservation.",
    bg: "white",
    text: "white",
  },
  {
    id: 3,
    title:
      "One-stop service from consultation to treatment all within the hospital!",
    des: "Our hospital is fully equipped with testing equipment and can treat a wide range of gastrointestinal symptoms, allowing us to complete the entire process from diagnosis to treatment in-house. There is no need to go through the trouble of having the test performed at another medical institution.",
    bg: "white",
    text: "main",
  },
  {
    id: 4,
    title: "Same-day phone calls and same-day testing available!",
    des: "Our hospital also offers same-day testing. (Prior consultation is required for colon camera examinations.) We will do our best toaccommodate patients' requests such as 'I want to take a test when I have free time!' Please feel free to contact us first.",
    bg: "main",
    text: "white",
  },
];

const Gastrointestinal = () => {
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
          <span>Gastrointestinal Specialty Outpatient Clinic</span>
        </div>
      </div>

      <div className="bg-main-gray mt-10">
        <div className="section1">
          <h2 className="text-center">
            Are you having trouble with the following?
          </h2>
          <div className="flex gap-3 font-bold mt-10 items-center">
            <img src="/checkicon.png" alt="checkicon" />
            <p>Abnormal bowel movements</p>
            <AiOutlineDoubleRight className="text-xl text-main" />
            <p>Constipation, diarrhea, bloody stool, melena, etc.</p>
          </div>

          <div className="flex gap-3 font-bold mt-5 items-center">
            <img src="/checkicon.png" alt="checkicon" />
            <p>Stomach abnormalities</p>
            <AiOutlineDoubleRight className="text-xl text-main" />
            <p>
              Stomach pain, abdominal pain, heartburn, nausea, vomiting, loss of
              appetite, abdominal bloating, etc.
            </p>
          </div>

          <div className="flex gap-3 font-bold mt-5 items-center">
            <img src="/checkicon.png" alt="checkicon" />
            <p>Abnormalities in medical examinations</p>
            <AiOutlineDoubleRight className="text-xl text-main" />
            <p>
              Positive fecal occult blood results, abnormalities in gastric
              fluoroscopy, etc.
            </p>
          </div>

          <div className="text-center mt-10">
            <p>
              Even if you have the above concerns, many people may be wondering,
              ``There are so many gastrointestinal hospitals, so where should I
              go?''Some people may be looking at numerous hospitals in search of
              specialized treatment.
            </p>
            <p className="mt-3">
              At our hospital, as a clinic specializing in gastrointestinal and
              endoscopy, we have established a ``gastrointestinal specialty
              outpatient clinic'' to resolve your concerns regarding your
              gastrointestinal symptoms.At the Gastrointestinal Specialist
              Outpatient Clinic, we can treat a wide range of digestive
              symptoms, so if you are looking for specialized treatment or are
              having trouble with your digestive symptoms, please come to Nerima
              Hikarigaoka Internal Medicine Endoscopy Clinic. Please consult us.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div className="order-last lg:order-first">
            <h2>About our hospital's gastrointestinal outpatient clinic</h2>
            <p className="mt-3">
              A feature of our gastrointestinal outpatient clinic is that we
              provide a one-stop service for the entire process from examination
              to treatment.Clinics that are less specialized in the
              gastrointestinal field often refer you to a different hospital for
              testing, but at our hospital you don't have to worry about that.
              If it is determined that there is an abnormality in the stomach, a
              gastroscopy can be performed, and if it is determined that there
              is an abnormality in the large intestine, a colonoscopy can be
              performed.
            </p>
            <button className="bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center mt-5">
              <span>Make an Appointment</span>
            </button>
          </div>
          <div className="order-first lg:order-last flex">
            <img
              src="/doctor1.png"
              className="w-full h-[350px] mx-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h2>
          Characteristics of our hospital's gastrointestinal outpatient clinic
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          {cards.map((card) => (
            <div
              className={`${
                card.bg === "main" ? "bg-main text-white" : "bg-white text-main"
              } shadow-md p-5 rounded-md`}
              key={card.id}
            >
              <div className="flex gap-3 items-center">
                <HiOutlineShieldCheck size={30} />
                <h3>{card.title}</h3>
              </div>
              <p className="mt-5">{card.des}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Symptoms / Diseases that can be treated at our hospital</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          <div className="shadow-md bg-main-gray rounded-md p-5">
            <h3 className="text-center">Symptoms</h3>
            <div className="font-bold">
              <p>esophagus</p>
              <hr className="border-t-2 border-black mt-4" />
            </div>
            <div className="font-bold mt-5">
              <p>esophagus</p>
              <hr className="border-t-2 border-black mt-4" />
            </div>
            <div className="font-bold mt-5">
              <p>esophagus</p>
              <hr className="border-t-2 border-black mt-4" />
            </div>
            <div className="font-bold mt-5">
              <p>esophagus</p>
              <hr className="border-t-2 border-black mt-4" />
            </div>
          </div>

          <div className="shadow-md bg-main text-white rounded-md p-5">
            <h3 className="text-center">Symptoms</h3>
            <div className="font-bold">
              <p>esophagus</p>
              <hr className="border-t-2 border-white mt-4" />
            </div>
            <div className="font-bold mt-5">
              <p>esophagus</p>
              <hr className="border-t-2 border-white mt-4" />
            </div>
            <div className="font-bold mt-5">
              <p>esophagus</p>
              <hr className="border-t-2 border-white mt-4" />
            </div>
            <div className="font-bold mt-5">
              <p>esophagus</p>
              <hr className="border-t-2 border-white mt-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-main-gray mt-32">
        <div className="section1">
          <h2 className="text-center">
            For those who wish to visit a gastrointestinal specialist outpatient
            clinic
          </h2>
          <p className="text-center mt-5">
            Our hospital accepts online consultation reservations 24 hours a
            day. If you make a reservation in advance, we can ensure a smooth
            examination, so we recommend that you make a reservation below.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center">
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gastrointestinal;
