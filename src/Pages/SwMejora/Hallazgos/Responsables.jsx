import  { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { ResponsableModal } from "./ResponsablesModal";



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
      name: "Apellidos",
      selector: (row) => row.apellidos,
    },
    {
      name: "Nombres",
      selector: (row) => row.nombres,
    },
    {
      name: "Email",
      selector: (row) => row.email,
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

  const fetchUsuarios = () => {
    const nuevo = JSON.parse(localStorage.getItem("usuariosList")) || [];
    setUsuario(nuevo);
    setFilter(nuevo);
  };

  useEffect(() => {
    fetchUsuarios();
  }, [modal]);

  useEffect(() => {
    if (search !== "") {
      const result = usuarios.filter((item) => {
        return item.nombres.toLowerCase().match(search.toLocaleLowerCase());
      });
      setFilter(result);
    } else {
      fetchUsuarios();
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
        localStorage.setItem("usuariosList", JSON.stringify(nuevo));

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
        backgroundColor: "#ccc",
      },
    },
  };

  return (
    <>
      <h2>RESPONSABLES</h2>
      <div className="flex justify-end">
        <button
          className="mt-2 bg-[#5e9efc] text-white w-none p-2 drop-shadow-md"
          onClick={handleAddUsuario}
        >
          Agregar Responsable
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

}

export default Responsables