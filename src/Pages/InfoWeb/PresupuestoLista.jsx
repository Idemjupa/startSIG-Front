import React, { useEffect, useState } from "react";
import Header from "../../Components/SwMejora/HeaderSWM";

const PresupuestoLista = () => {
  const [presupuestos, setPresupuestos] = useState([
    {
      entidad: "",
      email: "",
      celular: "",
      nrotrabajadores: "",
      servicio: "",
      norma: "",
    },
  ]);

  const fetchPresupuestos = () => {
    setPresupuestos(JSON.parse(localStorage.getItem("ppto")));

    // console.log("Vamo a ver", presupuestos);
  };

  useEffect(() => {
    fetchPresupuestos();
  }, []);

  const handleEliminarPresupuesto = () => {
    localStorage.removeItem("ppto");
  };

  return (
    <div>
      <Header />
      <h2>Presupuestos Solicitados</h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Enttidad/Empresa
              </th>
              <th scope="col" className="px-6 py-3">
                Correo electronico
              </th>
              <th scope="col" className="px-6 py-3">
                Celular
              </th>
              <th scope="col" className="px-6 py-3">
                #trab.
              </th>
              <th scope="col" className="px-6 py-3">
                Serv.Solicitado
              </th>
              <th scope="col" className="px-6 py-3">
                Norma
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Marcar</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {presupuestos.map((p,i) => {
              return (
                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {p.entidad}
                  </th>
                  <td className="px-6 py-4">{p.email}</td>
                  <td className="px-6 py-4">{p.celular}</td>
                  <td className="px-6 py-4">{p.nrotrabajadores}</td>
                  <td className="px-6 py-4">{p.servicio}</td>
                  <td className="px-6 py-4">{p.norma}</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Marcar
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={handleEliminarPresupuesto}> Eliminar todo </button>
      </div>
    </div>
  );
};

export default PresupuestoLista;
