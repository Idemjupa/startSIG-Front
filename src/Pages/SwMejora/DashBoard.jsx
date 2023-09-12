import React from "react";
import Header from "../../Components/SwMejora/HeaderSWM";
import chesse from "../../assets/chesse.png"
const DashBoard = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 justify-stretch mt-5">
        <div className="text-center">
          <h3>Estado de Hallazgos</h3>
          <img className="mx-auto "src={chesse} alt="" />
        </div>
        <div className="border-x-4 border-[#db0034] px-5">
          <h3>Ultimos Archivos Cargados</h3>
          <br />
          <ul className="text-left">
            <li>Procedimientos</li>
            <li>Instructivos</li>
            <li>Registros</li>
            <li>Otros Documentos</li>
          </ul>
        </div>
        <div>
          <h3>Ultimos Auditorias realizadas</h3>
          <br />
          <ul className="text-left px-5">
            <li>Programa de Auditoria</li>
            <li>Plan de Auditoria Interna</li>
            <li>Listado de Auditores internos</li>
            <li>Informe de Auditoria Interna</li>
            <li>plan de Auditoria Externa</li>
            <li>Informe de Auditoria Externa</li>
            <li>Revision por la dirección</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
