import React from "react";
import Header from "./HeaderSWM";
import { Link } from "react-router-dom";


const MenuHallazgos = () => {
  return (
    <>
      
      <div className="flex">
        <div className="bg-[#db392e] text-white py-5 min-h-screen max-w-xs">
          <h3> CATALOGOS</h3>
          <ul className="text-left px-5 mb-5">
            <li> <Link to ="swm-procesos">PROCESOS</Link>  </li>
            <li> <Link to="swm-criterios"> CRITERIOS</Link></li>
            <li> <Link to="swm-origenes"> ORIGENES</Link></li>
            <li> <Link to="swm-niveles"> NIVELES </Link>DE HALLAZAGO</li>
            <li> <Link to="swm-usuarios"> USUARIOS</Link></li>
          </ul>
          <h3>HALLAZGOS</h3>
          <ul className="text-left px-5 mb-5">
            <li>
              GESTIONAR
            </li>
          </ul>
          <h3>REPORTES</h3>
          <ul className="text-left px-5">
            <li>
              Reportar
            </li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default MenuHallazgos;
