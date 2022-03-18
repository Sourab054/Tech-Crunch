import React from "react";
import Banner from "../components/Banner";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mt-4 mb-8 flex items-center justify-center max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
