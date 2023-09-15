import React, { useState } from "react";

const ProcesosModal = ({ modal, setModal }) => {
  const [form, setForm] = useState({
    id: "",
    codigo: "",
    proceso: "",
    responsable: "",
    flgmacroproceso: false,
    macroproceso: "",
  });
  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setForm({ ...form, [name]: value });
  };
  const handleAddProceso = () => {
    const dataexiste = JSON.parse(localStorage.getItem("procesos")) || [];
    const nuevo = [...dataexiste, form];
    localStorage.setItem("procesos", JSON.stringify(nuevo));
    handleLimpiar();
  };

  const handleLimpiar = () => {
    setForm({
      id: "",
      codigo: "",
      proceso: "",
      responsable: "",
      flgmacroproceso: false,
      macroproceso: "",
    });
    setModal(false);
  };
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
      <div className="border rounded-xl max-w-2xl gap-5 max-h-none flex flex-col items-center mx-auto mt-10 px-20 py-5 bg-[#abc] drop-shadow-lg">
        <h2>PROCESOS-EDICION</h2>
        <input
          className="drop-shadow-md p-2 border"
          type="text"
          name="id"
          placeholder="Id"
          value={form.id}
          onChange={handleChange}
        />
        <input
          className="drop-shadow-md p-2 border"
          type="text"
          name="codigo"
          placeholder="Código"
          value={form.codigo}
          onChange={handleChange}
        />
        <input
          className="drop-shadow-md p-2 border"
          type="text"
          name="proceso"
          placeholder="Proceso"
          value={form.proceso}
          onChange={handleChange}
        />
        <select
          className="drop-shadow-md p-2 border"
          name="responsable"
          id=""
          value={form.responsable}
          onChange={handleChange}
        >
          <option value="vacio" selected>
            Selecciona un responsble
          </option>
          <option value="jc">Juan Cruz</option>
        </select>
        <div>
          <input
            className="drop-shadow-md p-2 border"
            type="checkbox"
            name="flgmacroproceso"
            value={form.flgmacroproceso}
            onChange={handleChange}
          />{" "}
          Es MacroProceso
        </div>
        <select
          className="drop-shadow-md p-2 border"
          name="macroproceso"
          id=""
          value={form.macroproceso}
          onChange={handleChange}
        >
          <option value="empty" selected>
            Selecciona un Macro Proceso
          </option>
          <option value="pe01">PE 01 GC FACTURACION</option>
        </select>
        <div className="flex gap-5">
          <button
            className="mt-2 bg-[#5e9efc] text-white w-none p-2 drop-shadow-md"
            onClick={handleLimpiar}
          >
            Cancelar
          </button>
          <button
            className="mt-2 bg-[#5e9efc] text-white w-none p-2 drop-shadow-md"
            onClick={handleAddProceso}
          >
            Guardar
          </button>
        </div>
      </div>
      /
    </div>
  );
};

export default ProcesosModal;
