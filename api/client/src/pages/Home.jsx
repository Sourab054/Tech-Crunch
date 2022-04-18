import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import { axiosInstance } from "../config";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axiosInstance.get("/post" + search);
      setPosts(data);
      console.log(data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div>
      <Banner />
      <div className="mt-4 mb-8 flex items-center justify-center max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
