import React, { useEffect, useState } from "react";

const usePresupuesto = () => {
  const [envioDatos, setEnvioDatos] = useState([]);
  
  useEffect(() => {
    const datosRecuperados = localStorage.getItem("ppto");
    if (datosRecuperados) {
      setEnvioDatos(JSON.parse(localStorage.getItem("ppto")));
    }
  }, []);

  const addPresupuesto = (ppto) => {
    setEnvioDatos((prev) => [...prev, ppto]);
  };

  useEffect(() => {
    if (envioDatos.length !== 0) {
      localStorage.setItem("ppto", JSON.stringify(envioDatos));
    }
  }, [envioDatos]);

  return { addPresupuesto };
};

export default usePresupuesto;
