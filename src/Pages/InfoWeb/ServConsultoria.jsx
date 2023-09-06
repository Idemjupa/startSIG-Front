import React from "react";
import Header from "../../Components/InfoWeb/Header";
import Footer from "../../Components/InfoWeb/Footer";
import imgBody from "../../assets/servicios/long-consultoria.jpg"
import imgBody2 from "../../assets/servicios/long-consultoria2.jpg"
const ServConsultoria = () => {
  return (
    <>
      <Header />
      <main>
        <div className="relative" >
          <div className="flex justify-center " >
            <img src={imgBody} alt="Imagen Larga" className="object-cover overflow-hidden" />
            <img src={imgBody2} alt="Imagen Larga"  className="object-cover overflow-hidden" />
            <span className="text-white text-5xl absolute left-5 top-5 drop-shadow-2xl">Consultorias</span>
          </div>
        </div>
        <div>
          <div>
            <h2>ventajas tiene la certificación ISO 45001</h2>
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServConsultoria;
