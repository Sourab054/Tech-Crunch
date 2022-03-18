import React from "react";
import banner from "../img/banner.jpg";

const Banner = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          src={banner}
          alt="Hero img - A Desktop setup"
          className="w-full h-[550px] object-cover "
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-overlay w-full h-[550px]"></div>
        <div className="absolute top-[40%] left-[20%] text-white">
          <span className="text-5xl font-bold mr-2">Tech</span>
          <span className="text-5xl bg-tertiary skew-x-[20deg] inline-block p-1 font-bold">
            <span className="-skew-x-[20deg] inline-block">Crunch</span>
          </span>
          <p className="mt-2">
            We cover technology, gaming, and entertainment, and the blog is
            constantly updated throughout the day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
