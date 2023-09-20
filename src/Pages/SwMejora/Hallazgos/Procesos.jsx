import React, { useEffect, useState } from "react";
import ProcesosModal from "./ProcesosModal";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

const Procesos = () => {
  const [procesos, setProceso] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [idProceso, setIdProceso] = useState({});

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Codigo",
      selector: (row) => row.codigo,
    },
    {
      name: "Proceso",
      selector: (row) => row.proceso,
    },
    {
      name: "usrControl",
      selector: (row) => row.usrcontrol,
    },
    {
      name: "fyhRegistro",
      selector: (row) => row.fyhregistro,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2">
          <button className="btn btn-edit" onClick={() => handleEdit(row)}>
            Editar
          </button>
          <button className="btn btn-edit" onClick={() => handleDelete(row.id)}>
            Eliminar
          </button>
        </div>
      ),
    },
  ];

  const fetchProcesos = () => {
    const nuevo = JSON.parse(localStorage.getItem("procesosList")) || [];
    setProceso(nuevo);
    setFilter(nuevo);
  };

  useEffect(() => {
    fetchProcesos();
  }, [modal]);

  useEffect(() => {
    if (search !== "") {
      const result = procesos.filter((item) => {
        return item.proceso.toLowerCase().match(search.toLocaleLowerCase());
      });
      setFilter(result);
    } else {
      fetchProcesos();
    }
  }, [search]);

  const handleEdit = (row) => {
    setModal(true);
    setIdProceso(row);
  };

  const handleDelete = (value) => {
    Swal.fire({
      title: "¿Estas Seguro?",
      text: "No podras revertir el cambio una vez ralizdo!",
      icon: "Advertencia",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevo = procesos.filter((row) => row.id !== value);
        setProceso(nuevo);
        setFilter(nuevo);
        localStorage.setItem("procesosList", JSON.stringify(nuevo));

        Swal.fire("Eliminar!", "Tu archivo ha sido eliminaar .", "Eliminado");
      }
    });
  };

  const handleAddProceso = () => {
    setModal(true);
  };

  const tableHeaderStyle = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "14px",
        backgroundColor: "#ccc",
      },
    },
  };

  return (
    <>
      <h2>PROCESOS</h2>
      <div className="flex justify-end">
        <button
          className="mt-2 bg-[#5e9efc] text-white w-none p-2 drop-shadow-md"
          onClick={handleAddProceso}
        >
          Agregar Proceso
        </button>
      </div>
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
            <input
              className="w-25 "
              type="text"
              placeholder="Buscar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
          subHeaderAlign="left"
        />
      </div>
      <div>
        {modal && (
          <ProcesosModal
            modal={modal}
            setModal={setModal}
            idProceso={idProceso}
            setIdProceso={setIdProceso}
          />
        )}
      </div>
    </>
  );
};

export default Procesos;
