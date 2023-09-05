import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import PinfoWEb from "../Pages/InfoWeb/HomeWeb"
import Plogin from "../Pages/Login/Login"
import PsolPpto from "../Pages/Login/SolicitaPpto"
const InfoWeb = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<PinfoWEb />} />
        <Route path="/login" element={<Plogin />} />
        <Route path="/presupuesto" element={<PsolPpto />} />

      </Routes>
    </BrowserRouter>
  );
};

export default InfoWeb;
