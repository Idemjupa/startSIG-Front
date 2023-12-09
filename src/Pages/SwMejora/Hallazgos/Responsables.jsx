import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { ResponsableModal } from "./ResponsablesModal";
import { TiZoomOutline, TiEdit, TiDelete } from "react-icons/ti";
import {
  fetchUsuario,
  fetchUsuarioDel,
} from "../../../Services/swMejora/Usuario";

const Responsables = () => {
  const [usuarios, setUsuario] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [idUsuario, setIdUsuario] = useState({});

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Apellidos y Nombres",
      selector: (row) => row.apenom,
    },
    {
      name: "Login",
      selector: (row) => row.login,
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
    fetchUsuario().then((nuevo) => {
      setUsuario(nuevo);
      setFilter(nuevo);
    });
  }, [modal]);

  useEffect(() => {
    if (search !== "") {
      const result = usuarios.filter((item) => {
        return item.apenom.toLowerCase().match(search.toLocaleLowerCase());
      });
      setFilter(result);
    } else {
      fetchUsuario().then((nuevo) => {
        setUsuario(nuevo);
        setFilter(nuevo);
      });
    }
  }, [search]);

  const handleEdit = (row) => {
    setModal(true);
    setIdUsuario(row);
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
        const nuevo = usuarios.filter((row) => row.id !== value);
        setUsuario(nuevo);
        setFilter(nuevo);
        // localStorage.setItem("usuariosList", JSON.stringify(nuevo));
        const form = { id: value };
        fetchUsuarioDel(form);
        Swal.fire("Eliminar!", "Tu registro ha sido eliminado .", "Eliminado");
      }
    });
  };

  const handleAddUsuario = () => {
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
      <h2>RESPONSABLES</h2>
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
                onClick={handleAddUsuario}
              >
                Agregar Usuario Responsable
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
          <ResponsableModal
            modal={modal}
            setModal={setModal}
            idUsuario={idUsuario}
            setIdUsuario={setIdUsuario}
          />
        )}
      </div>
    </>
  );
};

export default Responsables;
