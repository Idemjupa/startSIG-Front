import React from "react";
import Header from "../../Components/InfoWeb/Header";
import Footer from "../../Components/InfoWeb/Footer";
import imgBody from "../../assets/sig-body.jpg";
import imgTarjeta01 from "../../assets/iso-9001.jpg";
import imgTarjeta02 from "../../assets/iso-14001.png";
import imgTarjeta03 from "../../assets/iso-45001.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
const HomeWeb = () => {
  return (
    <>
      <Header />
      

      <main className="max-w-screen-xl mx-auto">
        <div>
          <div>
            <img src={imgBody} alt="Imagen Larga" />
          </div>
        </div>
        <div className="mt-10 ">
          <h1 className="text-5xl font-bold">Nuestras Normas</h1>
          <div className="flex justify-around mt-5">
            <div className="tarjeta">
              <div className="imgTarjeta">
                <img src={imgTarjeta01} alt="Imagen Tarjeta" className="object-cover" width="250"/>
              </div>
              <h2 className="font-bold">ISO 9001</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quasi expedita aspernatur commodi a repellendus dicta
                nesciunt explicabo, sint natus repudiandae, hic ea ab cum enim
                labore, doloremque molestiae debitis!
              </p>
              <FaArrowAltCircleRight className="float-right" size="30" />
            </div>
            <div className="tarjeta">
              <div className="imgTarjeta ">
                <img src={imgTarjeta02} alt="Imagen Tarjeta" className="object-cover"/>
              </div>
              <h2 className="font-bold">ISO 14001</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quasi expedita aspernatur commodi a repellendus dicta
                nesciunt explicabo, sint natus repudiandae, hic ea ab cum enim
                labore, doloremque molestiae debitis!
              </p>
              <FaArrowAltCircleRight className="float-right" size="30" />
            </div>
            <div className="tarjeta">
              <div className="imgTarjeta ">
                <img src={imgTarjeta03} alt="Imagen Tarjeta" className="object-cover " width="200" />
              </div>
              <h2 className="font-bold">ISO 45001</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quasi expedita aspernatur commodi a repellendus dicta
                nesciunt explicabo, sint natus repudiandae, hic ea ab cum enim
                labore, doloremque molestiae debitis!
              </p>
              <FaArrowAltCircleRight className="float-right" size="30" />
            </div>
          </div>
        </div>
        <br />
      </main>

      <Footer />
    </>
  );
};

export default HomeWeb;
