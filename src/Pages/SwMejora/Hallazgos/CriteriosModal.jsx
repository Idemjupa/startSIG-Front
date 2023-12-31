import { useState, useEffect, useId } from "react";
import { fetchCriterioSave } from "../../../Services/swMejora/Criterio";

const CriteriosModal = ({ modal, setModal, idCriterio, setIdCriterio }) => {
  const [form, setForm] = useState(
    idCriterio || {
      id: "",
      descriterio: "",
    }
  );
  const newId = useId();
  const handleChange = (e) => { 
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setForm({ ...form, [name]: value });
  };

  const handleAddCriterio = async () => {
    const dataexiste = JSON.parse(localStorage.getItem("criteriosList")) || [];
    let nuevo = [];
    if (form.id === undefined || form.id === "") {
      form.id = newId;
      nuevo = [...dataexiste, form];      
      fetchCriterioSave(form, "POST")      
    } else {      
      nuevo = dataexiste.map((current) => {
        if (form.id !== current.id) return current;
        return form;
      });
      fetchCriterioSave(form, "PUT")
    }

    localStorage.setItem("criteriosList", JSON.stringify(nuevo));

    handleLimpiar();
  };

  const handleLimpiar = () => {
    setForm({
      id: "",
      descriterio: "",
    });
    setModal(false);
    setIdCriterio(0);
  };

  return (
    <div className="flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none bg-[white]">
      <div className="max-w-2xl gap-5 max-h-none flex flex-col items-center  mt-5 px-20 py-5 bg-[white]">
        <h2>CRITERIOS-EDICION</h2>

        <input
          className=" drop-shadow-md p-2 border w-full rounded-md"
          type="text"
          name="id"
          placeholder="Id"
          value={form.id}
          onChange={handleChange}
          required
          disabled="True"
        />
        <div className="jStyle-frm-group">
          <input
            // className="jS-input drop-shadow-md p-2 border w-full rounded-md"
            type="text"
            name="descriterio"
            placeholder="Criterio"
            value={form.descriterio}
            onChange={handleChange}
            required
          />
          <label>Criterio</label>
        </div>

        <div className="flex justify-end gap-5 w-full">
          <button
            className="mt-2 bg-[red] text-white w-none p-2 drop-shadow-md  rounded-md"
            onClick={handleLimpiar}
          >
            Cancelar
          </button>
          <button
            className="mt-2 bg-[red] text-white w-none p-2 drop-shadow-md rounded-md"
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
