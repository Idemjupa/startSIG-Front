import React, { useEffect, useState } from "react";

const usePresupuesto = () => {
  // const [presupuesto, setPresupuesto] = useState([
  //   JSON.parse(localStorage.getItem("ppto")) || {},
  // ]);
  const [presupuesto, setPresupuesto] = useState([]);

  useEffect(() => {
    // let datosExtraidos = localStorage.getItem("ppto");
    // console.log("Resetee");
    // if (datosExtraidos === null) {
    //   setPresupuesto([]);
    // } else {
    //   setPresupuesto(JSON.parse(datosExtraidos));
    // }
  }, []);

  console.log("Aqui", presupuesto);

  const addPresupuesto = (ppto) => {
    if (presupuesto.length === 0) {
      console.log("Ingrese !");
      setPresupuesto(prevent=>[
        ...prevent, ppto
      ]);
    }

    localStorage.setItem("ppto", JSON.stringify(presupuesto));
    console.log("Otro", presupuesto);
  };
  // presupuesto
  return { addPresupuesto };
};

export default usePresupuesto;
