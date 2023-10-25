import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BiTime } from "react-icons/bi";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import {RiGlobalLine} from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-main py-2 px-2 md:px-2 flex justify-between text-white">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-3">
          <IoLocationOutline size={20} />
          <span>Nerima-ku, Tokyo</span>
        </div>
        <div className="md:flex hidden items-center gap-3">
          <BiTime size={20} />
          <span>Mon - Sun: 9:00 am - 6:00 pm</span>
        </div>
      </div>
      <div className="flex items-center gap-10 mr-20">
        <div className="flex items-center gap-3">
          <FiFacebook size={20} />
          <FiInstagram size={20} />
          <BsSend size={20} />
        </div>
        <div className="md:flex hidden">
          |
        </div>
        <div className="md:flex hidden gap-3 items-center">
          <RiGlobalLine size={20} />
          <span>Japanese</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
