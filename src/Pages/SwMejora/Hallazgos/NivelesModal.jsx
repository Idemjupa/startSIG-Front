import {useState, useId } from "react";
import { fetchCriterioSave } from "../../../Services/swMejora/Criterio";
import { fetchNivelHallazgoSave } from "../../../Services/swMejora/NivelHallazgo";

const NivelesModal = ({ modal, setModal, idNivel, setIdNivel }) => {
  const [form, setForm] = useState(
    idNivel || {
      id: "",
      desnivelhallazgo: "",
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
      fetchNivelHallazgoSave(form, "POST")      
    } else {
      console.log("Here", dataexiste);
      nuevo = dataexiste.map((current) => {
        if (form.id !== current.id) return current;
        return form;
      });
      fetchNivelHallazgoSave(form, "PUT")      
    }
    localStorage.setItem("nivelesList", JSON.stringify(nuevo));
    handleLimpiar();
  };

  const handleLimpiar = () => {
    setForm({
      id: "",
      desnivelhallazgo: "",
    });
    setModal(false);
    setIdNivel(0);
  };

  return (
    <div className="flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none bg-[white]">
      <div className="max-w-2xl gap-5 max-h-none flex flex-col items-center  mt-5 px-20 py-5 bg-[white]">
        <h2>NIVELES-EDICION</h2>
        <input
          className="drop-shadow-md p-2 border w-full rounded-md"
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
          name="desnivelhallazgo"
          placeholder="Nivel"
          value={form.desnivelhallazgo}
          onChange={handleChange}
          required
        />
        <div className="flex gap-5">
          <button
            className="mt-2 bg-[red] text-white w-none p-2 drop-shadow-md  rounded-md"
            onClick={handleLimpiar}
          >
            Cancelar
          </button>
          <button
            className="mt-2 bg-[red] text-white w-none p-2 drop-shadow-md rounded-md"
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
