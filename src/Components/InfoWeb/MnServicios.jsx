import React from "react";
import { Link } from "react-router-dom";

const MnServicios = ({servicios, sestServicios}) => {
  return (
    <div className="absolute bg-[#142338] z-10 w-36 flex flex-col items-start gap-1 pl-5 pb-2" onMouseLeave={()=> {sestServicios(false)}}>
      <br />
      
      <Link to="/serv-consultoria"><span className="cursor-pointer  hover:text-gray-500">Consultoria</span></Link>
      <Link to="/serv-auditoria"><span className="cursor-pointer  hover:text-gray-500">Auditoria</span></Link>
      <Link to="/serv-swmejora"><span className="cursor-pointer  hover:text-gray-500">Sw-Mejora</span></Link>
        
    </div>
  );
};

export default MnServicios;
