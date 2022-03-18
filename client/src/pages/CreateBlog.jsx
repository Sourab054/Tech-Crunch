import React from "react";
import { GrAddCircle } from "react-icons/gr";
import TextareaAutosize from "react-textarea-autosize";
import image from "../img/banner1.jpg";

const CreateBlog = () => {
  return (
    <div className="my-8 p-[50px] max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
      <img
        src={image}
        alt=""
        className="object-cover w-[80%] ml-[150px] h-[300px] rounded-md"
      />
      <form className="relative">
        <div className="flex items-center ml-[150px] mt-4">
          <label htmlFor="addImage">
            <GrAddCircle size={38} className="text-tertiary" />
          </label>
          <input type="file" id="addImage" className="hidden" />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            className="text-2xl ml-4 w-[60%] outline-none font-pop tracking-wider"
          />
        </div>
        <div className="flex items-center ml-[150px]">
          <TextareaAutosize
            maxRows={20}
            defaultValue="Write your blog here..."
            className="w-[90%] mt-6 h-[100vh] outline-none "
          />
          {/* <textarea
            type="text"
            cols="30"
            rows="5"
            placeholder="Write your blog..."
            className="w-[90%] mt-6 h-[100vh] outline-none"
          ></textarea> */}
        </div>
        <button className="absolute top-2 right-20 bg-tertiary text-white px-3 py-1.5 rounded-md font-semibold">
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
