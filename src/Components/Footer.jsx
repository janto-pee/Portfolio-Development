import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary w-full border-t border-slate-300 ">
      <div className="w-11/12 mx-auto py-4 flex items-center justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2022{" "}
          <Link to="/" className="hover:underline">
            Ayobami™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
          <Link to="/" className="mr-4 hover:underline md:mr-6 ">
            Home
          </Link>
          <Link to="/portfolio" className="mr-4 hover:underline md:mr-6">
            Portfolio
          </Link>
          <Link to="/services" className="mr-4 hover:underline md:mr-6">
            Services
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
