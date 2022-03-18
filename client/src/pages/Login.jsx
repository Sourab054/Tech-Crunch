import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
        <div className="mb-4">
          <span className="text-6xl font-bold mr-2">Tech</span>
          <span className="text-6xl bg-tertiary skew-x-[20deg] inline-block p-1 font-bold">
            <span className="-skew-x-[20deg] text-white inline-block">
              Crunch
            </span>
          </span>
        </div>
        <div className="border-2 border-gray-200 px-4 py-8 bg-white shadow-lg rounded-lg w-[75%] md:w-[40%] lg:w-[25%] mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="float-left text-lg">
              Username
            </label>
            <input
              type="text"
              id="name"
              className="w-full outline-none bg-gray-200 placeholder-gray-500 text-gray-800 px-4 py-2 mt-2 rounded-md"
              placeholder=""
              required=""
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="float-left text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full outline-none bg-gray-200 placeholder-gray-500 text-gray-800 px-4 py-2 mt-2 rounded-md"
              required=""
            />
          </div>

          <button className="bg-tertiary text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            Login
          </button>
          <div className="text-sm mt-6 ">
            Do you have an account?{" "}
            <Link to="/register">
              <b className="hover:underline hover:cursor-pointer ">Sign Up</b>{" "}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
