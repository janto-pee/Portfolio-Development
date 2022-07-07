import React from "react";
import profileImage from "../Assets/ayo2.png";
import blobMd from "../Assets/blobMd.svg";
import blueBlob from "../Assets/blueBlob.svg";
import { FaNodeJs, FaReact, FaAngular } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiEthereum,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const Header = () => {
  return (
    <div className=" text-slate-100 w-full">
      <div className="flex flex-col md:flex-row items-center py-12 text-center md:text-left">
        <div className="md:basis-1/2">
          <h5 className="small-font text-sky-200">
            FRONT & <br className="hidden md:block" /> BACKEND DEVELOPER
          </h5>
          <h2 className="text-2xl text-white font-semibold pt-8">
            SOFTWARE & <br className="hidden md:block" /> QUALITY ASSURANCE{" "}
            <br className="md:hidden" /> ENGINEER
          </h2>
          <p className="text-slate-400 pt-4 pb-8 small-font md:max-w-md">
            A goal oriented software developer with more than five years of
            experience developing highly scalable, mobile responsive, and robust
            enterprise web applications.
          </p>
          <div className="hidden md:flex border border-slate-400 md:w-5/6 lg:w-3/6 items-center justify-between gap-2 rounded-2xl p-1 ">
            <SiBlockchaindotcom />
            <SiEthereum />
            <SiNextdotjs />
            <button className="bg-secondary px-8 py-2 rounded-xl">
              Contact Me
            </button>
          </div>
        </div>
        <div className="md:basis-1/2 flex flex-col md:flex-row items-center md:text-right md:justify-between">
          <div className="flex items-center justify-center relative">
            <img src={profileImage} alt="" className="relative z-10 bottom-10 right-12" />
            <img src={blobMd} alt="" className="absolute w-96 " />
          </div>
          <div className="flex flex-row md:flex-col gap-6 mt-4">
            <FaAngular className="text-red-300 text-2xl  " />
            <FaReact className="text-blue-600 text-2xl" />
            <FaNodeJs className="text-2xl" />
            <SiMongodb className="text-green-400 text-2xl" />
            <SiExpress className="text-gray-100 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
