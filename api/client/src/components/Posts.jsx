import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../config";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axiosInstance.get("/post" + search);
      setPosts(data);
      console.log(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="w-[70%] self-start mt-8 space-y-12 mr-8">
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Posts;
