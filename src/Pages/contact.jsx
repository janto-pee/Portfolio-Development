import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { data } from "../data";

const contact = () => {
  return (
    <div className="bg-primary min-h-screen w-full md:h-screen py-6 ">
      <div className="mx-auto w-11/12 ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-slate-200">
            <h1 className="text-2xl font-bold">Contact Me</h1>
            <small className="text-gray-300">
              Fill the form and i will get back to you in 6hours
            </small>
            <div className="py-16">
              <p className="flex ">
                {" "}
                <span className="mr-2 text-gray-200">
                  <BsFillTelephoneFill />
                </span>{" "}
                +2349064890551
              </p>
              <p className="flex my-6">
                {" "}
                <span className="mr-2 text-gray-200">
                  <AiFillMail />
                </span>{" "}
                cairocoding@gmail.com
              </p>
              <p className="flex">
                {" "}
                <span className="mr-2 text-gray-200">
                  <GiWorld />
                </span>{" "}
                Cairo, Egypt
              </p>
            </div>
          </div>
          <div className="bg-slate-100 rounded-lg px-4 py-8">
            {data.contact.map((item, i) => (
              <div>
                <label className="text-gray-500 text-sm" key={i}>
                  {item.name}
                </label>
                <input
                  type="text"
                  placeholder={item.comment}
                  className="p-2 text-gray-300 w-full rounded-md border border-sky-300"
                />
              </div>
            ))}
            <div className="mt-2">
              <label className="text-gray-500 text-sm">Your message</label>
              <textarea
                type="text"
                rows={5}
                placeholder="enter your message"
                className="p-2 text-gray-300 w-full rounded-md border border-sky-300"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
