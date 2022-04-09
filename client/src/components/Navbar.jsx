import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserState } from "../context.js/UserContext";

const Navbar = () => {
  const { user, setUser } = UserState();
  const navigate = useNavigate();
  const imageFolder = "http://localhost:5000/images/";

  const handleLogout = () => {
    setUser(null);
    console.log(user);
  };

  const handleLogin = () => {
    navigate("/login");
  };

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
        <Link to="/profile">
          {user?.profilePic ? (
            <img
              src={imageFolder + user.profilePic}
              className="object-cover w-[45px] h-[45px] rounded-full mr-8"
              alt=""
            />
          ) : (
            <FaUserCircle size={30} className="mr-6 cursor-pointer" />
          )}
        </Link>
        {user ? (
          <div
            onClick={handleLogout}
            className="flex items-center bg-tertiary  text-white px-4 py-2 rounded-md cursor-pointer space-x-1.5"
          >
            <button className="font-semibold font-pop tracking-wide">
              Logout
            </button>
            <FiLogOut size={16} className="cursor-pointer" />
          </div>
        ) : (
          <div
            onClick={handleLogin}
            className="flex items-center bg-tertiary  text-white px-4 py-2 rounded-md cursor-pointer space-x-1 "
          >
            <button className="font-semibold font-pop tracking-wide">
              Login
            </button>
            <FiLogIn size={18} className="cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
