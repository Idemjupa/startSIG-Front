import React from "react";
import Header from "../Components/SwMejora/HeaderSWM";
import MenuHallazgos from "../Components/SwMejora/MenuHallazgos";
import { Routes, Route } from "react-router-dom";
import Procesos from "../Pages/SwMejora/Hallazgos/Procesos";
import Criterios from "../Pages/SwMejora/Hallazgos/Criterios";
import Origenes from "../Pages/SwMejora/Hallazgos/Origenes";
import Niveles from "../Pages/SwMejora/Hallazgos/Niveles";
import usuarios from "../Pages/SwMejora/Hallazgos/usuarios";


const SwMejora = () => {
  return (
    <>
      <Header />
      <div className="flex ">
        <div>
          <MenuHallazgos />
        </div>
        <div className="bg-[#5e9efc] w-full pt-2" >
          <Routes>
            <Route path="swm-procesos" element={<Procesos />} />
            <Route path="swm-criterios" element={<Criterios />} />
            <Route path="swm-origenes" element={<Origenes />} />
            <Route path="swm-niveles" element={<Niveles />} />
            <Route path="swm-usuarios" element={<usuarios />} />

          </Routes>
        </div>
      </div>
    </>
  );
};

export default SwMejora;