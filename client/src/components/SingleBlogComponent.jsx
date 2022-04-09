import React, { useEffect, useState } from "react";
import card from "../img/card.jpg";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserState } from "../context.js/UserContext";
import TextareaAutosize from "react-textarea-autosize";

const SingleBlogComponent = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [post, setPost] = useState([]);
  const [update, setUpdate] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = UserState();
  const path = location.pathname.split("/")[2];
  const imageFolder = "http://localhost:5000/images/";

  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get("/post/" + path);
      setPost(data);
      setTitle(data.title);
      setDesc(data.desc);
      console.log(data);
    };
    getPost();
  }, [path]);

  const handleUpdate = async () => {
    try {
      await axios.put(`/post/` + post._id, {
        username: user.username,
        title,
        desc,
      });
      setUpdate(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/post/` + post._id, {
        data: {
          username: user.username,
        },
      });
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[70%] mr-8">
      <div className="my-4">
        {post.coverPhoto && (
          <img
            src={imageFolder + post.coverPhoto}
            alt=""
            className="object-cover rounded-md w-full h-[500px]"
          />
        )}
      </div>
      <div className="flex justify-between items-center">
        {update ? (
          <input
            type="text"
            autoFocus
            value={title}
            className="w-full p-1 mr-1 border-b border-tertiary outline-tertiary"
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h3 className="font-bold font-pop text-2xl w-[80%] text-left">
            {title}
          </h3>
        )}

        {post.username === user?.username && (
          <div className="flex items-center justify-between mt-2">
            <FaEdit
              size={24}
              className="text-tertiary mr-4"
              onClick={() => setUpdate(true)}
            />
            <FaTrash
              size={22}
              className="text-red-500"
              onClick={handleDelete}
            />
          </div>
        )}
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-400 font-semibold">
          Author : <Link to={`/?user=${post.username}`}>{post.username}</Link>{" "}
        </p>
        <p className="text-gray-400 font-semibold">
          {" "}
          {new Date(post.createdAt).toDateString()}
        </p>
      </div>
      {update ? (
        <TextareaAutosize
          maxRows={20}
          value={desc}
          placeholder="Write your blog..."
          className="w-[90%] mt-6 h-[100vh] outline-none "
          onChange={(e) => setDesc(e.target.value)}
        />
      ) : (
        <p className="text-left mt-4 first-letter:font-serif first-letter:text-4xl first-letter:font-semibold first-letter:text-gray-700">
          {desc}
        </p>
      )}
      {update && (
        <button
          onClick={handleUpdate}
          className="my-4 bg-tertiary tracking-wide text-white px-4 py-2 rounded-md font-semibold cursor-pointer"
        >
          Update
        </button>
      )}
    </div>
  );
};

export default SingleBlogComponent;
