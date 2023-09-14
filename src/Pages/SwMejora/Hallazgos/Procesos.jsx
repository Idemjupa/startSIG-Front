import React, { useEffect, useState } from "react";
import ProcesosModal from "./ProcesosModal";

const Procesos = () => {
  const [procesos, setProceso] = useState([
    {
      id: "",
      codigo: "",
      proceso: "",
      usrcontrol: "",
      fyhregistro: null,
    },
  ]);
  const fetchProcesos = () => {
    setProceso(JSON.parse(localStorage.getItem("proceso")));
  };

  useEffect(() => {
    fetchProcesos();
  }, []);

  const handleAddProceso = () => {};
  return (
    <>
      <h2>PROCESOS</h2>
      <button className="" onClick={handleAddProceso}>
        {" "}
        Agregar usuraio{" "}
      </button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Código
              </th>
              <th scope="col" className="px-6 py-3">
                Proceso
              </th>
              <th scope="col" className="px-6 py-3">
                Usrcontrol
              </th>
              <th scope="col" className="px-6 py-3">
                fyhRegistro
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Marcar</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {procesos &&
              procesos.map((p, i) => {
                return (
                  <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {p.id}
                    </th>
                    <td className="px-6 py-4">{p.codigo}</td>
                    <td className="px-6 py-4">{p.proceso}</td>
                    <td className="px-6 py-4">{p.usrcontrol}</td>
                    <td className="px-6 py-4">{p.fyhservicio}</td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Editar
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <ProcesosModal />
    </>
  );
};

export default Procesos;
