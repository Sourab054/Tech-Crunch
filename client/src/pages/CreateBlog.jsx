import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import TextareaAutosize from "react-textarea-autosize";
import image from "../img/banner1.jpg";
import { UserState } from "../context.js/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = UserState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.coverPhoto = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.post("/post", newPost);
      console.log(res);
      navigate("/post/" + res.data._id, { replace: true });
    } catch (err) {}
  };

  return (
    <div className="my-8 p-[50px] max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt=""
          className="object-cover w-[80%] ml-[150px] h-[300px] rounded-md"
        />
      )}

      <form className="relative" onSubmit={handleSubmit}>
        <div className="flex items-center ml-[150px] mt-4">
          <label htmlFor="addImage">
            <GrAddCircle size={38} className="text-tertiary" />
          </label>
          <input
            type="file"
            id="addImage"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            autoFocus={true}
            className="text-2xl ml-4 w-[60%] outline-none font-pop tracking-wider"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex items-center ml-[150px]">
          <TextareaAutosize
            maxRows={20}
            value={desc}
            placeholder="Write your blog..."
            className="w-[90%] mt-6 h-[100vh] outline-none "
            onChange={(e) => setDesc(e.target.value)}
          />
          {/* <textarea
            type="text"
            value={desc}
            cols="30"
            rows="5"
            placeholder="Write your blog..."
            className="w-[90%] mt-6 h-[100vh] outline-none"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea> */}
        </div>
        <button
          type="submit"
          className="absolute top-2 right-20 bg-tertiary text-white px-3 py-1.5 rounded-md font-semibold"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
