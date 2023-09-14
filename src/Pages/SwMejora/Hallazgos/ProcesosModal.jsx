import React from "react";

const ProcesosModal = () => {
  return (
    <div>
      <div className="border rounded-xl max-w-md gap-5 max-h-none flex flex-col items-center mx-auto mt-10 py-9">
        <h2>PROCESOS-EDICION</h2>
        <input
          className="drop-shadow-md p-2 border"
          type="text"
          name="id"
          placeholder="Id"
        />
        <input
          className="drop-shadow-md p-2 border"
          type="text"
          name="codigo"
          placeholder="Código"
        />
        <input
          className="drop-shadow-md p-2 border"
          type="text"
          name="procesos"
          placeholder="Proceso"
        />
        <select className="drop-shadow-md p-2 border" name="" id="">
          <option value="" selected>
            Selecciona un responsble
          </option>
        </select>
        <input className="drop-shadow-md p-2 border" type="checkbox" /> Es
        MacroProceso
        <select className="drop-shadow-md p-2 border" name="" id="">
          <option value="empty" selected>
            Selecciona un Macro Proceso
          </option>
        </select>
      </div>
    </div>
  );
};

export default ProcesosModal;
