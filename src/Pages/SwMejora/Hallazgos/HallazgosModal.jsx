import React, { useEffect, useState, useId } from "react";
import Select from "react-select";

const HallazgosModal = ({ modal, setModal, idHallazgo, setIdHallazgo }) => {
  const today = new Date();
  const [form, setForm] = useState(
    idHallazgo || {
      id: "",
      fecha: today,
      proceso: "",
      nivel: "",
      origen: "",
      criterio: "",
      auditor: "",
      requisito: "",
      descripcion: "",
    }
  );
  const [usuarios, setUsuarios] = useState([]);
  const [value, setValue] = useState(null);
  const newId = useId();
  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setForm({ ...form, [name]: value });
  };

  const handleAddHallazgo = () => {
    const dataexiste = JSON.parse(localStorage.getItem("hallazgosList")) || [];
    let nuevo = [];
    form.fecha = today;
    form.auditorid = value.value;
    form.auditor = value.label;
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
    localStorage.setItem("hallazgosList", JSON.stringify(nuevo));
    handleLimpiar();
  };

  const handleLimpiar = () => {
    setForm({
      id: "",
      fecha: "",
      proceso: "",
      nivel: "",
      origen: "",
      criterio: "",
      auditorid: "",
      auditor: "",
      requisito: "",
      descripcion: "",
    });
    setModal(false);
    setIdHallazgo(0);
  };
  const fetchUsuarios = () => {
    const users = JSON.parse(localStorage.getItem("usuariosList")) || [];
    setUsuarios([]);
    users.map((u) => {
      const objeto = { value: u.id, label: u.apellidos + " " + u.nombres };
      setUsuarios((prev) => [...prev, objeto]);
    });
  };
  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <div className="flex justify-center items-start overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none bg-[#cddcf7]  ">
      <div className="border rounded-xl max-w-2xl gap-5 max-h-none flex flex-col items-center mx-auto mt-5 px-20 py-5 bg-[#abc] drop-shadow-lg ">
        <h2>HALLAZGO-EDICION</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
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
              name="fecha"
              placeholder="Fecha"
              value={form.fecha}
              onChange={handleChange}
              required
            />
            <input
              className="drop-shadow-md p-2 border w-full"
              type="text"
              name="proceso"
              placeholder="Proceso"
              value={form.proceso}
              onChange={handleChange}
            />

            <input
              className="drop-shadow-md p-2 border w-full"
              type="text"
              name="origen"
              placeholder="Origen de Hallazgo"
              value={form.origen}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-4">
            <input
              className="drop-shadow-md p-2 border w-full"
              type="text"
              name="criterio"
              placeholder="Criterio Evaluado"
              value={form.criterio}
              onChange={handleChange}
            />

            <Select
              className="w-full text-left"
              options={usuarios}
              defaultValue={value}
              placeholder="Selecciona Auditor"
              onChange={setValue}
            />
            <input
              className="drop-shadow-md p-2 border w-full"
              type="text"
              name="requisito"
              placeholder="Requisito incumplido"
              value={form.requisito}
              onChange={handleChange}
            />
            <input
              className="drop-shadow-md p-2 border w-full"
              type="text"
              name="descripcion"
              placeholder="Descripcion del Hallazgo"
              value={form.descripcion}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <button
            className="mt-2 bg-[#5e9efc] text-white w-none p-2 drop-shadow-md"
            onClick={handleLimpiar}
          >
            Cancelar
          </button>
          <button
            className="mt-2 bg-[#5e9efc] text-white w-none p-2 drop-shadow-md"
            onClick={handleAddHallazgo}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default HallazgosModal;
