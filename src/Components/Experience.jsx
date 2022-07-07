import React from "react";
import { FaNodeJs, FaReact, FaAngular } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiEthereum,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { data } from "../data";

const Experience = () => {
  return (
    <div className="text-white py-16 text-center md:text-left">
      <h1 className="text-secondary small-font">SKILLS</h1>
      <h1 className="text-xl">
        My Skill <span className="text-secondary">& </span>Experience
      </h1>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 mt-8 flex flex-col justify-between">
          <div>
            <p className="text-slate-300 mb-4">
            I am a software engineer who constantly seeks out innovative solutions to everyday problems. In my four years in this industry, I've honed my analytical thinking and collaboration skills, and I love working with a team. I've also had the opportunity to serve as the software engineer for 4+ projects with Gammalance Technologies.
            </p>
            <p className=" text-slate-300 hidden md:block">
            Before my current position, I was a junior software engineer with Tizco .NET. While working there, I committed to fullstack web development, which has been my specialty for more than three years. This experience has made me suitable for roles in the field of fullstack, QA and software architecture. 
            </p>
          </div>
          <div className="flex items-center justify-between mt-auto">
            <FaNodeJs className="icon-items" />
            <FaReact className="icon-items text-blue-600" />
            <SiExpress className="icon-items" />
            <SiMongodb className="icon-items text-green-400" />
            <SiEthereum className="icon-items" />
            <FaAngular className="icon-items text-red-600" />
            <SiNextdotjs className="icon-items text-slate-300" />
          </div>
        </div>
        <div className="md:w-1/2 mt-8">
          <h3 className="font-bold text-lg pb-2 border-b-2 border-slate-400">
            Experience
          </h3>
          <div className="">
            {data.experience.map((items, i) => (
              <div
                className="py-6 border-b border-slate-200 flex items-center justify-between text-left"
                key={i}
              >
                <span className="md:w-1/3">{items.year}</span>
                <div className="md: w-2/3 ">
                  <p className="">{items.position}</p>
                  <small className="text-slate-400">{items.stack}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
