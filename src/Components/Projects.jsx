import React from "react";
import { projectUI } from "../data";
import {
  AiOutlineDownload,
  AiFillGithub,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import {FaInternetExplorer} from "react-icons/fa";

const Projects = () => {
  return (
    <div className="text-white py-8 ">
      <h1 className="text-secondary small-font">PORTFOLIO</h1>
      <h1 className="text-2xl">
        My Recent <span className="text-secondary">Projects</span>
      </h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 pt-8 " >
        {
          projectUI.map((item, index) => (
              <div className="" key={index} >
                  {
                  index < 4 ? (
                      <div className="">
                        <img
                          src={item}
                          alt=""
                          className=" border-gray border-4 delay-300"
                          />
                        <div className="flex gap-2 mt-2 items-center text-center md:text-left">
                        <a className=" md:flex items-center gap-2 bg-secondary px-3 py-2">
                          {" "}
                          <FaInternetExplorer /> Live Project
                        </a>
                        <a className=" md:flex items-center gap-2 border-gray border-2 bg-white text-purple-900 px-3 py-2" href="github.com/janto-pee">
                          {" "}
                          <AiFillGithub color="purple" /> Github Project
                        </a>
                      </div>
                      </div>
                  ): null
                  }
              </div>
          )
          )}
      </div>
    </div>
  );
};

export default Projects;
