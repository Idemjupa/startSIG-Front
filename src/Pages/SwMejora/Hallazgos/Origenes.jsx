import React, { useState, useEffect } from "react";
import OrigenesModal from "./OrigenesModal.jsx";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { TiZoomOutline, TiEdit, TiDelete } from "react-icons/ti";
import {
  fetchOrigen,
  fetchOrigenDel,
} from "../../../Services/swMejora/Origen";

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
      name: "Origen",
      selector: (row) => row.desorigen,
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
    fetchOrigen().then((nuevo) => {
      setOrigen(nuevo);
      setFilter(nuevo);
    });
  }, [modal]);

  useEffect(() => {
    if (search !== "") {
      const result = origenes.filter((item) => {
        return item.desorigen.toLowerCase().match(search.toLocaleLowerCase());
      });
      setFilter(result);
    } else {
      fetchOrigen().then((nuevo) => {
        setOrigen(nuevo);
        setFilter(nuevo);
      });
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
        const form = { id: value };
        fetchOrigenDel(form);

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
        backgroundColor: "#fff5ee",
        color: "gray",
      },
    },
  };

  return (
    <>
      <h2>ORIGENES</h2>

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
              onClick={handleAddOrigen}
            >
              Agregar Origen
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
