import React from "react";
import Header from "../../Components/InfoWeb/Header";
import Footer from "../../Components/InfoWeb/Footer";
import imgBody from "../../assets/sig-body.jpg";
import imgTarjeta01 from "../../assets/iso-9001.jpg";
import imgTarjeta02 from "../../assets/iso-14001.png";
import imgTarjeta03 from "../../assets/iso-45001.png";
const HomeWeb = () => {
  return (
    <>
      <Header />
      <hr />

      <main >
        <div>
          <div>
            <img src={imgBody} alt="Imagen Larga" />
          </div>
        </div>
        <div>
          <div className="flex justify-around mt-10">
            <div className="tarjeta">
              <div className="imgTarjeta"><img  src={imgTarjeta01} alt="Imagen Tarjeta" /></div>
              <h2 className="font-bold">ISO 9001</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quasi expedita aspernatur commodi a repellendus dicta
                nesciunt explicabo, sint natus repudiandae, hic ea ab cum enim
                labore, doloremque molestiae debitis!
              </p>
            </div>
            <div className="tarjeta">
              <div className="imgTarjeta"><img  src={imgTarjeta02} alt="Imagen Tarjeta" /></div>
              <h2 className="font-bold">ISO 9001</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quasi expedita aspernatur commodi a repellendus dicta
                nesciunt explicabo, sint natus repudiandae, hic ea ab cum enim
                labore, doloremque molestiae debitis!
              </p>
            </div>
            <div  className="tarjeta">
              <div className="imgTarjeta"><img    src={imgTarjeta03} alt="Imagen Tarjeta" /></div>
              <h2 className="font-bold">ISO 9001</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quasi expedita aspernatur commodi a repellendus dicta
                nesciunt explicabo, sint natus repudiandae, hic ea ab cum enim
                labore, doloremque molestiae debitis!
              </p>
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
