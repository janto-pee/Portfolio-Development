import React from "react";
import { projectUI } from "../data";

const Projects = () => {
  return (
    <div className="text-white py-8">
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
                      <div className="border-4">
                        <img
                        src={item}
                        alt=""
                        className=" border-gray border-4 delay-300"
                        />
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
