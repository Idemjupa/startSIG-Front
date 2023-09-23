import Header from "../Components/SwMejora/HeaderSWM";
import MenuHallazgos from "../Components/SwMejora/MenuHallazgos";
import { Routes, Route } from "react-router-dom";
import Procesos from "../Pages/SwMejora/Hallazgos/Procesos";
import Criterios from "../Pages/SwMejora/Hallazgos/Criterios";
import Origenes from "../Pages/SwMejora/Hallazgos/Origenes";
import Niveles from "../Pages/SwMejora/Hallazgos/Niveles";

import Hallazgos from "../Pages/SwMejora/Hallazgos/Hallazgos";
import Reportes from "../Pages/SwMejora/Hallazgos/Reportes";
import Responsables from "../Pages/SwMejora/Hallazgos/Responsables";
import PresupuestoLista from "../Pages/InfoWeb/PresupuestoLista";

const SwMejora = () => {
  return (
    <>
      <Header />
      <div className="flex ">
        <div className="w-64">
          <MenuHallazgos />
        </div>
        <div className="w-full pt-2 relative pr-10">            
          <Routes>       
            <Route path="/" element={<h2>Selecciona un Opcion</h2>}/>
            <Route path="swm-procesos" element={<Procesos />} />
            <Route path="swm-criterios" element={<Criterios />} />
            <Route path="swm-origenes" element={<Origenes />} />
            <Route path="swm-niveles" element={<Niveles />} />
            <Route path="swm-responsables" element={<Responsables />} />
            <Route path="swm-hallazgos" element={<Hallazgos />} />
            <Route path="swm-reportes" element={<Reportes />} />            
            <Route path="swm-presupuesto" element={<PresupuestoLista />} />            
          </Routes>          
        </div>
      </div>
    </>
  );
};

export default SwMejora;
