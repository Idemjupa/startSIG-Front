import React, { useState } from "react";

const usePresupuesto = () => {
  const [presupuesto, setPresupuesto] = useState([
    JSON.parse(localStorage.getItem("ppto")) || {},
  ]);
  const addPresupuesto = (ppto) => {
    const nuevo = [...presupuesto, ppto];
    setPresupuesto(nuevo);
    localStorage.setItem("ppto", JSON.stringify(nuevo));
  };

  return { presupuesto, addPresupuesto };
};

export default usePresupuesto;
