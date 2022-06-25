import React from "react";
import { data } from "../data";

const Projects = () => {
  return (
    <div className="text-white py-16">
      <h1 className="text-secondary small-font">PORTFOLIO</h1>
      <h1 className="text-2xl">
        My Recent <span className="text-secondary">Projects</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div>
          {data.experience.map((items, i) => (
            <div
              className="py-6 border-b border-slate-200 flex items-center"
              key={i}
            >
              <span className="md:w-1/3">{items.year}</span>
              <div className="md: w-2/3">
                <p className="">{items.position}</p>
                <small className="text-slate-400">{items.stack}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
