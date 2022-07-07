import React, { useState } from "react";
import { Link } from "react-router-dom";
import AyoCV from '../Assets/cv/Adejumo.pdf'
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
            <Link to={"/portfolio"}>Portfolio</Link>
            <a href="https://github.com/janto-pee">Github</a>
            <a href="https://ng.linkedin.com/in/adejumo-ayobami-347bb9227">LinkedIn</a>
          </ul>
          <a className="hidden md:flex items-center gap-2 bg-secondary px-3 py-2" href={AyoCV}>
            {" "}
            <AiOutlineDownload /> Download CV
          </a>

          {/* mobile menu */}
          {menu ? (
            <ul className="flex flex-col gap-8 pl-8 bg-primary text-gray-300 absolute top-0 right-0 w-1/2 z-50 h-screen py-6 pr-4 md:hidden">
              <AiOutlineClose
                className="text-xl ml-auto"
                onClick={() => setMenu(!menu)}
              />
              <Link to={"/"}>Home</Link>
              <Link to={"/portfolio"}>Portfolio</Link>
              <a href="https://github.com/janto-pee">Github</a>
              <a href="https://ng.linkedin.com/in/adejumo-ayobami-347bb9227">LinkedIn</a>
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
