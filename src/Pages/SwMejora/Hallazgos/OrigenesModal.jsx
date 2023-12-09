import { useState, useId } from "react";
import { fetchOrigenSave } from "../../../Services/swMejora/Origen";

const OrigenesModal = ({ modal, setModal, idOrigen, setIdOrigen }) => {
  const [form, setForm] = useState(
    idOrigen || {
      id: "",
      desorigen: "",
    }
  );
  const newId = useId();
  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setForm({ ...form, [name]: value });
  };

  const handleAddOrigen = () => {
    const dataexiste = JSON.parse(localStorage.getItem("origenesList")) || [];
    let nuevo = [];
    if (form.id === undefined || form.id === "") {
      form.id = newId;
      nuevo = [...dataexiste, form];
      fetchOrigenSave(form, "POST")      
    } else {
      console.log("Here", dataexiste);
      nuevo = dataexiste.map((current) => {
        if (form.id !== current.id) return current;
        return form;
      });
      fetchOrigenSave(form, "PUT")
    }
    localStorage.setItem("origenesList", JSON.stringify(nuevo));
    handleLimpiar();
  };

  const handleLimpiar = () => {
    setForm({
      id: "",
      desorigen: "",
    });
    setModal(false);
    setIdOrigen(0);
  };

  return (
    <div className="flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none bg-[white]">
      <div className="max-w-2xl gap-5 max-h-none flex flex-col items-center  mt-5 px-20 py-5 bg-[white]  ">
        <h2>ORIGENES-EDICION</h2>
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
          name="desorigen"
          placeholder="Origen"
          value={form.desorigen}
          onChange={handleChange}
          required
        />
        <div className="flex justify-end gap-5 w-full">
          <button
            className="mt-2 bg-[red] text-white w-none p-2 drop-shadow-md  rounded-md"
            onClick={handleLimpiar}
          >
            Cancelar
          </button>
          <button
            className="mt-2 bg-[red] text-white w-none p-2 drop-shadow-md rounded-md"
            onClick={handleAddOrigen}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrigenesModal;
