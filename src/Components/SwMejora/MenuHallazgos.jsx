import  { useState } from "react";
// import Header from "./HeaderSWM";
import { Link } from "react-router-dom";

const MenuHallazgos = () => {
  const [menuSeleccionado, setMenu] = useState(0);

  const handleMenu = (i) => {
    setMenu(i);
  };

  return (
    <>
      <div className="flex">
        <div className="bg-[white] text-gray py-5 min-h-screen pl-5">
          <h3 className="text-left"> CATALOGOS</h3>
          <ul className="text-left px-5 mb-5 menu">
            <li
              className={
                menuSeleccionado === 1 ?
                "font-bold pb-2 text-green-500 underline underline-offset-1 bg-green-50":""
              }
            >
              {" "}
              <Link onClick={() => handleMenu(1)} to="swm-procesos">
                Procesos
              </Link>{" "}
            </li>
            <li
              className={
                menuSeleccionado === 2 ?
                "font-bold pb-2 text-green-500 underline underline-offset-1 bg-green-50":""
              }
            >
              {" "}
              <Link onClick={() => handleMenu(2)} to="swm-criterios">
                {" "}
                Criterios
              </Link>
            </li>
            <li
              className={
                menuSeleccionado === 3 ?
                "font-bold text-slate-200 underline underline-offset-1":""
              }
            >
              {" "}
              <Link onClick={() => handleMenu(3)} to="swm-origenes">
                {" "}
                Origenes
              </Link>
            </li>
            <li
              className={
                menuSeleccionado === 4 ?
                "font-bold text-slate-200 underline underline-offset-1":""
              }
            >
              {" "}
              <Link onClick={() => handleMenu(4)} to="swm-niveles">
                {" "}
                Nivles de Hallazgos
              </Link>
            </li>
            <li
              className={
                menuSeleccionado === 5 ?
                "font-bold text-slate-200 underline underline-offset-1":""
              }
            >
              {" "}
              <Link onClick={() => handleMenu(5)} to="swm-responsables">
                {" "}
                Responsables
              </Link>
            </li>
          </ul>
          <h3 className="text-left">HALLAZGOS</h3>
          <ul className="text-left px-5 mb-5 menu">
            <li
              className={
                menuSeleccionado === 6 ?
                "font-bold text-slate-200 underline underline-offset-1":""
              }
            >
              {" "}
              <Link onClick={() => handleMenu(6)} to="swm-hallazgos">
                {" "}
                Gestionar{" "}
              </Link>
            </li>
          </ul>
          <h3 className="text-left">PRESUPUESTO</h3>
          <ul className="text-left px-5 menu">
            <li
              className={
                menuSeleccionado === 7 ?
                "font-bold text-slate-200 underline underline-offset-1":""
              }
            >
              {" "}
              <Link onClick={() => handleMenu(7)} to="swm-presupuesto">
                {" "}
                Presupuesto{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuHallazgos;
