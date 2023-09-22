import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import HallazgosModal from "./HallazgosModal";

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
      selector: (row) => row.fecha,
    },
    {
      name: "Proceso",
      selector: (row) => row.proceso,
    },
    {
      name: "Nivel",
      selector: (row) => row.nivel,
    },
    {
      name: "Origen",
      selector: (row) => row.origen,
    },
    {
      name: "Criterio",
      selector: (row) => row.criterio,
    },
    {
      name: "Auditor",
      selector: (row) => row.auditor,
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
            Editar
          </button>
          <button className="btn btn-edit" onClick={() => handleDelete(row.id)}>
            Eliminar
          </button>
        </div>
      ),
    },
  ];

  const fetchHallazgos = () => {
    const nuevo = JSON.parse(localStorage.getItem("hallazgosList")) || [];
    setHallazgo(nuevo);
    setFilter(nuevo);
  };

  useEffect(() => {
    fetchHallazgos();
  }, [modal]);

  useEffect(() => {
    if (search !== "") {
      const result = hallazgos.filter((item) => {
        return item.descripcion.toLowerCase().match(search.toLocaleLowerCase());
      });
      setFilter(result);
    } else {
      fetchHallazgos();
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
        localStorage.setItem("hallazgosList", JSON.stringify(nuevo));

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
        backgroundColor: "#ccc",
      },
    },
  };

  return (
    <>
      <h2>Gestion de Hallazgos</h2>
      <div className="flex justify-end">
        <button
          className="mt-2 bg-[#5e9efc] text-white w-none p-2 drop-shadow-md"
          onClick={handleAddHallazgo}
        >
          Agregar Hallazgos
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
