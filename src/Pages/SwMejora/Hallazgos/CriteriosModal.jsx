import { useState, useEffect, useId } from "react";

const CriteriosModal = ({modal, setModal, idCriterio, setIdCriterio}) => {
  const [form, setForm] = useState(
    idCriterio || {
      id: "",
      criterio: "",
    }
  );
  const newId = useId();
  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setForm({ ...form, [name]: value });
  };

  const handleAddCriterio = () => {
    const dataexiste = JSON.parse(localStorage.getItem("criteriosList")) || [];
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
    localStorage.setItem("criteriosList", JSON.stringify(nuevo));
    handleLimpiar();
  };

  const handleLimpiar = () => {
    setForm({
      id: "",
      criterio: "",
    });
    setModal(false);
    setIdCriterio(0);
  };

  return (
    <div className="flex justify-center items-start overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none bg-[#cddcf7]  ">
      <div className="border rounded-xl max-w-2xl gap-5 max-h-none flex flex-col items-center mx-auto mt-5 px-20 py-5 bg-[#abc] drop-shadow-lg ">
        <h2>PROCESOS-EDICION</h2>
        <input
          className="drop-shadow-md p-2 border w-full"
          type="text"
          name="id"
          placeholder="Id"
          value={form.id}
          onChange={handleChange}
          required
          disabled="True"
        />
        <input
          className="drop-shadow-md p-2 border w-full"
          type="text"
          name="criterio"
          placeholder="Criterio"
          value={form.criterio}
          onChange={handleChange}
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
            onClick={handleAddCriterio}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CriteriosModal;
