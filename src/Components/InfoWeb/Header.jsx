import imgLogo from "../../assets/logoStartSIG.png";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col">
      <div className=" flex justify-between px-5 items-center py-2">
        <div>
          <img src={imgLogo} alt="" width="200" />
        </div>
        <nav>
          <ul className="flex justify between gap-5 items-center">
            <li className="cursor-pointer  hover:text-gray-500"><Link to="/login"> Ingresar </Link> </li>
            <li className="cursor-pointer  hover:text-gray-500"> <Link to="/presupuesto"> Presupuesto </Link> </li>
            <li className="cursor-pointer  hover:text-gray-500">FAQ</li>
            <li>
              <div className="bg-[#cddcf7] rounded-full w-12 h-12 flex justify-center items-center cursor-pointer ">
                <FaUserAlt size="25"/>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div className="bg-[#142338]  ">
        <nav >
          <ul className="flex justify-around items-center px-5 py-5 text-white">
            <li className="cursor-pointer  hover:text-gray-500"><Link to="/">Inicio</Link> </li>
            <li className="cursor-pointer  hover:text-gray-500">Nosotros</li>
            <li className="cursor-pointer  hover:text-gray-500"><Link to="/serv-consultoria"> Servicios</Link></li>
            <li className="cursor-pointer  hover:text-gray-500">Certificación</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
