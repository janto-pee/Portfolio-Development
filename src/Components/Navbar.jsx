import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineDownload,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-full bg-primary text-white border-b border-slate-600 relative ">
      <div className="w-11/12 mx-auto py-4 ">
        <div className="flex items-center justify-between ">
          <Link to={"/"}>
            <h1 className="text-2xl" style={{ fontFamily: "fruktur" }}>
              <span className="text-secondary">Ayo</span>bami
            </h1>
          </Link>
          <ul className="hidden md:flex items-center justify-between md:gap-4 lg:gap-8 text-slate-300">
            <Link to={"/"}>Home</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/portfolio"}>Portfolio</Link>
            <Link to={"/contact"}>Contact</Link>
          </ul>
          <button className="hidden md:flex items-center gap-2 bg-secondary px-3 py-2">
            {" "}
            <AiOutlineDownload /> Download CV
          </button>

          {/* mobile menu */}
          {menu ? (
            <ul className="flex flex-col gap-8 pl-8 bg-primary text-gray-300 absolute top-0 right-0 w-1/2 z-50 h-screen py-6 pr-4 md:hidden">
              <AiOutlineClose
                className="text-xl ml-auto"
                onClick={() => setMenu(!menu)}
              />
              <Link to={"/"}>Home</Link>
              <Link to={"/services"}>Services</Link>
              <Link to={"/portfolio"}>Portfolio</Link>
              <Link to={"/contact"}>Contact</Link>
            </ul>
          ) : (
            <AiOutlineMenu
              className="md:hidden text-xl"
              onClick={() => setMenu(!menu)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
