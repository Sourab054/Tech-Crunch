import React from "react";
import Sidebar from "../components/Sidebar";
import SingleBlogComponent from "../components/SingleBlogComponent";

const SingleBlog = () => {
  return (
    <div className="flex my-8 items-center justify-center max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
      <SingleBlogComponent />
      <Sidebar />
    </div>
  );
};

export default SingleBlog;
