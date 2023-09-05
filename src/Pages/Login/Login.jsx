import { Link } from "react-router-dom";
import imgLogo from "../../assets/logoStartSIG.png";
import React from "react";

const Login = () => {
  return (
    <section className="border rounded-xl max-w-sm	 max-h-none flex flex-col items-center mx-auto mt-20 py-9">
      <div className="bg-white ">
        <div>
          <Link to="/home">
          <img src={imgLogo} alt="" width="300"/>
          </Link>
        </div>
        <h2 className="mt-5">Acceder</h2>
        <div className="flex flex-col gap-5 mt-4">
          <input className="drop-shadow-md p-2 border" type="text" placeholder="Correo Electronico" />
          <input className="drop-shadow-md p-2 border" type="password" placeholder="Contraseña"/>
          <span className="text-xs text-left mt-1">¿Ovidaste tu Contraseña?</span>
          <button className="mt-2 bg-[#5e9efc] text-white w-none p-2 drop-shadow-md">Iniciar</button>
        </div>        
        <h5 className="text-xs text-left mt-5"><Link to="/presupuesto"> Solicitar Software de mejora Continua</Link></h5>
      </div>      
    </section>
  );
};

export default Login;
