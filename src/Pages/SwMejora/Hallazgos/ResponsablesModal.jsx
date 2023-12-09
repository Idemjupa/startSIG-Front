import  { useState, useId } from "react";
import { fetchUsuarioSave } from "../../../Services/swMejora/Usuario";

export const ResponsableModal = ({ modal, setModal, idUsuario, setIdUsuario }) => {
  const [form, setForm] = useState(
    idUsuario || {
      id: "",
      apenom: "",
      login: "", 
      password :""     
    }
  );
  const newId = useId();
  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setForm({ ...form, [name]: value });
  };

  const handleAddUsuario = () => {
    const dataexiste = JSON.parse(localStorage.getItem("usuariosList")) || [];
    form.password=(form.password==undefined)?"":form.password
    console.log(form)
    let nuevo = [];
    if (form.id === undefined || form.id === "") {
      form.id = newId;
      nuevo = [...dataexiste, form];
      fetchUsuarioSave(form, "POST")      
    } else {      
      nuevo = dataexiste.map((current) => {
        if (form.id !== current.id) return current;
        return form;
      });
      fetchUsuarioSave(form, "PUT")      
    }
    localStorage.setItem("usuariosList", JSON.stringify(nuevo));
    
    handleLimpiar();
  };

  const handleLimpiar = () => {
    setForm({
      id: "",
      apenom: "",
      login: "", 
      password:""     
    });
    setModal(false);
    setIdUsuario(0);
  };

  return (
    <div className="flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none bg-[white]">
      <div className="max-w-2xl gap-5 max-h-none flex flex-col items-center  mt-5 px-20 py-5 bg-[white]">
        <h2>RESPONSABLES-EDICION</h2>
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
          name="apenom"
          placeholder="Apellidos y Nombres"
          value={form.apenom}
          onChange={handleChange}
          required
        />
        <input
          className="drop-shadow-md p-2 border w-full"
          type="text"
          name="login"
          placeholder="Nombres"
          value={form.login}
          onChange={handleChange}
          required
        />
        <input
          className="drop-shadow-md p-2 border w-full"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
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
            onClick={handleAddUsuario}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};
