import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserContext = createContext();

const toastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
toast.configure();

export const notify = (type, message) => {
  if (type === "success") {
    toast.success(message, toastOptions);
  } else if (type === "info") {
    toast.info(message, toastOptions);
  } else {
    toast.error(message, toastOptions);
  }
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, notify }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

export const UserState = () => {
  return useContext(UserContext);
};
