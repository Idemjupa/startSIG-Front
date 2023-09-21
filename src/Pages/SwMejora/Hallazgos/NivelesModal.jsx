import React, { useEffect, useState, useId } from "react";

const NivelesModal = ({ modal, setModal, idNivel, setIdNivel }) => {
  const [form, setForm] = useState(
    idNivel || {
      id: "",
      nivel: "",
    }
  );
  const newId = useId();
  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setForm({ ...form, [name]: value });
  };

  const handleAddNivel = () => {
    const dataexiste = JSON.parse(localStorage.getItem("nivelesList")) || [];
    let nuevo = [];
    if (form.id === undefined || form.id === "") {
      form.id = newId;
      nuevo = [...dataexiste, form];
    } else {
      console.log("Here", dataexiste);
      nuevo = dataexiste.map((current) => {
        if (form.id !== current.id) return current;
        return form;
      });
    }
    localStorage.setItem("nivelesList", JSON.stringify(nuevo));
    handleLimpiar();
  };

  const handleLimpiar = () => {
    setForm({
      id: "",
      nivel: "",
    });
    setModal(false);
    setIdNivel(0);
  };

  return (
    <div className="flex justify-center items-start overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none bg-[#cddcf7]  ">
      <div className="border rounded-xl max-w-2xl gap-5 max-h-none flex flex-col items-center mx-auto mt-5 px-20 py-5 bg-[#abc] drop-shadow-lg ">
        <h2>NIVELES-EDICION</h2>
        <input
          className="drop-shadow-md p-2 border w-full"
          type="text"
          name="id"
          placeholder="Id"
          value={form.id}
          onChange={handleChange}
          disabled="True"
        />
        <input
          className="drop-shadow-md p-2 border w-full"
          type="text"
          name="nivel"
          placeholder="Nivel"
          value={form.nivel}
          onChange={handleChange}
          required
        />
        <div className="flex gap-5">
          <button
            className="mt-2 bg-[#5e9efc] text-white w-none p-2 drop-shadow-md"
            onClick={handleLimpiar}
          >
            Cancelar
          </button>
          <button
            className="mt-2 bg-[#5e9efc] text-white w-none p-2 drop-shadow-md"
            onClick={handleAddNivel}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NivelesModal;
