import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[80px] sticky top-0 z-50 bg-black text-white flex justify-between items-center">
      <div className="flex items-center justify-center w-[20%]">
        <FaFacebookSquare size={24} className="mr-6" />
        <FaInstagramSquare size={24} className="mr-6" />
        <FaTwitterSquare size={24} className="mr-6" />
        <FaGithubSquare size={24} className="" />
      </div>
      <div className="w-[60%]">
        <ul className="flex items-center justify-center">
          <li className="mr-6 text-lg">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mr-6 text-lg">
            {" "}
            <NavLink to="/write">Write</NavLink>
          </li>
          <li className="mr-6 text-lg">About Us</li>
          <li className="mr-6 text-lg">FAQs</li>
        </ul>
      </div>
      <div className="w-[20%] flex items-center justify-center">
        <FaUserCircle size={24} className="mr-6" />
        <FaSearch size={22} className="" />
      </div>
    </div>
  );
};

export default Navbar;
