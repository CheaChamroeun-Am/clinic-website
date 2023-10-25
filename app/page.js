"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BiCalendar, BiChevronRight } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { AiOutlineCaretRight } from "react-icons/ai";
import AutoSlide from "../components/AutoSlide";
import Contact from "../components/Contact";
import Appointment from "../components/Appointment";
import GastrocameraSliding from "../components/GastrocameraSliding";
import Link from "next/link";
import { blogs, sliders } from "../data/data.js";

export default function Home() {
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const numBlogsToShow = showAllBlogs ? blogs.length : 4;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlider = () => {
    const isNextSlider = currentIndex === sliders.length - 1;
    const newIndex = isNextSlider ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="h-[550px] w-full relative group">
        <div
          className="w-full h-full bg-center duration-500 bg-no-repeat "
          style={{
            backgroundImage: `url(${sliders[currentIndex].url})`,
          }}
        ></div>
      </div>

      <div className="section flex flex-wrap gap-10 items-center justify-center">
        <button className="bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center">
          <FaUserDoctor size={20} />
          <span>Find Doctor</span>
        </button>
        <button className="bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center">
          <IoLocationOutline size={20} />
          <span>Find Location</span>
        </button>
        <button className="bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center">
          <BiCalendar size={20} />
          <span>Book Appointment</span>
        </button>
      </div>

      <div className="section">
        <div className="flex font-bold justify-between items-center">
          <h3>Latest News & Blogs</h3>
          <p
            className="text-main flex items-center gap-1 cursor-pointer"
            onClick={() => setShowAllBlogs(!showAllBlogs)}
          >
            NEWS & BLOGS
            <span>
              <AiOutlineCaretRight size={15} className="text-main" />
            </span>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
          {blogs.slice(0, numBlogsToShow).map((blog) => (
            <div key={blog.id} className="mt-5">
              <Image src={blog.img} alt="blog" width={300} height={200} />
              <p className="mt-3 text-sm">{blog.title}</p>
              <p className="text-main mt-2 text-[12px] font-bold flex items-center gap-1">
                SEE MORE
                <span>
                  <AiOutlineCaretRight className="text-main text-sm" />
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[20vh] bg-main-gray mt-20">
        <AutoSlide />
      </div>

      <div className="section gap-10 grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <img
            src="examGastrocamera.png"
            alt="endoscope"
            className="w-[500px] h-[300px] mx-auto 2xl:h-[355px]"
          ></img>
        </div>
        <div>
          <h2>Information on Endoscopy</h2>
          <p className="mt-5">
            We provide endoscopic examinations that will make you feel glad that
            you had the examination here and that you would like to have the
            examination here again. In Japan, many people die from stomach
            cancer and colorectal cancer. In order to reduce the number of such
            patients, we believe that it is best to undergo endoscopy before the
            cancer progresses, when there are no symptoms or when the symptoms
            are mild, and early detection and early treatment. People tend to
            think that endoscopy is a painful or painful test, but at our
            hospital, we do a variety of things to make it as safe and
            comfortable as possible for our patients. . You will be given a
            sedative to undergo the examination while you are asleep, so you
            won't feel any pain. If you are over 40 years old, we recommend that
            you get tested to protect your health. If you would like to undergo
            an endoscopy in Nerima Ward, please contact our hospital.
          </p>
          <button className="bg-main text-white rounded-md px-4 py-2 gap-3  mt-5">
            <span>Read More</span>
          </button>
        </div>
      </div>

      <div>
        <GastrocameraSliding />
      </div>

      <div className="section">
        <h2 className="text-center">Medical Information</h2>
        <div className="mt-10">
          <h3>Treatment Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-4">
            <div className="shadow-md p-5">
              <p>Gastrointestinal Specialty Outpatient Clinic</p>
              <p className="mt-10 text-main text-[12px] font-bold flex items-center gap-1 uppercase ">
                Learn more
                <span>
                  <AiOutlineCaretRight className="text-main text-sm" />
                </span>
              </p>
            </div>

            <div className="shadow-md p-5">
              <p>Gastrocamera Examination</p>
              <p className="mt-10 text-main text-[12px] font-bold flex items-center gap-1 uppercase ">
                Learn more
                <span>
                  <AiOutlineCaretRight className="text-main text-sm" />
                </span>
              </p>
            </div>

            <div className="shadow-md p-5">
              <p>Colon Camera Examination</p>
              <p className="mt-10 text-main text-[12px] font-bold flex items-center gap-1 uppercase ">
                Learn more
                <span>
                  <AiOutlineCaretRight className="text-main text-sm" />
                </span>
              </p>
            </div>

            <div className="shadow-md p-5">
              <p>Colon Polyo Removal</p>
              <p className="mt-10 text-main text-[12px] font-bold flex items-center gap-1 uppercase ">
                Learn more
                <span>
                  <AiOutlineCaretRight className="text-main text-sm" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-main-gray">
        <div className="section1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-4">
          <div className="shadow-md p-5 bg-white">
            <p>Gastrointestinal Specialty Outpatient Clinic</p>
            <p className="mt-10 text-main text-[12px] font-bold flex items-center gap-1 uppercase ">
              Learn more
              <span>
                <AiOutlineCaretRight className="text-main text-sm" />
              </span>
            </p>
          </div>

          <div className="shadow-md p-5 bg-white">
            <p>Gastrointestinal Specialty Outpatient Clinic</p>
            <p className="mt-10 text-main text-[12px] font-bold flex items-center gap-1 uppercase ">
              Learn more
              <span>
                <AiOutlineCaretRight className="text-main text-sm" />
              </span>
            </p>
          </div>

          <div className="shadow-md p-5 bg-white">
            <p>Gastrointestinal Specialty Outpatient Clinic</p>
            <p className="mt-10 text-main text-[12px] font-bold flex items-center gap-1 uppercase ">
              Learn more
              <span>
                <AiOutlineCaretRight className="text-main text-sm" />
              </span>
            </p>
          </div>

          <div className="shadow-md p-5 bg-white">
            <p>Gastrointestinal Specialty Outpatient Clinic</p>
            <p className="mt-10 text-main text-[12px] font-bold flex items-center gap-1 uppercase ">
              Learn more
              <span>
                <AiOutlineCaretRight className="text-main text-sm" />
              </span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Feature */}
      <div className="section">
        <h2 className="text-center">Features of our hospital</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div className="order-last lg:order-first">
            <h3>Clinic specializing in endoscopy</h3>
            <p className="mt-3">
              Our hospital is a facility specializing in endoscopy. Our
              director, who is a specialist and instructor of the Japan
              Gastrointestinal Endoscopy Society, uses the latest endoscopy
              system to provide advanced endoscopic examinations at a clinic in
              town.
            </p>
            <button className="bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center mt-5">
              <span>More Details</span>
            </button>
          </div>
          <div className="order-first lg:order-last flex">
            <img
              src="feature1.png"
              className="w-full h-[350px] mx-auto object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div>
            <img
              src="feature2.png"
              className="w-full h-[350px] mx-auto object-cover"
            />
          </div>
          <div>
            <h3>Compatible with in-hospital laxatives</h3>
            <p className="mt-3">
              For those who are reluctant or anxious about taking laxatives at
              home, we have a space in the hospital where you can take
              laxatives. Please feel free to contact us.
            </p>
            <button className="bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center mt-5">
              <span>More Details</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div className="order-last lg:order-first">
            <h3>Facility introducing Olympus' EVIS X1</h3>
            <p className="mt-3">
              Our hospital has introduced Olympus' state-of-the-art endoscope
              system "EVIS X1". We provide quick and accurate inspections.
            </p>
            <button className="bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center mt-5">
              <span>More Details</span>
            </button>
          </div>
          <div className="order-first lg:order-last ">
            <img
              src="feature3.png"
              className="w-full h-[350px] object-cover mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div>
            <img
              src="feature4.png"
              className="w-full h-[350px] object-cover mx-auto"
            />
          </div>
          <div>
            <h3>Endoscopy using sedatives to reduce pain</h3>
            <p className="mt-3">
              Endoscopic examinations at our hospital are painless, as we use
              sedatives to allow you to undergo the examination while you are
              asleep. Recommended for first-time patients and those who are not
              comfortable with endoscopy.
            </p>
            <button className="bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center mt-5">
              <span>More Details</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div className="order-last lg:order-first">
            <h3>Day colon polyp removal</h3>
            <p className="mt-3">
              Most colorectal cancers develop from colorectal polyps. At our
              hospital, polyps discovered during colonoscopy are removed on the
              spot in an effort to prevent colon cancer. It is a day surgery
              that does not require hospitalization.
            </p>
            <button className="bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center mt-5">
              <span>More Details</span>
            </button>
          </div>
          <div className="order-first lg:order-last">
            <img
              src="feature5.png"
              className="w-full h-[350px] object-cover mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div>
            <img
              src="feature6.png"
              className="w-full h-[350px] object-cover mx-auto"
            />
          </div>
          <div>
            <h3>Good location, 3 minutes walk from Hikarigaoka Station</h3>
            <p className="mt-3">
              Our hospital is a facility specializing in endoscopy. Our
              director, who is a specialist and instructor of the Japan
              Gastrointestinal Endoscopy Society, uses the latest endoscopy
              system to provide advanced endoscopic examinations at a clinic in
              town.
            </p>
            <button className="bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center mt-5">
              <span>More Details</span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <Contact />
      </div>

      <div>
        <Appointment />
      </div>
    </div>
  );
}
