import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("auth")) || {}
  );
  const isAuth = Boolean(user?.token);
  const setAuth = (user) => {
    setUser(user);
    localStorage.setItem("auth", JSON.stringify(user));
  };
  const logOut = () => {
    console.log("So close", localStorage.getItem("auth"));
    localStorage.removeItem("auth");
  };
  return {
    user,
    isAuth,
    setAuth,
    logOut,
  };
};

export default useAuth;
