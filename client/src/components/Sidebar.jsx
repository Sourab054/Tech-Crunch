import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaUserCircle,
} from "react-icons/fa";
import man from "../img/man.jpg";

const Sidebar = () => {
  return (
    <div className="w-[30%] mt-4 flex flex-col items-center justify-center self-start">
      <div className="flex flex-col space-y-1 items-center justify-center p-2 border-b-2 border-gray-300">
        {/* <FaUserCircle className="text-[150px]" /> */}
        <h3 className="p-4 border-y-2 border-gray-300 font-bold tracking-wider text-lg uppercase w-full mb-4">
          About me
        </h3>
        <img src={man} alt="" className="h-[350px] rounded-sm object-cover" />
        <p className="text-lg font-semibold ">John Doe</p>
        <p className="text-tertiary tracking-wide font-bold uppercase">
          Fulltime tech blogger
        </p>
        <p className="text-center text-sm leading-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          culpa ipsa est ex laborum, blanditiis voluptatem commodi placeat.
        </p>
      </div>
      <div className="border-b-2 border-gray-300 p-2 w-full">
        <p className="font-semibold uppercase tracking-wider">Follow me on</p>
        <div className="flex items-center justify-center mt-2">
          <FaFacebookSquare size={24} className="mr-6" />
          <FaInstagramSquare size={24} className="mr-6" />
          <FaTwitterSquare size={24} className="mr-6" />
          <FaGithubSquare size={24} className="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
