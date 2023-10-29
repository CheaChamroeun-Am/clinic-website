"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-2 md:px-2 py-4 shadow-lg">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={300} height={50} />
      </Link>
      <div>
        <ul className="flex">
          <li className=" p-2 px-10 text-main hover:bg-main hover:text-white">
            <Link href="/">
              <span className="block h-full w-full">Home</span>
            </Link>
          </li>

          <li className="relative group p-2 px-10 cursor-pointer text-main hover:bg-main hover:text-white">
            Menu
            <ul className="absolute z-20 hidden mt-2 bg-[#edf2fa] shadow-lg group-hover:block text-center -left-10 -right-10">
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/menu#ForFirstTimeUser">
                  <span className="block h-full w-full">
                    For first time users
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/menu#InternalMedicine">
                  <span className="block h-full w-full">Internal medicine</span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/menu#Gastroenterology">
                  <span className="block h-full w-full">Gastroenterology</span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/menu#Endoscopy">
                  <span className="block h-full w-full">
                    Endoscopy internal medicine
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/menu/gastrointestinal">
                  <span className="block h-full w-full">
                    Gastrointestinal specialty
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="relative group p-2 px-10 cursor-pointer text-main hover:bg-main hover:text-white">
            Gastroscope
            <ul className="absolute z-20 hidden mt-2 bg-[#edf2fa] shadow-lg group-hover:block text-center -left-10 -right-10">
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/gastroscope">
                  <span className="block h-full w-full">
                    Gastrocamera at our hospital
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/gastroscope#CustomizedEndoscopy">
                  <span className="block h-full w-full">
                    Customized endoscopy
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/gastroscope#CharacteristicsHospital">
                  <span className="block h-full w-full">
                    Characteristics of our hospital
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/gastroscope#TestFlow">
                  <span className="block h-full w-full">Test flow</span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/gastroscope#CostTesting">
                  <span className="block h-full w-full">Cost of testing</span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/gastroscope/manga-gastrocamera">
                  <span className="block h-full w-full">
                    Learn from manga! Gastrocamera examination
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="relative group p-2 px-10 cursor-pointer text-main hover:bg-main hover:text-white">
            Colonscope
            <ul className="absolute z-20 hidden mt-2 bg-[#edf2fa] shadow-lg group-hover:block text-center -left-10 -right-10">
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/colonscope">
                  <span className="block h-full w-full">
                    Colon camera at our hospital
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/colonscope#CustomizedEndoscopy">
                  <span className="block h-full w-full">
                    Customized endoscopy
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/colonscope#CharacteristicsHospital">
                  <span className="block h-full w-full">
                    Characteristics of our hospital
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/colonscope#TestFlow">
                  <span className="block h-full w-full">Test flow</span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/colonscope#CostTesting">
                  <span className="block h-full w-full">Cost of testing</span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/colonscope/colon-polyp-removal">
                  <span className="block h-full w-full">
                    Colon polyp removal
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/colonscope/dietary-precautions">
                  <span className="block h-full w-full">
                    Dietary precautions for colonoscopy
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/colonscope/manga-caloncamera">
                  <span className="block h-full w-full">
                    Learn from manga! Colon camera examination
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="relative group p-2 px-10 cursor-pointer text-main hover:bg-main hover:text-white">
            Disease
            <ul className="absolute z-20 hidden mt-2 bg-[#edf2fa] shadow-lg group-hover:block text-center -left-10 -right-10">
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/clinic">
                  <span className="block h-full w-full">
                    Reflux esophagitis
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/clinic">
                  <span className="block h-full w-full">Gastritis</span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/clinic">
                  <span className="block h-full w-full">
                    Helicobacter pylori
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/clinic">
                  <span className="block h-full w-full">
                    Irritable bowel syndrome
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/clinic">
                  <span className="block h-full w-full">
                    Inflammatory bowel syndrome
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/clinic">
                  <span className="block h-full w-full">Diarrhea</span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/clinic">
                  <span className="block h-full w-full">Constipation</span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/clinic">
                  <span className="block h-full w-full">
                    Bloody stool (melena)
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/clinic">
                  <span className="block h-full w-full">
                    Fecal occult blood positive
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="relative group p-2 px-10 mr-10 cursor-pointer text-main hover:bg-main hover:text-white">
            Clinic
            <ul className="absolute z-20 hidden mt-2 bg-[#edf2fa] shadow-lg group-hover:block text-center -left-10 -right-10">
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/clinic">
                  <span className="block h-full w-full">
                    Doctor introduction
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/clinic">
                  <span className="block h-full w-full">
                    Clinic introduction
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/clinic">
                  <span className="block h-full w-full">Medical hours</span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/clinic">
                  <span className="block h-full w-full">Access</span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/clinic">
                  <span className="block h-full w-full">
                    Hospital introduction
                  </span>
                </Link>
              </li>
              <li className="px-4 py-2 border-t-2 hover:bg-main  border-main text-black hover:text-white">
                <Link href="/clinic">
                  <span className="block h-full w-full">
                    Recruitment information
                  </span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
