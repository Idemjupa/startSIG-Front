import { Link } from "react-router-dom";
import imgLogo from "../../assets/logoStartSIG.png";
import React from "react";

const SolicitaPpto = () => {
  return (
    <section className="border rounded-xl max-w-md	max-h-none flex flex-col items-center mx-auto mt-10 py-9">
      <div className="bg-white ">
        <div>
          <Link to="/home">
            <img src={imgLogo} alt="" width="300" />
          </Link>
        </div>
        <h2 className="mt-5">Solicitud de Presupuesto</h2>
        <div className="flex flex-col gap-5 mt-4">
          <input
            className="drop-shadow-md p-2 border"
            type="text"
            placeholder="Entidad/Empresa"
          />
          <input
            className="drop-shadow-md p-2 border"
            type="text"
            placeholder="Correo Electrónico"
          />
          <input
            className="drop-shadow-md p-2 border"
            type="text"
            placeholder="Celular"
          />
          <input
            className="drop-shadow-md p-2 border"
            type="text"
            placeholder="Número de Trabajadores"
          />

          <textarea
            name="textarea"
            rows="3"
            cols="30"
            className="drop-shadow-md p-2 border"
            placeholder="Describe tu Entidad / Empresa"
          ></textarea>

          <span className="text-xs text-left">Máximo 250 caracteres</span>

          <select className="drop-shadow-md p-2 border">
            <option value="" selected>
              Selecciona Servicio{" "}
            </option>
            <option value="">Consultoria</option>
            <option value="">Auditoria Preparatoria</option>
            <option value="">Software de Mejora Continua</option>
          </select>

          <select className="drop-shadow-md p-2 border">
            <option value="" selected>
              Selecciona Norma{" "}
            </option>
            <option value="">ISO 9001</option>
            <option value="">ISO 14001</option>
            <option value="">ISO 45001</option>
          </select>

          <div className="text-left">
            <input type="checkbox" />
            <span> Acepto la Política de privacidad</span>
          </div>
          <button className="mt-2 bg-[#5e9efc] text-white w-none p-2 drop-shadow-md">
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolicitaPpto;
