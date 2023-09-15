import { Link, useNavigate } from "react-router-dom";
import imgLogo from "../../assets/logoStartSIG.png";
import React, { useState } from "react";
import Swal from "sweetalert2";
import usePresupuesto from "../../Hooks/usePresupuesto";

const SolicitaPpto = () => {
  const { addPresupuesto } = usePresupuesto();
  const [form, setForm] = useState({
    entidad: "",
    email: "",
    celular: "",
    nrotrabajadores: "",
    descripcion: "",
    servicio: "",
    norma: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setForm({ ...form, [name]: value });
  };

  const handleEnviar = (e) => {
    e.preventDefault();
    addPresupuesto(form);    
    Swal.fire("Se enviaron los datos correctamente");
    navigate("/");
  };

  return (
    <section className="border rounded-xl max-w-md	max-h-none flex flex-col items-center mx-auto mt-10 py-9">
      <div className="bg-white ">
        <div>
          <Link to="/">
            <img src={imgLogo} alt="" width="300" />
          </Link>
        </div>
        <h2 className="mt-5">Solicitud de Presupuesto</h2>
        <div className="flex flex-col gap-5 mt-4">
          <input
            className="drop-shadow-md p-2 border"
            type="text"
            placeholder="Entidad/Empresa"
            name="entidad"
            value={form.entidad}
            onChange={handleChange}
          />
          <input
            className="drop-shadow-md p-2 border"
            type="text"
            placeholder="Correo Electrónico"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            className="drop-shadow-md p-2 border"
            type="text"
            placeholder="Celular"
            name="celular"
            value={form.celular}
            onChange={handleChange}
          />
          <input
            className="drop-shadow-md p-2 border"
            type="text"
            placeholder="Número de Trabajadores"
            name="nrotrabajadores"
            value={form.nrotrabajadores}
            onChange={handleChange}
          />

          <textarea
            name="descripcion"
            rows="3"
            cols="30"
            className="drop-shadow-md p-2 border"
            placeholder="Describe tu Entidad / Empresa"
            value={form.descripcion}
            onChange={handleChange}
          ></textarea>

          <span className="text-xs text-left">Máximo 250 caracteres</span>

          <select
            className="drop-shadow-md p-2 border"
            name="servicio"
            onChange={handleChange}
          >
            <option value="" selected>
              Selecciona Servicio{" "}
            </option>
            <option value="consultoria">Consultoria</option>
            <option value="auditoria">Auditoria Preparatoria</option>
            <option value="mejora">Software de Mejora Continua</option>
          </select>

          <select
            className="drop-shadow-md p-2 border"
            name="norma"
            onChange={handleChange}
          >
            <option value="" selected>
              Selecciona Norma{" "}
            </option>
            <option value="iso9001">ISO 9001</option>
            <option value="iso14001">ISO 14001</option>
            <option value="is45001">ISO 45001</option>
          </select>

          <div className="text-left">
            <input type="checkbox" />
            <span> Acepto la Política de privacidad</span>
          </div>
          <button
            className="mt-2 bg-[#5e9efc] text-white w-none p-2 drop-shadow-md"
            onClick={handleEnviar}
          >
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolicitaPpto;
