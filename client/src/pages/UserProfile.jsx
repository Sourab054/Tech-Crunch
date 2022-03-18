import React from "react";
import Sidebar from "../components/Sidebar";
import UserProfileComponent from "../components/UserProfileComponent";

const UserProfile = () => {
  return (
    <div className="flex my-8 justify-center max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
      <UserProfileComponent />
      <Sidebar />
    </div>
  );
};

export default UserProfile;
