import React, { useEffect, useState } from "react";
import card from "../img/card.jpg";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const imageFolder = "http://localhost:5000/images/";
  return (
    <div className="flex items-center pt-8 ">
      <div>
        {post.coverPhoto && (
          <img
            src={imageFolder + post.coverPhoto}
            alt="Desktop"
            className="w-[300px] h-[200px] object-cover rounded-md"
          />
        )}
      </div>
      <div className="space-y-2 flex-1 self-start relative h-[200px]">
        <p className="tracking-widest text-sm uppercase text-left pl-14 text-tertiary font-semibold ">
          {post.categories}
        </p>
        <h3 className="font-bold leading-5 text-lg text-justify pl-14">
          {post.title}
        </h3>
        <p className="text-justify leading-6 pl-14">
          {post.desc.length > 250
            ? `${post.desc.substring(0, 250)}...`
            : post.desc}
        </p>
        <Link to={`post/${post._id}`}>
          <span className="absolute left-0 bottom-0 ml-14 border-b-2 font-semibold text-gray-800 border-tertiary">
            Read more
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
