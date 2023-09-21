import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import NivelesModal from "./NivelesModal";

const Niveles = () => {
  const [niveles, setNivel] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [idNivel, setIdNivel] = useState({});

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Nivel",
      selector: (row) => row.nivel,
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

  const fetchNiveles = () => {
    const nuevo = JSON.parse(localStorage.getItem("nivelesList")) || [];
    setNivel(nuevo);
    setFilter(nuevo);
  };

  useEffect(() => {
    fetchNiveles();
  }, [modal]);

  useEffect(() => {
    if (search !== "") {
      const result = niveles.filter((item) => {
        return item.nivel.toLowerCase().match(search.toLocaleLowerCase());
      });
      setFilter(result);
    } else {
      fetchNiveles();
    }
  }, [search]);

  const handleEdit = (row) => {
    setModal(true);
    setIdNivel(row);
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
        const nuevo = niveles.filter((row) => row.id !== value);
        setNivel(nuevo);
        setFilter(nuevo);
        localStorage.setItem("nivelesList", JSON.stringify(nuevo));

        Swal.fire("Eliminar!", "Tu archivo ha sido eliminado .", "Eliminado");
      }
    });
  };

  const handleAddNivel = () => {
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
      <h2>NIVELES</h2>
      <div className="flex justify-end">
        <button
          className="mt-2 bg-[#5e9efc] text-white w-none p-2 drop-shadow-md"
          onClick={handleAddNivel}
        >
          Agregar Nivel
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
          <NivelesModal
            modal={modal}
            setModal={setModal}
            idNivel={idNivel}
            setIdNivel={setIdNivel}
          />
        )}
      </div>
    </>
  );
};

export default Niveles;
