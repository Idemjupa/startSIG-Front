import { useEffect, useState, useId } from "react";
import Select from "react-select";

const HallazgosModal = ({ modal, setModal, idHallazgo, setIdHallazgo }) => {
  const today = new Date();
  const [form, setForm] = useState(
    idHallazgo || {
      id: "",
      fecha: today.toJSON().slice(0,10),
      procesoid: "",
      proceso: "",
      nivelid: "",
      nivel: "",
      origenid: "",
      origen: "",
      criterioid: "",
      criterio: "",
      auditorid: "",
      auditor: "",
      requisito: "",
      descripcion: "",
    }
  );
  const [procesos, setProcesos] = useState([]);
  const [niveles, setNiveles] = useState([]);
  const [origenes, setOrigenes] = useState([]);
  const [criterios, setCriterios] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const [valProceso, setValproceso] = useState(form.procesoid ? {value:form.procesoid , label:form.proceso } : null);
  const [valNivel, setValnivel] = useState(form.nivelid ? {value:form.nivelid , label:form.nivel } : null);
  const [valOrigen, setValorigen] = useState(form.origenid ? {value:form.origenid , label:form.origen } : null);
  const [valCriterio, setValcriterio] = useState(form.criterioid ? {value:form.criterioid , label:form.criterio } : null);
  const [valAuditor, setValauditor] = useState(form.auditorid ? {value:form.auditorid , label:form.auditor } : null);

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
    form.procesoid = valProceso.value;
    form.proceso = valProceso.label;
    form.nivelid = valNivel.value;
    form.nivel = valNivel.label;
    form.origenid = valOrigen.value;
    form.origen = valOrigen.label;
    form.criterioid = valCriterio.value;
    form.criterio = valCriterio.label;
    form.auditorid = valAuditor.value;
    form.auditor = valAuditor.label;

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
      procesoid: "",
      proceso: "",
      nivelid: "",
      nivel: "",
      origenid: "",
      origen: "",
      criterioid: "",
      criterio: "",
      auditorid: "",
      auditor: "",
      requisito: "",
      descripcion: "",
    });
    setModal(false);
    setIdHallazgo(0);
  };
  const fetchProcesos = () => {
    const data = JSON.parse(localStorage.getItem("procesosList")) || [];
    setProcesos([]);
    data.map((d) => {
      const objeto = { value: d.id, label: d.proceso };
      setProcesos((prev) => [...prev, objeto]);   
    });   

  };
  const fetchNiveles = () => {
    const data = JSON.parse(localStorage.getItem("nivelesList")) || [];
    setNiveles([]);
    data.map((d) => {
      const objeto = { value: d.id, label: d.nivel };
      setNiveles((prev) => [...prev, objeto]);
    });
  };
  const fetchOrigenes = () => {
    const data = JSON.parse(localStorage.getItem("origenesList")) || [];
    setOrigenes([]);
    data.map((d) => {
      const objeto = { value: d.id, label: d.origen };
      setOrigenes((prev) => [...prev, objeto]);
    });
  };
  const fetchCriterios = () => {
    const data = JSON.parse(localStorage.getItem("criteriosList")) || [];
    setCriterios([]);
    data.map((d) => {
      const objeto = { value: d.id, label: d.criterio };
      setCriterios((prev) => [...prev, objeto]);
    });
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
    fetchProcesos();
    fetchNiveles();
    fetchOrigenes();
    fetchCriterios();
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
              type="date"
              name="fecha"
              placeholder="Fecha"
              value={form.fecha}
              onChange={handleChange}
              required
            />
            <Select
              className="w-full text-left"
              options={procesos}
              defaultValue={valProceso}
              placeholder="Selecciona Proceso"
              onChange={setValproceso}
            />

            <Select
              className="w-full text-left"
              options={origenes}
              defaultValue={valOrigen}
              placeholder="Selecciona Origen"
              onChange={setValorigen}
            />
            <Select
              className="w-full text-left"
              options={niveles}
              defaultValue={valNivel}
              placeholder="Selecciona Nivel"
              onChange={setValnivel}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Select
              className="w-full text-left"
              options={criterios}
              defaultValue={valCriterio}
              placeholder="Selecciona Criterio"
              onChange={setValcriterio}
            />

            <Select
              className="w-full text-left"
              options={usuarios}
              defaultValue={valAuditor}
              placeholder="Selecciona Auditor"
              onChange={setValauditor}
            />
            <input
              className="drop-shadow-md p-2 border w-full"
              type="text"
              name="requisito"
              placeholder="Requisito incumplido"
              value={form.requisito}
              onChange={handleChange}
            />
            {/* <input
              className="drop-shadow-md p-2 border w-full"
              type="text"
              name="descripcion"
              placeholder="Descripcion del Hallazgo"
              value={form.descripcion}
              onChange={handleChange}
            /> */}

            <textarea
              name="descripcion"
              rows="3"
              cols="30"
              className="drop-shadow-md p-2 border"
              placeholder="Descripción el Hallazgo"
              value={form.descripcion}
              onChange={handleChange}
            ></textarea>
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
