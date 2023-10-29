"use client";
import React from "react";
import "./style.css";
import Link from "next/link";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import FirstTimeUserSlider from "../../components/FirstTimeUserSlider";
import ColonCameraSlider from "../../components/CalonCameraSlider";
import Button from "../../components/Button";
import { FaUserDoctor } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
// HiShieldCheck

const Clinic = () => {
  return (
    <div>
      <ColonCameraSlider />

      {/* <FirstTimeUserSlider /> */}

      <div className="section">
        <div>
          <div className="flex justify-center md:float-right md:ml-10">
            <img
              src="examGastrocamera.png"
              alt="endoscope"
              className="w-full h-[320px]"
            ></img>
          </div>
        </div>
        <div>
          <h2 className="mt-5 md:mt-0">Same-day colon polyp removal</h2>
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

      {/* Button */}
      <Button title="Read More" className="mt-5" />

      <Button icon={FaUserDoctor} title="Find Doctor" />

      {/* <Button
        title="Button without Icon"
        onClick={handleClick}
      /> */}

      <div className="flex justify-center">
        <Button icon={FaUserDoctor} title="Find Doctor" />
        <Button icon={FaArrowRight} title="Next" iconPosition="after" />
      </div>

      {/* bg main gray */}
      {/* <div className="bg-main-gray mt-10">
        <div className="section1">
          <h2 className="text-center">Are you having trouble with the following?</h2>
        </div>
      </div> */}
    </div>
  );
};

export default Clinic;
