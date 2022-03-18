import React from "react";
import user from "../img/user.jpg";
import { MdModeEditOutline } from "react-icons/md";

const UserProfileComponent = () => {
  return (
    <div className="w-[70%] mr-8">
      <span className="text-4xl font-semibold float-left tracking-wider uppercase pb-2 border-b-2 border-tertiary ">
        About You
      </span>
      <div className="flex float-left w-full items-center justify-center flex-col mt-8">
        <div className="">
          <img
            src={user}
            alt="Profile Pic"
            className="h-[200px] relative w-[200px] border-2 border-tertiary p-[2px] rounded-full object-cover mb-8"
          />
        </div>

        <label htmlFor="fileInput">
          <div className="absolute rotate-12 top-[350px] left-[600px] bg-tertiary text-white rounded-full p-2">
            <MdModeEditOutline size={23} className="" />
          </div>
        </label>
        <input type="file" id="fileInput" className="hidden" />
        <form className="text-left w-[65%] space-y-4">
          <div className="space-y-1">
            <label className="text-lg" htmlFor="">
              Username
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="John"
              className="w-full outline-none bg-gray-200 placeholder-gray-500 text-gray-800 px-4 py-2 rounded-md"
            />
          </div>
          <div className="space-y-1">
            <label className="text-lg" htmlFor="">
              Email Address
            </label>{" "}
            <br />
            <input
              type="email"
              placeholder="yourmail@gmail.com"
              className="w-full outline-none bg-gray-200 placeholder-gray-500 text-gray-800 px-4 py-2 rounded-md"
            />
          </div>
          <div className="space-y-1">
            <label className="text-lg" htmlFor="">
              Password
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Iloveblogging"
              className="w-full outline-none bg-gray-200 placeholder-gray-500 text-gray-800 px-4 py-2 rounded-md"
            />
          </div>
        </form>
        <button className="mt-12 bg-tertiary text-white px-4 py-2 rounded-md font-semibold">
          Update
        </button>
      </div>
    </div>
  );
};

export default UserProfileComponent;
