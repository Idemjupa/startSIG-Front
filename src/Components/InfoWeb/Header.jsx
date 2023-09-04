import imgLogo from "../../assets/sig.png";
import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-780 flex flex-col">
      <div className="bg-[#ccf7f5] flex justify-between px-5 items-center">
        <div>
          <img src={imgLogo} alt="" className="w-10" />
        </div>
        <nav>
          <ul className="flex justify between gap-5 items-center">
            <li className="cursor-pointer  hover:text-gray-500">Ingresar</li>
            <li className="cursor-pointer  hover:text-gray-500"> Contacto</li>
            <li className="cursor-pointer  hover:text-gray-500">FAQ</li>
            <li>
              <div className="bg-[#cddcf7] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer ">
                <FaUserAlt />
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div className="bg-[#142338]  ">
        <nav >
          <ul className="flex justify-around items-center px-5 py-5 text-white">
            <li className="cursor-pointer  hover:text-gray-500">Inicio</li>
            <li className="cursor-pointer  hover:text-gray-500">Nosotros</li>
            <li className="cursor-pointer  hover:text-gray-500">Servicios</li>
            <li className="cursor-pointer  hover:text-gray-500">Certificación</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
