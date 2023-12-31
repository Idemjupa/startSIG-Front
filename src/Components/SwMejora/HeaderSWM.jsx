import imgLogo from "../../assets/LOGO SIG principal negativo.png";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAutenticacion";

const Header = () => {
  const { logOut, user } = useAuth();

  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };

  return (
    <>
      <header className="flex flex-col">
        <div className=" flex justify-between px-5 items-center py-2 bg-[#db0034]  ">
          <div>
            <Link to="/">
              <img src={imgLogo} alt="" width="200" />
            </Link>
          </div>
          <div className="w-full">
            <nav >
              <ul className="flex justify-around items-center px-5 py-5 text-white  ">
                <li className="cursor-pointer  hover:text-gray-500">
                  <Link to="/swm">Gestion de Hallazgos</Link>{" "}
                </li>
                <li className="cursor-pointer  hover:text-gray-500">
                  Documentación [Comming Soon]
                </li>
                <li className="cursor-pointer  hover:text-gray-500">
                  Auditorias [Comming Soon]
                </li>
              </ul>
            </nav>
          </div>
          <nav className="w-64">
            <ul className="flex justify-between gap-5 items-center">
              <li className="cursor-pointer  hover:text-gray-500 flex flex-col text-right">
                <span className="text-[#142338]"> {user.login} </span>

                <button className="font-bold" onClick={handleLogOut}>
                  {" "}
                  Cerrar Sesion{" "}
                </button>
              </li>
              <li>
                <div className="bg-[#cddcf7] rounded-full w-12 h-12 flex justify-center items-center cursor-pointer ">
                  {/* <FaUserAlt size="25" /> */}
                  <img src={user.image} alt="" />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
