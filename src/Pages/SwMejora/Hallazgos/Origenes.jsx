import React, { useState, useEffect } from "react";
import OrigenesModal from "./OrigenesModal.jsx";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

const Origenes = () => {
  const [origenes, setOrigen] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [idOrigen, setIdOrigen] = useState({});

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Codigo",
      selector: (row) => row.origen,
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

  const fetchOrigenes = () => {
    const nuevo = JSON.parse(localStorage.getItem("origenesList")) || [];
    setOrigen(nuevo);
    setFilter(nuevo);
  };

  useEffect(() => {
    fetchOrigenes();
  }, [modal]);

  useEffect(() => {
    if (search !== "") {
      const result = origenes.filter((item) => {
        return item.origen.toLowerCase().match(search.toLocaleLowerCase());
      });
      setFilter(result);
    } else {
      fetchOrigenes();
    }
  }, [search]);

  const handleEdit = (row) => {
    setModal(true);
    setIdOrigen(row);
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
        const nuevo = origenes.filter((row) => row.id !== value);
        setOrigen(nuevo);
        setFilter(nuevo);
        localStorage.setItem("origenesList", JSON.stringify(nuevo));

        Swal.fire("Eliminar!", "Tu archivo ha sido eliminado .", "Eliminado");
      }
    });
  };

  const handleAddOrigen = () => {
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
      <h2>ORIGENES</h2>
      <div className="flex justify-end">
        <button
          className="mt-2 bg-[#5e9efc] text-white w-none p-2 drop-shadow-md"
          onClick={handleAddOrigen}
        >
          Agregar Origen
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
          <OrigenesModal
            modal={modal}
            setModal={setModal}
            idOrigen={idOrigen}
            setIdOrigen={setIdOrigen}
          />
        )}
      </div>
    </>
  );
};

export default Origenes;
