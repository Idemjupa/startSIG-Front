import React, { useState } from "react";
import Header from "./HeaderSWM";
import { Link } from "react-router-dom";


const MenuHallazgos = () => {
  const [menuSeleccionado, setMenu]=useState(1)

  const handleMenu =(i)=>{
    setMenu(i)
  }
  
  return (
    <>
      
      <div className="flex">
        <div className="bg-[#db392e] text-white py-5 min-h-screen max-w-xs">
          <h3> CATALOGOS</h3>
          <ul className="text-left px-5 mb-5">
            <li className={menuSeleccionado===1 && "font-bold text-slate-200 underline underline-offset-1"} > <Link onClick={()=>handleMenu(1)} to ="swm-procesos">PROCESOS</Link>  </li>
            <li className={menuSeleccionado===2 && "font-bold text-slate-200 underline underline-offset-1"} > <Link onClick={()=>handleMenu(2)} to="swm-criterios"> CRITERIOS</Link></li>
            <li className={menuSeleccionado===3 && "font-bold text-slate-200 underline underline-offset-1"} > <Link onClick={()=>handleMenu(3)} to="swm-origenes"> ORIGENES</Link></li>
            <li className={menuSeleccionado===4 && "font-bold text-slate-200 underline underline-offset-1"} > <Link onClick={()=>handleMenu(4)} to="swm-niveles"> NIVELES DE HALLAZAGO</Link></li>
            <li className={menuSeleccionado===5 && "font-bold text-slate-200 underline underline-offset-1"} > <Link onClick={()=>handleMenu(5)} to="swm-usuarios"> RESPONSABLES</Link></li>
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
