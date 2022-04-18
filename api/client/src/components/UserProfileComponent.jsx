import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { UserState } from "../context.js/UserContext";
import { axiosInstance } from "../config";

const UserProfileComponent = () => {
  const { user, setUser, notify } = UserState();
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const imageFolder = "http://localhost:5000/images/";

  console.log(user);
  const handleSubmit = async (e) => {
    if (username === "" || email === "" || password === "") {
      console.error("Please input all the fields");
    } else {
      e.preventDefault();
      const updatedUser = {
        userId: user._id,
        username,
        email,
        password,
      };

      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        updatedUser.profilePic = filename;
        try {
          await axiosInstance.post("/upload", data);
          notify("success", "Profile updated successfully");
        } catch (error) {
          console.log(error);
          notify("error", "Something went wrong!");
        }
      }
      try {
        console.log(user);
        console.log(updatedUser);
        const { data } = await axiosInstance.put(
          `/user/${user._id}`,
          updatedUser
        );
        console.log(data);
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  console.log(user);

  return (
    <div className="w-[70%] mr-8">
      <span className="text-4xl font-semibold float-left tracking-wider uppercase pb-2 border-b-2 border-tertiary ">
        About You
      </span>
      <div className="flex float-left w-full items-center justify-center flex-col mt-8">
        <div className="">
          <img
            src={
              file ? URL.createObjectURL(file) : imageFolder + user.profilePic
            }
            alt="Profile Pic"
            className="h-[200px] relative w-[200px] border-2 border-tertiary p-[2px] rounded-full object-cover mb-8"
          />
        </div>

        <label htmlFor="fileInput">
          <div className="absolute rotate-12 top-[350px] left-[600px] bg-tertiary text-white rounded-full p-2">
            <MdModeEditOutline size={23} className="" />
          </div>
        </label>
        <input
          type="file"
          id="fileInput"
          onChange={(e) => setFile(e.target.files[0])}
          className="hidden"
        />
        <form className="text-left w-[65%] space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-lg" htmlFor="">
              Username
            </label>{" "}
            <br />
            <input
              type="text"
              value={username}
              // placeholder={user.username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full outline-none bg-gray-200 placeholder-gray-500 text-gray-800 px-4 py-2 rounded-md"
            />
          </div>
          <div className="space-y-1">
            <label className="text-lg" htmlFor="">
              Email Address
            </label>{" "}
            <br />
            <input
              type="email"
              value={email}
              // placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none bg-gray-200 placeholder-gray-500 text-gray-800 px-4 py-2 rounded-md"
            />
          </div>
          <div className="space-y-1">
            <label className="text-lg" htmlFor="">
              Password
            </label>{" "}
            <br />
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none bg-gray-200 placeholder-gray-500 text-gray-800 px-4 py-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="mt-12 bg-tertiary text-white px-4 py-2 rounded-md font-semibold"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfileComponent;
