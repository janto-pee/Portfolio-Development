import React from "react";
import {Link} from 'react-router-dom'
import { portfolio } from "../data";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaInternetExplorer } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="text-white py-8 text-center md:text-left">
      <h1 className="text-secondary small-font">PORTFOLIO</h1>
      <h1 className="text-2xl">
        My Recent <span className="text-secondary">Projects</span>
      </h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 pt-8 w-full ">
        {portfolio.developer.slice(0,4).map((item, index) => (
            <div className="">
              <Link to={item.link} className=' border-gray hover:bg-gray-200 border-4 flex '>
              <img
                src={item.img}
                alt=""
                className="delay-300 "
              />
              </Link>
              <div className="flex gap-2 mt-2 items-center justify-center md:justify-start text-center md:text-left">
                <a href={item.livelink} className=" md:flex items-center gap-2 bg-secondary px-3 py-2">
                  {" "}
                  <FaInternetExplorer /> Live Project
                </a>
                <a
                  className=" md:flex items-center gap-2 border-gray border-2 bg-white text-purple-900 px-3 py-2"
                  href={item.github}
                >
                  {" "}
                  <AiFillGithub color="purple" /> Github Link
                </a>
              </div>
            </div>
        )
        )}
      </div>
    </div>
  );
};

export default Projects;
