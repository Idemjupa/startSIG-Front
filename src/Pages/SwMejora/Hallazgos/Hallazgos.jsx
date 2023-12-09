import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import HallazgosModal from "./HallazgosModal";
import { TiZoomOutline, TiEdit, TiDelete } from "react-icons/ti";
import {
  fetchHallazgo,
  fetchHallazgoDel,
} from "../../../Services/swMejora/Hallazgo";

const Hallazgos = () => {
  const [hallazgos, setHallazgo] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [idHallazgo, setIdHallazgo] = useState({});

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Fecha",
      selector: (row) => row.fechahallazgo,
    },
    {
      name: "ProcesoId",
      selector: (row) => row.procesoId,
      omit: "True",
    },
    {
      name: "Proceso",
      selector: (row) => row.proceso.proceso,
    },
    {
      name: "Nivelid",
      selector: (row) => row.nivelhallazgoId,
      omit: "True",
    },
    {
      name: "Nivel",
      selector: (row) => row.nivelhallazgo.desnivelhallazgo,
    },
    {
      name: "Origenid",
      selector: (row) => row.origenId,
      omit: "True",
    },
    {
      name: "Origen",
      selector: (row) => row.origen.desorigen,
    },
    {
      name: "Criterioid",
      selector: (row) => row.criterioId,
      omit: "True",
    },
    {
      name: "Criterio",
      selector: (row) => row.criterio.descriterio,
    },
    {
      name: "Auditorid",
      selector: (row) => row.usuarioId,
      omit: "True",
    },
    {
      name: "Auditor",
      selector: (row) => row.usuario.apenom,
    },
    {
      name: "Requisito",
      selector: (row) => row.requisito,
    },
    {
      name: "Descripcion",
      selector: (row) => row.descripcion,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2">
          <button className="btn btn-edit" onClick={() => handleEdit(row)}>
            <TiEdit size="30" />
          </button>
          <button className="btn btn-edit" onClick={() => handleDelete(row.id)}>
            <TiDelete size="30" />
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetchHallazgo().then((nuevo) => {
      setHallazgo(nuevo);
      setFilter(nuevo);
    });
  }, [modal]);

  useEffect(() => {
    if (search !== "") {
      const result = hallazgos.filter((item) => {
        return item.descripcion.toLowerCase().match(search.toLocaleLowerCase());
      });
      setFilter(result);
    } else {
      fetchHallazgo().then((nuevo) => {
        setHallazgo(nuevo);
        setFilter(nuevo);
      });
    }
  }, [search]);

  const handleEdit = (row) => {
    setModal(true);
    setIdHallazgo(row);
  };

  const handleDelete = (value) => {
    Swal.fire({
      title: "¿Estas Seguro?",
      text: "No podras revertir el cambio una vez ralizado!",
      icon: "Advertencia",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevo = hallazgos.filter((row) => row.id !== value);
        setHallazgo(nuevo);
        setFilter(nuevo);
        // localStorage.setItem("hallazgosList", JSON.stringify(nuevo));
        const form = { id: value };
        fetchHallazgoDel(form);

        Swal.fire("Eliminar!", "Tu archivo ha sido eliminaar .", "Eliminado");
      }
    });
  };

  const handleAddHallazgo = () => {
    setModal(true);
  };

  const tableHeaderStyle = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "14px",
        backgroundColor: "#fff5ee",
        color: "gray",
      },
    },
  };

  return (
    <>
      <h2>Gestion de Hallazgos</h2>      
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 ml-5">
        <DataTable
          customStyles={tableHeaderStyle}
          columns={columns}
          data={filter}
          pagination
          // selectableRows

          fixedHeader
          selectableRowsHighlight
          highlightOnHover
          // actions={<button onClick={handleCSV}>Exportar a PDF</button>}
          subHeader
          subHeaderComponent={
            <div className="w-full flex justify-center mb-2">
            <button
              className="mt-2 bg-[red] text-white w-none p-2 drop-shadow-md rounded-md"
              onClick={handleAddHallazgo}
            >
              Agregar Hallazgo
            </button>
            <div className=" mr-0 ml-auto relative">
              <input
                type="text"
                className="w-30 border px-10 h-10 rounded-md"
                placeholder="Buscar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <TiZoomOutline className="absolute left-2 top-1.5" size="30" />
            </div>
          </div>
          }
          subHeaderAlign="left"
        />
      </div>
      <div>
        {modal && (
          <HallazgosModal
            className="max-w-fit"
            modal={modal}
            setModal={setModal}
            idHallazgo={idHallazgo}
            setIdHallazgo={setIdHallazgo}
          />
        )}
      </div>
    </>
  );
};

export default Hallazgos;
