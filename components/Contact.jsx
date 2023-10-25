import React from "react";
import { FiMap } from "react-icons/fi";
import { BsTelephone, BsCircleFill } from "react-icons/bs";
import { RiTriangleFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div>
      <h2 className="section text-center">Contact Us</h2>
      <div className="bg-main-gray mt-10">
        <div className="section1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-last lg:order-first">
              <div>
                <div className="flex gap-4 items-center">
                  <FiMap className="text-main text-xl" />
                  <p className="font-bold text-xl">Address</p>
                </div>
                <p className="text-[12px]">
                  CLINIC HIKARIGAOKA 3F, 5-16-5 Tagara, Nerima-ku, Tokyo
                </p>
              </div>

              <div className="mt-10">
                <div className="flex gap-4 items-center">
                  <BsTelephone className="text-main text-xl" />
                  <p className="font-bold text-xl">Phone Number</p>
                </div>
                <p className="text-[12px]">03-3577-7149</p>
              </div>

              <div className="mt-10">
                <div className="flex gap-4 items-center">
                  <BsTelephone className="text-main text-xl" />
                  <p className="font-bold text-xl">Opening Hours</p>
                </div>

                <div className="w-full overflow-x-auto">
                  <table className="table-auto mt-5 min-w-[600px]">
                    <thead>
                      <tr>
                        <th className="px-3 text-[14px]"></th>
                        <th className="px-3 text-[14px]">Mon</th>
                        <th className="px-3 text-[14px]">Tue</th>
                        <th className="px-3 text-[14px]">Wed</th>
                        <th className="px-3 text-[14px]">Thurs</th>
                        <th className="px-3 text-[14px]">Fri</th>
                        <th className="px-3 text-[14px]">Sat</th>
                        <th className="px-3 text-[14px]">Sun</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="px-3 py-3 text-[14px] text-center">
                          9:00 - 12:30
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <BsCircleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <BsCircleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <RiTriangleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <BsCircleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <BsCircleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <BsCircleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <RiTriangleFill className="text-main" />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-3 py-3 text-[14px] text-center">
                          9:00 - 12:30
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <RiTriangleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <RiTriangleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <RiTriangleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <RiTriangleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <RiTriangleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <RiTriangleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <RiTriangleFill className="text-main" />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-3 py-3 text-[14px] text-center">
                          9:00 - 12:30
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <BsCircleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <BsCircleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <RiTriangleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <BsCircleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <BsCircleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <BsCircleFill className="text-main" />
                          </div>
                        </td>
                        <td className="px-3 py-3 text-[14px] text-center">
                          <div className="flex items-center justify-center">
                            <RiTriangleFill className="text-main" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-10 text-[14px]">
                  <div className="flex gap-4 items-center">
                    <BsCircleFill className="text-main text-[14px]" />
                    <p>Outpatient treatment/endoscopy</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <RiTriangleFill className="text-main text-[14px]" />
                    <p>Reservation only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <img
                src="/map1.png"
                className="w-full h-[500px] mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
