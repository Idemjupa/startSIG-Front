import React from "react";
import Header from "./HeaderSWM";

const MenuHallazgos = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="bg-[#db392e] text-white py-5 min-h-screen max-w-xs">
          <h3>CATALOGOS</h3>
          <ul className="text-left px-5 mb-5">
            <li>PROCESOS</li>
            <li>CRITERIOS</li>
            <li>ORIGENES</li>
            <li>NIVELES DE HALLAZAGO</li>
            <li>USUARIOS</li>
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
        <div className="bg-[#5e9efc] w-full pt-2">
            <h2>Aqui va el Formulario</h2>
        </div>
      </div>
    </>
  );
};

export default MenuHallazgos;
