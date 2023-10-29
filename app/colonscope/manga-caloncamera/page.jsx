import React from "react";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import Contact from "../../../components/Contact";

const CalonCameraManga = () => {
  return (
    <div>
      <div className="main-section">
        <div className="flex gap-3 text-[13px]  text-gray-500">
          <Link href="/" className="underline">
            Home
          </Link>
          <span>/</span>
          <span>Gastroscope</span>
          <span>/</span>
          <span>Learn from manga! Colon camera examination</span>
        </div>
      </div>

      <div className="section">
        <div className="flex flex-col justify-center">
          <img src="/caloncamera-manga1.png" />
          <img src="/caloncamera-manga2.png" />
          <img src="/caloncamera-manga3.png" />
          <img src="/caloncamera-manga4.png" />
          <img src="/caloncamera-manga5.png" />
          <img src="/caloncamera-manga6.png" />
          <img src="/caloncamera-manga7.png" />
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

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default CalonCameraManga;
