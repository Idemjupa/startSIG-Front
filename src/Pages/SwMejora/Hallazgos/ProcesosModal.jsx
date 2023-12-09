import { useEffect, useState, useId } from "react";
import Select from "react-select";
import { fetchProcesoSave } from "../../../Services/swMejora/Proceso";
import { fetchUsuario } from "../../../Services/swMejora/Usuario";
const ProcesosModal = ({ modal, setModal, idProceso, setIdProceso }) => {
  const today = new Date();
  const [form, setForm] = useState(
    idProceso || {
      id: "",
      codigo: "",
      proceso: "",
      responsable: "",
      usuarioId: "",
      flgmacroproceso: false,
      macroproceso: "",
      fyhregistro: today,
    }
  );
  const [usuarios, setUsuarios] = useState([]);
  const [value, setValue] = useState(form.usuarioId ? {value:form.usuarioId , label:form.usuario.apenom } : null);
  const newId = useId();
  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setForm({ ...form, [name]: value });
  };

  const handleAddProceso = () => {
    const dataexiste = JSON.parse(localStorage.getItem("procesosList")) || [];
    let nuevo = [];
    form.fyhregistro = today;
    form.usuarioId = value.value;
    form.responsable = value.label;

    if (form.id === undefined || form.id === "") {
      form.id = newId;
      nuevo = [...dataexiste, form];
      fetchProcesoSave(form, "POST");
    } else {
      nuevo = dataexiste.map((current) => {
        if (form.id !== current.id) return current;
        return form;
      });
      fetchProcesoSave(form, "PUT");
    }
    localStorage.setItem("procesosList", JSON.stringify(nuevo));
    handleLimpiar();
  };

  const handleLimpiar = () => {
    setForm({
      id: "",
      codigo: "",
      proceso: "",
      responsable: "",
      usuarioId: "",
      flgmacroproceso: false,
      macroproceso: "",
    });
    setModal(false);
    setIdProceso(0);
  };
  const fetchUsuarios = () => {
    // const users = JSON.parse(localStorage.getItem("usuariosList")) || [];
    fetchUsuario().then((users) => {
      setUsuarios([]);
      users.map((u) => {
        const objeto = { value: u.id, label: u.apenom };
        setUsuarios((prev) => [...prev, objeto]);
      });
    });    
  };
  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <div className="flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none bg-[white]">
      <div className="max-w-2xl gap-5 max-h-none flex flex-col items-center  mt-5 px-20 py-5 bg-[white]">
        <h2>PROCESOS-EDICION</h2>
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
          name="codigo"
          placeholder="Código"
          value={form.codigo}
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
        <Select
          className="w-full text-left"
          options={usuarios}
          defaultValue={value}
          placeholder="Selecciona un Responsable"
          onChange={setValue}
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
            onClick={handleAddProceso}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcesosModal;
