import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PinfoWEb from "../Pages/InfoWeb/HomeWeb";
import Plogin from "../Pages/Login/Login";
import PsolPpto from "../Pages/Login/SolicitaPpto";
import ServAuditoria from "../Pages/InfoWeb/ServAuditoria";
import ServConsultoria from "../Pages/InfoWeb/ServConsultoria";
import ServSwMejora from "../Pages/InfoWeb/ServSwMejora";
import CerISO14001 from "../Pages/InfoWeb/CerISO14001";
import CerISO45001 from "../Pages/InfoWeb/CerISO45001";
import CerISO9001 from "../Pages/InfoWeb/CerISO9001";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Pages/SwMejora/DashBoard";
import PresupuestoLista from "../Pages/InfoWeb/PresupuestoLista";


const InfoWeb = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<PinfoWEb />} />
        <Route path="/login" element={<Plogin />} />
        <Route path="/presupuesto" element={<PsolPpto />} />
        <Route path="/serv-consultoria" element={<ServConsultoria />} />
        <Route path="/serv-auditoria" element={<ServAuditoria />} />
        <Route path="/serv-swmejora" element={<ServSwMejora />} />

        <Route path="/cer-14001" element={<CerISO14001 />} />
        <Route path="/cer-45001" element={<CerISO45001 />} />
        <Route path="/cer-9001" element={<CerISO9001 />} />
        <Route path ="/presupuesto-lista" element={<PresupuestoLista />}/>
        <Route element={<PrivateRoutes />}>
          <Route path="/swm-dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default InfoWeb;
