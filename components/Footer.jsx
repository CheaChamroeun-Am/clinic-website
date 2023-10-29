import React from "react";
import Link from "next/link";
import { FiFacebook, FiSend, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div
      className="mt-32 bg-main text-white p-5 py-10 items-center flex flex-col justify-center
    "
    >
      <div className="flex flex-col items-center">
        <div className="flex gap-3 items-center text-lg">
          <span className="rounded-full bg-white w-7 h-7 flex justify-center items-center">
            <FiFacebook className="z-20 text-main" />
          </span>
          <span className="rounded-full bg-white w-7 h-7 flex justify-center items-center">
            <FiSend className="z-20 text-main" />
          </span>
          <span className="rounded-full bg-white w-7 h-7 flex justify-center items-center">
            <FiInstagram className="z-20 text-main" />
          </span>
        </div>

        <div>
          <ul className="grid grid-cols-3  lg:grid-cols-7 items-center gap-10 mt-10 text-white">
            <li>
              <Link href="/clinic">Home</Link>
            </li>
            <li>
              <Link href="/clinic">Menu</Link>
            </li>
            <li>
              <Link href="/clinic">Gastroscope</Link>
            </li>
            <li>
              <Link href="/clinic">Colonscope</Link>
            </li>
            <li>
              <Link href="/clinic">Disease</Link>
            </li>
            <li>
              <Link href="/clinic">Clinic</Link>
            </li>
            <div className="col-span-3 md:col-span-1">
              <button className="bg-white text-main rounded-md w-full px-4 py-2 flex gap-3 items-center justify-center">
                <span>Contact Us</span>
              </button>
            </div>
          </ul>
        </div>

      </div>

      <div className="mt-16 flex flex-col justify-center items-center ">
        <hr className="w-[300px] md:w-[600px]" />
        <span className="text-white mt-5">&copy; 2023 All Rights Reserved</span>
      </div>

      
    </div>
  );
};

export default Footer;
