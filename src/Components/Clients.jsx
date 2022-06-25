import React from "react";
import { FaComment, FaStar } from "react-icons/fa";
import { data } from "../data";

const Clients = () => {
  return (
    <div className="text-white py-16 text-center">
      <h1 className="text-secondary small-font">TESTIMONIAL</h1>
      <h1 className="text-2xl mb-8">
        What My <span className="text-secondary">Clients </span>Say
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.testimonial.map((items, i) => (
          <div className="p-4 bg-gray-700 flex flex-col gap-6" key={i}>
            <div className="flex justify-between">
              <FaComment />
              <p>
                {[...Array(5)].map((items, i) => (
                  <FaStar key={i} className="text-yellow-400 inline-flex" />
                ))}
              </p>
            </div>
            <p className="">{items.comment}</p>
            <div className="flex justify-between">
              <img
                src={items.image}
                alt=""
                className="w-12 rounded-full border-2"
              />
              <div>
                <p>{items.name}</p>
                <small>{items.position}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
