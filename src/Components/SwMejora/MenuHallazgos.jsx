import { useState } from "react";
// import Header from "./HeaderSWM";
import { Link } from "react-router-dom";
import {
  TiChartPieOutline,
  TiFolderDelete,
  TiClipboard,
  TiGroupOutline,
  TiThermometer,
  TiMediaRecordOutline,
  TiArrowRepeatOutline,
  TiArrowMove,
} from "react-icons/ti";

const MenuHallazgos = () => {
  const [menuSeleccionado, setMenu] = useState(0);

  const handleMenu = (i) => {
    setMenu(i);
  };

  return (
    <>
      <div className="flex">
        <div className="bg-[white] text-gray py-5 min-h-screen pl-10">
          <div className="flex flex-col text-left">
            <h3 className="text-left"> CATALOGOS</h3>
            <span
              className={
                menuSeleccionado === 1
                  ? "font-bold pb-2 pt-2 text-green-500 underline underline-offset-1 bg-green-100 rounded-md flex"
                  : "flex  pb-2 pt-3"
              }
            >
              <TiArrowRepeatOutline size="25" />
              <Link onClick={() => handleMenu(1)} to="swm-procesos">
                <span className="ml-2"> Procesos</span>
              </Link>{" "}
            </span>
            <span
              className={
                menuSeleccionado === 2
                  ? "font-bold pb-2 pt-2 text-green-500 underline underline-offset-1 bg-green-100 rounded-md flex"
                  : "flex  pb-2 pt-2"
              }
            >
              <TiArrowMove size="25" />
              <Link onClick={() => handleMenu(2)} to="swm-criterios">
                <span className="ml-2">Criterios</span>
              </Link>
            </span>
            <span
              className={
                menuSeleccionado === 3
                  ? "font-bold pb-2 pt-2 text-green-500 underline underline-offset-1 bg-green-100 rounded-md flex"
                  : "flex  pb-2 pt-2"
              }
            >
              <TiMediaRecordOutline size="25" />
              <Link onClick={() => handleMenu(3)} to="swm-origenes">
                <span className="ml-2">Origenes</span>
              </Link>
            </span>
            <span
              className={
                menuSeleccionado === 4
                  ? "font-bold pb-2 pt-2 pr-2 text-green-500 underline underline-offset-1 bg-green-100 rounded-md flex"
                  : "flex  pb-2 pt-2 pr-2"
              }
            >
              <TiThermometer size="25" />
              <Link onClick={() => handleMenu(4)} to="swm-niveles">
                <span className="ml-2">Niveles Hallazgos</span>
              </Link>
            </span>
            <span
              className={
                menuSeleccionado === 5
                  ? "font-bold pb-2 pt-2 pr-2 text-green-500 underline underline-offset-1 bg-green-100 rounded-md flex"
                  : "flex  pb-2 pt-2 pr-2"
              }
            >
              <TiGroupOutline size="25" />
              <Link onClick={() => handleMenu(5)} to="swm-responsables">
                <span className="ml-2">Responsables</span>
              </Link>
            </span>
            <br />
            <h3 className="text-left">HALLAZGOS</h3>
            <span
              className={
                menuSeleccionado === 6
                  ? "font-bold pb-2 pt-2 pr-2 text-green-500 underline underline-offset-1 bg-green-100 rounded-md flex"
                  : "flex  pb-2 pt-2 pr-2"
              }
            >
              <TiClipboard size="25" />
              <Link onClick={() => handleMenu(6)} to="swm-hallazgos">
                <span className="ml-2">Gestionar</span>
              </Link>
            </span>
            {/* <br />
            <h3 className="text-left">PRESUPUESTO</h3>
            <span
              className={
                menuSeleccionado === 7
                  ? "font-bold pb-2 pt-2 pr-2 text-green-500 underline underline-offset-1 bg-green-100 rounded-md flex"
                  : "flex  pb-2 pt-2 pr-2"
              }
            >
              <TiChartPieOutline size="25" />
              <Link onClick={() => handleMenu(7)} to="swm-presupuesto">
                <span className="ml-2">Presupuesto</span>
              </Link>
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuHallazgos;
