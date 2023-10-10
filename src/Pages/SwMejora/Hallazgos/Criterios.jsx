import { useState, useEffect } from "react";
import CriteriosModal from "./CriteriosModal";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import {
  TiZoomOutline,
  TiEdit,
  TiDelete,
} from "react-icons/ti";

const Criterios = () => {
  const [criterios, setCriterio] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [idCriterio, setIdCriterio] = useState({});

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Codigo",
      selector: (row) => row.criterio,
      sortable: true,
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

  const fetchCriterios = () => {
    const nuevo = JSON.parse(localStorage.getItem("criteriosList")) || [];
    setCriterio(nuevo);
    setFilter(nuevo);
  };

  useEffect(() => {
    fetchCriterios();
  }, [modal]);

  useEffect(() => {
    if (search !== "") {
      const result = criterios.filter((item) => {
        return item.criterio.toLowerCase().match(search.toLocaleLowerCase());
      });
      setFilter(result);
    } else {
      fetchCriterios();
    }
  }, [search]);

  const handleEdit = (row) => {
    setModal(true);
    setIdCriterio(row);
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
        const nuevo = criterios.filter((row) => row.id !== value);
        setCriterio(nuevo);
        setFilter(nuevo);
        localStorage.setItem("criteriosList", JSON.stringify(nuevo));

        Swal.fire("Eliminar!", "Tu archivo ha sido eliminado .", "Eliminado");
      }
    });
  };

  const handleAddCriterio = () => {
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

      <h2>CRITERIOS</h2>

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
                onClick={handleAddCriterio}
              >
                Agregar Criterio
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
          <CriteriosModal
            modal={modal}
            setModal={setModal}
            idCriterio={idCriterio}
            setIdCriterio={setIdCriterio}
          />
        )}
      </div>
    </>
  );
};

export default Criterios;
