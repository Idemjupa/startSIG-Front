import { useEffect } from "react";
import useAuth from "../Hooks/useAutenticacion";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);
  return <Outlet />;
};

export default PrivateRoutes;
