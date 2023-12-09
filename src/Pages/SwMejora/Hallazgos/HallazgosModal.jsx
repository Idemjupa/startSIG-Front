import { useEffect, useState, useId } from "react";
import Select from "react-select";
import { fetchHallazgoSave } from "../../../Services/swMejora/Hallazgo";
import { fetchProceso } from "../../../Services/swMejora/Proceso";
import { fetchCriterio } from "../../../Services/swMejora/Criterio";
import { fetchOrigen } from "../../../Services/swMejora/Origen";
import { fetchNivelHallazgo } from "../../../Services/swMejora/NivelHallazgo";
import { fetchUsuario } from "../../../Services/swMejora/Usuario";

const HallazgosModal = ({ modal, setModal, idHallazgo, setIdHallazgo }) => {
  const today = new Date();
  const [form, setForm] = useState(
    idHallazgo || {
      id: "",
      fechahallazgo: today.toJSON().slice(0, 10),
      procesoId: "",
      proceso: "",
      nivelhallazgoId: "",
      nivelhallazgo: "",
      origenId: "",
      origen: "",
      criterioId: "",
      criterio: "",
      usuarioId: "",
      usuario: "",
      requisito: "",
      descripcion: "",
    }
  );
  const [procesos, setProcesos] = useState([]);
  const [niveles, setNiveles] = useState([]);
  const [origenes, setOrigenes] = useState([]);
  const [criterios, setCriterios] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const [valProceso, setValproceso] = useState(
    form.procesoId ? { value: form.procesoId, label: form.proceso.proceso } : null
  );
  const [valNivel, setValnivel] = useState(
    form.nivelhallazgoId ? { value: form.nivelId, label: form.nivelhallazgo.desnivelhallazgo } : null
  );
  const [valOrigen, setValorigen] = useState(
    form.origenId ? { value: form.origenId, label: form.origen.desorigen } : null
  );
  const [valCriterio, setValcriterio] = useState(
    form.criterioId ? { value: form.criterioId, label: form.criterio.descriterio } : null
  );
  const [valAuditor, setValauditor] = useState(
    form.usuarioId ? { value: form.usuarioId, label: form.usuario.apenom } : null
  );

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
    form.procesoId = valProceso.value;
    form.proceso = valProceso.label;
    form.nivelhallazgoId = valNivel.value;
    // form.nivelhallazgo.desnivelhallazgo = valNivel.label;
    form.origenId = valOrigen.value;
    // form.origen.desorigen = valOrigen.label;
    form.criterioId = valCriterio.value;
    // form.criterio.descriterio = valCriterio.label;
    form.usuarioId = valAuditor.value;
    // form.usuario.apenom = valAuditor.label;
    console.log(form);
    if (form.id === undefined || form.id === "") {
      form.id = newId;
      nuevo = [...dataexiste, form];
      fetchHallazgoSave(form, "POST");
    } else {
      console.log("Here", dataexiste);
      nuevo = dataexiste.map((current) => {
        if (form.id !== current.id) return current;
        return form;
      });
      
      fetchHallazgoSave(form, "PUT");
    }
    localStorage.setItem("hallazgosList", JSON.stringify(nuevo));
    handleLimpiar();
  };

  const handleLimpiar = () => {
    setForm({
      id: "",
      fechahallazgo: "",
      procesoId: "",
      proceso: {},
      nivelhallazgoId: "",
      nivelhallazgo: {},
      origenId: "",
      origen: {},
      criterioId: "",
      criterio: {},
      usuarioId: "",
      usuario: {},
      requisito: "",
      descripcion: "",
    });
    setModal(false);
    setIdHallazgo(0);
  };
  const fetchProcesos = () => {
    // const data = JSON.parse(localStorage.getItem("procesosList")) || [];
    fetchProceso().then((data) => {
      setProcesos([]);
      data.map((d) => {
        const objeto = { value: d.id, label: d.proceso };
        setProcesos((prev) => [...prev, objeto]);
      });
    });
  };
  const fetchNiveles = () => {
    // const data = JSON.parse(localStorage.getItem("nivelesList")) || [];
    fetchNivelHallazgo().then((data) => {
      setNiveles([]);
      data.map((d) => {
        const objeto = { value: d.id, label: d.desnivelhallazgo };
        setNiveles((prev) => [...prev, objeto]);
      });
    });
  };
  const fetchOrigenes = () => {
    // const data = JSON.parse(localStorage.getItem("origenesList")) || [];
    fetchOrigen().then((data) => {
      setOrigenes([]);
      data.map((d) => {
        const objeto = { value: d.id, label: d.desorigen };
        setOrigenes((prev) => [...prev, objeto]);
      });
    });
  };

  const fetchCriterios = () => {
    // const data = JSON.parse(localStorage.getItem("criteriosList")) || [];
    fetchCriterio().then((data) => {
      setCriterios([]);
      data.map((d) => {
        const objeto = { value: d.id, label: d.descriterio };
        setCriterios((prev) => [...prev, objeto]);
      });
    });
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
    fetchProcesos();
    fetchNiveles();
    fetchOrigenes();
    fetchCriterios();
    fetchUsuarios();
  }, []);

  return (
    <div className="flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none bg-[white]">
      <div className="max-w-2xl gap-5 max-h-none flex flex-col items-center  mt-5 px-20 py-5 bg-[white]">
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
              name="fechahallazgo"
              placeholder="Fecha"
              value={form.fechahallazgo}
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
            className="mt-2 bg-[red] text-white w-none p-2 drop-shadow-md  rounded-md"
            onClick={handleLimpiar}
          >
            Cancelar
          </button>
          <button
            className="mt-2 bg-[red] text-white w-none p-2 drop-shadow-md rounded-md"
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
