import React from "react";
import Header from "../../Components/InfoWeb/Header";
import Footer from "../../Components/InfoWeb/Footer";
import imgBody from "../../assets/servicios/long-consultoria.jpg";
import imgBody2 from "../../assets/servicios/long-consultoria2.jpg";
import imgBody3 from  "../../assets/servicios/shor-consultoria.jpg"


const ServConsultoria = () => {
  return (
    <>
      <Header />
      <main>
        <div className="relative">
          <div className="flex justify-center ">
            <img
              src={imgBody}
              alt="Imagen Larga"
              className="object-cover overflow-hidden"
            />
            <img
              src={imgBody2}
              alt="Imagen Larga"
              className="object-cover overflow-hidden"
            />
            <span className="text-white text-5xl absolute left-5 top-5 drop-shadow-2xl">
              Consultorias
            </span>
          </div>
        </div>
        <h2>Consultoria Emprearial de Negocios</h2>
        <div className="flex justify between py-5">
        
          <div>
            
            <p className="text-justify mr-10">
              En la actualidad, aquella empresa que realmente desea mantenerse
              un el actual mercado marcado por su alta competitividad, tiene la
              obligación de ofrecer servicios y productos que cumplan con las
              necesidades y expectativas de sus clientes. Los Sistemas de
              Gestión tienen como meta mejorar la visión de nuestros clientes
              para con nuestra compañía. Para ello centran su atención en
              mejorar la funcionamiento interno de las organizaciones mediante
              la optimización de sus procesos internos. Estos principios básicos
              de gestión han combinarse con un servicio y producto cada vez más
              exigente para conseguir una mejora en la satisfacción del
              consumidor. CTMA Consultores ayuda a sus clientes a implantar y
              mantener estos Sistemas de Gestión de la Calidad, Medio Ambiente,
              Prevención de Riesgos Laborales, Responsabilidad Social
              Corporativa (UNE-EN ISO 9001, UNE-EN ISO 14001, Reglamento EMAS,
              UNE 13816, UNE-EN ISO 39001, OHSAS 18001, ISO/TS 16949, Q de
              Calidad, Modelo Europeo EFQM, SGE21…)
            </p>
          </div>
          <div>
            <img src={ imgBody3} alt=""  width="7000"/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServConsultoria;
