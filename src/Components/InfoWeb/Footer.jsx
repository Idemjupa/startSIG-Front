import React from "react";
import officeMap from "../../assets/office-map.png";
import imgLogo from "../../assets/logoStartSIG.png";
import { FaFacebookMessenger, FaWhatsapp, FaTelegramPlane, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#142338] text-white flex justify-around py-12 max-w-screen-xl mx-auto	">
      <div>
        <div>
          <img src={imgLogo} alt="Logo" width="200" />
        </div>
        <div>
          <ul className="flex justify-around p-3">
            <li><FaFacebookMessenger size="30" /></li>
            <li>
              <FaWhatsapp size="30"/>
            </li>
            <li>
              <FaTelegramPlane  size="30"/>
            </li>
            <li><FaYoutube size="30"/></li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="font-extrabold">Servicios</h2>
        <ul className="text-left">
          <li>Consultoria</li>
          <li>Auditorias Prepartorias</li>
          <li>Software de Mejora Continua</li>
        </ul>
      </div>
      <div>
        <h2 className="font-extrabold">Contactanos</h2>
        <div className="flex justify-center my-2">
          <img src={officeMap} alt="" width="150"/>
        </div>
        <div>
          <ul className="text-left">
            <li>Dirección: Calle Siglo 392</li>
            <li>Telefonos: (+51) 954895599</li>
            <li>Correo: consultas@startsig.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
